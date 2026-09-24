// Reference recipe module: every recipe follows this shape (see scripts/validate-content.mjs).
export default {
  id:'receta-sopa-paraguaya', slug:'sopa-paraguaya', kind:'recipe', order:1,
  published:true, indexable:true, updatedAt:'2026-09-24', verifiedAt:'2026-09-24',
  source:'Receta de la redacción de comida.com.py, basada en la preparación tradicional paraguaya',
  label:'Sopa paraguaya',
  seoTitle:'Sopa paraguaya: receta tradicional por kilo',
  meta:'Receta de sopa paraguaya esponjosa con queso Paraguay, cebolla y harina de maíz. Cantidades para ½, 1 y 2 kilos de harina, paso a paso y con trucos.',
  h1:'Sopa paraguaya: la receta tradicional, por kilo',
  cardText:'La torta salada de harina de maíz y queso que no falta en ninguna mesa.',
  course:'Acompañamiento', cuisine:'Paraguaya', category:['paraguaya','horno','fiesta'],
  keywords:['sopa paraguaya','receta de sopa paraguaya','sopa paraguaya de 1 kilo','ingredientes de la sopa paraguaya'],
  image:3,
  intro:[
    'La sopa paraguaya es sólida aunque se llame sopa: una torta salada de harina de maíz, queso Paraguay, cebolla, leche y huevos que se hornea hasta dorar. Acompaña el asado, el mbeju y la chipa guazú en cualquier festejo, y también se come sola, tibia, con un cocido.',
    'Esta receta parte de medio kilo de harina de maíz, la medida de una fuente familiar. Si cocinás para más gente, elegí 1 o 2 kilos y todas las cantidades se recalculan.'
  ],
  times:{prep:25, cook:50, rest:15}, difficulty:'Fácil',
  yield:{mode:'kilos', base:0.5, options:[0.5,1,2], yieldText:'12 porciones con ½ kilo', note:'Medido en kilos de harina de maíz. Con ½ kilo se llena una fuente de unos 30 x 40 cm.'},
  ingredients:[
    {group:'Para la base de cebolla', items:[
      {q:3, u:'u', item:'cebollas medianas', one:'cebolla mediana', note:'picadas finas'},
      {q:250, u:'ml', item:'agua'},
      {q:1, u:'cdita', item:'sal fina', note:'ajustá según lo salado del queso'}
    ]},
    {group:'Para la mezcla', items:[
      {q:150, u:'g', item:'grasa de cerdo o manteca', note:'a temperatura ambiente'},
      {q:5, u:'u', item:'huevos', one:'huevo'},
      {q:500, u:'g', item:'queso Paraguay', note:'desmenuzado o rallado grueso'},
      {q:500, u:'ml', item:'leche', note:'tibia'},
      {q:500, u:'g', item:'harina de maíz', note:'fina, la que se vende para sopa'}
    ]}
  ],
  steps:[
    {title:'Prepará el horno y la fuente', text:'Encendé el horno a 180 °C. Engrasá bien una fuente de unos 30 x 40 cm con un poco de grasa o manteca, incluidos los bordes, para que la sopa se desmolde entera.'},
    {title:'Cociná la cebolla', text:'Poné la cebolla picada en una olla con el agua y la sal. Cociná a fuego medio hasta que esté transparente y blanda, sin que llegue a dorarse. Dejala entibiar con su líquido: ese caldo le da sabor y humedad a la sopa.', min:10},
    {title:'Batí la grasa con los huevos', text:'En un bol grande, batí la grasa o la manteca hasta que quede cremosa. Agregá los huevos de a uno, batiendo después de cada uno, hasta tener una mezcla pareja.'},
    {title:'Sumá el queso, la cebolla y la leche', text:'Incorporá el queso desmenuzado, la cebolla tibia con su caldo y la leche. Mezclá con cuchara de madera. Si la cebolla todavía quema, esperá: el calor puede cocinar los huevos antes de tiempo.'},
    {title:'Agregá la harina de a poco', text:'Echá la harina de maíz en forma de lluvia mientras revolvés. La mezcla tiene que quedar como una crema espesa que cae de la cuchara, no como una masa. Si está muy dura, agregá un chorrito más de leche.'},
    {title:'Dejá descansar la mezcla', text:'Tapá el bol y dejalo reposar unos minutos para que la harina se hidrate. Así la sopa sale más húmeda por dentro y no queda arenosa.', min:10},
    {title:'Horneá hasta dorar', text:'Volcá la mezcla en la fuente y alisá la superficie. Horneá hasta que esté bien dorada arriba y un palillo clavado en el centro salga limpio.', min:50},
    {title:'Dejá reposar antes de cortar', text:'Sacá la fuente del horno y esperá un cuarto de hora antes de cortar en cuadrados. Recién salida se desarma; tibia se corta limpia y mantiene la miga húmeda.', min:15}
  ],
  kiloTable:{title:'Receta de sopa paraguaya de ½, 1 y 2 kilos', caption:'Cantidades según los kilos de harina de maíz', sizes:[0.5,1,2], items:['harina de maíz','queso Paraguay','cebollas medianas','huevos','leche','grasa de cerdo o manteca'], note:'Con 1 kilo de harina necesitás dos fuentes de 30 x 40 cm o una asadera grande de horno de barro.'},
  tips:[
    'El queso Paraguay manda: si es muy salado, reducí o eliminá la sal de la cebolla. Probá un trocito antes de empezar.',
    'La textura de la mezcla es la clave. Tiene que ser más líquida que una masa de torta; si queda espesa como un puré, la sopa sale seca.',
    'La cebolla cocida en agua da una sopa más suave. Si preferís un sabor más intenso, rehogala en parte de la grasa antes de sumarla.',
    'No abras el horno durante la primera media hora: la sopa puede bajar en el centro.',
    'Para una corteza más dorada, esparcí un poco de queso rallado por encima en los últimos minutos de horno.'
  ],
  sections:[
    {title:'Por qué se llama sopa si es sólida', paragraphs:['La explicación más repetida cuenta que una cocinera agregó demasiada harina de maíz a una sopa líquida y, para no desperdiciarla, la horneó. Es un relato popular sin documento que lo confirme, pero el nombre quedó y hoy la sopa paraguaya es uno de los platos que identifican al país.','En las fiestas se hornea en asaderas grandes, muchas veces en tatakua, el horno de barro, y se sirve junto a la chipa guazú, su pariente hecha con choclo fresco.']}
  ],
  variations:[
    ['Sopa paraguaya con choclo','Reemplazá una parte de la leche por choclo rallado. Queda más húmeda y dulce, a mitad de camino con la chipa guazú.'],
    ['Con aceite en lugar de grasa','Usá la misma cantidad de aceite neutro. La miga resulta un poco menos esponjosa, pero es una opción práctica.'],
    ['En molde individual','Horneá en moldes de muffins engrasados durante unos 25 minutos: ideal para bocaditos y viandas.']
  ],
  storage:'Guardala tapada en la heladera hasta tres días. Para recuperar la textura, calentala en horno o sartén tapada unos minutos; también se puede congelar en porciones envueltas en film, hasta dos meses.',
  faq:[
    ['¿Qué harina se usa para la sopa paraguaya?','Harina de maíz fina, la que se vende como harina para sopa o para chipa. No sirve la polenta instantánea ni la harina de trigo: cambian la textura y el sabor.'],
    ['¿Cuántos huevos lleva una sopa paraguaya de 1 kilo?','Con 1 kilo de harina de maíz se usan unos 10 huevos, junto con 1 kilo de queso Paraguay y un litro de leche. Elegí 1 kilo arriba de los ingredientes y vas a ver todas las cantidades.'],
    ['¿Por qué mi sopa paraguaya quedó seca?','Casi siempre es por una mezcla demasiado espesa o por exceso de horno. La preparación cruda debe caer de la cuchara como una crema; sacala apenas el palillo salga limpio.'],
    ['¿Puedo hacerla sin grasa de cerdo?','Sí, con manteca o aceite. La grasa le da el sabor más tradicional, pero la receta funciona con cualquiera de las tres.'],
    ['¿Se puede preparar el día anterior?','Sí. Horneala, dejala enfriar y guardala tapada en la heladera. Al día siguiente calentala en el horno antes de servir.']
  ],
  related:['receta-chipa-guazu','receta-chipa','receta-mbeju','receta-vori-vori'],
  guides:['guia-queso-paraguay','guia-mercado-de-abasto'],
  cateringOccasion:'cumpleanos'
};
