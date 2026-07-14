// Virtual Model Museum - language label encoding fix
(function () {
  const LABELS = {
    en: ["GB", "English"],
    it: ["IT", "Italiano"],
    fe: ["FE", "Frar\u00e9s"],
    de: ["DE", "Deutsch"],
    fr: ["FR", "Fran\u00e7ais"],
    es: ["ES", "Espa\u00f1ol"],
    sv: ["SV", "Svenska"],
    cs: ["CS", "\u010ce\u0161tina"],
    ru: ["RU", "\u0420\u0443\u0441\u0441\u043a\u0438\u0439"],
    ja: ["JP", "\u65e5\u672c\u8a9e"],
    zh: ["CN", "\u4e2d\u6587"]
  };

  function makeLabel(button, code, name) {
    button.textContent = "";
    const codeSpan = document.createElement("span");
    codeSpan.className = "lang-code";
    codeSpan.textContent = code;
    const nameSpan = document.createElement("span");
    nameSpan.textContent = name;
    button.appendChild(codeSpan);
    button.appendChild(document.createTextNode(" "));
    button.appendChild(nameSpan);
    button.title = name;
  }

  function fixLabels() {
    document.querySelectorAll(".lang-button[data-lang]").forEach(btn => {
      const lang = btn.getAttribute("data-lang");
      if (LABELS[lang]) makeLabel(btn, LABELS[lang][0], LABELS[lang][1]);
    });
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", fixLabels);
  else fixLabels();

  document.addEventListener("click", function (ev) {
    if (ev.target.closest && ev.target.closest(".lang-button")) {
      setTimeout(fixLabels, 50);
      setTimeout(fixLabels, 250);
    }
  });

  window.VMM_FIX_LANGUAGE_LABELS = fixLabels;
})();
