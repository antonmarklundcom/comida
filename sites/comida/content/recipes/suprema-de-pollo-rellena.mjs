// Recipe module: suprema de pollo rellena. Companion of guia-cortes-de-pollo. Shape: sites/comida/content/recipes/sopa-paraguaya.mjs
export default {
  id:'receta-suprema-de-pollo-rellena', slug:'suprema-de-pollo-rellena', kind:'recipe',
  published:true, indexable:true, updatedAt:'2026-09-24', verifiedAt:'2026-09-24',
  source:'Receta de la redacción de comida.com.py, basada en la cocina casera de Paraguay y el Río de la Plata',
  label:'Suprema de pollo rellena',
  seoTitle:'Suprema de pollo rellena al horno',
  meta:'Suprema de pollo rellena de jamón y queso: cómo abrir el bolsillo, sellarla en sartén y terminarla al horno jugosa, a 74 °C. Con salsa de crema.',
  h1:'Suprema de pollo rellena de jamón y queso',
  cardText:'Supremas con bolsillo de jamón y queso, doradas en sartén y terminadas al horno.',
  course:'Plato principal', cuisine:'Casera', category:['pollo','horno'],
  keywords:['suprema de pollo','suprema rellena','suprema de pollo rellena','receta con suprema de pollo','suprema de pollo al horno','suprema de pollo a la crema'],
  intro:[
    'La suprema de pollo es la pechuga deshuesada y sin piel, cortada en dos medias piezas. Rellena, se convierte en un plato de fiesta con muy poco trabajo: se le abre un bolsillo por el costado, se mete jamón y queso, se dora en sartén para que tome color y se termina en el horno hasta que el centro está cocido y el queso, fundido.',
    'Esta receta calcula una suprema grande por persona, de unos 220 gramos. Explica cómo hacer el corte para que el relleno no se escape, en qué momento está cocida sin quedar seca y una salsa de crema rápida con el fondo de la sartén. Al final hay variaciones con queso Paraguay, espinaca o mostaza.'
  ],
  times:{prep:25, cook:25, rest:5}, difficulty:'Media',
  yield:{mode:'porciones', base:6, options:[2,4,6,12], yieldText:'6 porciones', note:'Una suprema grande por persona. Para 12, dorá en tandas y horneá en dos asaderas.'},
  ingredients:[
    {group:'Para las supremas', items:[
      {q:6, u:'u', item:'supremas de pollo', one:'suprema de pollo', note:'grandes y gruesas, de unos 220 g'},
      {q:1, u:'cdita', item:'sal fina'},
      {q:1, u:'cdita', item:'pimentón dulce'},
      {q:1, u:'cdita', item:'ajo en polvo'},
      {q:null, item:'pimienta negra molida', note:'al gusto'},
      {q:2, u:'cda', item:'aceite'}
    ]},
    {group:'Para el relleno', items:[
      {q:6, u:'feta', item:'jamón cocido'},
      {q:250, u:'g', item:'queso de máquina o mozzarella', note:'en bastones o fetas'},
      {q:2, u:'cda', item:'perejil picado'}
    ]},
    {group:'Para la salsa', items:[
      {q:1, u:'u', item:'cebolla chica', note:'picada fina'},
      {q:1, u:'cda', item:'manteca'},
      {q:150, u:'ml', item:'caldo de pollo'},
      {q:200, u:'ml', item:'crema de leche'},
      {q:1, u:'cdita', item:'mostaza', note:'opcional'}
    ]}
  ],
  steps:[
    {title:'Abrí el bolsillo', text:'Apoyá cada suprema sobre la tabla y, con un cuchillo fino, hacé un corte horizontal por el costado más grueso, avanzando hacia adentro sin atravesar los otros tres lados. La idea es un bolsillo profundo con una sola abertura, no un libro abierto.'},
    {title:'Condimentá por fuera', text:'Mezclá la sal, el pimentón, el ajo en polvo y la pimienta, y espolvoreá las supremas por fuera. Adentro del bolsillo no hace falta sal: el jamón y el queso ya la aportan.'},
    {title:'Rellená sin llenar de más', text:'Doblá una feta de jamón alrededor de un bastón de queso, sumá un poco de perejil y metelo hasta el fondo del bolsillo. Tiene que quedar un borde libre de un dedo. Cerrá la abertura con uno o dos palillos pinchados en diagonal.'},
    {title:'Encendé el horno', text:'Precalentá el horno a 200 °C y tené lista una asadera o fuente apta para horno. Las supremas se doran primero en la sartén y pasan enseguida al horno, así que conviene que ya esté caliente.'},
    {title:'Sellá en la sartén', text:'Calentá el aceite en una sartén grande a fuego medio-alto. Dorá las supremas, sin amontonarlas, hasta que tengan costra dorada de los dos lados. En este paso no se cocinan por dentro: solo toman color y sabor. No laves la sartén.', min:6},
    {title:'Terminá en el horno', text:'Pasalas a la asadera y horneá hasta que la parte más gruesa llegue a 74 °C. Sin termómetro, cortá una por el lado del relleno: la carne junto al queso tiene que estar blanca, sin brillo rosado, y el jugo salir transparente.', min:18},
    {title:'Hacé la salsa en la misma sartén', text:'Mientras se hornean, derretí la manteca en la sartén donde doraste el pollo y rehogá la cebolla hasta que esté transparente. Agregá el caldo y raspá el fondo con una cuchara de madera para despegar lo dorado. Sumá la crema y la mostaza y herví suave hasta que la salsa espese un poco.', min:6},
    {title:'Reposá y serví', text:'Dejá reposar las supremas cinco minutos fuera del horno, retirá los palillos y cortá cada una en diagonal para que se vea el relleno. Serví con la salsa por encima o al lado.', min:5}
  ],
  tips:[
    'Elegí supremas gruesas: en una pieza fina no entra el relleno y se rompe al abrirla. Si solo conseguís finas, hacé la variación enrollada.',
    'El queso de máquina o la mozzarella en bastón se funden sin chorrear tanto como el rallado. Dejar un borde libre en el bolsillo evita que se escape en el horno.',
    'No pinches las supremas mientras se doran ni las muevas seguido: la costra se forma cuando la carne queda quieta contra la sartén.',
    'Retirá las supremas de la heladera veinte minutos antes de cocinarlas. Si entran heladas, el centro tarda más que la superficie y se resecan por fuera.',
    'Un termómetro de pinche es la mejor inversión para el pollo: sacarlo apenas llega a 74 °C es lo que lo mantiene jugoso.'
  ],
  sections:[
    {title:'Qué es una suprema de pollo', paragraphs:[
      'En la carnicería y en los menús de Paraguay y el Río de la Plata se llama suprema a cada mitad de la pechuga, sin hueso y sin piel. Algunas vienen con el filet pegado, esa tira fina que se despega sola de la parte de abajo; para rellenar conviene retirarlo y guardarlo para un salteado, así la pieza queda más pareja.',
      'Como es un corte magro y se cocina rápido, la suprema pide un método que la proteja: relleno, rebozado o una salsa. Si querés conocer el resto de los cortes del pollo y para qué sirve cada uno, están en la guía de cortes de pollo.'
    ]},
    {title:'Con qué acompañarla', paragraphs:[
      'La salsa de crema pide algo que la absorba: puré de papas, arroz blanco o fideos cortos con manteca. Para una mesa más liviana, van bien unos zapallitos salteados o una ensalada de hojas verdes con tomate. En una cena de fin de año, la suprema rellena cortada en rodajas se sirve fría o tibia en una fuente, como alternativa al vitel toné.'
    ]}
  ],
  variations:[
    ['Enrollada','Aplastá las supremas finas entre dos hojas de film hasta un centímetro, poné el jamón y el queso encima, enrollalas bien apretadas y atalas con hilo. Doralas y hornealas igual, unos minutos más.'],
    ['Con queso Paraguay y locote','Rellená con láminas de queso Paraguay y tiritas de locote rojo salteado. El queso Paraguay se ablanda sin derretirse del todo y aporta sal, así que no salés el relleno.'],
    ['A la mostaza, sin crema','Reemplazá la crema por medio vaso más de caldo y dos cucharadas de mostaza. Reducí hasta que la salsa brille; queda más liviana y ácida.']
  ],
  storage:'Guardalas en la heladera en un recipiente cerrado, con la salsa aparte, hasta tres días. Para recalentarlas, horno a 170 °C tapadas con aluminio unos 12 minutos; la salsa, a fuego bajo con una cucharada de leche si se espesó.',
  faq:[
    ['¿Qué es una suprema de pollo?','Es cada una de las dos mitades de la pechuga del pollo, sin hueso ni piel. Es la pieza que se usa para milanesas, supremas rellenas y a la napolitana.'],
    ['¿Cuánto tiempo va la suprema rellena al horno?','Después de dorarla en sartén, unos 15 a 20 minutos a 200 °C, según el grosor. Está lista cuando la parte más gruesa llega a 74 °C.'],
    ['¿Con qué se puede rellenar una suprema de pollo?','Con jamón y queso, queso Paraguay y locote, espinaca con queso crema, o champiñones salteados. Conviene que el relleno no sea muy líquido para que no se escape.'],
    ['¿Cómo hacer para que la suprema rellena no quede seca?','Dorala rápido en sartén caliente, terminala en horno moderado y sacala apenas llega a 74 °C. Dejala reposar cinco minutos antes de cortarla.'],
    ['¿Cómo se hace la suprema de pollo a la crema?','Con la misma sartén donde se doró el pollo: cebolla rehogada en manteca, caldo para despegar el fondo y crema de leche hervida suave hasta que espese.'],
    ['¿Se puede preparar la suprema rellena con anticipación?','Sí, podés rellenarla y cerrarla unas horas antes y guardarla tapada en la heladera. Dorala y horneala justo antes de comer.']
  ],
  related:['receta-supremas-a-la-napolitana','receta-pechuga-de-pollo','receta-milanesas','receta-pollo-a-la-mostaza','receta-alitas-de-pollo-al-horno','receta-vitel-tone'],
  guides:['guia-cortes-de-pollo','guia-cuanta-comida-por-persona'],
  cateringOccasion:'fin-de-ano'
};
