// Recipe module: pernil de cerdo al horno para Navidad. Companion of corte-pernil-de-cerdo. Shape: sites/comida/content/recipes/sopa-paraguaya.mjs
export default {
  id:'receta-pernil-de-cerdo-al-horno', slug:'pernil-de-cerdo-al-horno', kind:'recipe',
  published:true, indexable:true, updatedAt:'2026-09-24', verifiedAt:'2026-09-24',
  source:'Receta de la redacción de comida.com.py, basada en la cocina casera paraguaya y rioplatense de las fiestas',
  label:'Pernil de cerdo al horno',
  seoTitle:'Pernil de cerdo al horno para Navidad',
  meta:'Pernil de cerdo al horno para Navidad: marinado con cerveza y ajo, horneado lento, glaseado de miel y mostaza, temperatura segura y cómo cortarlo.',
  h1:'Pernil de cerdo al horno, glaseado, para Navidad',
  cardText:'El pernil marinado con cerveza y ajo, horneado despacio y glaseado para la mesa de fiesta.',
  course:'Plato principal', cuisine:'Casera', category:['carne','horno','fiesta'],
  keywords:['pernil','pernil de cerdo','pernil de cerdo al horno','pernil al horno','pernil para navidad','pernil para sándwiches'],

  image:80,
  intro:[
    'El pernil es la pata trasera del cerdo, la misma pieza de la que sale el jamón. Horneado despacio es uno de los platos más buscados para la cena de Navidad y de Año Nuevo: rinde mucho, se prepara con anticipación y sirve tanto caliente en la mesa como frío en sándwiches al día siguiente. Esta versión se marina con cerveza, ajo y pimentón, se hornea tapada varias horas y se termina con un glaseado de miel y mostaza.',
    'Las cantidades son para 6 personas con un trozo de pernil con hueso de unos 2,5 kilos. Para una familia grande, elegí 12 porciones y pedí un pernil de 5 kilos: los tiempos se alargan y te lo indicamos en cada paso.'
  ],
  times:{prep:30, cook:210, rest:20}, difficulty:'Media',
  yield:{mode:'porciones', base:6, options:[2,4,6,12], yieldText:'6 porciones', note:'Estimación de la redacción: unos 400 g de pernil con hueso por persona como plato principal. Para 12 porciones, un pernil de 5 kg necesita alrededor de una hora y media más de horno tapado.'},
  ingredients:[
    {group:'Para la marinada', items:[
      {q:2.5, u:'kg', item:'pernil de cerdo', note:'un trozo con hueso y cuero, o sin cuero con su grasa'},
      {q:500, u:'ml', item:'cerveza rubia'},
      {q:6, u:'diente', item:'ajo', note:'machacados'},
      {q:2, u:'u', item:'cebollas', one:'cebolla', note:'en rodajas'},
      {q:2, u:'cda', item:'vinagre'},
      {q:1, u:'cda', item:'pimentón dulce'},
      {q:1, u:'cda', item:'sal gruesa'},
      {q:1, u:'cdita', item:'pimienta negra molida'},
      {q:1, u:'cdita', item:'orégano seco'},
      {q:2, u:'hoja', item:'laurel'}
    ]},
    {group:'Para el glaseado', items:[
      {q:3, u:'cda', item:'miel'},
      {q:2, u:'cda', item:'mostaza'},
      {q:3, u:'cda', item:'jugo de la asadera', note:'desgrasado'}
    ]}
  ],
  steps:[
    {title:'Hacé cortes en el pernil', text:'Si el pernil tiene cuero, marcalo en rombos con un cuchillo bien filoso sin llegar a la carne. Del lado de la carne, hacé varios cortes profundos cerca del hueso: es la zona que más tarda y por ahí entra la marinada.'},
    {title:'Marinalo de un día para otro', text:'Mezclá la cerveza con el ajo, el vinagre, el pimentón, la sal, la pimienta y el orégano. Poné el pernil en una fuente honda o una bolsa grande con las cebollas y el laurel, cubrilo con la mezcla y guardalo en la heladera toda la noche, dándolo vuelta una o dos veces.'},
    {title:'Templá y prepará el horno', text:'Sacalo de la heladera una hora antes. Encendé el horno a 160 °C. Pasá las cebollas al fondo de una asadera honda, poné el pernil encima con el cuero o la grasa hacia arriba y volcá la marinada alrededor.', min:60},
    {title:'Horneá tapado', text:'Cubrí con papel aluminio bien cerrado y horneá. Un trozo de 2,5 kg necesita unas dos horas y media en esta etapa; uno de 5 kg, alrededor de cuatro. A mitad de tiempo revisá que quede líquido en el fondo y, si hace falta, agregá un vaso de agua caliente.', min:150},
    {title:'Destapá y medí', text:'Sacá el aluminio y pinchá el termómetro en la parte más gruesa, sin tocar el hueso. Tiene que marcar al menos 63 °C; para que se corte en fetas tiernas, lo ideal es que esté entre 70 y 75 °C. Si falta, seguí destapado a 170 °C.'},
    {title:'Prepará el glaseado', text:'Mientras tanto, desgrasá un poco del jugo de la asadera con una cuchara y mezclalo con la miel y la mostaza hasta tener una salsa brillante y espesa.'},
    {title:'Glaseá y dorá', text:'Subí el horno a 200 °C. Pincelá el pernil con el glaseado y horneá destapado, pincelando otra vez cada diez minutos, hasta que la superficie esté oscura y brillante. Controlá que la miel no se queme en los bordes de la asadera.', min:40},
    {title:'Reposá antes de cortar', text:'Pasá el pernil a una tabla y dejalo descansar cubierto con aluminio flojo. El reposo completa la cocción del centro y hace que las fetas salgan enteras.', min:20},
    {title:'Cortá y armá la salsa', text:'Cortá fetas finas en sentido contrario a la fibra, rodeando el hueso. Colá el jugo con las cebollas, hacelo hervir unos minutos para que reduzca y serví esa salsa aparte en una salsera caliente.'}
  ],
  tips:[
    'Si comprás el pernil congelado, descongelalo en la heladera, nunca afuera. Calculá más o menos un día de heladera por cada 2 kilos de carne.',
    'Para sándwiches, el pernil tiene que estar más cocido: llevá el centro a 85 a 90 °C y la carne se va a desmenuzar con un tenedor.',
    'Un pernil con cuero da una superficie crocante; sin cuero, conservá una capa de grasa de un dedo para que no se seque.',
    'Si la superficie se oscurece antes de que el glaseado se asiente, cubrí solo esa parte con un trozo de aluminio.',
    'Pedí al carnicero que corte el pernil del tamaño de tu asadera. Un pernil entero puede pesar el doble de lo que entra en un horno de casa.'
  ],
  sections:[
    {title:'Organizar el pernil para Navidad', paragraphs:[
      'La cena del 24 se disfruta más si el pernil está resuelto antes. Una forma cómoda: comprarlo o retirarlo el 22, marinarlo la noche del 23 y hornearlo la tarde del 24 mientras se arma la mesa. Otra, igual de válida, es hornearlo el 23, dejarlo enfriar entero en su jugo y recalentarlo tapado a 160 °C con un poco de ese líquido antes de glasearlo.',
      'En diciembre muchas familias encargan cerdo para las mismas fechas, así que conviene encargarlo con anticipación y aclarar el peso, si querés con cuero o sin cuero, y si preferís un trozo de la parte del medio, que es más pareja.'
    ]},
    {title:'Pernil caliente, frío o en sándwich', paragraphs:[
      'Caliente, el pernil glaseado va con sopa paraguaya, papas al horno, ensalada rusa y la salsa de la asadera. Frío, en fetas finas, comparte fuente con vitel toné, matambre arrollado y otros fiambres de la mesa de fin de año.',
      'El sándwich de pernil es casi una tradición propia: pan francés o pan casero, fetas tibias o frías, un poco de la salsa y, para quien quiera, salsa criolla o mayonesa. Es la mejor forma de aprovechar el pernil del día después.'
    ]}
  ],
  variations:[
    ['Pernil deshuesado','Pedí al carnicero que lo deshuese y lo ate. Se cocina más parejo y se corta más fácil; restá una media hora a la etapa tapada y medí la temperatura igual.'],
    ['Con naranja en lugar de cerveza','Reemplazá la cerveza por jugo de naranja y un chorrito de vino blanco. El glaseado puede llevar ralladura de naranja en lugar de mostaza.'],
    ['Pernil desmenuzado para sándwiches','Horneá tapado una hora más, hasta que el centro pase los 85 °C. Desmenuzalo con dos tenedores y mezclalo con la salsa reducida de la asadera.']
  ],
  storage:'El pernil cocido se conserva en la heladera hasta cuatro días, bien envuelto o en un recipiente con parte de su jugo. En fetas o desmenuzado se congela hasta dos meses; descongelalo en la heladera antes de usarlo.',
  faq:[
    ['¿Cuánto tiempo se cocina un pernil de cerdo al horno?','Un trozo de 2,5 kg con hueso lleva unas dos horas y media tapado a 160 °C y unos 40 minutos destapado a 200 °C para glasear. Uno de 5 kg necesita alrededor de una hora y media más en la etapa tapada.'],
    ['¿A qué temperatura interna tiene que estar el pernil?','Al menos 63 °C en la parte más gruesa, seguido de un reposo. Para fetas tiernas, entre 70 y 75 °C; para desmenuzar en sándwiches, entre 85 y 90 °C.'],
    ['¿Cuánto pernil necesito por persona?','Como estimación de la redacción, unos 400 g con hueso por persona si es el plato principal, y bastante menos si se sirve frío junto a otros fiambres.'],
    ['¿Con qué se marina el pernil de cerdo?','En esta receta con cerveza, ajo, vinagre, pimentón y orégano. También se puede marinar con jugo de naranja, vino blanco o una mezcla de limón y ajo.'],
    ['¿Se puede hacer el pernil un día antes?','Sí. Hornealo, dejalo enfriar en su jugo y guardalo en la heladera. Antes de servir, recalentalo tapado a 160 °C con parte del jugo y glasealo al final.'],
    ['¿Pernil con cuero o sin cuero?','Con cuero la superficie queda crocante y la carne más protegida. Sin cuero absorbe mejor el glaseado. Las dos opciones funcionan con esta receta.']
  ],
  related:['corte-pernil-de-cerdo','receta-lechon-al-horno','receta-matambre-arrollado','receta-bondiola-al-horno','receta-vitel-tone','receta-ensalada-rusa','receta-pan-frances','occ-fin-de-ano'],
  guides:['guia-cortes-de-cerdo','guia-cuanta-carne-por-persona'],
  cateringOccasion:'fin-de-ano'
};
