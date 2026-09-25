// Meat cut module: chuletón. Shape: see plan/prompts/CONTENT-WRITER.md, Guide and cut fields.
export default {
  id:'corte-chuleton', slug:'chuleton', kind:'cut', order:14, animal:'Vacuno',
  published:true, indexable:true, updatedAt:'2026-09-24', verifiedAt:'2026-09-24',
  source:'Guía de la redacción de comida.com.py, basada en la práctica de carnicería y parrilla del Río de la Plata',
  label:'Chuletón',
  seoTitle:'Chuletón de vaca: qué es y cómo asarlo',
  meta:'Chuletón de vaca: qué corte es en Paraguay, cómo pedirlo si en la carnicería no lo conocen, cómo hacerlo a la parrilla o la plancha y cuánto comprar.',
  h1:'Chuletón de vaca: qué corte es y cómo hacerlo a la parrilla',
  cardText:'El bife grueso con hueso que en Paraguay se pide como bife ancho con hueso.',
  category:['carne','fiesta'],
  keywords:['chuleton','chuleton de vaca','chuletón','chuleton a la parrilla','bife ancho con hueso'],
  intro:[
    'Chuletón es la palabra con que en España se llama a un bife grueso de vaca con su hueso de costilla. En las carnicerías paraguayas no siempre se usa ese nombre, así que muchas veces hay que pedirlo por lo que es: un bife ancho con hueso, cortado de cuatro a seis centímetros. Es un corte para compartir, con mucha grasa intramuscular y un sabor intenso.',
    'También se confunde con la chuleta, que en Paraguay suele ser un bife fino de cerdo o de vaca con hueso. En esta página vas a ver qué es exactamente el chuletón, cómo pedirlo sin malentendidos, cómo cocinarlo a la parrilla o en una plancha de hierro, cuánto comprar y qué cambia su precio.'
  ],
  facts:[
    ['Animal','Vacuno'],
    ['Zona del animal','Lomo, a la altura de las costillas delanteras (zona del bife ancho)'],
    ['Otros nombres','Bife ancho con hueso, costilla de lomo gruesa; en inglés rib steak o bone-in ribeye'],
    ['Mejor cocción','Parrilla a fuego medio a fuerte o plancha de hierro muy caliente'],
    ['Por persona','Un chuletón de 800 g a 1 kg para dos adultos (estimación)']
  ],
  estimate:'Las porciones son estimaciones de la redacción que tienen en cuenta el hueso: ajustalas según el apetito y la guarnición.',
  sections:[
    {id:'que-es', title:'Qué es el chuletón', paragraphs:[
      'El chuletón es un corte transversal del lomo de la vaca que incluye un hueso de costilla corto y todo el músculo que lo rodea. En la cocina española se asocia al lomo alto, la parte delantera del lomo, que en el Río de la Plata corresponde al bife ancho. Por eso la traducción más fiel para una carnicería local es bife ancho con hueso, cortado grueso.',
      'Lo que lo define es el grosor: un chuletón bien hecho tiene de cuatro a seis centímetros y pesa entre 700 gramos y 1,2 kilos. Con ese espesor se puede lograr una costra dorada por fuera y un centro rosado, algo imposible con un bife fino.'
    ]},
    {id:'chuleta-o-chuleton', title:'Chuleta, chuletón y tomahawk: cómo no confundirse', paragraphs:[
      'En Paraguay la palabra chuleta se usa sobre todo para el bife de cerdo con hueso, fino y de cocción rápida, y a veces para bifes finos de vaca con hueso. El chuletón es otra cosa: bastante más grueso, siempre vacuno y pensado para compartir. Si pedís chuletas esperando un chuletón, lo más probable es que te den bifes de un dedo.',
      'El tomahawk es de la misma zona que el chuletón, pero conserva el hueso de costilla entero y raspado. Si lo que te importa es la carne y no la presentación, el chuletón rinde más por kilo porque trae menos hueso.'
    ]},
    {id:'como-pedirlo', title:'Cómo pedirlo en la carnicería', items:[
      'Decí: bife ancho con hueso, de cuatro a cinco dedos de grosor. Esa descripción se entiende en cualquier mostrador.',
      'Si la carnicería tiene bife angosto con hueso, también sirve como chuletón: es la parte trasera del lomo, un poco más magra.',
      'Elegí piezas con grasa blanca en vetas finas por todo el centro, no solo en el borde.',
      'Pedí que corten entre costillas para que cada pieza tenga un solo hueso y el grosor quede parejo.',
      'Si la carne está recién cortada y muy húmeda, secala con papel antes de salar: dorará mejor.'
    ]},
    {id:'parrilla', title:'Chuletón a la parrilla', paragraphs:[
      'Con cuatro o cinco centímetros de grosor, el chuletón aguanta fuego más fuerte que un tomahawk, pero igual conviene tener una zona más suave en la parrilla para terminarlo sin quemar la grasa.'
    ], steps:[
      'Sacá el chuletón de la heladera media hora antes y salalo con sal gruesa por ambos lados.',
      'Prepará brasas para fuego medio a fuerte en una parte de la parrilla y dejá otra parte con menos brasas.',
      'Poné el chuletón sobre el fuego fuerte y dejalo 5 a 7 minutos sin moverlo, hasta que se forme costra.',
      'Dalo vuelta y cociná otros 5 a 7 minutos. Apoyalo unos segundos de canto para dorar la grasa del borde.',
      'Pasalo a la zona suave y seguí de 5 a 10 minutos, según el punto que busques. Con termómetro, retiralo a unos 50 °C para jugoso.',
      'Dejalo reposar 5 minutos, separá la carne del hueso y cortala en tiras gruesas contra la fibra.'
    ]},
    {id:'plancha', title:'Chuletón a la plancha o en sartén de hierro', paragraphs:[
      'Si no tenés parrilla, una plancha o sartén de hierro fundido bien caliente da una costra muy buena. Calentala varios minutos hasta que humee apenas, poné el chuletón sin aceite y dejalo sin mover hasta que se despegue solo. Después de sellar las dos caras y el borde de grasa, podés terminarlo en horno a 200 °C unos minutos si es muy grueso.',
      'Ventilá bien la cocina: la grasa del borde suelta bastante humo. Un chorrito de la misma grasa derretida, recogida con una cuchara y echada por encima al final, ayuda a que la costra quede pareja.'
    ]},
    {id:'tiempos', title:'Tiempos orientativos', table:{caption:'Chuletón de 4 a 5 cm, alrededor de 1 kilo', head:['Método','Sellado','Terminación','Punto jugoso'], rows:[
      ['Parrilla','5 a 7 min por lado a fuego fuerte','5 a 10 min en zona suave','50 °C al retirar, 54 °C tras el reposo'],
      ['Plancha de hierro','4 a 5 min por lado','Horno a 200 °C, 5 a 8 min','Igual que en la parrilla'],
      ['Parrilla, bien cocido','Igual','15 a 20 min en zona suave','63 °C o más']
    ], note:'La temperatura de partida de la carne y el calor real de las brasas cambian mucho los tiempos. El termómetro es la forma más segura de acertar.'}},
    {id:'cuanto-comprar', title:'Cuánto comprar', paragraphs:[
      'Como estimación de la redacción, un chuletón de 800 gramos a 1 kilo alcanza para dos adultos si va con guarnición, o para tres si hay otros cortes en la mesa. El hueso y la grasa del borde se llevan una parte del peso, por eso conviene no calcularlo como si fuera carne limpia.',
      'Si es para un asado grande, suele ser más práctico mezclar un par de chuletones con cortes que rinden más, como vacío o costilla. La guía de cuánta carne por persona te ayuda a hacer la cuenta.'
    ]},
    {id:'precio', title:'Qué cambia el precio del chuletón', paragraphs:[
      'El chuletón sale de una zona del lomo muy pedida para parrilla, y cortarlo grueso y con hueso exige trabajo en la carnicería. Su precio varía según la categoría del animal, el marmoleado, si la carne fue madurada y si se vende envasada al vacío o se corta en el momento.',
      'Como el hueso se paga al mismo valor que la carne, compará siempre contra el bife ancho sin hueso del mismo lugar. Si la diferencia es grande, puede convenir comprar el bife ancho en una sola pieza gruesa: vas a tener un resultado parecido sin pagar el hueso.'
    ]}
  ],
  recipes:['receta-papas-al-horno','receta-ensalada-cesar','receta-pan-al-ajo','receta-tomahawk-a-la-parrilla'],
  related:['guia-cuanta-carne-por-persona','corte-bife-ancho','corte-tomahawk','corte-ojo-de-bife','corte-bife-de-chorizo','guia-cortes-de-carne-vacuna'],
  faq:[
    ['¿Qué es un chuletón de vaca?','Es un bife ancho con su hueso de costilla, cortado de cuatro a seis centímetros de grosor. El nombre viene de España; en Paraguay se pide como bife ancho con hueso.'],
    ['¿Chuleta y chuletón son lo mismo?','No. En Paraguay la chuleta suele ser un bife fino con hueso, muchas veces de cerdo. El chuletón es vacuno, mucho más grueso y se cocina para compartir.'],
    ['¿Cuánto tiempo se hace un chuletón en la parrilla?','Uno de cuatro a cinco centímetros tarda entre 15 y 25 minutos para quedar jugoso: sellado fuerte de ambos lados y unos minutos en una zona de fuego suave.'],
    ['¿Qué diferencia hay entre chuletón y tomahawk?','Salen de la misma zona del lomo. El tomahawk conserva el hueso de costilla largo y limpio; el chuletón lleva el hueso corto y rinde más carne por kilo.'],
    ['¿El chuletón se sala antes o después?','Antes. Salalo con sal gruesa media hora o una hora antes de cocinarlo para que la sal penetre y la superficie se seque, lo que ayuda a formar la costra.'],
    ['¿Cómo pido un chuletón si el carnicero no lo conoce?','Pedí bife ancho con hueso, cortado de cuatro a cinco dedos de grosor, con un solo hueso por pieza.']
  ],
  ctaTitle:'Asado para tu evento',
  ctaText:'¿Querés chuletones, vacío y chorizo a la parrilla para una reunión o un evento de la empresa? Escribinos con la fecha, la zona y el número de invitados para consultar un servicio de asado en Gran Asunción.',
  waMessage:'Hola, quiero consultar por un asado con chuletón para un evento.'
};
