// Recipe module: osobuco a la olla. Companion of corte-osobuco. Shape: sites/comida/content/recipes/sopa-paraguaya.mjs
export default {
  id:'receta-osobuco-a-la-olla', slug:'osobuco-a-la-olla', kind:'recipe',
  published:true, indexable:true, updatedAt:'2026-09-24', verifiedAt:'2026-09-24',
  source:'Receta de la redacción de comida.com.py, basada en la cocina casera de Paraguay y el Río de la Plata',
  label:'Osobuco a la olla',
  seoTitle:'Osobuco a la olla: receta con salsa y vino',
  meta:'Osobuco a la olla con tomate, locote y vino tinto, tierno hasta separarse del hueso. Tiempos en olla común y a presión, y con qué servirlo.',
  h1:'Osobuco a la olla con tomate, locote y vino',
  cardText:'Rodajas de osobuco guisadas despacio hasta que la carne se suelta sola.',
  course:'Plato principal', cuisine:'Casera', category:['carne','paraguaya'],
  keywords:['osobuco a la olla','osobuco','osobuco en olla','osobuco a la olla con vino','osobuco en olla a presión'],
  intro:[
    'El osobuco a la olla es comida de domingo largo: rodajas doradas que se cocinan a fuego mínimo en una salsa de tomate, locote y vino tinto hasta que la carne cae del hueso y la médula se funde en la salsa. El resultado es un guiso espeso, brilloso y muy sabroso, que pide pan o algo que lo absorba.',
    'Las cantidades son para 6 rodajas grandes, una por persona. Si querés aprender a elegir las rodajas en la carnicería o entender por qué este corte necesita tanto tiempo, está en la guía del osobuco; acá tenés la receta completa, en olla común y en olla a presión.'
  ],
  times:{prep:30, cook:150, rest:10}, difficulty:'Fácil',
  yield:{mode:'porciones', base:6, options:[2,4,6,12], yieldText:'6 porciones', note:'Una rodaja de 350 a 400 g por persona. Para 12 porciones usá dos ollas o una olla muy ancha: las rodajas tienen que quedar en una sola capa.'},
  ingredients:[
    {group:'Para la carne', items:[
      {q:6, u:'u', item:'rodajas de osobuco', one:'rodaja de osobuco', note:'de 3 a 4 cm de grosor'},
      {q:3, u:'cda', item:'harina de trigo', note:'para pasar la carne'},
      {q:3, u:'cda', item:'aceite'},
      {q:2, u:'cdita', item:'sal fina'},
      {q:null, item:'pimienta negra molida', note:'al gusto'}
    ]},
    {group:'Para la salsa', items:[
      {q:2, u:'u', item:'cebollas medianas', one:'cebolla mediana', note:'picadas'},
      {q:1, u:'u', item:'locote rojo', note:'en cubos'},
      {q:2, u:'u', item:'zanahorias', one:'zanahoria', note:'en rodajas'},
      {q:4, u:'diente', item:'ajo', note:'picados'},
      {q:250, u:'ml', item:'vino tinto seco'},
      {q:1, u:'lata', item:'tomate triturado', note:'de unos 400 g'},
      {q:500, u:'ml', item:'caldo de carne caliente', note:'o agua caliente'},
      {q:2, u:'hoja', item:'laurel'},
      {q:1, u:'cdita', item:'orégano seco'},
      {q:1, u:'cdita', item:'pimentón dulce'}
    ]}
  ],
  steps:[
    {title:'Prepará las rodajas', text:'Secá el osobuco con papel. Con una tijera o cuchillo, marcá tres o cuatro tajos cortos en la piel fina que rodea cada rodaja, para que no se retraiga. Salpimentá y pasá las rodajas por la harina, golpeándolas para que quede solo una capa delgada.'},
    {title:'Dorá en tandas', text:'Calentá el aceite en una olla ancha de fondo grueso. Poné tres rodajas por vez, sin que se toquen, y dejalas hasta que tengan un color marrón parejo de cada lado. Reservalas en una fuente.', min:10},
    {title:'Rehogá las verduras', text:'Bajá a fuego medio y, en la grasa que quedó, poné la cebolla, el locote y la zanahoria con una pizca de sal. Revolvé raspando lo que se pegó al fondo, porque ahí está buena parte del sabor. Cuando la cebolla esté blanda, sumá el ajo, el pimentón y el orégano un minuto más.', min:8},
    {title:'Desglasá con el vino', text:'Subí el fuego y echá el vino. Dejalo hervir, revolviendo, hasta que se evapore el olor a alcohol y el líquido se reduzca a la mitad.', min:4},
    {title:'Armá la olla', text:'Agregá el tomate triturado, el laurel y el caldo caliente. Volvé a meter las rodajas con el jugo que soltaron, en una sola capa. El líquido tiene que llegar a cubrir dos tercios de la carne; si falta, sumá un poco más de caldo.'},
    {title:'Cociná tapado a fuego mínimo', text:'Cuando retome el hervor, bajá el fuego al mínimo para que solo aparezca una burbuja de vez en cuando. Tapá, dejando una rendija pequeña. Cada media hora, girá las rodajas con cuidado y controlá que la salsa no se pegue.', min:120},
    {title:'Probá la terneza', text:'El osobuco está listo cuando al empujar la carne con un tenedor se separa del hueso sin esfuerzo y los tendones se ven transparentes y blandos. Si todavía resiste, seguí en tramos de 15 minutos. Si la salsa quedó muy líquida, destapá los últimos minutos.'},
    {title:'Reposá y serví', text:'Apagá el fuego, retirá el laurel y dejá la olla tapada diez minutos para que la salsa se asiente. Serví cada rodaja con abundante salsa y una cucharita para sacar la médula.', min:10}
  ],
  tips:[
    'En olla a presión, hacé los mismos pasos hasta armar la olla, con el líquido apenas por debajo de la mitad de la carne, y cociná 45 minutos desde que silba. Dejá bajar la presión sola.',
    'La harina ayuda a dorar y espesa la salsa. Si alguien no come trigo, usá almidón de mandioca o dejala de lado y reducí la salsa al final.',
    'El osobuco mejora de un día para otro: enfriado en la heladera, la grasa sube y se retira fácil con una cuchara antes de calentar.',
    'Si usás rodajas de brazuelo, más chicas, revisalas a la hora y media: suelen estar antes que las del garrón trasero.',
    'Guardá la salsa que sobre. Con fideos o arroz es otra comida completa.'
  ],
  sections:[
    {title:'Con qué acompañar el osobuco a la olla', paragraphs:[
      'La salsa es la mitad del plato, así que conviene algo neutro que la reciba: arroz blanco o arroz primavera, puré de papas, polenta blanda o fideos anchos. En casa paraguaya también se sirve con mandioca hervida y una porción de sopa paraguaya al costado.',
      'En la versión italiana de este plato se espolvorea al final una mezcla de ralladura de limón, ajo y perejil picados. No es tradicional acá, pero le da un contraste fresco que vale la pena probar.'
    ]}
  ],
  variations:[
    ['En olla a presión','Mismos ingredientes con 300 ml de caldo en lugar de 500. Cocción de 40 a 50 minutos desde que empieza a silbar.'],
    ['Con papas y zapallo','En la última media hora, sumá papas y zapallo en trozos grandes. Se cocinan en la salsa y el plato queda completo en una sola olla.'],
    ['Al horno','Después de armar la olla, pasala tapada a un horno a 160 °C durante dos horas y media a tres horas.']
  ],
  storage:'Guardalo en la heladera con su salsa, en un recipiente tapado, hasta tres días. Calentalo a fuego bajo con un chorrito de agua. Congelado en porciones con bastante salsa aguanta hasta tres meses.',
  faq:[
    ['¿Cuánto tarda el osobuco a la olla?','Entre dos horas y dos horas y media en olla común a fuego mínimo, tapado. En olla a presión, unos 45 minutos desde que silba.'],
    ['¿Hay que dorar el osobuco antes de guisarlo?','Conviene mucho. El dorado le da color a la carne y deja en el fondo de la olla una capa tostada que después se disuelve en la salsa.'],
    ['¿Qué vino se usa para el osobuco?','Un tinto seco cualquiera, que tomarías en la mesa. Si no querés usar vino, reemplazalo por caldo con una cucharada de vinagre.'],
    ['¿Con qué se come el osobuco a la olla?','Con arroz, puré, polenta, fideos o mandioca. Lo importante es que haya algo para aprovechar la salsa.'],
    ['¿Se puede hacer osobuco a la olla sin tomate?','Sí. Aumentá el caldo y sumá más cebolla y locote. Queda un guiso más claro, parecido a un estofado blanco.'],
    ['¿Cómo se come la médula del osobuco?','Se saca del centro del hueso con una cucharita o la punta de un cuchillo, y se come sola, sobre pan o mezclada con la salsa.']
  ],
  related:['corte-osobuco','receta-puchero-paraguayo','receta-estofado-de-carne','receta-asado-a-la-olla','receta-arroz-primavera','receta-sopa-paraguaya'],
  guides:['guia-cuanta-carne-por-persona','guia-mercado-de-abasto']
};
