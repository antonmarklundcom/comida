// Recipe module: panceta crocante al horno o a la parrilla. Companion of corte-panceta. Shape: sites/comida/content/recipes/sopa-paraguaya.mjs
export default {
  id:'receta-panceta-crocante', slug:'panceta-crocante', kind:'recipe',
  published:true, indexable:true, updatedAt:'2026-09-24', verifiedAt:'2026-09-24',
  source:'Receta de la redacción de comida.com.py, basada en la cocina casera de Paraguay y el Río de la Plata',
  label:'Panceta crocante',
  seoTitle:'Panceta crocante al horno o a la parrilla',
  meta:'Panceta de cerdo crocante al horno con cuero que cruje, o en tiras a la parrilla. Temperaturas, tiempos, cómo secar el cuero y con qué servirla.',
  h1:'Panceta crocante al horno o a la parrilla',
  cardText:'Panceta de cerdo tierna por dentro, con el cuero bien crocante arriba.',
  course:'Plato principal', cuisine:'Casera', category:['carne','horno','fiesta'],
  keywords:['panceta','panceta crocante','panceta de cerdo','panceta al horno','panceta a la parrilla','panceta de cerdo al horno'],

  image:66,
  intro:[
    'La panceta es la panza del cerdo: capas alternadas de carne y grasa, casi siempre con el cuero de un lado. Bien cocinada es una de las piezas más sabrosas del animal, porque la grasa se derrite despacio, humedece la carne y deja arriba una corteza que cruje. Esta receta tiene dos caminos: en el horno, en una pieza entera con el cuero inflado, o en tiras sobre la parrilla para compartir en el asado.',
    'El secreto en los dos casos es el mismo: un cuero seco, sal, calor moderado primero para derretir la grasa y un golpe de calor fuerte al final. Con 1,8 kilos de panceta cruda comen 6 personas como plato principal; si va de entrada junto con otras carnes, rinde para bastantes más.'
  ],
  times:{prep:20, cook:130, rest:10}, difficulty:'Media',
  yield:{mode:'porciones', base:6, options:[2,4,6,12], yieldText:'6 porciones', note:'Unos 300 g de panceta cruda con cuero por persona como plato principal; pierde cerca de un tercio del peso en grasa derretida.'},
  ingredients:[
    {group:'Para la panceta', items:[
      {q:1.8, u:'kg', item:'panceta de cerdo con cuero', note:'en una pieza, de 4 a 5 cm de alto'},
      {q:2, u:'cda', item:'sal gruesa', note:'para el cuero'},
      {q:2, u:'cdita', item:'sal fina', note:'para la carne'}
    ]},
    {group:'Para condimentar la carne', items:[
      {q:4, u:'diente', item:'ajo', note:'machacados'},
      {q:1, u:'cdita', item:'pimentón dulce'},
      {q:1, u:'cdita', item:'comino molido'},
      {q:1, u:'cdita', item:'orégano seco'},
      {q:1, u:'cda', item:'jugo de limón'},
      {q:null, item:'pimienta negra molida', note:'al gusto'}
    ]},
    {group:'Para servir', items:[
      {q:2, u:'u', item:'limones', one:'limón', note:'en gajos'},
      {q:null, item:'chimichurri o salsa criolla', note:'al gusto'}
    ]}
  ],
  steps:[
    {title:'Marcá el cuero', text:'Con un cuchillo muy filoso o un cúter limpio, hacé cortes paralelos en el cuero cada centímetro, atravesando la piel y un poco de la grasa pero sin llegar a la carne. Si el carnicero te la da ya marcada, revisá que los cortes estén completos.'},
    {title:'Condimentá solo la carne', text:'Mezclá el ajo, el pimentón, el comino, el orégano, el limón, la sal fina y la pimienta. Da vuelta la pieza y frotá esa pasta por la parte de abajo y por los costados, cuidando que no toque el cuero: la humedad del adobo impide que después se infle.'},
    {title:'Secá el cuero en la heladera', text:'Poné la panceta con el cuero hacia arriba sobre una rejilla o un plato, secá el cuero con papel de cocina y frotalo con la sal gruesa. Dejala destapada en la heladera por lo menos una hora; de un día para otro es todavía mejor, porque el cuero se seca como un cartón.', min:60},
    {title:'Horneá despacio', text:'Precalentá el horno a 160 °C. Retirá la sal gruesa que quedó suelta, secá otra vez el cuero y apoyá la panceta sobre una rejilla dentro de una asadera, con el cuero hacia arriba y bien horizontal. Si queda inclinada, calzala con un bollo de papel aluminio.', min:90},
    {title:'Comprobá la carne', text:'Después de ese tramo la grasa del medio tiene que verse translúcida y un cuchillo debe entrar en la carne sin resistencia. El cerdo está seguro desde los 63 °C con reposo, pero la panceta queda tierna recién por encima de los 80 °C, cuando las capas de grasa se ablandan.'},
    {title:'Inflá el cuero con calor fuerte', text:'Subí el horno a la máxima temperatura, unos 230 a 250 °C, y seguí horneando. El cuero se va a llenar de burbujas y a crujir; mirá por el vidrio y girá la asadera si una punta se infla antes que la otra.', min:30},
    {title:'Dejá reposar y cortá', text:'Sacala a una tabla y esperá diez minutos. Cortala con el cuero hacia abajo, con un cuchillo de sierra o un cuchillo grande apoyando todo el peso: así el cuchillo atraviesa el crocante sin aplastar la carne.', min:10},
    {title:'Serví enseguida', text:'Serví las porciones con gajos de limón y una salsa ácida al lado, que equilibra la grasa. El cuero se mantiene crocante unos veinte minutos; después, con el vapor de la carne, se va ablandando.'}
  ],
  tips:[
    'La causa más común de un cuero que no cruje es la humedad. Secá, salá y dejá la pieza destapada en la heladera; es un paso que no conviene saltear.',
    'Elegí una panceta de espesor parejo y con buena proporción de carne. Si la grasa supera la mitad del alto, el resultado es muy pesado.',
    'No agregues agua en la asadera: el vapor ablanda el cuero. La grasa que cae es suficiente y además sirve para dorar papas o mandioca.',
    'Si el cuero se infla en unas partes y en otras no, cubrí las que ya están listas con un pedacito de papel aluminio y seguí unos minutos.',
    'Para tiras en la parrilla pedí la panceta sin cuero o con el cuero fino, cortada en bifes de 1,5 a 2 cm.'
  ],
  sections:[
    {title:'Panceta a la parrilla, en tiras', paragraphs:[
      'En el asado paraguayo la panceta en tiras aparece como achura o entrada. Condimentá los bifes solo con sal fina, apoyalos sobre una parrilla con brasa media y bien separada de las carnes grandes, porque la grasa que gotea levanta llama. Dalos vuelta cada tanto y dejalos entre 25 y 35 minutos, hasta que estén dorados, con los bordes tostados y la grasa translúcida.',
      'Si levanta llama, corré las tiras a un costado sin brasa unos minutos; nunca apagues el fuego con agua, que levanta ceniza sobre la carne. Serví las tiras cortadas en trocitos sobre una tabla, con limón, antes de que salgan las carnes principales.'
    ]},
    {title:'¿Bacon y panceta son lo mismo?', paragraphs:[
      'El bacon que se compra en fetas es panceta de cerdo curada y, casi siempre, ahumada. Esta receta usa panceta fresca, que no está curada: no se come cruda, tiene mucho menos sal y necesita cocción completa. La panceta ahumada que venden en pieza sirve para guisos, porotos o para dorar en cubitos, pero no da el cuero inflado de esta receta.'
    ]}
  ],
  variations:[
    ['Con naranja agria','Reemplazá el limón del adobo por jugo de naranja agria y sumá su ralladura. Aporta un perfume muy paraguayo que corta la grasa.'],
    ['En cubos para picada','Después de horneada y reposada, cortala en cubos de dos centímetros y serví con palillos. Es una entrada que se termina en minutos.'],
    ['En sándwich','Cortá fetas finas de la panceta ya fría, doralas en sartén y armá sándwiches con pan casero, tomate, lechuga y mayonesa de ajo.']
  ],
  storage:'Guardala en la heladera, tapada, hasta tres días. El cuero pierde el crocante en la heladera; para recuperarlo, calentala con el cuero hacia arriba en horno bien caliente unos diez minutos, sin tapar y sin microondas.',
  faq:[
    ['¿Cómo hacer que la panceta quede crocante?','Secando bien el cuero con sal en la heladera, horneando primero despacio a 160 °C y terminando a máxima temperatura hasta que el cuero se infle. Sin agua en la asadera.'],
    ['¿Cuánto tiempo se cocina la panceta al horno?','Para una pieza de unos 4 a 5 cm de alto, una hora y media a 160 °C y alrededor de media hora más a 230 a 250 °C para el cuero.'],
    ['¿Cuánto tarda la panceta a la parrilla?','En tiras de 1,5 a 2 cm, entre 25 y 35 minutos con brasa media, dándolas vuelta cada tanto hasta que estén doradas y la grasa se vea translúcida.'],
    ['¿La panceta se come cruda?','La panceta fresca no: es carne de cerdo cruda y tiene que llegar al menos a 63 °C. Otra cosa son los productos curados, como el bacon, que siguen su propio proceso.'],
    ['¿Bacon es panceta?','Sí, el bacon es panceta de cerdo curada y generalmente ahumada. Para esta receta necesitás panceta fresca, que es la que infla el cuero en el horno.'],
    ['¿Cuánta panceta compro por persona?','Como estimación de la redacción, unos 300 g crudos con cuero si es el plato principal. Si va como entrada en un asado, con 100 a 150 g por persona alcanza.']
  ],
  related:['corte-panceta','receta-costillas-de-cerdo-a-la-barbacoa','receta-bondiola-al-horno','receta-matambrito-de-cerdo-a-la-pizza','receta-papas-al-horno','receta-ensalada-de-papa'],
  guides:['guia-cortes-de-cerdo','guia-cuanta-carne-por-persona'],
  cateringOccasion:'fin-de-ano'
};
