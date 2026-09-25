// Recipe module: dorado de río al horno, entero sobre verduras. Companion of guia-dorado. Shape: sites/comida/content/recipes/sopa-paraguaya.mjs
export default {
  id:'receta-dorado-al-horno', slug:'dorado-al-horno', kind:'recipe',
  published:true, indexable:true, updatedAt:'2026-09-24', verifiedAt:'2026-09-24',
  source:'Receta de la redacción de comida.com.py, basada en la cocina casera paraguaya de pescado de río',
  label:'Dorado al horno',
  seoTitle:'Dorado al horno: pescado de río entero',
  meta:'Receta de dorado de río al horno, entero sobre papas, cebolla y locote: temperatura, tiempo según el peso, cómo saber el punto y cómo servirlo sin espinas.',
  h1:'Dorado al horno: el pescado de río entero con papas y locote',
  cardText:'Dorado de río entero, horneado sobre papas, cebolla y locote con ajo y limón.',
  course:'Plato principal', cuisine:'Paraguaya', category:['paraguaya','horno','fiesta'],
  keywords:['dorado al horno','dorado pescado al horno','dorado de río al horno','receta de dorado al horno','pescado entero al horno'],
  intro:[
    'Cocinar el dorado de río entero en el horno es la manera más sencilla de disfrutar su sabor sin pelearse con las espinas. La piel lo protege y lo mantiene jugoso, las verduras de abajo se cocinan en los jugos del pescado y, al final, la carne se levanta del espinazo en dos grandes filetes. Todo sale de una sola asadera y el plato queda completo.',
    'La receta está pensada para un dorado de unos 2,5 kg, que alcanza para seis personas con las papas y verduras. Si tu pescado es más chico o más grande, el tiempo cambia: más abajo tenés una tabla orientativa. Para reconocer un dorado fresco y entender sus espinas, tenés nuestra guía del dorado de río.'
  ],
  times:{prep:30, cook:55, rest:5}, difficulty:'Media',
  yield:{mode:'porciones', base:6, options:[2,4,6,12], yieldText:'6 porciones', note:'Estimación de la redacción: unos 400 g de pescado entero por persona, con papas y verduras en la misma asadera.'},
  ingredients:[
    {group:'Para el pescado', items:[
      {q:2.5, u:'kg', item:'dorado de río entero', note:'en una o dos piezas, escamado, limpio y sin agallas'},
      {q:5, u:'diente', item:'ajo', note:'picado fino'},
      {q:2, u:'u', item:'limones', one:'limón', note:'uno en jugo y otro en rodajas'},
      {q:4, u:'cda', item:'aceite'},
      {q:2, u:'cdita', item:'sal fina'},
      {q:1, u:'cdita', item:'pimentón dulce'},
      {q:1, u:'atado', item:'perejil', note:'la mitad en ramas para el interior, la otra picada'},
      {q:null, item:'pimienta', note:'al gusto'}
    ]},
    {group:'Para la cama de verduras', items:[
      {q:1, u:'kg', item:'papas', note:'en rodajas de medio centímetro'},
      {q:2, u:'u', item:'cebollas medianas', one:'cebolla mediana', note:'en aros'},
      {q:1, u:'u', item:'locote rojo', note:'en tiras'},
      {q:1, u:'u', item:'locote verde', note:'en tiras'},
      {q:2, u:'u', item:'tomates', one:'tomate', note:'en rodajas'},
      {q:3, u:'cda', item:'aceite'},
      {q:125, u:'ml', item:'agua o caldo de verduras'},
      {q:null, item:'sal y orégano', note:'al gusto'}
    ]}
  ],
  steps:[
    {title:'Prepará el horno y las papas', text:'Encendé el horno a 200 °C. Hervé las rodajas de papa en agua con sal durante unos minutos, apenas para que empiecen a ablandarse, y escurrilas. Así terminan de cocinarse al mismo tiempo que el pescado.', min:6},
    {title:'Armá la cama de verduras', text:'Aceitá una asadera grande. Distribuí las papas, la cebolla, los locotes y el tomate en una capa pareja, condimentá con sal, orégano y el aceite, y agregá el agua o el caldo. Esa base evita que el pescado se pegue y se convierte en la guarnición.'},
    {title:'Hacé cortes en el pescado', text:'Secá bien el dorado con papel de cocina. Con un cuchillo filoso hacé tres o cuatro cortes diagonales en cada costado, profundos hasta cerca del espinazo. Los cortes hacen que la parte gruesa del lomo se cocine al mismo ritmo que la cola.'},
    {title:'Condimentá por dentro y por fuera', text:'Mezclá el ajo, el jugo de limón, el aceite, la sal, el pimentón y pimienta. Frotá la mezcla por fuera, dentro de los cortes y en la cavidad de la panza. Rellená la panza con rodajas de limón y las ramas de perejil.'},
    {title:'Horneá el dorado', text:'Apoyá el pescado sobre las verduras y llevalo al horno. Para un dorado de unos 2,5 kg, calculá alrededor de 45 a 50 minutos. A mitad de cocción, rociá el pescado con los jugos de la asadera para que la piel no se seque.', min:45},
    {title:'Comprobá el punto junto al espinazo', text:'Abrí un poco uno de los cortes más cercanos a la cabeza, donde el pescado es más grueso. La carne tiene que estar blanca, opaca y separarse del espinazo con facilidad. Si todavía se ve translúcida, dale 5 a 10 minutos más.', min:5},
    {title:'Dejá descansar y separá los filetes', text:'Sacá la asadera y esperá unos minutos. Hacé un corte a lo largo del lomo y otro detrás de la cabeza, levantá el filete de arriba en porciones con una espátula ancha, retirá el espinazo tirando desde la cola y seguí con el filete de abajo.', min:5},
    {title:'Serví con las verduras', text:'Repartí cada porción de pescado con papas y verduras de la asadera, rociá con sus jugos y terminá con perejil picado. Avisá en la mesa que el dorado tiene espinas finas y revisá los platos de los chicos.'}
  ],
  tips:[
    'Si el dorado no entra en tu asadera, cortale la cabeza o partilo en dos y cociná las dos mitades juntas; el tiempo casi no cambia.',
    'Como regla orientativa, calculá unos 10 minutos de horno por cada 2,5 cm de espesor en la parte más gruesa del lomo, y comprobá siempre el punto.',
    'Hervir apenas las papas antes es clave: crudas, necesitan más tiempo que el pescado.',
    'La cabeza y el espinazo que sobran sirven para un caldo; guardalos en el freezer para el próximo pira caldo.',
    'Un chorrito de vino blanco en lugar de parte del agua le da un aroma más fino a los jugos.'
  ],
  sections:[
    {title:'Tiempo de horno según el tamaño del dorado', paragraphs:['Los tiempos dependen del grosor más que del peso, y cada horno calienta distinto, así que tomá esta guía como punto de partida: un dorado de 1 a 1,5 kg tarda unos 25 a 30 minutos a 200 °C; uno de 2 kg, entre 35 y 45 minutos; uno de 2,5 a 3 kg, entre 45 y 55 minutos. Si partiste el pescado en dos, controlá primero la mitad de la cola, que se cocina antes.','En todos los casos la señal de que está listo es la misma: la carne se vuelve opaca junto al espinazo y se separa en lascas. Si tenés termómetro de cocina, también te sirve para confirmar que la parte más gruesa está bien caliente.']}
  ],
  variations:[
    ['En salsa de tomate y locote','Reemplazá las papas por una salsa espesa de tomate, cebolla y locote, y horneá el dorado encima, bañándolo con la salsa. Queda muy jugoso; ideal con arroz blanco.'],
    ['Con mandioca','Usá mandioca hervida en trozos en lugar de papa. Se dora en los jugos del pescado y queda crocante en los bordes.'],
    ['En postas','Si compraste postas gruesas, horneálas sobre la misma cama de verduras unos 20 a 25 minutos, según el espesor.']
  ],
  storage:'Guardá el pescado ya separado del espinazo, junto con las verduras, en un recipiente cerrado en la heladera, y consumilo en uno o dos días. Para recalentarlo, tapalo con papel aluminio y llevalo a horno suave unos minutos; la carne fría desmenuzada, bien revisada de espinas, sirve para empanadas o croquetas.',
  faq:[
    ['¿A qué temperatura se cocina el dorado al horno?','A 200 °C funciona muy bien para un pescado entero: la piel se dora y la carne se cocina pareja. Un horno más suave alarga el tiempo y seca más los bordes.'],
    ['¿Cuánto tarda un dorado de 2 kilos al horno?','Entre 35 y 45 minutos a 200 °C, como orientación. Confirmá siempre que la carne esté opaca junto al espinazo.'],
    ['¿Cómo se sacan las espinas del dorado al horno?','Una vez cocido, levantá el filete de arriba en porciones, retirá el espinazo entero desde la cola y seguí con el de abajo. Las espinas finas quedan a la vista y se separan con un tenedor.'],
    ['¿Hay que dar vuelta el dorado en el horno?','No. Se hornea sobre la cama de verduras sin moverlo; alcanza con rociarlo con los jugos a mitad de cocción.'],
    ['¿Se puede hacer esta receta con dorado de mar?','Sí, aunque es otro pescado, más compacto y sin espinas en horquilla. En filetes o postas tarda bastante menos; controlá desde los 15 o 20 minutos.'],
    ['¿Con qué acompañar el dorado al horno?','Las papas y verduras de la asadera ya lo acompañan. Sumá una ensalada fresca, sopa paraguaya o arroz blanco si hay muchos comensales.']
  ],
  related:['receta-surubi-a-la-parrilla','receta-pacu-a-la-parrilla','receta-pira-caldo','receta-papas-al-horno','receta-sopa-paraguaya'],
  guides:['guia-dorado','guia-pescados-de-rio','guia-mercado-de-abasto','coleccion-semana-santa'],
  cateringOccasion:'cumpleanos'
};
