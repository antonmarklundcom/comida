export default {
  id:'receta-soo-josopy', slug:'soo-josopy', kind:'recipe',
  published:true, indexable:true, updatedAt:'2026-09-24', verifiedAt:'2026-09-24',
  source:'Receta de la redacción de comida.com.py, basada en la preparación tradicional paraguaya',
  label:"So'o josopy",
  seoTitle:"So'o josopy: receta de sopa de carne molida",
  meta:"Receta de so'o josopy, la sopa paraguaya de carne molida con arroz y verduras. El truco de disolver la carne en agua fría para un caldo espeso y parejo.",
  h1:"So'o josopy: la sopa paraguaya de carne molida",
  cardText:'Carne molida desleída en agua fría y cocida con arroz hasta un caldo espeso.',
  course:'Sopa', cuisine:'Paraguaya', category:['paraguaya','carne'],
  keywords:["so'o josopy",'so o josopy','soo josopy','sopa de carne molida paraguaya',"receta de so'o josopy",'josopy'],
  intro:[
    "El so'o josopy es una sopa espesa de carne vacuna molida muy fina, cocida con cebolla, locote, tomate y arroz. En guaraní, so'o significa carne, y josopy se entiende como machacado o molido: el nombre recuerda que antes la carne se golpeaba en el mortero hasta quedar casi en pasta. El resultado es un caldo cremoso donde la carne no forma bolitas, sino que se reparte en granos finísimos.",
    'Es un plato de invierno, de convalecencia y de almuerzo familiar, y tiene un truco que lo define: la carne se deslíe en agua fría antes de ir al fuego. Esta receta es para 6 platos hondos; se prepara en poco más de una hora.'
  ],
  times:{prep:20, cook:45, rest:5}, difficulty:'Fácil',
  yield:{mode:'porciones', base:6, options:[2,4,6,12], yieldText:'6 porciones', note:'Porciones de plato hondo como plato único. Como entrada, la misma olla alcanza para 8 o 10 personas.'},
  ingredients:[
    {group:'Para la base', items:[
      {q:600, u:'g', item:'carne vacuna magra molida', note:'pedí que la muelan dos veces, bien fina'},
      {q:2, u:'l', item:'agua fría'},
      {q:1, u:'cdita', item:'sal gruesa', note:'se ajusta al final'}
    ]},
    {group:'Para el sofrito', items:[
      {q:3, u:'cda', item:'aceite'},
      {q:2, u:'u', item:'cebollas medianas', one:'cebolla mediana', note:'picadas finas'},
      {q:1, u:'u', item:'locote', note:'rojo o verde, picado fino'},
      {q:2, u:'diente', item:'ajo', note:'picado'},
      {q:2, u:'u', item:'tomates', one:'tomate', note:'rallados, sin piel'}
    ]},
    {group:'Para terminar', items:[
      {q:100, u:'g', item:'arroz', note:'de grano corto o largo'},
      {q:1, u:'cdita', item:'orégano seco'},
      {q:1, u:'atado', item:'cebollita de hoja', note:'picada'},
      {q:null, item:'perejil picado', note:'al gusto'},
      {q:null, item:'queso Paraguay rallado', note:'al gusto, para servir'}
    ]}
  ],
  steps:[
    {title:'Desleí la carne en agua fría', text:'Poné la carne molida en la olla, todavía fuera del fuego, y agregá el agua fría de a poco mientras la deshacés con un batidor de alambre o con los dedos. Tiene que quedar un líquido turbio y parejo, sin ningún grumo de carne.'},
    {title:'Llevá a hervor revolviendo', text:'Poné la olla a fuego medio y revolvé casi sin parar con cuchara de madera hasta que rompa el hervor. Si dejás de revolver mientras se calienta, la proteína cuaja en bolitas; así, en cambio, la carne queda en granos finos.', min:12},
    {title:'Espumá y bajá el fuego', text:'Cuando hierva, retirá con una espumadera la espuma gris que sube a la superficie. Bajá el fuego al mínimo y dejá que la carne se cocine despacio mientras preparás el sofrito.', min:10},
    {title:'Prepará el sofrito', text:'En una sartén con el aceite, rehogá la cebolla, el locote y el ajo a fuego medio hasta que estén tiernos y transparentes. Agregá el tomate rallado y cociná hasta que se reduzca y pierda el gusto ácido.', min:10},
    {title:'Sumá el sofrito y el arroz', text:'Volcá el sofrito en la olla junto con el arroz lavado, el orégano y la sal. Revolvé bien y cociná a fuego suave, destapado, hasta que el arroz esté tierno y empiece a espesar el caldo.', min:20},
    {title:'Revisá la textura', text:'El so\'o josopy tiene que quedar espeso, con cuerpo, pero todavía líquido para tomar con cuchara. Si se espesa demasiado, agregá agua caliente; si está muy ralo, dejalo unos minutos más destapado.'},
    {title:'Terminá con el verde', text:'Apagá el fuego, sumá la cebollita de hoja y el perejil, y probá la sal. Tapá la olla y dejala reposar para que el verde perfume la sopa sin perder su color.', min:5},
    {title:'Serví bien caliente', text:'Serví en platos hondos con queso Paraguay rallado por encima. Acompañalo con sopa paraguaya, chipa o una rodaja de mandioca hervida, como se hace en muchas mesas.'}
  ],
  tips:[
    'La carne tiene que ser magra. La grasa sube a la superficie y deja el caldo pesado; si tu carne es grasosa, retirá la capa amarilla con una cuchara antes de sumar el sofrito.',
    'Molida dos veces es mejor que una: cuanto más fina la carne, más cremoso y sedoso el caldo final.',
    'No saltees el paso del agua fría. Si echás la carne en agua caliente, se forman grumos que ya no se desarman.',
    'El arroz puede reemplazarse por fideos cabello de ángel o por fideos cortos; sumalos en los últimos diez minutos.',
    'Un huevo batido agregado al final, revolviendo, le da más cuerpo y es un recurso habitual cuando la sopa es para alguien que se está recuperando.'
  ],
  sections:[
    {title:'Una sopa de mortero', paragraphs:["Según se cuenta en muchas familias, el so'o josopy nació como una forma de aprovechar carne dura: al golpearla en el angu'a, el mortero de madera, quedaba tan fina que se cocinaba rápido y se podía comer sin masticar mucho. Es un relato transmitido de boca en boca y no hay un registro que lo confirme, pero explica la costumbre de servirlo a enfermos, a niños y a personas mayores.",'Hoy la picadora eléctrica reemplazó al mortero y el plato se prepara en minutos. Lo que no cambió es la lógica: carne muy fina, cocción lenta y un caldo espeso que reconforta en los días fríos.']},
    {title:'Con arroz, con fideos o solo', paragraphs:["La versión con arroz es la más común y la que da un caldo más espeso. Con fideos finos resulta más liviana y rápida. También existe una forma más antigua, sin ningún cereal, donde el espesor lo da solo la carne muy molida: queda como un puré ligero, muy delicado.","Para una comida completa, muchas casas lo sirven con sopa paraguaya al lado o con un plato de mandioca. Como entrada, basta un plato chico antes de un asado o de un guiso."]}
  ],
  variations:[
    ["So'o josopy con fideos",'Reemplazá el arroz por 120 g de fideos cabello de ángel partidos y agregalos en los últimos 8 minutos. Queda más fluido y se sirve enseguida.'],
    ['Con verduras extra','Sumá una zanahoria rallada y un trozo de zapallo en cubitos junto con el arroz. El zapallo se deshace y espesa el caldo naturalmente.'],
    ['Versión sin cereal','Omití el arroz y reducí el agua a 1,5 litros. El caldo queda más fino y la carne se lleva todo el protagonismo.']
  ],
  storage:'Guardalo tapado en la heladera hasta tres días. Al enfriarse espesa y el arroz sigue absorbiendo líquido: recalentalo a fuego bajo agregando agua o caldo caliente y revolviendo. Se puede congelar sin el verde, hasta dos meses.',
  faq:[
    ["¿Qué significa so'o josopy?","En guaraní, so'o es carne y josopy se relaciona con machacado o molido. El nombre describe la carne muy fina, antes golpeada en mortero, que se cocina en caldo."],
    ["¿Por qué la carne del so'o josopy se hace bolitas?",'Porque se agregó al agua caliente o no se revolvió mientras se calentaba. Desleí la carne en agua fría y revolvé sin parar hasta que hierva: así queda en granos finos.'],
    ["¿Qué carne se usa para el so'o josopy?",'Carne vacuna magra, como nalga, cuadrada o paleta, molida dos veces. Evitá la carne molida común con mucha grasa, que deja el caldo pesado.'],
    ["¿El so'o josopy lleva arroz o fideos?",'La versión más habitual lleva arroz, pero con fideos finos también es tradicional. Hay recetas antiguas que no llevan ninguno de los dos.'],
    ["¿Se puede dar so'o josopy a los niños?",'Sí, es una de las sopas que más se preparan para chicos por su textura suave. Para los más pequeños, reducí la sal y omití el orégano.'],
    ["¿Con qué se acompaña el so'o josopy?",'Con sopa paraguaya, chipa, mandioca hervida o simplemente con pan. Queso Paraguay rallado por encima es el toque más común.']
  ],
  related:['receta-vori-vori','receta-sopa-paraguaya','receta-jopara','receta-caldo-de-pollo','receta-locro-paraguayo'],
  guides:['guia-comida-tipica-paraguaya','guia-que-cocinar-hoy']
};
