// Recipe module: chuletas de cerdo. Shape: sites/comida/content/recipes/sopa-paraguaya.mjs
export default {
  id:'receta-chuletas-de-cerdo', slug:'chuletas-de-cerdo', kind:'recipe',
  published:true, indexable:true, updatedAt:'2026-09-24', verifiedAt:'2026-09-24',
  source:'Receta de la redacción de comida.com.py, basada en la cocina casera de Paraguay',
  label:'Chuletas de cerdo',
  seoTitle:'Chuletas de cerdo a la sartén, jugosas',
  meta:'Chuletas de cerdo jugosas en sartén: grosor ideal, sal previa, dorado a fuego fuerte, punto seguro a 63 °C y una salsa rápida de ajo y limón.',
  h1:'Chuletas de cerdo jugosas, a la sartén o a la parrilla',
  cardText:'Chuletas gruesas doradas en sartén, jugosas por dentro, listas en media hora.',
  course:'Plato principal', cuisine:'Casera', category:['carne','rapida'],
  keywords:['chuleta de cerdo','chuletas de cerdo','chuleta','chuletas de cerdo a la sartén','chuleta de cerdo a la plancha','chuleta de cerdo al horno'],
  intro:[
    'La chuleta de cerdo es una rodaja del lomo con su hueso de costilla y un borde de grasa. Es uno de los cortes más prácticos para el almuerzo de todos los días, pero también de los que más fácil se secan: la clave está en pedirlas gruesas, salarlas un rato antes y sacarlas del fuego apenas llegan al punto.',
    'Esta receta es para 6 chuletas en sartén, con una salsa de ajo, limón y manteca armada en la misma sartén. Abajo tenés también la forma de hacerlas a la parrilla y al horno.'
  ],
  times:{prep:35, cook:15, rest:5}, difficulty:'Fácil',
  yield:{mode:'porciones', base:6, options:[2,4,6,12], yieldText:'6 chuletas', note:'Una chuleta gruesa por persona, de unos 250 g con hueso. Para 12, cociná en tandas o usá dos sartenes.'},
  ingredients:[
    {group:'Para las chuletas', items:[
      {q:6, u:'u', item:'chuletas de cerdo', one:'chuleta de cerdo', note:'de 2 a 2,5 cm de grosor'},
      {q:2, u:'cdita', item:'sal fina'},
      {q:null, item:'pimienta negra molida', note:'al gusto'},
      {q:1, u:'cdita', item:'pimentón dulce'},
      {q:2, u:'cda', item:'aceite'}
    ]},
    {group:'Para la salsa de sartén', items:[
      {q:30, u:'g', item:'manteca'},
      {q:4, u:'diente', item:'ajo', note:'en láminas'},
      {q:1, u:'u', item:'limón', note:'el jugo'},
      {q:80, u:'ml', item:'caldo o agua'},
      {q:2, u:'cda', item:'perejil picado'}
    ]}
  ],
  steps:[
    {title:'Salá con anticipación', text:'Secá las chuletas con papel y salalas de los dos lados. Dejalas en un plato fuera de la heladera unos 30 minutos: la sal primero saca jugo y después lo vuelve a absorber, y la carne queda más sabrosa por dentro.', min:30},
    {title:'Cortá el borde de grasa', text:'Con un cuchillo, hacé dos o tres cortes cortos en la tira de grasa del borde, cada cuatro centímetros, sin llegar a la carne. Así la chuleta no se curva en la sartén y se dora pareja.'},
    {title:'Calentá bien la sartén', text:'Poné una sartén grande de fondo grueso a fuego fuerte con el aceite. Cuando el aceite brilla y empieza a moverse, está lista. Condimentá las chuletas con pimienta y pimentón justo antes de apoyarlas.'},
    {title:'Dorá el primer lado sin moverlas', text:'Colocá las chuletas sin amontonarlas, de a tres si la sartén es chica. Dejalas quietas hasta que el borde de abajo se vea bien dorado y se despeguen solas.', min:4},
    {title:'Dalas vuelta y bajá el fuego', text:'Giralas y bajá a fuego medio. Apoyá un rato cada chuleta de canto, con la grasa contra la sartén, para que el borde se dore y se derrita. Seguí hasta completar el punto.', min:4},
    {title:'Controlá el punto seguro', text:'Retiralas cuando el centro, junto al hueso, marca 63 °C; en el reposo suben un par de grados más. Sin termómetro, hacé un corte chico junto al hueso: la carne tiene que verse blanca o apenas rosada pálida y el jugo claro, no rojo.'},
    {title:'Hacé la salsa en la misma sartén', text:'Con las chuletas reposando en un plato tapado, bajá el fuego, poné la manteca y el ajo en la sartén y dejalo dorar apenas. Agregá el caldo y el jugo de limón, raspá el fondo y dejá reducir un par de minutos. Apagá y sumá el perejil.', min:3},
    {title:'Serví con la salsa por encima', text:'Volvé las chuletas a la sartén un instante para bañarlas con la salsa, junto con el jugo que soltaron en el plato. Serví enseguida.'}
  ],
  tips:[
    'Las chuletas finas, de un centímetro, se pasan antes de dorarse. Si solo conseguís finas, cocinalas a fuego fuerte todo el tiempo, un par de minutos por lado.',
    'Para una salmuera exprés, dejalas 30 minutos en un litro de agua con dos cucharadas de sal. Secalas muy bien antes de la sartén.',
    'Las chuletas con más hueso y grasa, las de la parte delantera, más cerca del cuello, perdonan más que las del final del lomo, que son muy magras.',
    'Una sartén de hierro guarda el calor y dora mejor que una antiadherente fina.',
    'Si hacés muchas, podés dorarlas en sartén y terminarlas todas juntas en una asadera en el horno a 180 °C.'
  ],
  sections:[
    {title:'Chuletas de cerdo a la parrilla y al horno', paragraphs:[
      'A la parrilla, pedí chuletas de dos centímetros y salalas igual que para la sartén. Van sobre brasa medio fuerte unos cinco a seis minutos por lado, hasta que el jugo salga claro. En la parrilla se secan más rápido que en la sartén, así que retiralas apenas estén.',
      'Al horno, dorá las chuletas un minuto por lado en sartén y pasalas a una asadera con papas en gajos ya precocidas. Diez a quince minutos a 200 °C suelen alcanzar. Una ensalada de papa o un arroz primavera completan el plato de todos los días.'
    ]}
  ],
  variations:[
    ['Chuletas en salsa de tomate','Después de dorarlas, cocinalas cinco minutos más en una salsa de tomate con locote rojo y cebolla, tapadas y a fuego bajo.'],
    ['Con cebolla caramelizada','Dorá dos cebollas en tiras con una cucharada de azúcar en la misma sartén y serví las chuletas encima.'],
    ['Chuletas empanadas','Pasalas por huevo batido y pan rallado, y freílas en aceite a temperatura media hasta dorar, como una milanesa con hueso.']
  ],
  storage:'Son mejores recién hechas. Si sobran, guardalas tapadas en la heladera hasta dos días y calentalas en sartén con un chorrito de agua y tapa, a fuego bajo, para no secarlas.',
  faq:[
    ['¿Cuánto tiempo se cocina una chuleta de cerdo a la sartén?','Una chuleta de 2 centímetros lleva de ocho a diez minutos en total: unos cuatro del primer lado a fuego fuerte y el resto a fuego medio.'],
    ['¿Cómo sé si la chuleta de cerdo está cocida?','El centro, junto al hueso, tiene que llegar al menos a 63 °C antes de retirarla, y después reposar unos minutos. A la vista, la carne queda blanca o apenas rosada pálida y el jugo sale claro.'],
    ['¿Por qué las chuletas de cerdo quedan duras?','Por ser muy finas, por cocinarlas de más o por hacerlas a fuego bajo desde el principio. Pedilas gruesas y retiralas a tiempo.'],
    ['¿Las chuletas de cerdo se lavan antes de cocinar?','No hace falta lavarlas. Alcanza con secarlas con papel de cocina, que además ayuda a que se doren.'],
    ['¿Qué acompañamiento va con chuleta de cerdo?','Papas al horno, puré, arroz primavera, ensalada de papa o mandioca hervida. Un poco de ácido, como limón o una ensalada de tomate, equilibra la grasa.'],
    ['¿Se pueden hacer chuletas de cerdo al horno?','Sí. Lo mejor es dorarlas antes en sartén y terminarlas diez a quince minutos a 200 °C.']
  ],
  related:['receta-lomo-de-cerdo-al-horno','receta-solomillo-de-cerdo','receta-costillar-de-cerdo-al-horno','corte-bondiola-de-cerdo','receta-papas-al-horno','receta-ensalada-de-papa'],
  guides:['guia-cuanta-carne-por-persona','guia-que-cocinar-hoy']
};
