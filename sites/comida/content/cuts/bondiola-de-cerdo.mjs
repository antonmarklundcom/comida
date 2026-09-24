// Meat cut module: bondiola de cerdo. Shape: see plan/prompts/CONTENT-WRITER.md, Guide and cut fields.
export default {
  id:'corte-bondiola-de-cerdo', slug:'bondiola-de-cerdo', kind:'cut', order:4, animal:'Cerdo',
  published:true, indexable:true, updatedAt:'2026-09-24', verifiedAt:'2026-09-24',
  source:'Guía de la redacción de comida.com.py, basada en la práctica de carnicería y parrilla del Río de la Plata',
  label:'Bondiola de cerdo',
  seoTitle:'Bondiola de cerdo: qué es y cómo cocinarla',
  meta:'Bondiola de cerdo: de qué parte sale, cómo elegirla por su veteado, tiempos a la parrilla, al horno y desmechada, cuánto comprar y errores a evitar.',
  h1:'Bondiola de cerdo: el corte veteado para parrilla, horno y sándwich',
  cardText:'El cuello del cerdo, veteado y jugoso, ideal entero o en sándwich.',
  category:['carne','fiesta','horno'],
  keywords:['bondiola de cerdo','bondiola','bondiola al horno','bondiola a la parrilla','sándwich de bondiola'],
  intro:[
    'La bondiola es el cuello del cerdo, un corte alargado con vetas de grasa que lo recorren por dentro. Esa grasa intramuscular hace que sea uno de los cortes de cerdo más difíciles de secar: aguanta bien el fuego lento y queda tierna tanto entera como en bifes.',
    'Se la ve en la parrilla, en el horno con papas, desmechada para sándwiches y en fetas finas curadas. En esta página vas a ver de dónde sale, cómo elegirla, cuánto tiempo cocinarla en cada método, cuánto comprar y en qué se equivoca la mayoría.'
  ],
  facts:[
    ['Animal','Cerdo'],
    ['Zona del animal','Cuello, desde la nuca hasta el comienzo del lomo, sobre la paleta'],
    ['Otros nombres','Copa lombo (Brasil), cabeza de lomo (España), coppa o capocollo (Italia)'],
    ['Mejor cocción','Parrilla o horno a temperatura suave, entera o en bifes'],
    ['Por persona','250 a 300 g crudos (estimación)']
  ],
  estimate:'Los gramos por persona son estimaciones de la redacción para bondiola como plato principal; ajustalos según las guarniciones.',
  sections:[
    {id:'que-es', title:'Qué es la bondiola y de dónde sale', paragraphs:[
      'La bondiola es la masa muscular del cuello del cerdo, que empieza detrás de la cabeza y se continúa en el lomo. El carnicero la separa de la paleta y del espinazo y la entrega como un cilindro de unos 20 a 30 centímetros de largo. Una pieza entera suele pesar entre 1,5 y 2,5 kilos.',
      'A diferencia del lomo o del carré, que son magros, la bondiola está atravesada por vetas de grasa y algo de tejido conectivo. Por eso es más sabrosa y más indulgente: si se cocina un poco de más, sigue jugosa. En Italia, la misma pieza curada con sal y especias es la coppa.'
    ]},
    {id:'como-elegir', title:'Cómo elegir la bondiola en la carnicería', paragraphs:[
      'Buscá carne rosada, no pálida ni grisácea, con vetas blancas bien distribuidas. Una bondiola sin vetas visibles va a comportarse más como un lomo y pedirá más cuidado. El olor tiene que ser suave y fresco.'
    ], items:[
      'Para la parrilla o el horno entera, pedila en una sola pieza y atada con hilo si es irregular.',
      'Para bifes, pedí que la corten de un dedo y medio de espesor; más finos se secan en la brasa.',
      'Para desmechar, elegí una pieza grande con más grasa exterior.',
      'Si viene congelada, descongelala en la heladera durante un día completo antes de cocinarla.'
    ]},
    {id:'coccion', title:'Cómo cocinar la bondiola: tiempos y punto', paragraphs:[
      'El cerdo se come bien cocido, pero no seco. Una referencia práctica es llevar el centro de la pieza entera al menos a 63 °C y dejarla reposar unos minutos; muchos prefieren llegar a 70 °C, punto en que el jugo sale claro y la carne sigue húmeda gracias a la grasa. Para desmechar hay que ir mucho más lejos, hasta que las fibras se separen solas.'
    ], table:{caption:'Tiempos orientativos para bondiola de cerdo', head:['Método','Cómo','Tiempo','Señal de que está'], rows:[
      ['Parrilla entera (1,5 a 2 kg)','Fuego suave e indirecto, girando cada tanto','2 a 2 ½ horas','Jugo claro al pinchar; 63 a 70 °C'],
      ['Parrilla en bifes de 1,5 cm','Fuego medio','5 a 6 min por lado','Sin rastro rosado en el centro, jugo claro'],
      ['Horno entera','Tapada a 170 °C y luego destapada para dorar','1 ½ horas tapada, 30 a 40 min destapada','Superficie dorada, jugo claro'],
      ['Desmechada en horno u olla','Tapada con líquido, a 150 °C o fuego mínimo','3 a 4 horas','Se deshace con dos tenedores'],
      ['Plancha','Fetas de 1 cm o bifes finos','3 a 4 min por lado','Dorada y sin partes rosadas']
    ], note:'Los tiempos varían con el tamaño de la pieza y el fuego. Un termómetro de cocina evita adivinar.'}},
    {id:'parrilla', title:'Bondiola entera a la parrilla, paso a paso', steps:[
      'Sacá la bondiola de la heladera media hora antes, secala y salala. Podés sumar ajo, pimentón y orégano.',
      'Armá las brasas a un costado de la parrilla y poné la pieza del otro lado, para que se cocine con calor indirecto.',
      'Cociná a fuego suave, dándola vuelta cada 20 o 30 minutos y reponiendo brasas para mantener el calor parejo.',
      'En la última media hora acercala a las brasas para dorar la superficie.',
      'Comprobá el punto en la parte más gruesa. Cuando esté lista, dejala reposar 10 minutos tapada con papel aluminio.',
      'Cortala en fetas finas para servir al plato o en pan con salsa criolla.'
    ]},
    {id:'cuanto-comprar', title:'Cuánta bondiola comprar por persona', paragraphs:[
      'Como estimación de la redacción, contá 250 a 300 gramos crudos por adulto si la bondiola es la carne principal. En un asado mixto con carne vacuna y chorizo, alcanza con unos 120 a 150 gramos de bondiola por persona. Una pieza de 2 kilos rinde para siete u ocho adultos como plato único.',
      'Para sándwiches, cada pan lleva más o menos 120 a 150 gramos de carne cocida. Si estás armando un asado para muchas personas, la guía de cuánta carne por persona te ayuda con el cálculo total.'
    ]},
    {id:'errores', title:'Errores comunes con la bondiola', items:[
      'Ponerla entera sobre brasas fuertes: se quema por fuera y el centro queda crudo, algo que en el cerdo no es aceptable.',
      'Cortar bifes muy finos para la parrilla: se secan antes de tomar color.',
      'Pinchar la carne durante la cocción para ver si está: se pierde jugo. Mejor tocar o medir con termómetro.',
      'Apurar la bondiola para desmechar: si las fibras no se separan solas, le falta tiempo, no más fuego.',
      'Servirla sin reposo: el jugo termina en la tabla en lugar de quedar en la carne.'
    ]},
    {id:'precio', title:'Qué cambia el precio de la bondiola', paragraphs:[
      'La bondiola suele costar más que otros cortes de cerdo como la paleta o el costillar, porque es muy pedida para parrilla y cada animal da una sola pieza. El precio cambia según venga entera o en bifes, con o sin la grasa exterior, fresca o congelada, y según el tamaño de la pieza.',
      'También influye si es de cerdo criado para carne fresca o una pieza pensada para curar, que suele ser más grande y más grasa. Pedí siempre el precio de la pieza limpia para comparar.'
    ]},
    {id:'recetas', title:'Con qué recetas del sitio acompañarla', paragraphs:[
      'Todavía no hay en el sitio una receta que tenga a la bondiola como protagonista. Donde encaja mejor es en una mesa de asado con sopa paraguaya y chipa guazú, o en sándwiches con pan casero. Si sobra carne, desmechala y usala para rellenar empanadas o una tarta.'
    ]}
  ],
  recipes:['receta-sopa-paraguaya','receta-chipa-guazu','receta-pan-casero','receta-empanadas-de-carne'],
  related:['guia-cuanta-carne-por-persona','corte-costillar-de-cerdo','corte-vacio','corte-matambre'],
  faq:[
    ['¿Qué parte del cerdo es la bondiola?','Es el cuello, la masa muscular que va desde la nuca hasta el comienzo del lomo, por encima de la paleta.'],
    ['¿Cuánto tarda una bondiola entera a la parrilla?','Una pieza de 1,5 a 2 kilos tarda entre dos y dos horas y media a fuego suave e indirecto. Está lista cuando el jugo sale claro y el centro llega a 63 a 70 °C.'],
    ['¿Cuánto tiempo se hace la bondiola al horno?','Alrededor de una hora y media tapada a 170 °C y otros 30 a 40 minutos destapada para dorar, para una pieza de tamaño familiar.'],
    ['¿La bondiola tiene que quedar bien cocida?','Sí, sin partes crudas. Con el centro entre 63 y 70 °C y unos minutos de reposo queda segura y todavía jugosa, gracias a su grasa interna.'],
    ['¿Cuánta bondiola para 10 personas?','Como estimación, unos 2,5 a 3 kilos crudos si es la única carne. En un asado con otros cortes, con 1,2 a 1,5 kilos alcanza.'],
    ['¿Se puede hacer bondiola desmechada sin horno?','Sí, en una olla tapada con caldo o cerveza a fuego mínimo, tres a cuatro horas, hasta que se deshaga con un tenedor.']
  ],
  ctaTitle:'Asado para tu evento',
  ctaText:'Una bondiola entera o sándwiches de bondiola para muchos invitados piden parrilla grande y alguien atento al fuego. Contanos cuántas personas vienen y dónde es el evento, y te ayudamos a consultar un servicio de asado.',
  waMessage:'Hola, quiero consultar por un asado con bondiola para un evento.'
};
