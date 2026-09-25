// Guide: map of pork cuts and uses. Food safety: pork to 63 °C with rest.
export default {
  id:'guia-cortes-de-cerdo', slug:'cortes-de-cerdo', kind:'guide', order:25,
  published:true, indexable:true, updatedAt:'2026-09-25', verifiedAt:'2026-09-25',
  source:'Redacción de comida.com.py, a partir de los nombres de carnicería que se usan en Paraguay y el Río de la Plata. Temperatura interna del cerdo según las recomendaciones generales de inocuidad alimentaria (63 °C con reposo)',
  label:'Cortes de cerdo',
  eyebrow:'Mapa de cortes',
  seoTitle:'Cortes de cerdo: mapa, usos y recetas',
  meta:'Cortes de cerdo y carne de chancho: bondiola, carré, solomillo, costillar, panceta, matambrito y pernil. Para qué sirve cada uno y cómo cocinarlo bien.',
  h1:'Cortes de cerdo: para qué sirve cada uno y cómo cocinarlo',
  cardText:'Bondiola, carré, costillar, matambrito y pernil: el chancho de punta a punta.',
  category:['carne'],
  keywords:['cerdo','carne de cerdo','carne de chancho','cortes de cerdo','cortes de carne de cerdo','chancho'],
  intro:[
    'En Paraguay el cerdo, o chancho como se dice en casa, está en la mesa de todos los días y en las fiestas grandes: chuletas a la plancha un martes, bondiola a la parrilla el domingo, lechón para las fiestas de fin de año. Es una carne rendidora y sabrosa, con cortes muy distintos entre sí, desde los magros y tiernos hasta los que tienen grasa y hueso y piden horas de fuego suave.',
    'Esta guía te muestra de dónde sale cada corte de cerdo, cuál conviene para parrilla, horno u olla y cómo cocinarlo para que quede jugoso y seguro. Cada corte y cada receta tiene su página con el paso a paso.'
  ],
  estimate:'Las cantidades por persona de esta guía son estimaciones de la redacción: ajustalas según el apetito de tu grupo y el resto del menú.',
  facts:[
    ['Otros nombres','Chancho, carne porcina'],
    ['Temperatura segura','Al menos 63 °C en el centro, con unos minutos de reposo'],
    ['Cortes magros','Solomillo, carré, pernil'],
    ['Cortes con grasa','Bondiola, panceta, costillar, matambrito'],
    ['Por persona','250 a 300 g sin hueso, 400 g con hueso (estimación)']
  ],
  sections:[
    {id:'mapa', title:'Mapa de cortes de cerdo',
      paragraphs:[
        'El cerdo se divide en menos cortes que el vacuno y los nombres son más parejos entre países. De adelante hacia atrás tenés la bondiola, en el cuello; la paleta, en el hombro; el carré, que es el lomo con o sin hueso, a lo largo del lomo; el solomillo, escondido debajo del carré; el costillar y la panceta, en el costado y la panza; el matambrito, entre la panza y las costillas; y el pernil, que es la pata trasera.'
      ],
      table:{caption:'Cortes de cerdo: zona y mejor uso', head:['Corte','Zona','Cómo es','Mejor cocción'],
        rows:[
          ['Bondiola','Cuello','Veteada, jugosa y sabrosa','Parrilla, horno lento, desmechada'],
          ['Paleta','Hombro','Firme, con algo de grasa','Horno, olla, carne desmechada'],
          ['Carré o lomo de cerdo','Lomo, sobre las costillas','Magro y tierno','Horno, parrilla, chuletas a la plancha'],
          ['Chuleta','Carré cortado con hueso','Magra, con borde de grasa','Plancha, parrilla, horno'],
          ['Solomillo','Bajo el lomo','El más tierno y magro','Sartén, horno rápido, parrilla'],
          ['Costillar o costillas','Costado','Hueso con carne y grasa','Horno lento, parrilla lenta, barbacoa'],
          ['Panceta','Panza','Capas de grasa y carne','Crocante al horno, parrilla, guisos'],
          ['Matambrito','Entre panza y costillar','Fino, con grasa, muy sabroso','Parrilla, a la pizza'],
          ['Pernil','Pata trasera','Pieza grande y magra','Horno lento, sándwiches'],
          ['Lechón','Animal joven entero','Piel fina, carne suave','Horno o parrilla, entero o en mitades']
        ],
        note:'Algunas carnicerías llaman lomo al carré entero y chuleta a cada rodaja con hueso. Si tenés dudas, pedí ver la pieza.'
      }
    },
    {id:'parrilla', title:'Cortes de cerdo para la parrilla',
      paragraphs:[
        'La bondiola entera o en bifes gruesos, el matambrito, el costillar y la panceta son los cortes de cerdo que mejor se llevan con la brasa, porque su grasa los protege del calor. El matambrito se hace rápido, primero del lado de la carne y después del lado de la grasa, hasta que quede dorado. El costillar pide fuego suave y paciencia, del lado del hueso casi todo el tiempo.',
        'El carré y el solomillo también van a la parrilla, pero se secan si se pasan. Conviene sacarlos apenas llegan a la temperatura segura, con el centro todavía rosado muy claro y jugoso, y dejarlos reposar unos minutos antes de cortar.'
      ]
    },
    {id:'horno', title:'Cortes de cerdo para el horno',
      paragraphs:[
        'El horno es el lugar natural del pernil, del lechón y de la bondiola entera. Son piezas grandes que ganan con temperaturas moderadas, entre 160 y 180 °C, y tiempos largos, a veces cubiertas con papel aluminio la primera parte para que no se sequen y descubiertas al final para dorar. El costillar al horno con una salsa agridulce o una barbacoa casera es una de las formas más fáciles de alimentar a muchos.',
        'El carré entero al horno, adobado con ajo, mostaza, naranja agria o hierbas, queda muy bien si se controla la temperatura. La panceta en trozos se puede hacer crocante a horno fuerte después de una cocción suave.'
      ]
    },
    {id:'olla', title:'Cortes de cerdo para la olla y la sartén',
      paragraphs:[
        'La paleta y la bondiola se pueden cocinar en olla con cebolla, locote y tomate hasta desmecharlas: sirven para sándwiches, tacos, empanadas o para acompañar con mandioca. Las chuletas y el solomillo en medallones son los cortes rápidos para la sartén de todos los días, con una salsa de mostaza, crema o naranja hecha en la misma sartén.'
      ]
    },
    {id:'seguridad', title:'Cómo cocinar el cerdo para que sea seguro y jugoso',
      paragraphs:[
        'La recomendación general de inocuidad para los cortes enteros de cerdo es llegar al menos a 63 °C en el centro y dejar reposar unos minutos antes de cortar. La carne picada o molida de cerdo, como la de las hamburguesas o algunos chorizos caseros, tiene que llegar a 71 °C. Un termómetro de pinchar es la forma más confiable de saberlo, sobre todo en piezas grandes.'
      ],
      items:[
        'No cocines el cerdo hasta que esté gris y seco por miedo: con la temperatura correcta queda jugoso.',
        'Sacá la pieza del frío un rato antes para que se cocine parejo.',
        'En los cortes magros, una marinada con algo ácido, como jugo de naranja o limón, ayuda a que no se sequen.',
        'Dejá reposar los cortes grandes tapados con papel aluminio unos 10 minutos.',
        'Si la piel del lechón o de la panceta no está crocante, subí el horno al final y vigilá de cerca.'
      ]
    },
    {id:'comprar', title:'Cómo elegir carne de cerdo',
      paragraphs:[
        'La carne de cerdo fresca es rosada, firme y húmeda pero no pegajosa, y su grasa es blanca. Evitá piezas con zonas grises, olor fuerte o líquido acumulado en la bandeja. Para calcular la compra, como estimación, pensá en 250 a 300 g de carne sin hueso por adulto en un plato principal, y en 400 g o algo más si el corte trae hueso, como el costillar o las chuletas.'
      ]
    }
  ],
  faq:[
    ['¿Cuál es el corte de cerdo más tierno?','El solomillo, que está debajo del lomo. Le sigue el carré. Los dos son magros y conviene no pasarlos de cocción.'],
    ['¿Qué corte de cerdo es mejor para la parrilla?','La bondiola, el matambrito, el costillar y la panceta, porque su grasa los mantiene jugosos. El carré y el solomillo también, sacándolos a tiempo.'],
    ['¿A qué temperatura se cocina la carne de cerdo?','Como recomendación general, al menos 63 °C en el centro de los cortes enteros, con unos minutos de reposo. La carne molida de cerdo, 71 °C.'],
    ['¿Es lo mismo carne de chancho y carne de cerdo?','Sí. Chancho es la forma más usada en casa en Paraguay y otros países de la región para nombrar al cerdo.'],
    ['¿Cuánta carne de cerdo se calcula por persona?','Como estimación, 250 a 300 g sin hueso por adulto, y unos 400 g si el corte tiene hueso, como costillar o chuletas.'],
    ['¿Qué corte de cerdo se usa para el horno?','El pernil, la bondiola entera, el carré, el costillar y el lechón. Todos ganan con temperatura moderada y tiempo.']
  ],
  recipes:['receta-bondiola-al-horno','receta-lomo-de-cerdo-al-horno','receta-solomillo-de-cerdo','receta-chuletas-de-cerdo','receta-costillar-de-cerdo-al-horno','receta-costillas-de-cerdo-a-la-barbacoa','receta-matambrito-de-cerdo-a-la-pizza','receta-panceta-crocante','receta-pernil-de-cerdo-al-horno','receta-lechon-al-horno','receta-bondiola-desmechada'],
  related:['corte-bondiola-de-cerdo','corte-costillar-de-cerdo','corte-carre-de-cerdo','corte-panceta','corte-matambrito-de-cerdo','corte-pernil-de-cerdo','corte-lechon','guia-cortes-de-carne-vacuna','guia-cortes-de-pollo','guia-asado-a-la-parrilla','guia-cuanta-carne-por-persona'],
  ctaTitle:'¿Un lechón o un asado de cerdo para tu evento?',
  ctaText:'Si preferís que un equipo se encargue del horno o la parrilla, contanos la fecha, la zona y cuántas personas vienen. Te ayudamos a consultar catering en Gran Asunción.',
  waMessage:'Hola, quiero consultar un catering con cerdo o lechón para un evento. ¿Me ayudás?'
};
