export default {
  id:'receta-puchero-paraguayo', slug:'puchero-paraguayo', kind:'recipe', order:9,
  published:true, indexable:true, updatedAt:'2026-09-24', verifiedAt:'2026-09-24',
  source:'Receta de la redacción de comida.com.py, basada en la preparación tradicional paraguaya',
  label:'Puchero paraguayo',
  seoTitle:'Puchero paraguayo: receta casera',
  meta:'Receta de puchero paraguayo con osobuco, mandioca, choclo, zapallo y verduras. En qué orden sumar cada ingrediente y cómo servir el caldo y la carne.',
  h1:'Puchero paraguayo: receta con osobuco, mandioca y choclo',
  cardText:'Carne con hueso, mandioca, choclo y zapallo en un caldo largo y sabroso.',
  course:'Plato principal', cuisine:'Paraguaya', category:['paraguaya','carne'],
  keywords:['puchero paraguayo','receta de puchero paraguayo','puchero de osobuco','puchero con mandioca'],
  intro:[
    'El puchero paraguayo es un hervido largo de carne vacuna con hueso y verduras: mandioca, choclo, zapallo, zanahoria, batata y repollo, todo cocido en la misma olla hasta que el caldo toma cuerpo y sabor. Es comida de domingo y de días fríos, pensada para una mesa grande, y se aprovecha entero: el caldo va como sopa y la carne con las verduras como plato principal.',
    'La receta rinde seis porciones abundantes. Lleva tiempo, pero casi todo es espera: la carne se cocina sola a fuego bajo y las verduras se suman por tandas según lo que tarda cada una. Si sos menos o más, cambiá la cantidad arriba de los ingredientes.'
  ],
  times:{prep:30, cook:150, rest:0}, difficulty:'Fácil',
  yield:{mode:'porciones', base:6, options:[2,4,6,12], yieldText:'6 porciones con caldo', note:'Porciones abundantes, estimadas por la redacción. Para 12, usá una olla de al menos 10 litros o dos ollas.'},
  ingredients:[
    {group:'Para la carne y el caldo', items:[
      {q:1500, u:'g', item:'osobuco', note:'en rodajas de dos dedos'},
      {q:500, u:'g', item:'costilla o falda vacuna', note:'en trozos'},
      {q:4, u:'l', item:'agua fría'},
      {q:1, u:'u', item:'cebolla grande', note:'en mitades'},
      {q:1, u:'u', item:'locote', note:'en tiras'},
      {q:2, u:'diente', item:'ajo', note:'machacados'},
      {q:2, u:'hoja', item:'laurel'},
      {q:1, u:'cda', item:'sal gruesa', note:'ajustá al final'}
    ]},
    {group:'Para las verduras', items:[
      {q:750, u:'g', item:'mandioca', note:'pelada, en trozos grandes'},
      {q:3, u:'u', item:'choclos', one:'choclo', note:'en rodajas gruesas'},
      {q:500, u:'g', item:'zapallo', note:'en trozos grandes, con cáscara'},
      {q:3, u:'u', item:'zanahorias', one:'zanahoria', note:'en trozos'},
      {q:2, u:'u', item:'batatas medianas', one:'batata mediana', note:'peladas, en trozos'},
      {q:0.25, u:'u', item:'repollo', note:'en gajos'}
    ]},
    {group:'Para servir', items:[
      {q:150, u:'g', item:'fideos finos o arroz', note:'para la sopa, opcional'},
      {q:null, item:'perejil y cebollita de hoja picados', note:'al gusto'}
    ]}
  ],
  steps:[
    {title:'Poné la carne en agua fría', text:'Acomodá el osobuco y la costilla en una olla grande, cubrilos con el agua fría y llevá a fuego medio. Empezar en frío ayuda a que la carne suelte sabor al caldo.'},
    {title:'Espumá el caldo', text:'Cuando esté por hervir, va a subir una espuma grisácea. Retirala con una espumadera durante los primeros minutos para tener un caldo más limpio y claro.', min:10},
    {title:'Sumá los aromáticos', text:'Agregá la cebolla, el locote, el ajo, el laurel y la sal. Bajá el fuego al mínimo, tapá dejando una rendija y cociná hasta que la carne esté tierna y empiece a separarse del hueso.', min:90},
    {title:'Primero, lo que más tarda', text:'Sumá la mandioca y la zanahoria. Si hace falta, agregá agua caliente para que todo quede cubierto. Cociná a fuego suave.', min:20},
    {title:'Después, el resto de las verduras', text:'Agregá el choclo, la batata y el zapallo, y por último los gajos de repollo encima. Cociná hasta que todo esté tierno al pincharlo con un cuchillo, sin que el zapallo llegue a deshacerse.', min:20},
    {title:'Separá caldo y verduras', text:'Con una espumadera pasá la carne y las verduras a una fuente grande, tapala para que no se enfríe y dejá el caldo en la olla. Probá y corregí la sal.'},
    {title:'Hacé la sopa', text:'Si querés servir sopa, colá una parte del caldo a otra olla, llevalo a hervor y cociná ahí los fideos o el arroz el tiempo que indique el paquete.', min:10},
    {title:'Serví en dos tiempos', text:'Primero la sopa bien caliente, con perejil y cebollita de hoja. Después, la fuente de carne y verduras con un poco de caldo por encima, para acompañar con sal gruesa, limón o una salsa criolla.'}
  ],
  tips:[
    'El osobuco aporta la médula, que le da al caldo un sabor profundo y una textura sedosa. No lo reemplaces todo por carne sin hueso.',
    'Cortá las verduras en trozos grandes: en un puchero se cocinan largo y los trozos chicos se deshacen.',
    'Si la mandioca es de buena calidad, se abre apenas al cocinarse. Si queda dura y fibrosa después de media hora, es mandioca vieja: no hay tiempo de cocción que la salve.',
    'El caldo sobrante se congela muy bien y sirve de base para un vori vori o una sopa de fideos.',
    'Para un caldo más liviano, enfrialo en la heladera y retirá la capa de grasa que se forma arriba.'
  ],
  sections:[
    {title:'Qué carne usar para el puchero', paragraphs:['El corte más usado es el osobuco, por la combinación de carne, colágeno y médula. Se suele sumar un corte con más grasa, como la costilla o la falda, que da sabor y mantiene la carne jugosa. Algunas familias agregan un trozo de panceta o un chorizo en la última media hora; es un gusto que cambia bastante el sabor del caldo.','Lo importante es que haya hueso. Un puchero solo con carne magra queda con un caldo pobre y la carne se seca a pesar del hervor.']},
    {title:'Cómo se sirve el puchero en casa', paragraphs:['La costumbre más extendida es servirlo en dos pasos: primero un plato de caldo, solo o con fideos o arroz, y después la carne con las verduras en una fuente al centro de la mesa. Así una misma olla resuelve la entrada y el plato principal.']}
  ],
  variations:[
    ['Puchero de gallina','Usá una gallina en presas en lugar de la carne vacuna. Necesita un tiempo parecido y da un caldo muy sabroso.'],
    ['Con chorizo','Sumá dos chorizos enteros durante los últimos 30 minutos. Pinchalos antes para que no revienten.'],
    ['Versión rápida en olla a presión','Cociná la carne 35 minutos en olla a presión, liberá el vapor y terminá las verduras sin tapa, a fuego suave.']
  ],
  storage:'Guardá la carne y las verduras separadas del caldo, tapadas en la heladera, hasta tres días. El caldo se congela hasta tres meses; las verduras cocidas pierden textura en el freezer, sobre todo el zapallo y la mandioca.',
  faq:[
    ['¿Qué lleva el puchero paraguayo?','Carne vacuna con hueso, sobre todo osobuco, y verduras como mandioca, choclo, zapallo, zanahoria, batata y repollo, cocidas en agua con cebolla, locote, ajo y laurel.'],
    ['¿Cuánto tiempo se cocina el puchero?','Unas dos horas y media en total a fuego bajo: alrededor de hora y media para la carne y otros cuarenta minutos para las verduras, sumadas por tandas.'],
    ['¿En qué orden van las verduras del puchero?','Primero las más duras, como mandioca y zanahoria; después choclo, batata y zapallo; y al final el repollo, que se cocina rápido.'],
    ['¿El puchero lleva fideos?','No siempre. Muchas familias usan parte del caldo para una sopa con fideos finos o arroz, que se sirve antes de la carne con verduras.'],
    ['¿Se puede hacer puchero sin osobuco?','Sí, con cualquier corte con hueso, como costilla o garrón. Sin hueso el caldo queda más pobre, así que es mejor no evitarlo.']
  ],
  related:['receta-vori-vori','receta-caldo-de-pollo','receta-guiso-paraguayo','corte-osobuco','receta-sopa-paraguaya'],
  guides:['guia-cuanta-carne-por-persona','guia-mercado-de-abasto','guia-canasta-basica']
};
