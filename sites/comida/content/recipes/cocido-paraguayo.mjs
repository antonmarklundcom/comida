export default {
  id:'receta-cocido-paraguayo', slug:'cocido-paraguayo', kind:'recipe', order:40,
  published:true, indexable:true, updatedAt:'2026-09-24', verifiedAt:'2026-09-24',
  source:'Receta de la redacción de comida.com.py, basada en la preparación tradicional paraguaya',
  label:'Cocido paraguayo',
  seoTitle:'Cocido paraguayo: receta del cocido quemado',
  meta:'Cómo hacer cocido paraguayo quemado: yerba y azúcar tostadas con brasa o en la olla, después agua o leche. Cantidades, paso a paso y el desayuno ideal.',
  h1:'Cocido paraguayo: cómo hacer el cocido quemado de siempre',
  cardText:'Yerba y azúcar tostadas hasta caramelizar, con agua o con leche caliente.',
  course:'Merienda', cuisine:'Paraguaya', category:['paraguaya','rapida'],
  keywords:['cocido paraguayo','cocido quemado','desayuno paraguayo','cómo hacer cocido','cocido con leche'],
  intro:[
    'El cocido quemado es la bebida caliente de la mañana y de la tarde en muchas casas paraguayas. Su secreto está en el primer paso: la yerba mate y el azúcar se tuestan juntos, con una brasa encendida o directamente en la olla, hasta que el azúcar se vuelve caramelo y la yerba suelta un aroma tostado. Recién entonces se agrega el agua.',
    'El resultado es una infusión oscura, dulce y con un amargor suave, que se toma sola o cortada con leche. Acá tenés las dos formas de quemarlo, las cantidades para cuatro tazas grandes y qué servir al lado para armar un desayuno paraguayo completo.'
  ],
  times:{prep:5, cook:12, rest:3}, difficulty:'Fácil',
  yield:{mode:'porciones', base:4, options:[2,4,6,12], yieldText:'4 tazas grandes', note:'Cada taza tiene unos 250 ml. La cantidad de azúcar es orientativa: ajustala a tu gusto antes de quemar.'},
  ingredients:[
    {group:'Para quemar', items:[
      {q:4, u:'cda', item:'yerba mate', note:'colmadas; sirve la misma yerba del tereré'},
      {q:4, u:'cda', item:'azúcar', note:'blanca o morena'}
    ]},
    {group:'Para completar', items:[
      {q:1, u:'l', item:'agua'},
      {q:500, u:'ml', item:'leche', note:'opcional, para el cocido con leche'},
      {q:1, u:'u', item:'brasa de carbón o leña', one:'brasa de carbón o leña', note:'solo para el método tradicional', scale:false}
    ]}
  ],
  steps:[
    {title:'Elegí el recipiente', text:'Usá una olla chica o un jarro de metal enlozado de fondo grueso, con capacidad para algo más de un litro. Nada de antiadherente ni plástico: el caramelo supera con facilidad los 150 °C y la brasa puede dañar el revestimiento.'},
    {title:'Poné la yerba y el azúcar', text:'Echá la yerba y el azúcar en el jarro seco y mezclalos con una cuchara de metal para que el azúcar quede repartido entre las hojas.'},
    {title:'Método de la olla: tostá a fuego medio', text:'Llevá el jarro al fuego medio y revolvé sin parar. Primero se funde el azúcar en los bordes, después toma color ámbar y la yerba empieza a tostarse. Cuando todo esté color caramelo oscuro y salga un humo leve con olor a tostado, retirá del fuego. Si huele a quemado amargo, te pasaste.', min:4},
    {title:'Método de la brasa: quemá con carbón', text:'Si tenés fuego de carbón o leña, tomá con una pinza una brasa bien encendida, sin llama, y apoyala sobre la yerba con azúcar. Revolvé alrededor de la brasa y movela de un lado a otro hasta que el azúcar se derrita y burbujee. Sacá la brasa con la pinza y descartala en un lugar seguro.', min:2},
    {title:'Agregá el agua con cuidado', text:'Volcá el agua fría o tibia de a poco, alejando la cara: el caramelo caliente chisporrotea y larga vapor. Revolvé para despegar el caramelo del fondo; al principio se endurece y después se disuelve.'},
    {title:'Herví unos minutos', text:'Volvé el jarro al fuego y dejá que hierva suave hasta que el caramelo esté totalmente disuelto y el líquido tome un color marrón oscuro parejo.', min:5},
    {title:'Reposá y colá', text:'Apagá el fuego, tapá y esperá unos minutos para que la yerba baje al fondo. Colá con un colador de malla fina, o con uno de tela si querés un cocido más limpio.', min:3},
    {title:'Serví solo o con leche', text:'Serví el cocido negro así como está, o mezclalo mitad y mitad con leche caliente para un cocido con leche. Si lo preferís más dulce, agregá azúcar recién en la taza.'}
  ],
  tips:[
    'La brasa tiene que ser de carbón vegetal o leña sin restos de encendedor líquido, pintura ni barniz: todo lo que tenga la brasa termina en la bebida.',
    'Mantené el fuego medio al quemar en la olla. Con fuego fuerte el azúcar se quema antes de que la yerba se tueste y el cocido sale amargo.',
    'Calentá la leche aparte y sumala al final. Si hervís la yerba directamente en leche, se forma nata y el cocido queda turbio.',
    'Para una taza sola, usá una cucharada colmada de yerba y otra de azúcar con 250 ml de agua: la proporción se mantiene.',
    'El cocido colado aguanta caliente en un termo toda la mañana, práctico para llevar al trabajo o a la chacra.'
  ],
  sections:[
    {title:'Cómo armar un desayuno paraguayo', paragraphs:[
      'La taza de cocido casi nunca llega sola a la mesa. Lo más clásico es acompañarla con chipa recién horneada, un pedazo de sopa paraguaya del día anterior calentado en la sartén o un mbeju tibio con su queso derretido. En los días de semana alcanza con galleta o pan con manteca.',
      'Para una mañana de domingo con visitas, prepará el cocido para seis u ocho personas, dejá la leche caliente en una jarra aparte para que cada uno lo corte a su gusto y sumá una fuente de chipa y otra de mbeju. Es un desayuno contundente, pensado para empezar temprano.'
    ]},
    {title:'Quemado, negro o con leche: los nombres', paragraphs:[
      'Se llama cocido quemado por el paso del caramelo, que lo distingue de una simple infusión de yerba hervida. Cuando se toma sin leche se lo conoce como cocido negro, y cuando se mezcla con leche, sencillamente como cocido con leche. En muchas familias se cuenta que la brasa del fogón de la mañana era la forma natural de hacerlo antes de que hubiera cocinas a gas.'
    ]}
  ],
  variations:[
    ['Cocido con leche','Hacé el cocido con medio litro de agua en lugar de uno y completá con medio litro de leche caliente al servir. Queda más cremoso y es el favorito de los chicos.'],
    ['Con cáscara de naranja','Sumá una tira de cáscara de naranja, sin la parte blanca, cuando agregás el agua. Aporta un perfume cítrico suave que combina con el caramelo.'],
    ['Cocido en saquitos','Si usás cocido en saquitos, calentá el azúcar hasta caramelo, agregá el agua y dejá los saquitos en infusión unos minutos. Pierde algo del tostado, pero sirve para apuro.']
  ],
  storage:'El cocido colado se guarda en una botella tapada en la heladera hasta dos días. Calentalo en una olla sin hervir de más y, si lo querés con leche, sumala recién al servir.',
  faq:[
    ['¿Cómo se hace el cocido paraguayo sin brasa?','Tostando la yerba con el azúcar directamente en la olla, a fuego medio y revolviendo, hasta que el azúcar se haga caramelo oscuro. Después se agrega el agua, se hierve unos minutos y se cuela.'],
    ['¿Cuánta yerba lleva un litro de cocido?','Unas cuatro cucharadas colmadas de yerba y otras cuatro de azúcar por litro de agua. Si lo querés más fuerte, subí la yerba; si lo querés menos dulce, bajá el azúcar antes de quemar.'],
    ['¿Qué se come en el desayuno paraguayo?','Lo típico es cocido, solo o con leche, acompañado de chipa, mbeju, sopa paraguaya o galleta con manteca. En días de trabajo muchos lo resuelven con cocido y pan.'],
    ['¿Por qué mi cocido quedó amargo?','Casi siempre porque el azúcar pasó de caramelo a quemado, sobre todo con fuego fuerte. Retirá la olla apenas el color sea ámbar oscuro y el olor sea tostado, no acre.'],
    ['¿Se puede usar cualquier yerba para el cocido?','Sí, la misma yerba mate que usás para el tereré o el mate sirve. Las yerbas compuestas con yuyos le cambian el sabor; para el cocido clásico conviene una yerba sola.'],
    ['¿Es lo mismo cocido que mate cocido?','Se parecen, porque los dos son yerba en infusión, pero el cocido paraguayo pasa antes por el tostado con azúcar. Ese caramelo le da el color oscuro y el sabor que lo distingue.']
  ],
  related:['receta-chipa','receta-mbeju','receta-sopa-paraguaya','receta-chipa-almidon'],
  guides:['guia-terere','guia-comida-tipica-paraguaya'],
  cateringOccasion:'coffee-break'
};
