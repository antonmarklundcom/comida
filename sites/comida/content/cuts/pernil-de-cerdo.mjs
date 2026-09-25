// Meat cut module: pernil de cerdo. Shape: see plan/prompts/CONTENT-WRITER.md, Guide and cut fields.
export default {
  id:'corte-pernil-de-cerdo', slug:'pernil-de-cerdo', kind:'cut', order:19, animal:'Cerdo',
  published:true, indexable:true, updatedAt:'2026-09-24', verifiedAt:'2026-09-24',
  source:'Guía de la redacción de comida.com.py, basada en la práctica de carnicería y la cocina de fiestas del Paraguay y el Río de la Plata',
  label:'Pernil de cerdo',
  seoTitle:'Pernil de cerdo: cómo elegirlo y hornearlo',
  meta:'Pernil de cerdo para Navidad: qué parte es, entero o deshuesado, adobo de un día para otro, tiempos al horno, cuánto rinde y qué cambia el precio.',
  h1:'Pernil de cerdo: cómo elegirlo, adobarlo y hacerlo al horno',
  cardText:'La pierna del cerdo que se hornea para Navidad y se sirve en sándwiches.',
  category:['carne','fiesta','horno'],
  keywords:['pernil de cerdo','pernil','pernil de cerdo al horno','pernil para navidad','sandwich de pernil'],

  image:80,
  intro:[
    'El pernil es la pierna trasera del cerdo: una pieza grande, con un hueso central, carne abundante y una capa de grasa y cuero por fuera. Es el corte clásico de las mesas de Navidad y Año Nuevo, y también de los sándwiches de pernil que se sirven en cumpleaños, casamientos y eventos de empresa. Horneado lento, queda tierno, se corta en fetas o se desmenuza fácil.',
    'Por su tamaño, un pernil necesita planificación: hay que encargarlo, adobarlo con tiempo y darle varias horas de horno. En esta página vas a ver cómo elegirlo, entero o deshuesado, cómo adobarlo, cuánto tarda según el peso, cuántas personas comen con uno y qué cambia su precio.'
  ],
  facts:[
    ['Animal','Cerdo'],
    ['Zona del animal','Pierna trasera, desde la cadera hasta el garrón'],
    ['Otros nombres','Pierna de cerdo, jamón fresco (en otros países), pernil de chancho'],
    ['Mejor cocción','Horno lento; también parrilla tapada o a la olla en trozos'],
    ['Por persona','350 a 450 g crudos con hueso si es el plato principal (estimación)']
  ],
  estimate:'Los gramos por persona son estimaciones de la redacción que cuentan el hueso y el cuero: para sándwiches rinde bastante más.',
  sections:[
    {id:'que-es', title:'Qué es el pernil', paragraphs:[
      'El pernil es la pata trasera completa del cerdo. Está formado por varios músculos grandes unidos por un hueso central largo, lo que en la vaca serían la nalga, la bola de lomo, la cuadrada y el peceto. Un pernil entero con hueso y cuero suele pesar entre 6 y 10 kilos, según el tamaño del animal; también se vende en mitades o en trozos.',
      'Como es una pieza magra por dentro y cubierta de grasa por fuera, la cocción lenta es la que mejor le sienta: la grasa exterior protege la carne mientras el calor llega al centro sin apuro. El cuero, si se deja, se vuelve crocante al final.'
    ]},
    {id:'como-elegirlo', title:'Entero, deshuesado o en trozos', paragraphs:[
      'La elección depende del horno, de la cantidad de gente y de cómo lo vas a servir. Antes de encargar un pernil entero, medí la asadera y el horno: un pernil grande puede no entrar en un horno de cocina común.'
    ], cards:[
      ['Entero con hueso','Más sabroso y más vistoso en la mesa. Tarda más y es más difícil de cortar en fetas parejas.'],
      ['Deshuesado y atado','Cocina más parejo y se corta fácil para sándwiches. Pedile al carnicero que lo ate con hilo.'],
      ['Medio pernil','La parte superior, más carnosa, o la parte inferior, con más hueso. Buena opción para diez o doce personas.'],
      ['En trozos','Para cocinar a la olla, en guiso o para desmenuzar. Se cocinan más rápido que la pieza entera.']
    ], after:[
      'Al elegir, buscá carne rosada, grasa blanca y firme, y un cuero sin manchas ni pelos. Si viene congelado, calculá dos o tres días de descongelado lento en la heladera para un pernil entero.'
    ]},
    {id:'adobo', title:'Cómo adobar el pernil', paragraphs:[
      'El adobo de un día para otro es parte del pernil tradicional. Además de dar sabor, la sal tiene tiempo de penetrar en una pieza tan grande. Una base simple combina ajo machacado, sal, pimienta, orégano, jugo de limón o naranja agria, vino blanco y un poco de aceite; hay quien suma mostaza, pimentón, comino o cebolla licuada.'
    ], steps:[
      'Secá el pernil y hacé cortes profundos en la carne con un cuchillo fino, para que el adobo entre.',
      'Si tiene cuero, marcalo en rombos sin llegar a la carne.',
      'Frotá la pieza con el adobo por todos lados, metiendo el ajo en los cortes.',
      'Guardalo tapado en la heladera de un día para otro, dándolo vuelta un par de veces.',
      'Sacalo del frío una hora antes de hornear y guardá el líquido del adobo para bañarlo durante la cocción.'
    ]},
    {id:'horno', title:'Pernil de cerdo al horno: tiempos', paragraphs:[
      'El pernil se cocina a temperatura moderada, con algo de líquido en la asadera y tapado con papel de aluminio durante la mayor parte del tiempo. Al final se destapa para dorar. Para que la carne se desmenuce, hay que superar bastante el mínimo de seguridad; para fetas firmes, alcanza con menos.'
    ], table:{caption:'Tiempos orientativos a 160 °C, tapado, más el dorado final', head:['Pieza','Peso','Tiempo total','Temperatura en el centro'], rows:[
      ['Pernil entero con hueso','7 a 9 kg','5 ½ a 7 h','70 °C para fetas; 85 a 90 °C para desmenuzar'],
      ['Pernil deshuesado atado','4 a 5 kg','3 ½ a 4 ½ h','70 °C para fetas; 85 a 90 °C para desmenuzar'],
      ['Medio pernil','3 a 4 kg','3 a 4 h','70 °C para fetas'],
      ['Dorado final','Cualquiera','20 a 30 min destapado a 200 °C','Cuero dorado y crocante']
    ], note:'El mínimo seguro para el cerdo es 63 °C en la parte más gruesa, con reposo. Los tiempos cambian según el horno y el tamaño: el termómetro es la guía más confiable.'}},
    {id:'navidad', title:'El pernil en Navidad y en las fiestas', paragraphs:[
      'En diciembre el pernil compite con el lechón y el cordero por el centro de la mesa. Tiene la ventaja de que se prepara en la cocina de casa, se puede hornear el día anterior y se sirve frío o tibio, en fetas finas, junto a la ensalada rusa, el vitel toné y la sopa paraguaya. En muchas familias, lo que sobra de la cena de Nochebuena se convierte en los sándwiches del día siguiente.',
      'Si lo necesitás para las fiestas, encargalo con anticipación: en esas semanas los perniles grandes se agotan rápido. Hornearlo un día antes también libera el horno para el resto de la cena y hace que las fetas salgan más prolijas, porque la carne fría se corta mejor.'
    ]},
    {id:'sandwiches', title:'Pernil para sándwiches en eventos', paragraphs:[
      'Los sándwiches de pernil son un clásico de las fiestas de cumpleaños y de los eventos grandes porque se preparan con anticipación y se sirven sin cubiertos. Para eso conviene el pernil deshuesado, horneado hasta que esté tierno, enfriado y cortado en fetas finas o desmenuzado. Se sirve en pan casero o pan francés, con salsa criolla, mayonesa o el propio jugo de la cocción.',
      'Como estimación de la redacción, un pernil deshuesado de 4 kilos crudos rinde para unos 30 a 35 sándwiches medianos. Si el sándwich es la comida principal, calculá dos por adulto.'
    ]},
    {id:'cuanto-comprar', title:'Cuánto pernil comprar', paragraphs:[
      'Como estimación de la redacción, para un pernil servido como plato principal contá entre 350 y 450 gramos crudos con hueso por adulto, o entre 250 y 300 gramos si es deshuesado. Un pernil entero de 8 kilos alcanza para unas 18 a 22 personas. En una mesa de Navidad con varias carnes, podés bajar la cantidad a la mitad.',
      'Para combinarlo con otras carnes en una fiesta, usá la guía de cuánta carne por persona.'
    ]},
    {id:'precio', title:'Qué cambia el precio del pernil', paragraphs:[
      'El pernil entero con hueso suele ser una de las formas más rendidoras de comprar carne de cerdo para mucha gente. El precio cambia si lo querés deshuesado y atado, porque se paga el trabajo y se deja de pagar el hueso, si viene con o sin cuero y si es fresco o congelado. El tamaño del animal también influye en la proporción de carne por kilo.',
      'En diciembre la demanda sube mucho. Encargarlo con tiempo, comparar el precio del pernil entero contra el deshuesado según cuánta carne útil te queda, y preguntar si el peso incluye el hielo o el envase ayuda a elegir bien.'
    ]}
  ],
  recipes:['receta-pernil-de-cerdo-al-horno','receta-ensalada-rusa','receta-vitel-tone','receta-sopa-paraguaya','receta-pan-casero'],
  related:['coleccion-navidad','guia-cuanta-carne-por-persona','corte-lechon','corte-carre-de-cerdo','corte-bondiola-de-cerdo','guia-cortes-de-cerdo'],
  faq:[
    ['¿Qué parte del cerdo es el pernil?','Es la pierna trasera completa, con su hueso central, la carne de varios músculos grandes y la capa de grasa y cuero exterior.'],
    ['¿Cuánto tarda un pernil de cerdo al horno?','A 160 °C y tapado, un pernil entero de 7 a 9 kilos tarda entre cinco horas y media y siete horas, más un dorado final destapado. Uno deshuesado de 4 a 5 kilos, unas tres horas y media a cuatro horas y media.'],
    ['¿Cuántas personas comen con un pernil?','Como estimación, un pernil entero de 8 kilos alcanza para unas 18 a 22 personas como plato principal, y para más si se sirve en sándwiches.'],
    ['¿Hay que adobar el pernil de un día para otro?','Es lo más recomendable. En una pieza tan grande, la sal y los condimentos necesitan horas para penetrar. Guardalo tapado en la heladera y dalo vuelta un par de veces.'],
    ['¿Cuántos sándwiches salen de un pernil?','Como estimación, un pernil deshuesado de 4 kilos crudos rinde para unos 30 a 35 sándwiches medianos.'],
    ['¿Qué conviene más, pernil entero o deshuesado?','Entero es más sabroso y vistoso; deshuesado se cocina más parejo y se corta fácil para sándwiches. Si vas a servir fetas o sándwiches, el deshuesado es más práctico.']
  ],
  ctaTitle:'Pernil y asado para tu evento',
  ctaText:'¿Querés pernil para sándwiches o una mesa de Navidad para tu familia o tu empresa? Dejanos la fecha, la zona y la cantidad de personas, y te ayudamos a consultar un catering de Gran Asunción.',
  waMessage:'Hola, quiero consultar por pernil de cerdo para un evento.'
};
