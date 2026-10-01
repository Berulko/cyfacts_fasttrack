(function () {
  // Ссылка #q-N ведёт внутрь свёрнутой группы: раскрыть все родительские <details>, затем прокрутить.
  function detailsToOpen(el) {
    var out = [];
    for (var p = el && el.parentElement; p; p = p.parentElement) {
      if (p.tagName === "DETAILS") out.push(p);
    }
    return out;
  }
  if (typeof module !== "undefined" && module.exports) {
    module.exports = { detailsToOpen: detailsToOpen };
    return;
  }
  function openHash() {
    var id = decodeURIComponent(location.hash.slice(1));
    var el = id && document.getElementById(id);
    if (!el) return;
    detailsToOpen(el).forEach(function (d) { d.open = true; });
    el.scrollIntoView();
  }
  window.addEventListener("hashchange", openHash);
  document.addEventListener("DOMContentLoaded", openHash);
  document.addEventListener("click", function (e) {
    var a = e.target.closest && e.target.closest('a[href^="#q-"]');
    if (a && a.getAttribute("href") === location.hash) setTimeout(openHash, 0);
  });
})();
