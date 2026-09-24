// Recipe module: picaña a la parrilla. Companion of corte-picana. Shape: sites/comida/content/recipes/sopa-paraguaya.mjs
export default {
  id:'receta-picana-a-la-parrilla', slug:'picana-a-la-parrilla', kind:'recipe',
  published:true, indexable:true, updatedAt:'2026-09-24', verifiedAt:'2026-09-24',
  source:'Receta de la redacción de comida.com.py, basada en la práctica de parrilla del Río de la Plata y de Paraguay',
  label:'Picaña a la parrilla',
  seoTitle:'Picaña a la parrilla: receta paso a paso',
  meta:'Picaña a la parrilla entera y jugosa: cómo armar el fuego, cuándo dar vuelta, a qué temperatura sacarla, cómo cortarla y un chimichurri casero.',
  h1:'Picaña a la parrilla, entera y jugosa',
  cardText:'La tapa de cuadril entera, con la grasa dorada y el centro rosado.',
  course:'Plato principal', cuisine:'Casera', category:['carne','fiesta'],
  keywords:['picaña a la parrilla','picaña','picana a la parrilla','cómo hacer picaña a la parrilla','picaña entera a la parrilla'],
  image:23,
  intro:[
    'Esta es la receta para llevar una picaña entera desde la heladera hasta la tabla de cortar: fuego medio, primero del lado de la grasa, un solo giro y un reposo corto antes de cortar en láminas. El resultado es una costra de grasa tostada y una carne rosada y tierna que casi no necesita más que sal.',
    'Las cantidades están pensadas para 6 personas con una picaña grande o dos medianas. Si querés saber de qué parte sale el corte y cómo elegirlo en la carnicería, mirá la guía de la picaña; acá vamos directo al fuego.'
  ],
  times:{prep:20, cook:50, rest:8}, difficulty:'Media',
  yield:{mode:'porciones', base:6, options:[2,4,6,12], yieldText:'6 porciones', note:'Unos 270 g crudos por persona si la picaña es la única carne; con otros cortes en la parrilla alcanza para más gente.'},
  ingredients:[
    {group:'Para la carne', items:[
      {q:1.6, u:'kg', item:'picaña', note:'una pieza grande o dos medianas, con su tapa de grasa'},
      {q:2, u:'cda', item:'sal gruesa'},
      {q:2, u:'kg', item:'carbón', note:'o leña dura; cantidad aproximada'}
    ]},
    {group:'Para el chimichurri', items:[
      {q:1, u:'atado', item:'perejil', note:'solo las hojas, picadas finas'},
      {q:3, u:'diente', item:'ajo', note:'picado bien chico'},
      {q:1, u:'cda', item:'orégano seco'},
      {q:1, u:'cdita', item:'ají molido'},
      {q:60, u:'ml', item:'vinagre de vino'},
      {q:120, u:'ml', item:'aceite'},
      {q:null, item:'sal fina', note:'al gusto'}
    ]}
  ],
  steps:[
    {title:'Prepará el chimichurri antes que el fuego', text:'Mezclá en un frasco el perejil, el ajo, el orégano y el ají molido. Agregá el vinagre, una pizca de sal y por último el aceite. Tapalo y dejalo a temperatura ambiente mientras se hace la carne: en ese rato los sabores se asientan.'},
    {title:'Templá la picaña', text:'Sacá la carne de la heladera media hora antes y secala con papel de cocina. Una pieza que entra helada al fuego se dora por fuera mucho antes de que el centro se entibie.', min:30},
    {title:'Encendé el carbón', text:'Prendé el carbón o la leña en un costado de la parrilla y esperá a que las brasas se cubran de ceniza blanca. Distribuí una cama pareja y dejá la parrilla encima para que se caliente. La señal de fuego medio: aguantás la mano sobre la parrilla unos seis u ocho segundos.', min:35},
    {title:'Hacé cortes sobre la grasa y salá', text:'Con un cuchillo filoso, trazá líneas cruzadas sobre la tapa de grasa, cuidando de no llegar a la carne. Esos surcos ayudan a que la grasa se derrita pareja. Frotá la sal gruesa por todos lados justo antes de llevarla al fuego.'},
    {title:'Empezá con la grasa hacia las brasas', text:'Apoyá la picaña con la tapa de grasa hacia abajo, en una zona sin brasas directamente debajo. Si la grasa gotea y levanta llama, corré la pieza unos centímetros o apartá un poco de brasa. Tiene que dorarse, no quemarse.', min:22},
    {title:'Dala vuelta una sola vez', text:'Cuando la grasa esté tostada y la carne empiece a mostrar jugo arriba, girala con una pinza, sin pincharla. Del lado de la carne necesita un tiempo parecido o un poco menor, según el grosor de la pieza.', min:18},
    {title:'Controlá el punto', text:'Con termómetro, sacala a 52 a 54 °C en la parte más gruesa si la querés jugosa, o a 57 a 58 °C si la preferís a punto: durante el reposo sube unos grados. Sin termómetro, presioná el centro: si cede blando pero vuelve, está jugosa.'},
    {title:'Dejala reposar', text:'Pasala a una tabla con canaleta, tapala sin apretar con papel aluminio y esperá unos minutos. Así los jugos se reacomodan y no terminan en la tabla apenas cortás.', min:8},
    {title:'Cortá y serví', text:'Buscá la dirección de las vetas y cortá láminas de un dedo de grosor en sentido contrario, con la grasa incluida en cada feta. Serví enseguida, con sal gruesa por encima y el chimichurri aparte.'}
  ],
  tips:[
    'Si tenés dos picañas medianas, cocinalas juntas pero sacá primero la más fina: suele estar unos diez minutos antes.',
    'Dejá la grasa entera en crudo. Quien no la quiera la separa en el plato; en la parrilla es lo que mantiene húmeda la carne.',
    'Tené a mano un balde con brasas nuevas encendidas aparte: si el fuego baja a mitad de cocción, agregá de a poco por los costados, nunca debajo de la carne.',
    'Las puntas finas del triángulo quedan más cocidas que el centro. Guardalas para quien pida la carne bien hecha.',
    'Un termómetro de pinchar se amortiza en pocos asados: con un corte caro, adivinar sale más caro.'
  ],
  sections:[
    {title:'Picaña en U o entera: qué cambia en esta receta', paragraphs:[
      'La versión de arriba es la entera, la más cómoda para una parrilla de casa porque perdona unos minutos de distracción. Si querés probar la forma brasileña, cortá la pieza en bifes de tres dedos a favor de la fibra, doblalos con la grasa hacia afuera y ensartalos en una espada. Van a fuego más fuerte y se cortan por capas a medida que se doran.',
      'Con cualquiera de las dos formas, la mesa típica suma mandioca hervida, sopa paraguaya y alguna ensalada fresca. Papas al horno o una ensalada de papa también acompañan bien si la reunión es más grande.'
    ]}
  ],
  variations:[
    ['Picaña con costra de ajo','Antes de salar, untá la tapa de grasa con ajo machacado y un poco de aceite. Se dora junto con la grasa y perfuma toda la pieza.'],
    ['Al horno cuando llueve','Horno fuerte, a 200 °C, con la grasa hacia arriba sobre una rejilla y una asadera debajo. Controlá el punto con el mismo criterio de temperatura.'],
    ['Picaña a la plancha','Cortá bifes de dos dedos contra la fibra y doralos en una plancha de hierro muy caliente, unos tres minutos por lado.']
  ],
  storage:'Lo que sobre, guardalo entero y bien envuelto en la heladera hasta tres días. Cortalo frío en fetas finas para sándwiches, o calentalo apenas en sartén caliente, sin pasarlo, para no secarlo.',
  faq:[
    ['¿A qué temperatura se saca la picaña de la parrilla?','Para una picaña jugosa, retirala entre 52 y 54 °C en el centro; con el reposo termina cerca de 55 a 57 °C. A punto, retirala a 57 o 58 °C.'],
    ['¿Se sala la picaña antes o después?','Justo antes de ponerla al fuego, con sal gruesa por todos lados. Si la salás muy temprano, la sal saca jugo a la superficie y cuesta más dorarla.'],
    ['¿Qué fuego necesita la picaña a la parrilla?','Fuego medio y parejo. La prueba casera es la mano: sobre la parrilla tenés que poder sostenerla unos seis a ocho segundos sin quemarte.'],
    ['¿Cuánta picaña compro para 6 personas?','Como estimación de la redacción, alrededor de 1,6 kilos si es la única carne. En un asado con chorizo y otros cortes, con 1 kilo suele alcanzar.'],
    ['¿Qué salsa va con la picaña?','La más común es el chimichurri, pero también la salsa criolla de tomate, cebolla y locote. Muchos la prefieren solo con sal gruesa.'],
    ['¿Por qué la picaña me quedó dura?','Casi siempre por cortarla a favor de la fibra o por pasarla de punto. Mirá las vetas antes de cortar y retirala del fuego apenas llega a la temperatura.']
  ],
  related:['corte-picana','receta-vacio-a-la-parrilla','receta-entrana-a-la-parrilla','receta-papas-al-horno','receta-sopa-paraguaya','receta-ensalada-de-papa'],
  guides:['guia-cuanta-carne-por-persona'],
  cateringOccasion:'cumpleanos'
};
