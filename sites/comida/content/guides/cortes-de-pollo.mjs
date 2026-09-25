// Guide: chicken cuts, uses and per-person estimates. Food safety: poultry to 74 °C.
export default {
  id:'guia-cortes-de-pollo', slug:'cortes-de-pollo', kind:'guide', order:26,
  published:true, indexable:true, updatedAt:'2026-09-25', verifiedAt:'2026-09-25',
  source:'Guía de la redacción de comida.com.py sobre los cortes de pollo que se venden en Paraguay. Temperatura interna según las recomendaciones generales de inocuidad alimentaria (74 °C para aves)',
  label:'Cortes de pollo',
  eyebrow:'Mapa de cortes',
  seoTitle:'Cortes de pollo: suprema, muslo y alitas',
  meta:'Cortes de pollo: suprema, pata muslo, muslo, alitas y pollo entero. Para qué sirve cada uno, cuánto calcular por persona y cómo cocinarlo sin que se seque.',
  h1:'Cortes de pollo: suprema, pata muslo, alitas y pollo entero',
  cardText:'Qué corte de pollo comprar para cada receta y cuánto calcular por persona.',
  category:['pollo'],
  keywords:['suprema de pollo','muslo de pollo','pata muslo','alitas de pollo','alas de pollo','pollo entero','cortes de pollo'],
  intro:[
    'El pollo es la carne más versátil de la cocina diaria: se hace al horno, a la parrilla, frito, en guiso, en caldo o en milanesa, y cada preparación sale mejor con el corte indicado. La suprema rinde para milanesas y rellenos, la pata muslo aguanta horno largo sin secarse, las alitas son para picar y el pollo entero es lo más rendidor para una familia.',
    'En esta guía repasamos cada corte de pollo que se consigue en carnicerías y despensas de Paraguay, qué diferencia hay entre pechuga y suprema o entre muslo y pata muslo, cuánto calcular por persona y cómo cocinar cada uno para que quede jugoso y bien cocido.'
  ],
  estimate:'Las cantidades por persona de esta guía son estimaciones de la redacción: ajustalas según el apetito del grupo y las guarniciones.',
  facts:[
    ['Temperatura segura','74 °C en la parte más gruesa'],
    ['Pollo entero','Uno de unos 2 kg para 3 o 4 personas (estimación)'],
    ['Suprema','Una por adulto (estimación)'],
    ['Pata muslo','Una o dos por adulto según el tamaño (estimación)'],
    ['Alitas','6 a 8 por adulto como plato principal (estimación)']
  ],
  sections:[
    {id:'cortes', title:'Los cortes de pollo y para qué sirve cada uno',
      table:{caption:'Cortes de pollo: características y mejor uso', head:['Corte','Qué es','Mejor uso','Por adulto (estimación)'],
        rows:[
          ['Pollo entero','El ave completa, limpia, con o sin menudos','Horno, parrilla, caldo, guiso','Un cuarto de pollo de 2 kg'],
          ['Pechuga','Pecho con hueso y a veces con piel','Horno, caldo, desmechado','Media pechuga'],
          ['Suprema','Mitad de pechuga sin hueso ni piel','Milanesa, rellena, plancha, strogonoff','Una suprema de 200 a 250 g'],
          ['Pata muslo','Pierna completa: muslo y pata unidos','Horno, parrilla, guiso','Una grande o dos chicas'],
          ['Muslo','Parte alta de la pierna, con o sin hueso','Horno, parrilla, salteados','Dos muslos'],
          ['Pata o palillo','Parte baja de la pierna','Frito, horno, para chicos','Dos o tres'],
          ['Alitas','Ala entera o separada en partes','Horno, frita, parrilla, picada','6 a 8 como plato, 3 a 4 como entrada'],
          ['Carcasa y menudos','Esqueleto, cogote, hígado, corazón, molleja','Caldo, vori vori, sopas','Para dar sabor']
        ],
        note:'El peso y el tamaño de las presas cambian mucho entre pollos y proveedores. Pesar ayuda más que contar presas.'
      }
    },
    {id:'suprema', title:'Suprema de pollo: la más buscada',
      paragraphs:[
        'La suprema es la mitad de la pechuga sin hueso y sin piel, a veces con el ala pequeña pegada en los cortes más prolijos. Es magra y tierna, por eso es la base de la milanesa de pollo, de las supremas rellenas y de los salteados. Su punto débil es que se seca muy rápido si se pasa de cocción.',
        'Para que quede jugosa, abrila en mariposa o aplanala entre dos láminas de film para que tenga el mismo grosor en toda la pieza. Así se cocina pareja y llega a 74 °C en el centro sin que los bordes se resequen. Una salmuera corta, de media hora en agua con sal, también ayuda mucho.'
      ]
    },
    {id:'muslo', title:'Muslo y pata muslo: jugosos y rendidores',
      paragraphs:[
        'El muslo tiene más grasa y más tejido que la pechuga, así que perdona los descuidos: se puede hornear más tiempo, hacer a la parrilla o guisar sin que se seque. La pata muslo es la pierna completa y es el corte clásico del pollo al horno con papas, del pollo a la portuguesa y del guiso de arroz con pollo.',
        'Al horno, a unos 200 °C, una pata muslo mediana tarda entre 40 y 50 minutos; los muslos deshuesados, unos 25 a 30. Si querés la piel crocante, secala bien con papel de cocina antes de condimentar y terminá los últimos minutos con el horno más fuerte.'
      ]
    },
    {id:'alitas', title:'Alitas de pollo para picar o como plato',
      paragraphs:[
        'Las alitas se venden enteras o separadas en tres partes: el drumette, que parece un muslito chico; la parte media, con dos huesitos; y la punta, que casi no tiene carne y conviene guardar para el caldo. Como tienen mucha piel, quedan muy bien al horno fuerte, fritas o a la parrilla, con una salsa barbacoa, de miel y mostaza o simplemente con limón y ajo.',
        'Al horno a 200 a 220 °C, sobre una rejilla para que la grasa caiga, tardan unos 40 a 45 minutos, dándolas vuelta a la mitad. Como entrada en una picada, calculá unas 3 o 4 por persona; si son el plato principal, entre 6 y 8.'
      ]
    },
    {id:'entero', title:'Pollo entero: cómo aprovecharlo',
      paragraphs:[
        'Comprar el pollo entero y trozarlo en casa suele rendir más y te deja la carcasa para un caldo. Con un cuchillo firme se separan primero las patas muslo por la articulación, después las alas, y por último se corta la pechuga a los lados del esternón para sacar las dos supremas.'
      ],
      steps:[
        'Poné el pollo con la pechuga hacia arriba y separá la pierna tirándola hacia afuera hasta que se vea la articulación; cortá por ahí.',
        'Separá cada ala por la articulación del hombro.',
        'Cortá a lo largo del esternón y deslizá el cuchillo pegado al hueso para sacar cada suprema.',
        'Guardá la carcasa, el cogote y las puntas de las alas para un caldo o un vori vori.',
        'Lavate las manos y limpiá la tabla y el cuchillo con agua caliente y detergente antes de tocar otros alimentos.'
      ],
      after:['Un pollo entero de unos 2 kg al horno a 180 °C tarda alrededor de una hora y media. Está listo cuando la parte más gruesa del muslo llega a 74 °C y el jugo sale transparente al pincharlo.']
    },
    {id:'seguridad', title:'Cocción segura del pollo',
      items:[
        'Cociná todo el pollo hasta 74 °C en la parte más gruesa, sin tocar el hueso con el termómetro.',
        'No laves el pollo crudo en la pileta: salpica y no quita lo que importa. Secalo con papel de cocina.',
        'Descongelalo en la heladera, nunca sobre la mesada.',
        'Usá tabla y cuchillo aparte para el pollo crudo, o lavalos bien antes de cortar verduras.',
        'Guardá las sobras en la heladera apenas se enfríen y consumilas en pocos días.'
      ]
    }
  ],
  faq:[
    ['¿Qué diferencia hay entre pechuga y suprema de pollo?','La pechuga es el pecho entero, a veces con hueso y piel. La suprema es cada mitad de la pechuga ya sin hueso y sin piel, lista para milanesa o plancha.'],
    ['¿Qué es la pata muslo?','Es la pierna completa del pollo, con el muslo y la pata unidos. Es jugosa y aguanta bien el horno y la parrilla.'],
    ['¿Cuántas alitas de pollo se calculan por persona?','Como estimación, 3 o 4 si son una entrada o parte de una picada, y entre 6 y 8 si son el plato principal.'],
    ['¿Cuánto tarda el muslo de pollo al horno?','A unos 200 °C, una pata muslo mediana tarda entre 40 y 50 minutos. Está lista cuando llega a 74 °C en la parte más gruesa.'],
    ['¿Para cuántas personas alcanza un pollo entero?','Un pollo de unos 2 kg alcanza para 3 o 4 personas con guarniciones, como estimación.'],
    ['¿Cómo hacer para que la suprema de pollo no quede seca?','Aplanala para que tenga el mismo grosor, hacé una salmuera corta si tenés tiempo y sacala del fuego apenas llegue a 74 °C.']
  ],
  recipes:['receta-pollo-al-horno','receta-muslos-de-pollo-al-horno','receta-pechuga-de-pollo','receta-suprema-de-pollo-rellena','receta-supremas-a-la-napolitana','receta-alitas-de-pollo-al-horno','receta-pollo-frito','receta-pollo-a-la-portuguesa','receta-caldo-de-pollo','receta-strogonoff-de-pollo','receta-arroz-con-pollo','receta-nuggets-de-pollo'],
  related:['ingrediente-pollo','guia-cortes-de-carne-vacuna','guia-cortes-de-cerdo','guia-carne-magra','guia-cuanta-comida-por-persona'],
  ctaTitle:'¿Necesitás comida para un evento?',
  ctaText:'Si tenés un cumpleaños, una reunión de trabajo o una fiesta grande, contanos la fecha, la zona y cuántas personas vienen. Te ayudamos a consultar catering en Gran Asunción.',
  waMessage:'Hola, quiero consultar un catering para un evento. ¿Me ayudás?'
};
