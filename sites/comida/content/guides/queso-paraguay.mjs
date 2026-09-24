// Guide: queso Paraguay. Editorial quantities per recipe are estimates and are labelled as such.
export default {
  id:'guia-queso-paraguay', slug:'queso-paraguay', kind:'guide', order:2,
  published:true, indexable:true, updatedAt:'2026-09-24', verifiedAt:'2026-09-24',
  source:'Guía de la redacción de comida.com.py, basada en el uso tradicional del queso Paraguay en la cocina paraguaya. Las cantidades por receta son estimaciones editoriales',
  label:'Queso Paraguay',
  eyebrow:'Guía de ingredientes',
  seoTitle:'Queso Paraguay: cómo elegirlo y usarlo',
  meta:'Queso Paraguay: qué es, fresco u oreado, cuánto lleva la chipa, la sopa y el mbeju, cómo guardarlo y congelarlo, y qué hace variar su precio.',
  h1:'Queso Paraguay: qué es, cómo elegirlo y cuánto usar en cada receta',
  cardText:'Fresco u oreado, cuánto lleva cada receta y cómo guardarlo sin que se eche a perder.',
  category:['paraguaya','chipa'],
  keywords:['queso paraguay','queso paraguay precio','queso fresco','queso para chipa','queso para sopa paraguaya'],
  intro:[
    'El queso Paraguay es el queso fresco de vaca que da sabor a casi toda la cocina de fiesta del país: la chipa, la sopa paraguaya, la chipa guazú y el mbeju dependen de él. Es blanco, de pasta blanda y algo granulosa, con un punto salado y un aroma lácteo suave que se intensifica al hornearlo.',
    'Como es un queso fresco, cambia mucho de una horma a otra. Saber elegirlo, cuánto comprar para cada receta y cómo guardarlo marca la diferencia entre una chipa sabrosa y una seca, o entre una sopa esponjosa y una pesada.'
  ],
  facts:[
    ['Tipo','Queso fresco de leche de vaca'],
    ['Textura','Blanda, húmeda, se desmenuza con los dedos'],
    ['Sabor','Lácteo y algo salado, varía según el elaborador'],
    ['Usos principales','Chipa, sopa paraguaya, chipa guazú, mbeju'],
    ['Conservación','Heladera, pocos días; se puede congelar para cocinar']
  ],
  sections:[
    {id:'que-es', title:'Qué es el queso Paraguay y cómo se hace',
      paragraphs:[
        'En términos generales, el queso Paraguay se elabora cuajando leche de vaca con cuajo, cortando la cuajada para que suelte el suero, escurriéndola y prensándola apenas en moldes. Después se sala y queda listo para vender en pocos días, sin un estacionamiento largo. Por eso conserva mucha humedad y una textura tierna.',
        'Lo producen tanto pequeños tambos familiares como industrias lácteas, y ahí nace buena parte de la variación: el tipo de leche, la cantidad de sal, el tiempo de prensado y los días que pasan hasta que llega a la cocina cambian el resultado. Algunos se venden en hormas redondas y otros fraccionados por kilo.'
      ],
      callout:'Si en la mesa hay embarazadas, personas mayores o chicos pequeños, preferí queso elaborado con leche pasteurizada y con registro sanitario visible en el envase o en el puesto.'
    },
    {id:'fresco-u-oreado', title:'Fresco u oreado: las dos caras del mismo queso',
      paragraphs:[
        'Recién hecho, el queso Paraguay está húmedo, suelta suero y tiene un sabor suave. Con algunos días de heladera, o si se deja orear tapado con un paño en un lugar fresco, pierde agua, se pone más firme y el sabor se concentra. No se trata de un queso curado como los de pasta dura, sino del mismo queso fresco con menos humedad.',
        'Esa diferencia importa en la cocina. Un queso muy húmedo aporta líquido a la masa y puede dejar una chipa blanda que no dora; uno más oreado se ralla o desmenuza mejor y da más sabor con la misma cantidad.'
      ],
      table:{caption:'Queso fresco u oreado según la preparación', head:['Receta','Qué queso conviene','Por qué'],
        rows:[
          ['Chipa','Oreado, firme','Menos humedad: la masa se maneja mejor y la chipa queda crocante por fuera'],
          ['Sopa paraguaya','Fresco o semioreado','La humedad ayuda a una miga tierna'],
          ['Chipa guazú','Fresco o semioreado','Acompaña la humedad del choclo sin endurecer'],
          ['Mbeju','Oreado, desmenuzado fino','Se integra al almidón y funde sin aguar la mezcla']
        ]
      }
    },
    {id:'como-elegirlo', title:'Cómo elegir un buen queso Paraguay',
      items:[
        'Probá un trocito: tiene que saber a leche fresca, sin acidez fuerte ni gusto amargo.',
        'Mirá el color: blanco o apenas crema, parejo, sin manchas oscuras ni zonas amarillentas.',
        'Tocá la superficie: firme y húmeda está bien; pegajosa o con olor agrio, descartala.',
        'Preguntá cuándo se hizo: para chipa conviene uno de algunos días; para comer solo, uno más reciente.',
        'Fijate en la sal: si es muy salado, ajustá la sal de la receta o eliminala.',
        'Comprá donde lo mantengan en frío, no expuesto al sol en un mostrador.'
      ]
    },
    {id:'cuanto-queso', title:'Cuánto queso Paraguay lleva cada receta',
      paragraphs:[
        'Las cantidades cambian según la receta de cada familia y lo quesera que sea la mesa. La tabla resume medidas habituales, útiles para calcular la compra; en cada receta de este sitio vas a encontrar la proporción exacta.'
      ],
      table:{caption:'Queso Paraguay por receta (estimación editorial)', head:['Receta','Base','Queso Paraguay aproximado'],
        rows:[
          ['Sopa paraguaya','½ kilo de harina de maíz','500 g'],
          ['Sopa paraguaya','1 kilo de harina de maíz','1 kg'],
          ['Chipa','1 kilo de almidón','Entre 500 g y 1 kg, según lo quesera'],
          ['Mbeju','½ kilo de almidón','Entre 250 g y 350 g'],
          ['Chipa guazú','1 kilo de choclo desgranado','Entre 400 g y 500 g']
        ],
        note:'Estimaciones editoriales para planificar la compra. Si el queso es muy húmedo, sumá un poco más; si es muy salado, bajá la sal del resto de la receta.'
      },
      after:['Para una fiesta en la que hacés sopa y chipa guazú juntas, sumá las cantidades de cada receta y agregá un margen chico por si alguna horma sale más húmeda o menos sabrosa de lo esperado.']
    },
    {id:'como-guardarlo', title:'Cómo guardar y congelar el queso Paraguay',
      steps:[
        'Apenas llegues, sacalo de la bolsa en que te lo vendieron y secá el suero con papel de cocina.',
        'Envolvelo en papel manteca o en un paño limpio y guardalo en un recipiente tapado en la parte más fría de la heladera.',
        'Cambiá el papel si se humedece. Así se mantiene en buen estado unos pocos días; si notás olor agrio o limo, no lo uses.',
        'Para congelarlo, desmenuzalo o rallalo grueso y repartilo en bolsas por la cantidad de cada receta, por ejemplo de a 500 g.',
        'Retirá el aire, anotá la fecha y congelá. Usalo dentro de los dos meses.',
        'Descongelalo en la heladera de un día para otro. Queda más quebradizo, así que reservalo para cocinar, no para comer en fetas.'
      ]
    },
    {id:'precio', title:'Qué hace variar el precio del queso Paraguay',
      paragraphs:[
        'No publicamos importes porque cambian con frecuencia y entre puestos. Sí podemos explicar qué mueve el precio del queso Paraguay, para que sepas cuándo conviene comprar y guardar.'
      ],
      cards:[
        ['La leche disponible','Cuando las pasturas están secas o hay menos producción en los tambos, entra menos queso al mercado y el precio sube.'],
        ['La demanda de temporada','En Semana Santa, cuando muchas familias hornean chipa, y en las fiestas de fin de año, el queso se busca más.'],
        ['El tipo de elaboración','Un queso de leche pasteurizada, con envase y registro, tiene otros costos que uno artesanal vendido suelto.'],
        ['Humedad y rendimiento','Un queso muy húmedo pesa más por el suero: pagás agua. Uno oreado rinde más en la receta.'],
        ['Cantidad y formato','La horma entera o la compra por varios kilos suele salir distinto que el fraccionado por kilo.'],
        ['Traslado','El origen del queso y la distancia hasta el punto de venta también se reflejan en lo que pagás.']
      ],
      after:['Si sabés que vas a cocinar para Semana Santa o para una fiesta grande, comprar con algunas semanas de anticipación y congelar el queso ya desmenuzado es una forma práctica de no depender del precio de último momento.']
    },
    {id:'reemplazos', title:'¿Se puede reemplazar el queso Paraguay?',
      paragraphs:[
        'Si no conseguís queso Paraguay, podés usar otro queso fresco de vaca, de pasta blanda y algo salado. Una mezcla de queso fresco con una parte de queso duro rallado, como un sardo, acerca el sabor en la chipa. La mozzarella funde distinto y deja la masa gomosa, por eso no es buena opción para chipa ni sopa.'
      ]
    }
  ],
  faq:[
    ['¿Qué es el queso Paraguay?','Es un queso fresco de leche de vaca, blanco y blando, con un punto de sal. Es el que se usa en la chipa, la sopa paraguaya, la chipa guazú y el mbeju.'],
    ['¿Cuánto queso Paraguay lleva 1 kilo de chipa?','Como estimación, entre medio kilo y un kilo por cada kilo de almidón, según lo quesera que quieras la chipa. Revisá la receta de chipa para la proporción completa con grasa, huevos y leche.'],
    ['¿El queso Paraguay se puede congelar?','Sí. Desmenuzalo o rallalo, repartilo en bolsas por cantidad y congelalo hasta dos meses. Después usalo para cocinar, porque pierde algo de textura.'],
    ['¿Por qué varía tanto el precio del queso Paraguay?','Depende de cuánta leche hay en los tambos, de la demanda en fechas como Semana Santa, del tipo de elaboración y de la humedad del queso. Por eso conviene comparar y comprar con anticipación.'],
    ['¿Qué queso usar para la chipa si no hay queso Paraguay?','Un queso fresco de vaca firme y salado, o una mezcla de queso fresco con un poco de sardo rallado. Evitá la mozzarella, que deja la chipa gomosa.'],
    ['¿Cuánto dura el queso Paraguay en la heladera?','Pocos días, bien envuelto en papel y en un recipiente tapado. Si larga olor agrio o se pone pegajoso, descartalo.']
  ],
  recipes:['receta-sopa-paraguaya','receta-chipa','receta-mbeju','receta-chipa-guazu','receta-chipa-soo'],
  related:['guia-mercado-de-abasto','guia-canasta-basica','guia-cuantos-bocaditos-por-persona'],
  ctaTitle:'¿Necesitás chipa y sopa para muchas personas?',
  ctaText:'Si es para un cumpleaños, un evento de empresa o una fiesta grande, contanos la fecha y la cantidad de invitados y te ayudamos a consultar catering en Gran Asunción.',
  waMessage:'Hola, necesito chipa y sopa paraguaya para un evento. ¿Me ayudás a consultar catering?'
};
