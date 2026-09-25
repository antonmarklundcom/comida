// Meat cut module: carnaza (negra y blanca). Shape: see plan/prompts/CONTENT-WRITER.md, Guide and cut fields.
export default {
  id:'corte-carnaza', slug:'carnaza', kind:'cut', animal:'Vacuno',
  published:true, indexable:true, updatedAt:'2026-09-24', verifiedAt:'2026-09-24',
  source:'Guía de la redacción de comida.com.py, basada en la práctica de carnicería de Paraguay y del Río de la Plata',
  label:'Carnaza negra y blanca',
  seoTitle:'Carnaza negra y carnaza blanca: diferencias',
  meta:'Carnaza negra y carnaza blanca: qué son, en qué se diferencian, por qué el nombre cambia según la carnicería y para qué conviene cada una en la cocina.',
  h1:'Carnaza negra y carnaza blanca: qué son y para qué sirven',
  cardText:'Los dos cortes magros de la pierna más pedidos para milanesa y olla.',
  category:['carne','paraguaya'],
  keywords:['carnaza negra','carnaza blanca','carnaza'],
  intro:[
    'Carnaza es una palabra muy paraguaya para hablar de la carne magra, sin hueso y con poca grasa, que se usa en milanesas, guisos, rellenos y carne picada. En el mostrador aparece dividida en carnaza negra y carnaza blanca, y mucha gente las compra por costumbre sin saber bien qué las diferencia.',
    'La explicación corta es que son dos zonas distintas de la pierna trasera, una más oscura y firme y otra más clara y blanda. La larga es que el nombre no es igual en todas las carnicerías. En esta página vas a encontrar las dos cosas y una forma práctica de pedir lo que necesitás.'
  ],
  facts:[
    ['Animal','Vacuno'],
    ['Zona del animal','Pierna trasera: cortes magros del muslo; existe también la carnaza de paleta, de la pata delantera'],
    ['Otros nombres','Según la carnicería, la negra se acerca a la cuadrada o nalga de afuera y la blanca a la nalga de adentro'],
    ['Mejor cocción','Negra: olla, guiso y picada. Blanca: milanesa, bifes finos y horno'],
    ['Por persona','180 a 200 g crudos (estimación)']
  ],
  estimate:'Los gramos por persona de esta página son estimaciones de la redacción para comidas de casa; ajustalos según lo que acompañe la carne.',
  sections:[
    {id:'que-es', title:'Qué es la carnaza', paragraphs:[
      'En el despiece paraguayo, carnaza se usa para las piezas grandes y magras de la pierna, las que no son de parrilla ni de hueso. Son músculos que el animal usa para moverse, así que tienen poca grasa intramuscular y fibra marcada. Sirven para casi todo lo que se hace en la cocina de todos los días: milanesa, bife a la plancha, estofado, guiso, carne picada y relleno de empanadas.',
      'Además de la negra y la blanca, muchas carnicerías venden carnaza de paleta, que viene de la pata delantera. Es otro corte, con más colágeno y nervios, pensado para la olla y el puchero.'
    ]},
    {id:'diferencias', title:'Carnaza negra y carnaza blanca: la diferencia', paragraphs:[
      'La diferencia más visible es el color. La carnaza negra es un rojo más oscuro, casi bordó, y al tacto se siente más firme. Suele corresponder a la parte exterior de la pierna, que trabaja más. La carnaza blanca es de un rojo más claro, con fibra algo más fina, y suele venir de la parte interior del muslo, más tierna.',
      'En la cocina eso se traduce así: la blanca se presta mejor para milanesas y bifes finos, porque queda tierna con poca cocción. La negra aguanta y mejora con cocción larga, y es muy buena para estofados, guisos y carne molida con sabor.'
    ], table:{caption:'Comparación orientativa entre carnaza negra y carnaza blanca', head:['Rasgo','Carnaza negra','Carnaza blanca'], rows:[
      ['Color','Rojo oscuro','Rojo más claro'],
      ['Textura','Firme, fibra más gruesa','Más blanda, fibra más fina'],
      ['Zona habitual','Cara externa de la pierna','Cara interna del muslo'],
      ['Mejor uso','Olla, guiso, estofado, picada','Milanesa, bifes finos, horno'],
      ['Se parece a','Cuadrada o nalga de afuera','Nalga de adentro']
    ], note:'La equivalencia con los cortes rioplatenses es aproximada: cada carnicería separa la pierna a su manera.'}},
    {id:'nombres', title:'Por qué el nombre cambia según la carnicería', paragraphs:[
      'No existe un despiece único. En algunas carnicerías, lo que llaman carnaza negra incluye la cuadrada y parte del peceto; en otras separan la cuadrada y dejan como carnaza solo lo que sobra. La blanca a veces es la nalga entera y a veces solo una parte. Por eso dos kilos de carnaza negra comprados en dos lugares pueden no ser exactamente lo mismo.',
      'Eso no es un engaño: es costumbre local. Lo que conviene es pedir por uso. Si decís «necesito carnaza para milanesa, que sea tierna», te van a ofrecer la blanca o su equivalente; si decís «quiero carne para guiso que no se deshaga», te van a dar la negra. Y si ves la pieza entera antes del corte, mejor.'
    ], callout:'Si en tu carnicería no usan la palabra carnaza, pedí nalga para milanesa o cuadrada para la olla: vas a estar muy cerca de lo mismo.'},
    {id:'como-cocinar', title:'Cómo cocinar cada una', items:[
      'Milanesas de carnaza blanca: bifes de medio centímetro, cortados contra la fibra, golpeados apenas y empanados. Sartén con aceite caliente, unos tres minutos por lado, o horno a 200 °C unos 20 minutos.',
      'Guiso o estofado con carnaza negra: cortala en cubos de dos o tres centímetros, dorala en tandas y cociná con cebolla, locote, tomate y caldo a fuego suave entre una hora y media y dos horas.',
      'Carne picada: la negra da más sabor y la blanca es más suave. Para empanadas o so\'o josopy funcionan las dos; para hamburguesas, sumale algo de grasa y cociná hasta 71 °C en el centro.',
      'Al horno en trozo: preferí la blanca, dorada primero y horneada a 180 °C hasta un punto rosado, o la negra tapada con líquido y por más tiempo.'
    ]},
    {id:'cuanto-comprar', title:'Cuánto comprar por persona', paragraphs:[
      'Como estimación, entre 180 y 200 gramos crudos por adulto para milanesas o estofado, y entre 120 y 150 gramos si la carne va picada en un relleno o una salsa. Si vas a cocinar para un grupo grande con varios platos, restá un poco. Para asados con varios cortes, fijate en la guía de cuánta carne por persona.'
    ]},
    {id:'errores', title:'Errores frecuentes', items:[
      'Usar carnaza negra en bifes gruesos a la plancha: queda dura.',
      'Cocinar el guiso a hervor fuerte: la carne se contrae y se seca aunque esté en caldo.',
      'Pedir solo carnaza sin decir para qué: te pueden dar la que no te conviene.',
      'Cortar las milanesas a favor de la fibra.'
    ]},
    {id:'precio', title:'Qué cambia el precio de la carnaza', paragraphs:[
      'La carnaza suele estar entre los cortes de precio accesible a medio. La blanca normalmente cuesta un poco más que la negra porque es más tierna. El precio por kilo también cambia si la comprás entera o ya feteada para milanesa, si viene limpia de grasa y membranas y según la categoría del animal. En la carne picada, preguntá de qué carnaza es: no vale lo mismo una picada de carnaza que una de recortes.'
    ]}
  ],
  recipes:['receta-milanesas','receta-estofado-de-carne','receta-guiso-paraguayo','receta-soo-josopy','receta-empanadas-de-carne'],
  related:['corte-cuadrada','corte-nalga','corte-bola-de-lomo','corte-peceto','guia-cuanta-carne-por-persona','guia-cortes-de-carne-vacuna'],
  faq:[
    ['¿Cuál es la diferencia entre carnaza negra y carnaza blanca?','La negra es más oscura y firme, de la cara externa de la pierna, y va mejor en olla y guiso. La blanca es más clara y tierna, del interior del muslo, y va mejor en milanesas y bifes finos.'],
    ['¿Qué carnaza es mejor para milanesa?','La carnaza blanca, cortada en bifes finos contra la fibra. La negra también se puede usar si la golpeás un poco más, pero queda más firme.'],
    ['¿La carnaza negra es lo mismo que la cuadrada?','Se le parece mucho, y en algunas carnicerías la cuadrada se vende como carnaza negra. En otras son cortes separados. Mirá la pieza o pedí por uso.'],
    ['¿La carnaza blanca es nalga?','En muchas carnicerías sí, o una parte de ella. La equivalencia no es exacta porque cada lugar despieza la pierna a su manera.'],
    ['¿Qué es la carnaza de paleta?','Es un corte de la pata delantera, con más nervios y colágeno que la carnaza de pierna. Es muy buena para puchero, guiso y cocciones largas.'],
    ['¿La carnaza sirve para la parrilla?','No es lo ideal porque es magra. Si la querés hacer a la brasa, cortala en bifes finos o brochetas, marinala y cociná rápido a fuego fuerte.']
  ],
  ctaTitle:'Menú para tu evento',
  ctaText:'¿Querés milanesas, guiso o un menú de carne para muchas personas? Contanos la fecha, la zona y la cantidad de invitados, y te ayudamos a consultar un catering para tu cumpleaños o evento.',
  waMessage:'Hola, quiero consultar por un menú con carne para un evento.'
};
