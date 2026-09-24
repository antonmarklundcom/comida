export default {
  id:'receta-pizza-casera', slug:'pizza-casera', kind:'recipe',
  published:true, indexable:true, updatedAt:'2026-09-24', verifiedAt:'2026-09-24',
  source:'Receta de la redacción de comida.com.py, basada en la pizza casera al estilo del Río de la Plata',
  label:'Pizza casera',
  seoTitle:'Pizza casera: masa, salsa y variedades',
  meta:'Pizza casera con masa y salsa de tomate hechas en casa, más las versiones napolitana, margarita, muzzarella, calabresa y fugazzeta. Paso a paso.',
  h1:'Pizza casera: masa, salsa y cinco clásicas',
  cardText:'Masa casera, salsa de tomate y las variedades más pedidas.',
  course:'Plato principal', cuisine:'Casera', category:['horno','rapida','fiesta'],
  keywords:['pizza casera','masa de pizza casera','pizza napolitana','pizza margarita','pizza de muzzarella','pizza calabresa','fugazzeta'],
  intro:[
    'Una pizza casera bien hecha empieza por una masa con tiempo de levado y una salsa de tomate simple, reducida lo justo para que no moje. Con eso resuelto, cambiar de variedad es cuestión de cubierta: muzzarella sola, tomate y ajo para la napolitana, albahaca para la margarita, rodajas de calabresa o mucha cebolla para la fugazzeta.',
    'La receta rinde dos pizzas de unos 30 cm, en asadera redonda o rectangular, con masa de espesor medio como la de las pizzerías de la región. Si elegís más pizzas arriba de los ingredientes, todo se recalcula; la masa se puede preparar a la mañana para la cena.'
  ],
  times:{prep:30, cook:25, rest:90}, difficulty:'Fácil',
  yield:{mode:'porciones', base:2, options:[1,2,4,6], yieldText:'2 pizzas de 30 cm', note:'Cada pizza se corta en 8 porciones. Como estimación, una pizza alcanza para dos o tres adultos si es la comida principal.'},
  ingredients:[
    {group:'Para la masa', items:[
      {q:500, u:'g', item:'harina de trigo 000', note:'o harina común'},
      {q:7, u:'g', item:'levadura seca instantánea', note:'o 20 g de levadura fresca'},
      {q:300, u:'ml', item:'agua tibia'},
      {q:3, u:'cda', item:'aceite de oliva o neutro'},
      {q:2, u:'cdita', item:'sal fina'},
      {q:1, u:'cdita', item:'azúcar'}
    ]},
    {group:'Para la salsa de tomate', items:[
      {q:1, u:'lata', item:'tomate triturado', note:'de unos 400 g'},
      {q:1, u:'diente', item:'ajo', note:'picado'},
      {q:1, u:'cda', item:'aceite'},
      {q:1, u:'cdita', item:'orégano seco'},
      {q:0.5, u:'cdita', item:'sal fina'}
    ]},
    {group:'Para la cubierta base', items:[
      {q:400, u:'g', item:'muzzarella', note:'en cubos o rallada gruesa'},
      {q:null, item:'aceitunas verdes', note:'al gusto'},
      {q:null, item:'orégano seco para terminar', note:'al gusto'}
    ]}
  ],
  steps:[
    {title:'Activá la levadura', text:'En un bol, disolvé la levadura y el azúcar en la mitad del agua tibia, que tiene que estar apenas templada al tacto. Esperá unos minutos hasta que se forme espuma: es la señal de que la levadura está viva.', min:10},
    {title:'Amasá', text:'Poné la harina con la sal en un bol grande, hacé un hueco en el centro y agregá la levadura, el aceite y el resto del agua. Uní y amasá sobre la mesada unos diez minutos, hasta tener una masa lisa, elástica y apenas húmeda.', min:10},
    {title:'Dejá levar', text:'Colocá la masa en un bol aceitado, tapala con film o un repasador y dejala en un lugar templado hasta que duplique su volumen. En días frescos puede tardar un poco más.', min:60},
    {title:'Cociná la salsa', text:'Mientras tanto, rehogá el ajo en el aceite sin que se dore, sumá el tomate, el orégano y la sal, y cociná a fuego bajo, destapado, hasta que espese y deje de soltar agua al apoyarla sobre un plato.', min:15},
    {title:'Estirá en las asaderas', text:'Encendé el horno al máximo, entre 230 y 250 °C. Dividí la masa en dos, aceitá las asaderas y estirá cada bollo con las manos desde el centro hacia los bordes. Dejala descansar media hora más para un borde más aireado.', min:30},
    {title:'Precociná con salsa', text:'Untá la salsa en capa fina y horneá la base sola en la parte baja del horno, hasta que la masa esté firme y apenas dorada abajo. Esta prepizza evita que el centro quede crudo bajo el queso.', min:8},
    {title:'Terminá con la cubierta', text:'Sacá las pizzas, distribuí la muzzarella y la cubierta de la variedad que elegiste, y volvé al horno hasta que el queso burbujee y el borde esté dorado.', min:8},
    {title:'Serví', text:'Terminá con aceitunas, un hilo de aceite y orégano. Dejá reposar un minuto sobre una tabla antes de cortar, así el queso no se desliza de las porciones.', min:1}
  ],
  tips:[
    'Si tu horno no llega a 250 °C, precalentá una asadera dada vuelta en la parte baja y apoyá la pizza sobre ella: el calor de abajo imita a una piedra.',
    'La muzzarella suelta agua. Cortala en cubos y dejala escurrir sobre papel en la heladera mientras la masa leva; la pizza queda menos húmeda.',
    'Para masa de un día para otro, usá la mitad de la levadura y dejala levar en la heladera tapada. Sacala una hora antes de estirar.',
    'Poca salsa: una capa fina alcanza. El exceso de tomate es la causa más común de pizzas con el centro blando.',
    'Estirá con las manos y no con palote, así no se pierde el aire del levado en los bordes.'
  ],
  sections:[
    {title:'Napolitana, margarita y muzzarella', paragraphs:[
      'La pizza de muzzarella es la base de todas: salsa, abundante queso, aceitunas y orégano. Con esa misma pizza precocida, la napolitana suma rodajas finas de tomate fresco y ajo picado mezclado con aceite, que se reparten sobre el queso en los últimos minutos. Hay quien le agrega jamón, pero en la versión más difundida en esta región el tomate y el ajo son lo que la define.',
      'La margarita toma su nombre de la pizza italiana de tomate, muzzarella y albahaca. En casa se prepara con la misma salsa, menos queso que la muzzarella y hojas de albahaca fresca puestas al salir del horno, para que no se quemen. Si conseguís muzzarella fresca en bocha, cortala en rodajas y escurrila bien antes de usarla.'
    ]},
    {title:'Calabresa y fugazzeta', paragraphs:[
      'La calabresa se arma sobre una pizza de muzzarella con rodajas finas de longaniza o salame tipo calabresa, un embutido con ají picante. Se agregan junto con el queso, para que suelten un poco de grasa y se doren en los bordes. Unas tiras de locote o de cebolla combinan bien con el picante.',
      'La fugazzeta se asocia a las pizzerías de Buenos Aires: masa, mucha muzzarella y una capa de cebolla en pluma fina con aceite y orégano, sin salsa de tomate. Para hacerla en casa, cortá dos cebollas grandes por pizza, dejalas diez minutos con sal para que suelten agua y escurrilas. Poné el queso sobre la masa precocida y la cebolla encima. La versión rellena lleva el queso entre dos capas de masa y la cebolla arriba.'
    ]}
  ],
  variations:[
    ['Masa integral','Reemplazá un tercio de la harina por harina integral y sumá unos 30 ml más de agua. Queda más rústica y con más sabor.'],
    ['Pizza a la parrilla','Estirá la masa fina, dorala de un lado sobre la parrilla con brasas moderadas, dala vuelta, cubrila y tapá con una asadera hasta que se derrita el queso.'],
    ['Pizzetas para cumpleaños','Dividí la masa en 16 bollitos, estiralos de 10 cm y horneá unos 12 minutos en total. Rinden para una mesa de bocaditos.']
  ],
  storage:'La masa cruda se guarda en la heladera hasta dos días en un recipiente aceitado y tapado, o congelada en bollos hasta dos meses. Las prepizzas con salsa se congelan bien: se cubren y hornean sin descongelar. La pizza cocida dura dos días en la heladera y se recalienta mejor en sartén tapada que en microondas.',
  faq:[
    ['¿Cómo se hace la masa de pizza casera?','Con harina, levadura, agua tibia, aceite, sal y una pizca de azúcar. Se amasa diez minutos, leva una hora hasta duplicar y se estira con las manos en una asadera aceitada.'],
    ['¿Qué lleva la pizza napolitana?','Sobre una pizza de muzzarella, rodajas de tomate fresco, ajo picado con aceite y orégano. Algunos le suman jamón.'],
    ['¿Cuál es la diferencia entre pizza margarita y napolitana?','La margarita lleva salsa, muzzarella y albahaca fresca; la napolitana, rodajas de tomate con ajo sobre la muzzarella.'],
    ['¿Qué es la fugazzeta?','Una pizza sin salsa de tomate, con abundante muzzarella y una capa de cebolla en pluma. La rellena lleva el queso entre dos masas.'],
    ['¿A qué temperatura se hace la pizza en horno de casa?','Al máximo que dé el horno, entre 230 y 250 °C, bien precalentado. Precocinar la base con salsa ayuda a que el centro no quede crudo.'],
    ['¿Cuántas pizzas pido o hago por persona?','Como estimación de la redacción, una pizza de 30 cm cada dos o tres adultos si es la comida principal; en una picada con otros platos, una cada cuatro.']
  ],
  related:['receta-matambre-a-la-pizza','receta-pan-casero','receta-lasana-de-carne','receta-salsa-bolonesa','receta-hamburguesas-caseras'],
  guides:['guia-cuanta-comida-por-persona','guia-cuantos-bocaditos-por-persona'],
  cateringOccasion:'cumpleanos'
};
