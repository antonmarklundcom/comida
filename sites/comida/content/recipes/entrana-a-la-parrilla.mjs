// Recipe module: entraña a la parrilla. Companion of corte-entrana. Shape: sites/comida/content/recipes/sopa-paraguaya.mjs
export default {
  id:'receta-entrana-a-la-parrilla', slug:'entrana-a-la-parrilla', kind:'recipe',
  published:true, indexable:true, updatedAt:'2026-09-24', verifiedAt:'2026-09-24',
  source:'Receta de la redacción de comida.com.py, basada en la práctica de parrilla del Río de la Plata y de Paraguay',
  label:'Entraña a la parrilla',
  seoTitle:'Entraña a la parrilla: receta y tiempos',
  meta:'Entraña a la parrilla jugosa en pocos minutos: brasa fuerte, cuándo salar, cómo manejar la membrana, el punto justo y el corte para que no quede chiclosa.',
  h1:'Entraña a la parrilla, jugosa y en minutos',
  cardText:'Tiras de entraña a brasa fuerte, doradas afuera y rosadas adentro.',
  course:'Plato principal', cuisine:'Casera', category:['carne','fiesta','rapida'],
  keywords:['entraña a la parrilla','entraña','cómo hacer entraña a la parrilla','entraña a la plancha','entraña jugosa'],
  intro:[
    'La entraña a la parrilla es lo contrario del asado lento: brasa bien viva, pocos minutos por lado y afuera. Esa rapidez es su ventaja, porque se puede servir como entrada mientras se terminan los cortes grandes, y también su trampa, porque un descuido corto la deja seca.',
    'Esta receta es para 6 personas con alrededor de 1,3 kilos de entraña, como plato principal. Si todavía no sabés si comprarla con membrana o pelada, o de qué parte del animal sale, mirá la guía de la entraña; acá vamos a la brasa.'
  ],
  times:{prep:15, cook:10, rest:3}, difficulty:'Media',
  yield:{mode:'porciones', base:6, options:[2,4,6,12], yieldText:'6 porciones', note:'Unos 220 g crudos por persona como plato principal. Como entrada en una parrillada, la misma cantidad alcanza para 12 a 15 personas.'},
  ingredients:[
    {group:'Para la entraña', items:[
      {q:1.3, u:'kg', item:'entraña', note:'en tiras, con o sin membrana'},
      {q:1, u:'cda', item:'sal gruesa'},
      {q:2, u:'kg', item:'carbón', note:'o leña dura; cantidad aproximada'}
    ]},
    {group:'Para la salsa criolla', items:[
      {q:2, u:'u', item:'tomates maduros', one:'tomate maduro', note:'sin semillas, en cubitos'},
      {q:1, u:'u', item:'cebolla mediana', note:'picada fina'},
      {q:0.5, u:'u', item:'locote rojo', note:'en cubitos'},
      {q:0.5, u:'u', item:'locote verde', note:'en cubitos'},
      {q:3, u:'cda', item:'vinagre'},
      {q:5, u:'cda', item:'aceite'},
      {q:null, item:'sal fina', note:'al gusto'}
    ]}
  ],
  steps:[
    {title:'Prepará la salsa criolla', text:'Juntá en un bol el tomate, la cebolla y los dos locotes. Condimentá con sal, el vinagre y el aceite, revolvé y dejá que se macere mientras hacés el fuego. Si la cebolla es fuerte, pasala antes por agua fría y escurrila.'},
    {title:'Hacé brasa fuerte', text:'Encendé bastante carbón y esperá a que esté todo cubierto de ceniza blanca. Juntá una cama gruesa debajo de la parrilla. Tiene que ser fuego alto: la mano sobre la parrilla no aguanta más de tres o cuatro segundos.', min:30},
    {title:'Calentá la parrilla', text:'Dejá la parrilla sobre las brasas unos minutos antes de apoyar la carne. Con los hierros bien calientes, la entraña marca enseguida y no se pega. Limpiá los hierros con un trapo o un poco de grasa.', min:5},
    {title:'Emparejá las tiras', text:'Secá la entraña con papel. Si alguna tira tiene un extremo muy delgado, cortalo aparte: va a necesitar menos tiempo. Si la tuya viene con membrana, dejala puesta para la parrilla; se retira al final.'},
    {title:'Salá justo antes', text:'Espolvoreá la sal gruesa sobre el lado de la carne en el último momento, cuando ya vas camino a la parrilla. La entraña es fina: salada con mucha anticipación, suelta jugo y se dora peor.'},
    {title:'Cociná el primer lado', text:'Apoyá las tiras sobre la zona más caliente. Si tienen membrana, con la membrana hacia las brasas. Dejalas quietas hasta que el borde de abajo esté bien dorado y arriba empiecen a aparecer gotitas de jugo.', min:4},
    {title:'Dalas vuelta y terminá', text:'Giralas con pinza y dejalas del otro lado un poco menos. Retiralas cuando al presionar con el dedo la carne esté elástica, no blanda: con termómetro, entre 55 y 58 °C en la parte gruesa para que quede jugosa.', min:3},
    {title:'Reposá y cortá en tiras', text:'Dejalas un par de minutos en la tabla. Si tenían membrana, sacala tirando con los dedos. Cortá cada tira en tramos cortos y después cada tramo en bastones finos, siempre cruzando las fibras. Serví con sal gruesa y la salsa criolla.', min:2}
  ],
  tips:[
    'Si la parrilla tiene altura regulable, bajala al mínimo para la entraña. Cuanto más cerca de la brasa, mejor costra en menos tiempo.',
    'Cuando hay otros cortes en la parrilla, poné la entraña al final, cuando ya está todo listo o casi. Así llega caliente y en su punto.',
    'Si alguien la quiere más cocida, dejale una tira un par de minutos más en vez de pasar toda la tanda.',
    'Una plancha o sartén de hierro muy caliente reemplaza bien a la parrilla: dos a tres minutos por lado, con apenas aceite.',
    'Una hora de marinada con ajo, limón y aceite antes de la parrilla le suma sabor sin cambiarle la textura. Secala bien antes de apoyarla en los hierros.'
  ],
  sections:[
    {title:'Cómo servir la entraña en un asado', paragraphs:[
      'En una parrillada larga, la entraña sale como entrada: cortada en bastones sobre una tabla, con pan y salsa criolla, mientras el vacío o la picaña siguen en el fuego. Así se come recién hecha, que es cuando está mejor.',
      'Si es el plato principal, acompañala con papas al horno, pan al ajo hecho sobre la misma parrilla y una ensalada fresca. La mandioca hervida y la sopa paraguaya nunca están de más en la mesa.'
    ]}
  ],
  variations:[
    ['Entraña con chimichurri','Reemplazá la salsa criolla por un chimichurri de perejil, ajo, orégano, ají molido, vinagre y aceite, hecho una hora antes.'],
    ['Entraña en fajitas','Cortada en tiras finas, servila en tortillas de trigo con locote salteado, cebolla y un poco de salsa criolla.'],
    ['Entraña a la plancha','En casa, sin parrilla, usá una plancha de hierro muy caliente y las mismas señales de punto; ventilá bien la cocina.']
  ],
  storage:'Es mejor comerla recién hecha. Si sobra, guardala entera en la heladera hasta dos días y usala fría en tiras finas para sándwiches o wraps; recalentada se endurece enseguida.',
  faq:[
    ['¿Cuántos minutos se hace la entraña a la parrilla?','Con brasa fuerte, unos cuatro minutos del primer lado y tres del segundo para una tira de 1,5 a 2 centímetros. Si tiene membrana, un minuto más del lado de la membrana.'],
    ['¿La entraña se sala antes o después de la parrilla?','Justo antes de apoyarla en los hierros, con sal gruesa. Si la salás mucho antes, la superficie se humedece y se dora menos.'],
    ['¿Qué fuego necesita la entraña?','Fuego fuerte. La mano no tiene que aguantar más de tres o cuatro segundos sobre la parrilla. A fuego suave la carne se cocina en su jugo y queda gomosa.'],
    ['¿Cómo se corta la entraña para que quede tierna?','Primero en tramos cortos y después cada tramo en tiras finas cruzando las fibras, que en la entraña corren a lo ancho de la pieza.'],
    ['¿Cuánta entraña para 6 personas?','Como estimación de la redacción, 1,3 kilos si es el plato principal. Como entrada en un asado, esa cantidad alcanza para el doble de gente.'],
    ['¿Qué acompañamiento va con la entraña?','Salsa criolla o chimichurri, pan al ajo, papas al horno y una ensalada fresca. En una mesa paraguaya, también mandioca y sopa paraguaya.']
  ],
  related:['corte-entrana','receta-vacio-a-la-parrilla','receta-picana-a-la-parrilla','receta-pan-al-ajo','receta-papas-al-horno','receta-sopa-paraguaya'],
  guides:['guia-cuanta-carne-por-persona'],
  cateringOccasion:'cumpleanos'
};
