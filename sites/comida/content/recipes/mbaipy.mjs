export default {
  id:'receta-mbaipy', slug:'mbaipy', kind:'recipe',
  published:true, indexable:true, updatedAt:'2026-09-24', verifiedAt:'2026-09-24',
  source:'Receta de la redacción de comida.com.py, basada en la preparación tradicional paraguaya',
  label:'Mbaipy',
  seoTitle:'Mbaipy: polenta paraguaya con pollo',
  meta:'Receta de mbaipy paraguayo: polenta cremosa de harina de maíz con caldo, pollo desmenuzado y queso Paraguay. Paso a paso, variante so\'o y consejos.',
  h1:'Mbaipy: la polenta paraguaya con pollo y queso',
  cardText:'Harina de maíz cocida en caldo, con pollo desmenuzado y queso Paraguay.',
  course:'Plato principal', cuisine:'Paraguaya', category:['paraguaya','pollo'],
  keywords:['mbaipy','mbaipy receta','mbaipy so\'o','mbaipy de pollo','mbaipy con queso'],
  intro:[
    'El mbaipy es la polenta paraguaya: harina de maíz cocida lentamente en caldo, con cebolla, locote y grasa, hasta formar una crema espesa que se termina con queso Paraguay. Se sirve en plato hondo, bien caliente, y suele llevar pollo o carne que lo convierten en comida completa. Es un plato de olla, barato y reconfortante, típico de las noches frescas.',
    'Esta versión lleva pollo hervido y desmenuzado, cuyo caldo se usa para cocinar la harina, y queso al final. Rinde seis platos. Más abajo están el mbaipy so\'o, con carne, y el mbaipy solo con queso, las otras dos formas que más se ven en las casas.'
  ],
  times:{prep:20, cook:70, rest:5}, difficulty:'Fácil',
  yield:{mode:'porciones', base:6, options:[2,4,6,12], yieldText:'6 platos', note:'Estimación de la redacción: un plato hondo por persona como comida principal.'},
  ingredients:[
    {group:'Para el pollo y el caldo', items:[
      {q:1, u:'kg', item:'presas de pollo', note:'muslos y contramuslos, con hueso'},
      {q:2, u:'l', item:'agua'},
      {q:1, u:'u', item:'zanahoria'},
      {q:1, u:'rama', item:'apio'},
      {q:1, u:'cdita', item:'sal fina'}
    ]},
    {group:'Para el mbaipy', items:[
      {q:3, u:'cda', item:'grasa de cerdo o aceite'},
      {q:2, u:'u', item:'cebollas medianas', one:'cebolla mediana', note:'picadas finas'},
      {q:1, u:'u', item:'locote rojo', note:'picado fino'},
      {q:2, u:'u', item:'tomates', one:'tomate', note:'pelados y picados'},
      {q:300, u:'g', item:'harina de maíz', note:'fina o mediana'},
      {q:250, u:'ml', item:'leche'},
      {q:250, u:'g', item:'queso Paraguay', note:'en cubitos o desmenuzado'},
      {q:0.5, u:'atado', item:'cebollita de hoja', note:'picada'},
      {q:null, item:'pimienta', note:'al gusto'}
    ]}
  ],
  steps:[
    {title:'Hacé el caldo con el pollo', text:'Poné las presas en una olla con el agua, la zanahoria, el apio y la sal. Llevá a hervor, espumá y cociná a fuego suave hasta que la carne se separe fácil del hueso.', min:40},
    {title:'Desmenuzá y colá', text:'Sacá las presas, dejalas entibiar y desmenuzá la carne sin piel ni huesos. Colá el caldo: vas a necesitar un litro y medio. Si te falta, completá con agua caliente.'},
    {title:'Prepará el sofrito', text:'En una olla grande de fondo grueso, calentá la grasa y rehogá la cebolla y el locote a fuego medio hasta que estén blandos. Sumá el tomate y cociná hasta que se deshaga y el sofrito se vea brillante.', min:10},
    {title:'Sumá el caldo y la harina', text:'Agregá el caldo caliente al sofrito y llevá a hervor. Bajá el fuego y echá la harina de maíz en forma de lluvia, revolviendo sin parar con batidor o cuchara de madera para que no se formen grumos.'},
    {title:'Cociná revolviendo', text:'Cociná a fuego bajo, revolviendo seguido y raspando el fondo, hasta que la harina esté cocida y la preparación espese como una crema que cae pesada de la cuchara. Si se pone demasiado firme, agregá un poco de leche.', min:20},
    {title:'Incorporá el pollo y la leche', text:'Sumá el pollo desmenuzado y la leche, revolvé y dejá que vuelva a burbujear un par de minutos. Probá de sal y agregá pimienta a gusto.'},
    {title:'Terminá con el queso', text:'Apagá el fuego, agregá el queso Paraguay y la cebollita de hoja, y revolvé para que el queso empiece a fundirse. Tapá la olla y esperá unos minutos antes de servir en platos hondos.', min:5}
  ],
  tips:[
    'Echá la harina siempre sobre líquido caliente y en lluvia fina. Si la volcás de golpe, se forman grumos que después no se deshacen.',
    'La harina de maíz mediana da un mbaipy con más textura; la fina, uno más liso y cremoso. Las dos funcionan.',
    'El mbaipy espesa mucho al enfriarse. Servilo apenas esté hecho o dejalo un poco más flojo si va a esperar.',
    'Una olla de fondo grueso evita que se pegue. Si igual se pega, no raspes el fondo quemado: pasá el resto a otra olla.',
    'Guardá un poco de caldo caliente aparte para ajustar la textura al final.'
  ],
  sections:[
    {title:'Mbaipy so\'o, mbaipy de pollo y mbaipy solo', paragraphs:['Mbaipy es el nombre guaraní de la preparación de harina de maíz cocida, y lo que se le agrega le da el apellido. El mbaipy so\'o lleva carne vacuna, en trozos chicos o molida, dorada en el sofrito antes de sumar el caldo. El de pollo, como esta receta, usa la carne desmenuzada y su propio caldo. Y el más sencillo lleva solo queso Paraguay y leche, sin carne.','También existe una versión dulce, cocida en leche con azúcar o miel, que en algunas casas se come de postre o de merienda. Las proporciones cambian según la familia; la constante es la harina de maíz cocida despacio hasta quedar cremosa.']},
    {title:'Con qué acompañar el mbaipy', paragraphs:['Al ser un plato completo, no necesita mucho más. Una ensalada fresca de tomate y cebolla o de repollo equilibra la cremosidad, y un poco de queso rallado por encima al servir suma sabor. Si sobra, al día siguiente se corta en bloques firmes que se doran en sartén con un poco de grasa.']}
  ],
  variations:[
    ['Mbaipy so\'o','Reemplazá el pollo por 500 g de carne vacuna en cubos chicos o molida, dorada en el sofrito antes del tomate. Usá caldo de carne o agua caliente con sal.'],
    ['Mbaipy solo con queso','Sin carne: cociná la harina en partes iguales de agua y leche, y duplicá el queso Paraguay. Es la versión más rápida y la más económica.'],
    ['Mbaipy dorado en sartén','Volcá el mbaipy que sobró en una fuente, dejalo enfriar en la heladera y cortalo en rectángulos. Doralos en sartén de los dos lados y servilos como acompañamiento.']
  ],
  storage:'Guardalo tapado en la heladera hasta tres días. Al enfriarse se vuelve firme: para recuperarlo cremoso, calentalo en olla con caldo o leche, revolviendo; o aprovechá esa firmeza para cortarlo y dorarlo. No conviene congelarlo con el queso.',
  faq:[
    ['¿Qué es el mbaipy?','Es una polenta paraguaya de harina de maíz cocida en caldo o leche, con sofrito de cebolla y locote, y terminada con queso Paraguay. Muchas veces lleva pollo o carne.'],
    ['¿Qué es el mbaipy so\'o?','Es el mbaipy con carne vacuna. So\'o significa carne en guaraní; la carne se dora con el sofrito antes de sumar el caldo y la harina.'],
    ['¿Qué harina se usa para el mbaipy?','Harina de maíz fina o mediana, la misma de la sopa paraguaya. La polenta instantánea también sirve, pero se cocina en menos tiempo y cambia la textura.'],
    ['¿Cuánta harina de maíz lleva el mbaipy por litro de caldo?','Esta receta usa 300 g de harina para un litro y medio de caldo más un vaso de leche. Con menos harina queda más líquido; con más, se vuelve firme como para cortar.'],
    ['¿Mbaipy y kiveve son lo mismo?','No. Los dos llevan harina de maíz y queso, pero el kiveve es un puré de zapallo andai, anaranjado y algo dulce, y el mbaipy es una polenta salada, con caldo y a menudo con carne.']
  ],
  related:['receta-kiveve','receta-vori-vori','receta-locro-paraguayo','receta-caldo-de-pollo','receta-sopa-paraguaya'],
  guides:['guia-queso-paraguay','guia-que-cocinar-hoy','guia-comida-tipica-paraguaya']
};
