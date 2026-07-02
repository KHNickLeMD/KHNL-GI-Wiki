/*
 * KHNL GI Wiki — Social layer, Step 4: signup, verification & login.
 * Plan: ACCOUNTS-SOCIAL-PLAN.md §2 (sessions), §4.1 (auth), §4.9 (resilience),
 * §4.10 (error tracking), §7 Step 4.
 *
 * Self-contained vanilla-JS drop-in, same style as feedback-widget.js. No
 * PocketBase SDK, no framework, no build step — raw fetch only. It injects its
 * own styles, a top-right "Sign in" button (Step 5 replaces it with the avatar
 * bubble), and a login/signup modal.
 *
 * SESSIONS (§2): the auth token NEVER touches JS. Login/refresh responses set an
 * httpOnly cookie server-side (pb_hooks/auth-cookie.pb.js); every call here uses
 * fetch(..., {credentials:"include"}) and the server maps the cookie back to a
 * token. The token field in auth responses is deliberately ignored. So there is
 * no AuthStore at all on the client — strictly stronger than "in-memory token".
 *
 * HOW TO USE (wiki repo's index.html — NOT this website folder):
 *   1. Set CONFIG below (TURNSTILE_SITE_KEY = same public site key as the
 *      feedback widget; API_BASE).
 *   2. Add before </body>, AFTER feedback-widget.js (so autofill can hook in):
 *        <script src="website_files/scripts/social-layer.js" defer></script>
 *
 * Exposes window.KHNL:
 *   KHNL.auth.user            -> current user record or null
 *   KHNL.auth.onChange(fn)    -> subscribe to login/logout (fires immediately)
 *   KHNL.auth.login/logout/signup/requestPasswordReset/resendVerification
 *   KHNL.api(path, opts)      -> credentialed JSON fetch helper
 *   KHNL.ui.withState(el, asyncFn, {render, emptyMsg})  -> §4.9 helper
 *   KHNL.ui.openAuth()        -> open the sign-in modal (Step 5 menu reuses it)
 *   KHNL.debug.crash()        -> forced exception (Step 4 acceptance test)
 */
