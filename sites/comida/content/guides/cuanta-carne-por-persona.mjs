// Guide + asado calculator. All quantities are editorial estimates.
export default {
  id:'guia-cuanta-carne-por-persona', slug:'cuanta-carne-por-persona', kind:'guide', order:6,
  published:true, indexable:true, updatedAt:'2026-09-24', verifiedAt:'2026-09-24',
  source:'Estimaciones editoriales de la redacción de comida.com.py para asados en Paraguay. No reemplazan el consejo de tu carnicero ni la propuesta de un catering',
  label:'Cuánta carne por persona',
  eyebrow:'Calculadora de asado',
  seoTitle:'Cuánta carne por persona para asado',
  meta:'Cuánta carne por persona para un asado: calculadora con hueso o sin hueso, chorizos y carbón, tabla para 10, 20 y 50 personas y qué cortes elegir.',
  h1:'Cuánta carne por persona para un asado',
  cardText:'Calculá los kilos de carne, los chorizos y el carbón para tu asado.',
  category:['carne','fiesta'],
  keywords:['cuánta carne por persona','cuanta carne por persona para asado','asado para 10 personas','carne para asado','cuantos kilos de carne para asado'],
  image:12,
  intro:[
    'En un asado paraguayo la carne manda, pero no se come sola: llegan el chorizo, la mandioca, la sopa paraguaya y la ensalada, y todo eso cambia cuántos kilos hay que comprar. A eso se suma el hueso, que pesa en la balanza y no en el plato.',
    'La calculadora te da los kilos de carne cruda que conviene pedir según cuántos adultos y chicos vienen, el apetito del grupo y si elegís cortes con o sin hueso, además de los chorizos y el carbón. Más abajo encontrás la tabla para grupos típicos y qué cortes combinar.'
  ],
  estimate:'Los kilos, chorizos y carbón que calcula esta página son estimaciones editoriales: ajustalos según el apetito de tu grupo, las guarniciones y cuánto dure el asado.',
  tool:{type:'asado', title:'Calculadora de carne para asado',
    hint:'Indicá cuántos adultos y chicos vienen, el apetito del grupo y el tipo de cortes.',
    data:{
      gramsAdult:{liviano:350, normal:450, fuerte:550},
      gramsKid:200,
      boneFactor:{mixto:1.2, sin:1, con:1.5},
      chorizoPerPerson:1,
      coalKgPerPerson:0.6,
      note:'Estimación editorial. Los gramos por persona son de carne sin hueso; el tipo de corte suma el peso del hueso. El chorizo va aparte de la carne.'
    }
  },
  facts:[
    ['Adulto, apetito normal','Unos 450 g de carne sin hueso'],
    ['Adulto, apetito liviano o de buen diente','Entre 350 y 550 g sin hueso'],
    ['Chico','Unos 200 g sin hueso'],
    ['Cortes con hueso','Hasta la mitad más de peso en crudo'],
    ['Carbón','Alrededor de 600 g por persona']
  ],
  sections:[
    {id:'como-calcula', title:'Cómo calcula la carne esta página',
      paragraphs:[
        'Partimos de la carne que efectivamente se come, sin hueso: unos 450 g crudos por adulto en un asado con apetito normal, 350 g si hay muchas guarniciones o el grupo come poco, y 550 g si es un grupo de buen diente o el asado es la única comida del día. Para los chicos calculamos unos 200 g.',
        'Después sumamos el hueso. Si comprás mayormente cortes sin hueso, como vacío, picana o entraña, el peso que pedís es casi el mismo que se come. Si hay costilla o costillar, parte de lo que pagás es hueso: en un asado mixto sumamos un quinto más, y si casi todo es costilla, la mitad más.'
      ],
      table:{caption:'Factor de hueso que usa la calculadora', head:['Tipo de cortes','Factor','Ejemplo con 450 g por persona'],
        rows:[
          ['Mayormente sin hueso','1','450 g crudos'],
          ['Mixto, con y sin hueso','1,2','540 g crudos'],
          ['Mayormente con hueso (costilla)','1,5','675 g crudos']
        ]
      }
    },
    {id:'tabla', title:'Carne para asado para 10, 20 y 50 personas',
      paragraphs:[
        'La tabla muestra los kilos de carne cruda para un asado mixto, con y sin hueso, solo con adultos. Si hay chicos, sumá unos 240 g crudos por cada uno con cortes mixtos.'
      ],
      table:{caption:'Kilos de carne cruda para asado mixto (estimación editorial)', head:['Adultos','Apetito liviano','Apetito normal','De buen diente','Chorizos','Carbón'],
        rows:[
          ['10','4,2 kg','5,4 kg','6,6 kg','10','6 kg'],
          ['20','8,4 kg','10,8 kg','13,2 kg','20','12 kg'],
          ['30','12,6 kg','16,2 kg','19,8 kg','30','18 kg'],
          ['50','21 kg','27 kg','33 kg','50','30 kg']
        ],
        note:'El chorizo o la morcilla se calculan a razón de una unidad por persona, aparte de la carne. El carbón depende mucho de la parrilla y del viento.'
      }
    },
    {id:'cortes', title:'Qué cortes combinar en un asado',
      paragraphs:[
        'Un buen asado combina cortes de cocción lenta, que se ponen primero, con cortes rápidos que se hacen al final. Así la parrilla trabaja todo el tiempo y los invitados comen en varias vueltas en lugar de esperar todo junto.'
      ],
      cards:[
        ['Vacío','Corte de la panza con una capa de grasa y membrana. Se hace despacio, primero del lado de la membrana, hasta que quede tierno y jugoso.'],
        ['Costillar de cerdo','Sabroso y rendidor, pide fuego suave y tiempo. Tiene hueso: sumalo en la opción mixta o con hueso de la calculadora.'],
        ['Picana','Corte triangular con su tapa de grasa. Se cocina primero del lado de la grasa y se corta en fetas finas contra la fibra.'],
        ['Entraña','Fina y de cocción rápida a fuego fuerte. Ideal para abrir el asado mientras se terminan los cortes grandes.'],
        ['Costilla vacuna','El clásico con hueso de las parrillas paraguayas. Se hace lento y rinde menos carne por kilo comprado.'],
        ['Chorizo y morcilla','Van primero, como entrada, y ayudan a que nadie espere con hambre.']
      ]
    },
    {id:'orden', title:'Orden y tiempos orientativos en la parrilla',
      steps:[
        'Encendé el carbón con tiempo y esperá a que las brasas estén cubiertas de ceniza blanca antes de poner la carne.',
        'Poné primero los cortes grandes y con hueso, como costilla y costillar de cerdo, a fuego suave. Llevan entre una hora y media y más de dos horas según el grosor.',
        'Sumá el vacío y la picana cuando la costilla ya lleva un rato. Cocinalos del lado de la grasa o de la membrana primero.',
        'Poné el chorizo y la morcilla para que estén listos como entrada, pinchando el chorizo apenas o nada para que no pierda jugo.',
        'Dejá la entraña y los cortes finos para el final, con brasa más viva y pocos minutos por lado.',
        'Dejá descansar unos minutos los cortes grandes antes de cortarlos, y cortá siempre contra la fibra.'
      ],
      after:['Los tiempos son orientativos y dependen del corte, del grosor, de la altura de la parrilla y del calor de las brasas. Lo más confiable es mirar el color, tocar la firmeza y, si tenés, usar un termómetro de cocina.']
    },
    {id:'guarniciones', title:'Guarniciones que acompañan el asado',
      paragraphs:[
        'En Paraguay el asado casi nunca se sirve sin mandioca hervida y sopa paraguaya o chipa guazú. Estas guarniciones llenan y permiten quedarse en la franja liviana de carne sin que nadie se quede con hambre. Sumá una o dos ensaladas frescas, como tomate y cebolla, lechuga o ensalada rusa, y pan o chipa.',
        'Para calcular cuánto de cada guarnición, usá la calculadora de comida por persona en su formato de asado: te da los kilos de mandioca, sopa, ensaladas y bebida para la misma cantidad de invitados.'
      ]
    },
    {id:'compra', title:'Consejos para comprar la carne',
      items:[
        'Encargá la carne con uno o dos días de anticipación si es para muchas personas o querés cortes específicos.',
        'Pedí al carnicero el peso por corte y que te separe los cortes con hueso de los sin hueso, así controlás el cálculo.',
        'Transportala en conservadora con hielo y guardala en la parte más fría de la heladera hasta el día del asado.',
        'Sacala de la heladera un rato antes de ponerla en la parrilla, para que no llegue helada al fuego.',
        'Salá justo antes de cocinar o durante la cocción, con sal gruesa o parrillera.',
        'Si sobra, enfriala rápido y guardala tapada: sirve para sándwiches, un salpicón o un guiso al día siguiente.'
      ]
    }
  ],
  faq:[
    ['¿Cuánta carne por persona se calcula para un asado?','Como estimación, unos 450 g de carne sin hueso por adulto con apetito normal. Con cortes mixtos, con y sin hueso, eso da alrededor de 540 g crudos por persona, más un chorizo.'],
    ['¿Cuánta carne necesito para un asado para 10 personas?','Para 10 adultos con apetito normal y cortes mixtos, unos 5,4 kg de carne cruda, 10 chorizos o morcillas y alrededor de 6 kg de carbón.'],
    ['¿Cuánta carne se calcula por chico?','Unos 200 g de carne sin hueso, que con cortes mixtos son cerca de 240 g crudos. Los chicos suelen preferir chorizo y cortes tiernos.'],
    ['¿Qué carne comprar para un asado?','Combiná cortes lentos, como costilla, vacío o costillar de cerdo, con cortes rápidos como entraña o picana. Sumá chorizo y morcilla para empezar.'],
    ['¿Cuánto carbón se necesita para un asado?','Como referencia, alrededor de 600 g por persona o algo más de un kilo por cada kilo de carne con cortes lentos. Tené una bolsa extra por si hay viento o el asado se alarga.'],
    ['¿La carne se calcula con o sin hueso?','Conviene pensar en carne sin hueso, que es lo que se come, y después sumar el peso del hueso según los cortes. Eso hace la calculadora con el factor de hueso.']
  ],
  recipes:['receta-sopa-paraguaya','receta-chipa-guazu','receta-ensalada-rusa','receta-chipa-asador'],
  related:['corte-vacio','corte-costillar-de-cerdo','corte-picana','corte-entrana','guia-cuanta-comida-por-persona','guia-mercado-de-abasto'],
  formOccasion:'cumpleanos',
  ctaTitle:'¿Querés un asado sin estar en la parrilla?',
  ctaText:'Si preferís disfrutar con tus invitados, contanos la fecha, la zona y cuántas personas vienen. Te ayudamos a consultar catering de asado en Gran Asunción.',
  waMessage:'Hola, quiero consultar un catering de asado para un cumpleaños. ¿Me ayudás?'
};
