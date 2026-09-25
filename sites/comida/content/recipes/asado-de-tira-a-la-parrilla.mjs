// Recipe module: asado de tira (costilla vacuna en tiras) a la parrilla. Companion of corte-costilla-de-vaca. Shape: sites/comida/content/recipes/sopa-paraguaya.mjs
export default {
  id:'receta-asado-de-tira-a-la-parrilla', slug:'asado-de-tira-a-la-parrilla', kind:'recipe',
  published:true, indexable:true, updatedAt:'2026-09-24', verifiedAt:'2026-09-24',
  source:'Receta de la redacción de comida.com.py, basada en la práctica de parrilla del Río de la Plata y de Paraguay',
  label:'Asado de tira a la parrilla',
  seoTitle:'Asado de tira a la parrilla: costilla',
  meta:'Asado de tira a la parrilla: cómo elegir la costilla para asado, cuánto tiempo del lado del hueso, cuándo darla vuelta y con qué servirla. Con mandioca.',
  h1:'Asado de tira a la parrilla: la costilla de vaca, bien dorada',
  cardText:'Tiras de costilla vacuna hechas despacio, primero del lado del hueso, con mandioca hervida.',
  course:'Plato principal', cuisine:'Paraguaya', category:['carne','fiesta','paraguaya'],
  keywords:['asado de tira','asado de tira a la parrilla','costilla para asado','costilla de vaca a la parrilla','costilla a la parrilla','tiempo de asado de tira'],
  image:12,
  intro:[
    'El asado de tira es la costilla vacuna cortada con sierra de través, en tiras que muestran varios huesitos en fila con carne y grasa entre ellos. En un asado paraguayo la costilla es casi obligatoria, y esta forma de cortarla es la más cómoda para la parrilla de casa: se cocina en menos de una hora y cada tira se reparte en porciones con uno o dos huesos.',
    'El secreto es la paciencia del lado del hueso. El hueso hace de escudo, la grasa de adentro se derrite de a poco y la carne queda húmeda. Las cantidades son para 6 personas e incluyen una fuente de mandioca hervida, el acompañamiento que nunca sobra.'
  ],
  times:{prep:20, cook:60, rest:5}, difficulty:'Fácil',
  yield:{mode:'porciones', base:6, options:[2,4,6,12], yieldText:'6 porciones', note:'Estimación de la redacción: unos 450 g de costilla con hueso por persona si es la carne principal. En un asado con chorizo y otros cortes, calculá bastante menos.'},
  ingredients:[
    {group:'Para la costilla', items:[
      {q:2.7, u:'kg', item:'asado de tira', note:'tiras de 3 a 4 cm de ancho'},
      {q:3, u:'cda', item:'sal gruesa'},
      {q:3, u:'kg', item:'carbón', note:'o leña dura; cantidad aproximada'}
    ]},
    {group:'Para la mandioca', items:[
      {q:1.5, u:'kg', item:'mandioca', note:'pelada, en trozos'},
      {q:1, u:'cda', item:'sal fina'}
    ]}
  ],
  steps:[
    {title:'Elegí y revisá las tiras', text:'Buscá tiras de ancho parejo, con carne roja entre los huesos y una grasa blanca, no amarillenta. Pasá los dedos por el borde para quitar astillas de hueso que deja la sierra y secalas con papel de cocina.'},
    {title:'Prendé un fuego generoso', text:'La costilla necesita más brasa que un corte sin hueso porque se cocina más tiempo. Encendé el carbón a un costado y, cuando esté cubierto de ceniza, repartí una capa pareja bajo la parrilla. Guardá un montón encendido al costado para reponer.', min:35},
    {title:'Poné la mandioca a hervir', text:'Mientras se hace el fuego, cubrí la mandioca con agua fría en una olla, salá y cociná a fuego medio hasta que un cuchillo entre sin resistencia y los trozos empiecen a abrirse. Escurrila y mantenela tapada al lado de la parrilla.', min:30},
    {title:'Salá y apoyá con el hueso abajo', text:'Espolvoreá sal gruesa en las dos caras justo antes de cocinar. Poné las tiras con el hueso hacia las brasas, a una altura en la que puedas mantener la mano unos ocho segundos sobre la parrilla.'},
    {title:'Esperá del lado del hueso', text:'Dejalas quietas hasta que la carne de arriba cambie de color casi hasta la mitad del espesor y veas gotitas de jugo en la superficie. Es la parte larga: si la grasa gotea y hace llama, retirá un poco de brasa de ese punto.', min:40},
    {title:'Dalas vuelta una sola vez', text:'Girá las tiras con la pinza y dorá el lado de la carne a fuego un poco más vivo, sumando brasas si hace falta. Buscás una superficie marrón y crocante, no negra.', min:15},
    {title:'Comprobá que esté hecha', text:'La costilla se come más cocida que un bife: la grasa entre las capas tiene que estar transparente y blanda, y la carne se tiene que separar del hueso tirando apenas con el tenedor. Si todavía se resiste, dejala unos minutos más del lado del hueso.'},
    {title:'Cortá entre los huesos y serví', text:'Pasá las tiras a una tabla y dejalas un par de minutos. Cortá entre hueso y hueso en porciones de dos o tres huesitos y serví enseguida con la mandioca caliente.', min:5}
  ],
  tips:[
    'Pedí tiras de tres a cuatro centímetros de ancho. Las muy finas, que algunos llaman banderita, se secan antes de dorarse si el fuego no es fuerte.',
    'Evitá darla vuelta varias veces: cada giro enfría la superficie y la costilla termina gris en lugar de dorada.',
    'Si tenés más tiras de las que entran, cocinalas en tandas y mantené las primeras del lado del hueso en un borde de la parrilla con poca brasa.',
    'La sal gruesa sobre el hueso también cuenta: se disuelve con la grasa que gotea y sazona desde abajo.',
    'Reponé brasas por los costados y empujalas con la pala: tirar carbón nuevo justo debajo de la carne levanta humo y ceniza.'
  ],
  sections:[
    {title:'Asado de tira, costilla entera o banderita', paragraphs:[
      'El mismo costillar de la vaca se vende de varias formas y los nombres cambian de carnicería en carnicería. Asado de tira es el costillar cortado de través con sierra, en tiras largas y angostas. La costilla entera, o costillar, es la plancha completa de huesos que se hace a la estaca o en parrilla durante horas. La banderita es una tira muy fina, de dos dedos o menos, que se cocina en pocos minutos.',
      'Si en el mostrador pedís costilla para asado, conviene aclarar la forma: decí cuántos centímetros de ancho querés y si preferís la parte del medio del costillar, que tiene más carne, o las puntas, que tienen más grasa y cartílago. Un buen carnicero corta a pedido.'
    ]},
    {title:'La mesa del asado de tira', paragraphs:[
      'La costilla dorada va bien con mandioca, sopa paraguaya y una ensalada de tomate y cebolla. Para un almuerzo largo de domingo, se sirve después del chorizo y la morcilla, como plato fuerte, y el pan casero ayuda a aprovechar el jugo de la tabla.',
      'Si la reunión es grande, hacé la mandioca en dos ollas y ofrecé también papas al horno: se preparan antes y esperan en el horno apagado sin perder calidad.'
    ]}
  ],
  variations:[
    ['Costillar entero a fuego lento','Con la plancha entera, el tiempo del lado del hueso pasa a ser de dos a tres horas, con fuego bajo y constante. Se da vuelta al final solo para dorar la carne. Pide más carbón y más paciencia, pero la carne se deshace.'],
    ['Asado de tira al horno','Horno a 180 °C, tiras con el hueso hacia abajo sobre una rejilla con una asadera debajo. Unos 60 a 70 minutos, y los últimos 10 a 220 °C para dorar la carne.'],
    ['Con chimichurri de locote','Sumá al chimichurri clásico medio locote rojo picado muy fino. Aporta un toque dulce que contrasta con la grasa de la costilla.']
  ],
  storage:'La costilla que sobra se guarda en la heladera hasta tres días. Separá la carne del hueso y usala en un guiso, un reviro o empanadas; recalentada entera en la parrilla o en el horno pierde jugosidad.',
  faq:[
    ['¿Cuánto tiempo se cocina el asado de tira a la parrilla?','Para tiras de tres a cuatro centímetros, alrededor de 40 minutos del lado del hueso y unos 15 del lado de la carne, a fuego medio. Las tiras más finas tardan bastante menos.'],
    ['¿El asado de tira se pone primero del lado del hueso?','Sí. El hueso protege la carne del calor directo y permite que la grasa de adentro se derrita sin que la superficie se queme. Se da vuelta una sola vez, al final.'],
    ['¿Qué costilla es mejor para asado?','Para la parrilla de casa, el asado de tira de tres a cuatro centímetros de ancho, de la parte central del costillar. Las tiras parejas se cocinan al mismo tiempo.'],
    ['¿Cuánta costilla por persona para un asado?','Como estimación de la redacción, unos 450 g con hueso por persona si la costilla es la carne principal. Con chorizo y otros cortes, entre 250 y 300 g con hueso suelen alcanzar.'],
    ['¿Cuándo se sala el asado de tira?','Justo antes de ponerlo en la parrilla, en las dos caras, con sal gruesa. Salado con mucha anticipación larga líquido y cuesta dorarlo.'],
    ['¿Por qué la costilla me quedó dura?','Por lo general por fuego demasiado fuerte y tiempo corto: la grasa y el tejido entre los huesos no llegaron a ablandarse. Bajá el fuego y dale más tiempo del lado del hueso.']
  ],
  related:['corte-costilla-de-vaca','receta-vacio-a-la-parrilla','receta-picana-a-la-parrilla','receta-entrana-a-la-parrilla','receta-sopa-paraguaya','receta-papas-al-horno'],
  guides:['guia-cuanta-carne-por-persona','guia-asado-a-la-parrilla','guia-cortes-de-carne-vacuna'],
  cateringOccasion:'cumpleanos'
};
