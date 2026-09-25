// Meat cut module: panceta de cerdo. Shape: see plan/prompts/CONTENT-WRITER.md, Guide and cut fields.
export default {
  id:'corte-panceta', slug:'panceta', kind:'cut', order:16, animal:'Cerdo',
  published:true, indexable:true, updatedAt:'2026-09-24', verifiedAt:'2026-09-24',
  source:'Guía de la redacción de comida.com.py, basada en la práctica de carnicería y la cocina casera del Río de la Plata',
  label:'Panceta',
  seoTitle:'Panceta de cerdo: fresca, ahumada y bacon',
  meta:'Panceta de cerdo: fresca, salada o ahumada, si el bacon es panceta, cómo hacerla crocante a la parrilla o al horno, cuánto comprar y qué cambia el precio.',
  h1:'Panceta de cerdo: fresca, ahumada, bacon y cómo cocinarla',
  cardText:'El corte del vientre del cerdo: fresca a la parrilla, ahumada en fetas o crocante al horno.',
  category:['carne','fiesta','horno'],
  keywords:['panceta','panceta de cerdo','panceta ahumada','bacon es panceta','panceta bacon','panceta a la parrilla'],

  image:66,
  intro:[
    'La panceta es el vientre del cerdo: capas alternadas de grasa y carne, con o sin cuero. En la carnicería se consigue fresca, para hacer a la parrilla o al horno, y en la fiambrería aparece curada, salada o ahumada, en fetas finas o en trozo. Es un corte sabroso y rendidor que en poco tiempo pasa de blando a crocante si se le da el calor adecuado.',
    'Acá vas a ver en qué se diferencian la panceta fresca, la salada y la ahumada, si el bacon es lo mismo que la panceta, cómo cocinarla para que quede crujiente y no gomosa, cuánto comprar por persona y qué hace variar su precio.'
  ],
  facts:[
    ['Animal','Cerdo'],
    ['Zona del animal','Vientre, debajo de las costillas, entre el pecho y la pierna'],
    ['Otros nombres','Tocino (en otros países), bacon cuando está curada y ahumada; pancetta en la cocina italiana; barriga de cerdo'],
    ['Mejor cocción','Fresca: parrilla lenta u horno. Ahumada: sartén o plancha en fetas'],
    ['Por persona','200 a 250 g de panceta fresca cruda si es la carne principal (estimación)']
  ],
  estimate:'Los gramos por persona son estimaciones de la redacción: la panceta pierde bastante peso al derretir su grasa, y se come menos que un corte magro.',
  sections:[
    {id:'que-es', title:'Qué es la panceta y de dónde sale', paragraphs:[
      'Cuando se separan las costillas del cerdo, queda por debajo una plancha rectangular formada por capas de grasa y músculo: esa es la panceta. Una pieza entera puede llevar cuero de un lado y, si no se deshuesó del todo, algún resto de cartílago. En la carnicería se vende en plancha, en tiras gruesas o en cubos.',
      'Lo que define una buena panceta es el equilibrio entre carne y grasa. Una con franjas de carne rosada bien marcadas rinde más y queda más sabrosa; una casi toda blanca sirve para derretir y dar sabor, pero no para comer sola.'
    ]},
    {id:'tipos', title:'Fresca, salada, ahumada: los tipos de panceta', cards:[
      ['Panceta fresca','Cruda y sin tratar. Se cocina como cualquier carne de cerdo: a la parrilla, al horno o en olla. Es la que se usa para la panceta crocante.'],
      ['Panceta salada o curada','Tratada con sal, a veces con especias, y dejada estacionar. Se usa en trocitos para dar sabor a guisos, porotos y salsas.'],
      ['Panceta ahumada','Curada y después ahumada. Se vende en fetas o en trozo y es la que más se parece al bacon.'],
      ['Pancetta arrollada','Estilo italiano: curada y enrollada sobre sí misma, sin ahumar. Se corta en fetas muy finas.']
    ]},
    {id:'bacon', title:'¿El bacon es panceta?', paragraphs:[
      'En la práctica, sí: el bacon es panceta de cerdo curada y ahumada, cortada en fetas. La palabra viene del inglés y en los envases se usa para la versión ahumada, mientras que panceta, a secas, puede ser fresca o curada. Por eso una receta que pide bacon se puede hacer con panceta ahumada en fetas, y el resultado es prácticamente el mismo.',
      'Lo que no se puede intercambiar es la panceta fresca con el bacon. La fresca no tiene sal ni humo, y necesita cocinarse más tiempo. Si una receta pide bacon y usás panceta fresca, vas a tener que salar y cocinar bastante más.'
    ]},
    {id:'crocante', title:'Panceta fresca crocante al horno o a la parrilla', paragraphs:[
      'La panceta fresca queda mejor con dos etapas: una cocción larga a temperatura moderada para derretir la grasa y ablandar la carne, y un final fuerte para que el exterior cruja. Si tiene cuero, esa segunda etapa es la que lo convierte en chicharrón.'
    ], steps:[
      'Secá bien la panceta con papel. Si tiene cuero, marcalo con cortes finos sin llegar a la carne.',
      'Salá con sal gruesa por todos lados. Si querés, agregá ajo picado, pimentón y orégano del lado de la carne.',
      'Horno: poné la pieza con el cuero hacia arriba sobre una rejilla, a 160 °C, de 1 ½ a 2 horas según el grosor.',
      'Parrilla: fuego suave, primero del lado de la carne 40 a 50 minutos, después del lado del cuero otros 30 a 40 minutos, alejada de las brasas más fuertes.',
      'Para terminar, subí el horno a 230 °C o acercá la pieza a brasas más vivas, 10 a 20 minutos, hasta que el cuero se infle y cruja.',
      'Dejala reposar unos minutos y cortala en tiras o cubos con un cuchillo de sierra.'
    ], after:['La receta de panceta crocante del sitio tiene las cantidades y cada paso con su tiempo.']},
    {id:'seguridad', title:'Punto y seguridad', paragraphs:[
      'Como toda carne de cerdo fresca, la panceta tiene que llegar al menos a 63 °C en el centro, seguido de un reposo de unos minutos. En la práctica, para que quede tierna y la grasa se derrita, se cocina bastante más allá de ese punto, así que es difícil que quede cruda si seguís los tiempos.',
      'La panceta ahumada en fetas del envase muchas veces está cruda aunque parezca lista. Salvo que la etiqueta diga que está cocida, cocinala en sartén o al horno antes de comerla.'
    ]},
    {id:'ahumada', title:'Cómo usar la panceta ahumada', items:[
      'En sartén fría y a fuego medio, sin aceite: así suelta la grasa de a poco y las fetas quedan crocantes y parejas.',
      'Al horno, sobre papel manteca a 200 °C, de 10 a 15 minutos: práctico para muchas fetas a la vez.',
      'En cubitos, para dar sabor a porotos, guisos, salsas y rellenos. Dorala primero y usá su grasa para rehogar la cebolla.',
      'Envolviendo otras carnes, como pechuga de pollo o lomo de cerdo, para que no se sequen en el horno.'
    ]},
    {id:'cuanto-comprar', title:'Cuánta panceta comprar', paragraphs:[
      'Como estimación de la redacción, si la panceta fresca es la carne principal, contá entre 200 y 250 gramos crudos por adulto. Pierde mucho peso al derretirse. En un asado con varios cortes alcanza con 80 a 100 gramos por persona, servida en cubos como entrada.',
      'La ahumada se calcula distinto porque se usa como condimento o acompañamiento: 30 a 50 gramos por persona para un desayuno o para una ensalada. Para repartir cortes en un asado completo, usá la guía de cuánta carne por persona.'
    ]},
    {id:'precio', title:'Qué cambia el precio de la panceta', paragraphs:[
      'La panceta fresca suele estar entre los cortes de cerdo accesibles, y su precio cambia según la proporción de carne y grasa, si viene con o sin cuero y si está deshuesada. La que tiene franjas de carne más gruesas suele costar más, pero rinde más en el plato.',
      'La panceta curada o ahumada cuesta más por kilo que la fresca porque pasa por salado, secado y ahumado, y pierde agua en el proceso. El formato también pesa: en fetas finas envasadas suele salir más cara por kilo que en trozo. Para comparar, pensá en cuánto vas a usar y si te sirve más una pieza entera que se corta en casa.'
    ]}
  ],
  recipes:['receta-panceta-crocante','receta-costillar-de-cerdo-al-horno','receta-hamburguesas-caseras','receta-ensalada-cesar'],
  related:['guia-cuanta-carne-por-persona','guia-cortes-de-cerdo','corte-costillar-de-cerdo','corte-bondiola-de-cerdo','corte-matambrito-de-cerdo','corte-lechon'],
  faq:[
    ['¿El bacon es panceta?','Sí, el bacon es panceta de cerdo curada y ahumada, cortada en fetas. La panceta, a secas, también puede ser fresca, sin sal ni humo.'],
    ['¿Qué diferencia hay entre panceta y panceta ahumada?','La panceta fresca está cruda y sin tratar. La ahumada pasó por un curado con sal y un ahumado, que le dan más sabor, más color y una textura más firme.'],
    ['¿La panceta ahumada se puede comer cruda?','En general no conviene: muchas veces viene cruda aunque esté ahumada. Salvo que el envase diga que está cocida, cocinala antes de comerla.'],
    ['¿Cuánto tarda la panceta a la parrilla?','Una pieza fresca de unos tres o cuatro centímetros tarda entre una hora y media y dos horas a fuego suave, dándola vuelta una vez y terminando cerca de brasas vivas para que cruja.'],
    ['¿Cómo hago para que la panceta quede crocante?','Secala bien, cocinala primero lento para derretir la grasa y terminala con calor fuerte. Si tiene cuero, marcalo con cortes finos y salalo bien antes de hornear.'],
    ['¿Qué es la panceta de cerdo?','Es el vientre del cerdo, debajo de las costillas: capas de grasa y carne que se venden frescas, saladas o ahumadas.']
  ],
  ctaTitle:'Asado para tu evento',
  ctaText:'¿Querés panceta crocante, costillar y chorizo para un cumpleaños o un evento de trabajo? Mandanos día, zona y número de invitados, y consultamos por vos un servicio de asado en Gran Asunción.',
  waMessage:'Hola, quiero consultar por un asado de cerdo con panceta para un evento.'
};
