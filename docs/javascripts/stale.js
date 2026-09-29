(function () {
  function isStale(snapshot, today, days) {
    if (!snapshot) return false;
    var ms = today.getTime() - new Date(snapshot + "T00:00:00Z").getTime();
    return ms / 86400000 > days;
  }
  if (typeof module !== "undefined" && module.exports) {
    module.exports = { isStale: isStale };
    return;
  }
  var el = document.getElementById("cy-stale");
  if (el && isStale(el.getAttribute("data-snapshot"), new Date(), 60)) el.hidden = false;
})();
