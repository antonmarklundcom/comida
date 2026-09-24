export default {
  id:'receta-pan-dulce', slug:'pan-dulce', kind:'recipe', image:48, order:41,
  published:true, indexable:true, updatedAt:'2026-09-24', verifiedAt:'2026-09-24',
  source:'Receta de la redacción de comida.com.py, basada en la preparación casera tradicional',
  label:'Pan dulce casero',
  seoTitle:'Pan dulce casero: receta navideña fácil',
  meta:'Pan dulce casero para Navidad con frutas abrillantadas y nueces: masa con esponja, dos leudados y horno justo. Fácil, económico y paso a paso.',
  h1:'Pan dulce casero: la receta navideña con frutas y nueces',
  cardText:'Dos panes dulces esponjosos, perfumados con naranja y cargados de frutas.',
  course:'Panificado', cuisine:'Casera', category:['dulce','horno','fiesta'],
  keywords:['pan dulce','pan dulce casero','pan dulce casero fácil y económico','pan dulce navideño','receta de pan dulce'],
  intro:[
    'El pan dulce es el panificado de la mesa de Nochebuena y Año Nuevo: una masa de levadura enriquecida con huevo, manteca y azúcar, perfumada con ralladura de naranja y vainilla, y cargada de frutas abrillantadas, pasas y nueces. Hecho en casa tiene una miga más húmeda y aromática que la mayoría de los que se compran, y llena la cocina de olor a fiesta.',
    'Esta receta rinde dos panes de unos 500 g, uno para tu mesa y otro para regalar. Pide tiempo de leudado, pero poco trabajo: la mayor parte de las horas la masa crece sola mientras hacés otra cosa.'
  ],
  times:{prep:45, cook:40, rest:180}, difficulty:'Media',
  yield:{mode:'porciones', base:12, options:[6,12,24], yieldText:'2 panes de unos 500 g, 12 porciones', note:'Con 6 porciones sale un solo pan de ½ kilo; con 24, cuatro panes. Los tiempos de horno son para panes de ½ kilo.'},
  ingredients:[
    {group:'Para la esponja', items:[
      {q:25, u:'g', item:'levadura fresca', note:'o 8 g de levadura seca'},
      {q:60, u:'ml', item:'leche tibia'},
      {q:1, u:'cda', item:'azúcar'},
      {q:2, u:'cda', item:'harina de trigo'}
    ]},
    {group:'Para la masa', items:[
      {q:500, u:'g', item:'harina de trigo 0000', note:'y un poco más para espolvorear'},
      {q:120, u:'g', item:'azúcar'},
      {q:2, u:'u', item:'huevos', one:'huevo'},
      {q:2, u:'u', item:'yemas', one:'yema'},
      {q:60, u:'ml', item:'leche', note:'tibia, la necesaria para unir'},
      {q:100, u:'g', item:'manteca', note:'blanda, a temperatura ambiente'},
      {q:1, u:'cda', item:'esencia de vainilla'},
      {q:1, u:'u', item:'naranjas', one:'naranja', note:'solo la ralladura'},
      {q:1, u:'u', item:'limones', one:'limón', note:'solo la ralladura'},
      {q:1, u:'cdita', item:'sal fina'}
    ]},
    {group:'Frutas y terminación', items:[
      {q:150, u:'g', item:'frutas abrillantadas', note:'picadas chicas'},
      {q:100, u:'g', item:'pasas de uva', note:'hidratadas en agua tibia y bien secas'},
      {q:100, u:'g', item:'nueces', note:'picadas grueso'},
      {q:20, u:'g', item:'manteca para la cruz'}
    ]}
  ],
  steps:[
    {title:'Activá la levadura', text:'En un bol chico, desarmá la levadura con la leche tibia, la cucharada de azúcar y las dos cucharadas de harina. Tapá y esperá hasta que se forme una espuma que duplique el volumen. Si no espumó, la levadura está vencida: conviene cambiarla antes de seguir.', min:15},
    {title:'Uní la masa', text:'En un bol grande, mezclá la harina con el azúcar y la sal. Hacé un hueco en el centro y poné la esponja, los huevos, las yemas, la vainilla y las ralladuras. Uní de a poco, sumando la leche de a chorritos hasta que la masa quede blanda y algo pegajosa.'},
    {title:'Amasá y sumá la manteca', text:'Amasá sobre la mesada unos 10 minutos, hasta que la masa esté lisa. Después agregá la manteca blanda en tres partes y seguí amasando hasta que desaparezca. Al principio parece que se arruina y se pone grasosa; seguí, porque se vuelve sedosa y elástica.', min:15},
    {title:'Primer leudado', text:'Poné la masa en un bol apenas enmantecado, tapala con film y dejala en un lugar tibio, lejos de corrientes de aire, hasta que duplique su volumen. Con calor de diciembre tarda menos; en un día fresco, puede llevar más de dos horas.', min:90},
    {title:'Incorporá las frutas', text:'Pasá las frutas abrillantadas, las pasas y las nueces por una cucharada de harina para que no se hundan. Desgasificá la masa con las manos, estirala en un rectángulo, esparcí las frutas encima y enrollala. Amasá apenas, lo justo para repartirlas.'},
    {title:'Formá y segundo leudado', text:'Dividí la masa en dos, formá dos bollos redondos tensando la superficie y ponelos en moldes de papel para pan dulce de ½ kilo, o en moldes altos enmantecados. Tapalos y esperá hasta que la masa llegue casi al borde del molde.', min:75},
    {title:'Marcá la cruz y horneá', text:'Con el horno a 170 °C, hacé un corte en cruz sobre cada pan con un cuchillo filoso y poné un trocito de manteca en el centro. Horneá en la parte media hasta que esté bien dorado y un palillo largo salga seco. Si se dora muy rápido, cubrilo con papel aluminio.', min:40},
    {title:'Enfriá antes de cortar', text:'Dejá enfriar los panes sobre una rejilla, sin sacarles el papel. Cortalo recién cuando esté frío del todo: tibio, la miga se aplasta. Si podés esperar al día siguiente, el perfume de las frutas se asienta y sabe mejor.', min:60}
  ],
  tips:[
    'Las frutas mojadas son la causa más común de un pan dulce pesado: secá bien las pasas después de hidratarlas y enharinalas junto con el resto.',
    'Un lugar tibio para leudar puede ser el horno apagado con la luz encendida, o al lado de una olla con agua caliente. Más de 35 °C debilita la levadura.',
    'Si la masa se pega mucho al amasar, aceitate un poco las manos antes de sumar más harina: el exceso de harina seca la miga.',
    'Para saber si está cocido por dentro, clavá un palillo largo de brochette en el centro. Tiene que salir seco, sin masa húmeda pegada.',
    'Para regalar, envolvelo frío en papel celofán con una cinta. Si lo envolvés tibio, transpira y el papel se humedece.'
  ],
  sections:[
    {title:'Pan dulce casero fácil y económico', paragraphs:[
      'Lo que más encarece un pan dulce son las nueces, las almendras y las frutas abrillantadas. Si buscás una versión más económica, reemplazá la mitad de las frutas por más pasas de uva, que rinden mucho, o por cáscara de naranja confitada en casa con azúcar y agua. También podés usar maní tostado sin sal en lugar de nueces.',
      'Otra forma de ahorrar es hacer la tanda doble: la levadura, la electricidad del horno y el tiempo de amasado se aprovechan mejor, y los panes se conservan bien una semana o se congelan. El resultado sigue siendo un pan dulce navideño de verdad, con miga tierna y perfume a naranja.'
    ]},
    {title:'En la mesa de fin de año', paragraphs:[
      'En Paraguay el pan dulce comparte la mesa de Nochebuena con la sidra, el clericó y turrones, casi siempre después de la cena y ya pasada la medianoche. Cortado en porciones finas va bien con un café o con una copa helada, y el que sobra es un desayuno perfecto al otro día, apenas tostado con manteca.'
    ]}
  ],
  variations:[
    ['Con chips de chocolate','Reemplazá las frutas abrillantadas por 150 g de chips de chocolate que resistan el horno. Es la versión que más les gusta a los chicos.'],
    ['Sin frutas abrillantadas','Usá 200 g de pasas y 100 g de nueces, más una cucharada extra de ralladura de naranja. Queda un pan dulce más sencillo y muy perfumado.'],
    ['Con glaseado','Mezclá 100 g de azúcar impalpable con jugo de limón hasta tener una pasta espesa y cubrí el pan frío. Terminá con cerezas o nueces por encima.']
  ],
  storage:'Guardalo envuelto en film o en una bolsa cerrada, a temperatura ambiente, hasta una semana. También se puede congelar entero o en porciones hasta dos meses; descongelalo envuelto para que no pierda humedad.',
  faq:[
    ['¿Cuánto tiempo lleva hacer pan dulce casero?','Entre cuatro y cinco horas en total, pero el trabajo activo es de menos de una hora. El resto es leudado y horno, cuando la masa trabaja sola.'],
    ['¿Se puede hacer pan dulce sin levadura?','Existe una versión rápida con polvo de hornear que queda más parecida a un budín. Para la miga esponjosa y hebrosa del pan dulce navideño hace falta levadura y leudado.'],
    ['¿Por qué las frutas se van al fondo del pan dulce?','Porque están húmedas o la masa quedó demasiado blanda. Secalas bien, pasalas por harina y sumalas recién después del primer leudado, cuando la masa ya tiene fuerza.'],
    ['¿Con cuánta anticipación puedo hacer el pan dulce para Navidad?','Hasta una semana antes si lo guardás bien envuelto, o más si lo congelás. Muchas familias lo hornean el fin de semana previo a Nochebuena.'],
    ['¿Qué molde uso si no tengo molde de papel?','Un molde de budín alto o una olla chica apta para horno, enmantecados y enharinados. Un molde bajo sirve, pero el pan crece a lo ancho y queda menos alto.'],
    ['¿A qué temperatura se hornea el pan dulce?','A 170 °C, en horno medio. A más temperatura se dora afuera antes de cocinarse en el centro; para un pan de 1 kilo, bajá a 160 °C y horneá más tiempo.']
  ],
  related:['receta-clerico','receta-bizcochuelo','receta-pan-casero','receta-vitel-tone'],
  guides:['guia-comida-tipica-paraguaya'],
  cateringOccasion:'fin-de-ano'
};
