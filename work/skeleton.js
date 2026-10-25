/* websrvrs demo skeleton — shared behaviour for every course site.
   Two accordions and a nav toggle. No scroll animations by design. */
(function () {
  "use strict";

  var header = document.getElementById("header");
  var toggle = document.getElementById("navToggle");

  if (toggle && header) {
    toggle.addEventListener("click", function () { header.classList.toggle("open"); });
    header.querySelectorAll(".nav-links a").forEach(function (a) {
      a.addEventListener("click", function () { header.classList.remove("open"); });
    });
  }

  /* Curriculum: multiple modules may be open at once */
  document.querySelectorAll(".mod").forEach(function (mod) {
    var head = mod.querySelector(".mod-head");
    var body = mod.querySelector(".mod-body");
    head.addEventListener("click", function () {
      var open = mod.classList.toggle("open");
      body.style.maxHeight = open ? body.scrollHeight + "px" : null;
    });
  });

  /* FAQ: one at a time */
  document.querySelectorAll(".faq-item").forEach(function (item) {
    var q = item.querySelector(".faq-q");
    var a = item.querySelector(".faq-a");
    q.addEventListener("click", function () {
      var isOpen = item.classList.contains("open");
      document.querySelectorAll(".faq-item.open").forEach(function (other) {
        if (other !== item) {
          other.classList.remove("open");
          other.querySelector(".faq-a").style.maxHeight = null;
        }
      });
      item.classList.toggle("open", !isOpen);
      a.style.maxHeight = isOpen ? null : a.scrollHeight + "px";
    });
  });
})();
