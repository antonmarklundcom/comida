// Meat cut module: vacío. Shape: see plan/prompts/CONTENT-WRITER.md, Guide and cut fields.
export default {
  id:'corte-vacio', slug:'vacio', kind:'cut', order:7, animal:'Vacuno',
  published:true, indexable:true, updatedAt:'2026-09-24', verifiedAt:'2026-09-24',
  source:'Guía de la redacción de comida.com.py, basada en la práctica de carnicería y parrilla del Río de la Plata',
  label:'Vacío',
  seoTitle:'Vacío: qué es y cómo hacerlo a la parrilla',
  meta:'Vacío: de qué parte de la vaca sale, cómo elegirlo por su grasa, tiempos a la parrilla y al horno, cuánto comprar por persona y qué cambia el precio.',
  h1:'Vacío: el corte para asado lento con grasa crocante',
  cardText:'La pieza grande y jugosa que se hace despacio y sale con grasa crocante.',
  category:['carne','fiesta'],
  keywords:['vacío','vacio','carne vacío precio','vacío a la parrilla','vacío al horno','fraldinha'],
  image:12,
  intro:[
    'El vacío es la pared del abdomen del vacuno, entre las últimas costillas y la pierna. Es una pieza grande y plana, con una capa de grasa y una membrana de un lado y carne jugosa, de fibra abierta, del otro. En un asado largo, a fuego suave, queda tierno por dentro y crocante por fuera.',
    'Es uno de los cortes que no faltan en un asado de domingo o de cumpleaños porque rinde, se corta fácil y le gusta a casi todos. Acá vas a ver cómo reconocer un buen vacío, cuánto tiempo darle en la parrilla o el horno, cuánto comprar y qué hace variar su precio.'
  ],
  facts:[
    ['Animal','Vacuno'],
    ['Zona del animal','Pared abdominal, entre las últimas costillas y la pierna'],
    ['Otros nombres','Fraldinha (Brasil, equivalencia aproximada), flank (inglés)'],
    ['Mejor cocción','Parrilla lenta, entero; también al horno'],
    ['Por persona','300 a 350 g crudos si es el único corte (estimación)']
  ],
  estimate:'Los gramos por persona son estimaciones de la redacción que ya consideran lo que el vacío pierde de grasa en la cocción; ajustalas a tu grupo.',
  sections:[
    {id:'que-es', title:'Qué es el vacío y dónde está en el animal', paragraphs:[
      'Si imaginás la media res colgada, el vacío es la parte blanda que queda entre el costillar y la pierna, donde no hay hueso. Por fuera lo cubre la grasa y, encima de él, está el matambre, que el carnicero separa aparte. Por dentro tiene una membrana fina, que muchos llaman tela, que ayuda a mantener la forma en la parrilla.',
      'Una pieza entera suele pesar entre 2 y 3 kilos, aunque hay más chicas. La fibra es larga y abierta, lo que hace que el vacío absorba bien la sal y el humo. En Brasil se suele equiparar con la fraldinha, aunque los cortes de cada país no siempre coinciden exactamente.'
    ]},
    {id:'como-elegir', title:'Cómo elegir el vacío en la carnicería', paragraphs:[
      'Pedí un vacío con grasa blanca y pareja de un lado y carne roja con vetas del otro. Un vacío demasiado limpio se seca; uno con capas gruesas de grasa amarilla da mucho desperdicio. La pieza debe ser más o menos del mismo espesor en toda su superficie.'
    ], items:[
      'El vacío fino es más tierno pero se cocina rápido; el vacío grueso, del lado de la pierna, necesita más tiempo y rinde más.',
      'Pedí que te dejen la membrana: sin ella la pieza se deforma y pierde jugo.',
      'Si vas a asar para muchos, dos vacíos medianos se manejan mejor que uno enorme.',
      'Revisá que no tenga cortes profundos en la carne, por donde después escapa el jugo.'
    ]},
    {id:'parrilla', title:'Vacío a la parrilla, paso a paso', paragraphs:[
      'El vacío es el ejemplo perfecto de asado lento. No hay atajo: a fuego fuerte se quema la grasa y la carne queda dura. A fuego suave, con paciencia, se funde la grasa y la carne se ablanda.'
    ], steps:[
      'Salá el vacío con sal gruesa del lado de la carne unos minutos antes de ponerlo.',
      'Prepará brasa suave: tenés que poder mantener la mano sobre la parrilla unos diez segundos.',
      'Empezá con el lado de la carne hacia el fuego durante la primera mitad del tiempo, de 45 minutos a una hora.',
      'Dalo vuelta una sola vez y terminá con el lado de la grasa y la membrana hacia abajo, hasta que la grasa esté dorada y crocante.',
      'Comprobá el punto presionando la parte más gruesa: tiene que sentirse firme pero no dura. Con termómetro, a punto está entre 60 y 63 °C.',
      'Reposá cinco minutos y cortá en tiras gruesas, contra la fibra.'
    ], after:[
      'Hay parrilleros que prefieren el orden inverso, con la grasa abajo primero. Las dos formas funcionan si el fuego es suave; lo que no se negocia es terminar con la grasa bien dorada.'
    ]},
    {id:'otras-cocciones', title:'Otras formas de cocinar el vacío', paragraphs:[
      'El horno es la alternativa cuando no hay parrilla o llueve. El vacío también se puede brasear en olla, en trozos, con vino y verduras, y queda tierno, aunque pierde la gracia de la grasa crocante. En plancha no conviene: es una pieza que necesita tiempo.'
    ], table:{caption:'Tiempos orientativos para un vacío de 2 a 2,5 kilos', head:['Método','Cómo','Tiempo','Señal de que está'], rows:[
      ['Parrilla','Brasa suave, un solo giro','1 ½ a 2 horas','Grasa crocante, carne firme; 60 a 63 °C a punto'],
      ['Horno','180 °C, grasa hacia arriba sobre rejilla','1 ½ a 2 horas','Grasa dorada; jugo apenas rosado'],
      ['Horno tapado y luego destapado','Con un poco de líquido, a 160 °C','1 hora tapado y 45 min destapado','Carne tierna y superficie dorada'],
      ['Olla','En trozos, dorados y braseados','1 ½ a 2 horas','Se corta con cuchara']
    ], note:'Estos tiempos son de referencia: un vacío fino puede estar en una hora, uno grueso puede pasar las dos.'}},
    {id:'cuanto-comprar', title:'Cuánto vacío comprar por persona', paragraphs:[
      'La estimación de la redacción es de 300 a 350 gramos crudos por adulto cuando el vacío es la única carne, porque pierde bastante peso al derretirse la grasa. En un asado con chorizo, costilla y otro corte, contá unos 150 a 200 gramos de vacío por persona. Un vacío de 2,5 kilos alcanza así para siete u ocho adultos como plato único.',
      'Para una cuenta completa según el número de invitados y el apetito del grupo, usá la calculadora de la guía de cuánta carne por persona.'
    ]},
    {id:'errores', title:'Errores comunes con el vacío', items:[
      'Ponerlo a fuego fuerte para ganar tiempo: la grasa se quema, cae sobre la brasa y levanta llamas.',
      'Pincharlo con el tenedor para darlo vuelta: pierde jugo por cada agujero. Usá una pinza o una espátula.',
      'Pedir que le saquen toda la grasa: se reseca y queda sin sabor.',
      'Cortarlo en tiras finas a favor de la fibra, que en el vacío es muy visible: la carne se estira y cuesta masticarla.',
      'Salarlo de los dos lados: la grasa no necesita sal y la membrana quema con ella.'
    ]},
    {id:'precio', title:'Qué cambia el precio del vacío', paragraphs:[
      'El vacío está en la franja media de precios de la carnicería: más caro que los cortes de olla, más barato que los bifes de primera. Lo que más mueve su precio es cuánta grasa y membrana trae, porque eso es peso que pagás y no comés, y la categoría del animal: un vacío de novillo joven es más tierno que uno de vaca.',
      'También cambia si se compra entero o porcionado, si viene envasado al vacío y según la temporada de asados, con más demanda antes de las fiestas. Cuando busques el precio de la carne de vacío, compará piezas de grosor y limpieza parecidos.'
    ]},
    {id:'recetas', title:'Recetas del sitio para acompañar el vacío', paragraphs:[
      'El vacío es carne de parrilla y se come tal cual, con sal y chimichurri. Para armar la mesa, la sopa paraguaya, la chipa guazú y una ensalada rusa son las compañías de siempre. Si sobra, el vacío frío cortado fino es muy bueno para empanadas o para un salpicón de carne, siguiendo la idea del salpicón de pollo.'
    ]}
  ],
  recipes:['receta-sopa-paraguaya','receta-chipa-guazu','receta-ensalada-rusa','receta-empanadas-de-carne','receta-salpicon-de-pollo'],
  related:['guia-cuanta-carne-por-persona','corte-matambre','corte-entrana','corte-picana'],
  faq:[
    ['¿De qué parte de la vaca es el vacío?','Es la pared del abdomen, entre las últimas costillas y la pierna. No tiene hueso y está cubierto por grasa y una membrana.'],
    ['¿Cuánto tarda un vacío a la parrilla?','Entre una hora y media y dos horas a fuego suave para una pieza de 2 a 2,5 kilos. Si es fino, puede estar en poco más de una hora.'],
    ['¿El vacío se pone primero del lado de la grasa o de la carne?','Hay dos escuelas. Una empieza por la carne y termina con la grasa abajo para dejarla crocante; la otra hace lo contrario. Con fuego suave, las dos funcionan.'],
    ['¿Cuántos kilos de vacío para 10 personas?','Como estimación, unos 3 a 3,5 kilos si es la única carne, y alrededor de 1,5 a 2 kilos si hay otros cortes en el asado.'],
    ['¿Se puede hacer vacío al horno?','Sí. A 180 °C, con la grasa hacia arriba sobre una rejilla, lleva una hora y media a dos horas para una pieza mediana.'],
    ['¿Por qué varía tanto el precio del vacío?','Por la cantidad de grasa y membrana que trae, por la categoría del animal y por la época del año. Conviene comparar piezas de limpieza parecida.']
  ],
  ctaTitle:'Asado para tu evento',
  ctaText:'Un buen vacío pide dos horas de fuego suave, y en un cumpleaños o un evento de empresa esas horas valen oro. Contanos cuántos invitados vienen y en qué zona, y te ayudamos a consultar un servicio de asado.',
  waMessage:'Hola, quiero consultar por un asado con vacío para un evento.'
};
