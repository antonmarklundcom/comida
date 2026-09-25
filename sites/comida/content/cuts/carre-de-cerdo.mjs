// Meat cut module: carré de cerdo. Shape: see plan/prompts/CONTENT-WRITER.md, Guide and cut fields.
export default {
  id:'corte-carre-de-cerdo', slug:'carre-de-cerdo', kind:'cut', order:20, animal:'Cerdo',
  published:true, indexable:true, updatedAt:'2026-09-24', verifiedAt:'2026-09-24',
  source:'Guía de la redacción de comida.com.py, basada en la práctica de carnicería y la cocina casera del Río de la Plata',
  label:'Carré de cerdo',
  seoTitle:'Carré de cerdo: qué es y cómo cocinarlo',
  meta:'Carré de cerdo: qué corte es, en qué se diferencia del lomo y de las chuletas, cómo hacerlo al horno o a la parrilla sin que se seque y cuánto comprar.',
  h1:'Carré de cerdo: qué es, cómo elegirlo y cómo hacerlo jugoso',
  cardText:'El lomo del cerdo con sus costillas: se hornea entero o se corta en chuletas.',
  category:['carne','horno','fiesta'],
  keywords:['carré de cerdo','carre de cerdo','carré de cerdo al horno','carré de cerdo a la parrilla','carré con hueso'],
  intro:[
    'El carré de cerdo es la pieza del lomo con las costillas todavía unidas. Si se corta entre hueso y hueso, salen las chuletas; si se deja entero, es una pieza para hornear o asar que se sirve en porciones con su hueso. Es magro, tierno y de sabor suave, así que el desafío no es ablandarlo sino evitar que se seque.',
    'En esta página vas a ver cómo se relaciona con el lomo y las chuletas, cómo pedirlo en la carnicería, tiempos y temperaturas para el horno y la parrilla, cuánto comprar por persona y qué hace variar su precio.'
  ],
  facts:[
    ['Animal','Cerdo'],
    ['Zona del animal','Parte alta del lomo, sobre las costillas, entre la bondiola y la cadera'],
    ['Otros nombres','Carré con hueso, costillar de lomo; cortado en porciones da las chuletas'],
    ['Mejor cocción','Horno moderado entero; parrilla en chuletas gruesas'],
    ['Por persona','300 a 350 g crudos con hueso si es el plato principal (estimación)']
  ],
  estimate:'Los gramos por persona son estimaciones de la redacción que incluyen el hueso: ajustalos según el apetito y la guarnición.',
  sections:[
    {id:'que-es', title:'Qué es el carré de cerdo', paragraphs:[
      'Si imaginás el lomo del cerdo visto desde arriba, el carré es la franja de carne que corre junto a la columna, apoyada sobre las costillas. Del lado de afuera tiene una capa de grasa, a veces con cuero; del lado de adentro, las costillas cortas. Una pieza típica mide entre 30 y 50 centímetros de largo y pesa de 2 a 4 kilos.',
      'La palabra carré viene del francés y se usa en el Río de la Plata para esta pieza entera. En Paraguay también se la escucha como costillar de lomo, aunque no hay que confundirla con el costillar de cerdo común, que es la parte de las costillas más carnosas y con más grasa, de cocción larga.'
    ]},
    {id:'diferencias', title:'Carré, lomo, chuletas y bondiola', paragraphs:[
      'Los cortes de esta zona se superponen y cada carnicería los nombra a su manera, así que conviene tener una idea clara de qué es cada uno.'
    ], table:{caption:'Cortes de la parte alta del cerdo', head:['Corte','Qué es','Cómo se cocina'], rows:[
      ['Carré','Lomo con costillas, entero','Horno o parrilla, entero'],
      ['Chuleta','Una porción del carré con su hueso','Plancha o parrilla, rápido'],
      ['Lomo de cerdo','El carré sin hueso','Horno, cuidando que no se seque'],
      ['Solomillo','Músculo chico y tierno debajo del lomo','Horno o sartén, pocos minutos'],
      ['Bondiola','Cuello, con más grasa infiltrada','Horno lento, parrilla, desmenuzada']
    ], note:'Si en la carnicería no entienden carré, pedí el lomo de cerdo con el hueso de las costillas, sin cortar en chuletas.'}},
    {id:'como-pedirlo', title:'Cómo pedirlo y elegirlo', items:[
      'Pedí que te separen el espinazo de las costillas con la sierra: así se corta fácil en porciones al servir.',
      'Si lo querés para una presentación vistosa, pedí que limpien la punta de los huesos, al estilo francés.',
      'Buscá carne rosada pálida y una capa de grasa blanca de medio a un centímetro: protege la carne en el horno.',
      'Evitá piezas con zonas muy oscuras, secas o con olor fuerte.',
      'Para la parrilla, podés pedir chuletas del mismo carré cortadas de dos a tres centímetros de grosor.'
    ]},
    {id:'horno', title:'Carré de cerdo al horno', paragraphs:[
      'La mejor forma de hacer el carré entero es en horno moderado, con los huesos hacia abajo funcionando como rejilla. La grasa de arriba se derrite y baña la carne durante la cocción. El punto justo lo da la temperatura del centro, no el tiempo.'
    ], steps:[
      'Si tenés tiempo, salalo unas horas antes o de un día para otro y guardalo destapado en la heladera.',
      'Frotá la carne con ajo, romero u orégano, pimienta y un poco de mostaza si te gusta. Marcá la grasa en rombos.',
      'Poné el carré en una asadera con los huesos hacia abajo y un vaso de vino blanco o caldo en el fondo.',
      'Horneá a 180 °C, sin tapar. Calculá unos 25 a 30 minutos por kilo como referencia.',
      'Desde la mitad del tiempo, controlá con termómetro. Retiralo cuando el centro marque unos 62 a 63 °C.',
      'Tapalo con papel de aluminio sin apretar y dejalo reposar 10 minutos. Cortalo entre hueso y hueso.'
    ]},
    {id:'parrilla', title:'Carré a la parrilla', paragraphs:[
      'Entero, se hace a fuego suave con los huesos hacia las brasas durante la mayor parte del tiempo, como un costillar, y se termina unos minutos del lado de la grasa. Una pieza de 2 kilos tarda entre una hora y una hora y cuarto. Tapar la parrilla o poner una bandeja encima ayuda a que el calor llegue parejo al centro.',
      'En chuletas gruesas, cortadas del mismo carré, la parrilla es rápida: fuego medio, 6 a 8 minutos por lado para chuletas de dos a tres centímetros. Como son magras, salalas justo antes y retiralas en cuanto lleguen al punto.'
    ]},
    {id:'punto', title:'Punto de cocción y seguridad', paragraphs:[
      'La temperatura mínima segura para cortes enteros de cerdo es 63 °C en el centro, seguida de un reposo de unos minutos. A esa temperatura la carne queda apenas rosada y muy jugosa. Pasados los 70 °C el carré empieza a secarse rápido, porque tiene poca grasa infiltrada.',
      'Si alguien en la mesa lo prefiere más cocido, dale las porciones de las puntas, que siempre se cocinan antes que el centro.'
    ]},
    {id:'cuanto-comprar', title:'Cuánto carré comprar', paragraphs:[
      'Como estimación de la redacción, contá entre 300 y 350 gramos crudos con hueso por adulto si el carré es el plato principal: en la práctica, una porción con uno o dos huesos por persona. Un carré de 2,5 kilos alcanza para siete u ocho adultos.',
      'Si va dentro de una comida con varias carnes, alcanza con la mitad. Para armar un menú completo, la guía de cuánta carne por persona te ayuda con las cantidades.'
    ]},
    {id:'precio', title:'Qué cambia el precio del carré', paragraphs:[
      'El carré entero suele costar más que el costillar de cerdo común porque tiene más carne y menos grasa, y menos que el solomillo. El precio cambia según venga con o sin hueso, con el espinazo separado o no, con los huesos limpios al estilo francés y si viene con cuero. Todo ese trabajo de carnicería se paga.',
      'Comprar el carré entero y cortarlo en casa en chuletas o porciones suele salir más conveniente que comprar las chuletas ya cortadas en bandeja. Para fin de año, cuando se usa como plato de fiesta, conviene encargarlo antes.'
    ]}
  ],
  recipes:['receta-lomo-de-cerdo-al-horno','receta-chuletas-de-cerdo','receta-solomillo-de-cerdo','receta-papas-al-horno'],
  related:['corte-costillar-de-cerdo','corte-bondiola-de-cerdo','corte-pernil-de-cerdo','guia-cuanta-carne-por-persona','guia-cortes-de-cerdo'],
  faq:[
    ['¿Qué es el carré de cerdo?','Es la pieza del lomo del cerdo con las costillas todavía unidas. Entera se hornea o se asa; cortada entre hueso y hueso, da las chuletas.'],
    ['¿Qué diferencia hay entre carré y lomo de cerdo?','El carré lleva el hueso de las costillas. El lomo de cerdo es la misma carne, pero deshuesada.'],
    ['¿Cuánto tiempo se hace un carré de cerdo al horno?','A 180 °C, calculá unos 25 a 30 minutos por kilo y controlá con termómetro: está listo cuando el centro llega a 63 °C, seguido de un reposo.'],
    ['¿Cómo hago para que el carré de cerdo no quede seco?','Salalo con tiempo, cocinalo con la grasa hacia arriba, retiralo apenas llegue a 63 °C en el centro y dejalo reposar tapado antes de cortar.'],
    ['¿Las chuletas salen del carré?','Sí. Las chuletas de cerdo son porciones del carré cortadas entre hueso y hueso, con un pedazo de lomo cada una.'],
    ['¿Cuánto carré de cerdo por persona?','Como estimación, entre 300 y 350 gramos crudos con hueso por adulto si es el plato principal, lo que equivale a una porción con uno o dos huesos.']
  ],
  ctaTitle:'Cerdo y asado para tu evento',
  ctaText:'¿Querés carré de cerdo, costillar y chorizo para una cena de fin de año o un evento de la empresa? Pasanos día, zona e invitados, y te ayudamos a pedir una propuesta a un catering de Gran Asunción.',
  waMessage:'Hola, quiero consultar por un menú con carré de cerdo para un evento.'
};
