const posts = Array.isArray(window.VMM_POSTS) ? window.VMM_POSTS : [];
const POST_TRANSLATIONS = window.VMM_TRANSLATIONS || {};

// Donati first row, fixed order.
const PINNED_IDS = ['post-0005', 'post-0004'];

const I18N = {
  "en": {
    "kicker": "Welcome to my collection!",
    "intro1": "This collection was begun by my father nearly seventy years ago, and has been quietly gathering character ever since.",
    "intro2": "The aim is not to parade perfection, but to offer a fond look at the many agreeable corners of scale modelling: aircraft, motor cars, military vehicles, and those small mechanical characters that make the hobby so endlessly charming.",
    "controlsLabel": "Gallery controls",
    "featuredLabel": "Featured Donati models",
    "galleryLabel": "Model gallery",
    "searchPlaceholder": "Search model, kit, scale or text...",
    "allYears": "All years",
    "allScales": "All scales",
    "reset": "Reset",
    "footer": "Virtual Model Museum — a static archive of scale modelling.",
    "close": "Close",
    "previousPhoto": "Previous photo",
    "nextPhoto": "Next photo",
    "featured": "Featured · Donati",
    "kit": "Kit",
    "scale": "Scale",
    "post": "post",
    "posts": "posts",
    "image": "image",
    "images": "images",
    "photo": "photo",
    "photos": "photos",
    "allCategories": "All categories",
    "categoryAircraft": "Aircraft",
    "categoryCars": "Cars & road vehicles",
    "categoryMilitary": "Military vehicles",
    "categoryMotorcycles": "Motorcycles",
    "categoryShips": "Ships",
    "categoryUnclassified": "To check"
  },
  "it": {
    "kicker": "Benvenuti nella mia collezione!",
    "intro1": "Questa collezione fu iniziata da mio padre quasi settant’anni fa e da allora ha continuato, con discrezione, ad accumulare carattere.",
    "intro2": "Lo scopo non è sfilare la perfezione, ma offrire uno sguardo affettuoso ai molti piacevoli angoli del modellismo: aerei, automobili, veicoli militari e quei piccoli personaggi meccanici che rendono questo hobby così inesauribilmente affascinante.",
    "controlsLabel": "Controlli della galleria",
    "featuredLabel": "Modelli Donati in evidenza",
    "galleryLabel": "Galleria dei modelli",
    "searchPlaceholder": "Cerca modello, kit, scala o testo...",
    "allYears": "Tutti gli anni",
    "allScales": "Tutte le scale",
    "reset": "Azzera",
    "footer": "Virtual Model Museum — un archivio statico di modellismo.",
    "close": "Chiudi",
    "previousPhoto": "Foto precedente",
    "nextPhoto": "Foto successiva",
    "featured": "In evidenza · Donati",
    "kit": "Kit",
    "scale": "Scala",
    "post": "post",
    "posts": "post",
    "image": "immagine",
    "images": "immagini",
    "photo": "foto",
    "photos": "foto",
    "allCategories": "Tutte le categorie",
    "categoryAircraft": "Aerei",
    "categoryCars": "Auto e veicoli stradali",
    "categoryMilitary": "Mezzi militari",
    "categoryMotorcycles": "Moto",
    "categoryShips": "Navi",
    "categoryUnclassified": "Da verificare"
  },
  "fe": {
    "kicker": "Benvegnù int la mi culizion!",
    "intro1": "Sta culizion l’è stada tachèda da mi pàdar quasi setant’an fa, e da alóra la s’è tiràda adòs un bel po’ ad caràtar.",
    "intro2": "L’intent l’an è brisa quel ad mustràr la perfezion, mo ad dèr un’uciadina cun afèt ai tanti cantón dal mudelìsum: aeroplàn, màchin, méz militèr, e quei picculi persunàz mecanich ch’i rendan st hòbi acsì infinitamént simpàtic.",
    "controlsLabel": "Cumànd dla galeria",
    "featuredLabel": "Mudèl Donati in evidénza",
    "galleryLabel": "Galeria di mudèl",
    "searchPlaceholder": "Zérca mudèl, scatula, scala o test...",
    "allYears": "Tùt j’an",
    "allScales": "Tùt al scali",
    "reset": "Azèra",
    "footer": "Virtual Model Museum — un archiv static ad mudelìsum.",
    "close": "Sèra",
    "previousPhoto": "Foto prima",
    "nextPhoto": "Foto dòp",
    "featured": "In evidénza · Donati",
    "kit": "Kit",
    "scale": "Scala",
    "post": "post",
    "posts": "post",
    "image": "imàgin",
    "images": "imàgin",
    "photo": "foto",
    "photos": "foto",
    "allCategories": "Tùt al categorìi",
    "categoryAircraft": "Aeroplàn",
    "categoryCars": "Màchin e méz da strà",
    "categoryMilitary": "Méz militèr",
    "categoryMotorcycles": "Motò",
    "categoryShips": "Nav",
    "categoryUnclassified": "Da cuntrulàr"
  },
  "de": {
    "kicker": "Willkommen in meiner Sammlung!",
    "intro1": "Diese Sammlung wurde vor fast siebzig Jahren von meinem Vater begonnen und hat seither in aller Ruhe Charakter angesammelt.",
    "intro2": "Ziel ist es nicht, Perfektion zur Schau zu stellen, sondern einen liebevollen Blick auf die vielen reizvollen Ecken des Modellbaus zu werfen: Flugzeuge, Automobile, Militärfahrzeuge und jene kleinen mechanischen Charaktere, die dieses Hobby so unerschöpflich charmant machen.",
    "controlsLabel": "Galerie-Steuerung",
    "featuredLabel": "Hervorgehobene Donati-Modelle",
    "galleryLabel": "Modellgalerie",
    "searchPlaceholder": "Modell, Bausatz, Maßstab oder Text suchen...",
    "allYears": "Alle Jahre",
    "allScales": "Alle Maßstäbe",
    "reset": "Zurücksetzen",
    "footer": "Virtual Model Museum — ein statisches Archiv des Modellbaus.",
    "close": "Schließen",
    "previousPhoto": "Vorheriges Foto",
    "nextPhoto": "Nächstes Foto",
    "featured": "Hervorgehoben · Donati",
    "kit": "Bausatz",
    "scale": "Maßstab",
    "post": "Beitrag",
    "posts": "Beiträge",
    "image": "Bild",
    "images": "Bilder",
    "photo": "Foto",
    "photos": "Fotos",
    "allCategories": "Alle Kategorien",
    "categoryAircraft": "Flugzeuge",
    "categoryCars": "Autos und Straßenfahrzeuge",
    "categoryMilitary": "Militärfahrzeuge",
    "categoryMotorcycles": "Motorräder",
    "categoryShips": "Schiffe",
    "categoryUnclassified": "Zu prüfen"
  },
  "fr": {
    "kicker": "Bienvenue dans ma collection !",
    "intro1": "Cette collection a été commencée par mon père il y a près de soixante-dix ans, et n’a cessé depuis d’acquérir, tranquillement, du caractère.",
    "intro2": "Le but n’est pas d’exhiber la perfection, mais d’offrir un regard affectueux sur les nombreux recoins plaisants du modélisme : avions, automobiles, véhicules militaires, et ces petits personnages mécaniques qui rendent ce passe-temps si inépuisablement charmant.",
    "controlsLabel": "Commandes de la galerie",
    "featuredLabel": "Modèles Donati à la une",
    "galleryLabel": "Galerie de modèles",
    "searchPlaceholder": "Rechercher modèle, kit, échelle ou texte...",
    "allYears": "Toutes les années",
    "allScales": "Toutes les échelles",
    "reset": "Réinitialiser",
    "footer": "Virtual Model Museum — une archive statique de modélisme.",
    "close": "Fermer",
    "previousPhoto": "Photo précédente",
    "nextPhoto": "Photo suivante",
    "featured": "À la une · Donati",
    "kit": "Kit",
    "scale": "Échelle",
    "post": "publication",
    "posts": "publications",
    "image": "image",
    "images": "images",
    "photo": "photo",
    "photos": "photos",
    "allCategories": "Toutes les catégories",
    "categoryAircraft": "Avions",
    "categoryCars": "Autos et véhicules routiers",
    "categoryMilitary": "Véhicules militaires",
    "categoryMotorcycles": "Motos",
    "categoryShips": "Navires",
    "categoryUnclassified": "À vérifier"
  },
  "es": {
    "kicker": "¡Bienvenido a mi colección!",
    "intro1": "Esta colección fue iniciada por mi padre hace casi setenta años y desde entonces ha ido acumulando carácter en silencio.",
    "intro2": "El objetivo no es exhibir la perfección, sino ofrecer una mirada afectuosa a los muchos rincones agradables del modelismo: aviones, automóviles, vehículos militares y esos pequeños personajes mecánicos que hacen que esta afición sea tan inagotablemente encantadora.",
    "controlsLabel": "Controles de la galería",
    "featuredLabel": "Modelos Donati destacados",
    "galleryLabel": "Galería de modelos",
    "searchPlaceholder": "Buscar modelo, kit, escala o texto...",
    "allYears": "Todos los años",
    "allScales": "Todas las escalas",
    "reset": "Restablecer",
    "footer": "Virtual Model Museum — un archivo estático de modelismo.",
    "close": "Cerrar",
    "previousPhoto": "Foto anterior",
    "nextPhoto": "Foto siguiente",
    "featured": "Destacado · Donati",
    "kit": "Kit",
    "scale": "Escala",
    "post": "publicación",
    "posts": "publicaciones",
    "image": "imagen",
    "images": "imágenes",
    "photo": "foto",
    "photos": "fotos",
    "allCategories": "Todas las categorías",
    "categoryAircraft": "Aviones",
    "categoryCars": "Coches y vehículos de carretera",
    "categoryMilitary": "Vehículos militares",
    "categoryMotorcycles": "Motos",
    "categoryShips": "Barcos",
    "categoryUnclassified": "Por revisar"
  },
  "sv": {
    "kicker": "Välkommen till min samling!",
    "intro1": "Den här samlingen påbörjades av min far för nästan sjuttio år sedan och har sedan dess stillsamt samlat på sig karaktär.",
    "intro2": "Målet är inte att visa upp perfektion, utan att ge en varm blick på skalmodellbyggandets många tilltalande hörn: flygplan, bilar, militärfordon och de små mekaniska personligheter som gör hobbyn så outtömligt charmig.",
    "controlsLabel": "Gallerikontroller",
    "featuredLabel": "Utvalda Donati-modeller",
    "galleryLabel": "Modellgalleri",
    "searchPlaceholder": "Sök modell, byggsats, skala eller text...",
    "allYears": "Alla år",
    "allScales": "Alla skalor",
    "reset": "Återställ",
    "footer": "Virtual Model Museum — ett statiskt arkiv över skalmodeller.",
    "close": "Stäng",
    "previousPhoto": "Föregående foto",
    "nextPhoto": "Nästa foto",
    "featured": "Utvald · Donati",
    "kit": "Byggsats",
    "scale": "Skala",
    "post": "inlägg",
    "posts": "inlägg",
    "image": "bild",
    "images": "bilder",
    "photo": "foto",
    "photos": "foton",
    "allCategories": "Alla kategorier",
    "categoryAircraft": "Flygplan",
    "categoryCars": "Bilar och vägfordon",
    "categoryMilitary": "Militärfordon",
    "categoryMotorcycles": "Motorcyklar",
    "categoryShips": "Fartyg",
    "categoryUnclassified": "Att kontrollera"
  },
  "cs": {
    "kicker": "Vítejte v mé sbírce!",
    "intro1": "Tuto sbírku založil můj otec téměř před sedmdesáti lety a od té doby tiše získává svůj osobitý charakter.",
    "intro2": "Cílem není předvádět dokonalost, ale nabídnout laskavý pohled do mnoha příjemných zákoutí modelářství: letadel, automobilů, vojenských vozidel a těch drobných mechanických postav, díky nimž je tento koníček tak nevyčerpatelně půvabný.",
    "controlsLabel": "Ovládání galerie",
    "featuredLabel": "Vybrané modely Donati",
    "galleryLabel": "Galerie modelů",
    "searchPlaceholder": "Hledat model, stavebnici, měřítko nebo text...",
    "allYears": "Všechny roky",
    "allScales": "Všechna měřítka",
    "reset": "Obnovit",
    "footer": "Virtual Model Museum — statický archiv modelářství.",
    "close": "Zavřít",
    "previousPhoto": "Předchozí fotografie",
    "nextPhoto": "Další fotografie",
    "featured": "Vybrané · Donati",
    "kit": "Stavebnice",
    "scale": "Měřítko",
    "post": "příspěvek",
    "posts": "příspěvky",
    "image": "obrázek",
    "images": "obrázky",
    "photo": "fotografie",
    "photos": "fotografie",
    "allCategories": "Všechny kategorie",
    "categoryAircraft": "Letadla",
    "categoryCars": "Auta a silniční vozidla",
    "categoryMilitary": "Vojenská vozidla",
    "categoryMotorcycles": "Motocykly",
    "categoryShips": "Lodě",
    "categoryUnclassified": "Ke kontrole"
  },
  "ru": {
    "kicker": "Добро пожаловать в мою коллекцию!",
    "intro1": "Эта коллекция была начата моим отцом почти семьдесят лет назад и с тех пор незаметно обретала свой характер.",
    "intro2": "Цель здесь не в демонстрации безупречного совершенства, а в доброжелательном взгляде на разные увлекательные стороны стендового моделизма: самолёты, автомобили, военную технику и тех маленьких механических персонажей, которые делают это увлечение таким бесконечно обаятельным.",
    "controlsLabel": "Управление галереей",
    "featuredLabel": "Избранные модели Donati",
    "galleryLabel": "Галерея моделей",
    "searchPlaceholder": "Поиск модели, набора, масштаба или текста...",
    "allYears": "Все годы",
    "allScales": "Все масштабы",
    "reset": "Сбросить",
    "footer": "Virtual Model Museum — статический архив стендового моделизма.",
    "close": "Закрыть",
    "previousPhoto": "Предыдущее фото",
    "nextPhoto": "Следующее фото",
    "featured": "Избранное · Donati",
    "kit": "Набор",
    "scale": "Масштаб",
    "post": "публикация",
    "posts": "публикации",
    "image": "изображение",
    "images": "изображения",
    "photo": "фото",
    "photos": "фото",
    "allCategories": "Все категории",
    "categoryAircraft": "Самолёты",
    "categoryCars": "Автомобили и дорожная техника",
    "categoryMilitary": "Военная техника",
    "categoryMotorcycles": "Мотоциклы",
    "categoryShips": "Корабли",
    "categoryUnclassified": "Проверить"
  },
  "ja": {
    "kicker": "私のコレクションへようこそ！",
    "intro1": "このコレクションは、父がほぼ七十年前に始めたもので、それ以来、静かに味わいを増してきました。",
    "intro2": "目的は完璧さを誇示することではなく、スケールモデルのさまざまな魅力的な一角――航空機、自動車、軍用車両、そしてこの趣味を尽きることなく魅力的にしてくれる小さな機械仕掛けの登場人物たち――を、愛情をもって眺めることです。",
    "controlsLabel": "ギャラリー操作",
    "featuredLabel": "Donati 注目モデル",
    "galleryLabel": "モデルギャラリー",
    "searchPlaceholder": "モデル、キット、スケール、本文を検索...",
    "allYears": "すべての年",
    "allScales": "すべてのスケール",
    "reset": "リセット",
    "footer": "Virtual Model Museum — スケールモデルの静的アーカイブ。",
    "close": "閉じる",
    "previousPhoto": "前の写真",
    "nextPhoto": "次の写真",
    "featured": "注目 · Donati",
    "kit": "キット",
    "scale": "スケール",
    "post": "件の投稿",
    "posts": "件の投稿",
    "image": "枚の画像",
    "images": "枚の画像",
    "photo": "枚の写真",
    "photos": "枚の写真",
    "allCategories": "すべてのカテゴリー",
    "categoryAircraft": "航空機",
    "categoryCars": "自動車・道路車両",
    "categoryMilitary": "軍用車両",
    "categoryMotorcycles": "オートバイ",
    "categoryShips": "船舶",
    "categoryUnclassified": "要確認"
  },
  "zh": {
    "kicker": "欢迎来到我的收藏！",
    "intro1": "这套收藏由我的父亲在将近七十年前开始，此后便一直安静地积累着属于自己的风韵。",
    "intro2": "这里的目的并不是展示完美，而是以温情的目光看一看比例模型的诸多迷人角落：飞机、汽车、军用车辆，以及那些让这项爱好显得无穷可爱的小小机械角色。",
    "controlsLabel": "图库控制",
    "featuredLabel": "Donati 精选模型",
    "galleryLabel": "模型图库",
    "searchPlaceholder": "搜索模型、套件、比例或文字...",
    "allYears": "所有年份",
    "allScales": "所有比例",
    "reset": "重置",
    "footer": "Virtual Model Museum — 比例模型静态档案。",
    "close": "关闭",
    "previousPhoto": "上一张照片",
    "nextPhoto": "下一张照片",
    "featured": "精选 · Donati",
    "kit": "套件",
    "scale": "比例",
    "post": "篇帖子",
    "posts": "篇帖子",
    "image": "张图片",
    "images": "张图片",
    "photo": "张照片",
    "photos": "张照片",
    "allCategories": "所有类别",
    "categoryAircraft": "飞机",
    "categoryCars": "汽车与道路车辆",
    "categoryMilitary": "军用车辆",
    "categoryMotorcycles": "摩托车",
    "categoryShips": "船舶",
    "categoryUnclassified": "待确认"
  }
};

