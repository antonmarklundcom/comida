// Recipe module: costillas de cerdo a la barbacoa con salsa casera. Companion of corte-costillar-de-cerdo. Shape: sites/comida/content/recipes/sopa-paraguaya.mjs
export default {
  id:'receta-costillas-de-cerdo-a-la-barbacoa', slug:'costillas-de-cerdo-a-la-barbacoa', kind:'recipe',
  published:true, indexable:true, updatedAt:'2026-09-24', verifiedAt:'2026-09-24',
  source:'Receta de la redacción de comida.com.py, basada en la cocina casera de Paraguay y el Río de la Plata',
  label:'Costillas de cerdo a la barbacoa',
  seoTitle:'Costillas de cerdo a la barbacoa (BBQ)',
  meta:'Costillas de cerdo a la barbacoa con salsa BBQ casera: cocción lenta al horno, capas de salsa al final y terminación opcional en la parrilla.',
  h1:'Costillas de cerdo a la barbacoa con salsa casera',
  cardText:'Costillas lentas al horno, pintadas con salsa barbacoa hecha en casa.',
  course:'Plato principal', cuisine:'Casera', category:['carne','horno','fiesta'],
  keywords:['costillas de cerdo','costillas de cerdo a la barbacoa','costillas bbq','costillas de cerdo en barbacoa','costillas de cerdo al horno','salsa barbacoa casera','costillitas bbq'],

  image:84,
  intro:[
    'Las costillas de cerdo a la barbacoa son costillas cocidas despacio hasta que la carne se afloja del hueso y después cubiertas, capa por capa, con una salsa espesa, dulce, ácida y apenas ahumada. La salsa se hace en casa en veinte minutos con tomate, cebolla, azúcar negra, vinagre y especias, sin frascos comprados, y se puede ajustar más picante o más dulce.',
    'La receta está pensada para el horno de casa, con la opción de terminar las costillas sobre la parrilla para sumar humo. Con 2,5 kilos de costillas en plancha comen 6 personas. La salsa rinde de sobra: una parte va a la carne y otra se sirve aparte en la mesa.'
  ],
  times:{prep:35, cook:175, rest:10}, difficulty:'Media',
  yield:{mode:'porciones', base:6, options:[2,4,6,12], yieldText:'6 porciones', note:'Unos 400 g de costillas con hueso por persona. Para 12, dos asaderas en dos estantes, rotándolas a mitad de la cocción lenta.'},
  ingredients:[
    {group:'Para las costillas', items:[
      {q:2.5, u:'kg', item:'costillas de cerdo en plancha', note:'pechito o costilla de lomo'},
      {q:1, u:'cda', item:'sal fina'},
      {q:1, u:'cda', item:'azúcar negra'},
      {q:2, u:'cdita', item:'pimentón ahumado o dulce'},
      {q:1, u:'cdita', item:'ajo en polvo'},
      {q:1, u:'cdita', item:'mostaza en polvo o pimienta negra'},
      {q:100, u:'ml', item:'agua'}
    ]},
    {group:'Para la salsa barbacoa casera', items:[
      {q:1, u:'u', item:'cebolla', note:'picada muy fina o rallada'},
      {q:2, u:'diente', item:'ajo', note:'picados'},
      {q:1, u:'cda', item:'aceite'},
      {q:1, u:'lata', item:'puré de tomate', note:'unos 500 g, o tomate triturado'},
      {q:100, u:'g', item:'azúcar negra'},
      {q:80, u:'ml', item:'vinagre de manzana'},
      {q:2, u:'cda', item:'miel'},
      {q:1, u:'cda', item:'mostaza'},
      {q:2, u:'cda', item:'salsa inglesa'},
      {q:2, u:'cdita', item:'pimentón ahumado o dulce'},
      {q:1, u:'cdita', item:'sal fina'},
      {q:null, item:'ají molido o picante', note:'al gusto'}
    ]}
  ],
  steps:[
    {title:'Prepará las planchas', text:'Da vuelta las costillas y sacá la membrana del lado del hueso: levantala con un cuchillo sin filo en una punta y tirá con un papel de cocina. Recortá los colgajos de grasa y, si las planchas son largas, dividilas en trozos de cuatro o cinco huesos.'},
    {title:'Frotá con el condimento seco', text:'Mezclá la sal, la azúcar negra, el pimentón, el ajo en polvo y la mostaza en polvo. Espolvoreá las costillas por los dos lados y frotá con las manos. Podés hornearlas enseguida o dejarlas tapadas en la heladera hasta el día siguiente.'},
    {title:'Cociná lento y envuelto', text:'Precalentá el horno a 150 °C. Acomodá las costillas con el hueso hacia abajo en una asadera, echá el agua en el fondo y sellá con papel aluminio. A esta temperatura baja la carne se ablanda sin encogerse ni secarse.', min:150},
    {title:'Hacé la salsa barbacoa', text:'Mientras tanto, rehogá la cebolla y el ajo en el aceite hasta que estén bien blandos. Sumá el puré de tomate, la azúcar negra, el vinagre, la miel, la mostaza, la salsa inglesa, el pimentón, la sal y el ají. Cociná a fuego bajo, revolviendo seguido porque se pega, hasta que espese como un kétchup.', min:20},
    {title:'Probá la ternura', text:'Destapá una punta de la asadera y tirá de dos huesos vecinos en direcciones contrarias: si la carne se abre entre ellos con facilidad, están listas. Si todavía resisten, volvé a tapar y dales 20 o 30 minutos más. Para entonces pasaron largamente los 63 °C que pide el cerdo.'},
    {title:'Pintá en capas', text:'Subí el horno a 220 °C. Tirá el líquido de la asadera, da vuelta las costillas para que la carne quede arriba y pintalas con una capa fina de salsa. Horneá destapado diez minutos, pintá otra vez y repetí. Dos o tres capas finas forman una costra brillante; una sola capa gruesa se chorrea y se quema.', min:25},
    {title:'Reposá y cortá', text:'Dejá descansar las costillas unos minutos para que la salsa se asiente. Cortalas entre hueso y hueso y serví con la salsa que sobró, tibia, en un bol aparte.', min:10}
  ],
  tips:[
    'Separá la salsa que va a la mesa antes de empezar a pintar: el pincel que tocó la carne cruda o a medio cocer no debe volver al bol de servir.',
    'El pimentón ahumado da un sabor a humo sin parrilla. Si solo tenés pimentón dulce, la salsa sale igual de rica, algo más suave.',
    'La salsa barbacoa casera se conserva en frasco limpio en la heladera hasta dos semanas y sirve para hamburguesas, pollo o sándwiches.',
    'Con el azúcar de la salsa, el paso final es corto y hay que vigilarlo. Si los bordes se oscurecen demasiado, bajá la asadera un estante.',
    'Si vas a hacer 12 porciones, la cocción lenta se puede hacer el día anterior; al otro día solo falta la salsa y el horno fuerte, unos minutos más para que se calienten por dentro.'
  ],
  sections:[
    {title:'Terminación en la parrilla', paragraphs:[
      'Si tenés parrilla encendida, hacé el tramo lento en el horno y llevá las costillas a una brasa media, de esas que dejan apoyar la mano a un palmo unos segundos. Ponelas primero del lado del hueso, pintá la carne con salsa, y dalas vuelta a los cinco minutos. Repetí dos o tres veces, siempre con capas finas, hasta que la salsa se pegue y tome algunas marcas oscuras.',
      'Mantené las costillas lejos del fuego directo fuerte: el azúcar de la salsa se quema en segundos. Un leño o unas astillas de madera sobre la brasa suman aroma a humo, que es justamente lo que el horno no puede dar.'
    ]},
    {title:'Qué costillas pedir en la carnicería', paragraphs:[
      'Para barbacoa funciona cualquier plancha de costillas de cerdo. El pechito, de la parte baja, tiene más grasa y cartílago y es el que mejor aguanta la cocción larga. La costilla de lomo, de la parte alta, trae más carne magra y puede estar lista un poco antes. Pedí planchas enteras y no costillas cortadas de a una, que se secan en el horno.'
    ]}
  ],
  variations:[
    ['Barbacoa picante','Sumá a la salsa una o dos cucharaditas de ají picante molido y una pizca de comino. Probala antes de pintar: el picante se concentra en el horno.'],
    ['Con naranja','Reemplazá la mitad del vinagre por jugo de naranja y agregá la ralladura. Queda más frutada y menos ácida, buena para chicos.'],
    ['En olla a presión','Cociná las costillas condimentadas con medio vaso de agua unos 30 minutos desde que toma presión, dejá que baje sola y terminá en el horno a 220 °C con la salsa.']
  ],
  storage:'Las costillas ya glaseadas se guardan tapadas en la heladera hasta tres días. Calentalas envueltas en aluminio a 180 °C unos 15 minutos y destapalas al final. La salsa sola dura dos semanas en frasco limpio y también se congela.',
  faq:[
    ['¿Cómo se hace la salsa barbacoa casera?','Rehogando cebolla y ajo y cocinándolos a fuego bajo con puré de tomate, azúcar negra, vinagre, miel, mostaza, salsa inglesa y pimentón, unos 20 minutos, hasta que espese como un kétchup.'],
    ['¿Cuánto tiempo van las costillas de cerdo al horno?','En esta receta, unas dos horas y media tapadas a 150 °C y unos 25 minutos destapadas a 220 °C para pegar la salsa. Planchas muy carnosas pueden necesitar media hora más.'],
    ['¿A qué temperatura se cocinan las costillas de cerdo?','El cerdo está seguro desde los 63 °C con reposo, pero las costillas se ablandan recién bastante más arriba, cerca de 90 °C adentro. Por eso se cocinan largo y a temperatura baja.'],
    ['¿Las costillas bbq se pueden hacer solo a la parrilla?','Sí, con fuego indirecto y brasa suave durante unas tres horas, reponiendo brasa cada tanto. La salsa se pinta recién en la última media hora para que no se queme.'],
    ['¿Cuándo pongo la salsa barbacoa a las costillas?','Al final, cuando la carne ya está tierna. Si la ponés desde el principio, el azúcar se quema antes de que las costillas se ablanden.'],
    ['¿Cuántas costillas de cerdo por persona?','Como estimación de la redacción, unos 400 g con hueso si son el plato principal, y la mitad si hay otras carnes.']
  ],
  related:['corte-costillar-de-cerdo','receta-costillar-de-cerdo-al-horno','receta-panceta-crocante','receta-bondiola-desmechada','receta-papas-al-horno','receta-alitas-de-pollo-al-horno'],
  guides:['guia-cortes-de-cerdo','guia-cuanta-carne-por-persona'],
  cateringOccasion:'cumpleanos'
};
