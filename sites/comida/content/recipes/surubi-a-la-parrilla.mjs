// Recipe module: surubí a la parrilla. Companion of guia-surubi. Shape: sites/comida/content/recipes/sopa-paraguaya.mjs
export default {
  id:'receta-surubi-a-la-parrilla', slug:'surubi-a-la-parrilla', kind:'recipe',
  published:true, indexable:true, updatedAt:'2026-09-24', verifiedAt:'2026-09-24',
  source:'Receta de la redacción de comida.com.py, basada en la preparación tradicional paraguaya de pescado de río a la brasa',
  label:'Surubí a la parrilla',
  seoTitle:'Surubí a la parrilla: receta en postas',
  meta:'Receta de surubí a la parrilla en postas: marinada de ajo y limón, cómo evitar que se pegue, cuánto tiempo por lado y salsa criolla para acompañar.',
  h1:'Surubí a la parrilla: postas jugosas con salsa criolla',
  cardText:'Postas de surubí marinadas con ajo y limón, doradas a la brasa y con salsa criolla.',
  course:'Plato principal', cuisine:'Paraguaya', category:['paraguaya','fiesta','saludable'],
  keywords:['surubí a la parrilla','surubi a la parrilla','postas de surubí a la parrilla','surubí asado','pescado a la parrilla'],
  intro:[
    'El surubí es el pescado ideal para quien recién se anima a poner pescado en la parrilla. Su carne firme no se desarma, no tiene espinas finas y el cuero de las postas hace de protección contra las brasas. Con una marinada corta de ajo, limón y aceite, fuego medio y una parrilla bien caliente y limpia, salen postas doradas por fuera y jugosas en el centro.',
    'La receta es para seis personas con postas de unos 300 g cada una. Incluye una salsa criolla fresca que corta la grasa del pescado y que podés preparar mientras se encienden las brasas. Si querés saber más sobre cómo elegir el surubí y qué corte pedir, tenés nuestra guía completa del surubí.'
  ],
  times:{prep:25, cook:20, rest:30}, difficulty:'Fácil',
  yield:{mode:'porciones', base:6, options:[2,4,6,12], yieldText:'6 porciones', note:'Estimación de la redacción: una posta de unos 300 g con hueso y cuero por adulto, como plato principal con acompañamientos.'},
  ingredients:[
    {group:'Para el pescado', items:[
      {q:6, u:'u', item:'postas de surubí', one:'posta de surubí', note:'de 2,5 a 3 cm de espesor, con cuero, unos 300 g cada una'},
      {q:4, u:'diente', item:'ajo', note:'picado muy fino o machacado'},
      {q:2, u:'u', item:'limones', one:'limón', note:'jugo y ralladura de uno'},
      {q:60, u:'ml', item:'aceite', note:'más un poco para la parrilla'},
      {q:1, u:'cdita', item:'pimentón dulce'},
      {q:1, u:'cdita', item:'sal fina'},
      {q:null, item:'pimienta', note:'al gusto'},
      {q:2, u:'kg', item:'carbón', note:'o leña dura; cantidad aproximada'}
    ]},
    {group:'Para la salsa criolla', items:[
      {q:2, u:'u', item:'tomates firmes', one:'tomate firme', note:'sin semillas, en cubitos'},
      {q:1, u:'u', item:'cebolla mediana', note:'picada fina'},
      {q:0.5, u:'u', item:'locote rojo', note:'en cubitos'},
      {q:0.5, u:'u', item:'locote verde', note:'en cubitos'},
      {q:0.5, u:'atado', item:'cebollita de hoja', note:'picada'},
      {q:3, u:'cda', item:'vinagre'},
      {q:5, u:'cda', item:'aceite'},
      {q:null, item:'sal y orégano', note:'al gusto'}
    ]},
    {group:'Para servir', items:[
      {q:2, u:'u', item:'limones', one:'limón', note:'en gajos'},
      {q:null, item:'perejil picado', note:'al gusto'}
    ]}
  ],
  steps:[
    {title:'Prepará la marinada', text:'En una fuente mezclá el ajo, el jugo de limón, la ralladura, el aceite, el pimentón, la sal y pimienta. Secá las postas con papel de cocina, acomodalas en la fuente y dales vuelta para que se cubran de ambos lados.'},
    {title:'Dejá marinar en la heladera', text:'Tapá la fuente y llevala a la heladera. No más de media hora: el limón empieza a cocinar la superficie del pescado y, si pasa mucho tiempo, la carne queda harinosa y se rompe en la parrilla.', min:30},
    {title:'Encendé el fuego y hacé la salsa', text:'Prendé el carbón o la leña a un costado de la parrilla. Mientras se hacen las brasas, mezclá en un bol los tomates, la cebolla, los locotes y la cebollita con el vinagre, el aceite, sal y orégano. Guardala en la heladera hasta servir.', min:30},
    {title:'Calentá y limpiá la parrilla', text:'Distribuí una capa pareja de brasas cubiertas de ceniza blanca y poné la parrilla encima para que tome temperatura. Raspala con un cepillo y pasale un trapo o papel doblado empapado en aceite, sujeto con una pinza. Una parrilla caliente y aceitada es lo que evita que el pescado se pegue.', min:10},
    {title:'Poné las postas del primer lado', text:'Buscá fuego medio: tenés que poder mantener la mano sobre la parrilla unos seis u ocho segundos. Escurrí apenas las postas y apoyalas sin moverlas. Si las movés antes de que se forme la costra, se pegan y se rompen.', min:7},
    {title:'Dales vuelta una sola vez', text:'Cuando la cara de abajo esté dorada y la posta se despegue sola al deslizar una espátula ancha por debajo, dala vuelta con cuidado, ayudándote con una pinza. Si usás parrilla doble para pescado, el giro es mucho más fácil.', min:6},
    {title:'Controlá el punto junto al espinazo', text:'Con la punta de un cuchillo separá un poco la carne junto al hueso central de la posta más gruesa. Tiene que verse blanca y opaca, sin partes translúcidas, y separarse en lascas. Si falta, dejá las postas unos minutos más en una zona de menos brasa.'},
    {title:'Serví enseguida', text:'Pasá las postas a una fuente caliente, rociá con un hilo de aceite, perejil picado y gajos de limón. Llevá la salsa criolla a la mesa aparte para que cada uno se sirva.'}
  ],
  tips:[
    'Pedí postas parejas de espesor: si hay unas finas y otras gruesas, las finas se secan mientras las gruesas terminan.',
    'No saques el cuero antes de cocinar. Protege la carne del calor directo y se retira fácil en el plato.',
    'Sacá las postas de la heladera diez minutos antes de ponerlas al fuego, no más: el pescado no debe quedar mucho tiempo a temperatura ambiente.',
    'Si no tenés parrilla doble, una plancha de hierro sobre las brasas es una buena alternativa para las primeras veces.',
    'Guardá una zona de la parrilla con pocas brasas para correr las postas que se dorarán demasiado rápido.'
  ],
  sections:[
    {title:'Con qué acompañar el surubí a la parrilla', paragraphs:['En Paraguay el surubí a la brasa se acompaña bien con mandioca hervida, sopa paraguaya, arroz blanco o una ensalada de lechuga y tomate. Para una mesa de Semana Santa, sumá chipa y chipa guazú horneadas en los días previos, y dejá el pira caldo para otra comida de esa semana.','Si hacés una parrillada mixta, poné el surubí al final, cuando las brasas ya bajaron y la carne vacuna está reposando: el pescado necesita fuego medio y poco tiempo, y así no compite por espacio.']}
  ],
  variations:[
    ['Surubí en papel aluminio','Envolvé cada posta marinada con rodajas de cebolla, tomate y locote en papel aluminio bien cerrado. Cociná unos 20 minutos a fuego medio, sin dar vuelta: sale al vapor, muy jugoso.'],
    ['Con manteca de ajo y perejil','Derretí manteca con ajo picado y perejil, y pincelá las postas en los últimos minutos. Queda un sabor más rico y redondo.'],
    ['Filetes a la plancha sobre la parrilla','Si solo conseguís filetes, cocinalos sobre una plancha de hierro caliente puesta en la parrilla, tres o cuatro minutos por lado según el grosor.']
  ],
  storage:'Lo que sobre guardalo en la heladera, en un recipiente cerrado, y consumilo en uno o dos días. Frío queda muy rico desmenuzado en ensalada o en tortilla; recalentado, hacelo a fuego suave y tapado para que no se seque. No conviene recongelar pescado ya cocido que se había descongelado antes.',
  faq:[
    ['¿Cuánto tiempo se cocina el surubí a la parrilla?','Para postas de 2,5 a 3 cm, entre 6 y 8 minutos por lado a fuego medio. El punto lo da la carne junto al espinazo: opaca y separándose en lascas.'],
    ['¿Cómo hacer que el surubí no se pegue a la parrilla?','Parrilla bien caliente, limpia y aceitada, pescado seco antes de salar, y paciencia: no lo muevas hasta que la costra lo despegue solo. Una parrilla doble ayuda mucho.'],
    ['¿Se le saca el cuero al surubí para asarlo?','No, conviene dejarlo. El cuero protege la carne y evita que se seque; al servir se separa sin esfuerzo.'],
    ['¿Con qué se marina el surubí?','Con ajo, jugo de limón, aceite, sal y pimienta es suficiente. Sumá pimentón u orégano si querés más color y aroma, y no lo marines más de media hora.'],
    ['¿Cuánto surubí comprar para seis personas?','Unas seis postas de 300 g, alrededor de 1,8 kg en total, como estimación de la redacción para plato principal con acompañamientos.'],
    ['¿Se puede hacer surubí a la parrilla con filete?','Sí, pero es más delicado. Usá una parrilla doble o una plancha de hierro sobre las brasas y cociná pocos minutos por lado.']
  ],
  related:['receta-pacu-a-la-parrilla','receta-dorado-al-horno','receta-pira-caldo','receta-sopa-paraguaya','receta-chipa-guazu'],
  guides:['guia-surubi','guia-pescados-de-rio','guia-mercado-de-abasto','coleccion-semana-santa'],
  cateringOccasion:'cumpleanos'
};