const $ = id => document.getElementById(id);
const grid = $('grid');
const pinnedGrid = $('pinnedGrid');
const search = $('search');
const yearFilter = $('yearFilter');
const scaleFilter = $('scaleFilter');
const categoryFilter = $('categoryFilter');
const reset = $('reset');
const postCount = $('postCount');
const imageCount = $('imageCount');
const viewer = $('viewer');
const closeViewer = $('closeViewer');
const viewerImage = $('viewerImage');
const viewerDate = $('viewerDate');
const viewerCounter = $('viewerCounter');
const viewerTitle = $('viewerTitle');
const viewerCaption = $('viewerCaption');
const viewerTags = $('viewerTags');
const prev = $('prev');
const next = $('next');

let activePost = null;
let activeImage = 0;
let currentLang = localStorage.getItem('vmm_lang') || 'en';
if (!I18N[currentLang]) currentLang = 'en';

function t(key){ return (I18N[currentLang] && I18N[currentLang][key]) || I18N.en[key] || key; }
function esc(s){ return String(s || '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[c])); }
function fixMojibake(s){
  let text = String(s || '');
  const replacements = {
    'â':'“', 'â':'”', 'â':'’', 'â':'‘',
    'â':'—', 'â':'–', 'â¦':'…', 'â¢':'•',
    'Â':''
  };
  for (const [bad, good] of Object.entries(replacements)) text = text.replaceAll(bad, good);
  return text;
}

function isPinned(p){ return PINNED_IDS.includes(p.id); }
function pinnedPosts(){ return PINNED_IDS.map(id => posts.find(p => p.id === id)).filter(Boolean); }
function plural(n, one, many){ return n === 1 ? t(one) : t(many); }

function descriptionOnly(post){
  const title = String(post.title || '').trim();
  const lines = fixMojibake(post.caption || '').split(/\n+/).map(x => x.trim()).filter(Boolean);
  const out = [];
  for (const line of lines) {
    const lower = line.toLowerCase();
    if (title && line === title) continue;
    if (lower.startsWith('kit:')) continue;
    if (lower.startsWith('scale:')) continue;
    out.push(line);
  }
  return out.join('\n');
}

function localizedDescription(post){
  const tr = POST_TRANSLATIONS[post.id] || {};
  return (tr[currentLang] && tr[currentLang].caption) || (tr.en && tr.en.caption) || descriptionOnly(post);
}

function searchText(post){
  const tr = POST_TRANSLATIONS[post.id] || {};
  const texts = [post.title, post.caption, post.kit, post.scale, post.category, post.date, descriptionOnly(post), localizedDescription(post)];
  Object.values(tr).forEach(v => { if (v && v.caption) texts.push(v.caption); });
  return texts.join(' ').toLowerCase();
}

function applyTranslations(){
  document.documentElement.lang = currentLang === 'zh' ? 'zh-CN' : currentLang;
  document.querySelectorAll('[data-i18n]').forEach(el => { el.textContent = t(el.dataset.i18n); });
  document.querySelectorAll('[data-i18n-attr]').forEach(el => {
    el.dataset.i18nAttr.split(',').forEach(pair => {
      const [attr, key] = pair.split(':').map(x => x.trim());
      if (attr && key) el.setAttribute(attr, t(key));
    });
  });
  document.querySelectorAll('.lang-button').forEach(btn => {
    const active = btn.dataset.lang === currentLang;
    btn.classList.toggle('active', active);
    btn.setAttribute('aria-pressed', active ? 'true' : 'false');
  });
}

function buildOptions(){
  const currentYear = yearFilter.value;
  const currentScale = scaleFilter.value;
  yearFilter.innerHTML = `<option value="">${esc(t('allYears'))}</option>`;
  scaleFilter.innerHTML = `<option value="">${esc(t('allScales'))}</option>`;
  [...new Set(posts.map(p => p.year).filter(Boolean))]
    .sort().reverse()
    .forEach(y => { const o = document.createElement('option'); o.value = o.textContent = y; yearFilter.appendChild(o); });
  [...new Set(posts.map(p => p.scale).filter(Boolean))]
    .sort((a,b) => a.localeCompare(b, undefined, {numeric:true}))
    .forEach(s => { const o = document.createElement('option'); o.value = o.textContent = s; scaleFilter.appendChild(o); });
  yearFilter.value = currentYear;
  scaleFilter.value = currentScale;
}

function matches(post){
  const q = search.value.trim().toLowerCase();
  if (yearFilter.value && post.year !== yearFilter.value) return false;
  if (scaleFilter.value && post.scale !== scaleFilter.value) return false;
  if (categoryFilter.value) {
    if (categoryFilter.value === '_blank') {
      if (post.category) return false;
    } else if ((post.category || '') !== categoryFilter.value) {
      return false;
    }
  }
  if (!q) return true;
  return searchText(post).includes(q);
}

function tags(post){
  const items = [];
  if (post.kit) items.push(`<span class="tag">${esc(t('kit'))}: <span>${esc(post.kit)}</span></span>`);
  if (post.scale) items.push(`<span class="tag">${esc(t('scale'))}: <span>${esc(post.scale)}</span></span>`);
  return items.join('');
}

function cardHtml(post, featured=false){
  const desc = localizedDescription(post);
  const badge = featured ? `<span class="featured-badge">${esc(t('featured'))}</span>` : '';
  const photoLabel = `${post.count} ${plural(post.count, 'photo', 'photos')}`;
  return `<button class="card ${featured ? 'featured-card' : ''}" data-id="${esc(post.id)}" type="button">
    <img loading="lazy" src="${esc(post.images[0])}" alt="${esc(post.title)}">
    <span class="card-body">
      ${badge}
      <h2 class="card-title">${esc(post.title)}</h2>
      <span class="card-tags">${tags(post)}</span>
      ${desc ? `<p class="card-caption">${esc(desc)}</p>` : ''}
      <span class="card-meta"><span>${esc(post.date || '')}</span><span>${esc(photoLabel)}</span></span>
    </span>
  </button>`;
}

function attachCardEvents(container){
  container.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', () => {
      const post = posts.find(p => p.id === card.dataset.id);
      if (post) openViewer(post, 0);
    });
  });
}

