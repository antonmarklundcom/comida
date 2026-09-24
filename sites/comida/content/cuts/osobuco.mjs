// Meat cut module: osobuco. Shape: see plan/prompts/CONTENT-WRITER.md, Guide and cut fields.
export default {
  id:'corte-osobuco', slug:'osobuco', kind:'cut', order:2, animal:'Vacuno',
  published:true, indexable:true, updatedAt:'2026-09-24', verifiedAt:'2026-09-24',
  source:'Guía de la redacción de comida.com.py, basada en la práctica de carnicería y la cocina casera paraguaya',
  label:'Osobuco',
  seoTitle:'Osobuco: qué es, cómo elegirlo y cocinarlo',
  meta:'Osobuco: de qué parte de la vaca sale, cómo elegir rodajas con buena médula, tiempos en olla común y a presión, cuánto comprar y qué cambia su precio.',
  h1:'Osobuco: el corte con hueso y médula para la olla',
  cardText:'Rodajas con hueso y médula que se vuelven tiernas en el puchero y el guiso.',
  category:['carne','paraguaya'],
  keywords:['osobuco','osobuco precio','osobuco en olla','osobuco a la olla','ossobuco'],
  intro:[
    'El osobuco es una rodaja de la pierna o del brazo del vacuno cortada de lado a lado, con el hueso en el centro y la médula adentro. Es una carne dura en crudo, llena de tejido conectivo, que después de un rato largo en la olla se vuelve blanda, gelatinosa y muy sabrosa.',
    'Por eso es un clásico del puchero, del guiso y de los caldos de invierno. En esta página te contamos cómo reconocer un buen osobuco en la carnicería, cuánto tiempo necesita según la olla que uses, cuánto comprar y qué errores lo dejan duro.'
  ],
  facts:[
    ['Animal','Vacuno'],
    ['Zona del animal','Pierna trasera (garrón) o brazo delantero (brazuelo), cortado en rodajas'],
    ['Otros nombres','Ossobuco (en italiano), garrón o brazuelo en rodajas'],
    ['Mejor cocción','Olla, a fuego suave y por tiempo largo'],
    ['Por persona','350 a 400 g con hueso (estimación)']
  ],
  estimate:'Los gramos por persona son una estimación de la redacción que incluye el peso del hueso; ajustala según el plato y el apetito.',
  sections:[
    {id:'que-es', title:'Qué es el osobuco y de qué parte sale', paragraphs:[
      'El nombre viene del italiano y significa hueso con agujero, por el anillo de hueso que rodea a la médula. Se obtiene serruchando en rodajas la parte baja de las patas: el garrón, en la pierna trasera, y el brazuelo, en la delantera. Son músculos que el animal usa todo el día para caminar, y por eso tienen mucha fibra y colágeno.',
      'Ese colágeno es justamente lo que se busca. Con calor húmedo y tiempo se transforma en gelatina, espesa el caldo y deja la carne suelta, fácil de separar con un tenedor. La médula aporta grasa y un sabor profundo que muchos esperan sacar del hueso con una cucharita al final del plato.'
    ]},
    {id:'como-elegir', title:'Cómo elegir el osobuco en la carnicería', paragraphs:[
      'Las rodajas de garrón trasero suelen ser más anchas y carnosas; las de brazuelo, más chicas y con más tendón. Las dos sirven, pero para un puchero abundante conviene pedir de la trasera. Mirá que el hueso esté en el centro y que la médula se vea rosada o blanca, llena, sin zonas oscuras.'
    ], items:[
      'Pedí rodajas de un grosor parejo, de unos tres a cuatro centímetros: así se cocinan al mismo tiempo.',
      'Evitá las rodajas con astillas de hueso en la superficie; pedí que las limpien o enjuagalas antes de cocinar.',
      'La carne debe ser roja y firme, y la membrana que rodea la rodaja, brillante, no seca ni amarronada.',
      'Si vas a hacer caldo, el brazuelo con más hueso y tendón da un líquido más gelatinoso.'
    ]},
    {id:'coccion', title:'Cómo cocinar el osobuco: tiempos y señales', paragraphs:[
      'El osobuco no perdona el apuro. A fuego fuerte y por poco tiempo queda como una suela; a fuego mínimo, con la olla apenas burbujeando, llega a un punto en que la carne se desprende sola del hueso. Esa es la señal que importa, más que el reloj.'
    ], table:{caption:'Tiempos orientativos para rodajas de 3 a 4 cm', head:['Método','Cómo','Tiempo','Señal de que está'], rows:[
      ['Olla común','Dorado y luego tapado a fuego mínimo','2 a 2 ½ horas','La carne se separa del hueso con un tenedor'],
      ['Olla a presión','Dorado, con líquido hasta cubrir a medias','40 a 50 min desde que silba','Tendones blandos y transparentes'],
      ['Horno','Asadera tapada con caldo, a 160 °C','2 ½ a 3 horas','Salsa espesa y carne suelta'],
      ['Parrilla','Solo con fuego muy suave y mucha paciencia','1 ½ a 2 horas','Poco habitual: tiende a quedar duro']
    ], note:'Los tiempos dependen del grosor y del animal. Si al pinchar la carne todavía resiste, seguí cocinando de a 15 minutos.'}},
    {id:'paso-a-paso', title:'Osobuco en la olla, paso a paso', steps:[
      'Hacé dos o tres cortes pequeños en la membrana del borde de cada rodaja: así no se enrosca al calentarse.',
      'Salá y pasá las rodajas por un poco de harina, sacudiendo el exceso.',
      'Dorá en una olla con aceite bien caliente, de a pocas rodajas, dos o tres minutos por lado. Retiralas.',
      'En la misma olla rehogá cebolla, locote, ajo y zanahoria. Si querés, sumá tomate.',
      'Volvé el osobuco a la olla, cubrí casi hasta arriba con caldo o agua caliente y bajá el fuego al mínimo.',
      'Tapá y cociná hasta que la carne se desprenda del hueso. Revisá el líquido cada tanto y agregá un poco si hace falta.'
    ]},
    {id:'cuanto-comprar', title:'Cuánto osobuco comprar por persona', paragraphs:[
      'Como el hueso pesa bastante, la estimación de la redacción es de 350 a 400 gramos por adulto cuando el osobuco es la carne principal, lo que suele equivaler a una rodaja grande o dos chicas. En un puchero con otras carnes, verduras y mandioca, alcanza con unos 250 gramos por persona.',
      'Si lo usás solo para dar sabor a un caldo o a una sopa, con dos o tres rodajas se perfuma una olla familiar. Para eventos con varias carnes, la guía de cuánta carne por persona te ayuda a hacer la cuenta completa.'
    ]},
    {id:'errores', title:'Errores comunes con el osobuco', items:[
      'Hervirlo a borbotones: el hervor fuerte endurece las fibras y enturbia el caldo. Tiene que burbujear apenas.',
      'No dorarlo antes: se pierde el color y el sabor tostado que después pasa a la salsa.',
      'Olvidar los cortes en la membrana del borde: la rodaja se curva, se cocina despareja y se desarma mal.',
      'Sacarlo antes de tiempo porque se ve cocido: por fuera puede parecer listo mucho antes de que el colágeno se ablande.',
      'Tirar la médula: se puede comer, untar en pan o disolver en la salsa para darle cuerpo.'
    ]},
    {id:'precio', title:'Qué cambia el precio del osobuco', paragraphs:[
      'Suele ser de los cortes accesibles de la carnicería, pero el precio por kilo engaña un poco porque parte de ese peso es hueso. Influyen la proporción de carne y hueso, si las rodajas son de garrón trasero o de brazuelo, el grosor y la prolijidad del corte.',
      'La demanda también cuenta: en los meses fríos se busca más para puchero y sopas. Al comparar entre carnicerías, fijate cuánta carne tiene cada rodaja y no solo el número del cartel.'
    ]},
    {id:'recetas', title:'Recetas del sitio que llevan osobuco', paragraphs:[
      'El puchero paraguayo es el destino natural del osobuco: la médula y el colágeno le dan al caldo ese cuerpo que se toma primero en taza. También funciona en el guiso paraguayo, en lugar de la carne en cubos, y en el estofado, donde la salsa queda espesa sin necesidad de harina extra. Si sobra carne, desmenuzala y usala para empanadas o croquetas.'
    ]}
  ],
  recipes:['receta-puchero-paraguayo','receta-guiso-paraguayo','receta-estofado-de-carne','receta-croquetas-de-carne'],
  related:['guia-cuanta-carne-por-persona','corte-peceto','corte-matambre','guia-mercado-de-abasto'],
  faq:[
    ['¿De qué parte de la vaca es el osobuco?','Es la parte baja de las patas, cortada en rodajas con el hueso en el centro: el garrón en la pierna trasera y el brazuelo en la delantera.'],
    ['¿Cuánto tarda el osobuco en la olla a presión?','Entre 40 y 50 minutos desde que empieza a silbar, para rodajas de tres a cuatro centímetros. Dejá bajar la presión sola antes de abrir.'],
    ['¿Cuánto tiempo se hierve el osobuco en olla común?','Unas dos horas a dos horas y media a fuego mínimo, tapado. Está listo cuando la carne se separa del hueso con un tenedor.'],
    ['¿Por qué el osobuco quedó duro?','Casi siempre por falta de tiempo o por hervirlo muy fuerte. Volvelo al fuego mínimo, tapado, y probá cada 15 minutos hasta que se ablande.'],
    ['¿Se come la médula del osobuco?','Sí. Es grasa con mucho sabor: se saca con una cucharita, se unta en pan o se mezcla en la salsa.'],
    ['¿Cuántas rodajas de osobuco por persona?','Como estimación, una rodaja grande o dos chicas por adulto si es el plato principal, alrededor de 350 a 400 gramos con hueso.']
  ],
  ctaTitle:'Asado para tu evento',
  ctaText:'Si en lugar de pasar la tarde frente a la olla preferís que alguien se ocupe de la comida de tu reunión, contanos la fecha y cuántos invitados esperás. Te ayudamos a consultar asado y catering en Gran Asunción.',
  waMessage:'Hola, estoy organizando una reunión y quiero consultar por un servicio de asado.'
};