(function () {
  "use strict";

  // ----------------------------- CONFIG -----------------------------
  var CONFIG = {
    API_BASE: "https://api.khnicklemd.com",
    TURNSTILE_SITE_KEY: "0x4AAAAAADsnUhGCQy6CF38J", // public site key (same widget as feedback)
    APP_VERSION: "step4-2026-07-01",
  };

  // ======================================================================
  // §4.10 — ERROR TRACKING + §4.9 GLOBAL FALLBACK
  // Registered FIRST, before anything else can throw, and wrapped so a bug in
  // the reporter itself can never break the static wiki.
  // ======================================================================
  var errSeen = {};   // dedupe: message -> true
  var errSent = 0;    // throttle: max per page load
  var ERR_MAX = 5;

  function currentSlug() {
    if (window.__wikiCurrentSlug) return String(window.__wikiCurrentSlug);
    return (location.hash || location.pathname || "/").replace(/^#\/?/, "").slice(0, 480);
  }

  function reportError(message, stack) {
    try {
      message = String(message || "unknown error").slice(0, 950);
      if (errSeen[message] || errSent >= ERR_MAX) return; // dedupe + flood guard
      errSeen[message] = true;
      errSent++;
      fetch(CONFIG.API_BASE + "/api/collections/client_errors/records", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include", // lets rules/hooks see who it was, if logged in
        body: JSON.stringify({
          message: message,
          stack: String(stack || "").slice(0, 7900),
          pageSlug: currentSlug(),
          user: state.user ? state.user.id : "",
          userAgent: (navigator.userAgent || "").slice(0, 580),
          appVersion: CONFIG.APP_VERSION,
        }),
      }).catch(function () {}); // fire-and-forget; never throw from the reporter
    } catch (_) {}
  }

  var fallbackShown = false;
  function showFallback() {
    if (fallbackShown) return;
    fallbackShown = true;
    try {
      var panel = document.createElement("div");
      panel.className = "khnl-sl-fallback";
      panel.innerHTML =
        '<strong>We’ve hit an error</strong> — please try again.' +
        '<div class="khnl-sl-fallback-actions">' +
          '<button type="button" id="khnl-sl-reset">Reset</button>' +
          '<button type="button" id="khnl-sl-dismiss">Dismiss</button>' +
        "</div>";
      document.body.appendChild(panel);
      panel.querySelector("#khnl-sl-reset").addEventListener("click", function () { location.reload(); });
      panel.querySelector("#khnl-sl-dismiss").addEventListener("click", function () {
        panel.remove();
        fallbackShown = false;
      });
    } catch (_) {}
  }

  function onGlobalError(message, stack) {
    reportError(message, stack);
    showFallback();
  }

  window.addEventListener("error", function (ev) {
    onGlobalError(ev.message || (ev.error && ev.error.message), ev.error && ev.error.stack);
  });
  window.addEventListener("unhandledrejection", function (ev) {
    var r = ev.reason;
    onGlobalError((r && r.message) || String(r), r && r.stack);
  });

  // ----------------------------- STYLES -----------------------------
  var CSS = "" +
    // top-right auth chip (placeholder position — Step 5 turns it into the avatar bubble)
    ".khnl-sl-chip{position:fixed;top:14px;right:16px;z-index:2147482900;display:flex;align-items:center;gap:8px;" +
      "font:13px/1.3 -apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif}" +
    ".khnl-sl-signin{padding:7px 14px;border-radius:18px;border:none;cursor:pointer;font:inherit;font-weight:600;" +
      "background:#2f6b3f;color:#fff;box-shadow:0 2px 8px rgba(0,0,0,.22)}" +
    ".khnl-sl-signin:hover{background:#3a824d}" +
    ".khnl-sl-me{width:36px;height:36px;border-radius:50%;border:none;cursor:pointer;color:#fff;font-weight:700;" +
      "font:inherit;font-weight:700;box-shadow:0 2px 8px rgba(0,0,0,.22)}" +
    ".khnl-sl-menu{position:fixed;top:56px;right:16px;z-index:2147482901;background:#fff;color:#1a1a1a;border-radius:10px;" +
      "box-shadow:0 8px 30px rgba(0,0,0,.3);padding:8px 0;min-width:210px;" +
      "font:13.5px/1.4 -apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif}" +
    ".khnl-sl-menu .who{padding:8px 14px;border-bottom:1px solid #eee;color:#444}" +
    ".khnl-sl-menu .who b{display:block}" +
    ".khnl-sl-menu button{display:block;width:100%;text-align:left;padding:8px 14px;border:none;background:none;" +
      "cursor:pointer;font:inherit}" +
    ".khnl-sl-menu button:hover{background:#f3f6f3}" +
    ".khnl-sl-verify{padding:8px 14px;background:#fff8e1;color:#7a5c00;font-size:12px;border-bottom:1px solid #eee}" +
    ".khnl-sl-verify a{color:#7a5c00;font-weight:600;cursor:pointer;text-decoration:underline}" +
    // modal (reuses the feedback widget's visual language)
    ".khnl-sl-overlay{position:fixed;inset:0;background:rgba(0,0,0,.45);z-index:2147483002;display:flex;" +
      "align-items:center;justify-content:center;padding:20px}" +
    ".khnl-sl-card{position:relative;background:#fff;color:#1a1a1a;width:360px;max-width:calc(100vw - 40px);" +
      "max-height:calc(100vh - 40px);overflow:auto;border-radius:12px;box-shadow:0 10px 40px rgba(0,0,0,.35);" +
      "padding:18px 18px 16px;font:14px/1.45 -apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif}" +
    ".khnl-sl-card h3{margin:0 0 2px;font-size:17px}" +
    ".khnl-sl-sub{margin:0 0 12px;color:#666;font-size:12.5px}" +
    ".khnl-sl-tabs{display:flex;gap:6px;margin:0 0 14px}" +
    ".khnl-sl-tab{flex:1;padding:7px 0;border:1px solid #ccc;background:#f7f7f7;border-radius:8px;cursor:pointer;" +
      "font:inherit;font-weight:600;color:#555}" +
    ".khnl-sl-tab.on{background:#2f6b3f;border-color:#2f6b3f;color:#fff}" +
    ".khnl-sl-row{margin:0 0 10px}" +
    ".khnl-sl-row label{display:block;font-weight:600;margin:0 0 4px;font-size:12.5px}" +
    ".khnl-sl-row input{width:100%;box-sizing:border-box;padding:8px 9px;border:1px solid #ccc;border-radius:7px;" +
      "font:inherit;background:#fff}" +
    ".khnl-sl-row input:focus{outline:none;border-color:#2f6b3f;box-shadow:0 0 0 2px rgba(47,107,63,.18)}" +
    ".khnl-sl-err{color:#b00020;font-size:11.5px;margin-top:3px;display:none}" +
    ".khnl-sl-row.bad input{border-color:#b00020}" +
    ".khnl-sl-row.bad .khnl-sl-err{display:block}" +
    ".khnl-sl-formerr{color:#b00020;font-size:12.5px;margin:8px 0 0;display:none}" +
    ".khnl-sl-actions{display:flex;gap:8px;justify-content:flex-end;align-items:center;margin-top:10px}" +
    ".khnl-sl-btn{padding:8px 14px;border-radius:8px;border:none;cursor:pointer;font:inherit;font-weight:600}" +
    ".khnl-sl-btn.primary{background:#2f6b3f;color:#fff}" +
    ".khnl-sl-btn.primary:hover{background:#3a824d}" +
    ".khnl-sl-btn.primary[disabled]{opacity:.6;cursor:default}" +
    ".khnl-sl-btn.ghost{background:transparent;color:#555}" +
    ".khnl-sl-link{background:none;border:none;padding:0;color:#2f6b3f;cursor:pointer;font:inherit;font-size:12.5px;" +
      "text-decoration:underline}" +
    ".khnl-sl-ts{margin:4px 0 10px;min-height:65px}" +
    ".khnl-sl-done{text-align:center;padding:18px 4px}" +
    ".khnl-sl-done .ok{font-size:34px;color:#1a7f37;line-height:1}" +
    ".khnl-sl-x{position:absolute;top:10px;right:12px;border:none;background:none;font-size:20px;cursor:pointer;color:#888}" +
    // §4.9 shared async-state helper: skeleton / error / empty
    "@keyframes khnl-shimmer{0%{background-position:-320px 0}100%{background-position:320px 0}}" +
    ".khnl-skel{border-radius:6px;height:14px;margin:6px 0;" +
      "background:linear-gradient(90deg,#eee 25%,#e0e0e0 37%,#eee 63%);background-size:640px 100%;" +
      "animation:khnl-shimmer 1.2s linear infinite}" +
    ".khnl-state-err{color:#b00020;font-size:13px;padding:8px 0}" +
    ".khnl-state-err button{margin-left:8px;padding:4px 10px;border-radius:6px;border:1px solid #b00020;" +
      "background:#fff;color:#b00020;cursor:pointer;font:inherit;font-size:12px}" +
    ".khnl-state-empty{color:#777;font-size:13px;padding:8px 0}" +
    // §4.9 global fallback panel
    ".khnl-sl-fallback{position:fixed;left:50%;bottom:24px;transform:translateX(-50%);z-index:2147483003;" +
      "background:#fff;color:#1a1a1a;border:1px solid #e5c1c5;border-left:4px solid #b00020;border-radius:10px;" +
      "box-shadow:0 8px 30px rgba(0,0,0,.3);padding:12px 16px;max-width:calc(100vw - 40px);" +
      "font:13.5px/1.45 -apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif}" +
    ".khnl-sl-fallback-actions{margin-top:8px;display:flex;gap:8px}" +
    ".khnl-sl-fallback-actions button{padding:5px 12px;border-radius:7px;cursor:pointer;font:inherit;font-weight:600;" +
      "border:1px solid #ccc;background:#f7f7f7}" +
    ".khnl-sl-fallback-actions #khnl-sl-reset{background:#2f6b3f;border-color:#2f6b3f;color:#fff}";

  // ----------------------------- HELPERS -----------------------------
  function el(html) { var t = document.createElement("template"); t.innerHTML = html.trim(); return t.content.firstChild; }
  function inject(tag, attrs, parent) {
    var n = document.createElement(tag);
    for (var k in attrs) n.setAttribute(k, attrs[k]);
    (parent || document.head).appendChild(n);
    return n;
  }
  function validEmail(s) { return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s); }

  // Credentialed JSON fetch. Rejects with the parsed PocketBase error object
  // ({message, data:{field:{message}}}) so callers can map field errors inline.
  function api(path, opts) {
    opts = opts || {};
    var init = {
      method: opts.method || "GET",
      credentials: "include", // the httpOnly session cookie IS the auth
      headers: {},
    };
    if (opts.body !== undefined) {
      init.headers["Content-Type"] = "application/json";
      init.body = JSON.stringify(opts.body);
    }
    return fetch(CONFIG.API_BASE + path, init).then(function (r) {
      if (r.status === 204) return { ok: r.ok, status: r.status, json: null };
      return r.json().catch(function () { return {}; }).then(function (j) {
        if (!r.ok) { j = j || {}; j.status = r.status; throw j; }
        return j;
      });
    });
  }

  // ----------------------------- AUTH STATE -----------------------------
  var state = { user: null, checked: false };
  var listeners = [];

  function setUser(u) {
    state.user = u || null;
    state.checked = true;
    // Step 4 plan item: feedback autofill for logged-in users (the "one-liner").
    try {
      if (window.FEEDBACK && window.FEEDBACK.prefill) {
        window.FEEDBACK.prefill(state.user
          ? { name: state.user.displayName || state.user.username || "", email: state.user.email || "" }
          : { name: "", email: "" });
      }
    } catch (_) {}
    listeners.forEach(function (fn) { try { fn(state.user); } catch (_) {} });
    renderChip();
  }

  var auth = {
    get user() { return state.user; },
    onChange: function (fn) { listeners.push(fn); if (state.checked) try { fn(state.user); } catch (_) {} },

    // Re-hydrate the session on page load: the server reads the httpOnly cookie
    // and, if valid, rotates it + returns the account record. 401/404 = logged out.
    refresh: function () {
      return api("/api/collections/users/auth-refresh", { method: "POST" })
        .then(function (j) { setUser(j && j.record); return state.user; })
        .catch(function () { setUser(null); return null; });
    },

    login: function (identity, password) {
      return api("/api/collections/users/auth-with-password", {
        method: "POST",
        body: { identity: identity, password: password },
      }).then(function (j) {
        // NOTE: j.token is intentionally IGNORED — the session lives in the
        // httpOnly cookie the server just set. No token ever stored in JS.
        setUser(j && j.record);
        return state.user;
      });
    },

    signup: function (fields, turnstileToken) {
      var q = "?turnstile=" + encodeURIComponent(turnstileToken || "");
      return api("/api/collections/users/records" + q, {
        method: "POST",
        body: {
          email: fields.email,
          username: fields.username,
          displayName: fields.displayName || "",
          password: fields.password,
          passwordConfirm: fields.passwordConfirm,
          emailVisibility: false,
        },
      }).then(function () {
        // PocketBase does NOT auto-send the verification link — request it.
        return api("/api/collections/users/request-verification", {
          method: "POST",
          body: { email: fields.email },
        });
      });
    },

    resendVerification: function (email) {
      return api("/api/collections/users/request-verification", { method: "POST", body: { email: email } });
    },

    requestPasswordReset: function (email) {
      return api("/api/collections/users/request-password-reset", { method: "POST", body: { email: email } });
    },

    logout: function () {
      return api("/api/khnl/logout", { method: "POST" })
        .catch(function () {}) // even if the call fails, drop local state
        .then(function () { setUser(null); });
    },
  };

  // ----------------------------- §4.9 withState -----------------------------
  // One shared helper for every async render site (plan's "ponytail" note):
  // skeleton while pending, error + Retry on reject, empty state on [], content
  // otherwise. Steps 5–10 reuse this for notes/bookmarks/friends/etc.
  function withState(containerEl, asyncFn, opts) {
    opts = opts || {};
    function run() {
      containerEl.innerHTML =
        '<div class="khnl-skel" style="width:82%"></div>' +
        '<div class="khnl-skel" style="width:64%"></div>' +
        '<div class="khnl-skel" style="width:73%"></div>';
      Promise.resolve()
        .then(asyncFn)
        .then(function (data) {
          if (Array.isArray(data) && data.length === 0) {
            containerEl.innerHTML = '<div class="khnl-state-empty">' + (opts.emptyMsg || "Nothing here yet.") + "</div>";
            return;
          }
          containerEl.innerHTML = "";
          if (opts.render) opts.render(containerEl, data);
        })
        .catch(function (err) {
          containerEl.innerHTML =
            '<div class="khnl-state-err">' +
            ((err && err.message) || "Something went wrong.") +
            "<button type=\"button\">Retry</button></div>";
          containerEl.querySelector("button").addEventListener("click", run);
          reportError("withState: " + ((err && err.message) || String(err)), err && err.stack);
        });
    }
    run();
    return { reload: run };
  }

  // ----------------------------- TURNSTILE -----------------------------
  var tsReady = false;
  function loadTurnstile(cb) {
    if (tsReady && window.turnstile) return cb();
    if (!document.getElementById("khnl-ts-script")) {
      inject("script", {
        id: "khnl-ts-script",
        src: "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit",
        async: "", defer: "",
      });
    }
    var poll = setInterval(function () { if (window.turnstile) { clearInterval(poll); tsReady = true; cb(); } }, 100);
  }

  // ----------------------------- AUTH MODAL -----------------------------
  var overlay = null, tsWidgetId = null;

  function closeModal() {
    if (!overlay) return;
    document.removeEventListener("keydown", escClose);
    overlay.remove();
    overlay = null;
    tsWidgetId = null;
  }
  function escClose(e) { if (e.key === "Escape") closeModal(); }

  function setBad(rowId, on, msg) {
    var row = overlay.querySelector(rowId);
    if (!row) return;
    row.classList.toggle("bad", !!on);
    if (on && msg) { var e2 = row.querySelector(".khnl-sl-err"); if (e2) e2.textContent = msg; }
  }

  // Map PocketBase per-field errors ({data:{email:{message}}}) straight onto the
  // form (plan §4.9: don't invent a validation layer), keep input, re-enable submit.
  function applyServerErrors(err, fieldToRow) {
    var any = false;
    if (err && err.data) {
      for (var f in fieldToRow) {
        if (err.data[f]) { setBad(fieldToRow[f], true, err.data[f].message || "Invalid value."); any = true; }
      }
    }
    return any;
  }

  function busy(btn, on, label) {
    btn.disabled = on;
    btn.textContent = on ? "Working…" : label;
  }

  function openAuth(startTab) {
    if (overlay) return;
    overlay = el(
      '<div class="khnl-sl-overlay" role="dialog" aria-modal="true" aria-label="Sign in">' +
        '<div class="khnl-sl-card">' +
          '<button class="khnl-sl-x" aria-label="Close">&times;</button>' +
          '<h3>GI Wiki account</h3>' +
          '<p class="khnl-sl-sub">Private notes, bookmarks, reviewed-page tracking &amp; more.</p>' +
          '<div class="khnl-sl-tabs">' +
            '<button type="button" class="khnl-sl-tab" data-tab="login">Sign in</button>' +
            '<button type="button" class="khnl-sl-tab" data-tab="signup">Create account</button>' +
          "</div>" +
          '<div id="khnl-sl-body"></div>' +
        "</div>" +
      "</div>"
    );
    document.body.appendChild(overlay);
    overlay.querySelector(".khnl-sl-x").addEventListener("click", closeModal);
    overlay.addEventListener("mousedown", function (e) { if (e.target === overlay) closeModal(); });
    document.addEventListener("keydown", escClose);
    overlay.querySelectorAll(".khnl-sl-tab").forEach(function (t) {
      t.addEventListener("click", function () { showTab(t.getAttribute("data-tab")); });
    });
    showTab(startTab || "login");
  }

  function showTab(name) {
    if (!overlay) return;
    overlay.querySelectorAll(".khnl-sl-tab").forEach(function (t) {
      t.classList.toggle("on", t.getAttribute("data-tab") === name);
    });
    var body = overlay.querySelector("#khnl-sl-body");
    if (name === "login") renderLogin(body);
    else if (name === "signup") renderSignup(body);
    else if (name === "forgot") renderForgot(body);
  }

  // --- login tab ---
  function renderLogin(body) {
    body.innerHTML =
      '<form novalidate>' +
        '<div class="khnl-sl-row" id="r-id"><label for="sl-id">Email or username</label>' +
          '<input id="sl-id" type="text" autocomplete="username">' +
          '<div class="khnl-sl-err">Please enter your email or username.</div></div>' +
        '<div class="khnl-sl-row" id="r-pw"><label for="sl-pw">Password</label>' +
          '<input id="sl-pw" type="password" autocomplete="current-password">' +
          '<div class="khnl-sl-err">Please enter your password.</div></div>' +
        '<button type="button" class="khnl-sl-link" id="sl-forgot">Forgot password?</button>' +
        '<p class="khnl-sl-formerr" id="sl-formerr"></p>' +
        '<div class="khnl-sl-actions">' +
          '<button type="button" class="khnl-sl-btn ghost" id="sl-cancel">Cancel</button>' +
          '<button type="submit" class="khnl-sl-btn primary" id="sl-go">Sign in</button>' +
        "</div>" +
      "</form>";
    body.querySelector("#sl-cancel").addEventListener("click", closeModal);
    body.querySelector("#sl-forgot").addEventListener("click", function () { showTab("forgot"); });
    body.querySelector("form").addEventListener("submit", function (ev) {
      ev.preventDefault();
      var id = body.querySelector("#sl-id").value.trim();
      var pw = body.querySelector("#sl-pw").value;
      var formErr = body.querySelector("#sl-formerr");
      formErr.style.display = "none";
      setBad("#r-id", !id); setBad("#r-pw", !pw);
      if (!id || !pw) return;
      var btn = body.querySelector("#sl-go");
      busy(btn, true, "Sign in");
      auth.login(id, pw).then(function () {
        closeModal();
      }).catch(function (err) {
        busy(btn, false, "Sign in");
        formErr.textContent = err && err.status === 429
          ? "Too many attempts — please wait a minute and try again."
          : "Sign-in failed. Check your email/username and password.";
        formErr.style.display = "block";
      });
    });
  }

  // --- signup tab ---
  function renderSignup(body) {
    body.innerHTML =
      '<form novalidate>' +
        '<div class="khnl-sl-row" id="r-email"><label for="su-email">Email</label>' +
          '<input id="su-email" type="email" autocomplete="email" maxlength="200">' +
          '<div class="khnl-sl-err">Please enter a valid email.</div></div>' +
        '<div class="khnl-sl-row" id="r-user"><label for="su-user">Username</label>' +
          '<input id="su-user" type="text" autocomplete="username" maxlength="30" ' +
            'placeholder="3–30 chars; letters, digits, _ . -">' +
          '<div class="khnl-sl-err">3–30 characters; letters, digits, _ . - (must start with a letter or digit).</div></div>' +
        '<div class="khnl-sl-row" id="r-dn"><label for="su-dn">Display name <span style="font-weight:400;color:#888">(optional)</span></label>' +
          '<input id="su-dn" type="text" autocomplete="name" maxlength="80"></div>' +
        '<div class="khnl-sl-row" id="r-pw1"><label for="su-pw1">Password</label>' +
          '<input id="su-pw1" type="password" autocomplete="new-password">' +
          '<div class="khnl-sl-err">At least 8 characters.</div></div>' +
        '<div class="khnl-sl-row" id="r-pw2"><label for="su-pw2">Confirm password</label>' +
          '<input id="su-pw2" type="password" autocomplete="new-password">' +
          '<div class="khnl-sl-err">Passwords don’t match.</div></div>' +
        '<div class="khnl-sl-ts" id="su-ts"></div>' +
        '<p class="khnl-sl-formerr" id="su-formerr"></p>' +
        '<div class="khnl-sl-actions">' +
          '<button type="button" class="khnl-sl-btn ghost" id="su-cancel">Cancel</button>' +
          '<button type="submit" class="khnl-sl-btn primary" id="su-go">Create account</button>' +
        "</div>" +
      "</form>";
    body.querySelector("#su-cancel").addEventListener("click", closeModal);

    var tsBox = body.querySelector("#su-ts");
    loadTurnstile(function () {
      if (!overlay) return;
      try {
        tsWidgetId = window.turnstile.render(tsBox, { sitekey: CONFIG.TURNSTILE_SITE_KEY, theme: "light" });
      } catch (err) {
        tsBox.innerHTML = '<span style="font-size:11.5px;color:#b00020">Could not load the verification widget.</span>';
      }
    });

    body.querySelector("form").addEventListener("submit", function (ev) {
      ev.preventDefault();
      var f = {
        email: body.querySelector("#su-email").value.trim(),
        username: body.querySelector("#su-user").value.trim().toLowerCase(),
        displayName: body.querySelector("#su-dn").value.trim(),
        password: body.querySelector("#su-pw1").value,
        passwordConfirm: body.querySelector("#su-pw2").value,
      };
      var formErr = body.querySelector("#su-formerr");
      formErr.style.display = "none";

      var ok = true;
      setBad("#r-email", !validEmail(f.email), "Please enter a valid email."); ok = ok && validEmail(f.email);
      var unameOk = /^[a-z0-9][a-z0-9_.-]{2,29}$/.test(f.username);
      setBad("#r-user", !unameOk); ok = ok && unameOk;
      setBad("#r-pw1", f.password.length < 8); ok = ok && f.password.length >= 8;
      setBad("#r-pw2", f.password !== f.passwordConfirm); ok = ok && f.password === f.passwordConfirm;
      if (!ok) return;

      var token = "";
      try { token = window.turnstile ? window.turnstile.getResponse(tsWidgetId) : ""; } catch (e) { token = ""; }
      if (!token) {
        formErr.textContent = "Please complete the verification challenge above.";
        formErr.style.display = "block";
        return;
      }

      var btn = body.querySelector("#su-go");
      busy(btn, true, "Create account");
      auth.signup(f, token).then(function () {
        showVerifyNotice(f.email);
      }).catch(function (err) {
        try { if (window.turnstile) window.turnstile.reset(tsWidgetId); } catch (e) {}
        busy(btn, false, "Create account");
        var mapped = applyServerErrors(err, {
          email: "#r-email",
          username: "#r-user",
          password: "#r-pw1",
          passwordConfirm: "#r-pw2",
        });
        formErr.textContent = (err && err.message) || "Signup failed. Please try again.";
        if (mapped && err.data && err.data.email && /unique|already/i.test(err.data.email.message || "")) {
          formErr.textContent = "That email already has an account — try signing in instead.";
        }
        formErr.style.display = "block";
      });
    });
  }

  // --- "check your email" screen ---
  function showVerifyNotice(email) {
    if (!overlay) return;
    var card = overlay.querySelector(".khnl-sl-card");
    card.innerHTML =
      '<button class="khnl-sl-x" aria-label="Close">&times;</button>' +
      '<div class="khnl-sl-done"><div class="ok">✉</div>' +
        '<h3 style="margin:8px 0 4px">Check your email</h3>' +
        '<p class="khnl-sl-sub" style="margin:0">We sent a verification link to <b>' + email.replace(/</g, "&lt;") + "</b>." +
          " Click it, then sign in.</p>" +
        '<p class="khnl-sl-sub" style="margin:10px 0 0">No email after a few minutes? Check spam, or ' +
          '<button type="button" class="khnl-sl-link" id="sl-resend">resend it</button>.</p>' +
        '<div style="margin-top:14px"><button class="khnl-sl-btn primary" id="sl-done">Done</button></div></div>';
    card.querySelector(".khnl-sl-x").addEventListener("click", closeModal);
    card.querySelector("#sl-done").addEventListener("click", closeModal);
    card.querySelector("#sl-resend").addEventListener("click", function () {
      var b = card.querySelector("#sl-resend");
      b.disabled = true; b.textContent = "sending…";
      auth.resendVerification(email).then(function () { b.textContent = "sent ✓"; })
        .catch(function () { b.disabled = false; b.textContent = "resend it"; });
    });
  }

  // --- forgot-password tab ---
  function renderForgot(body) {
    overlay.querySelectorAll(".khnl-sl-tab").forEach(function (t) { t.classList.remove("on"); });
    body.innerHTML =
      '<form novalidate>' +
        '<p class="khnl-sl-sub" style="margin-top:0">Enter your account email — we’ll send a reset link.</p>' +
        '<div class="khnl-sl-row" id="r-fe"><label for="fp-email">Email</label>' +
          '<input id="fp-email" type="email" autocomplete="email" maxlength="200">' +
          '<div class="khnl-sl-err">Please enter a valid email.</div></div>' +
        '<p class="khnl-sl-formerr" id="fp-formerr"></p>' +
        '<div class="khnl-sl-actions">' +
          '<button type="button" class="khnl-sl-btn ghost" id="fp-back">Back</button>' +
          '<button type="submit" class="khnl-sl-btn primary" id="fp-go">Send reset link</button>' +
        "</div>" +
      "</form>";
    body.querySelector("#fp-back").addEventListener("click", function () { showTab("login"); });
    body.querySelector("form").addEventListener("submit", function (ev) {
      ev.preventDefault();
      var email = body.querySelector("#fp-email").value.trim();
      setBad("#r-fe", !validEmail(email));
      if (!validEmail(email)) return;
      var btn = body.querySelector("#fp-go");
      busy(btn, true, "Send reset link");
      auth.requestPasswordReset(email).then(function () {
        body.innerHTML = '<p class="khnl-sl-sub" style="margin-top:0">If that email has an account, a reset link is on its way. Check spam too.</p>' +
          '<div class="khnl-sl-actions"><button type="button" class="khnl-sl-btn primary" id="fp-ok">OK</button></div>';
        body.querySelector("#fp-ok").addEventListener("click", function () { showTab("login"); });
      }).catch(function (err) {
        busy(btn, false, "Send reset link");
        var fe = body.querySelector("#fp-formerr");
        fe.textContent = err && err.status === 429
          ? "Too many requests — please wait a few minutes."
          : "Could not send the reset email. Please try again.";
        fe.style.display = "block";
      });
    });
  }

  // ----------------------------- TOP-RIGHT CHIP -----------------------------
  // Step 4 placeholder UI: "Sign in" button when logged out; an initials circle
  // + minimal menu when logged in. Step 5 upgrades this into the full avatar
  // bubble (image upload, color picker, complete account menu).
  var chip = null, menu = null;

  function initials(u) {
    var s = (u.displayName || u.username || u.email || "?").trim();
    var parts = s.split(/\s+/);
    var out = parts[0].charAt(0) + (parts.length > 1 ? parts[parts.length - 1].charAt(0) : "");
    return out.toUpperCase();
  }

  function closeMenu() { if (menu) { menu.remove(); menu = null; document.removeEventListener("mousedown", menuAway); } }
  function menuAway(e) { if (menu && !menu.contains(e.target) && !chip.contains(e.target)) closeMenu(); }

  function openMenu() {
    if (menu) { closeMenu(); return; }
    var u = state.user;
    var verifyRow = u.verified ? "" :
      '<div class="khnl-sl-verify">Email not verified yet — most features stay read-only. ' +
      '<a id="khnl-sl-reverify">Resend link</a></div>';
    menu = el(
      '<div class="khnl-sl-menu">' +
        '<div class="who">Signed in as <b>' + (u.displayName || u.username || u.email).replace(/</g, "&lt;") + "</b></div>" +
        verifyRow +
        '<button type="button" id="khnl-sl-out">Sign out</button>' +
      "</div>"
    );
    document.body.appendChild(menu);
    document.addEventListener("mousedown", menuAway);
    menu.querySelector("#khnl-sl-out").addEventListener("click", function () {
      closeMenu();
      auth.logout();
    });
    var rv = menu.querySelector("#khnl-sl-reverify");
    if (rv) rv.addEventListener("click", function () {
      rv.textContent = "sending…";
      auth.resendVerification(u.email).then(function () { rv.textContent = "sent ✓"; })
        .catch(function () { rv.textContent = "Resend link"; });
    });
  }

  function renderChip() {
    if (!chip) return;
    closeMenu();
    if (state.user) {
      var color = state.user.bubbleColor || "#2f6b3f";
      chip.innerHTML = '<button class="khnl-sl-me" title="Account" aria-label="Account menu" ' +
        'style="background:' + color + '">' + initials(state.user) + "</button>";
      chip.querySelector(".khnl-sl-me").addEventListener("click", openMenu);
    } else {
      chip.innerHTML = '<button class="khnl-sl-signin">Sign in</button>';
      chip.querySelector(".khnl-sl-signin").addEventListener("click", function () { openAuth("login"); });
    }
  }

  // ----------------------------- BOOT -----------------------------
  function boot() {
    // §4.9: a crash in the social layer must never break the static wiki.
    try {
      inject("style", { id: "khnl-sl-style" }).textContent = CSS;
      chip = el('<div class="khnl-sl-chip"></div>');
      document.body.appendChild(chip);
      renderChip();       // logged-out UI immediately (no dead corner)
      auth.refresh();     // then re-hydrate the session from the httpOnly cookie
    } catch (err) {
      onGlobalError(err && err.message, err && err.stack);
    }
  }

  window.KHNL = {
    api: api,
    auth: auth,
    ui: { withState: withState, openAuth: openAuth },
    debug: {
      // Step 4 acceptance test: forced exception -> fallback panel + client_errors row.
      crash: function () { setTimeout(function () { throw new Error("KHNL forced test crash"); }, 0); },
    },
  };

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", boot);
  else boot();
})();
