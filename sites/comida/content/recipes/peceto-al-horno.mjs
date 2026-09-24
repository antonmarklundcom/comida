// Recipe module: peceto al horno. Companion of corte-peceto. Shape: sites/comida/content/recipes/sopa-paraguaya.mjs
export default {
  id:'receta-peceto-al-horno', slug:'peceto-al-horno', kind:'recipe',
  published:true, indexable:true, updatedAt:'2026-09-24', verifiedAt:'2026-09-24',
  source:'Receta de la redacción de comida.com.py, basada en la cocina casera de Paraguay y el Río de la Plata',
  label:'Peceto al horno',
  seoTitle:'Peceto al horno: receta jugosa con cebolla',
  meta:'Peceto al horno jugoso: sellado, horno a 180 °C, temperatura de retiro, reposo y una salsa de cebolla y vino con el fondo. Para 6 personas, paso a paso.',
  h1:'Peceto al horno con salsa de cebolla y vino',
  cardText:'Carne magra sellada y horneada a punto, cortada fina con salsa de cebolla.',
  course:'Plato principal', cuisine:'Casera', category:['carne','horno','fiesta'],
  keywords:['peceto al horno','peceto','peceto al horno con papas','cómo hacer peceto al horno','peceto al horno jugoso'],
  intro:[
    'El peceto al horno sale jugoso cuando se lo trata como a un roast beef: bien sellado en sartén, horno moderado y afuera cuando el centro todavía está rosado. La carne es tan magra que cada grado de más se nota, así que en esta receta el termómetro, o al menos el tacto, manda más que el reloj.',
    'Con una pieza de 1,5 kilos comen 6 personas. La salsa se arma con la cebolla que se cocina debajo de la carne y un poco de vino. Qué es el peceto y cómo elegir una pieza pareja lo tenés en la guía del corte; acá está el paso a paso para el horno.'
  ],
  times:{prep:20, cook:55, rest:12}, difficulty:'Media',
  yield:{mode:'porciones', base:6, options:[2,4,6,12], yieldText:'6 porciones', note:'Unos 250 g crudos por persona. Para 2 personas, un peceto chico de 500 a 600 g tarda unos 25 minutos en el horno.'},
  ingredients:[
    {group:'Para la carne', items:[
      {q:1.5, u:'kg', item:'peceto', note:'en una pieza, sin la membrana plateada'},
      {q:2, u:'cdita', item:'sal fina'},
      {q:null, item:'pimienta negra molida', note:'al gusto'},
      {q:1, u:'cda', item:'mostaza'},
      {q:3, u:'diente', item:'ajo', note:'machacados'},
      {q:1, u:'cdita', item:'tomillo u orégano seco'},
      {q:2, u:'cda', item:'aceite'}
    ]},
    {group:'Para la salsa', items:[
      {q:3, u:'u', item:'cebollas medianas', one:'cebolla mediana', note:'en pluma'},
      {q:200, u:'ml', item:'vino blanco o tinto seco'},
      {q:150, u:'ml', item:'caldo de carne'},
      {q:20, u:'g', item:'manteca', note:'fría'}
    ]}
  ],
  steps:[
    {title:'Emparejá la pieza', text:'Si la punta del peceto es mucho más fina que el resto, doblala hacia adentro y atala con hilo de cocina. Pasá unas vueltas más de hilo a lo largo del cilindro, cada tres dedos, para que mantenga la forma redonda en el horno.'},
    {title:'Condimentá y templá', text:'Mezclá la mostaza, el ajo, el tomillo y una cucharada de aceite. Salpimentá la carne y untala con esa pasta. Dejala fuera de la heladera media hora mientras encendés el horno a 180 °C.', min:30},
    {title:'Sellá en sartén bien caliente', text:'Calentá el resto del aceite en una sartén grande a fuego fuerte y dorá el peceto de todos los lados, girándolo de a poco, hasta que tenga una costra oscura pareja. Esperá a que se despegue solo antes de girarlo.', min:8},
    {title:'Armá la cama de cebolla', text:'Esparcí la cebolla en el fondo de una asadera mediana y apoyá el peceto encima. Echá la mitad del vino en la sartén caliente, despegá lo que quedó pegado y volcalo sobre la cebolla.'},
    {title:'Horneá hasta el punto', text:'Llevá la asadera al horno. Para una pieza de 1,5 kilos, entre 35 y 45 minutos. Retiralo cuando el centro marque 54 a 56 °C si lo querés rosado, o 60 °C si lo preferís a punto. Revolvé la cebolla a mitad de tiempo para que no se queme.', min:40},
    {title:'Reposá tapado', text:'Pasá la carne a una tabla, tapala con aluminio y esperá por lo menos diez minutos antes de cortarla. En ese tiempo la temperatura del centro sube unos grados y el jugo vuelve a repartirse.', min:12},
    {title:'Terminá la salsa de cebolla', text:'Pasá la cebolla y los jugos de la asadera a una ollita, sumá el resto del vino y el caldo, y hervilo hasta que se reduzca a un tercio. Fuera del fuego, agregá la manteca fría y revolvé hasta que la salsa brille.', min:8},
    {title:'Cortá fino contra la fibra', text:'Quitá el hilo y cortá el peceto en fetas de medio centímetro o menos, siempre en contra de la fibra. Acomodalas en una fuente, bañalas con la salsa caliente y serví.'}
  ],
  tips:[
    'Sin termómetro, presioná el centro con un dedo: si cede como la yema del dedo al tocarse el pulgar con el índice, está rosado. Si ya se siente firme, está a punto.',
    'Si alguien de la mesa lo quiere bien cocido, cortale las puntas: siempre llegan antes al punto que el centro.',
    'Para hornearlo con papas, meté las papas en gajos, ya hervidas cinco minutos, al mismo tiempo que la carne. Sacá la carne primero y dejá las papas diez minutos más con el horno a 220 °C.',
    'Si sobra, guardalo entero y cortalo frío: salen fetas finísimas, perfectas para sándwiches o para una ensalada rusa con carne.',
    'El peceto no pide marinada larga; los ácidos fuertes durante horas le dan una textura harinosa por fuera.'
  ],
  sections:[
    {title:'Peceto al horno o peceto a la olla', paragraphs:[
      'Esta receta aprovecha la terneza natural del peceto con una cocción corta y a punto. Si en tu casa lo prefieren bien cocido y deshaciéndose, el camino es otro: brasearlo tapado con líquido durante casi dos horas, como en el asado a la olla del sitio. Lo que no conviene es el medio camino, mucho horno sin líquido, porque la carne se seca.',
      'Para una mesa de fiesta, el peceto al horno frío en fetas finas, con la salsa aparte o con una mayonesa casera, rinde mucho y se prepara el día anterior. Va bien con papas al horno, ensalada de papa o arroz primavera.'
    ]}
  ],
  variations:[
    ['Peceto mechado','Con un cuchillo largo abrí un túnel a lo largo de la pieza y rellenalo con tiras de zanahoria, panceta y aceitunas. Sumá unos diez minutos de horno.'],
    ['Con costra de hierbas','Después de sellar, pintalo con mostaza y apretá por encima perejil, romero y pan rallado. Horneá igual, sin tapar.'],
    ['Con papas y batata','Rodeá la carne con gajos de papa y batata precocidos, rociados con aceite y sal gruesa. Salen doradas en el mismo tiempo.']
  ],
  storage:'Guardalo entero, envuelto en film, en la heladera hasta tres días, y la salsa aparte. Frío se corta mejor. Para calentarlo, poné las fetas en la salsa caliente fuera del fuego apenas un par de minutos.',
  faq:[
    ['¿Cuánto tiempo va el peceto al horno?','Una pieza de 1,5 kilos, sellada antes, necesita entre 35 y 45 minutos a 180 °C para quedar rosada en el centro. Si lo querés más cocido, unos minutos más.'],
    ['¿A qué temperatura se saca el peceto del horno?','Entre 54 y 56 °C en el centro para rosado, o alrededor de 60 °C para a punto. Con el reposo sube unos grados más.'],
    ['¿El peceto al horno se tapa?','En esta receta no. Se hornea destapado sobre una cama de cebolla. Tapado y con líquido es otro plato, más parecido al asado a la olla.'],
    ['¿Por qué el peceto al horno quedó duro?','Casi siempre por exceso de cocción o por cortarlo a favor de la fibra. Retiralo antes y cortalo fino, en sentido contrario a las vetas.'],
    ['¿Se puede hacer el peceto al horno el día anterior?','Sí. Hornealo, dejalo enfriar entero y guardalo tapado en la heladera. Al día siguiente cortalo frío y serví con la salsa caliente.'],
    ['¿Cuánto peceto compro para 6 personas?','Como estimación de la redacción, una pieza de alrededor de 1,5 kilos si es el plato principal. Para una mesa con varios platos, 1 kilo puede alcanzar.']
  ],
  related:['corte-peceto','receta-vitel-tone','receta-asado-a-la-olla','receta-papas-al-horno','receta-ensalada-de-papa','receta-arroz-primavera'],
  guides:['guia-cuanta-carne-por-persona','guia-mercado-de-abasto'],
  cateringOccasion:'fin-de-ano'
};
