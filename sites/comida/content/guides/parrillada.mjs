// Guide: parrillada completa at home. Quantities are editorial estimates. No restaurant names.
export default {
  id:'guia-parrillada', slug:'parrillada', kind:'guide', order:21,
  published:true, indexable:true, updatedAt:'2026-09-25', verifiedAt:'2026-09-25',
  source:'Guía de la redacción de comida.com.py sobre la parrillada al estilo paraguayo y rioplatense. Temperaturas internas de seguridad según las recomendaciones generales de inocuidad alimentaria',
  label:'Parrillada',
  eyebrow:'Parrillada completa',
  seoTitle:'Parrillada: qué lleva y para cuántos',
  meta:'Qué lleva una parrillada completa, cuánto calcular por persona, cómo cocinar las achuras y cómo servirla en casa con un brasero en la mesa.',
  h1:'Parrillada completa: qué lleva, para cuántos y cómo servirla en casa',
  cardText:'Cortes, achuras y chorizos servidos juntos, calientes y al centro de la mesa.',
  category:['carne','fiesta'],
  keywords:['parrillada','parrilladas','parrillada completa','parrillada en asuncion','parrillada para 4 personas','que lleva una parrillada'],
  image:62,
  intro:[
    'La parrillada es una forma de servir el asado: en lugar de repartir la carne en platos, todo llega junto al centro de la mesa sobre una parrillita con brasas o un brasero, y cada uno se sirve lo que quiere mientras la comida se mantiene caliente. En las parrilladas de Asunción y del interior es el pedido de siempre para compartir en familia o con amigos.',
    'Acá te contamos qué suele incluir una parrillada completa, cómo varía según quién la arme, cuánto calcular por persona y cómo recrearla en casa, incluidas las achuras, que son la parte que más dudas genera. No hablamos de locales puntuales: la idea es que puedas armar la tuya o saber qué preguntar cuando la pedís.'
  ],
  estimate:'Las cantidades por persona de esta guía son estimaciones de la redacción: ajustalas según el apetito del grupo, las guarniciones y cuántas achuras coman tus invitados.',
  facts:[
    ['Qué es','Surtido de cortes, embutidos y achuras servido al centro'],
    ['Cómo se sirve','Sobre parrillita o brasero con brasas, en la mesa'],
    ['Por adulto','Unos 450 a 550 g crudos entre carne y achuras (estimación)'],
    ['Guarniciones','Mandioca, ensalada, sopa paraguaya o papas'],
    ['Ideal para','Grupos de 2 a 8 personas alrededor de una mesa']
  ],
  sections:[
    {id:'que-lleva', title:'Qué lleva una parrillada completa',
      paragraphs:[
        'No hay una receta fija, pero la parrillada completa casi siempre junta tres grupos: embutidos, achuras y cortes. Los embutidos abren el apetito, las achuras le dan el carácter de parrillada y los cortes son la parte más abundante. Una versión simple, sin achuras, se suele llamar parrillada de cortes o parrillada mixta, según quién la arme.'
      ],
      cards:[
        ['Chorizo','El infaltable. Puede ser chorizo parrillero de cerdo o mixto; en Paraguay también aparece el chorizo casero con más ajo.'],
        ['Morcilla','Embutido de sangre, dulce o salada. Se calienta despacio porque viene cocida y se revienta con fuego fuerte.'],
        ['Chinchulines','Intestino delgado vacuno o de cordero. Se hacen largos y crocantes, bien cocidos.'],
        ['Mollejas','Glándula tierna, de sabor suave. Se doran hasta quedar crocantes afuera y cremosas adentro.'],
        ['Riñón','Se sirve en rodajas o entero, con limón. Tiene un sabor fuerte que no a todos les gusta.'],
        ['Costilla y vacío','Los cortes de base, con hueso y grasa, que dan volumen a la bandeja.'],
        ['Cortes tiernos','Picaña, entraña o colita de cuadril, en porciones para compartir.'],
        ['Pollo o cerdo','Muslos de pollo, bondiola o costillitas de cerdo, para quienes no comen achuras.']
      ]
    },
    {id:'para-cuantos', title:'Parrillada para 2, 4 u 8 personas',
      paragraphs:[
        'Cuando armás la parrillada en casa, lo más simple es pensar en porciones por persona de cada grupo y multiplicar. Las achuras rinden poco en peso porque pierden mucho en la cocción, pero se comen en pedazos chicos y se comparten, así que alcanza con una porción modesta de cada una.'
      ],
      table:{caption:'Parrillada completa en casa: compra orientativa (estimación editorial)', head:['Personas','Chorizo y morcilla','Achuras','Cortes con y sin hueso'],
        rows:[
          ['2','2 chorizos y 1 morcilla','250 a 300 g en total','700 a 800 g'],
          ['4','4 chorizos y 2 morcillas','500 a 600 g en total','1,4 a 1,6 kg'],
          ['6','6 chorizos y 3 morcillas','750 a 900 g en total','2,1 a 2,4 kg'],
          ['8','8 chorizos y 4 morcillas','1 a 1,2 kg en total','2,8 a 3,2 kg']
        ],
        note:'Si nadie en el grupo come achuras, reemplazalas por más chorizo o por pollo. Para grupos grandes, conviene la calculadora de carne por persona.'
      }
    },
    {id:'achuras', title:'Cómo cocinar las achuras sin miedo',
      paragraphs:[
        'Las achuras son vísceras, así que la frescura manda: compralas el mismo día o el anterior, mantenelas bien frías y cocinalas por completo. Casi todas mejoran con fuego suave y paciencia, y con limón y sal al servir.'
      ],
      items:[
        'Chinchulines: lavalos bien por dentro y por fuera, hervilos unos minutos si querés acortar la parrilla, y después dejalos a fuego medio hasta que estén dorados y crocantes, girando seguido.',
        'Mollejas: se pueden blanquear en agua con sal unos minutos y quitar la telita más gruesa. Después van a fuego medio hasta que se doren bien por fuera.',
        'Riñón: sacale la grasa interna y los conductos blancos, abrilo en mariposa o cortalo en rodajas y cocinalo a fuego medio hasta que no quede rosado.',
        'Morcilla: ponela a fuego suave, en la zona más fría de la parrilla, y girala con cuidado para que no se abra.',
        'Chorizo: fuego medio y tiempo. El chorizo de cerdo tiene que quedar bien cocido en el centro, sin partes rosadas.'
      ]
    },
    {id:'servir', title:'Cómo servir la parrillada en casa',
      paragraphs:[
        'Lo que distingue a la parrillada es la forma de llegar a la mesa. Si tenés una parrillita de mesa o un brasero de hierro, cargale unas brasas de la parrilla grande con la pala, poné la rejilla encima y acomodá todo junto. Poné una tabla de madera o una bandeja metálica debajo para cuidar la mesa del calor, y dejá una pinza para que cada uno se sirva.',
        'Si no tenés brasero, una tabla grande o una fuente precalentada en el horno bajo cumple la misma función durante los primeros minutos. En ese caso conviene servir en dos vueltas: primero chorizos, morcillas y achuras, y después los cortes, así nada se enfría esperando.'
      ],
      steps:[
        'Cociná todo en la parrilla grande, con los tiempos de cada pieza, y cortá los cortes grandes en porciones antes de llevarlos a la mesa.',
        'Pasá unas brasas al brasero de mesa, sin llama, y dejá que la rejilla se caliente.',
        'Acomodá por grupos: embutidos de un lado, achuras en el centro, cortes del otro lado, así cada uno encuentra lo que busca.',
        'Poné limones cortados, sal gruesa, chimichurri y salsa criolla al lado de la bandeja.',
        'Reponé brasas si la comida se alarga, siempre desde la parrilla grande y con la pala.'
      ]
    },
    {id:'guarniciones', title:'Guarniciones y salsas para la parrillada',
      paragraphs:[
        'La mandioca hervida es la compañera paraguaya por excelencia, y la sopa paraguaya o la chipa guazú suman lo tradicional. Para la parte fresca van bien una ensalada de tomate y cebolla, una ensalada rusa o una mixta con lechuga. Entre las salsas no pueden faltar el chimichurri, hecho con perejil, ajo, orégano, ají, vinagre y aceite, y la salsa criolla de tomate, cebolla y locote picados finos.'
      ]
    },
    {id:'pedir', title:'Qué mirar cuando pedís una parrillada afuera',
      items:[
        'Preguntá qué incluye la parrillada completa del lugar: algunas traen todas las achuras y otras solo chorizo y morcilla.',
        'Consultá para cuántas personas está pensada y si viene con guarniciones o se piden aparte.',
        'Si alguien no come achuras, pedí que las cambien por más cortes o por pollo.',
        'Preguntá si llega en brasero con brasas o en fuente: cambia cuánto tiempo se mantiene caliente.'
      ]
    }
  ],
  faq:[
    ['¿Qué lleva una parrillada completa?','Suele llevar chorizo, morcilla, achuras como chinchulines, mollejas y riñón, y cortes como costilla, vacío y algún corte tierno. Algunas suman pollo o cerdo.'],
    ['¿Cuánta carne se calcula para una parrillada para 4 personas?','Como estimación, unos 4 chorizos, 2 morcillas, medio kilo de achuras y entre 1,4 y 1,6 kg de cortes con y sin hueso, más las guarniciones.'],
    ['¿Cuál es la diferencia entre parrillada y asado?','El asado es la forma de cocinar la carne a la brasa. La parrillada es una manera de servirla: un surtido de cortes y achuras que llega junto al centro de la mesa, muchas veces sobre brasas.'],
    ['¿Cómo mantener caliente la parrillada en la mesa?','Con un brasero o parrillita de mesa con algunas brasas debajo de la rejilla. Sin brasero, serví en dos tandas sobre una fuente calentada en el horno.'],
    ['¿Cómo se hacen los chinchulines en la parrilla?','Lavalos bien, podés hervirlos unos minutos para acortar el tiempo, y cocinalos a fuego medio girándolos hasta que estén dorados y crocantes.'],
    ['¿Qué salsas van con la parrillada?','Chimichurri y salsa criolla son las clásicas, con limón para las achuras. Acompañá con mandioca hervida y una ensalada fresca.']
  ],
  recipes:['receta-vacio-a-la-parrilla','receta-picana-a-la-parrilla','receta-entrana-a-la-parrilla','receta-asado-de-tira-a-la-parrilla','receta-sopa-paraguaya','receta-ensalada-rusa','receta-chipa-guazu'],
  related:['guia-asado-a-la-parrilla','guia-cuanta-carne-por-persona','guia-churrasqueria','guia-cortes-de-carne-vacuna','corte-vacio','corte-costilla-de-vaca','corte-entrana','corte-picana'],
  formOccasion:'cumpleanos',
  ctaTitle:'¿Una parrillada para muchos invitados?',
  ctaText:'Si la parrillada es para un cumpleaños o un evento grande, contanos la fecha, la zona y cuántas personas vienen. Te ayudamos a consultar catering de asado en Gran Asunción.',
  waMessage:'Hola, quiero consultar una parrillada con catering para un evento. ¿Me ayudás?'
};
