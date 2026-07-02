/*
 * KHNL GI Wiki — Social layer, Steps 4–8: signup, verification & login +
 * avatar bubble & account menu + bookmarks + reviewed-page tracking +
 * private in-context notes (durable, §4.3).
 * Plan: ACCOUNTS-SOCIAL-PLAN.md §2 (sessions), §4.1 (auth), §4.2 (avatar
 * bubble), §4.3 (notes), §4.7 (reviewed tracking), §4.8 (bookmarks),
 * §4.9 (resilience), §4.10 (error tracking), §7 Steps 4–8.
 *
 * Self-contained vanilla-JS drop-in, same style as feedback-widget.js. No
 * PocketBase SDK, no framework, no build step — raw fetch only. It injects its
 * own styles, a top-right avatar bubble ("Sign in" button when logged out),
 * the login/signup modal, the account menu, and a bubble-customization modal
 * (color picker + image upload, persisted on the user record).
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
 *   KHNL.ui.openAuth()        -> open the sign-in modal
 *   KHNL.ui.openProfile()     -> open the bubble-customization modal
 *   KHNL.ui.registerMenuItem(id, fn) -> Steps 6–10 attach their menu features
 *        (ids: "notes" | "bookmarks" | "reviewed" | "friends" | "privacy";
 *         unregistered items show a "coming soon" flash instead)
 *   KHNL.debug.crash()        -> forced exception (Step 4 acceptance test)
 */
