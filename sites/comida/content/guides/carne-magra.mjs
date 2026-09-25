// Guide: leaner cuts and how to cook them without drying. No health or diet claims.
export default {
  id:'guia-carne-magra', slug:'carne-magra', kind:'guide', order:27,
  published:true, indexable:true, updatedAt:'2026-09-25', verifiedAt:'2026-09-25',
  source:'Guía de cocina de la redacción de comida.com.py, basada en la práctica de carnicería del Río de la Plata. No es consejo de salud ni de nutrición. Temperaturas internas según las recomendaciones generales de inocuidad alimentaria',
  label:'Carne magra',
  eyebrow:'Cortes con poca grasa',
  seoTitle:'Carne magra: qué cortes y cómo cocinarlos',
  meta:'Carne magra: qué cortes de vaca, cerdo y pollo tienen menos grasa y cómo cocinarlos sin que queden secos ni duros. Técnicas, tiempos y recetas.',
  h1:'Carne magra: qué cortes elegir y cómo cocinarlos sin que se sequen',
  cardText:'Los cortes con menos grasa y las técnicas para que queden jugosos.',
  category:['carne'],
  keywords:['carne magra','magra carne','cortes de carne magra','carne sin grasa','cortes magros de res'],

  image:72,
  intro:[
    'En la carnicería, carne magra quiere decir carne con poca grasa visible, ni en la superficie ni entre las fibras. Hay cortes magros en el vacuno, en el cerdo y en el pollo, y todos comparten el mismo desafío en la cocina: sin grasa que los proteja, pasan de jugosos a secos en pocos minutos.',
    'Esta guía reúne los cortes con menos grasa de cada animal y las técnicas que funcionan para cocinarlos bien: cortes finos y fuego rápido, marinadas, cocción lenta con líquido, reposo y termómetro. Es una guía de cocina, no de nutrición: si seguís una dieta por indicación médica, consultá con tu profesional de salud.'
  ],
  facts:[
    ['Vacuno','Peceto, nalga, bola de lomo, cuadrada, lomo'],
    ['Cerdo','Solomillo, carré, pernil'],
    ['Pollo','Suprema o pechuga sin piel'],
    ['Riesgo principal','Que se seque o quede dura'],
    ['Clave','Temperatura justa, reposo y corte contra la fibra']
  ],
  sections:[
    {id:'que-es', title:'Qué es la carne magra',
      paragraphs:[
        'Un corte es magro cuando tiene poca grasa de cobertura y poco veteado, esas líneas blancas dentro del músculo que en la parrilla se derriten y dan jugosidad. En la vaca, los cortes más magros salen de la pierna trasera y del lomo; en el cerdo, del lomo y la pata; en el pollo, de la pechuga sin piel.',
        'También podés pedir que te limpien la grasa de un corte que la tiene, o pedir carne molida especial, hecha con un corte magro en lugar de recortes. En ese caso, decile al carnicero qué pieza querés moler y que la pase delante tuyo.'
      ]
    },
    {id:'cortes', title:'Cortes magros de vaca, cerdo y pollo',
      table:{caption:'Cortes con poca grasa visible y cómo aprovecharlos', head:['Corte','Animal','Textura','Mejor técnica'],
        rows:[
          ['Lomo','Vacuno','Muy tierno','Sellado rápido, horno corto, plancha'],
          ['Peceto','Vacuno','Firme, fibra larga','Horno a punto, olla, fetas finas'],
          ['Nalga','Vacuno','Tierna si se corta fina','Milanesa, bifes finos a la plancha'],
          ['Bola de lomo','Vacuno','Firme','Milanesa, guiso, horno con líquido'],
          ['Cuadrada','Vacuno','Firme','Estofado, milanesa, carne al horno'],
          ['Solomillo','Cerdo','Muy tierno','Medallones a la sartén, horno rápido'],
          ['Carré','Cerdo','Tierno','Horno, chuletas finas a la plancha'],
          ['Pernil','Cerdo','Firme','Horno lento con líquido, fetas finas'],
          ['Suprema','Pollo','Tierna, se seca fácil','Plancha aplanada, horno corto, milanesa']
        ],
        note:'La cantidad de grasa cambia según el animal, la alimentación y cómo se limpie la pieza. La tabla compara cortes entre sí, no da valores nutricionales.'
      }
    },
    {id:'tecnicas', title:'Cómo cocinar carne magra sin que se seque',
      cards:[
        ['Fuego rápido en piezas finas','Bifes finos de nalga, medallones de solomillo o supremas aplanadas: plancha o sartén bien caliente, poco tiempo por lado y afuera.'],
        ['Cocción lenta con líquido','Bola de lomo, cuadrada o peceto en olla con cebolla, locote, tomate y caldo, tapados y a fuego suave hasta que estén tiernos.'],
        ['Marinada','Una hora a una noche en la heladera con aceite, ajo, hierbas y algo ácido, como limón o vinagre, suaviza la superficie y suma sabor.'],
        ['Salmuera corta','Media hora en agua con sal ayuda a que la suprema y el carré retengan jugo durante la cocción.'],
        ['Termómetro','Sacar la carne en el punto justo es lo que más diferencia hace. Unos grados de más la secan.'],
        ['Reposo y corte','Dejá reposar la pieza unos minutos y cortala fina y contra la fibra para que se sienta tierna.']
      ]
    },
    {id:'horno', title:'Carne magra al horno, paso a paso',
      paragraphs:[
        'El peceto, el lomo y el carré de cerdo son las piezas magras que más se hacen al horno. El método que mejor funciona es sellar primero para dorar y después terminar a temperatura moderada, controlando el centro.'
      ],
      steps:[
        'Sacá la pieza de la heladera un rato antes y secala con papel de cocina.',
        'Condimentala con sal, pimienta, ajo y hierbas, o con la marinada que elegiste.',
        'Dorala por todos lados en una sartén bien caliente con un poco de aceite, unos minutos en total.',
        'Pasala a una asadera y llevala al horno a unos 180 °C. Un peceto de un kilo tarda alrededor de 40 a 50 minutos para quedar a punto; un carré de cerdo de un kilo, de 45 a 60 minutos.',
        'Controlá el centro: el cerdo tiene que llegar al menos a 63 °C y el pollo a 74 °C. La carne vacuna en pieza entera se saca según el punto que te guste.',
        'Tapala con papel aluminio y dejala reposar unos 10 minutos antes de cortar en fetas finas.'
      ],
      after:['Si la vas a servir fría, como en el vitel toné, dejala enfriar entera y cortala recién cuando esté bien fría: las fetas salen parejas y no se desarman.']
    },
    {id:'molida', title:'Carne molida magra',
      paragraphs:[
        'Para hamburguesas, albóndigas o pan de carne, una molida muy magra queda seca y se desarma. Si querés usarla igual, sumale humedad: cebolla rallada, pan remojado en leche, huevo o verduras ralladas como zapallito o zanahoria. La carne molida tiene que llegar a 71 °C en el centro, así que no se deja rosada por dentro.'
      ]
    },
    {id:'errores', title:'Errores comunes con los cortes magros',
      items:[
        'Hacerlos a la parrilla como si fueran vacío o costilla: pasan de punto enseguida.',
        'Cortar los bifes gruesos para milanesa: quedan duros. Pedilos finos o aplanalos.',
        'Cortar a favor de la fibra: la carne se siente más dura aunque esté bien cocida.',
        'Cortar apenas sale del fuego: se pierde el jugo en la tabla.',
        'Hervirlos a borbotones en la olla: el hervor fuerte endurece; mejor fuego suave y tapa.'
      ]
    }
  ],
  faq:[
    ['¿Cuál es la carne más magra de la vaca?','Entre los cortes vacunos, el peceto, la nalga, la bola de lomo, la cuadrada y el lomo son los que tienen menos grasa visible.'],
    ['¿Qué carne magra sirve para milanesa?','La nalga es la más usada, y también la bola de lomo, la cuadrada y el peceto. En pollo, la suprema aplanada.'],
    ['¿Cómo cocinar carne magra para que quede tierna?','Cortala fina y hacela rápido, o cocinala lenta con líquido y tapa. Marinala, no la pases de punto, dejala reposar y cortala contra la fibra.'],
    ['¿Qué corte de cerdo es magro?','El solomillo es el más magro y tierno. El carré y el pernil también tienen poca grasa si se les quita la capa exterior.'],
    ['¿Cómo pedir carne molida magra en la carnicería?','Elegí un corte magro, como nalga, bola de lomo o cuadrada, y pedí que lo muelan en el momento en lugar de comprar molida común.'],
    ['¿La carne magra se puede hacer a la parrilla?','Sí, pero con cuidado: en bifes finos a fuego fuerte y pocos minutos, o piezas enteras como el peceto a fuego medio controlando el centro.']
  ],
  recipes:['receta-peceto-al-horno','receta-vitel-tone','receta-milanesas','receta-solomillo-de-cerdo','receta-lomo-de-cerdo-al-horno','receta-pechuga-de-pollo','receta-suprema-de-pollo-rellena','receta-estofado-de-carne','receta-albondigas'],
  related:['corte-peceto','corte-nalga','corte-bola-de-lomo','corte-cuadrada','corte-carre-de-cerdo','ingrediente-carne-molida','guia-cortes-de-carne-vacuna','guia-cortes-de-cerdo','guia-cortes-de-pollo'],
  ctaTitle:'¿Buscás un menú para tu evento?',
  ctaText:'Si necesitás comida para un evento con opciones más livianas, contanos la fecha, la zona y cuántas personas vienen. Te ayudamos a consultar catering en Gran Asunción.',
  waMessage:'Hola, quiero consultar un catering para un evento. ¿Me ayudás?'
};
