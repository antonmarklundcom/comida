// Meat cut module: cabrito. Shape: see plan/prompts/CONTENT-WRITER.md, Guide and cut fields.
export default {
  id:'corte-cabrito', slug:'cabrito', kind:'cut', order:22, animal:'Cabrito',
  published:true, indexable:true, updatedAt:'2026-09-24', verifiedAt:'2026-09-24',
  source:'Guía de la redacción de comida.com.py, basada en la práctica de carnicería y la cocina de campo del Río de la Plata',
  label:'Cabrito',
  seoTitle:'Cabrito: qué es y cómo asarlo',
  meta:'Cabrito asado: qué diferencia hay con el chivo, cómo elegirlo, cómo hacerlo a la parrilla, a la cruz o al horno sin que se seque y cuánto comprar.',
  h1:'Cabrito: cómo elegirlo y cómo asarlo sin que se seque',
  cardText:'La cría de la cabra, magra y tierna: a la parrilla, a la cruz o al horno.',
  category:['carne','fiesta','horno'],
  keywords:['cabrito','cabrito asado','cabrito a la parrilla','cabrito al horno','chivito'],

  image:65,
  intro:[
    'El cabrito es la cría de la cabra, faenada joven, cuando su carne todavía es clara, tierna y de sabor delicado. Es una carne muy magra, con poca grasa bajo el cuero y entre los músculos, y eso marca todo lo demás: se cocina rápido por fuera, se seca si se descuida y agradece un adobo y un fuego suave.',
    'Acá vas a ver en qué se diferencia del chivo adulto, cómo reconocer un buen cabrito, cómo asarlo a la parrilla, a la cruz o al horno, cuánto comprar para una reunión y qué cambia su precio.'
  ],
  facts:[
    ['Animal','Cabrito'],
    ['Zona del animal','Animal entero; se cocina abierto, en mitades o en cuartos'],
    ['Otros nombres','Chivito, cabrito lechal (muy joven); chivo cuando es adulto'],
    ['Mejor cocción','Parrilla a fuego suave con adobo, a la cruz o al horno con líquido'],
    ['Por persona','400 a 500 g crudos con hueso si es la carne principal (estimación)']
  ],
  estimate:'Los gramos por persona son estimaciones de la redacción: el cabrito tiene mucho hueso y poca grasa, así que el rendimiento en carne es bajo.',
  sections:[
    {id:'que-es', title:'Qué es el cabrito y en qué se diferencia del chivo', paragraphs:[
      'Se llama cabrito a la cría de la cabra que todavía no llegó a adulta. Un cabrito para asar entero suele pesar, ya faenado, entre 5 y 10 kilos. Su carne es rosada pálida, de fibra fina y con muy poca grasa. Cuando el animal crece, pasa a llamarse chivo: la carne se vuelve más oscura, más firme y con un olor y un sabor mucho más marcados.',
      'Esa diferencia es la razón de que el cabrito se ase y el chivo se use más en guisos y cocciones largas. Si alguien te ofrece cabrito, preguntá la edad y el peso: un animal grande para ser cabrito puede estar más cerca del chivo.'
    ]},
    {id:'como-elegirlo', title:'Cómo elegir un cabrito', items:[
      'Buscá carne rosada clara y la poca grasa que tenga, blanca. Una carne roja oscura suele indicar un animal mayor.',
      'Preferí un animal de 5 a 8 kilos faenado para asar entero: es más tierno y se maneja mejor en una parrilla de casa.',
      'Revisá que venga limpio, sin restos de pelo y sin olor fuerte.',
      'Pedí que te lo abran a lo largo y, si tu parrilla es chica, que lo corten en cuartos: dos delanteros y dos traseros.',
      'Si lo encargás para una fecha especial, pedilo con anticipación: no siempre hay en el mostrador.'
    ]},
    {id:'adobo', title:'El adobo: por qué es importante', paragraphs:[
      'Como el cabrito tiene tan poca grasa, un adobo previo ayuda a que no se seque y le suma sabor. No hace falta que sea complicado: ajo, sal, pimienta, orégano, laurel, un ácido como limón, naranja agria o vinagre, y aceite. Se unta la carne por los dos lados y se guarda en la heladera unas horas o de un día para otro.',
      'Durante la cocción, usá el mismo adobo, o una salmuera de agua, sal y ajo, para pintar la carne cada tanto con un ramito de hierbas o un pincel. Esa capa de líquido evita que la superficie se reseque mientras el calor llega al hueso.'
    ]},
    {id:'parrilla', title:'Cabrito a la parrilla', paragraphs:[
      'Sobre la parrilla, el cabrito se trata parecido al cordero, pero con todavía más cuidado del fuego: cuanto más suave, mejor. Un cabrito abierto de unos 7 kilos, o en cuartos, lleva entre dos y tres horas.'
    ], steps:[
      'Sacá el cabrito adobado de la heladera un rato antes y escurrí el exceso de líquido.',
      'Armá brasas para fuego suave, repartidas en toda la superficie, con la parrilla alta.',
      'Poné el cabrito con los huesos hacia abajo. Cociná de 1 ½ a 2 horas, pintándolo con el adobo cada 20 o 30 minutos.',
      'Cuando los huesos estén dorados, dalo vuelta y cociná del lado del cuero 30 a 45 minutos, hasta que quede dorado.',
      'Comprobá en la parte más gruesa de la pierna: tiene que llegar al menos a 63 °C y la carne tiene que separarse del hueso con facilidad.',
      'Dejalo reposar unos minutos y trozalo en porciones con un cuchillo grande o tijera de cocina.'
    ]},
    {id:'cruz-y-horno', title:'A la cruz y al horno', paragraphs:[
      'A la cruz, el cabrito entero abierto se sujeta a un asador de hierro clavado junto a un fuego de leña, igual que el cordero. Por su tamaño más chico, se hace más rápido: entre dos horas y media y cuatro horas según el peso y el viento. Se pinta con salmuera durante todo el proceso y se expone primero el lado de los huesos.',
      'Al horno, lo mejor es cortarlo en cuartos o en porciones y cocinarlo en asadera con un poco de vino blanco o caldo, tapado con papel de aluminio, a 170 °C durante una hora y media a dos horas. Después se destapa y se sube el horno a 200 °C por 20 o 30 minutos para dorar. Las papas, cebollas y morrones en la misma asadera aprovechan el jugo.'
    ]},
    {id:'tiempos', title:'Tiempos orientativos', table:{caption:'Para un cabrito de 5 a 8 kilos faenado', head:['Método','Tiempo','Señal de que está'], rows:[
      ['Parrilla, abierto o en cuartos','2 a 3 h','Hueso dorado, carne que se separa'],
      ['A la cruz','2 ½ a 4 h','Pierna tierna al pinchar, jugos claros'],
      ['Horno en porciones','1 ¾ a 2 ½ h','Tierno al tenedor, superficie dorada']
    ], note:'El mínimo seguro es 63 °C en la parte más gruesa, con reposo. Por ser tan magro, el cabrito se seca rápido si se pasa mucho: controlá desde la mitad del tiempo.'}},
    {id:'cuanto-comprar', title:'Cuánto cabrito comprar', paragraphs:[
      'Como estimación de la redacción, contá entre 400 y 500 gramos crudos con hueso por adulto si el cabrito es la carne principal. Un cabrito de 7 kilos faenado alcanza para unas 14 a 16 personas. Como tiene bastante hueso y poca carne en las costillas, no conviene calcular de menos.',
      'En un asado con otras carnes, el cabrito suele servirse como una opción más, y con la mitad de esa cantidad alcanza. La guía de cuánta carne por persona te ayuda a completar el cálculo.'
    ]},
    {id:'precio', title:'Qué cambia el precio del cabrito', paragraphs:[
      'El cabrito se vende casi siempre entero o en mitades, por kilo faenado. Su precio cambia según la edad y el peso del animal, si viene limpio y listo para cocinar y la disponibilidad, que no es la misma todo el año ni en todas las carnicerías. Los animales más chicos y tiernos suelen cotizar distinto que los más grandes.',
      'Como rinde poca carne por kilo, lo justo es comparar su precio pensando en cuántas personas vas a alimentar y no solo en el número por kilo. Si lo encargás ya asado, se suma el trabajo y las horas de fuego.'
    ]}
  ],
  recipes:['receta-papas-al-horno','receta-sopa-paraguaya','receta-chipa-guazu','receta-cordero-al-horno'],
  related:['corte-cordero','guia-cuanta-carne-por-persona','corte-lechon','guia-asado-a-la-parrilla'],
  faq:[
    ['¿Qué es el cabrito?','Es la cría de la cabra faenada joven. Su carne es clara, tierna, magra y de sabor suave, muy distinta de la del chivo adulto.'],
    ['¿Qué diferencia hay entre cabrito y chivo?','La edad. El cabrito es joven, con carne rosada y tierna; el chivo es adulto, con carne más oscura, firme y de sabor y olor más fuertes.'],
    ['¿Cuánto tarda un cabrito a la parrilla?','Uno de unos 7 kilos, abierto o en cuartos, tarda entre dos y tres horas a fuego suave, la mayor parte con los huesos hacia las brasas.'],
    ['¿Cómo hago para que el cabrito no quede seco?','Adobalo con tiempo, cocinalo a fuego suave y pintalo con el adobo o una salmuera durante la cocción. Retiralo cuando la carne se separe del hueso, sin pasarlo de más.'],
    ['¿Para cuántas personas alcanza un cabrito?','Como estimación, un cabrito de 7 kilos faenado alcanza para unas 14 a 16 personas si es la carne principal.'],
    ['¿El cabrito se puede hacer al horno?','Sí. En porciones, en asadera con un poco de vino o caldo, tapado a 170 °C una hora y media a dos horas, y destapado al final para dorar.']
  ],
  ctaTitle:'Asado para tu evento',
  ctaText:'¿Querés cabrito o cordero a la parrilla para una fiesta de campo o un evento especial? Escribinos la fecha, la zona y la cantidad de invitados, y te ayudamos a consultar quién lo asa en Gran Asunción.',
  waMessage:'Hola, quiero consultar por un asado de cabrito para un evento.'
};
