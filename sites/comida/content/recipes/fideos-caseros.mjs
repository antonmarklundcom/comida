export default {
  id:'receta-fideos-caseros', slug:'fideos-caseros', kind:'recipe',
  published:true, indexable:true, updatedAt:'2026-09-24', verifiedAt:'2026-09-24',
  source:'Receta de la redacción de comida.com.py, basada en la preparación casera tradicional',
  label:'Fideos caseros',
  seoTitle:'Fideos caseros: receta de pasta con huevo',
  meta:'Receta de fideos caseros con harina y huevo, estirados con palote o máquina. Proporciones, descanso de la masa, corte y cocción, sin secretos.',
  h1:'Fideos caseros de harina y huevo, a mano o con máquina',
  cardText:'Masa de harina y huevo estirada y cortada en tallarines, lista en minutos.',
  course:'Plato principal', cuisine:'Casera', category:['rapida'],
  keywords:['fideos caseros','receta de fideos caseros','pasta casera','tallarines caseros','masa para fideos caseros','fideos caseros con huevo'],
  intro:[
    'Los fideos caseros llevan solo harina, huevos, una pizca de sal y un chorrito de aceite. La masa se amasa hasta que queda lisa, descansa media hora y se estira bien fina con palote o con máquina de pastas. Cortados en tiras, se cocinan en dos o tres minutos y tienen una textura que ningún paquete iguala.',
    'La proporción clásica es un huevo por cada 100 gramos de harina. Con medio kilo de harina salen seis platos de tallarines, suficientes para un almuerzo de domingo con tuco o salsa de carne.'
  ],
  times:{prep:40, cook:5, rest:30}, difficulty:'Media',
  yield:{mode:'porciones', base:6, options:[2,4,6,12], yieldText:'6 porciones', note:'Unos 85 g de harina por persona. Si los fideos van con una salsa muy abundante o hay entrada, alcanza para siete u ocho.'},
  ingredients:[
    {group:'Para la masa', items:[
      {q:500, u:'g', item:'harina de trigo 000', note:'más un poco para estirar'},
      {q:5, u:'u', item:'huevos', one:'huevo', note:'a temperatura ambiente'},
      {q:1, u:'cdita', item:'sal fina'},
      {q:1, u:'cda', item:'aceite'},
      {q:null, item:'agua', note:'al gusto, solo si la masa queda seca'}
    ]},
    {group:'Para cocinar', items:[
      {q:5, u:'l', item:'agua', note:'para hervir'},
      {q:2, u:'cda', item:'sal gruesa'}
    ]}
  ],
  steps:[
    {title:'Formá la corona de harina', text:'Poné la harina sobre la mesada limpia o en un bol grande y abrí un hueco amplio en el centro. Mezclá la sal con la harina antes, para que se reparta pareja en toda la masa.'},
    {title:'Batí los huevos en el centro', text:'Rompé los huevos dentro del hueco, sumá el aceite y batilos con un tenedor. Andá tomando harina de los bordes de a poco, sin romper la pared, hasta que se forme una pasta espesa.'},
    {title:'Amasá hasta que quede lisa', text:'Uní con las manos el resto de la harina y amasá empujando con la base de la palma y plegando. Al principio parece seca y quebradiza; tras unos diez minutos tiene que quedar lisa, firme y elástica. Si no se une, mojate las manos y seguí.', min:10},
    {title:'Dejala descansar tapada', text:'Envolvé la masa en film o tapala con un bol dado vuelta. El descanso relaja el gluten: sin él, al estirar la masa se encoge y vuelve a su forma.', min:30},
    {title:'Estirá bien fina', text:'Dividí la masa en cuatro. Con palote, estirá cada parte sobre la mesada enharinada girándola un cuarto de vuelta cada tanto, hasta que casi se transparente. Con máquina, pasala primero por el rodillo más ancho doblándola en tres un par de veces, y después bajá número por número.'},
    {title:'Cortá los fideos', text:'Espolvoreá la lámina con harina, dejala orear un par de minutos y enrollala sin apretar. Cortá el rollo en rodajas del ancho que quieras: medio centímetro para tallarines, un centímetro y medio para cintas anchas. Desenrollá y abrí los nidos con los dedos.'},
    {title:'Hervilos en poco tiempo', text:'Llevá a hervor abundante agua con la sal gruesa. Echá los fideos, revolvé enseguida para que no se peguen y cociná hasta que estén tiernos pero firmes al morder. Frescos tardan mucho menos que los secos.', min:3},
    {title:'Escurrí y mezclá con la salsa', text:'Guardá una taza del agua de cocción antes de escurrir. Pasá los fideos a la salsa caliente y, si quedan secos, sumá un chorrito de esa agua con almidón: ayuda a que la salsa se pegue a la pasta.'}
  ],
  tips:[
    'El tamaño de los huevos cambia la hidratación. Si la masa no se une, agregá agua de a una cucharadita; si se pega, harina de a una cucharada.',
    'Mientras estirás una parte, mantené las demás tapadas: la masa se seca rápido y se agrieta en los bordes.',
    'Enharinar bien la lámina antes de enrollarla es lo que evita que los fideos se peguen entre sí al cortarlos.',
    'Para fideos más amarillos y sabrosos, reemplazá dos huevos enteros por cuatro yemas.',
    'Salá bien el agua de cocción: la masa casera lleva poca sal y es la única oportunidad de condimentar la pasta por dentro.'
  ],
  sections:[
    {title:'Palote o máquina', paragraphs:['Con palote se logra una pasta un poco más rugosa, que retiene mejor la salsa, pero lleva práctica llegar a una lámina pareja y fina. La máquina manual de rodillos hace el trabajo en la mitad de tiempo y deja un espesor uniforme; casi todas traen además un cortador de tallarines y otro de cintas.','Si es tu primera vez con palote, estirá porciones chicas. Una lámina grande es difícil de mover y se rompe; cuatro láminas medianas se manejan sin problema en cualquier mesada de cocina.']},
    {title:'Salsas que van con fideos caseros', paragraphs:['Una salsa bolognesa espesa o un tuco de carne cocinado despacio son el acompañamiento de siempre. La salsa blanca con jamón y arvejas, o una crema de queso, van bien con las cintas anchas. Para algo liviano alcanza con manteca, ajo dorado y perejil, o con aceite de oliva, tomate fresco picado y albahaca.']}
  ],
  variations:[
    ['Fideos de espinaca','Procesá 150 g de espinaca cocida y bien exprimida con los huevos y usá un huevo menos. La masa sale verde y pide algo más de harina.'],
    ['Con semolín','Reemplazá un tercio de la harina por semolín o sémola de trigo. Los fideos quedan más firmes y amarillos, y aguantan mejor la cocción.'],
    ['Fideos para sopa','Estirá la masa un poco más gruesa y cortala en cuadraditos o tiras cortas. Van directo al caldo de pollo en los últimos minutos.']
  ],
  storage:'Frescos y crudos, podés dejarlos orear en nidos sobre un repasador enharinado y cocinarlos en el día. En la heladera, tapados, aguantan hasta dos días. También se congelan crudos, en nidos separados; se echan al agua sin descongelar y tardan un minuto más.',
  faq:[
    ['¿Cuántos huevos por kilo de harina para fideos caseros?','La proporción de referencia es 10 huevos por kilo de harina, es decir uno cada 100 g. Ajustá con agua o harina según el tamaño de los huevos.'],
    ['¿Cuánto tiempo se hierven los fideos caseros?','Entre dos y cuatro minutos según el grosor. Probá uno a los dos minutos: tiene que estar tierno pero con un centro firme.'],
    ['¿Se pueden hacer fideos caseros sin huevo?','Sí, con harina, agua tibia, sal y aceite. La masa es más elástica y menos sabrosa; conviene usar parte de semolín para darle cuerpo.'],
    ['¿Por qué mi masa de fideos se rompe al estirar?','Casi siempre porque le faltó descanso o porque quedó seca. Dejala reposar tapada media hora y, si igual se agrieta, humedecé las manos y volvé a amasar.'],
    ['¿Qué harina conviene para pasta casera?','La harina de trigo 000 funciona muy bien. Con 0000 la masa sale más suave pero menos firme; mezclar con semolín mejora la mordida.']
  ],
  related:['receta-salsa-bolonesa','receta-salsa-blanca','receta-noquis-caseros','receta-lasana-de-carne','receta-caldo-de-pollo'],
  guides:['guia-que-cocinar-hoy','guia-cuanta-comida-por-persona']
};
