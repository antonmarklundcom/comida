export default {
  id:'receta-tacos', slug:'tacos', kind:'recipe',
  published:true, indexable:true, updatedAt:'2026-09-24', verifiedAt:'2026-09-24',
  source:'Receta de la redacción de comida.com.py, adaptación casera de los tacos mexicanos con ingredientes que se consiguen en Paraguay',
  label:'Tacos caseros',
  seoTitle:'Tacos caseros con tortillas hechas en casa',
  meta:'Tacos caseros con tortillas de maíz o de harina y relleno de carne condimentada, más una versión de tacos al pastor adaptada a la cocina de casa.',
  h1:'Tacos caseros, con tortillas hechas en casa',
  cardText:'Tortillas caseras, carne condimentada, cebolla, cilantro y limón.',
  course:'Plato principal', cuisine:'Casera', category:['rapida','carne','fiesta'],
  keywords:['tacos','tacos mexicanos','tacos caseros','tacos al pastor','tortillas de maíz','tortillas de harina'],
  intro:[
    'Un taco es una tortilla chica y tibia doblada sobre un relleno, con cebolla picada, cilantro, unas gotas de limón y salsa. Así de simple se come en México, donde hay tantas variedades como rellenos. Esta receta propone una versión casera pensada para cocinar en Paraguay: carne vacuna salteada con comino, pimentón y ajo, y tortillas hechas en casa.',
    'Las tortillas tradicionales son de maíz nixtamalizado, una harina especial que no es la misma que usamos para la sopa paraguaya. Como no siempre se consigue, la receta principal usa tortillas de harina de trigo, y más abajo explicamos cómo hacer las de maíz si tenés esa harina. Rinde 12 tacos, tres por persona.'
  ],
  times:{prep:40, cook:35, rest:20}, difficulty:'Media',
  yield:{mode:'porciones', base:4, options:[2,4,6,12], yieldText:'12 tacos (4 porciones)', note:'Estimación de la redacción: tres tacos por adulto como comida, uno o dos si forman parte de una mesa con otros platos.'},
  ingredients:[
    {group:'Para las tortillas de harina', items:[
      {q:300, u:'g', item:'harina de trigo común'},
      {q:50, u:'g', item:'grasa de cerdo o manteca'},
      {q:1, u:'cdita', item:'polvo de hornear'},
      {q:1, u:'cdita', item:'sal fina'},
      {q:170, u:'ml', item:'agua tibia', note:'aproximadamente'}
    ]},
    {group:'Para el relleno de carne', items:[
      {q:600, u:'g', item:'carne vacuna', note:'nalga, cuadril o vacío, en tiras finas o picada a cuchillo'},
      {q:2, u:'cda', item:'aceite'},
      {q:1, u:'u', item:'cebolla', note:'en pluma'},
      {q:2, u:'diente', item:'ajo', note:'picado'},
      {q:1, u:'cdita', item:'comino molido'},
      {q:1, u:'cdita', item:'pimentón dulce'},
      {q:1, u:'cdita', item:'orégano seco'},
      {q:null, item:'ají molido o picante', note:'al gusto'},
      {q:1, u:'cdita', item:'sal fina'},
      {q:1, u:'u', item:'limón', note:'el jugo'}
    ]},
    {group:'Para servir', items:[
      {q:1, u:'u', item:'cebolla blanca', note:'picada muy fina'},
      {q:1, u:'atado', item:'cilantro', note:'picado'},
      {q:2, u:'u', item:'tomates', one:'tomate', note:'en cubitos'},
      {q:1, u:'u', item:'palta chica', note:'opcional'},
      {q:2, u:'u', item:'limones', one:'limón', note:'en gajos'}
    ]}
  ],
  steps:[
    {title:'Hacé la masa de las tortillas', text:'Mezclá la harina con el polvo de hornear y la sal. Agregá la grasa y frotá con los dedos hasta que no queden trozos. Sumá el agua tibia de a poco y amasá unos minutos, hasta tener una masa suave que no se pegue.'},
    {title:'Dividí y dejá descansar', text:'Formá 12 bollitos del mismo tamaño, tapalos con un repasador y dejalos reposar. Sin ese descanso la masa se encoge al estirarla.', min:20},
    {title:'Marinada rápida de la carne', text:'Mientras tanto, mezclá la carne con el ajo, el comino, el pimentón, el orégano, el ají, la sal y el jugo de limón. Dejala tomar sabor mientras hacés las tortillas.'},
    {title:'Estirá y cociná las tortillas', text:'Estirá cada bollito con palote hasta un disco fino de unos 15 cm. Cocinalo en sartén sin aceite, a fuego medio alto, hasta que aparezcan burbujas y manchas doradas, y dalo vuelta. Cada tortilla tarda cerca de un minuto por lado.', min:2},
    {title:'Mantenelas tibias', text:'A medida que salen, apilá las tortillas dentro de un repasador limpio y tapadas. El vapor que se junta las mantiene flexibles; sin ese abrigo se secan y se quiebran al doblarlas.'},
    {title:'Salteá la carne', text:'Calentá el aceite en una sartén grande a fuego fuerte, dorá la cebolla en pluma y sumá la carne en dos tandas, para que se dore y no hierva. Cociná hasta que esté bien sellada y sin jugo en el fondo.', min:8},
    {title:'Prepará la mesa', text:'Picá la cebolla blanca y el cilantro por separado, cortá el tomate en cubitos y la palta si usás. Serví todo en cuencos y los limones en gajos, para que cada uno arme a su gusto.'},
    {title:'Armá los tacos', text:'Poné dos cucharadas de carne en el centro de cada tortilla tibia, sumá cebolla, cilantro y tomate, exprimí limón y doblá. En la versión clásica se usan dos tortillas superpuestas por taco para que no se rompa.'}
  ],
  tips:[
    'La harina de maíz para sopa o para chipa no sirve para tortillas: no está nixtamalizada y la masa se desmorona. Si querés tortillas de maíz, buscá harina de maíz nixtamalizada.',
    'Cocinar las tortillas en sartén seca y bien caliente es lo que les da las manchas tostadas; con fuego bajo quedan pálidas y duras.',
    'Picá la carne a cuchillo en tiras chicas si podés: queda más jugosa que la carne molida, que tiende a soltar agua.',
    'Si el cilantro no es de tu gusto, reemplazalo por perejil y cebollita de hoja; cambia el perfil pero sigue siendo fresco.',
    'Una salsa rápida: tomate, cebolla, cilantro, ají y limón picados juntos con sal, diez minutos antes de servir.'
  ],
  sections:[
    {title:'Tortillas de maíz caseras', paragraphs:[
      'Si conseguís harina de maíz nixtamalizada, mezclá 250 g con una cucharadita de sal y unos 330 ml de agua tibia, hasta tener una masa como plastilina blanda que no se agriete al aplastarla. Tapala diez minutos, formá 14 bolitas y aplastalas entre dos plásticos con el fondo de una asadera o una prensa, hasta unos 2 mm.',
      'Cocinalas en sartén seca bien caliente: unos 30 segundos de un lado, un minuto del otro y otros segundos del primero. Si se inflan un poco, está bien hecha. Guardalas apiladas en un repasador para que terminen de ablandarse con su propio vapor.'
    ]},
    {title:'Tacos al pastor en casa', paragraphs:[
      'Los tacos al pastor se hacen en México con cerdo adobado y apilado en un asador vertical, el trompo, del que se cortan láminas finas con un trozo de ananá. En una cocina de casa no hay trompo, así que lo que sigue es una adaptación, no la preparación original.',
      'Cortá 700 g de bondiola de cerdo en láminas finas y adobala con pimentón, ají molido, comino, orégano, dos dientes de ajo, un chorro de vinagre, medio vaso de jugo de ananá y sal, al menos dos horas en la heladera. Cociná en sartén o plancha muy caliente en tandas chicas hasta que los bordes se tuesten, picá la carne y serví en tortillas con ananá dorado en la sartén, cebolla y cilantro.'
    ]}
  ],
  variations:[
    ['Tacos de pollo','Usá muslo deshuesado en tiras con la misma marinada. Queda más jugoso que la pechuga.'],
    ['Tacos crocantes','Doblá las tortillas de maíz sobre el mango de una cuchara de madera y horneálas a 200 °C unos 8 minutos hasta que queden firmes. Es la versión que muchos conocen por fuera de México.'],
    ['Con porotos','Para una versión sin carne, usá porotos negros cocidos y aplastados, salteados con cebolla, ajo y comino.']
  ],
  storage:'Las tortillas se guardan hasta tres días en la heladera dentro de una bolsa cerrada y se calientan unos segundos en sartén seca. La carne cocida dura dos días en frío. Las tortillas de harina también se congelan separadas con papel manteca.',
  faq:[
    ['¿Cómo se hacen las tortillas de maíz para tacos?','Con harina de maíz nixtamalizada, agua tibia y sal, aplastadas finas y cocidas en sartén seca. La harina de maíz común paraguaya no funciona para esto.'],
    ['¿Qué lleva un taco mexicano?','Tortilla de maíz tibia, un relleno de carne, cebolla picada, cilantro, limón y salsa. El resto depende del tipo de taco.'],
    ['¿Qué son los tacos al pastor?','Tacos de cerdo adobado con chiles y especias, cocinado en asador vertical y servido con ananá. En casa se hace una adaptación en sartén.'],
    ['¿Qué carne se usa para tacos en Paraguay?','Nalga, cuadril o vacío cortados en tiras finas, o bondiola de cerdo para la versión al pastor. Pollo también funciona.'],
    ['¿Puedo hacer tacos con tortillas de harina?','Sí. En el norte de México se usan mucho, y son más fáciles de hacer con lo que se consigue acá.'],
    ['¿Cuántos tacos por persona?','Como estimación de la redacción, tres por adulto si son la comida principal. Con acompañamientos, dos.']
  ],
  related:['receta-lomito-arabe','receta-wrap-de-pollo','receta-hamburguesas-caseras','corte-bondiola-de-cerdo','corte-vacio'],
  guides:['guia-cuanta-carne-por-persona','guia-cuanta-comida-por-persona'],
  cateringOccasion:'cumpleanos'
};
