export default {
  id:'receta-pira-caldo', slug:'pira-caldo', kind:'recipe',
  published:true, indexable:true, updatedAt:'2026-09-24', verifiedAt:'2026-09-24',
  source:'Receta de la redacción de comida.com.py, basada en la preparación tradicional paraguaya',
  label:'Pira caldo',
  seoTitle:'Pira caldo: receta de caldo de pescado',
  meta:'Receta de pira caldo paraguayo: sopa de pescado de río con sofrito de cebolla, locote y tomate, terminada con leche y queso Paraguay. Fácil y rendidora.',
  h1:'Pira caldo: la sopa paraguaya de pescado de río con queso',
  cardText:'Caldo de pescado de río con verduras, leche y queso Paraguay que se derrite en el plato.',
  course:'Sopa', cuisine:'Paraguaya', category:['paraguaya','saludable'],
  keywords:['pira caldo','pira caldo receta','receta de pira caldo','caldo de pescado paraguayo','sopa de pescado'],
  intro:[
    'El pira caldo es la sopa de pescado de la cocina paraguaya. Pira quiere decir pescado en guaraní, y la receta es tan simple como su nombre: pescado de río cocido en un caldo con sofrito de cebolla, locote y tomate, que se termina con un chorrito de leche y trozos de queso Paraguay que se derriten al servir. El resultado es un caldo sabroso, levemente cremoso, con pescado tierno.',
    'La receta rinde seis platos hondos. Se prepara en poco más de una hora, y la parte que más cuidado pide es el pescado: tiene que cocinarse justo, sin que se deshaga ni se seque.'
  ],
  times:{prep:30, cook:50}, difficulty:'Fácil',
  yield:{mode:'porciones', base:6, options:[2,4,6,12], yieldText:'6 platos', note:'Estimación de la redacción: un plato hondo por persona como comida principal, con pan o chipa al lado.'},
  ingredients:[
    {group:'Para el caldo de pescado', items:[
      {q:1.5, u:'kg', item:'pescado de río entero', note:'surubí, bagre, pacú o boga; en trozos, con cabeza y espinazo'},
      {q:2, u:'l', item:'agua'},
      {q:1, u:'u', item:'cebolla chica', note:'en cuartos'},
      {q:2, u:'hoja', item:'laurel'},
      {q:1, u:'cdita', item:'sal gruesa'}
    ]},
    {group:'Para el sofrito', items:[
      {q:3, u:'cda', item:'grasa de cerdo o aceite'},
      {q:2, u:'u', item:'cebollas medianas', one:'cebolla mediana', note:'picadas'},
      {q:1, u:'u', item:'locote rojo', note:'picado'},
      {q:1, u:'u', item:'locote verde', note:'picado'},
      {q:3, u:'diente', item:'ajo', note:'picado'},
      {q:3, u:'u', item:'tomates maduros', one:'tomate maduro', note:'pelados y picados'}
    ]},
    {group:'Para terminar', items:[
      {q:250, u:'ml', item:'leche'},
      {q:300, u:'g', item:'queso Paraguay', note:'en cubos'},
      {q:0.5, u:'atado', item:'cebollita de hoja', note:'picada'},
      {q:null, item:'perejil picado', note:'al gusto'},
      {q:null, item:'pimienta', note:'al gusto'}
    ]}
  ],
  steps:[
    {title:'Limpiá y separá el pescado', text:'Lavá el pescado y separá las partes: la cabeza, las colas y el espinazo van al caldo; los trozos con más carne, las postas, se reservan en la heladera para sumarlos al final. Si el pescado tiene barro o sangre en la cavidad, limpiala bien bajo agua fría.'},
    {title:'Hacé el caldo base', text:'Poné cabeza, colas y espinazo en una olla con el agua, la cebolla en cuartos, el laurel y la sal. Llevá a hervor, espumá y cociná a fuego suave, sin tapar del todo. Hervir de más enturbia el caldo y le da gusto amargo.', min:25},
    {title:'Colá el caldo', text:'Colá el caldo con un colador fino para que no pase ninguna espina. Si querés aprovechar la carne pegada a la cabeza y el espinazo, separala con cuidado cuando se entibie, revisando que no tenga espinas, y reservala.'},
    {title:'Prepará el sofrito', text:'En la misma olla limpia, calentá la grasa y rehogá la cebolla y los dos locotes a fuego medio hasta que estén blandos. Sumá el ajo, cociná un minuto y agregá el tomate. Dejá que se deshaga hasta tener una salsa espesa.', min:12},
    {title:'Uní sofrito y caldo', text:'Volcá el caldo colado sobre el sofrito, revolvé y llevá a hervor suave. Probá de sal: el queso va a salar un poco más al final, así que quedate corto.', min:5},
    {title:'Cociná los trozos de pescado', text:'Agregá los trozos de pescado reservados y cociná a fuego bajo, sin revolver con fuerza para que no se rompan, hasta que la carne esté blanca y se separe fácil del espinazo central.', min:10},
    {title:'Sumá la leche y el queso', text:'Bajá el fuego al mínimo, agregá la leche y la carne desmenuzada que habías reservado, si la tenés. Cuando vuelva a estar bien caliente, sin hervir, apagá y sumá los cubos de queso Paraguay, la cebollita, el perejil y pimienta.'},
    {title:'Serví enseguida', text:'Serví en platos hondos, con uno o dos trozos de pescado por plato y el queso apenas derretido. Acompañá con chipa, galleta o pan para mojar en el caldo.'}
  ],
  tips:[
    'La cabeza y el espinazo son los que dan sabor y cuerpo al caldo. No los tires, aunque después no se sirvan.',
    'Una vez que sumás la leche, no dejes que hierva fuerte: puede cortarse y el caldo pierde su aspecto liso.',
    'Si usás pescado con muchas espinas chicas, como la boga, cocinalo entero en el caldo, desmenuzalo con paciencia y devolvé solo la carne limpia.',
    'El pescado de río puede tener un leve gusto a barro. Un remojo previo de media hora en agua fría con jugo de limón y sal ayuda a suavizarlo.',
    'Agregá el queso fuera del fuego. Si lo hervís, se pone chicloso y se pega al fondo.'
  ],
  sections:[
    {title:'Qué pescado usar para el pira caldo', paragraphs:['La receta nace de los ríos: surubí, bagre, pacú, boga o mandi\'i son opciones habituales, según lo que haya y la época. El surubí da trozos firmes y sin espinas chicas, ideales para servir enteros; el bagre y el mandi\'i tienen carne sabrosa y bastante gelatina, que espesa el caldo. La boga es muy rica, pero tiene muchas espinas finas.','Si no conseguís pescado de río, sirve cualquier pescado blanco de carne firme. Lo importante es tener cabeza y espinazo para el caldo; si comprás solo filetes, pedí aparte algunas cabezas o armazones.']},
    {title:'Pira caldo en la mesa paraguaya', paragraphs:['En muchas casas el pira caldo aparece en Semana Santa, cuando se evita la carne roja, y en las zonas ribereñas es comida de todo el año. Circulan dichos populares que le atribuyen poderes para reponer fuerzas después de una noche larga; son parte del folclore, no una propiedad comprobada, pero dicen mucho de lo reconfortante que resulta un plato caliente de caldo.']}
  ],
  variations:[
    ['Pira caldo con mandioca','Sumá 500 g de mandioca en trozos chicos junto con el sofrito y el caldo, antes del pescado. El caldo queda más espeso y el plato más completo.'],
    ['Con verduras extra','Agregá zanahoria en rodajas y papa en cubos al caldo con el sofrito. Cocinalas hasta que estén tiernas antes de sumar el pescado.'],
    ['Sin leche','Terminá el caldo solo con queso y cebollita. Queda más claro y liviano, con el sabor del pescado más adelante.']
  ],
  storage:'Guardalo en la heladera hasta dos días, en recipiente cerrado. Recalentalo a fuego bajo, sin hervir, para que la leche no se corte y el pescado no se deshaga. No conviene congelarlo una vez que lleva leche y queso; sí podés congelar el caldo base colado.',
  faq:[
    ['¿Qué significa pira caldo?','Pira quiere decir pescado en guaraní, así que pira caldo es literalmente caldo de pescado. En Paraguay nombra una sopa de pescado de río con sofrito, leche y queso.'],
    ['¿Qué pescado lleva el pira caldo?','Pescado de río: surubí, bagre, pacú, boga o mandi\'i, según lo que haya. Conviene usar cabeza y espinazo para el caldo y trozos carnosos para servir.'],
    ['¿El pira caldo lleva leche?','La mayoría de las recetas caseras llevan un poco de leche y queso Paraguay al final, que le dan un color claro y un sabor suave. Hay versiones sin leche, más livianas.'],
    ['¿Cómo evitar que el pescado se deshaga?','Sumá los trozos al final, cociná a fuego bajo y no revuelvas con fuerza. Movelos con cuidado usando una espumadera.'],
    ['¿Se puede hacer pira caldo con filete de pescado?','Sí, pero el caldo queda con menos sabor. Si podés, conseguí algunas cabezas o armazones para el caldo base, o usá caldo de pescado casero congelado.'],
    ['¿Con qué se acompaña el pira caldo?','Con chipa, galleta, pan o mandioca hervida. Muchas familias lo sirven como plato único, bien caliente.']
  ],
  related:['receta-vori-vori','receta-caldo-de-pollo','receta-chipa','receta-sopa-paraguaya','receta-puchero-paraguayo'],
  guides:['guia-queso-paraguay','guia-comida-tipica-paraguaya','guia-mercado-de-abasto']
};
