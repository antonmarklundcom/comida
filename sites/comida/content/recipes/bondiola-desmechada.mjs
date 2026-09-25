// Recipe module: bondiola desmechada para sándwiches. Companion of corte-bondiola-de-cerdo. Shape: sites/comida/content/recipes/sopa-paraguaya.mjs
export default {
  id:'receta-bondiola-desmechada', slug:'bondiola-desmechada', kind:'recipe',
  published:true, indexable:true, updatedAt:'2026-09-24', verifiedAt:'2026-09-24',
  source:'Receta de la redacción de comida.com.py, basada en la cocina casera de Paraguay y el Río de la Plata',
  label:'Bondiola desmechada',
  seoTitle:'Bondiola desmechada para sándwiches',
  meta:'Bondiola desmechada al horno o en olla a presión, jugosa y lista para sándwiches: adobo, cocción lenta, cómo desmecharla y armar el pan con repollo.',
  h1:'Bondiola desmechada para sándwiches',
  cardText:'Bondiola cocida horas hasta deshacerse, para rellenar panes y wraps.',
  course:'Plato principal', cuisine:'Casera', category:['carne','horno','fiesta'],
  keywords:['bondiola desmechada','bondiola de cerdo desmechada','sándwich de bondiola desmechada','cerdo desmechado','bondiola a la cerveza'],
  intro:[
    'La bondiola desmechada es cerdo cocido tanto tiempo y tan despacio que se separa en hebras con solo apretarlo con dos tenedores. Se mezcla con su propio jugo reducido y queda húmeda, sabrosa y lista para meter en pan. Es una de las mejores formas de alimentar a mucha gente con poco trabajo el día de la reunión: la carne se hace antes y se calienta al final.',
    'Esta receta usa una bondiola de unos 2 kilos, que da para 6 personas con dos sándwiches cada una. Más abajo está cómo armar el sándwich con ensalada de repollo y cebolla encurtida, y una versión en olla a presión para cuando no hay tres horas y media de horno.'
  ],
  times:{prep:25, cook:225, rest:20}, difficulty:'Fácil',
  yield:{mode:'porciones', base:6, options:[2,4,6,12], yieldText:'6 porciones (12 sándwiches)', note:'Unos 330 g de bondiola cruda por persona: al desmecharla pierde cerca de un tercio del peso. Para 2 personas conviene igual cocinar una pieza de al menos 1 kg y guardar el resto.'},
  ingredients:[
    {group:'Para la bondiola', items:[
      {q:2, u:'kg', item:'bondiola de cerdo', note:'en una pieza, sin atar'},
      {q:1, u:'cda', item:'sal fina'},
      {q:1, u:'cda', item:'azúcar negra'},
      {q:2, u:'cdita', item:'pimentón dulce'},
      {q:1, u:'cdita', item:'comino molido'},
      {q:1, u:'cdita', item:'orégano seco'},
      {q:null, item:'pimienta negra molida', note:'al gusto'}
    ]},
    {group:'Para el líquido de cocción', items:[
      {q:2, u:'u', item:'cebollas', one:'cebolla', note:'en rodajas'},
      {q:5, u:'diente', item:'ajo', note:'enteros, pelados'},
      {q:350, u:'ml', item:'cerveza rubia o caldo'},
      {q:2, u:'cda', item:'vinagre de manzana'},
      {q:2, u:'hoja', item:'laurel'}
    ]},
    {group:'Para los sándwiches', items:[
      {q:12, u:'u', item:'panes tipo hamburguesa o pan casero', one:'pan', note:'o 3 flautas cortadas en cuatro'},
      {q:0.5, u:'u', item:'repollo chico', note:'en juliana fina'},
      {q:2, u:'u', item:'zanahorias', one:'zanahoria', note:'ralladas'},
      {q:3, u:'cda', item:'mayonesa'},
      {q:1, u:'u', item:'cebolla morada', note:'en pluma, con jugo de limón y sal'}
    ]}
  ],
  steps:[
    {title:'Condimentá la pieza', text:'Mezclá la sal, la azúcar negra, el pimentón, el comino, el orégano y la pimienta. Secá la bondiola con papel y frotala con la mezcla por todos lados. Si podés, dejala tapada en la heladera desde la noche anterior; si no, con una hora ya toma gusto.'},
    {title:'Armá la cama aromática', text:'Precalentá el horno a 150 °C. En una olla que pueda ir al horno o en una asadera profunda, poné las rodajas de cebolla, los ajos y el laurel. Apoyá la bondiola encima y volcá la cerveza con el vinagre alrededor, sin lavar el condimento de la superficie.'},
    {title:'Cociná tapada, muchas horas', text:'Tapá la olla o cerrá la asadera con dos capas de papel aluminio bien selladas. Horneá sin abrir durante tres horas. A mitad de tiempo podés revisar que quede líquido en el fondo y agregar medio vaso de agua caliente si hace falta.', min:180},
    {title:'Comprobá que se deshaga', text:'La bondiola está lista para desmechar cuando un tenedor clavado gira sin esfuerzo y la carne se abre sola; eso ocurre con unos 90 a 95 °C en el centro, muy por encima de los 63 °C que alcanzan para que el cerdo sea seguro. Si todavía resiste, tapá y dale otra media hora.'},
    {title:'Dorá destapada', text:'Retirá la tapa, subí el horno a 200 °C y dejá que la superficie se oscurezca un poco. Esas partes tostadas dan contraste de textura cuando se mezclan con las hebras jugosas.', min:30},
    {title:'Reposá y desmechá', text:'Pasá la bondiola a una fuente y esperá unos minutos para no quemarte. Con dos tenedores, tirá en direcciones opuestas hasta separar toda la carne en hebras; descartá los trozos de grasa dura que no se hayan derretido.', min:20},
    {title:'Reducí el jugo y mezclá', text:'Colá el líquido de la olla, retirá con una cuchara la grasa que flota y hacelo hervir en una sartén hasta que se reduzca a la mitad. Volcá ese jugo concentrado sobre la carne desmechada de a poco, mezclando, hasta que quede húmeda pero no chorreando.', min:10},
    {title:'Armá los sándwiches', text:'Mezclá el repollo y la zanahoria con la mayonesa y una pizca de sal. Tostá los panes abiertos, poné una buena porción de bondiola caliente, arriba la ensalada de repollo y unas plumas de cebolla morada escurridas. Cerrá y serví enseguida.'}
  ],
  tips:[
    'La bondiola es ideal para desmechar porque tiene grasa entre los músculos. Un corte magro, como el lomo o la pulpa de pernil, queda seco y fibroso con este método.',
    'No agregues sal al jugo antes de reducirlo: al concentrarse se sala solo. Probalo al final y recién ahí corregí.',
    'La cebolla morada en pluma con jugo de limón y sal se ablanda en quince minutos y le da al sándwich la acidez que necesita.',
    'Para una reunión grande, desmechá la carne el día anterior, guardala con su jugo y calentala tapada en una olla a fuego bajo justo antes de servir.',
    'Si la carne quedó seca, no es falta de cocción sino de jugo: agregale más líquido reducido o un poco de caldo caliente.'
  ],
  sections:[
    {title:'Cómo servirla para muchos', paragraphs:[
      'Para un cumpleaños o una reunión de trabajo, la bondiola desmechada se presta a una mesa donde cada uno arma su pan: una olla con la carne caliente, una fuente con la ensalada de repollo, la cebolla encurtida, panes cortados y alguna salsa barbacoa o picante. Así la cocina no se atrasa y los invitados se sirven a su ritmo.',
      'Como referencia, un kilo de bondiola cruda rinde para unos seis sándwiches generosos o diez chicos, tipo bocadito. Esa cuenta es una estimación de la redacción: cambia según el pan y cuánta carne le pongas a cada uno.'
    ]},
    {title:'Otros usos de la carne desmechada', paragraphs:[
      'Lo que sobra sirve para rellenar empanadas, tacos o wraps con verduras, para sumar a un arroz salteado o para una tarta con cebolla y queso. Como ya está cocida y condimentada, resuelve una cena rápida en pocos minutos.'
    ]}
  ],
  variations:[
    ['En olla a presión','Cortá la bondiola en tres o cuatro trozos grandes, doralos en la olla, sumá el líquido y cociná unos 75 a 90 minutos desde que toma presión. Dejá que baje sola, desmechá y reducí el jugo destapado.'],
    ['Con salsa barbacoa','Reemplazá parte del jugo reducido por salsa barbacoa casera al mezclar la carne. Queda más dulce y pegajosa, muy pedida por los chicos.'],
    ['Con naranja agria','Cambiá la cerveza por jugo de naranja agria con la misma cantidad de agua. Aporta una acidez fresca que combina con mandioca y con pan.']
  ],
  storage:'Guardala con su jugo en un recipiente cerrado en la heladera hasta cuatro días. También se congela muy bien en porciones con líquido, hasta tres meses; descongelala en la heladera y calentala tapada a fuego bajo.',
  faq:[
    ['¿Cuánto tiempo se cocina la bondiola para desmechar?','Unas tres horas tapada a 150 °C y media hora destapada a 200 °C para una pieza de 2 kilos. En olla a presión, entre 75 y 90 minutos desde que toma presión.'],
    ['¿A qué temperatura se desmecha la bondiola?','Cuando llega a unos 90 a 95 °C en el centro. A 63 °C ya es segura para comer, pero todavía está firme y se corta en fetas, no en hebras.'],
    ['¿Qué pan va con bondiola desmechada?','Pan de hamburguesa, pan casero o flauta tostada. Conviene un pan que aguante el jugo sin desarmarse y tostarlo por dentro antes de rellenar.'],
    ['¿Se puede hacer bondiola desmechada con cerveza?','Sí, en esta receta la cerveza rubia es el líquido de cocción. Aporta un leve amargor que se equilibra con la azúcar negra del adobo.'],
    ['¿Cuánta bondiola necesito para 20 sándwiches?','Como estimación de la redacción, unos 3,5 kilos de bondiola cruda para sándwiches medianos. Si son chicos, tipo bocadito, alcanza con menos.'],
    ['¿Por qué mi bondiola desmechada quedó seca?','Casi siempre falta jugo al mezclar o se cocinó destapada demasiado tiempo. Sumá el líquido de cocción reducido hasta que la carne brille.']
  ],
  related:['corte-bondiola-de-cerdo','receta-bondiola-al-horno','receta-costillas-de-cerdo-a-la-barbacoa','receta-sandwich-de-lomito','receta-lomito-arabe','receta-pan-casero'],
  guides:['guia-cortes-de-cerdo','guia-cuanta-carne-por-persona'],
  cateringOccasion:'cumpleanos'
};
