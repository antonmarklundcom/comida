// Recipe module: pacú a la parrilla (abierto en mariposa, con variante relleno). Companion of guia-pacu. Shape: sites/comida/content/recipes/sopa-paraguaya.mjs
export default {
  id:'receta-pacu-a-la-parrilla', slug:'pacu-a-la-parrilla', kind:'recipe',
  published:true, indexable:true, updatedAt:'2026-09-24', verifiedAt:'2026-09-24',
  source:'Receta de la redacción de comida.com.py, basada en la preparación tradicional paraguaya de pescado de río a la brasa',
  label:'Pacú a la parrilla',
  seoTitle:'Pacú a la parrilla: abierto o relleno',
  meta:'Receta de pacú a la parrilla abierto en mariposa, con la piel crocante y la carne jugosa, más la versión clásica de pacú relleno con sofrito y queso.',
  h1:'Pacú a la parrilla: abierto en mariposa o relleno',
  cardText:'El pacú abierto sobre las brasas, con piel crocante, o relleno con sofrito y queso.',
  course:'Plato principal', cuisine:'Paraguaya', category:['paraguaya','fiesta','carne'],
  keywords:['pacú a la parrilla','pacu a la parrilla','pacú relleno','pacu relleno a la parrilla','pacú asado','pacu pescado a la parrilla'],
  intro:[
    'El pacú a la parrilla es un clásico de los domingos junto al río y de la Semana Santa en muchas casas paraguayas. El pescado se abre en mariposa, se condimenta con ajo y limón y se cocina con la piel hacia las brasas, despacio, hasta que la grasa se derrite, la piel queda crocante y la carne se separa sola de las costillas. No hace falta más que sal, limón y buena brasa.',
    'Esta receta usa un pacú entero de unos 3 kilos para seis personas. Abajo tenés también la versión rellena, la otra forma tradicional, con un sofrito de cebolla, locote y tomate con queso Paraguay dentro del pescado. Para elegir un buen pacú y entender sus espinas, mirá nuestra guía del pacú.'
  ],
  times:{prep:30, cook:50, rest:30}, difficulty:'Media',
  yield:{mode:'porciones', base:6, options:[2,4,6,12], yieldText:'6 porciones', note:'Estimación de la redacción: un pacú entero de unos 3 kg rinde seis porciones como plato principal; para dos personas alcanza uno de 1 a 1,2 kg.'},
  ingredients:[
    {group:'Para el pacú', items:[
      {q:3, u:'kg', item:'pacú entero', note:'en una o dos piezas, escamado, limpio y abierto en mariposa; pedilo así en la pescadería'},
      {q:5, u:'diente', item:'ajo', note:'machacado'},
      {q:3, u:'u', item:'limones', one:'limón', note:'jugo'},
      {q:4, u:'cda', item:'aceite'},
      {q:1, u:'cda', item:'sal gruesa', note:'molida un poco'},
      {q:1, u:'cdita', item:'orégano seco'},
      {q:null, item:'pimienta', note:'al gusto'},
      {q:3, u:'kg', item:'carbón', note:'o leña dura; cantidad aproximada'}
    ]},
    {group:'Para servir', items:[
      {q:2, u:'u', item:'limones', one:'limón', note:'en gajos'},
      {q:0.5, u:'atado', item:'cebollita de hoja', note:'picada'},
      {q:null, item:'perejil picado', note:'al gusto'}
    ]}
  ],
  steps:[
    {title:'Revisá el pescado abierto', text:'Apoyá el pacú abierto sobre la mesada, con la piel hacia abajo. Revisá que no queden escamas en la piel ni restos de sangre junto al espinazo; enjuagá con agua fría si hace falta y secalo muy bien con papel de cocina, por los dos lados.'},
    {title:'Hacé cortes en el lomo', text:'Con un cuchillo filoso hacé cortes transversales poco profundos en la carne del lomo, separados unos dos centímetros, sin llegar a la piel. Ayudan a que el calor entre parejo en la parte gruesa y a que la marinada penetre.'},
    {title:'Condimentá y dejá marinar', text:'Mezclá el ajo, el jugo de limón, el aceite, la sal, el orégano y pimienta. Untá toda la carne, metiendo la mezcla en los cortes, y dejá el pacú en la heladera, tapado, mientras preparás el fuego.', min:30},
    {title:'Prepará un fuego medio suave', text:'Encendé el carbón o la leña a un costado y armá una cama de brasas más bien baja, pareja y sin llama. El pacú necesita calor moderado y sostenido: con fuego fuerte la piel se quema antes de que la carne junto al espinazo esté cocida. Calentá la parrilla y aceitala bien.', min:35},
    {title:'Cociná con la piel hacia las brasas', text:'Colocá el pacú en una parrilla doble, o directamente sobre la parrilla, con la piel hacia abajo. Cociná sin darlo vuelta: la grasa se va derritiendo y la carne se cocina desde abajo. Si hay llamaradas por la grasa que gotea, corré algunas brasas.', min:40},
    {title:'Dorá la carne al final', text:'Cuando la carne esté casi toda opaca, girá la parrilla doble para dorar apenas el lado de la carne. Si cocinás sin parrilla doble, podés saltear este paso: el pacú abierto se sirve perfectamente con la piel abajo.', min:8},
    {title:'Probá el punto en la parte más gruesa', text:'Pinchá con un tenedor junto al espinazo, en la zona más alta del lomo. La carne tiene que estar opaca, sin brillo translúcido, y separarse en lascas. Las costillas se despegan fácil cuando el pescado está listo.'},
    {title:'Serví en la misma pieza', text:'Pasá el pacú entero a una tabla o fuente grande, con la piel abajo. Espolvoreá cebollita y perejil, y llevalo a la mesa con gajos de limón. Serví primero la panza y las costillas, y después el lomo, avisando que tiene espinas finas.'}
  ],
  tips:[
    'Pedí que te lo abran por el lomo si querés una pieza más pareja, o por la panza si preferís que las costillas queden a los costados. Las dos formas funcionan.',
    'La parrilla doble es la mejor inversión para cocinar pescado entero: permite girarlo sin que se rompa.',
    'No uses mucho aceite en la marinada: el pacú ya tiene su propia grasa.',
    'Si la piel empieza a quemarse antes de tiempo, levantá la parrilla o poné una lámina de papel aluminio entre las brasas y el pescado durante unos minutos.',
    'Las costillitas son la parte favorita de muchos: separalas primero y servilas como picada mientras termina el resto.'
  ],
  sections:[
    {title:'Pacú relleno a la parrilla', paragraphs:['Para la versión rellena, pedí el pacú entero, escamado y limpio por la panza, sin abrir en mariposa. Rehogá en tres cucharadas de aceite dos cebollas, un locote rojo y uno verde en tiras, sumá dos dientes de ajo y dos tomates picados, y cociná hasta que se evapore el líquido. Fuera del fuego agregá 200 g de queso Paraguay en cubos, dos huevos duros picados, cebollita de hoja y perejil.','Salá el pescado por dentro y por fuera, rellenalo y cerrá la panza con palillos o hilo de cocina. Cociná a fuego medio suave en parrilla doble, unos 30 a 35 minutos por lado para un pacú de 3 kg, hasta que la carne junto al espinazo esté opaca y el relleno bien caliente. También se puede hacer en horno a 190 °C durante aproximadamente una hora, sobre una asadera aceitada. Cada familia tiene su relleno: hay quien suma mandioca hervida pisada o harina de mandioca tostada.']}
  ],
  variations:[
    ['Costillitas de pacú','Pedí las costillas de pacú separadas, marinalas igual y cocinalas a fuego medio unos 8 a 10 minutos por lado, hasta que estén doradas y la carne se despegue del hueso.'],
    ['En postas','Si el pacú es muy grande, cortalo en postas de 3 cm y cocinalas como el surubí a la parrilla, unos 8 minutos por lado.'],
    ['Con salsa de ajo y perejil','Mezclá ajo picado, perejil, aceite y jugo de limón y pincelá el pacú en los últimos minutos, o servila aparte.']
  ],
  storage:'Guardá lo que sobre en la heladera, en recipiente cerrado, y comelo en uno o dos días. Frío, desespinalo y usalo en ensaladas o en tortilla; para recalentarlo, envolvelo en papel aluminio y calentalo en horno suave.',
  faq:[
    ['¿Cuánto tiempo se hace un pacú a la parrilla?','Un pacú abierto de unos 3 kg tarda alrededor de 40 a 50 minutos a fuego medio suave, casi todo con la piel hacia las brasas. Uno relleno tarda más, porque el calor tiene que llegar al centro.'],
    ['¿El pacú se hace con escamas o sin escamas?','En esta receta se escama, porque la piel queda crocante y se come. Hay quienes lo asan con escamas para proteger la carne y después la separan de la piel; es otra técnica válida.'],
    ['¿Qué lleva el relleno del pacú?','Lo más común es un sofrito de cebolla, locote y tomate, con queso Paraguay, huevo duro y cebollita. Hay versiones con mandioca pisada o harina de mandioca tostada.'],
    ['¿Cómo se abre un pacú en mariposa?','Se corta a lo largo del lomo o de la panza, pegado al espinazo, hasta abrirlo como un libro en una sola pieza. Si no tenés práctica, pedíselo al pescadero.'],
    ['¿Hay que dar vuelta el pacú en la parrilla?','Abierto, casi no: se cocina con la piel abajo y, si tenés parrilla doble, se gira solo unos minutos al final. Relleno, sí, se cocina de los dos lados.'],
    ['¿Cuánto pacú necesito para seis personas?','Como estimación de la redacción, un pacú entero de unos 3 kg o dos de 1,5 kg, si es el plato principal.']
  ],
  related:['receta-surubi-a-la-parrilla','receta-dorado-al-horno','receta-pira-caldo','receta-sopa-paraguaya','receta-chipa'],
  guides:['guia-pacu','guia-pescados-de-rio','guia-mercado-de-abasto','coleccion-semana-santa'],
  cateringOccasion:'cumpleanos'
};
