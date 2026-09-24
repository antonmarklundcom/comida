// Meat cut module: picaña (tapa de cuadril). Shape: see plan/prompts/CONTENT-WRITER.md, Guide and cut fields.
export default {
  id:'corte-picana', slug:'picana', kind:'cut', order:1, animal:'Vacuno',
  published:true, indexable:true, updatedAt:'2026-09-24', verifiedAt:'2026-09-24',
  source:'Guía de la redacción de comida.com.py, basada en la práctica de carnicería y parrilla del Río de la Plata',
  label:'Picaña',
  seoTitle:'Picaña: qué es y cómo hacerla a la parrilla',
  meta:'Picaña a la parrilla: de qué parte sale, cómo elegirla por su grasa, tiempos para hacerla entera o en bifes, cuánto comprar y qué cambia su precio.',
  h1:'Picaña: qué es, cómo elegirla y cómo hacerla a la parrilla',
  cardText:'El triángulo con tapa de grasa que manda en la parrilla del domingo.',
  category:['carne','fiesta'],
  keywords:['picaña','picaña precio','picaña a la parrilla','picana','tapa de cuadril','picanha'],
  image:23,
  intro:[
    'La picaña es la tapa del cuadril: una pieza triangular, cubierta de un lado por una capa de grasa blanca, que se volvió uno de los cortes favoritos de la parrilla paraguaya. Es tierna, jugosa y tiene sabor propio, así que pide poco más que sal gruesa y un fuego bien manejado.',
    'Acá vas a encontrar de qué parte del animal sale, cómo reconocer una buena pieza en la carnicería, tiempos y señales de cocción para la parrilla, el horno y la plancha, cuánto comprar por persona y los errores que más se repiten.'
  ],
  facts:[
    ['Animal','Vacuno'],
    ['Zona del animal','Parte trasera, sobre el cuadril, cerca del nacimiento de la cola'],
    ['Otros nombres','Picanha (Brasil), tapa de cuadril (Argentina y Uruguay)'],
    ['Mejor cocción','Parrilla, entera o en bifes gruesos'],
    ['Por persona','250 a 300 g crudos si es el único corte (estimación)']
  ],
  estimate:'Los gramos por persona de esta página son estimaciones de la redacción: ajustalos según el apetito del grupo y cuántos cortes más vayas a servir.',
  sections:[
    {id:'que-es', title:'Qué es la picaña y de dónde sale', paragraphs:[
      'El cuadril es la zona de la cadera del vacuno, entre el lomo y la pierna. Sobre él descansa un músculo delgado con forma de triángulo, cubierto por una capa de grasa: esa tapa es la picaña. En Paraguay se usa el nombre que viene de Brasil, donde se escribe picanha; en Argentina y Uruguay la misma pieza se vende como tapa de cuadril.',
      'Una picaña entera suele pesar entre 1 y 1,5 kilos. Si la pieza que te ofrecen es mucho más grande, lo más probable es que venga con parte del cuadril pegado: sirve igual, pero ya no es la picaña limpia. Como es un músculo que trabaja poco, la carne resulta tierna aunque no tenga mucho marmoleado.'
    ]},
    {id:'como-elegir', title:'Cómo elegirla en la carnicería', paragraphs:[
      'Mirá primero la grasa. Buscá una tapa pareja, blanca o apenas cremosa, de alrededor de un dedo de espesor. Una grasa amarillenta suele indicar un animal más viejo o alimentado a pasto por más tiempo: no es un defecto, pero la carne será más firme. La carne tiene que ser roja viva, sin zonas grisáceas ni olor ácido.'
    ], items:[
      'Pedila entera y sin cortar si la vas a hacer a la parrilla: se reseca menos que en bifes finos.',
      'Revisá que el lado sin grasa esté limpio de tendones gruesos.',
      'Si viene al vacío, es normal que la carne se vea oscura; recupera el color rojo a los pocos minutos de abrir el envase.',
      'Una pieza muy gruesa en la punta y muy fina en el otro extremo se cocina despareja: preferí las de forma regular.'
    ]},
    {id:'parrilla', title:'Picaña a la parrilla, paso a paso', paragraphs:[
      'Hay dos formas clásicas. Entera, al estilo rioplatense, se cocina lenta y se corta al final. En bifes gruesos doblados en forma de U y ensartados en espada, al estilo brasileño, se dora por fuera y se va cortando a medida que está lista. La primera es más fácil de controlar en una parrilla de casa.'
    ], steps:[
      'Salá la pieza entera con sal gruesa unos minutos antes de ponerla al fuego. Si querés, marcá la grasa con cortes en rombo sin llegar a la carne.',
      'Prepará brasas para fuego medio: tenés que poder mantener la mano a la altura de la parrilla unos seis u ocho segundos.',
      'Poné la picaña con la grasa hacia abajo, lejos del centro de las brasas, para que la grasa se derrita sin encender llamas. Cociná de 20 a 25 minutos.',
      'Dala vuelta y seguí de 15 a 25 minutos más, según el tamaño. Una picaña de 1,2 kilos suele estar jugosa entre los 40 y los 50 minutos totales.',
      'Comprobá el punto: al presionar el centro con el dedo tiene que ceder como la base del pulgar. Con termómetro, jugosa es alrededor de 55 °C en el centro.',
      'Dejala reposar 5 a 10 minutos sobre una tabla y cortala en láminas de un dedo, siempre contra la fibra.'
    ]},
    {id:'otras-cocciones', title:'Horno, plancha y otras cocciones', paragraphs:[
      'Fuera de la parrilla, la picaña funciona bien en horno fuerte y en bifes a la plancha. En olla pierde lo que la hace especial, la grasa crocante, así que conviene guardarla para cortes más duros.'
    ], table:{caption:'Tiempos orientativos para una picaña de alrededor de 1,2 kilos', head:['Método','Cómo','Tiempo','Señal de que está'], rows:[
      ['Parrilla entera','Fuego medio, grasa abajo primero','40 a 55 min','Cede como la base del pulgar; unos 55 °C'],
      ['Parrilla en U','Bifes de 3 dedos en espada, fuego fuerte','15 a 20 min','Por fuera dorada, rosada en el centro'],
      ['Horno','200 °C, grasa hacia arriba, sobre rejilla','40 a 50 min','Grasa dorada y crujiente'],
      ['Plancha','Bifes de 2,5 cm, bien caliente','3 a 4 min por lado','Jugo rosado que apenas asoma arriba']
    ], note:'Los tiempos cambian con el grosor, la temperatura de la carne y el fuego. Usalos como punto de partida y confirmá con el tacto o un termómetro.'}},
    {id:'cuanto-comprar', title:'Cuánto comprar por persona', paragraphs:[
      'Como estimación de la redacción, si la picaña es la única carne contá entre 250 y 300 gramos crudos por adulto. Pierde peso al cocinarse porque parte de la grasa se derrite. En un asado con chorizo, costilla y otro corte, alcanza con unos 150 gramos de picaña por persona.',
      'Una pieza entera de alrededor de 1,2 kilos rinde para cuatro o cinco adultos si es el plato principal. Para calcular un asado completo con varios cortes, usá la guía de cuánta carne por persona.'
    ]},
    {id:'errores', title:'Errores comunes con la picaña', items:[
      'Sacarle toda la grasa antes de cocinarla: se seca y pierde el sabor que la distingue. Se puede retirar después, en el plato.',
      'Cortarla a favor de la fibra: queda chiclosa aunque esté en su punto. Mirá hacia dónde corren las vetas y cortá en perpendicular.',
      'Ponerla sobre fuego fuerte con la grasa abajo: la grasa gotea, levanta llama y la tapa se quema antes de que el centro se cocine.',
      'Cocinarla bien pasada: es un corte magro por dentro y de a poco se vuelve seco. Si alguien la quiere cocida, dale las puntas.',
      'Cortarla recién salida del fuego: el jugo queda en la tabla. Unos minutos de reposo hacen la diferencia.'
    ]},
    {id:'precio', title:'Qué hace variar el precio de la picaña', paragraphs:[
      'La picaña suele estar entre los cortes caros de la carnicería porque cada animal da solo dos piezas pequeñas y la demanda para parrilla es alta. Varía según venga limpia o con parte del cuadril, si está envasada al vacío o se corta en el mostrador, y según la categoría del animal: novillo joven, vaquillona o vaca.',
      'También pesa la época: antes de las fiestas de fin de año y de los fines de semana largos la buscan más. Comparar el precio por kilo de la pieza limpia, y no de la que trae recortes, es la forma justa de saber cuál conviene.'
    ]},
    {id:'recetas', title:'Con qué servir la picaña', paragraphs:[
      'La picaña se luce sola, con sal gruesa, así que en el sitio no hay una receta que la lleve como ingrediente. Donde sí encaja es al centro de una mesa de asado, junto a la sopa paraguaya, la chipa guazú y una ensalada rusa. También podés usar los restos fríos, cortados finos, para sándwiches al día siguiente.'
    ]}
  ],
  recipes:['receta-sopa-paraguaya','receta-chipa-guazu','receta-ensalada-rusa'],
  related:['guia-cuanta-carne-por-persona','corte-vacio','corte-entrana','corte-bife-de-chorizo'],
  faq:[
    ['¿La picaña y la tapa de cuadril son lo mismo?','Sí. Es la misma pieza: la tapa triangular que cubre el cuadril. Picaña es el nombre que llegó desde Brasil y tapa de cuadril es como se la conoce en Argentina y Uruguay.'],
    ['¿La picaña se pone con la grasa para arriba o para abajo?','En la parrilla, primero con la grasa hacia abajo y a fuego medio, para que se derrita y dore. Después se da vuelta y se termina del lado de la carne. En el horno, en cambio, va con la grasa hacia arriba.'],
    ['¿Cuánto tarda una picaña entera a la parrilla?','Una pieza de alrededor de 1,2 kilos tarda entre 40 y 55 minutos a fuego medio para quedar jugosa. Si es más grande o la brasa está floja, puede pasar la hora.'],
    ['¿Cuántas personas comen con una picaña?','Una picaña entera de 1 a 1,5 kilos alcanza, como estimación, para cuatro a seis adultos si es la única carne. En un asado con varios cortes rinde para más gente.'],
    ['¿Cómo se corta la picaña?','Después del reposo, en láminas de un dedo y siempre contra la fibra. Como la fibra cambia un poco de dirección en la punta del triángulo, girá la pieza cuando haga falta.'],
    ['¿Por qué la picaña está más cara que otros cortes?','Porque cada animal da solo dos picañas chicas y es muy buscada para la parrilla. El precio final depende de si viene limpia, de la categoría del animal y de la época del año.']
  ],
  ctaTitle:'Asado para tu evento',
  ctaText:'¿Querés picaña a la parrilla para un cumpleaños, una despedida o un evento de la empresa? Contanos la fecha, la zona y cuántas personas son, y te ayudamos a consultar un servicio de asado en Gran Asunción.',
  waMessage:'Hola, quiero consultar por un asado con picaña para un evento.'
};
