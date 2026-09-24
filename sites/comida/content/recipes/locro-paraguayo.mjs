export default {
  id:'receta-locro-paraguayo', slug:'locro-paraguayo', kind:'recipe',
  published:true, indexable:true, updatedAt:'2026-09-24', verifiedAt:'2026-09-24',
  source:'Receta de la redacción de comida.com.py, basada en la preparación tradicional paraguaya',
  label:'Locro paraguayo',
  seoTitle:'Locro paraguayo: receta con carne',
  meta:'Receta de locro paraguayo con maíz locro, carne vacuna, zapallo y sofrito de locote. Remojo, cocción lenta y punto espeso, paso a paso y con trucos.',
  h1:'Locro paraguayo: maíz locro con carne, cocido a fuego lento',
  cardText:'Guiso espeso de maíz blanco partido con carne, zapallo y sofrito, para días fríos.',
  course:'Plato principal', cuisine:'Paraguaya', category:['paraguaya','carne'],
  keywords:['locro paraguayo','receta de locro paraguayo','locro con carne','como hacer locro paraguayo','locro'],
  intro:[
    'El locro paraguayo es un guiso de olla hecho con maíz locro, el maíz blanco partido, cocido largo con carne vacuna hasta que los granos se abren y espesan el caldo. Lleva un sofrito de cebolla, locote y tomate, un trozo de zapallo que se deshace y lo vuelve cremoso, y a menudo queso Paraguay al servir. Es comida de invierno, de fuego lento y olla grande.',
    'La receta rinde seis platos abundantes. Necesita planificación: el maíz se pone en remojo de un día para otro y después cocina cerca de dos horas y media. El trabajo activo, en cambio, es poco.'
  ],
  times:{prep:25, cook:150, rest:480}, difficulty:'Media',
  yield:{mode:'porciones', base:6, options:[2,4,6,12], yieldText:'6 platos', note:'Estimación de la redacción: un plato hondo abundante por persona. Recalentado rinde igual o mejor.'},
  ingredients:[
    {group:'Para el maíz y la carne', items:[
      {q:500, u:'g', item:'maíz locro', note:'maíz blanco partido'},
      {q:800, u:'g', item:'carne vacuna para hervir', note:'costilla, falda u osobuco, con algo de hueso'},
      {q:2.5, u:'l', item:'agua', note:'más la del remojo, que se descarta'},
      {q:1, u:'cdita', item:'sal gruesa'}
    ]},
    {group:'Para el sofrito', items:[
      {q:3, u:'cda', item:'grasa de cerdo o aceite'},
      {q:2, u:'u', item:'cebollas grandes', one:'cebolla grande', note:'picadas'},
      {q:1, u:'u', item:'locote rojo', note:'en tiras finas'},
      {q:2, u:'diente', item:'ajo', note:'picado'},
      {q:3, u:'u', item:'tomates', one:'tomate', note:'pelados y picados'},
      {q:1, u:'cdita', item:'comino molido'},
      {q:1, u:'cdita', item:'pimentón dulce'}
    ]},
    {group:'Para terminar', items:[
      {q:400, u:'g', item:'zapallo', note:'en cubos'},
      {q:200, u:'g', item:'queso Paraguay', note:'en cubitos, opcional'},
      {q:0.5, u:'atado', item:'cebollita de hoja', note:'picada'},
      {q:null, item:'sal fina', note:'al gusto'}
    ]}
  ],
  steps:[
    {title:'Remojá el maíz', text:'Lavá el maíz locro en varias aguas hasta que salga casi limpia y dejalo en remojo, cubierto con el doble de su volumen de agua fría, de un día para otro. Así se hidrata y la cocción se acorta.'},
    {title:'Herví el maíz con la carne', text:'Escurrí el maíz y ponelo en una olla grande con la carne, los 2,5 litros de agua y la sal gruesa. Llevá a hervor, espumá lo que sube a la superficie y bajá a fuego suave, con la tapa apenas corrida.'},
    {title:'Cociná despacio', text:'Dejá cocinar revolviendo cada tanto y raspando el fondo, porque el maíz se asienta y se pega. Si el caldo baja demasiado, sumá agua caliente. El maíz tiene que empezar a abrirse y la carne a separarse del hueso.', min:90},
    {title:'Hacé el sofrito', text:'En una sartén, calentá la grasa y rehogá la cebolla y el locote hasta que estén blandos. Agregá el ajo, el comino y el pimentón, cociná un minuto sin que se queme, y sumá el tomate hasta que se deshaga en salsa.', min:12},
    {title:'Uní todo con el zapallo', text:'Volcá el sofrito en la olla del locro junto con los cubos de zapallo. Revolvé bien y seguí cocinando a fuego bajo hasta que el zapallo se deshaga y el locro tome una textura espesa, casi cremosa.', min:40},
    {title:'Separá la carne', text:'Sacá los trozos de carne, quitá huesos y grasa dura, cortala en bocados y devolvela a la olla. Probá de sal y ajustá.'},
    {title:'Serví con queso y cebollita', text:'Apagá el fuego, sumá la cebollita de hoja y, si lo usás, el queso Paraguay en cubitos. Serví en platos hondos apenas el queso empiece a derretirse.'}
  ],
  tips:[
    'No te saltees el remojo: sin él, el maíz puede tardar más de cuatro horas en ablandarse y se cocina de forma despareja.',
    'Una olla de hierro o de fondo grueso es la mejor aliada. El locro se pega con facilidad cuando empieza a espesar.',
    'La carne con hueso aporta gelatina y sabor al caldo. Si usás solo carne magra, el locro sale más flojo.',
    'El punto justo es espeso, pero todavía se mueve en el plato. Si queda muy duro, aflojalo con caldo o agua caliente.',
    'Como casi todos los guisos, al día siguiente está más rico. Si podés, hacelo con anticipación y recalentalo despacio.'
  ],
  sections:[
    {title:'Maíz locro, maíz pisado y locro de otros países', paragraphs:['El maíz locro es maíz blanco partido o quebrado, sin la cáscara, y se consigue seco en ferias y almacenes. No es lo mismo que el choclo fresco ni que la harina de maíz: necesita remojo y cocción larga, como una legumbre. En algunas zonas también se usa maíz pisado más fino, que se cocina un poco más rápido.','El locro se come en varios países de la región y cada cocina tiene su versión. La paraguaya suele ser más sencilla, sin tantos embutidos, con carne vacuna, sofrito y a menudo queso Paraguay al final. En muchas casas se prepara en los días fríos y rinde para varias comidas.']},
    {title:'Locro y guiso: en qué se diferencian', paragraphs:['El locro no es un guiso de arroz con maíz: el grano entero partido es el protagonista y el que espesa el caldo al abrirse. Por eso lleva tanto tiempo, y por eso no hay atajo que lo reemplace sin cambiar el plato. Un guiso paraguayo, en cambio, se hace en menos de una hora con arroz o fideo.']}
  ],
  variations:[
    ['Locro con cerdo','Reemplazá la mitad de la carne vacuna por costilla de cerdo o panceta en trozos. El caldo queda más graso y sabroso.'],
    ['Locro con poroto','Sumá 200 g de poroto remojado junto con el maíz. Se cocinan en tiempos parecidos y el locro queda más espeso y nutritivo.'],
    ['En olla a presión','Con el maíz remojado, cociná maíz y carne unos 45 minutos desde que la olla toma presión. Después seguí con el sofrito y el zapallo, sin tapa.']
  ],
  storage:'Guardalo tapado en la heladera hasta tres días. Al enfriarse se espesa mucho: recalentalo en olla con un poco de agua o caldo, revolviendo desde el fondo. Se congela bien en porciones, sin el queso, hasta dos meses.',
  faq:[
    ['¿Qué es el maíz locro?','Es maíz blanco partido, seco y sin cáscara. Se remoja de un día para otro y se cocina largo hasta que los granos se abren y espesan el guiso.'],
    ['¿Cuánto tiempo se cocina el locro paraguayo?','Con el maíz remojado, unas dos horas y media a fuego lento en olla común. En olla a presión el tiempo se reduce a menos de la mitad.'],
    ['¿Qué carne se usa para el locro?','Cortes para hervir con algo de hueso y colágeno: costilla, falda u osobuco. Dan sabor y cuerpo al caldo. Algunas familias suman cerdo.'],
    ['¿Se puede hacer locro sin remojar el maíz?','Se puede, pero tarda mucho más y los granos quedan desparejos. Si te olvidaste, remojalo en agua caliente al menos tres horas antes de empezar.'],
    ['¿El locro paraguayo lleva queso?','Muchas casas le agregan queso Paraguay en cubitos al servir. No es obligatorio, pero suma sal y cremosidad.']
  ],
  related:['receta-puchero-paraguayo','receta-guiso-paraguayo','receta-vori-vori','receta-mbaipy','receta-sopa-paraguaya'],
  guides:['guia-comida-tipica-paraguaya','guia-que-cocinar-hoy','guia-mercado-de-abasto']
};
