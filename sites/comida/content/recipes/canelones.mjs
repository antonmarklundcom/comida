export default {
  id:'receta-canelones', slug:'canelones', kind:'recipe', order:25,
  published:true, indexable:true, updatedAt:'2026-09-24', verifiedAt:'2026-09-24',
  source:'Receta de la redacción de comida.com.py, basada en la preparación casera de canelones al horno',
  label:'Canelones',
  seoTitle:'Canelones de carne y de pollo: receta',
  meta:'Receta de canelones de carne con panqueques caseros, salsa blanca y salsa de tomate, más la versión de canelones de pollo. Para 2 a 12 personas.',
  h1:'Canelones de carne (y de pollo) con salsa blanca y tomate',
  cardText:'Panqueques rellenos de carne, gratinados con salsa blanca y salsa de tomate.',
  course:'Plato principal', cuisine:'Casera', category:['carne','horno','fiesta'],
  keywords:['canelones','canelones de carne','canelones de pollo','receta de canelones','canelones con salsa blanca','panqueques para canelones'],
  intro:[
    'Los canelones caseros son panqueques finos rellenos, enrollados y horneados bajo dos salsas: una de tomate por debajo y una salsa blanca por encima, con queso rallado para gratinar. Son el plato de domingo de muchas familias paraguayas y también un clásico de cumpleaños y de las cenas de fin de año, porque se arman con anticipación y se hornean justo antes de comer.',
    'Esta receta es para 6 porciones de tres canelones cada una, con relleno de carne molida. Más abajo tenés la versión de canelones de pollo, que usa la misma masa y las mismas salsas. Si los armás para una mesa de doce, elegí 12 porciones y se duplica todo.'
  ],
  times:{prep:60, cook:60, rest:10}, difficulty:'Media',
  yield:{mode:'porciones', base:6, options:[2,4,6,12], yieldText:'6 porciones (18 canelones)', note:'Tres canelones por persona como plato principal. En una fuente de unos 25 x 35 cm entran 18 canelones.'},
  ingredients:[
    {group:'Para los panqueques', items:[
      {q:250, u:'g', item:'harina de trigo 0000'},
      {q:3, u:'u', item:'huevos', one:'huevo'},
      {q:500, u:'ml', item:'leche'},
      {q:1, u:'pizca', item:'sal'},
      {q:30, u:'g', item:'manteca derretida', note:'y un poco más para la sartén'}
    ]},
    {group:'Para el relleno de carne', items:[
      {q:750, u:'g', item:'carne molida', note:'común o especial'},
      {q:1, u:'u', item:'cebolla grande', note:'picada fina'},
      {q:1, u:'u', item:'locote rojo', note:'picado fino'},
      {q:2, u:'diente', item:'ajo', note:'picados'},
      {q:2, u:'cda', item:'aceite'},
      {q:2, u:'u', item:'huevos duros', one:'huevo duro', note:'picados'},
      {q:50, u:'g', item:'queso rallado'},
      {q:1, u:'cdita', item:'orégano'},
      {q:null, item:'sal, pimienta y nuez moscada', note:'al gusto'}
    ]},
    {group:'Para la salsa de tomate', items:[
      {q:1, u:'u', item:'cebolla', note:'picada'},
      {q:1, u:'cda', item:'aceite'},
      {q:500, u:'ml', item:'puré de tomate'},
      {q:1, u:'hoja', item:'laurel'},
      {q:1, u:'cdita', item:'azúcar', note:'para cortar la acidez'}
    ]},
    {group:'Para la salsa blanca', items:[
      {q:50, u:'g', item:'manteca'},
      {q:50, u:'g', item:'harina de trigo'},
      {q:700, u:'ml', item:'leche', note:'tibia'},
      {q:1, u:'pizca', item:'nuez moscada'},
      {q:50, u:'g', item:'queso rallado', note:'para gratinar'}
    ]}
  ],
  steps:[
    {title:'Prepará la mezcla de panqueques', text:'Licuá la harina, los huevos, la leche, la sal y la manteca derretida hasta que no queden grumos. Dejá reposar la mezcla media hora en la heladera: la harina se hidrata y los panqueques salen más finos y elásticos, sin romperse al enrollar.', min:30},
    {title:'Hacé el relleno de carne', text:'Mientras reposa la mezcla, rehogá la cebolla y el locote en el aceite a fuego medio hasta que estén blandos. Sumá el ajo y la carne molida, subí el fuego y cociná desgranando con cuchara hasta que pierda el color rosado y se evapore el líquido. Condimentá con sal, pimienta, nuez moscada y orégano.', min:15},
    {title:'Terminá y enfriá el relleno', text:'Retirá del fuego, agregá los huevos duros picados y el queso rallado y mezclá. Dejalo entibiar. Un relleno seco y tibio se enrolla fácil; uno húmedo y caliente rompe los panqueques y moja la fuente.'},
    {title:'Cociná los panqueques', text:'Calentá una sartén antiadherente de unos 20 cm y pincelala con manteca. Echá un cucharón chico de mezcla, girá la sartén para cubrir el fondo con una capa fina y cociná hasta que los bordes se despeguen. Dalo vuelta unos segundos y apilá. Salen alrededor de 18.', min:20},
    {title:'Prepará la salsa de tomate', text:'Rehogá la cebolla en el aceite, sumá el puré de tomate, el laurel, el azúcar y medio vaso de agua. Cociná a fuego bajo, tapado a medias, hasta que tome sabor y espese un poco. Salá a gusto.', min:15},
    {title:'Hacé la salsa blanca', text:'Derretí la manteca en una olla, agregá la harina y revolvé un minuto sin que tome color. Sumá la leche tibia de a poco, batiendo con batidor de alambre, y cociná a fuego suave hasta que espese y cubra la cuchara. Condimentá con sal y nuez moscada.', min:8},
    {title:'Rellená y enrollá', text:'Encendé el horno a 180 °C. Poné dos cucharadas de relleno en el borde de cada panqueque, enrollalo y acomodalo en la fuente sobre una capa de salsa de tomate, con el cierre hacia abajo, uno pegado al otro.'},
    {title:'Cubrí y horneá', text:'Echá el resto de la salsa de tomate por encima, después la salsa blanca, cubriendo bien las puntas, y espolvoreá el queso rallado. Horneá hasta que burbujee en los bordes y la superficie esté dorada.', min:25},
    {title:'Dejá reposar antes de servir', text:'Sacá la fuente y esperá unos minutos antes de servir, así las salsas se asientan y los canelones salen enteros de la fuente.', min:10}
  ],
  tips:[
    'El primer panqueque casi siempre sale feo: sirve para ajustar el calor de la sartén y la cantidad de mezcla. No te preocupés.',
    'Si no tenés tiempo, reemplazá los panqueques por tapas de canelones o láminas de pasta fresca, que se consiguen refrigeradas.',
    'La salsa blanca tiene que quedar más fluida que para una lasaña: en el horno se espesa y, si arranca muy densa, los canelones quedan secos.',
    'Poné siempre salsa en el fondo de la fuente. Sin esa cama, los panqueques se pegan y se queman por abajo.',
    'Se pueden armar hasta el día anterior sin la salsa blanca. Guardalos tapados en la heladera y cubrilos recién al hornear, sumando 10 minutos de horno.'
  ],
  sections:[
    {title:'Canelones de pollo: la variante más pedida', paragraphs:['Para canelones de pollo, cociná 800 gramos de pechuga en agua con sal, cebolla y laurel durante unos 20 minutos, dejala enfriar y desmenuzala bien fina. Rehogá una cebolla y un locote, sumá el pollo, 100 ml de la salsa blanca, 50 gramos de queso rallado y condimentá con sal, pimienta y nuez moscada.','Lo demás se hace igual: los mismos panqueques, la misma cama de salsa de tomate y la salsa blanca por encima. Hay quien prefiere los canelones de pollo solo con salsa blanca, sin tomate, y gratinados con más queso: también es una opción muy rica y más suave.']},
    {title:'Canelones para una fiesta', paragraphs:['Para una cena de fin de año o un cumpleaños grande, armá los canelones en fuentes descartables de aluminio el día anterior y guardalos en la heladera. Así solo queda cubrir con la salsa blanca y hornear por tandas.','Como estimación editorial, calculá tres canelones por adulto si son el plato principal y dos si hay otros platos calientes en la mesa.']}
  ],
  variations:[
    ['Canelones de verdura','Reemplazá la carne por un atado grande de acelga o espinaca hervida, escurrida y picada, mezclada con ricota, queso rallado y un huevo.'],
    ['Carne con acelga','Sumá al relleno de carne medio atado de acelga hervida y bien escurrida. Rinde más y queda más húmedo.'],
    ['Con jamón y queso','Enrollá en cada panqueque una feta de jamón cocido y una de queso en fetas, y horneá con las mismas salsas. Es la versión más rápida.']
  ],
  storage:'Los canelones horneados se guardan tapados en la heladera hasta tres días. Para recalentar, cubrí la fuente con papel aluminio y horneá a 170 °C unos 20 minutos. También se congelan bien, armados y sin hornear, hasta dos meses: hornealos directamente congelados, tapados, sumando unos 20 minutos más.',
  faq:[
    ['¿Cómo se hacen los panqueques para canelones?','Con harina, huevos, leche, sal y un poco de manteca licuados. La mezcla descansa media hora y después se cocinan en sartén untada, en capa fina, un minuto por lado.'],
    ['¿Qué lleva el relleno de canelones de carne?','Carne molida rehogada con cebolla, locote y ajo, huevo duro picado, queso rallado y condimentos como orégano y nuez moscada.'],
    ['¿Cómo hacer canelones de pollo?','Con pechuga hervida y desmenuzada, cebolla y locote rehogados, un poco de salsa blanca y queso rallado. Se enrollan y hornean igual que los de carne.'],
    ['¿A qué temperatura se hornean los canelones?','A 180 °C durante unos 25 minutos, hasta que la salsa burbujee y el queso se dore. Si los horneás congelados, tapados y bastante más tiempo.'],
    ['¿Se pueden hacer canelones con tapas compradas?','Sí. Las tapas de canelones o la pasta fresca en láminas ahorran casi media hora. Si son secas, hervilas antes según indique el paquete.'],
    ['¿Cuántos canelones salen por persona?','Como referencia, tres canelones por adulto cuando son el plato principal. Para 12 personas, calculá unos 36.']
  ],
  related:['receta-lasana-de-carne','receta-salsa-bolonesa','receta-vitel-tone','receta-tarta-de-pollo','receta-strogonoff-de-pollo'],
  guides:['guia-cuanta-comida-por-persona'],
  cateringOccasion:'fin-de-ano'
};
