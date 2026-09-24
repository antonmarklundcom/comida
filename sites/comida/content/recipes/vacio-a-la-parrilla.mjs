// Recipe module: vacío a la parrilla. Companion of corte-vacio. Shape: sites/comida/content/recipes/sopa-paraguaya.mjs
export default {
  id:'receta-vacio-a-la-parrilla', slug:'vacio-a-la-parrilla', kind:'recipe',
  published:true, indexable:true, updatedAt:'2026-09-24', verifiedAt:'2026-09-24',
  source:'Receta de la redacción de comida.com.py, basada en la práctica de parrilla del Río de la Plata y de Paraguay',
  label:'Vacío a la parrilla',
  seoTitle:'Vacío a la parrilla: receta paso a paso',
  meta:'Vacío a la parrilla tierno y con la grasa crocante: cuánto carbón, a qué altura, cuándo dar vuelta, el punto justo y cómo cortarlo. Para 6 personas.',
  h1:'Vacío a la parrilla, tierno y con grasa crocante',
  cardText:'Un vacío entero a fuego suave, jugoso por dentro y crocante del lado de la grasa.',
  course:'Plato principal', cuisine:'Casera', category:['carne','fiesta'],
  keywords:['vacío a la parrilla','vacio a la parrilla','vacío','cómo hacer vacío a la parrilla','vacío jugoso a la parrilla'],
  image:12,
  intro:[
    'El vacío a la parrilla es el corte de la paciencia: casi dos horas de fuego suave, un solo giro y la recompensa de una carne jugosa con la capa de grasa dorada y crocante. No pide marinadas ni salsas complicadas; pide brasa pareja y alguien que la cuide.',
    'La receta está pensada para un vacío de alrededor de 2 kilos, suficiente para 6 personas como carne principal. Cómo reconocer un buen vacío en la carnicería y cuánto comprar para un grupo grande lo encontrás en la guía del vacío; acá está el paso a paso del fuego a la tabla.'
  ],
  times:{prep:15, cook:110, rest:5}, difficulty:'Media',
  yield:{mode:'porciones', base:6, options:[2,4,6,12], yieldText:'6 porciones', note:'Unos 330 g crudos por persona si es la única carne. Para 12, dos vacíos medianos se manejan mejor que uno enorme.'},
  ingredients:[
    {group:'Para el vacío', items:[
      {q:2, u:'kg', item:'vacío', note:'entero, con su grasa y su membrana'},
      {q:2, u:'cda', item:'sal gruesa'},
      {q:4, u:'kg', item:'carbón', note:'o leña dura; cantidad aproximada para dos horas'}
    ]},
    {group:'Para el chimichurri', items:[
      {q:1, u:'atado', item:'perejil', note:'hojas picadas'},
      {q:4, u:'diente', item:'ajo', note:'picados'},
      {q:1, u:'cda', item:'orégano seco'},
      {q:1, u:'cdita', item:'ají molido'},
      {q:1, u:'cdita', item:'pimentón dulce'},
      {q:80, u:'ml', item:'vinagre'},
      {q:150, u:'ml', item:'aceite'},
      {q:null, item:'sal fina', note:'al gusto'}
    ]}
  ],
  steps:[
    {title:'Hacé el chimichurri con tiempo', text:'Mezclá el perejil, el ajo, el orégano, el ají y el pimentón en un frasco. Sumá el vinagre con un poco de sal, revolvé y terminá con el aceite. Dejalo reposar tapado: al cabo de una o dos horas está mucho más rico que recién hecho.'},
    {title:'Encendé el fuego en un costado', text:'Prendé el carbón en un rincón de la parrilla, lejos de donde va a ir la carne. Así vas a tener brasas nuevas para ir sumando durante casi dos horas sin enfriar el fuego.', min:30},
    {title:'Armá una cama de brasa suave', text:'Llevá debajo de la zona de cocción una capa fina y pareja de brasas cubiertas de ceniza. La prueba de la mano: tenés que aguantar unos diez segundos a la altura de la parrilla. Si la parrilla es regulable, subila a unos 20 centímetros.'},
    {title:'Salá y apoyá del lado de la carne', text:'Salá el vacío solo del lado de la carne, con la sal gruesa. Ponelo en la parrilla con ese lado hacia las brasas y la grasa hacia arriba. Durante esta primera etapa casi no hay que tocarlo, solo reponer brasas por los costados.', min:55},
    {title:'Un solo giro', text:'Cuando la carne esté bien dorada abajo y veas que la grasa de arriba empieza a transparentarse, dalo vuelta con pinza o espátula, sin pincharlo. Ahora la grasa y la membrana quedan hacia las brasas.'},
    {title:'Terminá del lado de la grasa', text:'Seguí a fuego suave hasta que la grasa esté dorada y crocante. Si gotea mucho y levanta llama, apartá un poco de brasa justo debajo. Es la etapa en que el vacío toma su textura característica.', min:45},
    {title:'Comprobá el punto', text:'Presioná la parte más gruesa: firme pero con algo de rebote es a punto. Con termómetro, 57 a 60 °C para jugoso y 60 a 63 °C para a punto. Las partes finas del borde siempre quedan más cocidas, y a muchos les gustan así.'},
    {title:'Reposá y cortá', text:'Pasalo a la tabla con la grasa hacia arriba y dejalo unos minutos. Cortalo en tiras de dos dedos en sentido contrario a la fibra, que en el vacío se ve con claridad. Serví con el chimichurri aparte.', min:5}
  ],
  tips:[
    'Tené siempre un fuego secundario encendido para ir alimentando la cama de brasas. Sumá de a poco, por los costados, nunca una pala de brasa fuerte debajo de la carne.',
    'Si tenés poco tiempo, pedí vacío fino: está en poco más de una hora. El vacío grueso del lado de la pierna necesita las dos horas completas.',
    'Hay quien empieza del lado de la grasa y termina del de la carne. Con fuego suave funcionan los dos órdenes; lo importante es que la grasa termine bien dorada.',
    'Si el vacío se curva al calentarse, apoyá encima una tapa de olla limpia o una asadera unos minutos para aplanarlo.',
    'Las sobras frías, cortadas bien finas, son excelentes para empanadas o sándwiches al día siguiente.'
  ],
  sections:[
    {title:'Cómo organizar el vacío en un asado con otros cortes', paragraphs:[
      'Como es de los cortes que más tarda, el vacío entra primero a la parrilla, junto con el costillar si lo hay. Mientras avanza, se ponen el chorizo y la morcilla para la entrada, y la entraña al final. La picaña, si también está, entra unos 50 minutos antes de servir.',
      'Para la mesa, la sopa paraguaya y la chipa guazú son las compañías de siempre, junto con mandioca hervida. Si querés sumar algo distinto, probá papas al horno, una ensalada de papa o pan al ajo tostado sobre la misma brasa.'
    ]}
  ],
  variations:[
    ['Vacío al horno','A 180 °C con la grasa hacia arriba sobre una rejilla, con una asadera debajo, entre una hora y media y dos horas.'],
    ['Vacío relleno','Abrí un bolsillo entre la membrana y la carne, rellenalo con queso, locote asado y cebolla, cerralo con palillos y cocinalo igual, con más atención al lado de la carne.'],
    ['Vacío a la pizza','Una vez listo, cubrilo del lado de la carne con salsa de tomate, queso y orégano, y dejalo unos minutos más tapado con una asadera hasta que se funda el queso.']
  ],
  storage:'Guardalo en la heladera, envuelto, hasta tres días. Para calentarlo, cortalo en tiras y pasalas por una sartén caliente apenas un minuto, o comelo frío en sándwich con chimichurri.',
  faq:[
    ['¿A qué temperatura interna está el vacío?','Jugoso entre 57 y 60 °C en la parte más gruesa, y a punto entre 60 y 63 °C. Los bordes finos siempre quedan más cocidos.'],
    ['¿Cuánto carbón necesito para un vacío a la parrilla?','Como referencia, unos 4 kilos de carbón para dos horas de fuego suave, contando lo que vas sumando por los costados.'],
    ['¿A qué altura va el vacío en la parrilla?','Alto, alrededor de 20 centímetros sobre las brasas si tu parrilla se regula. El fuego tiene que ser suave: unos diez segundos de mano.'],
    ['¿Cuántas veces se da vuelta el vacío?','Una sola. Primero de un lado casi la mitad del tiempo, y después del otro hasta que la grasa quede crocante.'],
    ['¿Se sala el vacío de los dos lados?','Solo del lado de la carne. La grasa y la membrana no la necesitan y la sal ahí favorece que se queme.'],
    ['¿Cuánto vacío compro para 6 personas?','Como estimación de la redacción, un vacío de unos 2 kilos si es la única carne. Con otros cortes en la parrilla, alcanza con 1 a 1,2 kilos.']
  ],
  related:['corte-vacio','receta-picana-a-la-parrilla','receta-entrana-a-la-parrilla','receta-matambre-a-la-pizza','receta-papas-al-horno','receta-pan-al-ajo','receta-chipa-guazu'],
  guides:['guia-cuanta-carne-por-persona'],
  cateringOccasion:'cumpleanos'
};
