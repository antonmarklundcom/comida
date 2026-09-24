export default {
  id:'receta-chipa', slug:'chipa', kind:'recipe', image:36, order:2,
  published:true, indexable:true, updatedAt:'2026-09-24', verifiedAt:'2026-09-24',
  source:'Receta de la redacción de comida.com.py, basada en la preparación tradicional paraguaya',
  label:'Chipa',
  seoTitle:'Receta de chipa paraguaya por kilo',
  meta:'Ingredientes para chipa paraguaya con almidón, harina de maíz, queso Paraguay y anís. Cantidades para ½, 1, 2 y 3 kilos, amasado, forma de rosca y horno.',
  h1:'Receta de chipa paraguaya: ingredientes y cantidades por kilo',
  cardText:'Roscas y chipacitos de almidón, queso Paraguay y anís, como en Semana Santa.',
  course:'Panificado', cuisine:'Paraguaya', category:['chipa','paraguaya','horno','fiesta'],
  keywords:['ingredientes para chipa','receta de chipa','chipa paraguaya','recetas de chipacitos','receta de chipa de 2 kilos','chipa de 1 kilo'],
  intro:[
    'La chipa paraguaya es un pan de almidón de mandioca, harina de maíz y queso Paraguay, amasado con grasa, huevos y un toque de anís. Sale del horno dorada, con la corteza firme y la miga densa y elástica. Se come en el desayuno con cocido, a media tarde con tereré y, sobre todo, en Semana Santa, cuando muchas familias hornean varios kilos de una sola vez.',
    'En Paraguay la chipa se cuenta por kilos de almidón, y así está armada esta receta: la base es 1 kilo, que alcanza para unas cuarenta roscas medianas. Si vas a hornear para toda la familia o para vender, elegí 2 o 3 kilos y las cantidades se recalculan solas.'
  ],
  times:{prep:40, cook:25, rest:15}, difficulty:'Media',
  yield:{mode:'kilos', base:1, options:[0.5,1,2,3], yieldText:'Unas 40 roscas medianas con 1 kilo', note:'Medido en kilos de almidón de mandioca. El rendimiento es una estimación de la redacción y cambia según el tamaño que les des.'},
  ingredients:[
    {group:'Para la masa', items:[
      {q:1000, u:'g', item:'almidón de mandioca', note:'el que se vende para chipa'},
      {q:250, u:'g', item:'harina de maíz', note:'fina, la de sopa y chipa'},
      {q:700, u:'g', item:'queso Paraguay', note:'bien desmenuzado o rallado'},
      {q:200, u:'g', item:'grasa de cerdo', note:'blanda, a temperatura ambiente'},
      {q:50, u:'g', item:'manteca'},
      {q:5, u:'u', item:'huevos', one:'huevo'},
      {q:250, u:'ml', item:'leche', note:'aproximadamente; se suma de a poco'},
      {q:1, u:'cda', item:'anís en grano'},
      {q:1, u:'cdita', item:'sal fina', note:'ajustá según lo salado del queso'}
    ]},
    {group:'Para hornear', items:[
      {q:null, item:'grasa o aceite para las asaderas', note:'al gusto'}
    ]}
  ],
  steps:[
    {title:'Prepará el queso y el anís', text:'Desmenuzá el queso Paraguay con las manos o rallalo grueso, sin dejar trozos grandes. Si querés un aroma más marcado, tostá el anís en una sartén seca durante un minuto y dejalo enfriar.'},
    {title:'Uní la grasa con los huevos', text:'En un bol grande o sobre la mesada, batí la grasa con la manteca hasta que estén cremosas. Sumá los huevos de a uno, la sal y el anís, y mezclá hasta que no queden grumos de grasa.'},
    {title:'Incorporá el queso y las harinas', text:'Agregá el queso y mezclá. Después sumá el almidón y la harina de maíz, ya combinados entre sí, y empezá a unir con las manos. Al principio parece que falta líquido: es normal.'},
    {title:'Hidratá con leche de a poco', text:'Echá la leche en chorritos mientras amasás. La masa está lista cuando se une, es suave y no se te pega en las manos, pero se agrieta apenas en los bordes al aplastarla. Si te pasaste de leche, corregí con una cucharada de almidón.'},
    {title:'Amasá y dejá descansar', text:'Amasá unos minutos hasta que la grasa y el queso estén repartidos de forma pareja. Tapá la masa con un repasador y dejala descansar mientras calentás el horno a 200 °C; así el almidón termina de hidratarse.', min:15},
    {title:'Formá roscas y chipacitos', text:'Para las roscas, tomá una porción del tamaño de un huevo, hacé un cilindro de un dedo de grosor y uní las puntas en círculo. Para chipacitos, hacé bolitas del tamaño de una nuez. Ubicalas en asaderas engrasadas, separadas un par de centímetros.'},
    {title:'Horneá hasta dorar', text:'Horneá en la parte media del horno hasta que la base y los bordes estén dorados y la superficie tenga manchas tostadas. Los chipacitos necesitan unos minutos menos que las roscas.', min:25},
    {title:'Dejá entibiar y serví', text:'Sacá las asaderas y esperá unos minutos antes de despegar las chipas con una espátula. Recién salidas están blandas; al entibiar toman la corteza firme que las caracteriza.'}
  ],
  kiloTable:{title:'Receta de chipa de ½, 1, 2 y 3 kilos', caption:'Cantidades según los kilos de almidón de mandioca', sizes:[0.5,1,2,3], items:['almidón de mandioca','harina de maíz','queso Paraguay','grasa de cerdo','manteca','huevos','leche','anís en grano'], note:'La leche es orientativa: con 2 o 3 kilos agregala de a poco y guiate por la textura. Para esas cantidades conviene amasar en dos tandas.'},
  tips:[
    'El queso define el sabor y la humedad. Un queso Paraguay bien curado y algo seco da chipas más sabrosas; si está muy fresco y húmedo, vas a necesitar menos leche.',
    'No trabajes la masa con calor: si la grasa se derrite en las manos, la chipa queda aceitosa. Amasá en un lugar fresco.',
    'Horneá una chipa de prueba antes de armar toda la tanda. Si se abre demasiado, a la masa le falta leche; si se aplasta, tiene de más.',
    'Rotá las asaderas a mitad de cocción si tu horno dora más de un lado. En horno de barro, controlá el calor con la puerta: la chipa se quema rápido en la tatakua bien caliente.',
    'Para Semana Santa o para vender, formá toda la masa antes de empezar a hornear y guardá las asaderas en espera en un lugar fresco.'
  ],
  sections:[
    {title:'Qué hace cada ingrediente de la chipa', paragraphs:['El almidón de mandioca es la base y el responsable de la miga elástica, algo gomosa, que distingue a la chipa de cualquier pan de trigo. La harina de maíz le aporta color, sabor a maíz y una textura un poco más firme; por eso esta receta lleva una parte, y quien prefiere una chipa más liviana la reduce o la elimina.','El queso Paraguay aporta sal, grasa y humedad, y la grasa de cerdo da el sabor tradicional y la corteza crocante. Los huevos ligan la masa y la ayudan a crecer en el horno. El anís es opcional, pero en muchas casas es el aroma que identifica a la chipa de Semana Santa.']},
    {title:'Chipa en rosca, chipacitos y otras formas', paragraphs:['La rosca es la forma más conocida: un cilindro cerrado en círculo que se cocina parejo y es fácil de ensartar para vender. Los chipacitos son bolitas chicas, ideales para bocaditos y para servir en una mesa de cumpleaños o un coffee break.','También hay chipa en forma de pancito alargado o de medialuna. La masa es la misma; lo que cambia es el tiempo de horno, más corto cuanto más chica es la pieza.']}
  ],
  variations:[
    ['Chipa sin harina de maíz','Reemplazá la harina de maíz por la misma cantidad de almidón y sumá un poco más de queso. El resultado es más claro y liviano; tenemos esa versión completa en la receta de chipa almidón.'],
    ['Con manteca en lugar de grasa','Usá 250 g de manteca en total por kilo. La chipa queda más suave y con sabor lácteo, menos crocante por fuera.'],
    ['Chipacitos para bocaditos','Formá bolitas de unos 15 g y horneá entre 12 y 15 minutos. Servilos tibios en una panera tapada con un repasador.']
  ],
  storage:'Guardá las chipas en una bolsa de tela o en un recipiente con tapa, a temperatura ambiente, hasta dos días. Para recuperar la textura, calentalas unos minutos en el horno. Crudas y ya formadas se congelan bien en una bandeja y después en bolsa: se hornean directamente, con unos minutos extra.',
  faq:[
    ['¿Cuáles son los ingredientes para chipa?','Almidón de mandioca, harina de maíz, queso Paraguay, grasa de cerdo o manteca, huevos, leche, sal y anís en grano. La proporción de esta receta es de 250 g de harina de maíz y 700 g de queso por cada kilo de almidón.'],
    ['¿Cuántos huevos lleva la chipa de 1 kilo?','Esta receta usa 5 huevos por kilo de almidón. Algunas familias ponen 4 y compensan con más leche, y otras llegan a 6 para una chipa más esponjosa.'],
    ['¿Qué cantidades necesito para una chipa de 2 kilos?','2 kilos de almidón, 500 g de harina de maíz, 1,4 kg de queso Paraguay, 400 g de grasa, 100 g de manteca, 10 huevos y alrededor de medio litro de leche. Elegí 2 kilos arriba de los ingredientes para ver la lista completa.'],
    ['¿Por qué mi chipa quedó dura?','Suele ser por poca grasa, un queso muy seco o exceso de horno. También endurece al enfriarse: calentala unos minutos antes de comerla y vuelve a estar tierna.'],
    ['¿A qué temperatura se hornea la chipa?','A unos 200 °C, entre 20 y 25 minutos para roscas medianas. Los chipacitos chicos se hacen en menos tiempo; mirá que la base esté dorada.'],
    ['¿Se puede hacer chipa sin anís?','Sí. El anís es un aroma tradicional, no un ingrediente estructural. Sin él la chipa sale igual de buena, con un sabor más neutro a queso.']
  ],
  related:['receta-chipa-almidon','receta-chipa-soo','receta-chipa-asador','receta-mbeju','receta-sopa-paraguaya'],
  guides:['guia-queso-paraguay','guia-mercado-de-abasto','guia-cuantos-bocaditos-por-persona'],
  cateringOccasion:'coffee-break'
};
