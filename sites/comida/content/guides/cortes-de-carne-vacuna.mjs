// Guide: map of beef cuts with Paraguayan names and equivalents only where the equivalence is well established.
export default {
  id:'guia-cortes-de-carne-vacuna', slug:'cortes-de-carne-vacuna', kind:'guide', order:24,
  published:true, indexable:true, updatedAt:'2026-09-25', verifiedAt:'2026-09-25',
  source:'Guía de la redacción de comida.com.py, basada en la nomenclatura de carnicería usada en Paraguay y el Río de la Plata. Las equivalencias con nombres de Estados Unidos y Brasil se indican solo cuando son de uso extendido; los despieces varían entre países y carnicerías',
  label:'Cortes de carne vacuna',
  eyebrow:'Mapa de cortes',
  seoTitle:'Cortes de carne vacuna: mapa y usos',
  meta:'Cortes de carne vacuna en Paraguay: de qué zona sale cada uno, cómo cocinarlo y su nombre americano o brasileño. Tabla completa con links a cada corte.',
  h1:'Cortes de carne vacuna: mapa, nombres y cómo cocinar cada uno',
  cardText:'Todos los cortes de res por zona, con su mejor cocción y sus otros nombres.',
  category:['carne'],
  keywords:['cortes de carne','corte de carnes','cortes de carne vacuna','corte americano carne','carne de res','cortes de res','cortes de carne de vaca'],
  intro:[
    'Pedir carne en la carnicería es más fácil cuando sabés de qué parte del animal sale cada corte. La zona dice casi todo: los músculos que trabajan mucho, como los de la pata o el cuello, tienen más tejido conectivo y piden cocción lenta; los que trabajan poco, como los del lomo y el costillar alto, son tiernos y aguantan fuego fuerte y rápido.',
    'Esta guía ordena los cortes de carne vacuna por zona, con el nombre que se usa en Paraguay, la mejor forma de cocinarlos y, cuando la equivalencia es clara, el nombre americano o brasileño que vas a ver en menús y etiquetas. Cada corte tiene su página con más detalle, tiempos y recetas.'
  ],
  estimate:'Las cantidades por persona que se mencionan son estimaciones de la redacción: ajustalas según el apetito de tu grupo y el resto del menú.',
  facts:[
    ['Zonas principales','Cuarto delantero, costillar, bajo y cuarto trasero'],
    ['Cortes más tiernos','Lomo, bife de chorizo, ojo de bife, picaña'],
    ['Para olla y horno lento','Osobuco, garrón, aguja, marucha, carnaza'],
    ['Para milanesa','Nalga, bola de lomo, cuadrada, peceto'],
    ['Carne de res','Otra forma de decir carne vacuna']
  ],
  sections:[
    {id:'zonas', title:'Las cuatro zonas del vacuno',
      paragraphs:[
        'Para entender los cortes alcanza con dividir la media res en cuatro zonas. El cuarto delantero incluye el cuello, la paleta y la pata delantera: músculos que sostienen el peso del animal, sabrosos pero firmes. El costillar es la parte de las costillas, de donde salen la costilla para asado y los bifes con hueso. El bajo es la panza, con cortes finos y con grasa como el vacío y el matambre. El cuarto trasero es la cadera y la pierna, donde están el lomo, el cuadril y las carnes magras para milanesa.',
        'Carne de res, carne vacuna y carne de vaca nombran lo mismo. En la carnicería también vas a escuchar novillo, que se refiere a un animal macho joven, y ternera o ternero, que es un animal más joven y de carne más clara. Cambian la terneza y el sabor, pero los nombres de los cortes son los mismos.'
      ]
    },
    {id:'tabla', title:'Tabla de cortes de carne vacuna',
      paragraphs:[
        'La tabla reúne los cortes que más se piden en Paraguay. Donde dice un guion es porque no hay una equivalencia exacta o porque cambia según el país y la forma de despostar.'
      ],
      table:{caption:'Cortes de carne vacuna: zona, cocción y equivalencias', head:['Corte en Paraguay','Zona','Mejor cocción','Estados Unidos','Brasil'],
        rows:[
          ['Lomo','Trasero, bajo la columna','Parrilla rápida, horno, plancha','Tenderloin','Filé mignon'],
          ['Bife de chorizo','Trasero, sobre el lomo','Parrilla fuerte, plancha','Strip loin, New York','Contrafilé'],
          ['Ojo de bife','Costillar alto','Parrilla fuerte, plancha','Ribeye','Ancho'],
          ['Bife ancho','Costillar alto, con hueso','Parrilla','Rib steak','—'],
          ['Tomahawk','Costillar alto, hueso largo','Parrilla, fuego indirecto','Tomahawk','Tomahawk'],
          ['Chuletón','Costillar, con hueso','Parrilla','Bone-in ribeye','—'],
          ['Picaña o tapa de cuadril','Trasero, sobre el cuadril','Parrilla, espeto, horno','Top sirloin cap','Picanha'],
          ['Colita de cuadril','Trasero, punta del cuadril','Parrilla, horno','Tri-tip','Maminha'],
          ['Nalga','Pierna trasera, cara interna','Milanesa, bifes, horno','Top round','Coxão mole'],
          ['Bola de lomo','Pierna trasera, delante del fémur','Milanesa, horno, guiso','Knuckle','Patinho'],
          ['Cuadrada','Pierna trasera','Milanesa, horno, estofado','—','—'],
          ['Peceto','Pierna trasera','Horno, vitel toné, olla','Eye of round','Lagarto'],
          ['Vacío','Bajo, entre costilla y pierna','Parrilla lenta','—','Vazio (sur de Brasil)'],
          ['Matambre','Bajo, entre cuero y costillar','Parrilla, arrollado, a la pizza','—','Matambre (sur de Brasil)'],
          ['Entraña','Diafragma','Parrilla fuerte','Skirt steak','—'],
          ['Costilla o asado de tira','Costillar','Parrilla lenta, horno','Short ribs','Costela'],
          ['Tapa de asado','Costillar, capa externa','Parrilla lenta, horno, olla','—','—'],
          ['Aguja','Delantero, cuello y lomo alto','Olla, horno lento, parrilla lenta','Chuck','Acém'],
          ['Marucha','Delantero, paleta','Parrilla lenta, horno, olla','—','—'],
          ['Carnaza','Delantero o trasero, según la carnicería','Guiso, estofado, carne molida','—','—'],
          ['Osobuco','Pata, en rodajas con hueso','Olla, caldo, puchero','Beef shank','Ossobuco'],
          ['Garrón','Pata, sin cortar en rodajas','Olla, horno muy lento','Shank','Músculo']
        ],
        note:'Los nombres y los límites entre cortes cambian entre países y hasta entre carnicerías. Cuando tengas dudas, describí para qué lo querés y pedí que te muestren la pieza.'
      }
    },
    {id:'delantero', title:'Cuarto delantero: sabor y cocción lenta',
      paragraphs:[
        'La aguja, la marucha, la carnaza y el osobuco salen del cuarto delantero y de las patas. Son cortes con más colágeno, que se ablanda con calor suave y tiempo: por eso son los reyes del puchero, del guiso paraguayo, del estofado y del asado a la olla. En la parrilla también funcionan si se hacen despacio, como la marucha entera, que tiene fanáticos por su sabor.',
        'El osobuco es la pata cortada en rodajas con el hueso y su médula, ideal para caldos y para el vori vori de carne. El garrón es la misma zona pero en pieza entera, que se hace al horno muy lento o en olla hasta que la carne se separa del hueso.'
      ]
    },
    {id:'costillar', title:'Costillar: bifes con hueso y costilla para asado',
      paragraphs:[
        'Del costillar salen dos familias de cortes. Por un lado, la costilla o asado de tira, que se corta a lo ancho del hueso y es el clásico de las parrillas paraguayas. Por otro, la parte alta, donde está el ojo de bife: si se corta con el hueso de la costilla es bife ancho o chuletón, y si se deja el hueso largo y limpio queda el tomahawk. La tapa de asado es la capa de carne que cubre esas costillas por fuera.',
        'Varios cortes americanos conocidos salen de esta zona: el ribeye, que es el ojo de bife, y el tomahawk. Cuando alguien habla de corte americano suele referirse a bifes gruesos, de dos dedos o más, cortados al estilo de las parrillas de Estados Unidos.',
        'El wagyu, que a veces aparece junto a estos bifes, no es un corte sino una raza de origen japonés con mucha grasa infiltrada. Se vende en los mismos cortes, sobre todo ojo de bife y bife de chorizo, y pide porciones chicas y fuego fuerte.'
      ]
    },
    {id:'bajo', title:'El bajo: vacío, matambre y entraña',
      paragraphs:[
        'La zona de la panza da cortes planos, con grasa y membranas, que en la parrilla se transforman. El vacío es jugoso y se hace lento, primero del lado de la membrana. El matambre es una capa fina que se hace a la parrilla, arrollado y hervido, o a la pizza. La entraña, en realidad, es el diafragma: una tira fina de mucho sabor que va a fuego fuerte y pocos minutos.'
      ]
    },
    {id:'trasero', title:'Cuarto trasero: cortes tiernos y cortes magros',
      paragraphs:[
        'En el cuarto trasero conviven los cortes más tiernos del animal y los más magros. El lomo y el bife de chorizo están en la parte alta, pegados a la columna, y son los de cocción rápida. El cuadril, con su tapa, la picaña, y su punta, la colita, es la zona preferida para la parrilla de domingo.',
        'Más abajo, en la pierna, están la nalga, la bola de lomo, la cuadrada y el peceto. Son cortes con poca grasa y fibra más firme: rinden muy bien en milanesas, en bifes finos a la plancha, en carne al horno y en preparaciones frías como el vitel toné. Si los hacés a la parrilla, preferí que queden jugosos y cortalos finos.'
      ]
    },
    {id:'pedir', title:'Cómo pedir en la carnicería',
      items:[
        'Decí para qué lo querés: milanesa, parrilla, olla u horno. El carnicero te puede sugerir un corte equivalente si no tiene el que buscás.',
        'Para la parrilla, pedí los bifes gruesos, de dos a tres dedos, así se doran por fuera sin secarse.',
        'Para milanesa, pedí que corte fino y contra la fibra, o que te pase la carne por la máquina tiernizadora si la tiene.',
        'Si un nombre no coincide, pedí ver la pieza entera antes de cortar.',
        'Como estimación, calculá 250 a 300 g de carne sin hueso por adulto para un plato principal, y más si es el único plato del asado.'
      ]
    }
  ],
  faq:[
    ['¿Cuáles son los cortes de carne vacuna más tiernos?','El lomo, el bife de chorizo, el ojo de bife y la picaña. Salen de músculos que trabajan poco y aguantan cocción rápida.'],
    ['¿Qué es el corte americano de carne?','Se suele llamar así a los bifes gruesos cortados al estilo de Estados Unidos, como ribeye, New York o tomahawk. En Paraguay equivalen al ojo de bife, el bife de chorizo y el bife ancho con hueso largo.'],
    ['¿Qué corte de carne es mejor para milanesa?','La nalga es la más usada, seguida por la bola de lomo, la cuadrada y el peceto. Pedila cortada fina y contra la fibra.'],
    ['¿Qué cortes de carne de res son para la olla?','Osobuco, garrón, aguja, marucha y carnaza. Tienen colágeno que se ablanda con calor suave y tiempo.'],
    ['¿Cómo se llama la picaña en otros países?','En Brasil se llama picanha, en Argentina y Uruguay tapa de cuadril, y en Estados Unidos top sirloin cap.'],
    ['¿Qué diferencia hay entre carne de res y carne vacuna?','Ninguna: las dos nombran la carne del ganado bovino. Novillo, vaca y ternera indican la edad y el sexo del animal, no el corte.']
  ],
  recipes:['receta-milanesas','receta-peceto-al-horno','receta-osobuco-a-la-olla','receta-matambre-a-la-pizza','receta-vitel-tone','receta-asado-a-la-olla','receta-estofado-de-carne','receta-picana-a-la-parrilla','receta-vacio-a-la-parrilla','receta-entrana-a-la-parrilla'],
  related:['corte-picana','corte-tapa-de-cuadril','corte-colita-de-cuadril','corte-bife-de-chorizo','corte-ojo-de-bife','corte-bife-ancho','corte-tomahawk','corte-chuleton','corte-vacio','corte-matambre','corte-entrana','corte-costilla-de-vaca','corte-tapa-de-asado','corte-aguja','corte-marucha','corte-carnaza','corte-osobuco','corte-garron','corte-nalga','corte-bola-de-lomo','corte-cuadrada','corte-peceto','corte-wagyu','guia-carne-magra','guia-asado-a-la-parrilla','guia-cuanta-carne-por-persona','guia-cortes-de-cerdo','guia-cortes-de-pollo'],
  ctaTitle:'¿Organizás un asado para muchos?',
  ctaText:'Si preferís que un equipo elija los cortes y se ocupe de la parrilla, contanos la fecha, la zona y cuántas personas vienen. Te ayudamos a consultar catering de asado en Gran Asunción.',
  waMessage:'Hola, quiero consultar un catering de asado para un evento. ¿Me ayudás?'
};
