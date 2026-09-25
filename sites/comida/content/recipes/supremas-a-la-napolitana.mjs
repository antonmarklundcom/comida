// Recipe module: supremas a la napolitana (suprema de pollo rebozada y gratinada). Shape: sites/comida/content/recipes/sopa-paraguaya.mjs
export default {
  id:'receta-supremas-a-la-napolitana', slug:'supremas-a-la-napolitana', kind:'recipe',
  published:true, indexable:true, updatedAt:'2026-09-24', verifiedAt:'2026-09-24',
  source:'Receta de la redacción de comida.com.py, basada en la cocina casera de Paraguay y el Río de la Plata',
  label:'Supremas a la napolitana',
  seoTitle:'Supremas napolitanas: receta al horno',
  meta:'Supremas napolitanas de pollo: rebozadas, doradas en sartén, cocidas al horno hasta 74 °C y gratinadas con salsa, jamón y queso. Crocantes y jugosas.',
  h1:'Supremas a la napolitana, doradas y gratinadas',
  cardText:'Supremas de pollo rebozadas con salsa de tomate, jamón y queso gratinado.',
  course:'Plato principal', cuisine:'Casera', category:['pollo','horno'],
  keywords:['supremas napolitanas','suprema napolitana','suprema a la napolitana','suprema de pollo napolitana','supremas de pollo al horno'],
  intro:[
    'La suprema a la napolitana es la versión de pollo del clásico de bodegón: una suprema rebozada y crocante que se cubre con salsa de tomate, jamón y queso y vuelve al horno para gratinar. A diferencia de la milanesa de carne vacuna, que se fríe en un par de minutos, la suprema es más gruesa y tiene que cocinarse por completo antes de cubrirla. Esta receta resuelve ese problema en tres tiempos: sartén para el color, horno para cocinar el centro y un gratinado final muy corto.',
    'Se calcula una suprema entera por persona, abierta en dos filetes si es muy gruesa. Así el rebozado queda dorado, el pollo llega a su temperatura segura sin secarse y el queso se funde justo cuando todo está listo.'
  ],
  times:{prep:40, cook:35, rest:15}, difficulty:'Media',
  yield:{mode:'porciones', base:6, options:[2,4,6,12], yieldText:'6 porciones', note:'Una suprema de unos 200 g por persona. Para 12 horneá en dos asaderas sobre rejilla, en dos estantes.'},
  ingredients:[
    {group:'Para las supremas', items:[
      {q:6, u:'u', item:'supremas de pollo', one:'suprema de pollo', note:'de unos 200 g, sin el filet'},
      {q:3, u:'u', item:'huevos', one:'huevo'},
      {q:1, u:'cdita', item:'sal fina'},
      {q:1, u:'cdita', item:'mostaza'},
      {q:1, u:'diente', item:'ajo', note:'rallado'},
      {q:50, u:'g', item:'harina de trigo'},
      {q:300, u:'g', item:'pan rallado'},
      {q:2, u:'cda', item:'queso rallado', note:'mezclado con el pan'},
      {q:200, u:'ml', item:'aceite', note:'para dorar en sartén'}
    ]},
    {group:'Para la salsa rápida', items:[
      {q:400, u:'g', item:'tomate triturado'},
      {q:1, u:'diente', item:'ajo', note:'laminado'},
      {q:1, u:'cda', item:'aceite de oliva o común'},
      {q:1, u:'cdita', item:'orégano seco'},
      {q:null, item:'sal y una pizca de azúcar', note:'al gusto'}
    ]},
    {group:'Para gratinar', items:[
      {q:6, u:'feta', item:'jamón cocido'},
      {q:300, u:'g', item:'mozzarella', note:'en fetas'},
      {q:null, item:'albahaca fresca u orégano', note:'al gusto, para terminar'}
    ]}
  ],
  steps:[
    {title:'Emparejá las supremas', text:'Retirá el filet de abajo de cada suprema y guardalo para otra comida. Si la pieza pasa de dos centímetros en la parte gruesa, abrila en dos filetes con un corte horizontal, o golpeala entre dos hojas de film hasta dejarla pareja. Un grosor uniforme es lo que permite que el rebozado y el centro terminen juntos.'},
    {title:'Prepará la salsa', text:'En una sartén chica dorá apenas el ajo laminado en el aceite, sumá el tomate triturado, el orégano, sal y la pizca de azúcar, y cociná destapado a fuego bajo hasta que la cuchara deje un surco que tarda en cerrarse.', min:15},
    {title:'Armá la línea de rebozado', text:'Poné la harina en un plato, los huevos batidos con la sal, la mostaza y el ajo en otro, y el pan rallado mezclado con el queso rallado en un tercero. La harina primero seca la superficie del pollo y hace que el huevo se agarre parejo.'},
    {title:'Rebozá y dejá asentar', text:'Pasá cada suprema por harina, sacudí el exceso, después por huevo y por último por pan, apretando con la palma. Dejalas sobre una bandeja en la heladera un rato: el rebozado se asienta y no se despega en la sartén.', min:15},
    {title:'Dorá sin cocinar del todo', text:'Precalentá el horno a 200 °C. Calentá el aceite en una sartén amplia a fuego medio y dorá las supremas de a dos o tres, unos dos minutos por lado, solo hasta que el pan esté dorado claro. Pasalas a una rejilla apoyada sobre una asadera.', min:4},
    {title:'Terminá la cocción en el horno', text:'Llevá la asadera con la rejilla al horno. El aire caliente circula por abajo, así la base no se humedece mientras el centro se cocina. Las supremas están listas cuando la parte más gruesa llega a 74 °C o, sin termómetro, cuando al cortarlas la carne está blanca en el medio.', min:14},
    {title:'Cubrí y gratiná', text:'Sacá la asadera y subí el horno al máximo o encendé el grill. Sobre cada suprema poné dos cucharadas de salsa sin llegar al borde, una feta de jamón y la mozzarella. Volvé a la parte alta del horno solo hasta que el queso se derrita y tome color.', min:5},
    {title:'Serví recién salidas', text:'Terminá con hojas de albahaca u orégano y llevá a la mesa enseguida, con papas fritas, puré o una ensalada fresca. Cuanto antes se coman, más crocante está el borde.'}
  ],
  tips:[
    'La harina antes del huevo marca la diferencia en el pollo, que es más húmedo que la carne vacuna. Sin ese paso, el rebozado tiende a soltarse en placas.',
    'El queso rallado mezclado con el pan rallado dora más rápido y suma sabor. Si tu horno es muy fuerte, reducilo a una cucharada.',
    'No cortes las supremas en la sartén para ver si están cocidas: el horno termina el trabajo. La sartén es solo para el color.',
    'Si preparás muchas, podés dorarlas una hora antes y dejarlas en la rejilla; entran al horno con unos minutos más para el tramo de cocción.',
    'El jamón y el queso ya son salados: probá la salsa antes de salarla de más.'
  ],
  sections:[
    {title:'Suprema napolitana y milanesa napolitana: la diferencia', paragraphs:[
      'La milanesa napolitana clásica es de carne vacuna fina, que se fríe en pocos minutos y solo necesita un paso rápido de horno para el queso. La suprema es una pieza de pollo más gruesa y húmeda, y el pollo no admite quedar a medio cocer: tiene que llegar a 74 °C en el centro. Por eso esta receta separa el dorado de la cocción, en lugar de freír hasta el final y arriesgarse a un rebozado quemado con el centro crudo.',
      'Si preferís el método de la milanesa de carne con toda la explicación del empanado, está en la receta de milanesa napolitana; y si buscás la suprema con relleno de jamón y queso por dentro, en la de suprema rellena.'
    ]},
    {title:'Para una mesa grande', paragraphs:[
      'Las supremas napolitanas funcionan para un almuerzo familiar o un cumpleaños porque casi todo el trabajo se adelanta: la salsa se hace el día anterior, el rebozado a la mañana y el dorado una hora antes. Al final solo quedan el horno y el gratinado, que se hacen en tandas sin que nadie espere demasiado.'
    ]}
  ],
  variations:[
    ['Totalmente al horno','Sin sartén: rociá las supremas rebozadas con aceite en aerosol o un hilo de aceite y hornealas a 210 °C sobre rejilla unos 20 minutos, dándolas vuelta a mitad. Después cubrí y gratiná igual.'],
    ['En freidora de aire','Cociná las supremas rebozadas y rociadas con aceite a 190 °C unos 12 a 15 minutos, dándolas vuelta a mitad, hasta 74 °C. Cubrilas y volvé a la freidora dos o tres minutos para fundir el queso.'],
    ['Con queso Paraguay y tomate','Reemplazá la mozzarella por fetas finas de queso Paraguay y sumá rodajas de tomate fresco sobre la salsa. Queda más firme y con sabor local.']
  ],
  storage:'Guardalas en la heladera, tapadas, hasta dos días. Recalentalas en horno a 200 °C sobre rejilla unos diez minutos para recuperar algo del crocante. Las supremas rebozadas y crudas se congelan separadas con papel hasta tres meses; se cocinan sin descongelar, con unos minutos más de horno.',
  faq:[
    ['¿Qué lleva la suprema napolitana?','Una suprema de pollo rebozada con huevo y pan rallado, cubierta con salsa de tomate, jamón cocido y mozzarella, gratinada al horno.'],
    ['¿Cuánto tiempo va la suprema napolitana al horno?','Unos 14 minutos a 200 °C después de dorarla en sartén, hasta que llegue a 74 °C, y otros 4 a 6 minutos con la cobertura para gratinar.'],
    ['¿Cómo sé si la suprema está cocida por dentro?','La parte más gruesa tiene que marcar 74 °C con termómetro. Sin termómetro, cortala: la carne debe verse blanca y sin brillo rosado, y el jugo salir transparente.'],
    ['¿Por qué se despega el rebozado de la suprema?','Por humedad. Pasala primero por harina, después por huevo y pan, presioná bien y dejala reposar en la heladera antes de dorarla.'],
    ['¿Se pueden hacer supremas napolitanas sin freír?','Sí. Rociadas con aceite y horneadas sobre rejilla a 210 °C unos 20 minutos, dándolas vuelta a mitad, quedan doradas y listas para cubrir.'],
    ['¿Con qué se acompañan las supremas napolitanas?','Lo más clásico es con papas fritas o puré. También van bien con arroz blanco, papas al horno o una ensalada de lechuga y tomate.']
  ],
  related:['receta-suprema-de-pollo-rellena','receta-milanesa-napolitana','receta-milanesas','receta-pechuga-de-pollo','receta-papas-al-horno','receta-alitas-de-pollo-al-horno'],
  guides:['guia-cortes-de-pollo','guia-cuanta-comida-por-persona'],
  cateringOccasion:'cumpleanos'
};
