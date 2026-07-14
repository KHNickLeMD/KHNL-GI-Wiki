/*
 * KHNL GI Wiki — per-page Share button
 *
 * Self-contained vanilla-JS drop-in (same pattern as feedback-widget.js /
 * social-layer.js): injects its own styles, listens for the router's
 * `khnl:nav` event, and mounts a small share button into #page-meta-top on
 * every wiki-page view. No framework, no build step, no dependencies, no
 * network calls.
 *
 * What it does:
 *   - "Copy link"  → canonical URL of the current page to the clipboard,
 *                    with an inline "Copied!" confirmation.
 *   - "Share via…" → native Web Share API where available (mobile OS sheet).
 *   - Fallback (no navigator.share): direct intents for X, LinkedIn, Email.
 *
 * Self-check (no test framework): `node website_files/scripts/share-button.js`
 * runs assert-based checks of the intent-URL builder and exits 0/1.
 *
 * HOW TO USE: <script src="website_files/scripts/share-button.js" defer></script>
 */
(function () {
  "use strict";

  // ------------------- pure helpers (Node-testable) -------------------

  // Canonical URL = clean-path SPA route; the router keeps location.pathname
  // in sync with the current page (viewToPath), so origin + pathname is
  // canonical. Strips query/hash noise.
  function canonicalUrl(origin, pathname) {
    return origin + pathname;
  }

  // Build the desktop-fallback share intents for a page.
  function buildIntents(url, title) {
    var u = encodeURIComponent(url);
    var t = encodeURIComponent(title);
    return {
      x: "https://x.com/intent/post?text=" + t + "&url=" + u,
      linkedin: "https://www.linkedin.com/sharing/share-offsite/?url=" + u,
      email: "mailto:?subject=" + encodeURIComponent(title + " — KHNL GI Wiki") +
             "&body=" + encodeURIComponent(title + "\n" + url),
    };
  }

  // ----------------------- Node self-check mode -----------------------
  if (typeof document === "undefined") {
    var url = "https://khnicklemd.com/achalasia";
    var out = buildIntents(url, "Achalasia & Chagas?");
    var fails = [];
    function check(cond, msg) { if (!cond) fails.push(msg); }
    check(canonicalUrl("https://khnicklemd.com", "/achalasia") === url, "canonicalUrl");
    check(out.x.indexOf("https://x.com/intent/post?text=") === 0, "x intent base");
    check(out.x.indexOf(encodeURIComponent(url)) > -1, "x url param encoded");
    check(out.x.indexOf("Achalasia%20%26%20Chagas%3F") > -1, "x text &/? encoded");
    check(out.linkedin === "https://www.linkedin.com/sharing/share-offsite/?url=https%3A%2F%2Fkhnicklemd.com%2Fachalasia", "linkedin intent");
    check(out.email.indexOf("mailto:?subject=") === 0, "email base");
    check(out.email.indexOf("%0A") > -1, "email body has title+url on two lines");
    if (fails.length) { console.error("share-button self-check FAILED: " + fails.join(", ")); process.exit(1); }
    console.log("share-button self-check OK");
    return;
  }

  // ----------------------------- styles ------------------------------
  // Uses the site's CSS custom properties (:root / [data-theme="dark"] in
  // index.html) so light/dark theming is automatic.
  var CSS = "" +
    "#khnl-share{border:none;background:none;cursor:pointer;width:26px;height:26px;border-radius:6px;" +
      "display:inline-flex;align-items:center;justify-content:center;flex-shrink:0;padding:0;" +
      "color:var(--text-muted,#5a6f60);transition:color .15s,background .15s}" +
    "#khnl-share:hover{color:var(--accent,#2f6b3f);background:var(--accent-light,#e8f1ea)}" +
    "#khnl-share:focus-visible{outline:2px solid var(--accent,#2f6b3f);outline-offset:1px}" +
    ".khnl-share-menu{position:fixed;z-index:2147483000;min-width:190px;padding:5px;" +
      "background:var(--surface,#fff);border:1px solid var(--border,#dde5dc);border-radius:10px;" +
      "box-shadow:var(--shadow-md,0 4px 14px rgba(20,40,25,.12));" +
      "font-family:var(--font-sans,-apple-system,sans-serif)}" +
    ".khnl-share-item{display:flex;align-items:center;gap:9px;width:100%;padding:7px 10px;margin:0;" +
      "border:none;background:none;border-radius:7px;cursor:pointer;font:inherit;font-size:13px;" +
      "color:var(--text,#1b2a1e);text-decoration:none;text-align:left;line-height:1.4}" +
    ".khnl-share-item:hover,.khnl-share-item:focus-visible{background:var(--accent-light,#e8f1ea);" +
      "color:var(--accent,#2f6b3f);outline:none}" +
    ".khnl-share-item svg{flex-shrink:0;opacity:.75}" +
    ".khnl-share-item.copied{color:var(--accent,#2f6b3f);font-weight:600}";

  // ----------------------------- helpers ------------------------------
  function el(html) { var t = document.createElement("template"); t.innerHTML = html.trim(); return t.content.firstChild; }
  function esc(s) { return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/"/g, "&quot;"); }

  // Small inline icons (stroke = currentColor so they follow the theme).
  var I = {
    share: '<svg width="15" height="15" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M8 10V1.8"/><path d="M5.2 4.2 8 1.4l2.8 2.8"/><path d="M4.8 7H4a1.8 1.8 0 0 0-1.8 1.8v4A1.8 1.8 0 0 0 4 14.6h8a1.8 1.8 0 0 0 1.8-1.8v-4A1.8 1.8 0 0 0 12 7h-.8"/></svg>',
    link: '<svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6.5 9.5a3 3 0 0 0 4.2.3l2.4-2.4a3 3 0 0 0-4.2-4.2L7.6 4.4"/><path d="M9.5 6.5a3 3 0 0 0-4.2-.3L2.9 8.6a3 3 0 0 0 4.2 4.2l1.3-1.2"/></svg>',
    x: '<svg width="13" height="13" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true"><path d="M9.5 6.8 15 .5h-1.3L8.9 6 5.1.5H.7L6.5 9 .7 15.5H2L7 9.8l4 5.7h4.4L9.5 6.8Zm-1.8 2-.6-.8L2.5 1.5h2l3.8 5.4.5.8 4.9 7h-2L7.7 8.8Z"/></svg>',
    linkedin: '<svg width="13" height="13" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true"><path d="M13.6 1H2.4A1.4 1.4 0 0 0 1 2.4v11.2A1.4 1.4 0 0 0 2.4 15h11.2a1.4 1.4 0 0 0 1.4-1.4V2.4A1.4 1.4 0 0 0 13.6 1ZM5.2 13H3.1V6.3h2.1V13ZM4.1 5.4a1.2 1.2 0 1 1 0-2.4 1.2 1.2 0 0 1 0 2.4ZM13 13h-2.1V9.7c0-.8 0-1.8-1.1-1.8s-1.3.9-1.3 1.8V13H6.4V6.3h2v.9h.1a2.2 2.2 0 0 1 2-1.1c2.1 0 2.5 1.4 2.5 3.2V13Z"/></svg>',
    mail: '<svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="1.5" y="3" width="13" height="10" rx="1.8"/><path d="m2 4 6 5 6-5"/></svg>',
  };

  // ------------------------------ menu -------------------------------
  var menu = null;

  function closeMenu(refocus) {
    if (!menu) return;
    menu.remove();
    menu = null;
    document.removeEventListener("keydown", onMenuKey, true);
    document.removeEventListener("mousedown", onOutside, true);
    window.removeEventListener("resize", onDismiss);
    window.removeEventListener("scroll", onDismiss, true);
    var btn = document.getElementById("khnl-share");
    if (btn) {
      btn.setAttribute("aria-expanded", "false");
      if (refocus) btn.focus();
    }
  }
  function onDismiss() { closeMenu(false); }
  function onOutside(e) {
    var btn = document.getElementById("khnl-share");
    if (menu && !menu.contains(e.target) && e.target !== btn && !(btn && btn.contains(e.target))) closeMenu(false);
  }
  function onMenuKey(e) {
    if (!menu) return;
    if (e.key === "Escape") { e.stopPropagation(); closeMenu(true); return; }
    if (e.key !== "ArrowDown" && e.key !== "ArrowUp") return;
    e.preventDefault();
    var items = Array.prototype.slice.call(menu.querySelectorAll(".khnl-share-item"));
    var i = items.indexOf(document.activeElement);
    var next = e.key === "ArrowDown" ? i + 1 : i - 1;
    if (next < 0) next = items.length - 1;
    if (next >= items.length) next = 0;
    items[next].focus();
  }

  function copyText(text) {
    if (navigator.clipboard && window.isSecureContext) return navigator.clipboard.writeText(text);
    // ponytail: execCommand fallback only matters for http://localhost-style
    // testing; every real visitor is on https where navigator.clipboard exists.
    return new Promise(function (resolve, reject) {
      var ta = document.createElement("textarea");
      ta.value = text; ta.style.position = "fixed"; ta.style.opacity = "0";
      document.body.appendChild(ta); ta.select();
      try { document.execCommand("copy") ? resolve() : reject(new Error("copy failed")); }
      catch (err) { reject(err); }
      ta.remove();
    });
  }

  function openMenu(btn) {
    if (menu) { closeMenu(false); return; }
    var url = canonicalUrl(location.origin, location.pathname);
    var title = ((document.getElementById("page-title") || {}).textContent || document.title).trim();
    var intents = buildIntents(url, title);

    var items = '<button type="button" class="khnl-share-item" role="menuitem" data-act="copy">' + I.link + "Copy link</button>";
    if (navigator.share) {
      items += '<button type="button" class="khnl-share-item" role="menuitem" data-act="native">' + I.share + "Share via…</button>";
    } else {
      items +=
        '<a class="khnl-share-item" role="menuitem" href="' + esc(intents.x) + '" target="_blank" rel="noopener noreferrer">' + I.x + "Share on X</a>" +
        '<a class="khnl-share-item" role="menuitem" href="' + esc(intents.linkedin) + '" target="_blank" rel="noopener noreferrer">' + I.linkedin + "Share on LinkedIn</a>" +
        '<a class="khnl-share-item" role="menuitem" href="' + esc(intents.email) + '">' + I.mail + "Share by email</a>";
    }
    menu = el('<div class="khnl-share-menu" role="menu" aria-label="Share this page">' + items + "</div>");
    document.body.appendChild(menu);

    // Position fixed, right-aligned under the button (avoids any topbar
    // clipping/stacking issues). Dismiss on scroll/resize instead of tracking.
    var r = btn.getBoundingClientRect();
    menu.style.top = r.bottom + 6 + "px";
    menu.style.right = Math.max(8, window.innerWidth - r.right) + "px";

    btn.setAttribute("aria-expanded", "true");
    document.addEventListener("keydown", onMenuKey, true);
    document.addEventListener("mousedown", onOutside, true);
    window.addEventListener("resize", onDismiss);
    window.addEventListener("scroll", onDismiss, true);

    menu.querySelector(".khnl-share-item").focus();

    var copyBtn = menu.querySelector('[data-act="copy"]');
    copyBtn.addEventListener("click", function () {
      copyText(url).then(function () {
        copyBtn.classList.add("copied");
        copyBtn.innerHTML = I.link + "Copied!";
        setTimeout(function () { closeMenu(true); }, 900);
      }).catch(function () {
        copyBtn.innerHTML = I.link + "Copy failed";
      });
    });
    var nativeBtn = menu.querySelector('[data-act="native"]');
    if (nativeBtn) {
      nativeBtn.addEventListener("click", function () {
        closeMenu(false);
        navigator.share({ title: title, text: title + " — KHNL GI Wiki", url: url }).catch(function () {});
      });
    }
    menu.querySelectorAll("a.khnl-share-item").forEach(function (a) {
      a.addEventListener("click", function () { closeMenu(false); });
    });
  }

  // --------------------------- mount / boot ---------------------------
  var lastView = "";

  function render() {
    closeMenu(false);
    var old = document.getElementById("khnl-share");
    if (old) old.remove();
    var host = document.getElementById("page-meta-top");
    if (!host || lastView.indexOf("page:") !== 0) return;
    var btn = el('<button id="khnl-share" type="button" title="Share this page" aria-label="Share this page" ' +
      'aria-haspopup="menu" aria-expanded="false">' + I.share + "</button>");
    btn.addEventListener("click", function () { openMenu(btn); });
    host.appendChild(btn);
  }

  function boot() {
    var style = document.createElement("style");
    style.id = "khnl-share-style";
    style.textContent = CSS;
    document.head.appendChild(style);
    // index.html dispatches `khnl:nav` {view} on every route change (including
    // boot); page views look like "page:SLUG". Deferred like social-layer.js —
    // recordNav fires before the page header finishes rendering.
    document.addEventListener("khnl:nav", function (ev) {
      lastView = (ev.detail && ev.detail.view) || "";
      setTimeout(render, 0);
    });
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", boot);
  else boot();
})();
