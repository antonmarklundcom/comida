export default {
  id:'receta-pireca', slug:'pireca', kind:'recipe',
  published:true, indexable:true, updatedAt:'2026-09-24', verifiedAt:'2026-09-24',
  source:'Receta de la redacción de comida.com.py, basada en la preparación tradicional paraguaya',
  label:'Pireca',
  seoTitle:'Pireca paraguaya: receta de cuerito frito',
  meta:'Receta de pireca paraguaya, la masa frita fina y crocante de harina y grasa. Cómo estirarla, la temperatura del aceite y cómo servirla dulce o salada.',
  h1:'Pireca paraguaya: la masa frita crocante, paso a paso',
  cardText:'Masa fina de harina frita hasta inflarse, para comer con cocido o con azúcar.',
  course:'Merienda', cuisine:'Paraguaya', category:['paraguaya','rapida','chipa'],
  keywords:['pireca receta','pireca receta paraguaya','receta de pireca paraguaya','pireca','chipa pireca','cuerito paraguayo'],
  intro:[
    'La pireca es una masa de harina de trigo, grasa, sal y agua que se estira muy fina, se corta en tiras o rectángulos y se fríe hasta inflarse y quedar dorada. Sale crocante en los bordes, con burbujas por arriba y un centro apenas tierno. En algunas zonas también la llaman chipa pireca o cuerito, justamente por su aspecto de piel tostada.',
    'Es merienda de día de lluvia: se hace con ingredientes que casi siempre hay en la despensa y en menos de una hora está sobre la mesa, al lado del cocido o del mate cocido. Esta receta rinde unas 30 piezas medianas, suficientes para 6 personas.'
  ],
  times:{prep:25, cook:25, rest:15}, difficulty:'Fácil',
  yield:{mode:'porciones', base:6, options:[3,6,12], yieldText:'6 porciones, unas 30 piezas', note:'Cada porción equivale a unas cinco piezas de 6 x 10 cm. Para 12 porciones conviene freír en dos sartenes o pedir ayuda para estirar.'},
  ingredients:[
    {group:'Para la masa', items:[
      {q:500, u:'g', item:'harina de trigo común'},
      {q:1, u:'cdita', item:'sal fina'},
      {q:1, u:'cdita', item:'polvo de hornear', note:'opcional, da una masa más aireada'},
      {q:60, u:'g', item:'grasa de cerdo', note:'o manteca, blanda'},
      {q:250, u:'ml', item:'agua tibia', note:'o leche tibia, aproximadamente'}
    ]},
    {group:'Para freír y servir', items:[
      {q:1, u:'l', item:'aceite o grasa para freír', scale:false},
      {q:null, item:'azúcar', note:'al gusto, para espolvorear'}
    ]}
  ],
  steps:[
    {title:'Uní los secos con la grasa', text:'En un bol, mezclá la harina, la sal y el polvo de hornear. Agregá la grasa blanda y frotá con las yemas de los dedos hasta que no queden trozos visibles y la harina parezca arena gruesa.'},
    {title:'Amasá con el líquido tibio', text:'Echá el agua tibia de a poco y uní hasta formar una masa. Pasala a la mesada y amasá unos cinco minutos, hasta que esté lisa, suave y no se pegue a las manos. Tiene que ser más firme que una masa de pizza.', min:5},
    {title:'Dejá descansar la masa', text:'Envolvé el bollo en un repasador húmedo o en film y dejalo reposar sobre la mesada. El descanso relaja el gluten y después la masa se estira fina sin encogerse.', min:15},
    {title:'Estirá bien fino', text:'Dividí la masa en tres partes. Enhariná apenas la mesada y estirá cada parte con palote hasta que tenga unos 2 milímetros, casi transparente en los bordes. Cuanto más fina, más crocante queda la pireca.'},
    {title:'Cortá y pinchá', text:'Cortá rectángulos de unos 6 x 10 cm o tiras irregulares, como prefieras. Hacé dos o tres cortes pequeños en el centro de cada pieza o pinchalas con un tenedor para que no se inflen como un globo.'},
    {title:'Calentá el aceite', text:'Poné el aceite en una sartén honda u olla, con al menos 3 cm de altura, a fuego medio. Está listo a unos 170 a 175 °C: un trocito de masa tiene que subir enseguida rodeado de burbujas, sin dorarse de golpe.'},
    {title:'Freí por tandas', text:'Freí tres o cuatro piezas a la vez, sin amontonar. Dalas vuelta cuando la parte de abajo esté dorada; en total alcanzan unos dos minutos por tanda. Si se oscurecen antes de inflarse, bajá el fuego.', min:2},
    {title:'Escurrí y serví', text:'Retirá las piezas con espumadera y dejalas sobre papel absorbente. Serví tibias, solas o con azúcar espolvoreada por encima mientras todavía están calientes, para que se pegue.'}
  ],
  tips:[
    'El grosor manda más que la receta: a 2 milímetros la pireca queda crocante; a medio centímetro se parece más a una torta frita blanda.',
    'Si la masa se encoge al estirarla, tapala y esperá cinco minutos más. Forzarla solo la rompe.',
    'Cambiá el aceite o colalo si se llena de restos de harina quemada: la última tanda sale amarga si no.',
    'Con leche en lugar de agua, la masa se dora más rápido y tiene un sabor más suave; ajustá el fuego un punto hacia abajo.',
    'Para salada, espolvoreala con sal fina apenas sale del aceite y serví con queso Paraguay en fetas.'
  ],
  sections:[
    {title:'Pireca, cuerito o torta frita', paragraphs:['Se dice que el nombre viene del guaraní pire, que se usa para piel o cuero, en referencia a la superficie ampollada y tostada de la masa frita. Es una explicación popular muy repetida, sin un documento que la confirme, pero coincide con el otro nombre que recibe en muchas casas: cuerito.','La pireca comparte familia con la torta frita del Río de la Plata y con otras masas fritas de harina, pero se distingue por lo fina y crocante. En la mesa paraguaya se sirve casi siempre junto al cocido, en la misma merienda donde aparecen el reviro, el mbeju o la chipa.']},
    {title:'Dulce o salada', paragraphs:['La versión dulce es la más conocida: se pasa por azúcar común recién salida del aceite, y hay quien suma una pizca de canela. También se puede pintar con un hilo de miel de caña o servir con dulce de leche para mojar.','Salada, acompaña bien un plato de sopa o un guiso, y se transforma en picada con queso Paraguay, fiambre y una salsa de tomate fresco. En ese caso conviene cortarla en tiras largas, más fáciles de tomar con la mano.']}
  ],
  variations:[
    ['Pireca con huevo','Sumá un huevo batido a la masa y reducí el agua en unos 50 ml. Queda más dorada y un poco más tierna en el centro.'],
    ['Pireca al horno','Estirá igual de fina, pincelá con grasa derretida y horneá en asadera a 200 °C durante unos 12 minutos, dando vuelta a mitad de tiempo. Menos crocante, pero sin fritura.'],
    ['Pireca con anís','Agregá una cucharadita de semillas de anís a la masa y pasala por azúcar al servir. Es una versión aromática que combina muy bien con el cocido.']
  ],
  storage:'Lo ideal es comerla el mismo día. Si sobra, guardala en una lata o recipiente seco, sin tapar herméticamente mientras está tibia, hasta dos días; unos minutos de horno caliente le devuelven la crocancia.',
  faq:[
    ['¿Qué es la pireca paraguaya?','Es una masa de harina de trigo, grasa, sal y agua estirada muy fina y frita hasta que se infla y dora. Se come en la merienda, con cocido, dulce con azúcar o salada.'],
    ['¿Pireca y chipa pireca son lo mismo?','Sí, son dos nombres para la misma preparación de masa frita. En algunas casas también se la llama cuerito por la textura de su superficie.'],
    ['¿Por qué mi pireca quedó dura?','Suele pasar cuando la masa se amasa con demasiada harina o se estira gruesa y se fríe a fuego bajo. Estirala fina y freíla en aceite bien caliente, dos minutos por tanda.'],
    ['¿Se puede hacer pireca sin polvo de hornear?','Sí. La receta tradicional no siempre lo lleva; sin él, la pireca sale igual de crocante pero con menos burbujas.'],
    ['¿Con qué se come la pireca?','Con cocido o mate cocido en la merienda, espolvoreada con azúcar. Salada, acompaña sopas, guisos y quesos.'],
    ['¿Se puede preparar la masa con anticipación?','Sí, envuelta en film en la heladera hasta un día. Sacala media hora antes de estirar para que recupere elasticidad.']
  ],
  related:['receta-reviro','receta-mbeju','receta-cocido-paraguayo','receta-chipa','receta-kaguyjy'],
  guides:['guia-comida-tipica-paraguaya','guia-que-cocinar-hoy']
};
