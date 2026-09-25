// Guide: churrasquería / espeto corrido explained, and how to recreate it at home. No restaurant names, no prices.
export default {
  id:'guia-churrasqueria', slug:'churrasqueria', kind:'guide', order:22,
  published:true, indexable:true, updatedAt:'2026-09-25', verifiedAt:'2026-09-25',
  source:'Guía de la redacción de comida.com.py sobre el churrasco al estilo brasileño y su presencia en Paraguay. Temperaturas internas de seguridad según las recomendaciones generales de inocuidad alimentaria',
  label:'Churrasquería',
  eyebrow:'Espeto corrido',
  seoTitle:'Churrasquería: qué es el espeto corrido',
  meta:'Qué es una churrasquería y cómo funciona el espeto corrido: cortes típicos, cómo se sirve en la mesa y cómo armar un churrasco con espetos en tu casa.',
  h1:'Churrasquería y espeto corrido: qué es, cómo funciona y cómo hacerlo en casa',
  cardText:'Espetos que pasan por la mesa y se cortan al momento: el churrasco explicado.',
  category:['carne','fiesta'],
  keywords:['churrasqueria','churrasquería','churrasquería en asunción','espeto corrido','rodizio','churrasco en espeto'],
  image:54,
  intro:[
    'Una churrasquería es un restaurante de carnes al estilo del sur de Brasil, donde la carne se asa ensartada en espetos, unas varillas largas de metal, y los mozos la llevan a la mesa para cortarla en el momento. Por la cercanía con Brasil, el formato es muy conocido en Paraguay y se volvió una opción habitual para festejos.',
    'En esta guía explicamos qué es el espeto corrido, qué cortes suelen pasar por la mesa, en qué se diferencia de una parrillada y cómo recrear la experiencia en casa con espetos, carbón y un poco de organización. No nombramos locales ni hablamos de precios: la idea es entender el formato para disfrutarlo mejor o para copiarlo en tu patio.'
  ],
  estimate:'Las cantidades por persona y los tiempos de esta guía son estimaciones de la redacción: ajustalos según tu grupo, el tamaño de los espetos y el calor de tu fuego.',
  facts:[
    ['Origen del formato','Churrasco del sur de Brasil'],
    ['Cómo se sirve','Espetos que pasan por la mesa y se cortan al momento'],
    ['Otros nombres','Espeto corrido, rodizio'],
    ['Condimento base','Sal gruesa'],
    ['En casa, por adulto','Unos 400 a 500 g crudos entre todos los espetos (estimación)']
  ],
  sections:[
    {id:'que-es', title:'Qué es una churrasquería',
      paragraphs:[
        'La palabra churrasco en Brasil nombra a la carne asada en general, y la churrasquería es el lugar donde se sirve. Lo que la distingue del asado rioplatense es la herramienta y el servicio: en vez de una parrilla con rejilla, la carne va atravesada en espetos que se apoyan sobre el fuego, y en vez de llegar a la mesa en una fuente, la trae un mozo, espeto en mano, y corta una feta directamente sobre tu plato.',
        'En Paraguay se usan las dos palabras, churrasquería y churrasco, y a veces churrasco también nombra a un bife fino a la plancha. Por eso conviene fijarse en el contexto: si hablan de espeto corrido o de rodizio, se trata del formato brasileño con servicio en la mesa.'
      ]
    },
    {id:'espeto-corrido', title:'Cómo funciona el espeto corrido',
      paragraphs:[
        'En el espeto corrido, también llamado rodizio, se paga por persona y se come a voluntad. Cada comensal suele tener una tarjeta o un disco con un lado verde y otro rojo: verde significa que querés que sigan pasando espetos, y rojo que querés una pausa. Mientras tanto, hay un buffet de ensaladas, guarniciones y a veces platos calientes donde cada uno se sirve.',
        'Los mozos van recorriendo las mesas con un espeto por vez, anuncian el corte y cortan una feta fina. El comensal la toma con una pinza chica que está en la mesa. Como los cortes van saliendo a medida que están listos, la secuencia cambia durante la comida y cada vuelta trae algo distinto.'
      ],
      items:[
        'Empezá despacio: los primeros espetos suelen ser los más rendidores, como chorizo o pollo.',
        'Pedí el punto que te gusta: las puntas de la pieza están más hechas y el centro más jugoso.',
        'Si hay un corte que querés repetir, pedíselo al mozo: suelen volver a pasar.',
        'Dejá lugar en el plato para las guarniciones del buffet, que equilibran tanta carne.'
      ]
    },
    {id:'cortes', title:'Cortes típicos de una churrasquería',
      paragraphs:[
        'Los nombres que se escuchan en una churrasquería vienen del portugués. La equivalencia con los nombres paraguayos no siempre es exacta, porque cada país despieza de forma un poco diferente, así que la tabla indica la referencia más usada.'
      ],
      table:{caption:'Cortes frecuentes en el espeto corrido', head:['Nombre en la churrasquería','Referencia en Paraguay','Cómo se hace en el espeto'],
        rows:[
          ['Picanha','Picaña o tapa de cuadril','En bifes gruesos doblados en U, con la grasa hacia afuera'],
          ['Maminha','Colita de cuadril','Entera o en trozos grandes, fuego medio'],
          ['Fraldinha','Suele equipararse al vacío o a una parte de él','Entera, a fuego medio'],
          ['Costela','Costilla vacuna','En tiras grandes, a fuego suave y por mucho tiempo'],
          ['Cupim','Giba o joroba de razas cebuinas','Muy lenta, hasta que se deshace'],
          ['Linguiça','Chorizo','Entero, girando seguido'],
          ['Coração de frango','Corazones de pollo','Ensartados en espeto fino, fuego fuerte'],
          ['Frango','Pollo en presas, muslos o alitas','Fuego medio, bien cocido'],
          ['Lombo','Lomo de cerdo','Envuelto o pintado, fuego medio']
        ],
        note:'Algunas churrasquerías suman corderito, cerdo con queso, piña asada con canela o queso coalho a la brasa. Varía según el lugar.'
      }
    },
    {id:'diferencias', title:'Churrasquería o parrillada: en qué se diferencian',
      cards:[
        ['Herramienta','La churrasquería usa espetos sobre el fuego; la parrillada, una rejilla de hierro.'],
        ['Servicio','En el espeto corrido la carne pasa por la mesa en vueltas. En la parrillada llega todo junto en una bandeja o brasero.'],
        ['Condimento','En el churrasco, casi solo sal gruesa; en la parrillada rioplatense, sal y chimichurri o salsa criolla al servir.'],
        ['Achuras','La parrillada suele traer chinchulines, mollejas y riñón. En la churrasquería lo típico son los corazones de pollo.']
      ]
    },
    {id:'en-casa', title:'Cómo hacer un churrasco con espetos en casa',
      paragraphs:[
        'Para recrear el espeto corrido en casa necesitás espetos largos de acero, un fuego que puedas manejar por zonas y alguien que se anime a pasar por la mesa cortando. Si tu parrilla tiene soportes laterales o muescas para espetos, mejor; si no, podés apoyarlos sobre dos ladrillos a cada lado de la brasa, a unos 20 a 30 cm de altura.'
      ],
      steps:[
        'Prendé el carbón con tiempo y armá una cama de brasa pareja y larga, del ancho de los espetos.',
        'Prepará los cortes: la picaña en bifes de tres a cuatro dedos, doblados en U con la grasa afuera; la colita en trozos grandes; el chorizo entero; los corazones limpios y escurridos.',
        'Ensartá un solo tipo de corte por espeto, así cada uno se cocina en su tiempo. Pasá la sal gruesa por encima justo antes de llevarlos al fuego.',
        'Empezá por los espetos que tardan más, como costilla o cupim si conseguís, a más altura. Después la colita y la picaña, y al final chorizo, pollo y corazones.',
        'Girá los espetos cada tanto. Cuando una pieza esté dorada por fuera, sacala del fuego, cortá fetas finas de la parte externa y volvé a ponerla: así cada vuelta trae carne recién dorada.',
        'Pasá por la mesa con el espeto y una tabla debajo, cortando sobre los platos con un cuchillo bien afilado. Pedí a alguien que te ayude con la pinza.'
      ],
      after:['El pollo tiene que llegar a 74 °C en el centro y el cerdo al menos a 63 °C, con unos minutos de descanso. Los corazones de pollo se hacen rápido a fuego fuerte, pero tienen que quedar bien cocidos, sin partes rosadas.']
    },
    {id:'cantidades', title:'Cuánto preparar y qué servir al lado',
      paragraphs:[
        'Como en el espeto corrido se come a voluntad, la gente suele comer más carne que en un asado de fuente. Para una reunión en casa, calculá unos 400 a 500 g crudos por adulto entre todos los espetos, repartidos en al menos cuatro tipos de carne, y un poco más si el grupo es de buen diente.',
        'Del lado del buffet, las guarniciones que acompañan el churrasco en Brasil conviven bien con las paraguayas: arroz blanco, farofa de harina de mandioca tostada con manteca, vinagrete de tomate, cebolla y locote, mandioca frita o hervida, sopa paraguaya y una ensalada verde. Una piña a la brasa con azúcar y canela cierra muy bien.'
      ]
    }
  ],
  faq:[
    ['¿Qué es una churrasquería?','Es un restaurante de carnes al estilo del sur de Brasil, donde la carne se asa en espetos y los mozos la cortan en la mesa. Muchas trabajan con espeto corrido, a voluntad.'],
    ['¿Qué significa espeto corrido?','Es el servicio en el que los mozos pasan por las mesas con distintos espetos de carne, uno por vez, y cada comensal elige cuánto quiere. También se lo llama rodizio.'],
    ['¿Qué cortes se comen en una churrasquería?','Los más típicos son picanha, maminha, fraldinha, costela, linguiça, pollo y corazones de pollo. Algunas suman cupim, cordero y piña asada.'],
    ['¿Cómo se usa la tarjeta verde y roja en el rodizio?','El lado verde indica a los mozos que querés que sigan pasando espetos. El rojo pide una pausa. La das vuelta cuantas veces quieras durante la comida.'],
    ['¿Cómo hacer espeto corrido en casa?','Con espetos de acero apoyados sobre la brasa, un tipo de corte por espeto, sal gruesa y alguien que pase por la mesa cortando fetas finas de la parte dorada.'],
    ['¿Qué diferencia hay entre churrasco y asado?','El churrasco usa espetos y casi solo sal gruesa; el asado rioplatense y paraguayo se hace sobre rejilla. Los dos buscan carne a la brasa, jugosa y bien dorada.']
  ],
  recipes:['receta-picana-a-la-parrilla','receta-colita-de-cuadril-a-la-parrilla','receta-vacio-a-la-parrilla','receta-asado-de-tira-a-la-parrilla','receta-sopa-paraguaya'],
  related:['guia-parrillada','guia-asado-a-la-parrilla','guia-cortes-de-carne-vacuna','guia-cuanta-carne-por-persona','corte-picana','corte-colita-de-cuadril','corte-vacio','corte-costilla-de-vaca','corte-tapa-de-cuadril'],
  formOccasion:'cumpleanos',
  ctaTitle:'¿Querés un churrasco con espetos en tu evento?',
  ctaText:'Si preferís que un equipo se encargue de los espetos y el servicio, contanos la fecha, la zona y cuántas personas vienen. Te ayudamos a consultar catering de asado en Gran Asunción.',
  waMessage:'Hola, quiero consultar un catering de churrasco con espetos para un evento. ¿Me ayudás?'
};