function render(){
  const filtered = posts.filter(matches);
  const pinned = pinnedPosts().filter(matches);
  const pinnedSet = new Set(pinnedPosts().map(p => p.id));
  const normal = filtered.filter(p => !pinnedSet.has(p.id));

  pinnedGrid.innerHTML = pinned.map(p => cardHtml(p, true)).join('');
  pinnedGrid.hidden = pinned.length === 0;
  grid.innerHTML = normal.map(p => cardHtml(p, false)).join('');

  postCount.textContent = `${filtered.length} ${plural(filtered.length, 'post', 'posts')}`;
  imageCount.textContent = `${filtered.reduce((n,p) => n + (p.images ? p.images.length : 0), 0)} ${plural(filtered.reduce((n,p) => n + (p.images ? p.images.length : 0), 0), 'image', 'images')}`;

  attachCardEvents(pinnedGrid);
  attachCardEvents(grid);
}

function openViewer(post, index){
  activePost = post;
  activeImage = index;
  updateViewer();
  viewer.hidden = false;
  document.body.style.overflow = 'hidden';
}

function updateViewer(){
  if (!activePost) return;
  const imgs = activePost.images || [];
  if (!imgs.length) return;
  activeImage = (activeImage + imgs.length) % imgs.length;
  viewerImage.src = imgs[activeImage];
  viewerImage.alt = activePost.title || '';
  viewerDate.textContent = activePost.date || '';
  viewerCounter.textContent = imgs.length > 1 ? `${activeImage + 1} / ${imgs.length}` : '';
  viewerTitle.textContent = activePost.title || '';
  viewerTags.innerHTML = tags(activePost);
  viewerCaption.textContent = localizedDescription(activePost) || '';
  prev.style.display = next.style.display = imgs.length > 1 ? '' : 'none';
}