(function () {
  "use strict";

  // ----------------------------- CONFIG -----------------------------
  var CONFIG = {
    API_BASE: "https://api.khnicklemd.com",
    TURNSTILE_SITE_KEY: "0x4AAAAAADsnUhGCQy6CF38J", // public site key (same widget as feedback)
    APP_VERSION: "step8-2026-07-02",
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
    // height matches index.html's 48px #topbar so the button/bubble vertically center in it
    ".khnl-sl-chip{position:fixed;top:0;right:16px;height:48px;z-index:2147482900;display:flex;align-items:center;gap:8px;" +
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
    ".khnl-sl-fallback-actions #khnl-sl-reset{background:#2f6b3f;border-color:#2f6b3f;color:#fff}" +
    // Step 5 — avatar bubble, full menu, customization modal
    ".khnl-sl-me{overflow:hidden;padding:0}" +
    ".khnl-sl-me img{width:100%;height:100%;object-fit:cover;display:block;border-radius:50%}" +
    ".khnl-sl-mi{display:block;width:100%;text-align:left;padding:8px 14px;border:none;background:none;cursor:pointer;font:inherit}" +
    ".khnl-sl-mi:hover{background:#f3f6f3}" +
    ".khnl-sl-soon{font-size:10px;color:#999;border:1px solid #ddd;border-radius:8px;padding:1px 6px;margin-left:6px;vertical-align:1px}" +
    ".khnl-sl-sep{height:1px;background:#eee;margin:6px 0}" +
    ".khnl-sl-prevwrap{display:flex;align-items:center;gap:14px;margin:4px 0 14px}" +
    ".khnl-sl-prev{width:64px;height:64px;border-radius:50%;color:#fff;font-weight:700;font-size:22px;display:flex;" +
      "align-items:center;justify-content:center;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,.22);flex:none}" +
    ".khnl-sl-prev img{width:100%;height:100%;object-fit:cover}" +
    ".khnl-sl-swatches{display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin:6px 0 2px}" +
    ".khnl-sl-sw{width:26px;height:26px;border-radius:50%;cursor:pointer;border:2px solid transparent;padding:0;flex:none}" +
    ".khnl-sl-sw.on{border-color:#1a1a1a}" +
    ".khnl-sl-swcustom{width:26px;height:26px;padding:0;border:1px dashed #aaa;border-radius:50%;cursor:pointer;background:none;flex:none}" +
    ".khnl-sl-filerow{display:flex;gap:10px;align-items:center;margin-top:6px;font-size:12.5px}" +
    ".khnl-sl-filerow input[type=file]{font-size:12px;max-width:210px}" +
    // Step 6 — per-page star + bookmarks panel
    ".khnl-star{border:none;background:none;cursor:pointer;font-size:17px;line-height:1;color:#999;" +
      "padding:2px 4px;vertical-align:middle}" +
    ".khnl-star.on{color:#d99a00}" +
    ".khnl-star[disabled]{opacity:.5;cursor:default}" +
    ".khnl-bm-grp{font-weight:700;font-size:11.5px;color:#557055;margin:10px 0 2px;text-transform:uppercase;letter-spacing:.4px}" +
    ".khnl-bm-row{display:flex;align-items:center;gap:8px;padding:7px 2px;border-bottom:1px solid #f0f0f0}" +
    ".khnl-bm-row:last-child{border-bottom:none}" +
    ".khnl-bm-title{flex:1;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;background:none;" +
      "border:none;padding:0;cursor:pointer;font:inherit;color:#2f6b3f;text-align:left}" +
    ".khnl-bm-title:hover{text-decoration:underline}" +
    ".khnl-bm-act{border:none;background:none;cursor:pointer;color:#888;font-size:13px;padding:2px 4px;flex:none}" +
    ".khnl-bm-act:hover{color:#1a1a1a}" +
    // Step 7 — reviewed toggle + list checkmarks + dashboard dates
    ".khnl-rv{border:none;background:none;cursor:pointer;font-size:15px;line-height:1;color:#aaa;" +
      "padding:2px 4px;vertical-align:middle;font-weight:700}" +
    ".khnl-rv.on{color:#1a7f37}" +
    ".khnl-rv[disabled]{opacity:.5;cursor:default}" +
    ".khnl-rv-mark{color:#1a7f37;font-weight:700;margin-left:6px;font-size:12px}" +
    ".khnl-bm-date{color:#888;font-size:11.5px;flex:none}" +
    // Step 8 — private notes: selection affordance, inline markers, orphan tray
    ".khnl-note-add{position:absolute;z-index:2147482902;padding:4px 10px;border-radius:14px;border:none;cursor:pointer;" +
      "font:12px/1.3 -apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif;font-weight:600;" +
      "background:#2f6b3f;color:#fff;box-shadow:0 2px 8px rgba(0,0,0,.3)}" +
    ".khnl-note-mark{cursor:pointer;color:#b3541e;font-size:11px;margin-left:2px;user-select:none}" +
    ".khnl-note-mark:hover{text-decoration:underline}" +
    ".khnl-note-tray{margin:26px 0 8px;padding:12px 14px;border:1px dashed #c9a227;border-radius:10px;background:#fffdf2;" +
      "font-size:13.5px}" +
    ".khnl-note-tray h4{margin:0 0 6px;font-size:13px;color:#7a5c00}" +
    ".khnl-note-quote{display:block;border-left:3px solid #ddd;padding:2px 8px;margin:4px 0;color:#666;font-size:12.5px;" +
      "font-style:italic;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}" +
    ".khnl-note-body{white-space:pre-wrap}" +
    ".khnl-note-row{padding:7px 0;border-bottom:1px solid #f0e8cc}" +
    ".khnl-note-row:last-child{border-bottom:none}" +
    ".khnl-note-acts{margin-top:3px}" +
    ".khnl-note-acts button{border:none;background:none;cursor:pointer;color:#888;font-size:12px;padding:0 8px 0 0}" +
    ".khnl-note-acts button:hover{color:#1a1a1a}";

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
      if (typeof FormData !== "undefined" && opts.body instanceof FormData) {
        init.body = opts.body; // multipart (file uploads) — browser sets the boundary
      } else {
        init.headers["Content-Type"] = "application/json";
        init.body = JSON.stringify(opts.body);
      }
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

  // ================== §4.2 AVATAR BUBBLE & ACCOUNT MENU (Step 5) ==============
  // Logged in: a circular bubble top-right — uploaded image, or initials on a
  // chosen color. Click -> account menu. Logged out: "Sign in" in the same spot.
  var chip = null, menu = null;

  var BUBBLE_COLORS = ["#2f6b3f", "#1f5f8b", "#7a3b8f", "#b3541e", "#8b1f3f", "#3d6b6b", "#5c5470", "#2d2d2d"];

  function initials(u) {
    var s = (u.displayName || u.username || u.email || "?").trim();
    var parts = s.split(/\s+/);
    var out = parts[0].charAt(0) + (parts.length > 1 ? parts[parts.length - 1].charAt(0) : "");
    return out.toUpperCase();
  }

  function bubbleImageUrl(u, thumb) {
    if (!u || !u.bubbleImage) return "";
    return CONFIG.API_BASE + "/api/files/users/" + u.id + "/" + encodeURIComponent(u.bubbleImage) +
      (thumb ? "?thumb=" + thumb : "");
  }

  // Menu registry — Steps 6–10 attach real handlers via KHNL.ui.registerMenuItem;
  // until then an item shows a "soon" badge and a "coming soon" flash on click.
  // (§4.2 menu: My notes · Bookmarks · Reviewed pages · Friends · Privacy · Sign out)
  var MENU_ITEMS = [
    { id: "notes",     label: "My notes" },
    { id: "bookmarks", label: "Bookmarks" },
    { id: "reviewed",  label: "Reviewed pages" },
    { id: "friends",   label: "Friends" },
    { id: "privacy",   label: "Privacy" },
  ];
  var menuHandlers = {};
  function registerMenuItem(id, handler) { menuHandlers[id] = handler; }

  function closeMenu() { if (menu) { menu.remove(); menu = null; document.removeEventListener("mousedown", menuAway); } }
  function menuAway(e) { if (menu && !menu.contains(e.target) && !chip.contains(e.target)) closeMenu(); }

  function openMenu() {
    if (menu) { closeMenu(); return; }
    var u = state.user;
    var verifyRow = u.verified ? "" :
      '<div class="khnl-sl-verify">Email not verified yet — most features stay read-only. ' +
      '<a id="khnl-sl-reverify">Resend link</a></div>';
    var itemsHtml = MENU_ITEMS.map(function (it) {
      return '<button type="button" class="khnl-sl-mi" data-id="' + it.id + '">' + it.label +
        (menuHandlers[it.id] ? "" : ' <span class="khnl-sl-soon">soon</span>') + "</button>";
    }).join("");
    menu = el(
      '<div class="khnl-sl-menu" role="menu" aria-label="Account menu">' +
        '<div class="who">Signed in as <b>' + (u.displayName || u.username || u.email).replace(/</g, "&lt;") + "</b></div>" +
        verifyRow +
        itemsHtml +
        '<div class="khnl-sl-sep"></div>' +
        '<button type="button" class="khnl-sl-mi" id="khnl-sl-custom">Customize bubble…</button>' +
        '<button type="button" class="khnl-sl-mi" id="khnl-sl-out">Sign out</button>' +
      "</div>"
    );
    document.body.appendChild(menu);
    document.addEventListener("mousedown", menuAway);

    menu.querySelectorAll(".khnl-sl-mi[data-id]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        var fn = menuHandlers[btn.getAttribute("data-id")];
        if (fn) { closeMenu(); fn(); return; }
        // not built yet — flash instead of a dead click
        var orig = btn.innerHTML;
        btn.innerHTML = "Coming soon — being built";
        setTimeout(function () { if (menu && menu.contains(btn)) btn.innerHTML = orig; }, 1200);
      });
    });
    menu.querySelector("#khnl-sl-custom").addEventListener("click", function () { closeMenu(); openProfile(); });
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
      var u = state.user;
      var color = u.bubbleColor || "#2f6b3f";
      var img = bubbleImageUrl(u, "100x100");
      chip.innerHTML = '<button class="khnl-sl-me" title="Account" aria-label="Account menu" aria-haspopup="menu" ' +
        'style="background:' + color + '">' +
        (img ? '<img src="' + img + '" alt="">' : initials(u)) +
        "</button>";
      var btn = chip.querySelector(".khnl-sl-me");
      btn.addEventListener("click", openMenu);
      // if the image 404s (deleted file, cold cache), fall back to initials
      var imgEl = btn.querySelector("img");
      if (imgEl) imgEl.addEventListener("error", function () { btn.innerHTML = initials(u); });
    } else {
      chip.innerHTML = '<button class="khnl-sl-signin">Sign in</button>';
      chip.querySelector(".khnl-sl-signin").addEventListener("click", function () { openAuth("login"); });
    }
  }

  // ----------------------------- CUSTOMIZATION MODAL --------------------------
  // Color picker (swatches + free color input) and image upload, saved on the
  // user record (bubbleColor / bubbleImage) via one multipart PATCH. Server-side
  // validation (2 MB, image mime types) comes from the Step 4 migration; errors
  // are mapped inline per §4.9.
  function openProfile() {
    if (overlay || !state.user) return;
    var u = state.user;
    var chosen = {
      color: u.bubbleColor || "#2f6b3f",
      file: null,          // newly picked File
      removeImage: false,  // clear the existing image
    };

    var swatches = BUBBLE_COLORS.map(function (c) {
      return '<button type="button" class="khnl-sl-sw" data-c="' + c + '" style="background:' + c + '" ' +
        'aria-label="' + c + '"></button>';
    }).join("");

    overlay = el(
      '<div class="khnl-sl-overlay" role="dialog" aria-modal="true" aria-label="Customize bubble">' +
        '<div class="khnl-sl-card">' +
          '<button class="khnl-sl-x" aria-label="Close">&times;</button>' +
          "<h3>Customize your bubble</h3>" +
          '<p class="khnl-sl-sub">A photo, or your initials on a color.</p>' +
          '<div class="khnl-sl-prevwrap">' +
            '<div class="khnl-sl-prev" id="pf-prev"></div>' +
            '<div style="font-size:12.5px;color:#666">This is how your bubble will look.</div>' +
          "</div>" +
          '<div class="khnl-sl-row"><label>Color</label>' +
            '<div class="khnl-sl-swatches">' + swatches +
              '<input type="color" class="khnl-sl-swcustom" id="pf-color" title="Custom color" value="#2f6b3f">' +
            "</div></div>" +
          '<div class="khnl-sl-row" id="r-img"><label>Photo <span style="font-weight:400;color:#888">(optional, max 2 MB)</span></label>' +
            '<div class="khnl-sl-filerow">' +
              '<input type="file" id="pf-file" accept="image/jpeg,image/png,image/webp,image/gif">' +
              '<button type="button" class="khnl-sl-link" id="pf-remove" style="display:none">Remove photo</button>' +
            "</div>" +
            '<div class="khnl-sl-err">Please choose an image under 2 MB.</div></div>' +
          '<p class="khnl-sl-formerr" id="pf-formerr"></p>' +
          '<div class="khnl-sl-actions">' +
            '<button type="button" class="khnl-sl-btn ghost" id="pf-cancel">Cancel</button>' +
            '<button type="button" class="khnl-sl-btn primary" id="pf-save">Save</button>' +
          "</div>" +
        "</div>" +
      "</div>"
    );
    document.body.appendChild(overlay);
    overlay.querySelector(".khnl-sl-x").addEventListener("click", closeModal);
    overlay.querySelector("#pf-cancel").addEventListener("click", closeModal);
    overlay.addEventListener("mousedown", function (e) { if (e.target === overlay) closeModal(); });
    document.addEventListener("keydown", escClose);

    var prev = overlay.querySelector("#pf-prev");
    var fileInput = overlay.querySelector("#pf-file");
    var removeBtn = overlay.querySelector("#pf-remove");
    var colorInput = overlay.querySelector("#pf-color");
    var localPreviewUrl = "";

    function currentImageUrl() {
      if (chosen.file) return localPreviewUrl;
      if (chosen.removeImage) return "";
      return bubbleImageUrl(u, "100x100");
    }
    function updatePreview() {
      prev.style.background = chosen.color;
      var url = currentImageUrl();
      prev.innerHTML = url ? '<img src="' + url + '" alt="">' : initials(u);
      removeBtn.style.display = url ? "inline" : "none";
      overlay.querySelectorAll(".khnl-sl-sw").forEach(function (s) {
        s.classList.toggle("on", s.getAttribute("data-c").toLowerCase() === chosen.color.toLowerCase());
      });
      colorInput.value = /^#[0-9a-fA-F]{6}$/.test(chosen.color) ? chosen.color : "#2f6b3f";
    }

    overlay.querySelectorAll(".khnl-sl-sw").forEach(function (s) {
      s.addEventListener("click", function () { chosen.color = s.getAttribute("data-c"); updatePreview(); });
    });
    colorInput.addEventListener("input", function () { chosen.color = colorInput.value; updatePreview(); });

    fileInput.addEventListener("change", function () {
      var f = fileInput.files && fileInput.files[0];
      setBad("#r-img", false);
      if (!f) return;
      if (f.size > 2097152 || !/^image\//.test(f.type)) {
        setBad("#r-img", true);
        fileInput.value = "";
        return;
      }
      if (localPreviewUrl) URL.revokeObjectURL(localPreviewUrl);
      localPreviewUrl = URL.createObjectURL(f);
      chosen.file = f;
      chosen.removeImage = false;
      updatePreview();
    });
    removeBtn.addEventListener("click", function () {
      chosen.file = null;
      chosen.removeImage = true;
      fileInput.value = "";
      updatePreview();
    });

    overlay.querySelector("#pf-save").addEventListener("click", function () {
      var btn = overlay.querySelector("#pf-save");
      var formErr = overlay.querySelector("#pf-formerr");
      formErr.style.display = "none";
      busy(btn, true, "Save");

      var fd = new FormData();
      fd.append("bubbleColor", chosen.color);
      if (chosen.file) fd.append("bubbleImage", chosen.file);
      else if (chosen.removeImage) fd.append("bubbleImage", ""); // clears the file field

      api("/api/collections/users/records/" + u.id, { method: "PATCH", body: fd })
        .then(function (j) {
          // merge (a PATCH response may omit hidden fields like email)
          setUser(Object.assign({}, state.user, j || {}));
          closeModal();
        })
        .catch(function (err) {
          busy(btn, false, "Save");
          if (err && err.data && err.data.bubbleImage) setBad("#r-img", true, err.data.bubbleImage.message);
          formErr.textContent = (err && err.message) || "Could not save. Please try again.";
          formErr.style.display = "block";
        });
    });

    updatePreview();
  }

  // ================== §4.8 BOOKMARKS (Step 6) ==================
  // Star toggle in the page topbar (#page-meta-top) + "My bookmarks" panel on
  // the account menu. index.html dispatches `khnl:nav` {view} on every route
  // change; page views look like "page:SLUG". Owner-only rules live server-side
  // (step6 migration); the unique (user,pageSlug) index makes double-clicks safe.
  // One owner-scoped collection cache: a single perPage=500 list per login
  // (the owner-only listRule scopes it server-side), exposed as pageSlug->record.
  // Shared by bookmarks (Step 6), reviews (Step 7), notes (Step 8).
  function ownedMap(collection, sort) {
    var cache = null, promise = null;
    return {
      invalidate: function () { cache = null; promise = null; },
      all: function () {
        if (cache) return Promise.resolve(cache);
        if (!promise) {
          promise = api("/api/collections/" + collection + "/records?perPage=500&skipTotal=1&sort=" + sort)
            .then(function (j) {
              cache = {};
              (j.items || []).forEach(function (r) { cache[r.pageSlug] = r; });
              return cache;
            })
            .catch(function (err) { promise = null; throw err; });
        }
        return promise;
      },
    };
  }

  var bm = ownedMap("bookmarks", "folder,label");
  var rv = ownedMap("page_reviews", "-created"); // Step 7

  var lastView = "";
  document.addEventListener("khnl:nav", function (ev) {
    lastView = (ev.detail && ev.detail.view) || "";
    // defer: recordNav fires before index.html finishes building the page header
    setTimeout(function () { renderPageTools(); decorateReviewed(); renderNotes(); }, 0);
  });

  function renderPageTools() {
    var old = document.getElementById("khnl-star");
    if (old) old.remove();
    var oldRv = document.getElementById("khnl-rv");
    if (oldRv) oldRv.remove();
    var host = document.getElementById("page-meta-top");
    if (!host || !state.user || lastView.indexOf("page:") !== 0) return;
    var slug = lastView.slice(5).toLowerCase();
    var title = ((document.getElementById("page-title") || {}).textContent || slug).trim();

    var btn = el('<button id="khnl-star" class="khnl-star" title="Bookmark this page" aria-label="Bookmark this page">☆</button>');
    host.appendChild(btn);

    function paint(on) {
      btn.classList.toggle("on", !!on);
      btn.textContent = on ? "★" : "☆";
      btn.title = on ? "Remove bookmark" : "Bookmark this page";
    }
    bm.all().then(function (map) { paint(map[slug]); }).catch(function () {});

    btn.addEventListener("click", function () {
      if (!state.user.verified) { alert("Please verify your email first — check your inbox for the link."); return; }
      btn.disabled = true;
      bm.all().then(function (map) {
        var rec = map[slug];
        if (rec) {
          return api("/api/collections/bookmarks/records/" + rec.id, { method: "DELETE" })
            .then(function () { delete map[slug]; paint(false); });
        }
        return api("/api/collections/bookmarks/records", {
          method: "POST",
          body: { user: state.user.id, pageSlug: slug, label: title },
        }).then(function (j) { map[slug] = j; paint(true); });
      }).catch(function (err) {
        reportError("bookmark toggle: " + ((err && err.message) || String(err)), err && err.stack);
      }).then(function () { btn.disabled = false; });
    });

    // Step 7 — "Mark as reviewed" toggle beside the star (§4.7)
    var rvBtn = el('<button id="khnl-rv" class="khnl-rv" title="Mark as reviewed" aria-label="Mark as reviewed">✓</button>');
    host.appendChild(rvBtn);
    function paintRv(on) {
      rvBtn.classList.toggle("on", !!on);
      rvBtn.title = on ? "Reviewed — click to unmark" : "Mark as reviewed";
    }
    rv.all().then(function (map) { paintRv(map[slug]); }).catch(function () {});
    rvBtn.addEventListener("click", function () {
      if (!state.user.verified) { alert("Please verify your email first — check your inbox for the link."); return; }
      rvBtn.disabled = true;
      rv.all().then(function (map) {
        var rec = map[slug];
        if (rec) {
          return api("/api/collections/page_reviews/records/" + rec.id, { method: "DELETE" })
            .then(function () { delete map[slug]; paintRv(false); });
        }
        return api("/api/collections/page_reviews/records", {
          method: "POST",
          body: { user: state.user.id, pageSlug: slug, label: title },
        }).then(function (j) { map[slug] = j; paintRv(true); });
      }).catch(function (err) {
        reportError("review toggle: " + ((err && err.message) || String(err)), err && err.stack);
      }).then(function () { rvBtn.disabled = false; });
    });
  }

  function goToPage(slug) {
    closeModal();
    if (typeof window.navigateTo === "function") window.navigateTo(slug);
    else location.pathname = "/" + slug;
  }

  function openBookmarks() {
    if (overlay) return;
    overlay = el(
      '<div class="khnl-sl-overlay" role="dialog" aria-modal="true" aria-label="My bookmarks">' +
        '<div class="khnl-sl-card" style="width:420px">' +
          '<button class="khnl-sl-x" aria-label="Close">&times;</button>' +
          "<h3>My bookmarks</h3>" +
          '<p class="khnl-sl-sub">Starred pages, grouped by folder.</p>' +
          '<div id="khnl-bm-list"></div>' +
        "</div>" +
      "</div>"
    );
    document.body.appendChild(overlay);
    overlay.querySelector(".khnl-sl-x").addEventListener("click", closeModal);
    overlay.addEventListener("mousedown", function (e) { if (e.target === overlay) closeModal(); });
    document.addEventListener("keydown", escClose);

    var listEl = overlay.querySelector("#khnl-bm-list");
    var view = withState(listEl, function () {
      bm.invalidate(); // always fresh when the panel opens
      return bm.all().then(function (map) {
        return Object.keys(map).map(function (k) { return map[k]; });
      });
    }, {
      emptyMsg: "No bookmarks yet — open a page and click the ☆ star in its header.",
      render: function (host, rows) {
        rows.sort(function (a, b) {
          // "￿": unfiled sorts after named folders
          return (a.folder || "￿").localeCompare(b.folder || "￿") ||
                 (a.label || a.pageSlug).localeCompare(b.label || b.pageSlug);
        });
        var lastFolder = null;
        rows.forEach(function (r) {
          var folder = r.folder || "";
          if (folder !== lastFolder) {
            lastFolder = folder;
            host.appendChild(el('<div class="khnl-bm-grp">' + (folder || "Unfiled").replace(/</g, "&lt;") + "</div>"));
          }
          var row = el(
            '<div class="khnl-bm-row">' +
              '<button type="button" class="khnl-bm-title">' + (r.label || r.pageSlug).replace(/</g, "&lt;") + "</button>" +
              '<button type="button" class="khnl-bm-act" title="Edit label / folder">✎</button>' +
              '<button type="button" class="khnl-bm-act" title="Remove bookmark">✕</button>' +
            "</div>"
          );
          host.appendChild(row);
          row.querySelector(".khnl-bm-title").addEventListener("click", function () { goToPage(r.pageSlug); });
          var acts = row.querySelectorAll(".khnl-bm-act");
          acts[0].addEventListener("click", function () {
            // ponytail: native prompts, not an inline editor — upgrade if it grates
            var label = prompt("Label:", r.label || r.pageSlug);
            if (label === null) return;
            var folder2 = prompt("Folder (blank = unfiled):", r.folder || "");
            if (folder2 === null) return;
            api("/api/collections/bookmarks/records/" + r.id, {
              method: "PATCH",
              body: { label: label.trim().slice(0, 200), folder: folder2.trim().slice(0, 100) },
            }).then(function () { view.reload(); })
              .catch(function () { alert("Could not save — please try again."); });
          });
          acts[1].addEventListener("click", function () {
            api("/api/collections/bookmarks/records/" + r.id, { method: "DELETE" })
              .then(function () { bm.invalidate(); view.reload(); renderPageTools(); })
              .catch(function () { alert("Could not remove — please try again."); });
          });
        });
      },
    });
  }

  registerMenuItem("bookmarks", openBookmarks);

  // ================== §4.7 REVIEWED-PAGE TRACKING (Step 7) ==================
  // ✓ checkmarks in the index/TOC/overview lists (not inside page prose): after
  // any navigation to a list view, mark reviewed pages by scanning the
  // navigateTo() onclick handlers — one cached list per login, never per-link.
  function decorateReviewed() {
    var area = document.getElementById("content-area") || document.body;
    var olds = area.querySelectorAll(".khnl-rv-mark");
    for (var i = 0; i < olds.length; i++) olds[i].remove();
    if (!state.user || lastView.indexOf("page:") === 0) return;
    rv.all().then(function (map) {
      var nodes = area.querySelectorAll('[onclick^="navigateTo("]');
      for (var j = 0; j < nodes.length; j++) {
        var m = /navigateTo\('([^']+)'\)/.exec(nodes[j].getAttribute("onclick") || "");
        if (m && map[m[1].toLowerCase()]) {
          nodes[j].appendChild(el('<span class="khnl-rv-mark" title="Reviewed">✓</span>'));
        }
      }
    }).catch(function () {});
  }

  function openReviewed() {
    if (overlay) return;
    overlay = el(
      '<div class="khnl-sl-overlay" role="dialog" aria-modal="true" aria-label="Pages reviewed">' +
        '<div class="khnl-sl-card" style="width:420px">' +
          '<button class="khnl-sl-x" aria-label="Close">&times;</button>' +
          "<h3>Pages I’ve reviewed</h3>" +
          '<p class="khnl-sl-sub">Most recent first.</p>' +
          '<div id="khnl-rv-list"></div>' +
        "</div>" +
      "</div>"
    );
    document.body.appendChild(overlay);
    overlay.querySelector(".khnl-sl-x").addEventListener("click", closeModal);
    overlay.addEventListener("mousedown", function (e) { if (e.target === overlay) closeModal(); });
    document.addEventListener("keydown", escClose);

    var listEl = overlay.querySelector("#khnl-rv-list");
    var view = withState(listEl, function () {
      rv.invalidate(); // always fresh when the panel opens
      return rv.all().then(function (map) {
        return Object.keys(map).map(function (k) { return map[k]; });
      });
    }, {
      emptyMsg: "Nothing reviewed yet — open a page and click the ✓ in its header.",
      render: function (host, rows) {
        rows.sort(function (a, b) { return (b.created || "").localeCompare(a.created || ""); });
        rows.forEach(function (r) {
          var row = el(
            '<div class="khnl-bm-row">' +
              '<button type="button" class="khnl-bm-title">' + (r.label || r.pageSlug).replace(/</g, "&lt;") + "</button>" +
              '<span class="khnl-bm-date">' + (r.created || "").slice(0, 10) + "</span>" +
              '<button type="button" class="khnl-bm-act" title="Unmark reviewed">✕</button>' +
            "</div>"
          );
          host.appendChild(row);
          row.querySelector(".khnl-bm-title").addEventListener("click", function () { goToPage(r.pageSlug); });
          row.querySelector(".khnl-bm-act").addEventListener("click", function () {
            api("/api/collections/page_reviews/records/" + r.id, { method: "DELETE" })
              .then(function () { rv.invalidate(); view.reload(); renderPageTools(); decorateReviewed(); })
              .catch(function () { alert("Could not remove — please try again."); });
          });
        });
      },
    });
  }

  registerMenuItem("reviewed", openReviewed);

  // ================== §4.3 PRIVATE NOTES (Step 8) ==================
  // Select text in an article -> floating "Add note" -> modal editor. Notes
  // re-anchor by exact text match on every page render; a note whose anchor
  // text no longer exists demotes to the "Notes on this page" tray at the
  // bottom of the article — never deleted (§4.3 durability rule).
  var ntCache = null, ntPromise = null; // array of note records (all pages)
  function ntInvalidate() { ntCache = null; ntPromise = null; }
  function ntAll() {
    if (ntCache) return Promise.resolve(ntCache);
    if (!ntPromise) {
      // ponytail: one 500-row list per login; paginate if a user ever outgrows it
      ntPromise = api("/api/collections/private_notes/records?perPage=500&skipTotal=1&sort=-created")
        .then(function (j) { ntCache = j.items || []; return ntCache; })
        .catch(function (err) { ntPromise = null; throw err; });
    }
    return ntPromise;
  }

  function articleEl() { return document.getElementById("page-body"); }
  function currentPageSlug() { return lastView.indexOf("page:") === 0 ? lastView.slice(5).toLowerCase() : ""; }
  function currentPageTitle() {
    return ((document.getElementById("page-title") || {}).textContent || currentPageSlug()).trim();
  }
  function normWs(s) { return (s || "").replace(/\s+/g, " ").trim(); }

  // --- text anchoring: find `needle` in the article's text nodes ------------
  // Returns {node, offset} of the match END, or null. Whitespace-insensitive:
  // both sides are compared with runs of whitespace collapsed to one space.
  function findAnchor(root, needle) {
    needle = normWs(needle);
    if (!needle) return null;
    var walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, null);
    var nodes = [], text = "", map = []; // map[i] = {node, rawOffset} per built char
    var n;
    while ((n = walker.nextNode())) nodes.push(n);
    var lastWasSpace = true;
    for (var i = 0; i < nodes.length; i++) {
      var raw = nodes[i].nodeValue || "";
      for (var j = 0; j < raw.length; j++) {
        var ch = raw.charAt(j);
        if (/\s/.test(ch)) {
          if (lastWasSpace) continue;
          text += " "; map.push({ node: nodes[i], offset: j });
          lastWasSpace = true;
        } else {
          text += ch; map.push({ node: nodes[i], offset: j });
          lastWasSpace = false;
        }
      }
    }
    var idx = text.indexOf(needle);
    if (idx === -1) return null;
    var end = map[idx + needle.length - 1];
    return { node: end.node, offset: end.offset + 1 };
  }

  function clearNoteUi() {
    var area = document.getElementById("content-area") || document.body;
    var olds = area.querySelectorAll(".khnl-note-mark, .khnl-note-tray");
    for (var i = 0; i < olds.length; i++) olds[i].remove();
    hideAddBtn();
  }

  function renderNotes() {
    clearNoteUi();
    var slug = currentPageSlug();
    var root = articleEl();
    if (!state.user || !slug || !root) return;
    ntAll().then(function (all) {
      var mine = all.filter(function (r) { return r.pageSlug === slug; });
      if (!mine.length) return;
      var orphans = [];
      mine.forEach(function (note) {
        var hit = note.anchorText ? findAnchor(root, note.anchorText) : null;
        if (hit) {
          var after = hit.node.splitText(hit.offset);
          var mark = el('<sup class="khnl-note-mark" title="Your note — click to open">✎</sup>');
          after.parentNode.insertBefore(mark, after);
          mark.addEventListener("click", function () { openNoteEditor(note); });
        } else {
          orphans.push(note);
        }
        // keep the stored orphan flag in sync (silent, only on change)
        if (!!note.orphaned !== !hit) {
          api("/api/collections/private_notes/records/" + note.id, {
            method: "PATCH", body: { orphaned: !hit },
          }).then(function () { note.orphaned = !hit; }).catch(function () {});
        }
      });
      if (orphans.length) {
        var tray = el('<div class="khnl-note-tray"><h4>📌 Notes on this page (the text they were pinned to has changed)</h4></div>');
        orphans.forEach(function (note) { tray.appendChild(noteRow(note)); });
        root.appendChild(tray);
      }
    }).catch(function () {});
  }

  function noteRow(note) {
    var row = el(
      '<div class="khnl-note-row">' +
        (note.anchorText ? '<span class="khnl-note-quote">“' + note.anchorText.replace(/</g, "&lt;") + '”</span>' : "") +
        '<div class="khnl-note-body">' + note.body.replace(/</g, "&lt;") + "</div>" +
        '<div class="khnl-note-acts"><button type="button" data-a="edit">Edit</button>' +
        '<button type="button" data-a="del">Delete</button></div>' +
      "</div>"
    );
    row.querySelector('[data-a="edit"]').addEventListener("click", function () { openNoteEditor(note); });
    row.querySelector('[data-a="del"]').addEventListener("click", function () {
      if (!confirm("Delete this note?")) return;
      api("/api/collections/private_notes/records/" + note.id, { method: "DELETE" })
        .then(function () { ntInvalidate(); renderNotes(); if (overlay) { closeModal(); openMyNotes(); } })
        .catch(function () { alert("Could not delete — please try again."); });
    });
    return row;
  }

  // --- floating "Add note" affordance on text selection ---------------------
  var addBtn = null;
  function hideAddBtn() { if (addBtn) { addBtn.remove(); addBtn = null; } }
  document.addEventListener("mouseup", function (ev) {
    if (addBtn && addBtn.contains(ev.target)) return;
    setTimeout(function () { // let the selection settle
      hideAddBtn();
      var root = articleEl();
      if (!state.user || !currentPageSlug() || !root || overlay) return;
      var sel = window.getSelection();
      if (!sel || sel.isCollapsed || !sel.rangeCount) return;
      var range = sel.getRangeAt(0);
      if (!root.contains(range.commonAncestorContainer)) return;
      var quote = normWs(sel.toString());
      if (quote.length < 3) return;
      var rect = range.getBoundingClientRect();
      addBtn = el('<button type="button" class="khnl-note-add">✎ Add note</button>');
      addBtn.style.left = Math.max(8, window.scrollX + rect.left) + "px";
      addBtn.style.top = (window.scrollY + rect.bottom + 6) + "px";
      document.body.appendChild(addBtn);
      addBtn.addEventListener("click", function () {
        var heading = nearestHeading(range);
        hideAddBtn();
        openNoteEditor({
          pageSlug: currentPageSlug(),
          pageTitle: currentPageTitle(),
          anchorText: quote.slice(0, 500),
          anchorHeading: heading,
          body: "",
        });
      });
    }, 0);
  });
  document.addEventListener("mousedown", function (ev) {
    if (addBtn && !addBtn.contains(ev.target)) hideAddBtn();
  });

  function nearestHeading(range) {
    var root = articleEl();
    if (!root) return "";
    var heads = root.querySelectorAll("h1,h2,h3,h4,h5,h6");
    var best = "";
    for (var i = 0; i < heads.length; i++) {
      // heading before the selection start = candidate; last one wins
      if (heads[i].compareDocumentPosition(range.startContainer) & Node.DOCUMENT_POSITION_FOLLOWING) {
        best = normWs(heads[i].textContent).slice(0, 200);
      }
    }
    return best;
  }

  // --- note editor modal (create + edit + delete) ---------------------------
  function openNoteEditor(note) {
    if (overlay) closeModal();
    var isNew = !note.id;
    overlay = el(
      '<div class="khnl-sl-overlay" role="dialog" aria-modal="true" aria-label="Note">' +
        '<div class="khnl-sl-card" style="width:440px">' +
          '<button class="khnl-sl-x" aria-label="Close">&times;</button>' +
          "<h3>" + (isNew ? "Add a note" : "Your note") + "</h3>" +
          (note.anchorText
            ? '<span class="khnl-note-quote" style="white-space:normal">“' + note.anchorText.replace(/</g, "&lt;") + '”</span>'
            : "") +
          '<div class="khnl-sl-row" id="r-ntbody" style="margin-top:10px">' +
            '<textarea id="nt-body" rows="5" style="width:100%;box-sizing:border-box;padding:8px 9px;' +
              'border:1px solid #ccc;border-radius:7px;font:inherit"></textarea>' +
            '<div class="khnl-sl-err">Please write the note first.</div></div>' +
          '<p class="khnl-sl-formerr" id="nt-formerr"></p>' +
          '<div class="khnl-sl-actions">' +
            (isNew ? "" : '<button type="button" class="khnl-sl-btn ghost" id="nt-del" style="margin-right:auto;color:#b00020">Delete</button>') +
            '<button type="button" class="khnl-sl-btn ghost" id="nt-cancel">Cancel</button>' +
            '<button type="button" class="khnl-sl-btn primary" id="nt-save">Save</button>' +
          "</div>" +
        "</div>" +
      "</div>"
    );
    document.body.appendChild(overlay);
    overlay.querySelector(".khnl-sl-x").addEventListener("click", closeModal);
    overlay.querySelector("#nt-cancel").addEventListener("click", closeModal);
    overlay.addEventListener("mousedown", function (e) { if (e.target === overlay) closeModal(); });
    document.addEventListener("keydown", escClose);

    var ta = overlay.querySelector("#nt-body");
    ta.value = note.body || "";
    ta.focus();

    var del = overlay.querySelector("#nt-del");
    if (del) del.addEventListener("click", function () {
      if (!confirm("Delete this note?")) return;
      api("/api/collections/private_notes/records/" + note.id, { method: "DELETE" })
        .then(function () { ntInvalidate(); closeModal(); renderNotes(); })
        .catch(function () { alert("Could not delete — please try again."); });
    });

    overlay.querySelector("#nt-save").addEventListener("click", function () {
      var body = ta.value.trim();
      setBad("#r-ntbody", !body);
      if (!body) return;
      var btn = overlay.querySelector("#nt-save");
      busy(btn, true, "Save");
      var req = isNew
        ? api("/api/collections/private_notes/records", {
            method: "POST",
            body: {
              user: state.user.id,
              pageSlug: note.pageSlug,
              pageTitle: note.pageTitle || "",
              anchorText: note.anchorText || "",
              anchorHeading: note.anchorHeading || "",
              body: body.slice(0, 10000),
            },
          })
        : api("/api/collections/private_notes/records/" + note.id, {
            method: "PATCH", body: { body: body.slice(0, 10000) },
          });
      req.then(function () { ntInvalidate(); closeModal(); renderNotes(); })
        .catch(function (err) {
          busy(btn, false, "Save");
          var fe = overlay.querySelector("#nt-formerr");
          fe.textContent = state.user && !state.user.verified
            ? "Please verify your email first — check your inbox for the link."
            : ((err && err.message) || "Could not save — please try again.");
          fe.style.display = "block";
        });
    });
  }

  // --- "My notes" panel + export (§4.3) --------------------------------------
  function download(filename, mime, content) {
    var a = document.createElement("a");
    a.href = URL.createObjectURL(new Blob([content], { type: mime }));
    a.download = filename;
    a.click();
    setTimeout(function () { URL.revokeObjectURL(a.href); }, 5000);
  }

  function notesToMarkdown(all) {
    var byPage = {};
    all.forEach(function (r) { (byPage[r.pageSlug] = byPage[r.pageSlug] || []).push(r); });
    var out = "# My GI Wiki notes\n\nExported " + new Date().toISOString().slice(0, 10) + "\n";
    Object.keys(byPage).sort().forEach(function (slug) {
      out += "\n## " + (byPage[slug][0].pageTitle || slug) + " (`" + slug + "`)\n";
      byPage[slug].forEach(function (r) {
        if (r.anchorText) out += "\n> " + r.anchorText + "\n";
        out += "\n" + r.body + "\n";
        out += "\n*" + (r.created || "").slice(0, 10) + (r.orphaned ? " — unanchored" : "") + "*\n";
      });
    });
    return out;
  }

  function openMyNotes() {
    if (overlay) return;
    overlay = el(
      '<div class="khnl-sl-overlay" role="dialog" aria-modal="true" aria-label="My notes">' +
        '<div class="khnl-sl-card" style="width:460px">' +
          '<button class="khnl-sl-x" aria-label="Close">&times;</button>' +
          "<h3>My notes</h3>" +
          '<p class="khnl-sl-sub">Grouped by page. ' +
            '<button type="button" class="khnl-sl-link" id="nt-exmd">Download .md</button> · ' +
            '<button type="button" class="khnl-sl-link" id="nt-exjson">Download .json</button></p>' +
          '<div id="khnl-nt-list"></div>' +
        "</div>" +
      "</div>"
    );
    document.body.appendChild(overlay);
    overlay.querySelector(".khnl-sl-x").addEventListener("click", closeModal);
    overlay.addEventListener("mousedown", function (e) { if (e.target === overlay) closeModal(); });
    document.addEventListener("keydown", escClose);
    overlay.querySelector("#nt-exmd").addEventListener("click", function () {
      ntAll().then(function (all) { download("gi-wiki-notes.md", "text/markdown", notesToMarkdown(all)); });
    });
    overlay.querySelector("#nt-exjson").addEventListener("click", function () {
      ntAll().then(function (all) { download("gi-wiki-notes.json", "application/json", JSON.stringify(all, null, 2)); });
    });

    var listEl = overlay.querySelector("#khnl-nt-list");
    withState(listEl, function () {
      ntInvalidate();
      return ntAll();
    }, {
      emptyMsg: "No notes yet — select text on any page and click “✎ Add note”.",
      render: function (host, rows) {
        var byPage = {};
        rows.forEach(function (r) { (byPage[r.pageSlug] = byPage[r.pageSlug] || []).push(r); });
        Object.keys(byPage).sort().forEach(function (slug) {
          var grp = el('<div class="khnl-bm-grp"></div>');
          var link = el('<button type="button" class="khnl-bm-title" style="font-weight:700">' +
            (byPage[slug][0].pageTitle || slug).replace(/</g, "&lt;") + "</button>");
          link.addEventListener("click", function () { goToPage(slug); });
          grp.appendChild(link);
          host.appendChild(grp);
          byPage[slug].forEach(function (note) { host.appendChild(noteRow(note)); });
        });
      },
    });
  }

  registerMenuItem("notes", openMyNotes);

  // login/logout: drop the per-account caches and redo the page tools/marks
  auth.onChange(function () {
    bm.invalidate(); rv.invalidate(); ntInvalidate();
    renderPageTools(); decorateReviewed(); renderNotes();
  });

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
    ui: {
      withState: withState,
      openAuth: openAuth,
      openProfile: openProfile,
      registerMenuItem: registerMenuItem, // Steps 6–10 attach their features here
    },
    debug: {
      // Step 4 acceptance test: forced exception -> fallback panel + client_errors row.
      crash: function () { setTimeout(function () { throw new Error("KHNL forced test crash"); }, 0); },
    },
  };

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", boot);
  else boot();
})();
