// Meat cut module: lechón. Shape: see plan/prompts/CONTENT-WRITER.md, Guide and cut fields.
export default {
  id:'corte-lechon', slug:'lechon', kind:'cut', order:17, animal:'Cerdo',
  published:true, indexable:true, updatedAt:'2026-09-24', verifiedAt:'2026-09-24',
  source:'Guía de la redacción de comida.com.py, basada en la práctica de carnicería y la cocina de fiestas del Paraguay y el Río de la Plata',
  label:'Lechón',
  seoTitle:'Lechón: cómo encargarlo y asarlo',
  meta:'Lechón para fiestas: cómo encargarlo, qué peso pedir según los invitados, lechón a la parrilla, a la estaca y al horno, tiempos y qué cambia el precio.',
  h1:'Lechón: cómo encargarlo para una fiesta y cómo asarlo',
  cardText:'El cerdo joven entero de las fiestas: cuánto pedir, cómo encargarlo y cómo asarlo.',
  category:['carne','fiesta','horno'],
  keywords:['lechón','lechon a la parrilla','lechon a la estaca','lechon precio','lechón precio','lechon asado','lechon entero','precio de lechón de 10 kilos'],
  image:74,
  intro:[
    'El lechón es un cerdo joven que se cocina entero, abierto o en mitades, hasta que la carne se deshace y el cuero queda dorado y crujiente. En Paraguay es un plato de celebración: aparece en Navidad y Año Nuevo, en cumpleaños grandes, casamientos y fiestas de familia, casi siempre al centro de la mesa y con sopa paraguaya, mandioca y ensaladas al lado.',
    'Como no es algo que se compre de un día para otro, conviene saber cómo se encarga, qué peso pedir para la cantidad de invitados, qué método de cocción elegir según el lugar y el tiempo que tengas, y qué preguntar para comparar precios de forma justa.'
  ],
  facts:[
    ['Animal','Cerdo'],
    ['Zona del animal','Animal entero, joven; se vende faenado y limpio'],
    ['Otros nombres','Lechón entero, cochinillo (en España, para animales muy chicos), chanchito'],
    ['Mejor cocción','Parrilla abierto a fuego suave, a la estaca junto al fuego o al horno'],
    ['Por persona','400 a 500 g de lechón faenado por adulto (estimación)']
  ],
  estimate:'Los gramos por persona son estimaciones de la redacción que cuentan hueso, cabeza y cuero: ajustalos según el apetito y los otros platos de la fiesta.',
  sections:[
    {id:'que-es', title:'Qué es un lechón', paragraphs:[
      'Se llama lechón al cerdo joven que se faena con poco peso, cuando la carne todavía es clara, tierna y con una capa de grasa fina bajo el cuero. El tamaño que se usa para asar entero varía mucho: hay lechones chicos para una mesa familiar y otros bastante más grandes para una fiesta. Cuanto más grande, más carne por kilo, pero también más tiempo de cocción y más espacio necesario.',
      'Al comprar vas a escuchar dos pesos distintos. El peso vivo es el del animal antes de faenar; el peso faenado es el de la carcasa limpia, sin vísceras, lista para cocinar. Al pedir, dejá claro de cuál se habla, porque la diferencia es grande y cambia tanto la cantidad de carne como el precio.'
    ]},
    {id:'como-encargarlo', title:'Cómo se encarga un lechón para una fiesta', paragraphs:[
      'Lo habitual es encargarlo con anticipación en una carnicería que trabaje cerdo, a un criador o a un servicio de asado que lo entregue cocido. Para las fiestas de fin de año la demanda es muy alta, así que conviene hacer el pedido con semanas de margen y confirmar unos días antes.'
    ], items:[
      'Decí para cuántas personas es y preguntá qué peso faenado te recomiendan.',
      'Aclará si lo querés entero, abierto al medio o partido en mitades para que entre en tu parrilla u horno. Medí el espacio antes.',
      'Preguntá si viene limpio, pelado y sin vísceras, y si incluye la cabeza.',
      'Consultá si te lo pueden entregar el día anterior; la mayoría de los métodos piden adobarlo o salarlo con tiempo.',
      'Si lo encargás ya cocido, preguntá a qué hora sale del fuego, cómo se transporta y si se entrega trozado.',
      'Pedí que te confirmen el peso final al retirarlo, para saber cuánto estás pagando y cuánto rinde.'
    ]},
    {id:'peso', title:'Qué peso pedir según los invitados', table:{caption:'Estimación de la redacción para un lechón como carne principal', head:['Invitados adultos','Peso faenado aproximado','Comentario'], rows:[
      ['8 a 10','4 a 5 kg','Entra en la mayoría de los hornos de casa, partido al medio'],
      ['15 a 20','7 a 10 kg','Tamaño típico para parrilla familiar, abierto'],
      ['25 a 30','11 a 14 kg','Pide parrilla grande o estaca'],
      ['40 o más','Dos lechones o sumar otra carne','Más práctico que un solo animal muy grande']
    ], note:'Si el lechón comparte la mesa con otras carnes, podés bajar el peso a la mitad. Con muchos chicos, calculá dos chicos por cada adulto.'}},
    {id:'parrilla', title:'Lechón a la parrilla', paragraphs:[
      'Es el método más común en casa. El lechón se abre por el medio, a lo largo del lomo o del vientre, para que quede plano, y se cocina a fuego suave durante varias horas. La clave es que la brasa sea pareja y baja: el cuero se quema rápido y la grasa que gotea levanta llamas.'
    ], steps:[
      'La noche anterior, salalo por dentro y por fuera y adobalo del lado de la carne con ajo, limón o naranja agria, orégano y un poco de ají si te gusta. Guardalo en frío.',
      'Armá una cama de brasas repartida en toda la superficie, para fuego suave. Tenés que poder mantener la mano sobre la parrilla unos diez segundos.',
      'Poné el lechón abierto con el cuero hacia arriba. Cociná de 2 a 2 ½ horas para uno de 8 a 10 kilos, agregando brasas por los costados cada tanto.',
      'Cuando la carne del lado de abajo esté dorada y los huesos se vean bien cocidos, dalo vuelta con ayuda. Secá el cuero con un paño y salalo.',
      'Cociná con el cuero hacia abajo 1 a 1 ½ horas más, con brasas un poco más vivas, hasta que se infle y cruja. Vigilalo para que no se queme.',
      'Comprobá la cocción en la parte más gruesa de la pierna: tiene que superar los 63 °C y los jugos tienen que salir claros. Dejalo reposar un rato antes de trozar.'
    ]},
    {id:'estaca-y-horno', title:'Lechón a la estaca y al horno', paragraphs:[
      'A la estaca, el lechón abierto se sujeta a una cruz o armazón de hierro que se clava en el suelo, inclinada frente a un fuego de leña. No recibe el calor desde abajo sino de costado, así que se cocina más lento, entre cuatro y seis horas según el tamaño y el viento, y la grasa cae al suelo sin encender llamas. Primero se expone el lado de la carne y al final el del cuero. Es un método de campo que necesita lugar abierto, leña abundante y alguien atento al fuego todo el tiempo.',
      'Al horno es la opción más controlada y la que permite adelantar trabajo. Para un lechón de 4 a 6 kilos, partido al medio si no entra entero, se cocina en asadera con un poco de agua o caldo en el fondo, a 160 °C, de 3 a 4 horas, primero con el cuero hacia abajo y la última hora con el cuero hacia arriba, subiendo el horno a 220 °C en el final para que quede crocante. La receta de lechón al horno del sitio tiene el paso a paso.'
    ]},
    {id:'tiempos', title:'Tiempos orientativos por método', table:{caption:'Para un lechón faenado, con fuego o horno estable', head:['Método','Peso','Tiempo total','Señal de que está'], rows:[
      ['Parrilla abierto','8 a 10 kg','3 ½ a 4 h','Cuero crujiente, carne que se separa del hueso'],
      ['A la estaca','8 a 12 kg','4 a 6 h','Pierna tierna al pinchar, jugos claros'],
      ['Horno','4 a 6 kg','3 a 4 h','Más de 63 °C en la pierna, cuero inflado']
    ], note:'La temperatura mínima segura para el cerdo es 63 °C en la parte más gruesa, con reposo; el lechón queda tierno bastante por encima de ese punto.'}},
    {id:'precio', title:'Qué cambia el precio de un lechón', paragraphs:[
      'El precio de un lechón se suele calcular por kilo, así que la primera pregunta es si ese kilo es vivo o faenado: un lechón de diez kilos vivo rinde bastante menos carne que uno de diez kilos faenado. También cambia si viene limpio y listo para cocinar, si incluye la cabeza y si lo entregan crudo o ya asado, porque en ese caso se paga también el trabajo, la leña y las horas de fuego.',
      'La época pesa mucho. En diciembre la demanda sube y los lechones se reservan con tiempo, mientras que en otros meses es más fácil conseguirlos. Al comparar ofertas, pedí siempre el mismo dato: peso faenado, estado de entrega y si está crudo o cocido.'
    ]},
    {id:'servir', title:'Cómo se sirve y con qué', paragraphs:[
      'El lechón se lleva a la mesa entero para mostrarlo y después se troza con cuchillo grande o tijera de cocina: paletas, piernas, costillas y el lomo en porciones, siempre con un pedazo de cuero. Van muy bien la sopa paraguaya, la chipa guazú, la mandioca hervida y una ensalada fresca con tomate y cebolla.',
      'Si sobra, la carne desmenuzada sirve para sándwiches en pan casero o para rellenar empanadas. Guardala en la heladera, bien tapada, y consumila en dos o tres días.'
    ]}
  ],
  recipes:['receta-lechon-al-horno','receta-sopa-paraguaya','receta-chipa-guazu','receta-ensalada-rusa','receta-pan-casero'],
  related:['guia-cuanta-carne-por-persona','catering-lechon-para-eventos','coleccion-navidad','coleccion-fin-de-ano','corte-pernil-de-cerdo','guia-cortes-de-cerdo'],
  faq:[
    ['¿Cuántas personas comen con un lechón de 10 kilos?','Como estimación, un lechón de 10 kilos faenado alcanza para unos 20 adultos si es la carne principal, y para más si la mesa tiene otras carnes.'],
    ['¿Cuánto tarda un lechón a la parrilla?','Uno de 8 a 10 kilos, abierto y a fuego suave, tarda entre tres horas y media y cuatro horas: la mayor parte con el cuero hacia arriba y el final con el cuero hacia las brasas.'],
    ['¿Qué es el lechón a la estaca?','Es el lechón abierto y sujeto a una cruz de hierro clavada en el suelo, inclinada frente a un fuego de leña. Se cocina con calor de costado durante varias horas.'],
    ['¿Qué cambia el precio de un lechón?','Si el peso es vivo o faenado, si viene limpio, si lo entregan crudo o asado y la época del año. En diciembre la demanda es mucho mayor.'],
    ['¿Con cuánta anticipación se encarga un lechón?','Para las fiestas de fin de año, con semanas de margen. En otras épocas suele alcanzar con algunos días, pero conviene confirmar el peso y la fecha de entrega.'],
    ['¿Cómo hago para que el cuero del lechón quede crocante?','Secalo bien, salalo y terminá la cocción con el cuero hacia el calor más fuerte, en la parrilla o con el horno a unos 220 °C, vigilando que no se queme.'],
    ['¿A qué temperatura tiene que estar el lechón?','Por seguridad, al menos 63 °C en la parte más gruesa de la pierna, con un reposo. Para que quede tierno, se cocina bastante más.']
  ],
  ctaTitle:'Lechón para tu fiesta',
  ctaText:'¿Querés un lechón asado para Navidad, un cumpleaños o un evento grande? Indicanos la fecha, el lugar y cuántos invitados esperás, y te ayudamos a encontrar quién lo prepare en Gran Asunción.',
  waMessage:'Hola, quiero consultar por un lechón asado para un evento.'
};
