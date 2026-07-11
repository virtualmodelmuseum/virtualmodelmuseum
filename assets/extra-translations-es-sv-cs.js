// Virtual Model Museum - extra offline caption translations: Spanish, Swedish, Czech
(function () {
  const EXTRA = {
  "post-0005": {
    "es": {
      "caption": "Este es el camion utilizado por la empresa Donati desde 1946 hasta comienzos de los anos setenta. Fue comprado cerca de Rovigo en un deposito de excedentes de guerra y se utilizaba para repartir cerveza y refrescos a los bares dispersos por la campina de Ferrara. Por ello fue el camion mas importante de la empresa. El conductor era Stabellini Ermes, conocido por todos como \"Vampa\". Le faltaba parte del dedo medio, que perdio en el ventilador de un radiador mientras trabajaba en un motor. De nino no podia apartar la vista de su mano; me fascinaba y me inquietaba a partes iguales."
    },
    "sv": {
      "caption": "Det har ar lastbilen som foretaget Donati anvande fran 1946 till borjan av 1970-talet. Den koptes i narheten av Rovigo fran ett lager med krigsoverskott och anvandes for att leverera ol och laskedrycker till barer utspridda over landsbygden kring Ferrara. Darfor var den foretagets viktigaste lastbil. Foraren var Stabellini Ermes, kand for alla som \"Vampa\". Han saknade en del av langfingret, forlorad i en kylarflakt medan han arbetade pa en motor. Som barn kunde jag inte slita blicken fran hans hand; den fascinerade och oroade mig pa samma gang."
    },
    "cs": {
      "caption": "Toto je nakladni vuz, ktery firma Donati pouzivala od roku 1946 az do pocatku sedmdesatych let. Byl zakoupen pobliz Roviga ve skladu valecnych prebytku a slouzil k rozvozu piva a nealkoholickych napoju do baru roztrousenych po ferrarskem venkove. Byl proto nejdulezitejsim nakladnim vozem firmy. Ridicem byl Stabellini Ermes, vsem znamy jako \"Vampa\". Chybela mu cast prostrednicku, o kterou prisel o ventilator chladice pri praci na motoru. Jako dite jsem od jeho ruky nedokazal odtrhnout oci; fascinovala me a zaroven znepokojovala."
    }
  },
  "post-0004": {
    "es": {
      "caption": "Aunque este kit refleja el estilo y la imagen de los camiones de la empresa Donati de los anos cincuenta y sesenta, no es historicamente exacto en cuanto al tipo de vehiculo. El Opel Blitz que se muestra aqui nunca formo parte de la flota Donati. En realidad, la empresa, una de las principales distribuidoras de bebidas de Ferrara en aquella epoca, utilizaba una pequena pero robusta serie de vehiculos, entre ellos dos Fiat 615, uno de gasolina y otro diesel, un Lancia Beta y un par de motocarros de tres ruedas.\n\nFundada por Agostino Donati y gestionada mas tarde como empresa familiar junto con sus hijos Nello y Franco, la compania desempeno un papel importante en el suministro de cerveza y refrescos a los bares y osterie de Ferrara y de su campina. La decoracion del modelo, sin embargo, si capta la esencia de la imagen de la empresa en sus mejores anos: una presencia familiar en las polvorientas carreteras provinciales y un pequeno homenaje a una actividad familiar muy practica que ayudo a refrescar la region durante decadas."
    },
    "sv": {
      "caption": "Aven om den har byggsatsen aterger stilen och markningen hos Donati-foretagets lastbilar fran 1950- och 60-talen, ar den inte historiskt korrekt nar det galler fordonstypen. Den Opel Blitz som visas har ingick aldrig i Donatis fordonsflotta. I stallet anvande foretaget, en av de ledande dryckesdistributorerna i Ferrara vid den tiden, en liten men robust uppsattning fordon, bland annat tva Fiat 615, en bensindriven och en dieseldriven, en Lancia Beta och ett par trehjuliga motocarri.\n\nForetaget grundades av Agostino Donati och drevs senare som ett familjeforetag tillsammans med hans soner Nello och Franco. Det spelade en viktig roll i forsorjningen av barer och osterior i Ferrara och pa den omgivande landsbygden med ol och laskedrycker. Lackeringen pa modellen fangar dock mycket val foretagets uttryck under dess basta ar: en valbekant syn pa dammiga landsvagar och en liten hyllning till ett handfast familjeforetag som i artionden hjalpte till att halla trakten svalkad."
    },
    "cs": {
      "caption": "Ackoli tato stavebnice vystihuje styl a oznaceni nakladnich vozu firmy Donati z padesatych a sedesatych let, z hlediska typu vozidla neni historicky presna. Zde zobrazeny Opel Blitz nikdy nebyl soucasti vozoveho parku Donati. Firma, v te dobe jeden z hlavnich distributoru napoju ve Ferrare, se misto toho spolehala na malou, ale spolehlivou sestavu vozidel, vcetne dvou Fiatu 615, jednoho benzinoveho a jednoho dieseloveho, Lancie Beta a dvojice trikolesovych motocarri.\n\nSpolecnost zalozil Agostino Donati a pozdeji byla vedena jako rodinny podnik s jeho syny Nellem a Francem. Sehrala dulezitou roli v zasobovani baru a osterii ve Ferrare i v okolni krajine pivem a nealkoholickymi napoji. Nater zobrazeny na modelu vsak dobre zachycuje podstatu firemni identity v jej\u00edch nejlepsich letech: znamy pohled na prasnych provincnich silnicich a malou poctu prakticky vedenemu rodinnemu podniku, ktery po desetileti pomahal osvezovat cely kraj."
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
})();
