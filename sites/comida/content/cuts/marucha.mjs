// Meat cut module: marucha. Shape: see plan/prompts/CONTENT-WRITER.md, Guide and cut fields.
export default {
  id:'corte-marucha', slug:'marucha', kind:'cut', animal:'Vacuno',
  published:true, indexable:true, updatedAt:'2026-09-24', verifiedAt:'2026-09-24',
  source:'Guía de la redacción de comida.com.py, basada en la práctica de carnicería y parrilla de Paraguay y del Río de la Plata',
  label:'Marucha',
  seoTitle:'Marucha: qué carne es y cómo cocinarla',
  meta:'Carne marucha: de qué parte de la vaca sale, cómo hacerla a la parrilla sin que quede dura, cómo aprovecharla en la olla y qué cambia su precio por kilo.',
  h1:'Marucha: qué carne es, de dónde sale y cómo cocinarla',
  cardText:'Un corte delantero sabroso y económico, para parrilla lenta u olla.',
  category:['carne','paraguaya','fiesta'],
  keywords:['marucha','carne marucha','marucha carne'],
  intro:[
    'La marucha es un corte de la parte delantera del vacuno, de la zona de la paleta. Es una carne con vetas de grasa y algo de nervio, con mucho sabor y un precio bastante más accesible que los cortes clásicos de parrilla. En Paraguay tiene sus fieles: hay quienes la ponen en todo asado y quienes la reservan para la olla.',
    'Las dos cosas funcionan, siempre que se respete lo que pide. En esta página vas a ver de qué parte sale, cómo reconocerla, cómo hacerla a la parrilla sin que quede dura, cómo aprovecharla en guisos y qué tener en cuenta al comprarla.'
  ],
  facts:[
    ['Animal','Vacuno'],
    ['Zona del animal','Cuarto delantero, zona de la paleta'],
    ['Otros nombres','Carne marucha; el nombre y el recorte cambian según la carnicería'],
    ['Mejor cocción','Parrilla lenta, horno tapado u olla'],
    ['Por persona','300 g crudos si es la única carne (estimación)']
  ],
  estimate:'Los gramos por persona que proponemos son estimaciones de la redacción; ajustalos según el resto del asado y el apetito de los invitados.',
  sections:[
    {id:'que-es', title:'Qué es la marucha y de qué parte sale', paragraphs:[
      'La marucha sale del cuarto delantero, de la zona de la paleta, cerca del omóplato. Es un músculo que trabaja, así que tiene más fibra y tejido conectivo que los cortes traseros, pero también vetas de grasa que le dan jugosidad y un sabor profundo, bien de carne.',
      'No hay un único recorte. En algunas carnicerías la marucha llega como una pieza plana y alargada; en otras, en bifes gruesos o en trozos para la olla. Como pasa con varios cortes delanteros, el nombre también puede variar entre Paraguay, Argentina y Uruguay. Si no la encontrás con ese nombre, pedí un corte de paleta con grasa, para asar despacio.'
    ]},
    {id:'como-elegir', title:'Cómo reconocer una buena marucha', items:[
      'Vetas de grasa blanca repartidas en la carne: son las que la mantienen jugosa.',
      'Color rojo vivo, sin zonas secas en los bordes.',
      'Si tiene un nervio grueso atravesado, pedí que lo retiren o cortalo vos antes de cocinar.',
      'Para parrilla, elegí piezas de grosor parejo, de unos tres dedos. Para la olla, el grosor importa menos.'
    ]},
    {id:'parrilla', title:'Marucha a la parrilla', paragraphs:[
      'La marucha es de parrilla lenta. Con fuego fuerte se dora por fuera y queda dura por dentro, porque el tejido no alcanza a ablandarse. Con fuego medio a bajo y paciencia, la grasa se derrite, la carne se afloja y queda muy sabrosa.'
    ], steps:[
      'Sacala de la heladera media hora antes y salala con sal gruesa por los dos lados.',
      'Armá brasas para fuego medio a bajo: tenés que poder sostener la mano a la altura de la parrilla unos ocho a diez segundos.',
      'Poné la pieza entera, lejos del centro de las brasas, y cociná unos 35 a 45 minutos del primer lado.',
      'Dala vuelta y seguí otros 30 a 40 minutos, reponiendo brasas de a poco para que el fuego no baje demasiado.',
      'Probá con un pinche o con la punta de un cuchillo: tiene que entrar con poca resistencia. En este corte, un punto a punto o apenas más cocido suele quedar mejor que uno muy jugoso.',
      'Dejala reposar unos minutos y cortala en fetas finas, contra la fibra.'
    ]},
    {id:'olla-horno', title:'Marucha en la olla y al horno', paragraphs:[
      'En la olla, la marucha rinde mucho. Cortada en cubos grandes, dorada y cocida con cebolla, locote, tomate y caldo durante dos horas a dos horas y media a fuego suave, queda tierna y deja una salsa con cuerpo. Es buena base para un guiso con arroz o fideos o para una carne a la olla con papas.',
      'Al horno, lo mejor es cocinarla tapada: en una asadera con verduras y un poco de líquido, cubierta con papel aluminio, a 160 °C entre dos horas y dos horas y media. Los últimos 20 minutos, sin tapa y a 200 °C, para dorar.'
    ], table:{caption:'Tiempos orientativos para una marucha de 1,5 a 2 kilos', head:['Método','Fuego','Tiempo','Señal'], rows:[
      ['Parrilla','Medio a bajo, pieza entera','1 h 05 a 1 h 25','El pinche entra con poca resistencia'],
      ['Olla','Suave, cubos dorados con líquido','2 h a 2 h 30','Se corta con la cuchara'],
      ['Horno tapado','160 °C con verduras y caldo','2 h a 2 h 30, más 20 min destapada','Tierna y dorada'],
      ['Olla a presión','Cubos dorados, desde que toma presión','40 a 50 min','Se deshace con el tenedor']
    ], note:'Son tiempos de referencia de la redacción; el grosor, la cantidad de tejido y el fuego los cambian.'}},
    {id:'cuanto-comprar', title:'Cuánto comprar por persona', paragraphs:[
      'Como estimación, si la marucha es la única carne del asado, contá unos 300 gramos crudos por adulto: tiene grasa que se pierde y algo de recorte. En un asado con chorizo, costilla y otro corte, alcanzan 120 a 150 gramos de marucha por persona. En un guiso o una carne a la olla, con guarniciones, unos 200 gramos. La guía de cuánta carne por persona te ayuda a armar el total.'
    ]},
    {id:'errores', title:'Errores comunes con la marucha', items:[
      'Hacerla a fuego fuerte como si fuera un bife: queda dura y seca.',
      'Sacarla jugosa, antes de que el tejido se ablande.',
      'Quitarle toda la grasa antes de asar.',
      'Cortarla gruesa y a favor de la fibra al servir.'
    ]},
    {id:'precio', title:'Qué hace variar el precio de la marucha', paragraphs:[
      'La marucha suele ser más barata por kilo que los cortes traseros de parrilla, porque es de la zona delantera y pide más tiempo de cocción. El precio cambia según cuánto recorte traiga, si está limpia de nervios gruesos, si viene envasada al vacío y según la categoría del animal. Antes de las fiestas y los fines de semana largos, como todos los cortes de asado, se busca más.'
    ]}
  ],
  recipes:['receta-asado-a-la-olla','receta-estofado-de-carne','receta-guiso-paraguayo','receta-sopa-paraguaya','receta-chipa-guazu'],
  related:['corte-aguja','corte-tapa-de-asado','corte-garron','guia-cuanta-carne-por-persona','guia-cortes-de-carne-vacuna','guia-asado-a-la-parrilla'],
  faq:[
    ['¿Qué parte de la vaca es la marucha?','Es un corte del cuarto delantero, de la zona de la paleta, cerca del omóplato. Tiene vetas de grasa y algo de nervio.'],
    ['¿La marucha es buena para la parrilla?','Sí, si se hace despacio. A fuego medio a bajo, durante algo más de una hora, queda tierna y muy sabrosa. A fuego fuerte queda dura.'],
    ['¿Cuánto tarda la marucha a la parrilla?','Una pieza de 1,5 a 2 kilos lleva entre una hora y una hora y media a fuego medio a bajo, según el grosor y la brasa.'],
    ['¿Cómo hacer carne marucha tierna?','Con cocción lenta: parrilla a fuego bajo, horno tapado a 160 °C o olla a fuego suave. Después, cortala fina y contra la fibra.'],
    ['¿La marucha sirve para guiso?','Sí. En cubos, dorada y cocida con verduras y caldo unas dos horas, es muy buena para guisos y carne a la olla.'],
    ['¿Por qué la marucha es más barata que otros cortes de asado?','Porque es del cuarto delantero, tiene más tejido y necesita más tiempo de cocción. El precio también depende del recorte y de la categoría del animal.']
  ],
  ctaTitle:'Un asado sin preocuparte',
  ctaText:'¿Querés un asado con marucha, chorizo y costilla para un cumpleaños o una fiesta? Escribinos la cantidad de invitados, la fecha y la zona, y te ayudamos a consultar un servicio de asado en Gran Asunción.',
  waMessage:'Hola, quiero consultar por un asado para un evento.'
};
