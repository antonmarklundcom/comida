// Meat cut module: tomahawk. Shape: see plan/prompts/CONTENT-WRITER.md, Guide and cut fields.
export default {
  id:'corte-tomahawk', slug:'tomahawk', kind:'cut', order:13, animal:'Vacuno',
  published:true, indexable:true, updatedAt:'2026-09-24', verifiedAt:'2026-09-24',
  source:'Guía de la redacción de comida.com.py, basada en la práctica de carnicería y parrilla del Río de la Plata',
  label:'Tomahawk',
  seoTitle:'Tomahawk: qué corte es y cómo asarlo',
  meta:'Tomahawk de carne: qué corte es, en qué se diferencia del bife ancho, cómo asarlo entero sin quemarlo por fuera, cuánto rinde y por qué cuesta más.',
  h1:'Tomahawk: el bife ancho con hueso largo y cómo hacerlo a la parrilla',
  cardText:'Un bife ancho grueso con el hueso de la costilla entero: se hace despacio y se comparte.',
  category:['carne','fiesta'],
  keywords:['tomahawk carne','corte tomahawk','tomahawk precio','tomahawk a la parrilla','bife ancho con hueso'],
  image:75,
  intro:[
    'El tomahawk es un bife ancho cortado bien grueso, con el hueso de la costilla completo y limpio de carne en la punta. Ese hueso largo le da la forma de hacha que explica el nombre en inglés. Por dentro es el mismo músculo del ojo de bife, con sus vetas de grasa y su centro tierno; lo que cambia es el tamaño y la presentación.',
    'Por su grosor no se cocina como un bife común: si lo tirás a fuego fuerte, se quema por fuera y queda crudo en el centro. En esta página vas a ver de dónde sale, cómo pedirlo, un método de dos fuegos que funciona en cualquier parrilla, cuántas personas comen con una pieza y qué hace que su precio sea alto.'
  ],
  facts:[
    ['Animal','Vacuno'],
    ['Zona del animal','Costillas delanteras del lomo, la zona del bife ancho, con el hueso de costilla entero'],
    ['Otros nombres','Bife ancho con hueso largo, costilla con hueso francés; en inglés tomahawk steak'],
    ['Mejor cocción','Parrilla en dos etapas: fuego indirecto y sellado final'],
    ['Por persona','Una pieza de 1,2 a 1,5 kg para dos o tres adultos (estimación)']
  ],
  estimate:'Las porciones son estimaciones de la redacción: el hueso pesa bastante, así que calculá por la carne que queda y no por el peso de la pieza.',
  sections:[
    {id:'que-es', title:'Qué es el tomahawk y de qué parte sale', paragraphs:[
      'Sale de la zona de las costillas delanteras del lomo, la misma que da el bife ancho y el ojo de bife. El carnicero corta entre dos costillas dejando un bife de cinco a siete centímetros de espesor y, en lugar de recortar el hueso a ras, lo deja entero y le raspa la carne y la grasa de la punta. Ese raspado se conoce como hueso a la francesa.',
      'Una pieza suele pesar entre 1 y 2 kilos, y una parte importante de ese peso es el hueso. El corte tiene tres zonas: el ojo central, muy tierno; la tapa que lo rodea, con más grasa y sabor; y la carne pegada al hueso, que se come mejor tomándola con la mano al final.'
    ]},
    {id:'diferencias', title:'Tomahawk, bife ancho, ojo de bife y chuletón', paragraphs:[
      'Los nombres se cruzan, así que conviene ordenarlos. Todos comparten el mismo músculo principal; la diferencia está en el hueso y el grosor.'
    ], table:{caption:'Cortes de la misma zona del lomo', head:['Corte','Hueso','Grosor habitual'], rows:[
      ['Ojo de bife','Sin hueso, solo el centro','2 a 4 cm'],
      ['Bife ancho','Con o sin hueso corto','2 a 4 cm'],
      ['Chuletón','Con hueso corto','4 a 6 cm'],
      ['Tomahawk','Hueso de costilla largo y limpio','5 a 7 cm']
    ], note:'Cada carnicería usa los nombres a su manera. Si tenés dudas, pedí el corte por su descripción: bife ancho grueso con el hueso de costilla entero.'}},
    {id:'como-pedirlo', title:'Cómo pedirlo y elegirlo', paragraphs:[
      'En muchas carnicerías el tomahawk se corta a pedido, porque exige separar el costillar de una forma particular. Encargarlo con un par de días de anticipación evita sorpresas.'
    ], items:[
      'Pedí un grosor de al menos cinco centímetros; más fino, el hueso largo pesa más que la carne y el corte pierde sentido.',
      'Buscá vetas de grasa blanca repartidas por el centro: es lo que le da jugosidad.',
      'Revisá que el hueso esté bien limpio en la punta para que no queden restos que se quemen.',
      'Si viene envasado al vacío, sacalo del envase un rato antes, secalo con papel y dejá que tome color.'
    ]},
    {id:'parrilla', title:'Tomahawk a la parrilla en dos fuegos', paragraphs:[
      'El método más seguro para una pieza tan gruesa es cocinarla primero con calor suave e indirecto hasta que el centro se acerque al punto, y recién al final darle una sellada fuerte. Así el interior queda parejo, rosado de borde a borde, y la costra se forma en pocos minutos.'
    ], steps:[
      'Salá la pieza con sal gruesa por todos lados. Si tenés tiempo, hacelo una hora antes y dejala destapada en la heladera.',
      'Armá la parrilla con dos zonas: brasas de un lado y el otro sin brasas debajo.',
      'Poné el tomahawk en la zona sin brasas, con el hueso hacia el lado del fuego. Tapalo con una asadera o bandeja dada vuelta si tu parrilla no tiene tapa.',
      'Cociná de 35 a 50 minutos, dándolo vuelta a la mitad, hasta que un termómetro en el centro marque unos 45 a 48 °C.',
      'Pasalo sobre brasas fuertes y sellá 2 a 3 minutos por lado, y también el borde de grasa, sosteniéndolo del hueso.',
      'Dejalo reposar 8 a 10 minutos. El centro subirá unos grados y quedará jugoso, alrededor de 54 °C.',
      'Separá la carne del hueso con un cuchillo y cortala en tajadas gruesas contra la fibra. Serví el hueso aparte para quien quiera roerlo.'
    ]},
    {id:'puntos', title:'Puntos de cocción del tomahawk', table:{caption:'Temperatura en el centro después del reposo', head:['Punto','Temperatura','Cómo se ve'], rows:[
      ['Jugoso','52 a 55 °C','Centro rosado intenso, jugo abundante'],
      ['A punto','56 a 60 °C','Rosado claro, más firme'],
      ['Cocido','63 °C o más','Sin rosado; conviene cuidar que no se seque']
    ], note:'Retirá la pieza del fuego unos 4 a 6 grados antes de la temperatura que buscás: el reposo termina el trabajo.'}},
    {id:'cuanto-comprar', title:'Cuántas personas comen con un tomahawk', paragraphs:[
      'Como estimación de la redacción, una pieza de 1,2 a 1,5 kilos con hueso rinde para dos o tres adultos si es la carne principal, y para cuatro o cinco si se sirve cortada al centro de la mesa junto con otros cortes. El hueso puede representar una parte grande del peso total.',
      'Para eventos, el tomahawk suele funcionar más como pieza de lucimiento que como carne principal: se corta frente a los invitados y se reparte en tajadas. Para calcular el resto del asado, usá la guía de cuánta carne por persona.'
    ]},
    {id:'precio', title:'Por qué el tomahawk cuesta más', paragraphs:[
      'Pagás por varias cosas a la vez. El corte sale de la zona más valorada del lomo, se necesita más trabajo para limpiar el hueso y cada costillar da pocas piezas de este formato. Además, el hueso se cobra al mismo valor que la carne, así que el precio por kilo de carne comestible es mayor de lo que parece.',
      'También influyen la categoría del animal, el grado de marmoleado, si la carne fue madurada y si viene envasada al vacío. Cuando compares, hacelo contra un ojo de bife del mismo origen: te da una idea de cuánto estás pagando por el formato y el hueso.'
    ]},
    {id:'errores', title:'Errores comunes', items:[
      'Ponerlo directo sobre brasas fuertes: la costra se quema en minutos y el centro sigue frío.',
      'Cocinarlo recién salido de la heladera: el centro tarda mucho más en calentarse y la cocción queda despareja.',
      'Cortarlo con el hueso puesto: las tajadas salen irregulares. Primero separá la carne, después cortá.',
      'Pincharlo con tenedor para darlo vuelta: usá pinza o tomalo del hueso.'
    ]}
  ],
  recipes:['receta-tomahawk-a-la-parrilla','receta-papas-al-horno','receta-ensalada-de-papa','receta-pan-al-ajo'],
  related:['guia-cuanta-carne-por-persona','corte-ojo-de-bife','corte-bife-ancho','corte-chuleton','corte-wagyu','guia-asado-a-la-parrilla'],
  faq:[
    ['¿Qué corte es el tomahawk?','Es un bife ancho con el hueso de la costilla entero y limpio en la punta, cortado de cinco a siete centímetros de grosor. La carne es la misma del ojo de bife.'],
    ['¿Cuánto tarda un tomahawk en la parrilla?','Con el método de dos fuegos, entre 40 y 55 minutos en total para una pieza de 1,2 a 1,5 kilos: la mayor parte con calor indirecto y unos minutos de sellado al final.'],
    ['¿Para cuántas personas alcanza un tomahawk?','Como estimación, una pieza de 1,2 a 1,5 kilos alcanza para dos o tres adultos si es la única carne, porque el hueso pesa bastante.'],
    ['¿Qué diferencia hay entre tomahawk y chuletón?','Los dos salen de la misma zona y son gruesos. El chuletón lleva el hueso corto; el tomahawk conserva el hueso de costilla largo y raspado.'],
    ['¿Por qué el tomahawk es tan caro?','Sale de la zona más buscada del lomo, requiere trabajo extra de carnicería y el hueso se paga al precio de la carne. La categoría del animal y la maduración también suben su valor.'],
    ['¿A qué temperatura se saca el tomahawk?','Para jugoso, retiralo del fuego con unos 48 a 50 °C en el centro y dejalo reposar: terminará cerca de 54 °C.']
  ],
  ctaTitle:'Asado para tu evento',
  ctaText:'¿Querés un tomahawk cortado frente a tus invitados en un cumpleaños o una cena de empresa? Decinos cuándo es, dónde y para cuántos, y te conectamos con un servicio de asado de Gran Asunción.',
  waMessage:'Hola, quiero consultar por un asado con tomahawk para un evento.'
};
