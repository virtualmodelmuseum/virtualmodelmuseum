// Virtual Model Museum — language encoding and UI hotfix
// This file is ASCII-only on purpose, so Windows PowerShell cannot mangle accents.
(function () {
  const UI = {
    es: {
      kicker: '\u00a1Bienvenido a mi colecci\u00f3n!',
      intro1: 'Esta colecci\u00f3n fue iniciada por mi padre hace casi setenta a\u00f1os y desde entonces ha ido acumulando car\u00e1cter en silencio.',
      intro2: 'El objetivo no es exhibir la perfecci\u00f3n, sino ofrecer una mirada afectuosa a los muchos rincones agradables del modelismo: aviones, autom\u00f3viles, veh\u00edculos militares y esos peque\u00f1os personajes mec\u00e1nicos que hacen que esta afici\u00f3n sea tan inagotablemente encantadora.',
      search: 'Buscar modelo, kit, escala o texto...',
      years: 'Todos los a\u00f1os',
      scales: 'Todas las escalas',
      reset: 'Restablecer',
      posts: 'publicaciones', post: 'publicaci\u00f3n', images: 'im\u00e1genes', image: 'imagen', photos: 'fotos', photo: 'foto',
      featured: 'Destacado \u00b7 Donati', kit: 'Kit', scale: 'Escala', footer: 'Virtual Model Museum \u2014 un archivo est\u00e1tico de modelismo.'
    },
    sv: {
      kicker: 'V\u00e4lkommen till min samling!',
      intro1: 'Den h\u00e4r samlingen p\u00e5b\u00f6rjades av min far f\u00f6r n\u00e4stan sjuttio \u00e5r sedan och har sedan dess stillsamt samlat p\u00e5 sig karakt\u00e4r.',
      intro2: 'M\u00e5let \u00e4r inte att visa upp perfektion, utan att ge en varm blick p\u00e5 skalmodellbyggandets m\u00e5nga tilltalande h\u00f6rn: flygplan, bilar, milit\u00e4rfordon och de sm\u00e5 mekaniska personligheter som g\u00f6r hobbyn s\u00e5 outt\u00f6mligt charmig.',
      search: 'S\u00f6k modell, byggsats, skala eller text...',
      years: 'Alla \u00e5r',
      scales: 'Alla skalor',
      reset: '\u00c5terst\u00e4ll',
      posts: 'inl\u00e4gg', post: 'inl\u00e4gg', images: 'bilder', image: 'bild', photos: 'foton', photo: 'foto',
      featured: 'Utvald \u00b7 Donati', kit: 'Byggsats', scale: 'Skala', footer: 'Virtual Model Museum \u2014 ett statiskt arkiv \u00f6ver skalmodeller.'
    },
    cs: {
      kicker: 'V\u00edtejte v m\u00e9 sb\u00edrce!',
      intro1: 'Tuto sb\u00edrku zalo\u017eil m\u016fj otec t\u00e9m\u011b\u0159 p\u0159ed sedmdes\u00e1ti lety a od t\u00e9 doby ti\u0161e z\u00edsk\u00e1v\u00e1 sv\u016fj osobit\u00fd charakter.',
      intro2: 'C\u00edlem nen\u00ed p\u0159edv\u00e1d\u011bt dokonalost, ale nab\u00eddnout laskav\u00fd pohled do mnoha p\u0159\u00edjemn\u00fdch z\u00e1kout\u00ed model\u00e1\u0159stv\u00ed: letadel, automobil\u016f, vojensk\u00fdch vozidel a t\u011bch drobn\u00fdch mechanick\u00fdch postav, d\u00edky nim\u017e je tento kon\u00ed\u010dek tak nevy\u010derpateln\u011b p\u016fvabn\u00fd.',
      search: 'Hledat model, stavebnici, m\u011b\u0159\u00edtko nebo text...',
      years: 'V\u0161echny roky',
      scales: 'V\u0161echna m\u011b\u0159\u00edtka',
      reset: 'Obnovit',
      posts: 'p\u0159\u00edsp\u011bvky', post: 'p\u0159\u00edsp\u011bvek', images: 'obr\u00e1zky', image: 'obr\u00e1zek', photos: 'fotografie', photo: 'fotografie',
      featured: 'Vybran\u00e9 \u00b7 Donati', kit: 'Stavebnice', scale: 'M\u011b\u0159\u00edtko', footer: 'Virtual Model Museum \u2014 statick\u00fd archiv model\u00e1\u0159stv\u00ed.'
    }
  };

  function lang() {
    const active = document.querySelector('.lang-button.active');
    return active && active.dataset ? active.dataset.lang : (localStorage.getItem('vmm_lang') || 'en');
  }

  function setText(sel, text) {
    const el = document.querySelector(sel);
    if (el && text) el.textContent = text;
  }

  function setFirstOption(sel, text) {
    const el = document.querySelector(sel);
    if (el && el.options && el.options[0] && text) el.options[0].textContent = text;
  }

  function replaceCount(id, singular, plural) {
    const el = document.getElementById(id);
    if (!el) return;
    const m = el.textContent.match(/\d+/);
    if (!m) return;
    const n = Number(m[0]);
    el.textContent = n + ' ' + (n === 1 ? singular : plural);
  }

  function apply() {
    const t = UI[lang()];
    if (!t) return;
    setText('.kicker', t.kicker);
    const intros = document.querySelectorAll('.intro');
    if (intros[0]) intros[0].textContent = t.intro1;
    if (intros[1]) intros[1].textContent = t.intro2;
    const search = document.getElementById('search');
    if (search) search.placeholder = t.search;
    setFirstOption('#yearFilter', t.years);
    setFirstOption('#scaleFilter', t.scales);
    setText('#reset', t.reset);
    replaceCount('postCount', t.post, t.posts);
    replaceCount('imageCount', t.image, t.images);
    document.querySelectorAll('.featured-badge').forEach(el => { el.textContent = t.featured; });
    document.querySelectorAll('.tag').forEach(el => {
      el.innerHTML = el.innerHTML.replace(/^Kit:/, t.kit + ':').replace(/^Scale:/, t.scale + ':');
    });
    const footer = document.querySelector('.footer');
    if (footer && t.footer) footer.textContent = t.footer;
  }

  function install() {
    apply();
    document.querySelectorAll('.lang-button').forEach(btn => {
      btn.addEventListener('click', () => {
        setTimeout(apply, 30);
        setTimeout(apply, 160);
        setTimeout(apply, 500);
      });
    });
    ['input', 'change'].forEach(ev => {
      const search = document.getElementById('search');
      const year = document.getElementById('yearFilter');
      const scale = document.getElementById('scaleFilter');
      if (search) search.addEventListener(ev, () => setTimeout(apply, 50));
      if (year) year.addEventListener(ev, () => setTimeout(apply, 50));
      if (scale) scale.addEventListener(ev, () => setTimeout(apply, 50));
    });
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', install);
  else install();
})();
