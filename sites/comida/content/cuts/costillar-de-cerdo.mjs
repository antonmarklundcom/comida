// Meat cut module: costillar de cerdo. Shape: see plan/prompts/CONTENT-WRITER.md, Guide and cut fields.
export default {
  id:'corte-costillar-de-cerdo', slug:'costillar-de-cerdo', kind:'cut', order:8, animal:'Cerdo',
  published:true, indexable:true, updatedAt:'2026-09-24', verifiedAt:'2026-09-24',
  source:'Guía de la redacción de comida.com.py, basada en la práctica de carnicería y parrilla del Río de la Plata',
  label:'Costillar de cerdo',
  seoTitle:'Costillar de cerdo: cómo elegirlo y hacerlo',
  meta:'Costillar de cerdo: qué partes tiene, cómo elegirlo, tiempos a la parrilla y al horno para que se suelte del hueso, cuánto comprar y qué cambia su precio.',
  h1:'Costillar de cerdo: a la parrilla o al horno, tierno hasta el hueso',
  cardText:'Costillas de cerdo que se hacen despacio hasta que la carne se suelta del hueso.',
  category:['carne','fiesta','horno'],
  keywords:['costillar de cerdo','costillar precio','costillar de cerdo a la parrilla','costillar de cerdo al horno','costilla de cerdo','pechito de cerdo'],
  intro:[
    'El costillar de cerdo son las costillas del animal con la carne que las cubre, vendidas en una plancha entera o en tiras. Tiene hueso, grasa y colágeno en buena cantidad, y por eso necesita cocción lenta: bien hecho, la carne se despega del hueso con solo morderla.',
    'Es un clásico de los asados familiares y también del horno, pintado con alguna salsa al final. Acá te contamos qué partes tiene, cómo elegirlo, tiempos y señales para la parrilla, el horno y la olla, cuánto comprar por persona y los errores más frecuentes.'
  ],
  facts:[
    ['Animal','Cerdo'],
    ['Zona del animal','Caja torácica: costillas de la zona del lomo y del pecho'],
    ['Otros nombres','Pechito o costilla de cerdo (Argentina), costela suína (Brasil), ribs, spare ribs o baby back (inglés)'],
    ['Mejor cocción','Parrilla a fuego suave u horno, por tiempo largo'],
    ['Por persona','400 a 500 g con hueso (estimación)']
  ],
  estimate:'Las cantidades por persona son estimaciones de la redacción e incluyen el hueso; ajustalas si el costillar comparte la mesa con otras carnes.',
  sections:[
    {id:'que-es', title:'Qué es el costillar de cerdo y qué partes tiene', paragraphs:[
      'Las costillas del cerdo se dividen en dos zonas. Las de arriba, pegadas al lomo, son más cortas, curvas y con carne más magra entre los huesos; en inglés se conocen como baby back. Las de abajo, hacia el pecho y la panza, son más largas, planas y con más grasa: en Argentina se venden como pechito de cerdo y en inglés como spare ribs.',
      'En la carnicería vas a encontrar el costillar entero, en planchas de varias costillas o cortado en tiras transversales, con los huesos en rodajas. Las planchas son mejores para la parrilla y el horno; las tiras finas se prestan para la olla o para cocinar rápido en plancha.'
    ]},
    {id:'como-elegir', title:'Cómo elegir el costillar en la carnicería', paragraphs:[
      'Buscá costillas con buena carne entre los huesos y por encima, no solo hueso a la vista. La carne tiene que ser rosada, la grasa blanca y firme, y el olor limpio. Evitá las planchas con huesos rotos o astillados en los cortes.'
    ], items:[
      'Para parrilla u horno, pedí planchas enteras de unas ocho a doce costillas: se manejan bien y no se secan.',
      'Si preferís carne más magra, elegí la parte del lomo; si te gusta más jugosa y con grasa, la del pechito.',
      'Pedí que te retiren la membrana del lado del hueso, o sacala en casa levantándola con un cuchillo y tirando con un papel.',
      'Revisá que las costillas tengan un grosor de carne parejo para que se cocinen al mismo tiempo.'
    ]},
    {id:'coccion', title:'Cómo cocinar el costillar: tiempos y señales', paragraphs:[
      'Con el costillar, la seguridad y la terneza van juntas: la carne de cerdo tiene que quedar bien cocida, y para que se suelte del hueso hace falta llegar bastante más allá del punto seguro. Las señales más útiles son visuales: la carne se retrae y deja ver el extremo del hueso, y al levantar la plancha por un lado se dobla y se agrieta en la superficie.'
    ], table:{caption:'Tiempos orientativos para planchas de costillar de cerdo', head:['Método','Cómo','Tiempo','Señal de que está'], rows:[
      ['Parrilla','Brasa suave, hueso hacia abajo primero','1 ½ a 2 horas','Carne retraída del hueso; la plancha se dobla al levantarla'],
      ['Horno','Tapado a 160 °C, luego destapado a 200 °C','1 ½ a 2 horas tapado y 20 a 30 min destapado','Se separa del hueso con un tenedor'],
      ['Olla','En tiras, dorado y guisado con salsa','1 a 1 ½ horas','Carne blanda que se despega sola'],
      ['Plancha','Solo tiras finas, previamente cocidas','5 a 8 min en total','Bien dorado por fuera']
    ], note:'Si usás termómetro, el costillar está seguro desde 63 °C, pero para que la carne se desprenda del hueso suele necesitar entre 85 y 90 °C.'}},
    {id:'parrilla', title:'Costillar de cerdo a la parrilla, paso a paso', steps:[
      'Retirá la membrana del lado del hueso y salá la plancha de los dos lados. Si querés, sumá ajo, pimentón o limón.',
      'Prepará brasa suave y poné el costillar con el hueso hacia el fuego: el hueso transmite el calor y protege la carne.',
      'Cociná la mayor parte del tiempo de ese lado, alrededor de una hora a una hora y cuarto, reponiendo brasa para que el calor no baje.',
      'Dalo vuelta y dorá el lado de la carne entre 20 y 30 minutos más, con fuego un poco más vivo.',
      'Si lo querés con salsa, pintalo en los últimos diez minutos para que no se queme el azúcar.',
      'Cortá entre hueso y hueso y serví enseguida.'
    ]},
    {id:'cuanto-comprar', title:'Cuánto costillar comprar por persona', paragraphs:[
      'Como la mitad del peso puede ser hueso, la estimación de la redacción es de 400 a 500 gramos de costillar por adulto cuando es la carne principal. En un asado con carne vacuna y chorizo, alcanza con 250 a 300 gramos de costillar por persona.',
      'Si hay chicos en la mesa, contá la mitad para cada uno. Para el cálculo completo del asado, con cortes con y sin hueso, usá la guía de cuánta carne por persona.'
    ]},
    {id:'errores', title:'Errores comunes con el costillar de cerdo', items:[
      'Llevarlo a fuego fuerte para terminar antes: se quema la superficie y la carne junto al hueso queda cruda.',
      'Dejar la membrana del lado del hueso: impide que penetre el condimento y queda como un plástico al morder.',
      'Hervir las costillas antes de asarlas para ahorrar tiempo: se ablandan, pero buena parte del sabor queda en el agua.',
      'Pintar con salsa dulce desde el principio: el azúcar se quema mucho antes de que la carne esté lista.',
      'Servirlo cuando se ve dorado pero la carne todavía está adherida al hueso: le falta tiempo.'
    ]},
    {id:'precio', title:'Qué cambia el precio del costillar', paragraphs:[
      'El costillar de cerdo suele ser de los cortes con hueso más accesibles, pero el precio por kilo depende de cuánta carne trae cada costilla. La parte del lomo, más carnosa y magra, se cotiza distinto que el pechito. También influye si está limpio, sin membrana, y si se vende en planchas enteras o en tiras cortadas.',
      'Además pesa la oferta de carne de cerdo en el momento y la época del año: antes de las fiestas se busca mucho para asados familiares. Para comparar el precio del costillar entre carnicerías, fijate en la cantidad de carne sobre el hueso más que en el número por kilo.'
    ]},
    {id:'recetas', title:'Recetas del sitio para acompañar el costillar', paragraphs:[
      'El costillar de cerdo va muy bien con los acompañamientos más paraguayos: sopa paraguaya, chipa guazú y mandioca hervida. En la olla, las tiras de costilla se pueden sumar a un guiso para darle más sabor y cuerpo al caldo, siguiendo la base del guiso paraguayo del sitio.'
    ]}
  ],
  recipes:['receta-sopa-paraguaya','receta-chipa-guazu','receta-guiso-paraguayo'],
  related:['guia-cuanta-carne-por-persona','corte-bondiola-de-cerdo','corte-vacio','corte-matambre'],
  faq:[
    ['¿Cuánto tarda un costillar de cerdo a la parrilla?','Entre una hora y media y dos horas a fuego suave, empezando con el hueso hacia abajo y terminando del lado de la carne.'],
    ['¿Cómo se hace el costillar de cerdo al horno para que quede tierno?','Tapado con papel aluminio a 160 °C durante una hora y media a dos horas, y después destapado a 200 °C entre 20 y 30 minutos para dorar.'],
    ['¿Qué diferencia hay entre pechito y costilla de lomo?','El pechito sale de la parte baja, hacia el pecho, y tiene costillas más largas y con más grasa. La costilla de lomo es más corta, curva y magra.'],
    ['¿Hay que sacarle la membrana al costillar de cerdo?','Conviene. La membrana del lado del hueso se endurece con el calor y no deja pasar el condimento. Se levanta con un cuchillo y se tira con un papel.'],
    ['¿Cuántos kilos de costillar de cerdo para 10 personas?','Como estimación, de 4 a 5 kilos si es la carne principal, y unos 2,5 a 3 kilos si hay otros cortes en la parrilla.'],
    ['¿Por qué cambia el precio del costillar?','Por la cantidad de carne sobre el hueso, por la zona de donde sale, por si viene limpio o en tiras y por la oferta de cerdo en cada época.']
  ],
  ctaTitle:'Asado para tu evento',
  ctaText:'Costillares enteros para muchos invitados piden espacio en la parrilla y varias horas de fuego. Contanos la fecha, el lugar y la cantidad de personas, y te ayudamos a consultar un servicio de asado para tu evento.',
  waMessage:'Hola, quiero consultar por un asado con costillar de cerdo para un evento.'
};
