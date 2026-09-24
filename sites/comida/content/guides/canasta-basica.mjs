// Guide: canasta básica. Official facts from INE Paraguay (consulted 2026-09-24); no amounts published on purpose.
export default {
  id:'guia-canasta-basica', slug:'canasta-basica', kind:'guide', order:3,
  published:true, indexable:true, updatedAt:'2026-09-24', verifiedAt:'2026-09-24',
  source:'Instituto Nacional de Estadística (INE) de Paraguay: nota del 27 de marzo de 2026 sobre pobreza monetaria 2022-2025 y documento Metodología para la estimación de las líneas de pobreza, consultados el 2026-09-24. Consejos de compra de la redacción de comida.com.py',
  label:'Canasta básica',
  eyebrow:'Guía de compras',
  seoTitle:'Canasta básica en Paraguay: qué es',
  meta:'Canasta básica de alimentos en Paraguay: qué es, quién la mide y para qué sirve, más una guía práctica para planificar la compra familiar de la semana.',
  h1:'Canasta básica en Paraguay: qué es y cómo planificar la compra familiar',
  cardText:'Qué mide la canasta básica, quién la calcula y cómo armar la compra de la semana.',
  category:['paraguaya','saludable'],
  keywords:['canasta básica','canasta basica familiar','canasta básica de alimentos','canasta básica paraguay'],
  intro:[
    'La canasta básica aparece en las noticias cada vez que se habla de pobreza, salarios o inflación, pero pocas veces se explica qué es. En Paraguay, la canasta básica de alimentos es una herramienta estadística: un conjunto de alimentos que cubre las necesidades básicas de alimentación de una persona, valorizado en dinero para trazar la línea de pobreza extrema.',
    'En esta guía te contamos quién la calcula, cómo se arma y qué no es. Después pasamos a lo práctico: cómo usar esa misma lógica para planificar la compra semanal de tu familia y gastar mejor en el mercado.'
  ],
  facts:[
    ['Quién la calcula','Instituto Nacional de Estadística (INE)'],
    ['Qué mide','El costo de una canasta mínima de alimentos por persona y por mes'],
    ['Para qué se usa','Define la línea de pobreza extrema'],
    ['Cómo se actualiza','Una vez al año, con el Índice de Precios al Consumidor del Banco Central del Paraguay'],
    ['Diferencias','Tiene valores distintos para zonas urbanas y rurales']
  ],
  sections:[
    {id:'que-es', title:'Qué es la canasta básica de alimentos',
      paragraphs:[
        'La canasta básica de alimentos, que el INE abrevia CBA, reúne los alimentos que consume habitualmente la población de referencia en cantidades pensadas para cubrir sus necesidades nutricionales básicas. No es una lista de lo que una familia debería comprar, sino una medida para comparar: su costo mensual por persona se usa como línea de pobreza extrema.',
        'Junto a ella existe la canasta básica de consumo, que suma a los alimentos otros bienes y servicios necesarios, como vivienda, servicios básicos o vestimenta. Su costo marca la línea de pobreza total. Una persona cuyo ingreso por mes no alcanza a cubrir la canasta de alimentos se considera en pobreza extrema; si no alcanza la de consumo, en pobreza.'
      ]
    },
    {id:'quien-la-mide', title:'Quién la mide en Paraguay y cómo se arma',
      paragraphs:[
        'La calcula el Instituto Nacional de Estadística. Según su metodología, la estructura de las canastas se definió a partir de la Encuesta de Ingresos y Gastos y de Condiciones de Vida 2011-2012, que registró qué y cuánto consumen los hogares. Cada año el costo se actualiza con la variación del Índice de Precios al Consumidor que elabora el Banco Central del Paraguay.',
        'Los ingresos de los hogares, en cambio, salen de la Encuesta Permanente de Hogares Continua, que el INE realiza todos los años. Al cruzar los ingresos con el costo de las canastas, el INE publica cada año los indicadores de pobreza monetaria. La publicación más reciente que consultamos, del 27 de marzo de 2026, presenta los resultados de 2022 a 2025.'
      ],
      callout:'Para conocer el valor vigente de la canasta básica, consultá directamente las publicaciones de pobreza monetaria en el sitio del INE. Allí figura el importe por persona y por mes, separado por área urbana y rural.'
    },
    {id:'familiar', title:'Canasta básica familiar: cómo se interpreta',
      paragraphs:[
        'El INE expresa el costo de la canasta por persona y por mes. Por eso, cuando se habla de canasta básica familiar, en general se multiplica ese valor por la cantidad de integrantes del hogar. Es una aproximación útil para dimensionar, pero no refleja las preferencias ni las necesidades particulares de cada familia.',
        'Tampoco debe confundirse con otros cálculos que publican gremios, consultoras o medios, que pueden usar listas de productos y precios distintos. Si leés una cifra, fijate quién la calcula, con qué método y en qué fecha.'
      ],
      items:[
        'La canasta oficial es una referencia estadística, no un menú recomendado.',
        'Su valor cambia cada año con la inflación medida por el Banco Central.',
        'No incluye lo que gastás en comer fuera, delivery ni bebidas alcohólicas como parte de un menú de fiesta.',
        'Para comparar tu gasto, usá siempre el dato oficial más reciente y su fecha.'
      ]
    },
    {id:'planificar', title:'Cómo planificar la compra semanal de la familia',
      paragraphs:[
        'La misma lógica de la canasta sirve para ordenar la compra de tu casa: pensar en grupos de alimentos, cantidades por persona y frecuencia. Planificar evita ir tres veces al súper en la semana y tirar comida que se echó a perder.'
      ],
      steps:[
        'Escribí el menú de la semana: almuerzos, cenas y meriendas. No hace falta que sea rígido, alcanza con saber qué base va cada día.',
        'Repetí bases que rinden y combinan: arroz, fideos, porotos, mandioca, harina de maíz y huevos permiten muchos platos distintos.',
        'Calculá las cantidades según cuántos comen en casa y cuántas comidas se hacen fuera.',
        'Revisá la heladera y la despensa antes de salir y tachá lo que ya tenés.',
        'Separá la lista por sector: verdulería, carnicería, almacén y lácteos. Ahorra tiempo y compras impulsivas.',
        'Dejá un día de la semana para una comida de aprovechamiento con lo que sobró: un guiso, una tortilla o un salpicón.'
      ]
    },
    {id:'lista-base', title:'Una lista base para la semana',
      paragraphs:[
        'Esta es una lista orientativa por grupos de alimentos, no una canasta oficial. Ajustala a tu familia, a la estación y a lo que se come en tu casa.'
      ],
      table:{caption:'Lista semanal orientativa por grupos', head:['Grupo','Ejemplos','Consejo'],
        rows:[
          ['Cereales y harinas','Arroz, fideos, harina de trigo, harina de maíz, almidón','Comprá en paquetes más grandes si tenés dónde guardarlos'],
          ['Legumbres','Poroto, lenteja, garbanzo','Rinden mucho y combinan con poco de carne'],
          ['Tubérculos','Mandioca, papa, batata','La mandioca se puede pelar y congelar'],
          ['Verduras','Cebolla, tomate, locote, zanahoria, zapallo, verdura de hoja','Priorizá las de estación'],
          ['Frutas','Banana, cítricos y fruta de estación','Comprá con distintos grados de maduración'],
          ['Proteínas','Huevos, pollo, carne vacuna o de cerdo, queso Paraguay','Alterná cortes económicos para guisos y hervidos'],
          ['Lácteos','Leche, queso, yogur','Revisá las fechas de vencimiento'],
          ['Almacén','Aceite, sal, yerba, azúcar, condimentos','Reponé solo lo que se está por terminar']
        ]
      }
    },
    {id:'ahorrar', title:'Cómo ahorrar en el mercado sin comer peor',
      items:[
        'Comprá fruta y verdura de estación: hay más oferta y suele estar mejor de sabor.',
        'Si tenés espacio, compartí compras por bulto con otra familia en el Mercado de Abasto o en una feria.',
        'Elegí cortes de carne para cocción larga, como los que van en guisos, puchero o estofado: rinden y quedan sabrosos.',
        'Aprovechá los huesos y recortes para caldos y sopas como el vori vori.',
        'Congelá en porciones lo que no vas a usar en dos o tres días: carne, mandioca, pan, queso desmenuzado.',
        'Compará el precio por kilo, no por paquete: los envases más chicos a veces salen más caros.',
        'Cociná en cantidad un día y reservá porciones para la semana.'
      ],
      after:['Un recorrido por el mercado con lista y cantidades claras suele ahorrar más que cualquier oferta suelta, porque reduce lo que se compra de más y lo que se tira.']
    },
    {id:'menus-economicos', title:'Ideas de comidas que rinden',
      cards:[
        ['Guiso de arroz o de fideos','Con poca carne, verduras y un buen caldo, alimenta a toda la familia.'],
        ['Vori vori','Bolitas de harina de maíz y queso en caldo de pollo: económico y reconfortante.'],
        ['Tortilla paraguaya','Huevos, harina y queso para una cena rápida o una merienda salada.'],
        ['Puchero','Carne con hueso, verduras y mandioca en una olla que sirve para dos comidas.']
      ]
    }
  ],
  faq:[
    ['¿Qué es la canasta básica en Paraguay?','Es el conjunto de alimentos pensado para cubrir las necesidades nutricionales básicas de una persona, valorizado en dinero. El INE usa su costo mensual por persona como línea de pobreza extrema.'],
    ['¿Quién calcula la canasta básica de alimentos?','El Instituto Nacional de Estadística. Actualiza su costo cada año con el Índice de Precios al Consumidor del Banco Central del Paraguay y lo publica junto con los indicadores de pobreza.'],
    ['¿Cuál es la diferencia entre la canasta de alimentos y la de consumo?','La de alimentos incluye solo comida y marca la pobreza extrema. La de consumo suma otros gastos básicos, como vivienda, servicios o vestimenta, y marca la línea de pobreza total.'],
    ['¿Cuánto cuesta la canasta básica familiar?','El INE publica el costo por persona y por mes, distinto en áreas urbanas y rurales. Para un valor familiar se multiplica por los integrantes del hogar; consultá la cifra vigente en el sitio del INE.'],
    ['¿Cómo ahorrar en la compra de la semana?','Planificá el menú, comprá con lista, priorizá frutas y verduras de estación, compará precios por kilo y congelá porciones. Comprar por bulto en el mercado conviene si compartís con otra familia.'],
    ['¿La canasta básica es una dieta recomendada?','No. Es una medida estadística basada en lo que consumen los hogares, no una recomendación nutricional. Para una alimentación equilibrada, sumá variedad de frutas, verduras y legumbres.']
  ],
  recipes:['receta-vori-vori','receta-guiso-paraguayo','receta-tortilla-paraguaya','receta-puchero-paraguayo','receta-albondigas'],
  related:['guia-mercado-de-abasto','guia-queso-paraguay','guia-cuanta-comida-por-persona'],
  ctaTitle:'¿Organizás una comida para muchas personas?',
  ctaText:'Para un evento, una reunión de empresa o una fiesta familiar, contanos la fecha, la zona y cuántos son. Te ayudamos a consultar catering en Gran Asunción.',
  waMessage:'Hola, estoy organizando una comida para muchas personas. ¿Me ayudás a consultar catering?'
};
