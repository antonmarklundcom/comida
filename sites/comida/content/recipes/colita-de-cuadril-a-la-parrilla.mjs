// Recipe module: colita de cuadril a la parrilla (al horno as a variation). Companion of corte-colita-de-cuadril. Shape: sites/comida/content/recipes/sopa-paraguaya.mjs
export default {
  id:'receta-colita-de-cuadril-a-la-parrilla', slug:'colita-de-cuadril-a-la-parrilla', kind:'recipe',
  published:true, indexable:true, updatedAt:'2026-09-24', verifiedAt:'2026-09-24',
  source:'Receta de la redacción de comida.com.py, basada en la práctica de parrilla del Río de la Plata y de Paraguay',
  label:'Colita de cuadril a la parrilla',
  seoTitle:'Colita de cuadril a la parrilla',
  meta:'Colita de cuadril a la parrilla con salmuera de ajo y salsa criolla: fuego, tiempos, punto, cómo cortarla cuando cambia la fibra y la versión al horno.',
  h1:'Colita de cuadril a la parrilla con salmuera y salsa criolla',
  cardText:'Un corte magro y sabroso, pincelado con salmuera de ajo y cortado contra la fibra.',
  course:'Plato principal', cuisine:'Casera', category:['carne','fiesta'],
  keywords:['colita de cuadril a la parrilla','colita cuadril a la parrilla','colita de cuadril','colita cuadril','colita cuadril al horno','colita de cuadril al horno'],
  intro:[
    'La colita de cuadril es la punta baja del cuadril: una pieza con forma de lágrima, gruesa en el medio y fina en las puntas, con poca grasa y mucho sabor. Como es magra, en la parrilla se aprovecha mejor con fuego medio, pinceladas de salmuera para que no se reseque y un punto jugoso. Pasada de cocción se vuelve seca; bien hecha, es de las carnes más ricas del asado.',
    'Esta receta es para 6 personas con dos colitas medianas. Al final vas a encontrar cómo hacerla al horno para los días de lluvia, y por qué hay que cortarla en dos antes de fetearla.'
  ],
  times:{prep:20, cook:40, rest:8}, difficulty:'Media',
  yield:{mode:'porciones', base:6, options:[2,4,6,12], yieldText:'6 porciones', note:'Estimación de la redacción: unos 300 g crudos por persona si es la única carne. Cada colita pesa en general entre 800 g y 1,2 kg; para 2 personas alcanza con una chica.'},
  ingredients:[
    {group:'Para la carne', items:[
      {q:2, u:'u', item:'colitas de cuadril', one:'colita de cuadril', note:'de 900 g a 1 kg cada una'},
      {q:2, u:'kg', item:'carbón', note:'o leña dura; cantidad aproximada'}
    ]},
    {group:'Para la salmuera', items:[
      {q:400, u:'ml', item:'agua caliente'},
      {q:2, u:'cda', item:'sal gruesa'},
      {q:3, u:'diente', item:'ajo', note:'aplastados'},
      {q:2, u:'hoja', item:'laurel'},
      {q:1, u:'cdita', item:'orégano seco'}
    ]},
    {group:'Para la salsa criolla', items:[
      {q:2, u:'u', item:'tomates', one:'tomate', note:'firmes, sin semillas, en cubos chicos'},
      {q:1, u:'u', item:'cebollas', one:'cebolla', note:'en cubos chicos'},
      {q:1, u:'u', item:'locotes', one:'locote', note:'rojo o verde, en cubos chicos'},
      {q:3, u:'cda', item:'vinagre'},
      {q:5, u:'cda', item:'aceite'},
      {q:null, item:'sal fina y pimienta', note:'al gusto'}
    ]}
  ],
  steps:[
    {title:'Prepará la salmuera', text:'Disolvé la sal gruesa en el agua caliente y sumá el ajo, el laurel y el orégano. Pasala a un frasco o botella con tapa agujereada y dejala entibiar: se usa para pincelar o salpicar la carne durante la cocción.'},
    {title:'Picá la salsa criolla', text:'Mezclá en un bol el tomate, la cebolla y el locote. Condimentá con sal y pimienta, agregá el vinagre y el aceite y dejala tapada en la heladera. Media hora de reposo alcanza para que la cebolla pierda el picor.'},
    {title:'Limpiá la colita', text:'Retirá la telita plateada que a veces cubre un costado, pasando el cuchillo por debajo con la hoja inclinada hacia arriba. Dejá la grasa que tenga: es poca y protege la carne. Secala y sacala de la heladera mientras se hace el fuego.'},
    {title:'Armá dos zonas de fuego', text:'Cuando las brasas estén cubiertas de ceniza blanca, poné más cantidad de un lado y una capa delgada del otro. La zona fuerte sirve para dorar y la suave para terminar el centro sin quemar las puntas finas.', min:35},
    {title:'Doralas de un lado', text:'Apoyá las colitas sobre la zona fuerte, con la grasa hacia abajo si la tienen. Pincelá la cara de arriba con salmuera. Cuando se vea una costra marrón pareja, pasalas a la zona suave sin darlas vuelta todavía.', min:8},
    {title:'Terminá del primer lado a fuego suave', text:'Dejalas en la zona suave y salpicá con salmuera un par de veces. Una colita de un kilo necesita en total unos 15 a 20 minutos por lado, según el grosor del centro.', min:10},
    {title:'Dalas vuelta y repetí', text:'Girá cada pieza con pinza, dorá el segundo lado sobre la zona fuerte unos minutos y volvé a la suave. No pinches la carne ni la aprietes con la espátula: es un corte magro y pierde jugo enseguida.', min:18},
    {title:'Sacalas en el punto justo', text:'Medí en la parte más gruesa: 54 a 56 °C para jugosa, 58 a 60 °C para a punto. Las puntas van a estar más cocidas que el centro, y eso está bien, porque siempre hay quien las prefiere así.'},
    {title:'Reposá y cortá en dos pasos', text:'Dejalas unos minutos en la tabla. La colita cambia la dirección de la fibra cerca del centro: cortala primero en dos por ese punto y después feteá cada mitad en sentido contrario a sus vetas. Serví con la salsa criolla.', min:8}
  ],
  tips:[
    'La salmuera sala de a poco y mantiene la superficie húmeda. Si preferís sal gruesa, ponela solo al momento de llevar la carne al fuego.',
    'Si las dos colitas tienen tamaños distintos, retirá la chica primero: suele estar lista varios minutos antes.',
    'Mirá la carne cruda antes de cocinarla: en la superficie se ve dónde las vetas cambian de dirección. Marcá ese punto con una muesca chica para saber dónde cortar después.',
    'Para la salsa criolla, el tomate firme y sin semillas evita que quede aguada. Hacela el mismo día.',
    'Una colita pasada no se arregla, pero sí se aprovecha: cortala muy fina y usala en sándwiches con salsa criolla.'
  ],
  sections:[
    {title:'Por qué la colita se corta distinto', paragraphs:[
      'En la mayoría de los cortes a la parrilla alcanza con mirar las vetas una vez y cortar en contra. La colita de cuadril tiene dos grupos de fibras que se encuentran en el medio en ángulo, como un abanico. Si la feteás de punta a punta en una sola dirección, la mitad de las fetas sale a favor de la fibra y se siente dura aunque el punto sea perfecto.',
      'Por eso conviene partirla en dos donde cambia la veta y cortar cada parte por separado. Lleva un minuto más en la tabla y cambia por completo la textura en el plato.'
    ]},
    {title:'Con qué servirla', paragraphs:[
      'La colita es sabrosa y magra, así que combina con acompañamientos con algo de grasa o almidón: mandioca hervida, papas al horno, sopa paraguaya o una chipa guazú. Una ensalada de hojas con tomate equilibra la mesa.',
      'En un asado con varios cortes, la colita suele ir después del chorizo y antes de los cortes más grasos, cuando el fuego ya está parejo y manso.'
    ]}
  ],
  variations:[
    ['Colita de cuadril al horno','Encendé el horno a 200 °C. Dorá la colita en una sartén bien caliente con un poco de aceite, un par de minutos por lado, y pasala a una asadera sobre rodajas de cebolla. Horneá unos 25 a 35 minutos, hasta 54 a 56 °C en el centro para jugosa. Reposá y cortá igual que a la parrilla, en dos pasos.'],
    ['En bifes a la parrilla','Cortá la colita cruda en bifes de dos dedos, en sentido contrario a la fibra. Van a fuego más fuerte, unos cuatro minutos por lado, y se sirven enteros.'],
    ['Marinada de limón y ajo','Dejala dos horas en la heladera con jugo de limón, ajo picado, aceite y pimienta. Secala antes de ponerla al fuego y salá recién ahí.']
  ],
  storage:'La carne cocida se guarda envuelta en la heladera hasta tres días. La salsa criolla se come el mismo día o al siguiente; después el tomate larga agua y la cebolla se ablanda.',
  faq:[
    ['¿Cuánto tarda la colita de cuadril a la parrilla?','Una colita de alrededor de un kilo tarda entre 35 y 40 minutos a fuego medio, unos 15 a 20 por lado. El tiempo cambia con el grosor y el fuego, así que confirmá el punto con termómetro o presionando el centro.'],
    ['¿Cómo se corta la colita de cuadril?','Primero en dos, justo donde las fibras cambian de dirección, cerca del centro. Después cada mitad se corta en fetas contra su propia veta.'],
    ['¿La colita cuadril es lo mismo que la tapa de cuadril?','No. La tapa de cuadril, o picaña, es la parte de arriba con su capa de grasa. La colita es el extremo más bajo del cuadril, más magra y con forma de lágrima.'],
    ['¿Cómo hacer colita de cuadril al horno?','Sellala en sartén y horneala a 200 °C unos 25 a 35 minutos, hasta que el centro marque 54 a 56 °C. Dejala reposar unos minutos antes de cortarla.'],
    ['¿Por qué la colita de cuadril queda seca?','Porque tiene muy poca grasa y se pasa rápido. Sacala antes de que el centro supere los 60 °C y pincelala con salmuera mientras se cocina.'],
    ['¿La colita de cuadril es un corte tierno?','Es bastante tierna si se cocina jugosa y se corta bien. Pasada de punto o cortada a favor de la fibra se vuelve firme.']
  ],
  related:['corte-colita-de-cuadril','corte-tapa-de-cuadril','receta-tapa-de-cuadril-al-horno','receta-picana-a-la-parrilla','receta-vacio-a-la-parrilla','receta-sopa-paraguaya','receta-papas-al-horno'],
  guides:['guia-cuanta-carne-por-persona','guia-asado-a-la-parrilla'],
  cateringOccasion:'cumpleanos'
};
