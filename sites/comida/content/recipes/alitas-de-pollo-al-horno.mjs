// Recipe module: alitas de pollo al horno, con variaciones BBQ, picantes y en freidora de aire. Shape: sites/comida/content/recipes/sopa-paraguaya.mjs
export default {
  id:'receta-alitas-de-pollo-al-horno', slug:'alitas-de-pollo-al-horno', kind:'recipe',
  published:true, indexable:true, updatedAt:'2026-09-24', verifiedAt:'2026-09-24',
  source:'Receta de la redacción de comida.com.py, basada en la cocina casera',
  label:'Alitas de pollo al horno',
  seoTitle:'Alitas de pollo al horno crocantes',
  meta:'Alitas de pollo al horno bien crocantes, sin freír: secado, polvo de hornear, dos temperaturas y salsas BBQ o picante. También en freidora de aire.',
  h1:'Alitas de pollo al horno, crocantes sin freír',
  cardText:'Alitas con piel crocante al horno, para bañar en salsa barbacoa o picante.',
  course:'Plato principal', cuisine:'Casera', category:['pollo','horno','fiesta'],
  keywords:['alitas de pollo','alitas','alitas al horno','alitas de pollo al horno','alitas bbq','alitas picantes','alitas en freidora de aire','salsa para alitas'],
  intro:[
    'Las alitas de pollo al horno pueden quedar tan crocantes como las fritas si se cuida una sola cosa: la piel tiene que estar seca. Esta receta usa un truco sencillo, una cucharada de polvo de hornear mezclada con la sal, que ayuda a que la piel se dore y se llene de burbujas, y dos temperaturas: primero baja, para derretir la grasa de debajo de la piel, y después alta, para que cruja.',
    'Salen doradas y listas para comer solas con limón o para bañar en una salsa barbacoa o picante justo antes de servir. Para 6 personas como plato principal se calculan unos 2 kilos de alitas; si van como picada junto a otras cosas, rinden para el doble de gente.'
  ],
  times:{prep:20, cook:75, rest:5}, difficulty:'Fácil',
  yield:{mode:'porciones', base:6, options:[2,4,6,12], yieldText:'6 porciones', note:'Unos 330 g de alitas crudas por persona como plato principal, entre 5 y 7 piezas según el tamaño. Para 12 usá dos asaderas con rejilla.'},
  ingredients:[
    {group:'Para las alitas', items:[
      {q:2, u:'kg', item:'alitas de pollo', note:'enteras o separadas en partes'},
      {q:1, u:'cda', item:'polvo de hornear', note:'no bicarbonato'},
      {q:2, u:'cdita', item:'sal fina'},
      {q:1, u:'cdita', item:'pimentón dulce'},
      {q:1, u:'cdita', item:'ajo en polvo'},
      {q:null, item:'pimienta negra molida', note:'al gusto'}
    ]},
    {group:'Para la salsa barbacoa rápida', items:[
      {q:150, u:'ml', item:'kétchup o puré de tomate reducido'},
      {q:2, u:'cda', item:'miel o azúcar negra'},
      {q:1, u:'cda', item:'vinagre de manzana'},
      {q:1, u:'cda', item:'salsa inglesa'},
      {q:1, u:'cdita', item:'pimentón ahumado o dulce'}
    ]},
    {group:'Para servir', items:[
      {q:2, u:'u', item:'limones', one:'limón', note:'en gajos'},
      {q:3, u:'u', item:'zanahorias', one:'zanahoria', note:'en bastones'},
      {q:null, item:'cebollita de hoja picada', note:'al gusto'}
    ]}
  ],
  steps:[
    {title:'Separá las alitas', text:'Si vienen enteras, cortá cada alita en la articulación para separar la parte más carnosa, la que parece un muslito, de la del medio con dos huesitos. La punta tiene muy poca carne: podés dejarla o guardarla para un caldo.'},
    {title:'Secalas muy bien', text:'Poné las piezas sobre papel de cocina y secalas por todos lados, apretando. Cuanto menos agua tenga la piel, más crocante va a quedar. Si tenés tiempo, dejalas destapadas en la heladera una hora sobre una rejilla.'},
    {title:'Cubrí con la mezcla seca', text:'En un bol grande mezclá el polvo de hornear, la sal, el pimentón, el ajo en polvo y la pimienta. Agregá las alitas secas y revolvé con las manos hasta que queden cubiertas con una capa fina y pareja, casi invisible. No agregues aceite.'},
    {title:'Acomodá sobre rejilla', text:'Precalentá el horno a 130 °C con el estante en el centro. Poné una rejilla sobre una asadera forrada con papel aluminio y apoyá las alitas con la piel hacia arriba, separadas: el aire caliente tiene que pasar entre ellas y por debajo.'},
    {title:'Primer tramo a temperatura baja', text:'Horneá a 130 °C. En esta etapa la grasa que está bajo la piel se derrite y cae a la asadera, que es lo que después permite que la piel quede fina y crocante en lugar de gomosa.', min:30},
    {title:'Segundo tramo bien caliente', text:'Sin sacarlas, subí el horno a 220 °C y seguí hasta que la piel esté dorada oscura y crujiente. A mitad de este tramo podés darlas vuelta si tu horno dora más de un lado. Tienen que llegar a 74 °C junto al hueso.', min:40},
    {title:'Prepará la salsa', text:'Mientras tanto, calentá en una ollita el kétchup o puré, la miel, el vinagre, la salsa inglesa y el pimentón, revolviendo, hasta que hierva y se vuelva brillante. Retirala del fuego.', min:5},
    {title:'Bañá y serví', text:'Pasá las alitas calientes a un bol, volcá la salsa y revolvé para cubrirlas. Hacelo justo antes de llevarlas a la mesa, porque la salsa ablanda la piel a los pocos minutos. Si querés servir algunas sin salsa, separalas antes, con limón y cebollita de hoja.'}
  ],
  tips:[
    'Usá polvo de hornear y no bicarbonato de sodio: el bicarbonato deja un gusto metálico. Con una cucharada para 2 kilos alcanza; si ponés más, se nota.',
    'La rejilla es clave. Apoyadas directo en la asadera, las alitas se cocinan en su propia grasa y la parte de abajo queda blanda.',
    'Forrar la asadera con aluminio no es obligatorio, pero ahorra mucho trabajo: la grasa que cae se pega y se quema a 220 °C.',
    'Si las alitas vienen congeladas, descongelalas en la heladera la noche anterior y secalas el doble. Congeladas nunca doran bien.',
    'Para una picada, servilas con bastones de zanahoria y una salsa fría de mayonesa con limón y ajo, que calma el picante.'
  ],
  sections:[
    {title:'Salsa para alitas: barbacoa y picante', paragraphs:[
      'La salsa barbacoa de esta receta es la versión rápida, pensada para diez minutos. Si querés una más profunda, con cebolla rehogada y cocción lenta, la de las costillas de cerdo a la barbacoa sirve igual para las alitas y alcanza para las dos preparaciones.',
      'Para alitas picantes, derretí 60 gramos de manteca con dos o tres cucharadas de salsa picante de ají, una cucharadita de vinagre y una pizca de ajo en polvo. Batí hasta que se emulsione y bañá las alitas recién salidas del horno. El nivel de picante lo decide cada uno: empezá con poco, probá y agregá.'
    ]},
    {title:'Cuántas alitas por persona', paragraphs:[
      'Como estimación de la redacción, contá entre 5 y 7 alitas separadas por adulto cuando son el plato principal, y entre 3 y 4 cuando forman parte de una picada con otras cosas. Las alitas tienen mucho hueso en relación con la carne, así que conviene calcular generoso, sobre todo si hay adolescentes en la mesa.'
    ]}
  ],
  variations:[
    ['Alitas BBQ','Bañalas en la salsa barbacoa de la receta y volvé a meterlas al horno a 220 °C unos cinco minutos, para que la salsa se pegue y se caramelice. Serví con más salsa aparte.'],
    ['Alitas picantes','Seguí el horno igual y, al final, bañalas en la mezcla de manteca derretida con salsa picante de ají y vinagre explicada más arriba. Servilas con zanahoria y una salsa fría.'],
    ['En freidora de aire','Con la misma mezcla seca, cociná las alitas en una sola capa a 180 °C unos 12 minutos y después a 200 °C otros 10 a 12, sacudiendo el canasto cada tanto. Hacelas en tandas para que no se amontonen y controlá que lleguen a 74 °C.'],
    ['A la parrilla','Asalas sobre brasa media, dándolas vuelta seguido, entre 25 y 30 minutos. Pintalas con la salsa solo en los últimos cinco minutos para que no se queme.']
  ],
  storage:'Guardalas en la heladera, sin salsa si es posible, hasta tres días. Para recalentarlas y que vuelvan a crujir, usá horno a 200 °C sobre rejilla o freidora de aire unos ocho minutos. Evitá el microondas, que deja la piel blanda.',
  faq:[
    ['¿Cómo hacer alitas de pollo al horno crocantes?','Secándolas muy bien, cubriéndolas con polvo de hornear y sal, horneándolas sobre rejilla primero a 130 °C y después a 220 °C, y poniéndoles la salsa recién al final.'],
    ['¿Cuánto tiempo van las alitas al horno?','En esta receta, 30 minutos a 130 °C y unos 40 minutos a 220 °C. Con una sola temperatura alta de 220 °C tardan unos 40 a 45 minutos, pero la piel queda menos crocante.'],
    ['¿Cómo hacer alitas en freidora de aire?','Secalas, cubrilas con la mezcla seca y cocinalas en una sola capa unos 12 minutos a 180 °C y otros 10 a 12 a 200 °C, sacudiendo el canasto a mitad.'],
    ['¿Cómo se hace la salsa para alitas picantes?','Con manteca derretida, salsa picante de ají, un poco de vinagre y ajo en polvo, batidos hasta que se unan. Se vuelca sobre las alitas calientes justo antes de servir.'],
    ['¿Cómo sé si las alitas están cocidas?','Tienen que llegar a 74 °C junto al hueso. Sin termómetro, pinchá la parte más carnosa: el jugo debe salir transparente y la carne no debe verse rosada junto al hueso.'],
    ['¿Cuántas alitas de pollo por persona?','Como estimación de la redacción, entre 5 y 7 piezas por adulto si son el plato principal y 3 o 4 si forman parte de una picada.']
  ],
  related:['receta-muslos-de-pollo-al-horno','receta-costillas-de-cerdo-a-la-barbacoa','receta-pollo-frito','receta-pollo-al-horno','receta-supremas-a-la-napolitana','receta-papas-al-horno'],
  guides:['guia-cortes-de-pollo','guia-cuanta-comida-por-persona'],
  cateringOccasion:'cumpleanos'
};
