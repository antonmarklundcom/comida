export default {
  id:'receta-pan-casero', slug:'pan-casero', kind:'recipe', order:32,
  published:true, indexable:true, updatedAt:'2026-09-24', verifiedAt:'2026-09-24',
  source:'Receta de la redacción de comida.com.py, basada en la panificación casera tradicional',
  label:'Pan casero',
  seoTitle:'Pan casero: receta con levadura paso a paso',
  meta:'Receta de pan casero con levadura, harina 000 y grasa o manteca: dos panes de corteza dorada y miga tierna, con tiempos de levado y horno a gas.',
  h1:'Pan casero con levadura: receta fácil para hacer en casa',
  cardText:'Dos panes de corteza crocante y miga tierna, con harina, levadura y paciencia.',
  course:'Panificado', cuisine:'Casera', category:['horno'],
  keywords:['pan casero','pan casero receta','receta de pan casero con levadura','como hacer pan casero'],
  intro:[
    'El pan casero sale con cinco ingredientes que casi siempre hay en la alacena: harina de trigo, agua, sal, levadura y un poco de grasa. Lo que no se compra es el tiempo: la masa necesita amasado y dos levados para que la miga quede aireada y la corteza, dorada y crocante.',
    'Esta receta rinde dos panes medianos con un kilo de harina, lo justo para el desayuno de una familia y el cocido de la tarde. Si querés uno solo o una tanda grande para un festejo, elegí la cantidad de panes y las medidas se recalculan.'
  ],
  times:{prep:30, cook:35, rest:100}, difficulty:'Media',
  yield:{mode:'porciones', base:2, options:[1,2,4], yieldText:'2 panes medianos', note:'Cada pan pesa unos 800 g antes del horno. Con 4 panes conviene hornear en dos tandas o usar dos asaderas.'},
  ingredients:[
    {group:'Para activar la levadura', items:[
      {q:25, u:'g', item:'levadura fresca', note:'o 10 g de levadura seca'},
      {q:1, u:'cda', item:'azúcar'},
      {q:150, u:'ml', item:'agua tibia', note:'que se pueda tocar sin quemar'}
    ]},
    {group:'Para la masa', items:[
      {q:1, u:'kg', item:'harina de trigo 000'},
      {q:20, u:'g', item:'sal fina'},
      {q:450, u:'ml', item:'agua tibia', note:'puede sobrar un poco'},
      {q:50, u:'g', item:'grasa de cerdo o manteca', note:'blanda; también sirve aceite'}
    ]},
    {group:'Para terminar', items:[
      {q:1, u:'u', item:'huevos', one:'huevo', note:'batido, opcional para pintar'},
      {q:null, item:'harina extra para la mesada', note:'al gusto'}
    ]}
  ],
  steps:[
    {title:'Despertá la levadura', text:'Desmenuzá la levadura en un bol chico, sumá el azúcar y los 150 ml de agua tibia. Revolvé y esperá hasta que aparezca una espuma en la superficie. Si no hace espuma, la levadura está vencida y conviene cambiarla antes de seguir.', min:10},
    {title:'Formá la masa', text:'En un bol grande mezclá la harina con la sal. Hacé un hueco en el centro, volcá la levadura espumosa, la grasa blanda y casi toda el agua. Uní con la mano o una cuchara hasta que no quede harina seca; guardá el resto del agua para ajustar.'},
    {title:'Amasá hasta que esté lisa', text:'Pasá la masa a la mesada apenas enharinada y amasá empujando con la base de la mano y doblando hacia vos. Al principio se pega; no le sumes harina de más. Está lista cuando se siente elástica y al estirar un trocito se forma una lámina fina sin romperse.', min:10},
    {title:'Primer levado', text:'Poné la masa en un bol aceitado, tapala con un repasador y dejala en un lugar tibio, lejos de corrientes de aire. Tiene que duplicar su volumen. En verano tarda menos; en invierno podés dejarla dentro del horno apagado con la luz encendida.', min:60},
    {title:'Desgasificá y formá los panes', text:'Aplastá la masa con los puños para sacar el aire, dividila en dos partes iguales y formá dos bollos alargados, enrollando bien apretado para que la superficie quede tensa. Acomodalos sobre una asadera enharinada o engrasada, con espacio entre uno y otro.'},
    {title:'Segundo levado', text:'Tapá los panes y esperá a que crezcan otra vez, casi al doble. Mientras tanto encendé el horno a 200 °C; en un horno a gas sin termómetro, eso es fuego medio alto con el horno bien caliente de antemano.', min:40},
    {title:'Cortá y pintá', text:'Con un cuchillo bien filoso o una hoja de afeitar hacé tres o cuatro cortes diagonales poco profundos sobre cada pan. Si querés una corteza brillante, pintalos con el huevo batido. Para una corteza más crocante, poné una fuente chica con agua en el piso del horno.'},
    {title:'Horneá', text:'Horneá hasta que la corteza esté dorada parejo y, al golpear la base del pan con los nudillos, suene hueco. Si se doran demasiado rápido arriba, bajá el horno a 180 °C para los últimos minutos.', min:35},
    {title:'Dejá enfriar sobre una rejilla', text:'Sacá los panes y apoyalos sobre una rejilla para que el vapor salga por abajo y la base no se humedezca. Cortalos cuando estén apenas tibios: recién salidos, la miga todavía se está terminando de cocinar por dentro.', min:30}
  ],
  tips:[
    'Usá agua tibia, nunca caliente: por encima de lo que tolera tu mano la levadura se debilita y el pan no crece.',
    'La harina 000 da una miga más firme y buena corteza; la 0000 sirve, pero el pan queda más blando y menos alveolado.',
    'La sal nunca va en contacto directo con la levadura activada: mezclala primero con la harina.',
    'El tiempo de levado depende del calor de la cocina. Guiate por el volumen de la masa, no por el reloj.',
    'Si tu horno dora mucho abajo, poné la asadera en la parte media alta y otra asadera vacía en la rejilla de abajo como escudo.'
  ],
  variations:[
    ['Pan casero integral','Reemplazá 300 g de harina 000 por harina integral y sumá unos 50 ml más de agua, porque el salvado absorbe más líquido.'],
    ['Pan de molde','Poné cada bollo en un molde de budín engrasado y dejalo crecer hasta el borde antes de hornear. Sale con miga pareja, ideal para tostadas y sándwiches.'],
    ['Pancitos individuales','Dividí la masa en bollitos de unos 80 g y horneá unos 20 minutos. Se levan más rápido y quedan perfectos para una mesa de asado.'],
    ['Con queso Paraguay','En el formado, esparcí 200 g de queso Paraguay desmenuzado sobre la masa estirada y enrollá. Queda un pan salado que va muy bien con el cocido.']
  ],
  sections:[
    {title:'Levadura fresca o seca: cómo reemplazar una por otra', paragraphs:['La levadura fresca viene en panes húmedos y se guarda en la heladera; la seca viene en sobres y dura meses en la alacena. Como regla práctica de cocina casera, 25 g de fresca equivalen a unos 8 a 10 g de seca.','La levadura seca instantánea se puede mezclar directo con la harina, sin activarla en agua. Aun así, hacer la prueba de la espuma te ahorra una masa que no crece por una levadura vieja.']},
    {title:'Cómo acompañar el pan casero', paragraphs:['Recién hecho, va con manteca y dulce de guayaba en la merienda o con un cocido quemado a la mañana. Del segundo día en adelante rinde en tostadas, en sándwiches con fiambre o cortado en cubos para gratinar sobre un caldo.']}
  ],
  storage:'Guardalo envuelto en un repasador limpio o en una bolsa de tela, a temperatura ambiente, hasta tres días. Para más tiempo, cortalo en rodajas y congelalo en bolsa cerrada hasta dos meses; las rodajas van directo del freezer a la tostadora.',
  faq:[
    ['¿Qué harina es mejor para pan casero, 000 o 0000?','La 000 tiene más proteína y forma una masa más elástica, por eso el pan crece mejor y la corteza queda crocante. La 0000 conviene para tortas y masas finas.'],
    ['¿Cuánta levadura lleva un kilo de harina?','Para este pan se usan 25 g de levadura fresca o unos 10 g de seca por kilo de harina. Con más levadura la masa crece más rápido, pero el pan toma gusto fuerte a levadura.'],
    ['¿Por qué mi pan casero no creció?','Las causas más comunes son levadura vencida, agua demasiado caliente o una cocina muy fría. Hacé siempre la prueba de la espuma y dejá levar en un lugar tibio.'],
    ['¿Se puede hacer pan casero sin amasar tanto?','Se puede con una masa más húmeda y un levado largo en la heladera, de un día para otro. La receta de esta página usa amasado corto y levado a temperatura ambiente.'],
    ['¿Cómo sé si el pan está cocido por dentro?','Golpeá la base con los nudillos: si suena hueco, está listo. La corteza tiene que estar dorada parejo, no pálida.'],
    ['¿Puedo hacer el pan en horno de barro?','Sí. Esperá a que el tatakua baje de su temperatura más fuerte, barré las brasas a un costado y horneá vigilando, porque suele cocinar más rápido que un horno a gas.']
  ],
  related:['receta-chipa','receta-mbeju','receta-hamburguesas-caseras','receta-caldo-de-pollo'],
  guides:['guia-canasta-basica','guia-mercado-de-abasto']
};