function close(){
  viewer.hidden = true;
  viewerImage.src = '';
  document.body.style.overflow = '';
}

search.addEventListener('input', render);
yearFilter.addEventListener('change', render);
scaleFilter.addEventListener('change', render);
categoryFilter.addEventListener('change', render);
reset.addEventListener('click', () => { search.value = ''; yearFilter.value = ''; scaleFilter.value = ''; categoryFilter.value = ''; render(); });
closeViewer.addEventListener('click', close);
prev.addEventListener('click', () => { activeImage--; updateViewer(); });
next.addEventListener('click', () => { activeImage++; updateViewer(); });
viewer.addEventListener('click', e => { if (e.target === viewer) close(); });
document.addEventListener('keydown', e => {
  if (viewer.hidden) return;
  if (e.key === 'Escape') close();
  if (e.key === 'ArrowLeft') { activeImage--; updateViewer(); }
  if (e.key === 'ArrowRight') { activeImage++; updateViewer(); }
});

document.querySelectorAll('.lang-button').forEach(btn => {
  btn.addEventListener('click', () => {
    currentLang = btn.dataset.lang;
    localStorage.setItem('vmm_lang', currentLang);
    applyTranslations();
    buildOptions();
    render();
    if (activePost) updateViewer();
  });
});

buildOptions();
applyTranslations();
render();

