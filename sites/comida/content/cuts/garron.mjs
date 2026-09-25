// Meat cut module: garrón. Shape: see plan/prompts/CONTENT-WRITER.md, Guide and cut fields.
export default {
  id:'corte-garron', slug:'garron', kind:'cut', animal:'Vacuno',
  published:true, indexable:true, updatedAt:'2026-09-24', verifiedAt:'2026-09-24',
  source:'Guía de la redacción de comida.com.py, basada en la práctica de carnicería y cocina casera del Río de la Plata y de Paraguay',
  label:'Garrón',
  seoTitle:'Garrón de vaca: qué es y cómo cocinarlo',
  meta:'Garrón de vaca: qué parte es, en qué se diferencia del osobuco, cómo cocinarlo en olla o al horno hasta que se deshaga y qué cambia su precio por kilo.',
  h1:'Garrón de vaca: qué es, su relación con el osobuco y cómo cocinarlo',
  cardText:'El corte de la pata que, con paciencia, termina en la carne más tierna.',
  category:['carne','paraguaya'],
  keywords:['garron de vaca','garrón','garrón de vaca'],

  image:79,
  intro:[
    'El garrón es la parte baja de la pata del vacuno, entre la rodilla y la pezuña. Es un corte lleno de tendones, nervios y colágeno, de los que no se pueden hacer rápido: a la parrilla o en la sartén queda duro como una suela. Pero cocinado despacio, con líquido, se transforma en una carne suave, gelatinosa y muy sabrosa.',
    'Es el mismo corte del que sale el osobuco, y por eso muchos los confunden. En esta página te explicamos qué los diferencia, cómo elegir un buen garrón, cómo cocinarlo entero o en trozos, cuánto rinde y por qué es uno de los cortes que más conviene en una cocina de olla.'
  ],
  facts:[
    ['Animal','Vacuno'],
    ['Zona del animal','Parte baja de la pata, entre la rodilla y la pezuña; hay garrón trasero y delantero'],
    ['Otros nombres','Brazuelo (el delantero, en algunas carnicerías); músculo (Brasil); cortado en rodajas con hueso es el osobuco'],
    ['Mejor cocción','Olla o horno tapado, a fuego suave y por varias horas'],
    ['Por persona','400 a 450 g con hueso, o 250 g sin hueso (estimación)']
  ],
  estimate:'Los gramos por persona de esta página son estimaciones de la redacción; el hueso y la pérdida en la cocción pesan mucho en este corte, así que ajustalos a tu mesa.',
  sections:[
    {id:'que-es', title:'Qué es el garrón', paragraphs:[
      'El garrón es la pantorrilla del vacuno. Los músculos de esa zona mueven la pata todo el día, así que están atravesados por tendones y envueltos en tejido conectivo. Ese tejido es colágeno: duro en crudo, pero con cocción larga y húmeda se convierte en gelatina, que le da a la carne una textura melosa y al caldo cuerpo y brillo.',
      'Hay garrón trasero y delantero. El trasero suele ser más grande y carnoso; el delantero, que en algunas carnicerías se vende como brazuelo, es un poco más chico. Los dos sirven para lo mismo, y en la mayoría de los locales se venden juntos bajo el nombre de garrón.'
    ]},
    {id:'osobuco', title:'Garrón y osobuco: cuál es la diferencia', paragraphs:[
      'El osobuco no es otro corte: es el garrón cortado en rodajas transversales, con el hueso en el centro y su médula. Mientras que el garrón se vende entero, con el hueso o deshuesado, el osobuco llega en discos de dos a cuatro centímetros listos para la olla.',
      'La diferencia práctica está en el uso. El osobuco se cocina más rápido, porque cada rodaja es fina, y aporta la médula al guiso. El garrón entero o en trozos grandes tarda más, pero queda más jugoso y se puede desmechar para rellenos, empanadas o sándwiches. Si querés el detalle del osobuco, tenés su propia página en el sitio.'
    ], table:{caption:'Garrón y osobuco, lado a lado', head:['','Garrón','Osobuco'], rows:[
      ['Forma','Pieza entera o en trozos grandes','Rodajas con hueso y médula'],
      ['Con hueso','Con o sin hueso','Siempre con hueso'],
      ['Tiempo en olla','3 a 4 horas entero','2 a 3 horas'],
      ['Mejor para','Desmechar, horno tapado, caldos','Guisos, puchero, estofados']
    ], note:'Tiempos orientativos de la redacción a fuego suave; en olla a presión se reducen mucho.'}},
    {id:'como-elegir', title:'Cómo elegir un buen garrón', items:[
      'Carne de color rojo intenso, con los tendones blancos o nacarados y sin olor fuerte.',
      'Si lo comprás con hueso, mirá que tenga carne alrededor en todo el largo y no solo en un extremo.',
      'Deshuesado rinde más por kilo, pero guardá el hueso si te lo dan: suma mucho sabor al caldo.',
      'Para la olla familiar, pedilo en trozos de unos 5 centímetros; para el horno, entero o en dos mitades.'
    ]},
    {id:'como-cocinar', title:'Cómo cocinar el garrón paso a paso', paragraphs:[
      'La receta base es un braseado: dorar, sumar verduras y líquido y dejar que el tiempo haga el trabajo. Sirve para la olla en la cocina o para el horno con la asadera bien tapada.'
    ], steps:[
      'Secá los trozos de garrón y salpimentalos. Doralos en una olla pesada con un poco de aceite, en tandas, hasta que tengan buen color por todos lados.',
      'Retirá la carne y en la misma olla rehogá cebolla, locote, zanahoria y ajo picados hasta que estén tiernos.',
      'Agregá tomate triturado y un vaso de vino tinto o de caldo, raspando el fondo para levantar lo dorado.',
      'Volvé la carne a la olla y cubrila casi por completo con caldo caliente. Sumá laurel y orégano.',
      'Tapá y cociná a fuego mínimo, apenas con un burbujeo suave, entre 3 y 4 horas. En el horno, con la olla o la asadera tapada, a 160 °C, el tiempo es parecido.',
      'Está listo cuando la carne se separa del hueso y se desarma con el tenedor. Si la salsa quedó líquida, destapá y reducila los últimos 20 minutos.'
    ], after:['En olla a presión, una vez que toma presión, contá entre 50 y 70 minutos según el tamaño de los trozos. Dejá que baje la presión sola antes de abrir.']},
    {id:'usos', title:'Qué hacer con el garrón', cards:[
      ['Puchero y caldos','Con hueso, le da al puchero un caldo con cuerpo. Sacá la carne cuando esté tierna y seguí con las verduras.'],
      ['Guiso y estofado','En trozos, junto con papa, mandioca o fideos, rinde un plato completo para toda la familia.'],
      ['Desmechado','Tierno y sin hueso, se desmecha para empanadas, tacos, sándwiches o para sumar a un arroz.'],
      ['Al horno','Entero, tapado y con verduras, queda como una pieza de fiesta que se sirve en la misma fuente.']
    ]},
    {id:'cuanto-comprar', title:'Cuánto comprar por persona', paragraphs:[
      'Como estimación de la redacción, contá entre 400 y 450 gramos de garrón con hueso por adulto si es el plato principal, o unos 250 gramos si lo comprás deshuesado. El garrón pierde bastante peso en la cocción larga, pero la salsa y las guarniciones lo estiran. Para un puchero con muchas verduras, podés bajar a 300 gramos con hueso por persona. Si armás un menú con varios cortes, la guía de cuánta carne por persona te ayuda a repartir.'
    ]},
    {id:'precio', title:'Qué cambia el precio del garrón', paragraphs:[
      'El garrón está entre los cortes más económicos del vacuno porque necesita mucho tiempo de cocción y tiene hueso y tendones. El precio por kilo cambia sobre todo según venga con hueso o deshuesado: sin hueso cuesta más por kilo, pero pagás solo carne. También influyen si es trasero o delantero, si está limpio de grasa exterior y si lo comprás entero o cortado en rodajas como osobuco, que a veces se cobra aparte por el trabajo de la sierra.'
    ]}
  ],
  recipes:['receta-osobuco-a-la-olla','receta-puchero-paraguayo','receta-estofado-de-carne','receta-guiso-paraguayo','receta-empanadas-de-carne'],
  related:['corte-osobuco','corte-marucha','corte-aguja','guia-cuanta-carne-por-persona','guia-cortes-de-carne-vacuna'],
  faq:[
    ['¿El garrón y el osobuco son lo mismo?','Vienen de la misma parte de la pata. El osobuco es el garrón cortado en rodajas con el hueso y la médula; el garrón se vende entero o en trozos, con o sin hueso.'],
    ['¿Qué parte de la vaca es el garrón?','Es la parte baja de la pata, entre la rodilla y la pezuña. Hay garrón trasero, más grande, y delantero, que a veces se vende como brazuelo.'],
    ['¿Cuánto tiempo tarda el garrón en la olla?','Entre 3 y 4 horas a fuego mínimo si está entero o en trozos grandes. En olla a presión, unos 50 a 70 minutos desde que toma presión.'],
    ['¿El garrón de vaca se puede hacer a la parrilla?','No conviene: tiene mucho colágeno y tendones que solo se ablandan con cocción larga y húmeda. En la parrilla queda duro.'],
    ['¿Para qué sirve el garrón?','Para puchero, caldos, guisos, estofados y para desmechar en empanadas o sándwiches. También queda muy bien al horno tapado, con verduras.'],
    ['¿Por qué el garrón es más barato?','Porque tiene hueso y tendones y necesita horas de cocción. El precio por kilo sube si lo comprás deshuesado o ya cortado como osobuco.']
  ],
  ctaTitle:'Comida casera para muchos',
  ctaText:'¿Querés un guiso, un puchero o carne desmechada para una reunión grande o un almuerzo de la empresa? Contanos la fecha, la zona y cuántos son, y te ayudamos a consultar un catering en Gran Asunción.',
  waMessage:'Hola, quiero consultar por un menú casero con carne para un evento.'
};
