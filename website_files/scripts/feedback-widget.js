/*
 * KHNL GI Wiki — Feedback widget (Step 2)
 * Plan: ACCOUNTS-SOCIAL-PLAN.md §4.4 + §4.9
 *
 * Self-contained vanilla-JS drop-in. No framework, no build step, no dependencies
 * except the Cloudflare Turnstile script (loaded on demand). It injects its own
 * styles, a fixed bottom-right "?" bubble, and a minimal modal form.
 *
 * HOW TO USE (in the wiki repo's index.html — NOT this website folder):
 *   1. Set the two CONFIG values below (TURNSTILE_SITE_KEY, API_BASE).
 *   2. Add before </body>:   <script src="feedback-widget.js" defer></script>
 *      (or paste this whole file inside a <script> tag).
 *
 * Step 2 = anonymous only. Name + email are required. Step 4 will auto-fill them
 * for logged-in users (a one-liner: set FEEDBACK.prefill({name,email})).
 */
(function () {
  "use strict";

  // ----------------------------- CONFIG -----------------------------
  var CONFIG = {
    API_BASE: "https://api.khnicklemd.com",
    TURNSTILE_SITE_KEY: "0x4AAAAAADsnUhGCQy6CF38J", // public site key (not the secret)
    APP_VERSION: "step2-2026-06-28",
  };
  // Optional prefill hook for Step 4 (logged-in autofill). No-op until then.
  var prefilled = { name: "", email: "" };

  // ----------------------------- STYLES -----------------------------
  var CSS = "" +
    ".khnl-fb-bubble{position:fixed;right:20px;bottom:20px;width:52px;height:52px;border-radius:50%;" +
      "background:#2f6b3f;color:#fff;border:none;cursor:pointer;font-size:26px;line-height:52px;font-weight:700;" +
      "box-shadow:0 4px 14px rgba(0,0,0,.28);z-index:2147483000;transition:transform .12s ease,opacity .15s ease,right .15s ease}" +
    ".khnl-fb-bubble:hover{transform:scale(1.06);background:#3a824d}" +
    ".khnl-fb-overlay{position:fixed;inset:0;background:rgba(0,0,0,.45);z-index:2147483001;display:flex;" +
      "align-items:flex-end;justify-content:flex-end;padding:20px}" +
    ".khnl-fb-card{background:#fff;color:#1a1a1a;width:360px;max-width:calc(100vw - 40px);max-height:calc(100vh - 40px);" +
      "overflow:auto;border-radius:12px;box-shadow:0 10px 40px rgba(0,0,0,.35);padding:18px 18px 16px;" +
      "font:14px/1.45 -apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif}" +
    ".khnl-fb-card h3{margin:0 0 2px;font-size:17px}" +
    ".khnl-fb-sub{margin:0 0 12px;color:#666;font-size:12.5px}" +
    ".khnl-fb-row{margin:0 0 10px}" +
    ".khnl-fb-row label{display:block;font-weight:600;margin:0 0 4px;font-size:12.5px}" +
    ".khnl-fb-row input,.khnl-fb-row select,.khnl-fb-row textarea{width:100%;box-sizing:border-box;padding:8px 9px;" +
      "border:1px solid #ccc;border-radius:7px;font:inherit;background:#fff}" +
    ".khnl-fb-row textarea{resize:vertical;min-height:84px}" +
    ".khnl-fb-row input:focus,.khnl-fb-row select:focus,.khnl-fb-row textarea:focus{outline:none;border-color:#2f6b3f;" +
      "box-shadow:0 0 0 2px rgba(47,107,63,.18)}" +
    ".khnl-fb-err{color:#b00020;font-size:11.5px;margin-top:3px;display:none}" +
    ".khnl-fb-field-bad input,.khnl-fb-field-bad select,.khnl-fb-field-bad textarea{border-color:#b00020}" +
    ".khnl-fb-field-bad .khnl-fb-err{display:block}" +
    ".khnl-fb-note{font-size:11px;color:#777;margin:2px 0 12px}" +
    ".khnl-fb-actions{display:flex;gap:8px;justify-content:flex-end;align-items:center;margin-top:6px}" +
    ".khnl-fb-btn{padding:8px 14px;border-radius:8px;border:none;cursor:pointer;font:inherit;font-weight:600}" +
    ".khnl-fb-btn.primary{background:#2f6b3f;color:#fff}" +
    ".khnl-fb-btn.primary:hover{background:#3a824d}" +
    ".khnl-fb-btn.primary[disabled]{opacity:.6;cursor:default}" +
    ".khnl-fb-btn.ghost{background:transparent;color:#555}" +
    ".khnl-fb-formerr{color:#b00020;font-size:12.5px;margin:8px 0 0;display:none}" +
    ".khnl-fb-ts{margin:4px 0 10px;min-height:65px}" +
    ".khnl-fb-done{text-align:center;padding:18px 4px}" +
    ".khnl-fb-done .ok{font-size:34px;color:#1a7f37;line-height:1}" +
    ".khnl-fb-x{position:absolute;top:10px;right:12px;border:none;background:none;font-size:20px;cursor:pointer;color:#888}" +
    // Mobile: tuck the bubble partly off the right edge so it stays out of the
    // way, but remains tappable. Tapping it (or touching it) slides it fully in.
    "@media (max-width:768px){" +
      ".khnl-fb-bubble{width:46px;height:46px;line-height:46px;font-size:22px;right:-20px;opacity:.55}" +
      ".khnl-fb-bubble:hover,.khnl-fb-bubble:focus,.khnl-fb-bubble:active{right:14px;opacity:1;transform:none}" +
    "}";

  // ----------------------------- HELPERS -----------------------------
  function el(html) { var t = document.createElement("template"); t.innerHTML = html.trim(); return t.content.firstChild; }
  function inject(tag, attrs, parent) {
    var n = document.createElement(tag);
    for (var k in attrs) n.setAttribute(k, attrs[k]);
    (parent || document.head).appendChild(n);
    return n;
  }
  function currentSlug() {
    // Best-effort. If the wiki exposes a current-page slug globally, prefer it.
    if (window.__wikiCurrentSlug) return String(window.__wikiCurrentSlug);
    return (location.hash || location.pathname || "/").replace(/^#\/?/, "").slice(0, 480);
  }

  // ----------------------------- TURNSTILE -----------------------------
  var tsReady = false, tsWidgetId = null;
  function loadTurnstile(cb) {
    if (tsReady && window.turnstile) return cb();
    if (document.getElementById("khnl-ts-script")) {
      var iv = setInterval(function () { if (window.turnstile) { clearInterval(iv); tsReady = true; cb(); } }, 100);
      return;
    }
    inject("script", {
      id: "khnl-ts-script",
      src: "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit",
      async: "", defer: "",
    });
    var poll = setInterval(function () { if (window.turnstile) { clearInterval(poll); tsReady = true; cb(); } }, 100);
  }

  // ----------------------------- MODAL -----------------------------
  var overlay = null;

  function openForm() {
    if (overlay) return;
    overlay = el(
      '<div class="khnl-fb-overlay" role="dialog" aria-modal="true" aria-label="Send feedback">' +
        '<div class="khnl-fb-card" style="position:relative">' +
          '<button class="khnl-fb-x" aria-label="Close">&times;</button>' +
          '<h3>Send feedback</h3>' +
          '<p class="khnl-fb-sub">Bug, a clinical correction, or anything else — it goes privately to Nick.</p>' +
          '<form novalidate>' +
            '<div class="khnl-fb-row" id="r-type"><label for="fb-type">Concern type</label>' +
              '<select id="fb-type" name="type">' +
                '<option value="bug">Bug fix</option>' +
                '<option value="clinical">Clinical question / correction</option>' +
                '<option value="feature">Feature request</option>' +
                '<option value="other">Other</option>' +
              '</select>' +
              '<div class="khnl-fb-err">Please choose a type.</div></div>' +
            '<div class="khnl-fb-row" id="r-loc"><label for="fb-loc">Location of the problem</label>' +
              '<select id="fb-loc" name="location">' +
                '<option value="current">Current Page</option>' +
                '<option value="another">Another Page</option>' +
                '<option value="every">Every Page</option>' +
                '<option value="other">Other</option>' +
              '</select>' +
              '<input id="fb-loc-other" name="locationDetail" type="text" maxlength="480" ' +
                'style="display:none;margin-top:7px" placeholder="Which page? (paste a link or describe it)">' +
              '<div class="khnl-fb-err">Please specify the location.</div></div>' +
            '<div class="khnl-fb-row" id="r-name"><label for="fb-name">Your name</label>' +
              '<input id="fb-name" name="name" type="text" autocomplete="name" maxlength="120">' +
              '<div class="khnl-fb-err">Please enter your name.</div></div>' +
            '<div class="khnl-fb-row" id="r-email"><label for="fb-email">Contact email</label>' +
              '<input id="fb-email" name="email" type="email" autocomplete="email" maxlength="200">' +
              '<div class="khnl-fb-err">Please enter a valid email.</div></div>' +
            '<p class="khnl-fb-note">*Your contact info is only used to reply to you about this feedback.</p>' +
            '<div class="khnl-fb-row" id="r-body"><label for="fb-body">Description</label>' +
              '<textarea id="fb-body" name="body" maxlength="5000" ' +
                'placeholder="What happened, or what should change? Please don\'t include patient-identifiable information."></textarea>' +
              '<div class="khnl-fb-err">Please add a description.</div></div>' +
            '<div class="khnl-fb-ts" id="fb-ts"></div>' +
            '<p class="khnl-fb-formerr" id="fb-formerr"></p>' +
            '<div class="khnl-fb-actions">' +
              '<button type="button" class="khnl-fb-btn ghost" id="fb-cancel">Cancel</button>' +
              '<button type="submit" class="khnl-fb-btn primary" id="fb-submit">Send</button>' +
            '</div>' +
          '</form>' +
        '</div>' +
      '</div>'
    );
    document.body.appendChild(overlay);

    // prefill (Step 4)
    overlay.querySelector("#fb-name").value = prefilled.name || "";
    overlay.querySelector("#fb-email").value = prefilled.email || "";

    overlay.querySelector(".khnl-fb-x").addEventListener("click", closeForm);
    overlay.querySelector("#fb-cancel").addEventListener("click", closeForm);
    overlay.addEventListener("mousedown", function (e) { if (e.target === overlay) closeForm(); });
    document.addEventListener("keydown", escClose);
    overlay.querySelector("form").addEventListener("submit", submit);

    // Location field: show a free-text box for "Another Page" / "Other" only.
    var locSel = overlay.querySelector("#fb-loc");
    var locOther = overlay.querySelector("#fb-loc-other");
    function syncLoc() {
      var v = locSel.value;
      var needsText = (v === "another" || v === "other");
      locOther.style.display = needsText ? "block" : "none";
      locOther.placeholder = v === "other"
        ? "Please describe where"
        : "Which page? (paste a link or describe it)";
      if (!needsText) { locOther.value = ""; setBad("#r-loc", false); }
    }
    locSel.addEventListener("change", syncLoc);
    syncLoc();

    // render Turnstile
    var tsBox = overlay.querySelector("#fb-ts");
    loadTurnstile(function () {
      if (!overlay) return;
      try {
        tsWidgetId = window.turnstile.render(tsBox, { sitekey: CONFIG.TURNSTILE_SITE_KEY, theme: "light" });
      } catch (err) {
        tsBox.innerHTML = '<span style="font-size:11.5px;color:#b00020">Could not load the verification widget.</span>';
      }
    });
  }

  function escClose(e) { if (e.key === "Escape") closeForm(); }

  function closeForm() {
    if (!overlay) return;
    document.removeEventListener("keydown", escClose);
    overlay.remove();
    overlay = null;
    tsWidgetId = null;
  }

  function setBad(rowId, on) {
    var row = overlay.querySelector(rowId);
    if (row) row.classList.toggle("khnl-fb-field-bad", !!on);
  }
  function validEmail(s) { return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s); }

  function submit(ev) {
    ev.preventDefault();
    if (!overlay) return;
    var f = overlay.querySelector("form");
    var formErr = overlay.querySelector("#fb-formerr");
    formErr.style.display = "none";

    // Use explicit element lookups — `form.name` resolves to the form's own
    // DOM property, not the field named "name".
    var data = {
      type: overlay.querySelector("#fb-type").value,
      location: overlay.querySelector("#fb-loc").value,
      locationDetail: overlay.querySelector("#fb-loc-other").value.trim(),
      name: overlay.querySelector("#fb-name").value.trim(),
      email: overlay.querySelector("#fb-email").value.trim(),
      body: overlay.querySelector("#fb-body").value.trim(),
    };

    // inline validation — keep input, mark fields
    var ok = true;
    var locNeedsText = (data.location === "another" || data.location === "other");
    setBad("#r-loc", locNeedsText && !data.locationDetail);
    ok = ok && !(locNeedsText && !data.locationDetail);
    setBad("#r-name", !data.name); ok = ok && !!data.name;
    setBad("#r-email", !validEmail(data.email)); ok = ok && validEmail(data.email);
    setBad("#r-body", !data.body); ok = ok && !!data.body;
    if (!ok) return;

    // Resolve a human-readable location string for the report.
    var LOC_LABELS = { current: "Current Page", another: "Another Page", every: "Every Page", other: "Other" };
    var locationLabel = LOC_LABELS[data.location] || data.location;
    var locationValue = data.location === "current"
      ? "Current Page (" + currentSlug() + ")"
      : (locNeedsText ? locationLabel + ": " + data.locationDetail : locationLabel);

    // Turnstile token
    var token = "";
    try { token = window.turnstile ? window.turnstile.getResponse(tsWidgetId) : ""; } catch (e) { token = ""; }
    if (!token) {
      formErr.textContent = "Please complete the verification challenge above.";
      formErr.style.display = "block";
      return;
    }

    // loading state
    var btn = overlay.querySelector("#fb-submit");
    btn.disabled = true;
    var label = btn.textContent;
    btn.textContent = "Sending…";

    var payload = {
      type: data.type,
      location: locationValue,
      locationKind: data.location,
      locationDetail: data.locationDetail,
      name: data.name,
      contactEmail: data.email,
      body: data.body,
      // hidden auto-captured context
      pageSlug: currentSlug(),
      pageTitle: (document.title || "").slice(0, 480),
      userAgent: (navigator.userAgent || "").slice(0, 580),
      appVersion: CONFIG.APP_VERSION,
    };

    var url = CONFIG.API_BASE + "/api/collections/feedback/records?turnstile=" + encodeURIComponent(token);
    fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    })
      .then(function (r) { return r.json().then(function (j) { return { ok: r.ok, j: j }; }); })
      .then(function (res) {
        if (!res.ok) throw res.j;
        showThanks();
      })
      .catch(function (errJson) {
        // re-arm Turnstile (tokens are single-use) and surface a message
        try { if (window.turnstile) window.turnstile.reset(tsWidgetId); } catch (e) {}
        btn.disabled = false;
        btn.textContent = label;
        var msg = (errJson && errJson.message) ? errJson.message : "Something went wrong. Please try again.";
        // map PocketBase per-field errors inline if present
        if (errJson && errJson.data) {
          if (errJson.data.contactEmail) setBad("#r-email", true);
          if (errJson.data.name) setBad("#r-name", true);
          if (errJson.data.body) setBad("#r-body", true);
        }
        formErr.textContent = msg;
        formErr.style.display = "block";
      });
  }

  function showThanks() {
    if (!overlay) return;
    var card = overlay.querySelector(".khnl-fb-card");
    card.innerHTML =
      '<button class="khnl-fb-x" aria-label="Close">&times;</button>' +
      '<div class="khnl-fb-done"><div class="ok">✓</div>' +
        '<h3 style="margin:8px 0 4px">Thank you</h3>' +
        '<p class="khnl-fb-sub" style="margin:0">Your feedback was sent. Nick will follow up by email if needed.</p>' +
        '<div style="margin-top:14px"><button class="khnl-fb-btn primary" id="fb-close2">Done</button></div></div>';
    card.querySelector(".khnl-fb-x").addEventListener("click", closeForm);
    card.querySelector("#fb-close2").addEventListener("click", closeForm);
  }

  // ----------------------------- BOOT -----------------------------
  function boot() {
    inject("style", { id: "khnl-fb-style" }).textContent = CSS;
    var bubble = el('<button class="khnl-fb-bubble" aria-label="Send feedback" title="Send feedback">?</button>');
    bubble.addEventListener("click", openForm);
    document.body.appendChild(bubble);
  }

  // public hook for Step 4 autofill
  window.FEEDBACK = {
    prefill: function (o) { prefilled = { name: (o && o.name) || "", email: (o && o.email) || "" }; },
    open: openForm,
  };

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", boot);
  else boot();
})();
