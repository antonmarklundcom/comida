// Meat cut module: cuadrada. Shape: see plan/prompts/CONTENT-WRITER.md, Guide and cut fields.
export default {
  id:'corte-cuadrada', slug:'cuadrada', kind:'cut', animal:'Vacuno',
  published:true, indexable:true, updatedAt:'2026-09-24', verifiedAt:'2026-09-24',
  source:'Guía de la redacción de comida.com.py, basada en la práctica de carnicería del Río de la Plata y de Paraguay',
  label:'Cuadrada',
  seoTitle:'Cuadrada: qué corte es y cómo cocinarla',
  meta:'Carne cuadrada: de qué parte de la pierna sale, en qué se diferencia de la nalga y la carnaza, cómo cocinarla tierna y qué cambia su precio.',
  h1:'Cuadrada: qué corte de carne es y cómo cocinarla',
  cardText:'Carne magra de la pierna, ideal para milanesas, horno y olla.',
  category:['carne','horno'],
  keywords:['cuadrada','carne cuadrada'],
  intro:[
    'La cuadrada es un corte magro de la pierna trasera del vacuno. No tiene la fama de la picaña ni del vacío, pero es de las carnes más usadas en la cocina de todos los días: milanesas, carne al horno, estofados y rellenos. Su nombre viene de la forma que tiene la pieza limpia, un bloque alargado con lados bastante rectos.',
    'Como es firme y tiene poca grasa, pide un poco de cuidado: cortada fina y cocinada rápido queda bien, cocinada lento con líquido queda tierna, y a mitad de camino se vuelve seca. Acá te explicamos cuál es cuál, y cómo pedirla cuando en la carnicería le dicen de otra forma.'
  ],
  facts:[
    ['Animal','Vacuno'],
    ['Zona del animal','Pierna trasera, cara externa, junto al peceto y la nalga'],
    ['Otros nombres','Según la carnicería puede venderse dentro de la carnaza o como nalga de afuera; en Brasil se la asocia al coxão duro'],
    ['Mejor cocción','Milanesas finas, horno con líquido u olla a fuego suave'],
    ['Por persona','180 a 220 g crudos en milanesa u olla (estimación)']
  ],
  estimate:'Los gramos por persona de esta página son una estimación de la redacción para platos caseros; ajustalos según las guarniciones y el apetito de tu familia.',
  sections:[
    {id:'que-es', title:'Qué es la cuadrada y de dónde sale', paragraphs:[
      'La pierna trasera del vacuno se divide en varios músculos grandes y magros. En el despiece rioplatense, los principales son la nalga, la bola de lomo, el peceto y la cuadrada. La cuadrada está del lado de afuera de la pierna, pegada al peceto, y trabaja bastante cuando el animal camina: por eso su carne es firme, de fibra marcada y muy poco marmoleada.',
      'Una cuadrada entera puede pesar varios kilos. En la carnicería se vende en trozo para el horno, en bifes finos para milanesas o ya molida. Del lado exterior suele traer una capa fina de grasa y una membrana que conviene retirar antes de cortar bifes.'
    ]},
    {id:'nombres', title:'Cuadrada, nalga, carnaza: cómo pedirla sin confusión', paragraphs:[
      'Con los cortes de la pierna los nombres cambian mucho de una carnicería a otra. Hay locales en Paraguay que venden la cuadrada con ese nombre, y otros que la incluyen dentro de lo que llaman carnaza, o la mezclan con la nalga de afuera. En Argentina y Uruguay se usan también variantes regionales. Ninguno está mal: simplemente no hay un despiece único.',
      'La forma más segura es pedirla por lo que querés hacer. Si decís que necesitás un corte magro de la pierna para milanesas o para el horno, cualquier carnicero te va a ofrecer la cuadrada o su equivalente. Si querés comparar, pedí ver la pieza entera: la cuadrada es alargada, de color rojo oscuro, con la fibra corriendo a lo largo.'
    ], callout:'Frase útil en el mostrador: «Quiero cuadrada para milanesa, cortada contra la fibra y bien fina». Así te llevás el corte correcto y el trabajo ya hecho.'},
    {id:'para-que-sirve', title:'Para qué sirve la cuadrada', cards:[
      ['Milanesas','Es uno de los cortes clásicos para milanesa. Pedila en bifes de medio centímetro, cortados contra la fibra, y golpeala un poco antes de empanar.'],
      ['Al horno','En trozo, envuelta o con líquido en la asadera, se hace carne al horno para cortar en fetas. Conviene no pasarla de 60 °C en el centro o usar cocción larga con caldo.'],
      ['Olla y estofado','En cubos, dorada y cocida despacio con cebolla, locote, tomate y caldo, se vuelve tierna. Es una buena base para estofados y guisos.'],
      ['Picada','Molida da una carne magra, con poco jugo. Para hamburguesas o albóndigas conviene mezclarla con algo de grasa o con un corte más graso.']
    ]},
    {id:'coccion', title:'Cómo cocinarla para que quede tierna', paragraphs:[
      'La regla con la cuadrada es elegir un extremo: cocción corta y fuerte, o cocción larga y húmeda. Cortada en bifes finos, en la sartén o empanada, se hace en pocos minutos y queda tierna porque no llega a endurecerse. En la olla, después de una hora y media a fuego suave, el tejido se ablanda y la carne se deja cortar con el tenedor.',
      'El problema aparece en el medio. Un trozo grande a la parrilla o un bife grueso bien cocido quedan secos y duros, porque la cuadrada no tiene grasa que la proteja. Si la querés al horno en trozo, marinala desde el día anterior y cocinala tapada con líquido, o dorala y horneala a temperatura moderada hasta un punto rosado.'
    ], table:{caption:'Métodos y tiempos orientativos para la cuadrada', head:['Método','Cómo','Tiempo','Resultado'], rows:[
      ['Milanesa','Bifes de 0,5 cm, empanados, sartén o horno a 200 °C','3 min por lado en sartén; 20 min en horno','Tierna y crocante'],
      ['Olla','Cubos dorados, fuego suave con líquido','1 h 30 a 2 h','Se deshace con el tenedor'],
      ['Horno tapado','Trozo de 1,5 kg, 170 °C, con caldo y verduras','1 h 45 a 2 h 15','Para cortar en fetas y servir con su salsa'],
      ['Horno rosado','Trozo dorado, 190 °C, sin tapar','40 a 55 min','Fetear muy fino; ideal fría en sándwich']
    ], note:'Tiempos de referencia de la redacción; el tamaño del trozo y la olla o el horno que uses los cambian.'}},
    {id:'cuanto-comprar', title:'Cuánto comprar por persona', paragraphs:[
      'Para milanesas, como estimación, contá entre 150 y 200 gramos de carne limpia por adulto: con el pan rallado y el huevo rinden más de lo que parece. Para olla o estofado, con papa o mandioca en la preparación, alcanzan unos 200 gramos crudos. Si vas a servir la cuadrada en una comida con otros platos fuertes, podés bajar un poco.',
      'Si estás organizando un asado grande y la cuadrada es solo una parte del menú, consultá la guía de cuánta carne por persona para repartir los cortes.'
    ]},
    {id:'errores', title:'Errores comunes con la cuadrada', items:[
      'Cortar los bifes a favor de la fibra: aunque sean finos, quedan duros al masticar.',
      'Ponerla entera en la parrilla como si fuera un corte graso.',
      'Cocinar el estofado a fuego fuerte: la carne se contrae y queda seca aunque esté en líquido.',
      'Dejar la membrana exterior: se encoge y curva los bifes en la sartén.'
    ]},
    {id:'precio', title:'Qué cambia el precio de la cuadrada', paragraphs:[
      'La cuadrada suele estar en la franja media de precios, por debajo de los cortes de parrilla más buscados. Lo que más cambia el precio por kilo es el trabajo: en trozo con grasa y membrana cuesta menos que ya limpia, y cortada para milanesa suele costar algo más porque el carnicero la feteó. También influyen la categoría del animal y si viene envasada al vacío. Si comparás, fijate que sea el mismo tipo de preparación.'
    ]}
  ],
  recipes:['receta-milanesas','receta-milanesa-napolitana','receta-estofado-de-carne','receta-asado-a-la-olla','receta-guiso-paraguayo'],
  related:['corte-nalga','corte-bola-de-lomo','corte-peceto','corte-carnaza','guia-cuanta-carne-por-persona','guia-cortes-de-carne-vacuna'],
  faq:[
    ['¿Qué parte de la vaca es la cuadrada?','Es un músculo de la pierna trasera, del lado de afuera, pegado al peceto. Es magra y de fibra firme porque trabaja mucho.'],
    ['¿La cuadrada sirve para milanesa?','Sí, es uno de los cortes más usados para milanesas. Pedila en bifes finos cortados contra la fibra y aplanala un poco antes de empanar.'],
    ['¿Cuadrada y carnaza es lo mismo?','Depende de la carnicería. En algunos lugares la cuadrada se vende como parte de la carnaza. Si tenés dudas, pedí un corte magro de la pierna para lo que vas a cocinar y mirá la pieza antes de que la corten.'],
    ['¿Cuál es más tierna, la cuadrada o la nalga?','En general la nalga es un poco más tierna. La cuadrada es más firme, pero bien cortada y cocinada rinde igual de bien en milanesas y en la olla.'],
    ['¿La cuadrada se puede hacer a la parrilla?','No es lo ideal. Al ser magra y firme, entera se seca. Si la querés en la parrilla, hacela en bifes finos, marinados y a fuego fuerte, o en brochetas chicas.'],
    ['¿Cuánto tarda la cuadrada en la olla?','Entre una hora y media y dos horas a fuego suave, en cubos dorados y con líquido, hasta que se deje cortar con el tenedor.']
  ],
  ctaTitle:'Comida para tu evento',
  ctaText:'¿Necesitás carne al horno, milanesas o un estofado para una reunión grande? Contanos la fecha, la zona y cuántas personas van a comer, y te ayudamos a consultar un catering o un servicio de asado en Gran Asunción.',
  waMessage:'Hola, quiero consultar por comida para un evento, con carne al horno o asado.'
};
