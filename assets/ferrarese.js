// Virtual Model Museum - Ferrarese language support
(function () {
  window.VMM_FERRARESE_I18N = {
  "kicker": "Benvegn\u00f9 int la mi culizion!",
  "intro1": "Sta culizion l\u2019\u00e8 stada tach\u00e8da da mi p\u00e0dar quasi setant\u2019an fa, e da al\u00f3ra la s\u2019\u00e8 tir\u00e0da ad\u00f2s un bel po\u2019 ad car\u00e0tar.",
  "intro2": "L\u2019intent l\u2019an \u00e8 brisa quel ad mustr\u00e0r la perfezion, mo ad d\u00e8r un\u2019uciadina cun af\u00e8t ai tanti cant\u00f3n dal mudel\u00ecsum: aeropl\u00e0n, m\u00e0chin, m\u00e9z milit\u00e8r, e quei picculi persun\u00e0z mecanich ch\u2019i rendan st h\u00f2bi acs\u00ec infinitam\u00e9nt simp\u00e0tic.",
  "controlsLabel": "Cum\u00e0nd dla galeria",
  "featuredLabel": "Mud\u00e8l Donati in evid\u00e9nza",
  "galleryLabel": "Galeria di mud\u00e8l",
  "searchPlaceholder": "Z\u00e9rca mud\u00e8l, scatula, scala o test...",
  "allYears": "T\u00f9t j\u2019an",
  "allScales": "T\u00f9t al scali",
  "reset": "Az\u00e8ra",
  "footer": "Virtual Model Museum \u2014 un archiv static ad mudel\u00ecsum.",
  "close": "S\u00e8ra",
  "previousPhoto": "Foto prima",
  "nextPhoto": "Foto d\u00f2p",
  "featured": "In evid\u00e9nza \u00b7 Donati",
  "kit": "Kit",
  "scale": "Scala",
  "post": "post",
  "posts": "post",
  "image": "im\u00e0gin",
  "images": "im\u00e0gin",
  "photo": "foto",
  "photos": "foto"
};
  const EXTRA = {
  "post-0005": {
    "fe": {
      "caption": "Qu\u00e9st l\u2019\u00e8 al cami\u00f3n us\u00e0 da la dita Donati dal 1946 fin ai prim an Set\u00e0nta. L\u2019\u00e9 st\u00e0 compr\u00e0 dapr\u00e8ss a Rovigo, in un magaz\u00e9n ad roba avanz\u00e0da da la gu\u00e8ra, e al serviva par purt\u00e0 birra e bibit ai bar sparpaj\u00e0 par la camp\u00e0gna frar\u00e9sa. Par qu\u00e8st l\u2019\u00e9 st\u00e0 al cami\u00f3n pi\u00f2 impurtant dla dita.\n\nAl sutista l\u2019era Stabellini Ermes, che tuti ciam\u00e0ven \u201cVampa\u201d. I ghe mancava un t\u00f2c dal did m\u00e9zan, pers int al ventilad\u00f3r dal radiad\u00f3r mentre al met\u00e9va man a un mot\u00f3r. Da put\u00ecn a n\u2019ariv\u00e0va brisa a cavarghe j\u2019\u00f2cc da la man: la me fascin\u00e0va e la me met\u00e9va un po\u2019 sogizion."
    }
  },
  "post-0004": {
    "fe": {
      "caption": "Anch se st kit al ciapa ben al st\u00ecl e la livr\u00e9a di cami\u00f3n dla dita Donati di an Cinqu\u00e0nta e Sess\u00e0nta, a liv\u00e9l storich al n\u2019\u00e8 brisa precis par quel ch\u2019ariguarda al tip ad m\u00e9z. L\u2019Opel Blitz ch\u2019as v\u00e9d chi al n\u2019\u00e8 mai st\u00e0 int la fl\u00f2ta Donati.\n\nIn realt\u00e0 la dita, che a Ferrara l\u2019era una di principal distribut\u00f3r ad bibit in quij an, la dopr\u00e0va una picula ma robusta squadra ad m\u00e9z: du Fiat 615, un a benzina e un diesel, una Lancia Beta e un p\u00e8r ad motocarri a tri r\u00f2d.\n\nLa dita l\u2019\u00e9 stada fundada da Agostino Donati e p\u00f2 la s\u2019\u00e9 purt\u00e0da avanti in fam\u00eca cun i fi\u00f9l Nello e Franco. La gh\u2019ha av\u00f9 un r\u00f2l impurtant par purt\u00e0 birra e bibit ai bar e a j\u2019ustar\u00ec dla cit\u00e0 e dla camp\u00e0gna. La livr\u00e9a dal mud\u00e8l, per\u00f2, la d\u00e0 pr\u00f2pi l\u2019id\u00e8a ad qu\u00e8la pres\u00e9nza famigliar in dal strad\u00f3n polver\u00f3s dla provincia: un piccul um\u00e0g a un mest\u00e9r ad fam\u00eca, pratich e concret, ch\u2019al gh\u2019ha d\u00e0 da b\u00e9var a la z\u00f2na par dec\u00e9nni."
    }
  }
};
  window.VMM_TRANSLATIONS = window.VMM_TRANSLATIONS || {};
  for (const [postId, langs] of Object.entries(EXTRA)) {
    window.VMM_TRANSLATIONS[postId] = window.VMM_TRANSLATIONS[postId] || {};
    for (const [lang, value] of Object.entries(langs)) {
      if (!window.VMM_TRANSLATIONS[postId][lang]) window.VMM_TRANSLATIONS[postId][lang] = value;
    }
  }

  function applyStaticFerrarese() {
    const active = document.querySelector('.lang-button.active');
    const lang = active && active.dataset ? active.dataset.lang : localStorage.getItem('vmm_lang');
    if (lang !== 'fe') return;
    const t = window.VMM_FERRARESE_I18N;
    const kicker = document.querySelector('.kicker'); if (kicker) kicker.textContent = t.kicker;
    const intro = document.querySelectorAll('.intro');
    if (intro[0]) intro[0].textContent = t.intro1;
    if (intro[1]) intro[1].textContent = t.intro2;
    const search = document.getElementById('search'); if (search) search.placeholder = t.searchPlaceholder;
    const reset = document.getElementById('reset'); if (reset) reset.textContent = t.reset;
    const yearOpt = document.querySelector('#yearFilter option[value=""]'); if (yearOpt) yearOpt.textContent = t.allYears;
    const scaleOpt = document.querySelector('#scaleFilter option[value=""]'); if (scaleOpt) scaleOpt.textContent = t.allScales;
    const footer = document.querySelector('.footer'); if (footer) footer.innerHTML = '<span translate="no">Virtual Model Museum</span> \u2014 un archiv static ad mudel\u00ecsum.';
    const contact = {
      kicker: 'Cuntàt', title: 'Dumànd, currezión o ricòrd ad mudelìsum?',
      body: 'Sta culizion l’è ancóra viva. Se a riconòss un kit, a véd un detàj storich, o a gh’ha vòja ad scambiàr du paròl sul mudelìsum, a sarò cuntént ad lézar al so messàg.',
      button: 'Scriv a la culizion', note: 'virtualmodelmuseum@gmail.com'
    };
    document.querySelectorAll('[data-contact-key]').forEach(el => { const k = el.getAttribute('data-contact-key'); if (contact[k]) el.textContent = contact[k]; });
  }

  function fixLabel() {
    const btn = document.querySelector('.lang-button[data-lang="fe"]');
    if (!btn) return;
    if (!btn.querySelector('.lang-code')) {
      btn.textContent = '';
      const code = document.createElement('span'); code.className = 'lang-code'; code.textContent = 'FE';
      const name = document.createElement('span'); name.textContent = 'Frar\u00e9s';
      btn.appendChild(code); btn.appendChild(document.createTextNode(' ')); btn.appendChild(name);
    }
  }

  function init() {
    fixLabel(); applyStaticFerrarese();
    document.querySelectorAll('.lang-button').forEach(btn => btn.addEventListener('click', () => {
      setTimeout(() => { fixLabel(); applyStaticFerrarese(); }, 80);
      setTimeout(() => { fixLabel(); applyStaticFerrarese(); }, 300);
    }));
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init); else init();
})();
