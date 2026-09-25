// Recipe module: tapa de cuadril al horno. Companion of corte-tapa-de-cuadril. Shape: sites/comida/content/recipes/sopa-paraguaya.mjs
export default {
  id:'receta-tapa-de-cuadril-al-horno', slug:'tapa-de-cuadril-al-horno', kind:'recipe',
  published:true, indexable:true, updatedAt:'2026-09-24', verifiedAt:'2026-09-24',
  source:'Receta de la redacción de comida.com.py, basada en la cocina casera paraguaya y rioplatense',
  label:'Tapa de cuadril al horno',
  seoTitle:'Tapa cuadril al horno con papas',
  meta:'Tapa de cuadril al horno jugosa: sellada en sartén, asada sobre papas que se doran en su grasa, con tiempos, temperatura interna y cómo cortarla.',
  h1:'Tapa de cuadril al horno con papas doradas en su grasa',
  cardText:'La tapa de cuadril sellada y asada sobre papas, rosada adentro y con la grasa crocante.',
  course:'Plato principal', cuisine:'Casera', category:['carne','horno','fiesta'],
  keywords:['tapa cuadril al horno','tapa de cuadril al horno','tapa cuadril','tapa de cuadril','picaña al horno','tapa de cuadril con papas'],
  intro:[
    'La tapa de cuadril es la pieza triangular con una capa gruesa de grasa que en Paraguay muchos piden como picaña. En el horno rinde igual de bien que en la parrilla si se respeta una idea: primero derretir y dorar la grasa en una sartén caliente, después terminar la carne a temperatura moderada hasta que el centro quede rosado. Las papas van debajo y se cocinan en la grasa que suelta la pieza.',
    'La receta es para 6 personas con una tapa de cuadril grande, de alrededor de 1,8 kilos. Es un plato de domingo que se puede dejar listo para meter al horno mientras llegan los invitados, y lo que sobra se aprovecha frío en fetas finas.'
  ],
  times:{prep:30, cook:65, rest:10}, difficulty:'Media',
  yield:{mode:'porciones', base:6, options:[2,4,6,12], yieldText:'6 porciones', note:'Estimación de la redacción: unos 300 g de carne cruda por persona con papas de guarnición. Para 2 personas buscá una pieza chica o media tapa; para 12, dos piezas en dos asaderas.'},
  ingredients:[
    {group:'Para la carne', items:[
      {q:1.8, u:'kg', item:'tapa de cuadril', note:'entera, con su capa de grasa'},
      {q:2, u:'cda', item:'sal gruesa'},
      {q:4, u:'diente', item:'ajo', note:'machacados'},
      {q:2, u:'rama', item:'romero', note:'solo las hojas, picadas'},
      {q:1, u:'cda', item:'mostaza'},
      {q:1, u:'cdita', item:'pimienta negra molida'},
      {q:2, u:'cda', item:'aceite'}
    ]},
    {group:'Para las papas', items:[
      {q:1.2, u:'kg', item:'papas', note:'medianas, en gajos con cáscara'},
      {q:2, u:'u', item:'cebollas', one:'cebolla', note:'en cuartos'},
      {q:1, u:'cdita', item:'sal fina'},
      {q:null, item:'pimentón dulce', note:'al gusto'}
    ]}
  ],
  steps:[
    {title:'Sacá la carne con tiempo', text:'Retirá la tapa de cuadril de la heladera unos 40 minutos antes de empezar y secala bien con papel de cocina. Con la punta de un cuchillo, marcá la grasa en rombos de dos centímetros sin tocar la carne de abajo.', min:40},
    {title:'Prepará la pasta de ajo y romero', text:'Mezclá en un platito el ajo, el romero, la mostaza, la pimienta y el aceite. Untá esa pasta solo en la cara de carne y en los costados; la grasa recibe únicamente sal gruesa, porque el ajo sobre la grasa se quema en la sartén.'},
    {title:'Hervé apenas las papas', text:'Encendé el horno a 220 °C. Poné los gajos de papa en agua fría con sal, llevá a hervor y contá unos minutos: tienen que quedar firmes, con los bordes un poco ásperos. Escurrilos y dejalos humear para que se sequen.', min:8},
    {title:'Derretí la grasa en la sartén', text:'Calentá una sartén grande de hierro o de fondo grueso a fuego medio, sin aceite. Apoyá la pieza con la grasa hacia abajo y dejala hasta que esté dorada y haya soltado bastante grasa líquida. Después sellá un minuto cada costado de carne.', min:8},
    {title:'Armá la asadera', text:'Volcá la grasa derretida de la sartén en la asadera, sumá las papas y la cebolla, salá y espolvoreá pimentón si te gusta. Revolvé para que todo quede brillante y dejá un hueco en el centro para la carne, con la grasa hacia arriba.'},
    {title:'Horno fuerte al comienzo', text:'Llevá la asadera a la parte media del horno a 220 °C. Ese primer golpe de calor termina de tostar la grasa y hace que las papas empiecen a tomar color.', min:15},
    {title:'Bajá el horno y controlá el centro', text:'Bajá a 180 °C y seguí hasta que el termómetro marque 52 a 54 °C en la parte más gruesa para una carne jugosa, o 57 a 58 °C para a punto. Una pieza de este tamaño suele tardar entre 25 y 35 minutos más, según su grosor.', min:30},
    {title:'Reposo de la carne, último dorado de las papas', text:'Pasá la carne a una tabla y cubrila con papel aluminio flojo. Mientras reposa, subí el horno a 220 °C, revolvé las papas y devolvelas al horno para que queden crocantes.', min:10},
    {title:'Cortá fino y contra la veta', text:'Mirá hacia dónde corren las fibras y cortá fetas finas en sentido contrario, cada una con su borde de grasa. Acomodalas sobre las papas y bañalas con el jugo que quedó en la tabla.'}
  ],
  tips:[
    'La sartén tiene que estar caliente pero no humeante: si la grasa se quema antes de derretirse, queda amarga y ennegrece las papas.',
    'Si tu horno calienta más de un lado, girá la asadera a mitad de la cocción; la punta fina del triángulo es la que primero se pasa.',
    'Sin termómetro, pinchá el centro con un palillo de metal y apoyalo en el dorso de la muñeca: tibio es jugoso, caliente es bien cocido. Es menos preciso, pero sirve.',
    'Evitá tapar la asadera con aluminio durante el horno: la carne se cocina al vapor y la grasa queda blanda.',
    'Para una mesa grande, dos piezas medianas en lugar de una enorme se cocinan más parejas y te dan dos puntos distintos para distintos gustos.'
  ],
  sections:[
    {title:'Tapa de cuadril, picaña y colita: cómo pedirla', paragraphs:[
      'En muchas carnicerías del país la tapa de cuadril y la picaña son la misma pieza con dos nombres: el músculo que cubre la parte de arriba del cuadril, con su capa de grasa entera. En otras, el carnicero llama tapa de cuadril a una pieza más grande que incluye parte del músculo vecino. Para esta receta pedí la pieza triangular con grasa pareja de un dedo de espesor y que no pase de dos kilos.',
      'La colita de cuadril es otro corte, el extremo más bajo del cuadril, con menos grasa y forma de lágrima. Se cocina de otra manera y tiene su propia receta en el sitio; si en el mostrador te ofrecen colita cuando pediste tapa, no es lo mismo.'
    ]},
    {title:'Qué hacer con lo que sobra', paragraphs:[
      'Fría, esta carne se corta en fetas casi transparentes y se convierte en un fiambre casero para sándwiches con mayonesa de ajo o para una picada. Guardala entera y cortala recién al usarla, así no se oscurece.',
      'Las papas que sobran se recalientan en sartén con un poco de su propia grasa y se sirven con huevo frito al día siguiente.'
    ]}
  ],
  variations:[
    ['Con cebollas moradas y locote','Reemplazá la mitad de las papas por cebolla morada en gajos y tiras de locote rojo. Se caramelizan en la grasa y hacen de salsa.'],
    ['Con costra de mostaza y pan rallado','Después de sellar, untá la cara de carne con mostaza y apretá encima pan rallado mezclado con perejil. Queda una costra dorada que contrasta con el centro rosado.'],
    ['Para un buffet frío','Horneala hasta 54 °C, dejala enfriar entera y guardala en la heladera de un día para otro. Cortala fina y serví con salsa criolla o con ensalada rusa.']
  ],
  storage:'Envolvé la carne entera en film y guardala en la heladera hasta tres días. Para servirla caliente, calentá las fetas un instante en sartén con un poco de jugo; en el horno o en el microondas se pasa de punto y se seca.',
  faq:[
    ['¿Cuánto tiempo se cocina la tapa de cuadril al horno?','Una pieza de 1,5 a 1,8 kilos lleva unos 15 minutos a 220 °C y entre 25 y 35 minutos más a 180 °C, después de sellarla en sartén. El tiempo exacto depende del grosor: guiate por la temperatura del centro.'],
    ['¿A qué temperatura se saca la tapa de cuadril del horno?','Para que quede jugosa, a 52 a 54 °C en la parte más gruesa. Si la querés a punto, a 57 o 58 °C. Durante el reposo sube un par de grados más.'],
    ['¿La tapa de cuadril es lo mismo que la picaña?','En la mayoría de las carnicerías sí: es el músculo que cubre el cuadril, con su capa de grasa. Algunos carniceros la cortan más grande; pedí la pieza triangular de hasta dos kilos y vas a tener la picaña de siempre.'],
    ['¿La tapa de cuadril al horno se tapa con papel aluminio?','No durante la cocción, porque la grasa no se dora y la carne se cocina al vapor. El aluminio se usa solo en el reposo, apoyado sin apretar.'],
    ['¿Por qué mi tapa de cuadril al horno quedó dura?','Por lo general porque se pasó de punto o porque se cortó a favor de la fibra. Sacala del horno apenas llega a la temperatura que buscás y cortala fina contra la veta.'],
    ['¿Cuánta tapa de cuadril compro para 6 personas?','Como estimación de la redacción, una pieza de 1,8 kilos alcanza para 6 con papas de guarnición. Si hay entrada y otros platos, una de 1,4 kilos puede ser suficiente.']
  ],
  related:['corte-tapa-de-cuadril','corte-picana','receta-picana-a-la-parrilla','receta-colita-de-cuadril-a-la-parrilla','receta-papas-al-horno','receta-peceto-al-horno'],
  guides:['guia-cuanta-carne-por-persona','guia-cortes-de-carne-vacuna'],
  cateringOccasion:'cumpleanos'
};
