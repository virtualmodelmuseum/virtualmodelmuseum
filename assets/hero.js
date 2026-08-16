(function () {
  function addHero() {
    if (document.querySelector(".vmm-hero")) return;

    var hero = document.createElement("section");
    hero.className = "vmm-hero";
    hero.setAttribute("aria-label", "Virtual Model Museum featured image");
    hero.innerHTML =
      '<img src="media/hero/ac-cobra-louisiana-villa-hero-16x9.png" ' +
      'alt="Blue AC Cobra scale model parked on a driveway in front of a Louisiana Victorian villa" ' +
      'loading="eager" fetchpriority="high">';

    var possibleAnchors = [
      ".contact-top-box",
      ".vmm-contact-top",
      ".filters",
      ".toolbar",
      ".controls",
      "#controls",
      "#search",
      ".pinned-grid",
      "#pinnedGrid",
      ".grid",
      "#grid"
    ];

    var anchor = null;
    for (var i = 0; i < possibleAnchors.length; i++) {
      anchor = document.querySelector(possibleAnchors[i]);
      if (anchor) break;
    }

    if (anchor && anchor.parentNode) {
      anchor.parentNode.insertBefore(hero, anchor);
      return;
    }

    var main = document.querySelector("main");
    if (main) {
      main.insertBefore(hero, main.firstChild);
      return;
    }

    document.body.insertBefore(hero, document.body.firstChild);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", addHero);
  } else {
    addHero();
  }
})();
