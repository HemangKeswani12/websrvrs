/* websrvrs — nav, work carousel, and one reveal pass.
   FAQ uses native <details>. Motion respects prefers-reduced-motion. */
(function () {
  "use strict";

  var mast = document.getElementById("mast");
  var burger = document.getElementById("burger");
  if (mast && burger) {
    burger.addEventListener("click", function () { mast.classList.toggle("open"); });
    mast.querySelectorAll("nav a").forEach(function (a) {
      a.addEventListener("click", function () { mast.classList.remove("open"); });
    });
  }

  var track = document.getElementById("track");
  var prev = document.getElementById("prev");
  var next = document.getElementById("next");
  if (track && prev && next) {
    var step = function () {
      var c = track.querySelector(".card");
      return c ? c.getBoundingClientRect().width + 18 : 366;
    };
    next.addEventListener("click", function () { track.scrollBy({ left: step(), behavior: "smooth" }); });
    prev.addEventListener("click", function () { track.scrollBy({ left: -step(), behavior: "smooth" }); });
    var sync = function () {
      var max = track.scrollWidth - track.clientWidth - 2;
      prev.style.opacity = track.scrollLeft <= 2 ? ".45" : "1";
      next.style.opacity = track.scrollLeft >= max ? ".45" : "1";
    };
    track.addEventListener("scroll", sync, { passive: true });
    window.addEventListener("resize", sync);
    sync();
  }

  var items = document.querySelectorAll(".rise");
  if (!("IntersectionObserver" in window) ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    items.forEach(function (el) { el.classList.add("in"); });
    return;
  }
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
    });
  }, { threshold: 0.06, rootMargin: "0px 0px -50px 0px" });
  items.forEach(function (el) { io.observe(el); });

  /* Safety net so a stalled observer can never leave a blank page */
  window.addEventListener("load", function () {
    setTimeout(function () { items.forEach(function (el) { el.classList.add("in"); }); }, 1500);
  });
})();
