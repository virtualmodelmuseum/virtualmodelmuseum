// Virtual Model Museum - compact top contact box translations
(function () {
  const EMAIL = "virtualmodelmuseum@gmail.com";
  const TEXT = {
    en:{kicker:"Contact",title:"Questions, corrections, or model memories?",body:"Recognise a kit, spot a historical detail, or simply fancy a word about scale modelling? I would be delighted to hear from you.",button:"Contact the collection",subject:"Virtual Model Museum"},
    it:{kicker:"Contatti",title:"Domande, correzioni o ricordi di modellismo?",body:"Se riconosci un kit, noti un dettaglio storico, o vuoi semplicemente scambiare due parole sul modellismo, sarò lieto di leggerti.",button:"Contatta la collezione",subject:"Virtual Model Museum"},
    fe:{kicker:"Cuntàt",title:"Dumànd, currezión o ricòrd ad mudelìsum?",body:"Se a riconòss un kit, a véd un detàj storich, o a gh’ha vòja ad scambiàr du paròl sul mudelìsum, a sarò cuntént ad lézar al so messàg.",button:"Scriv a la culizion",subject:"Virtual Model Museum"},
    de:{kicker:"Kontakt",title:"Fragen, Korrekturen oder Erinnerungen an den Modellbau?",body:"Wenn Sie einen Bausatz erkennen, ein historisches Detail bemerken oder einfach über Modellbau schreiben möchten, freue ich mich sehr über Ihre Nachricht.",button:"Die Sammlung kontaktieren",subject:"Virtual Model Museum"},
    fr:{kicker:"Contact",title:"Questions, corrections ou souvenirs de modélisme ?",body:"Si vous reconnaissez un kit, remarquez un détail historique ou souhaitez simplement parler de modélisme, je serai ravi de vous lire.",button:"Contacter la collection",subject:"Virtual Model Museum"},
    es:{kicker:"Contacto",title:"¿Preguntas, correcciones o recuerdos de modelismo?",body:"Si reconoce un kit, detecta un detalle histórico o simplemente desea hablar de modelismo, estaré encantado de recibir su mensaje.",button:"Contactar con la colección",subject:"Virtual Model Museum"},
    sv:{kicker:"Kontakt",title:"Frågor, rättelser eller modellminnen?",body:"Om du känner igen en byggsats, upptäcker en historisk detalj eller bara vill prata om skalmodellbygge, blir jag glad att höra från dig.",button:"Kontakta samlingen",subject:"Virtual Model Museum"},
    cs:{kicker:"Kontakt",title:"Otázky, opravy nebo vzpomínky na modelařinu?",body:"Pokud poznáte stavebnici, všimnete si historického detailu nebo si chcete popovídat o modelářství, rád od vás uslyším.",button:"Kontaktovat sbírku",subject:"Virtual Model Museum"},
    ru:{kicker:"Контакт",title:"Вопросы, исправления или воспоминания о моделизме?",body:"Если вы узнали набор, заметили историческую деталь или просто хотите написать о моделизме, я буду рад вашему сообщению.",button:"Связаться с коллекцией",subject:"Virtual Model Museum"},
    ja:{kicker:"お問い合わせ",title:"ご質問、訂正、模型にまつわる思い出はありますか？",body:"キットに心当たりがある場合、歴史的な細部に気づいた場合、または模型について語り合いたい場合は、ぜひご連絡ください。",button:"コレクションに連絡する",subject:"Virtual Model Museum"},
    zh:{kicker:"联系",title:"有问题、修正意见，或关于模型的回忆吗？",body:"如果你认出了某个套件，发现了历史细节，或者只是想聊聊比例模型，我都很乐意收到你的来信。",button:"联系本收藏",subject:"Virtual Model Museum"}
  };
  function normaliseLang(lang){lang=String(lang||"en").toLowerCase(); if(lang.startsWith("zh"))return"zh"; if(lang.startsWith("ja"))return"ja"; if(lang.startsWith("ru"))return"ru"; if(lang.startsWith("cs"))return"cs"; if(lang.startsWith("sv"))return"sv"; if(lang.startsWith("es"))return"es"; if(lang.startsWith("fr"))return"fr"; if(lang.startsWith("de"))return"de"; if(lang.startsWith("fe"))return"fe"; if(lang.startsWith("it"))return"it"; return"en";}
  function currentLang(){const active=document.querySelector(".lang-button.active"); return normaliseLang((active&&active.dataset&&active.dataset.lang)||localStorage.getItem("vmm_lang")||document.documentElement.getAttribute("lang")||"en");}
  function applyContactLanguage(){const t=TEXT[currentLang()]||TEXT.en; document.querySelectorAll("[data-contact-key]").forEach(el=>{const k=el.getAttribute("data-contact-key"); if(k&&t[k]) el.textContent=t[k];}); document.querySelectorAll(".vmm-contact-mail").forEach(link=>{link.href="mailto:"+EMAIL+"?subject="+encodeURIComponent(t.subject);});}
  function init(){applyContactLanguage(); document.querySelectorAll(".lang-button").forEach(btn=>btn.addEventListener("click",()=>{setTimeout(applyContactLanguage,80); setTimeout(applyContactLanguage,300);}));}
  if(document.readyState==="loading") document.addEventListener("DOMContentLoaded",init); else init();
})();
