// Meat cut module: wagyu (breed, not a cut). Shape: see plan/prompts/CONTENT-WRITER.md, Guide and cut fields.
export default {
  id:'corte-wagyu', slug:'wagyu', kind:'cut', order:15, animal:'Vacuno',
  published:true, indexable:true, updatedAt:'2026-09-24', verifiedAt:'2026-09-24',
  source:'Guía de la redacción de comida.com.py, basada en la práctica de carnicería y parrilla; no incluye datos de productores ni de origen que no se hayan podido confirmar',
  label:'Carne wagyu',
  seoTitle:'Carne de wagyu: qué es y cómo cocinarla',
  meta:'Carne de wagyu: qué significa, qué es una cruza con wagyu, cómo leer lo que dice la etiqueta, cómo cocinarla sin arruinarla y qué cambia su precio.',
  h1:'Carne de wagyu: qué es, qué son las cruzas y cómo cocinarla',
  cardText:'Qué hay detrás del nombre wagyu, qué es una cruza y cómo cocinar esa carne tan grasa.',
  category:['carne','fiesta'],
  keywords:['carne de wagyu','carne wagyu precio','wagyu carne','precio de carne wagyu','wagyu cruza'],
  intro:[
    'Wagyu no es un corte: es el nombre de un tipo de ganado. La palabra viene del japonés y se usa para varias razas bovinas de origen japonés conocidas por acumular mucha grasa dentro del músculo, en vetas finas que se ven como un encaje blanco sobre la carne roja. De un animal wagyu salen los mismos cortes que de cualquier vacuno: bife ancho, bife de chorizo, picaña, vacío.',
    'Lo que se vende con ese nombre fuera de Japón puede ser muy distinto entre sí, porque muchas veces se trata de cruzas con otras razas. Acá vas a encontrar qué significa realmente la etiqueta, qué preguntar antes de comprar, cómo cocinar una carne tan marmoleada y por qué su precio varía tanto de una pieza a otra.'
  ],
  facts:[
    ['Animal','Vacuno'],
    ['Zona del animal','Cualquiera: wagyu es la raza, no el corte. Los más buscados son los del lomo'],
    ['Otros nombres','Wagyu puro, cruza wagyu, F1 (primera cruza); a veces se le dice kobe, aunque ese nombre corresponde a un origen específico'],
    ['Mejor cocción','Plancha o parrilla muy caliente, en bifes finos a medianos y porciones chicas'],
    ['Por persona','120 a 200 g crudos si es la carne principal (estimación)']
  ],
  estimate:'Los gramos por persona son estimaciones de la redacción: por su cantidad de grasa, el wagyu se come en porciones más chicas que otras carnes.',
  sections:[
    {id:'que-es', title:'Qué es el wagyu', paragraphs:[
      'El término wagyu agrupa razas bovinas japonesas seleccionadas durante mucho tiempo por su capacidad de infiltrar grasa en el músculo. Esa grasa intramuscular es la que da el marmoleado: vetas finas y numerosas que se derriten a una temperatura más baja que la grasa de otras carnes. En la boca se siente como una carne muy tierna y untuosa, con un sabor dulce y mantecoso.',
      'Fuera de Japón hay productores que crían wagyu puro y muchos más que lo cruzan con otras razas. Por eso dos carnes vendidas como wagyu pueden tener un marmoleado muy distinto. La etiqueta sola dice poco; lo que importa es qué proporción de genética wagyu tiene el animal, cómo fue alimentado y qué grado de marmoleado logró.'
    ]},
    {id:'cruzas', title:'Qué es una cruza con wagyu', paragraphs:[
      'Una cruza es un animal hijo de un padre wagyu y una madre de otra raza, por ejemplo Angus o Brangus, o de sucesivas cruzas entre ellos. En la jerga ganadera se usan siglas para indicar la proporción de sangre wagyu: la primera cruza suele llamarse F1, con la mitad de genética wagyu, y las siguientes generaciones cruzadas otra vez con wagyu van sumando porcentaje.',
      'Una cruza puede dar carne muy buena, con más marmoleado que un novillo común pero menos que un wagyu puro. No es una trampa, siempre que se diga con claridad. Lo que conviene evitar es pagar como wagyu puro una carne que es cruza sin que nadie te lo explique.'
    ], items:[
      'Preguntá si la carne es de animal puro o de cruza y, si es cruza, qué porcentaje declara el productor.',
      'Pedí ver la pieza: el marmoleado se aprecia a simple vista, con vetas blancas finas repartidas por todo el músculo.',
      'Si el vendedor menciona una escala de marmoleado, preguntá qué escala usa: hay varias y los números no se comparan entre sí.',
      'Desconfiá de una carne vendida como wagyu que casi no muestra grasa dentro del músculo.'
    ]},
    {id:'kobe', title:'Wagyu y kobe no son sinónimos', paragraphs:[
      'Kobe es el nombre de un tipo de carne wagyu ligada a una región y a reglas de producción propias de Japón. Todo kobe es wagyu, pero la inmensa mayoría del wagyu no es kobe. Si alguien ofrece carne kobe, lo razonable es pedir la documentación que lo respalde; sin ella, tomalo como una forma de marketing.'
    ]},
    {id:'como-cocinarlo', title:'Cómo cocinar carne de wagyu', paragraphs:[
      'La regla general es cocinar rápido, con mucho calor y poca carne por vez. Tanta grasa infiltrada hace que un bife grueso cocido lento se vuelva pesado y grasoso, y que en la parrilla gotee y levante llamas. Por eso el wagyu se sirve muchas veces en bifes de uno a dos centímetros, cortados en tiras para compartir.'
    ], steps:[
      'Sacá la carne de la heladera un rato antes. Secala bien con papel.',
      'Calentá una plancha o sartén de hierro hasta que esté muy caliente. No hace falta aceite: la carne suelta su propia grasa.',
      'Salá justo antes de cocinar, con sal gruesa o en escamas.',
      'Cociná 1 a 2 minutos por lado para un bife de un centímetro y medio, sin moverlo, hasta que se forme una costra dorada.',
      'Dejalo reposar un par de minutos y cortalo en tiras finas contra la fibra.',
      'Serví porciones chicas, con algo ácido o fresco al lado: ensalada verde, tomate, cebolla en escabeche.'
    ]},
    {id:'parrilla', title:'Wagyu en la parrilla', paragraphs:[
      'En la parrilla funciona mejor en cortes medianos y con la parrilla alta. La grasa que cae sobre las brasas enciende llamas que manchan la carne de hollín; si pasa, mové la pieza a un costado hasta que se calme. Las cruzas con menos marmoleado aguantan cortes más gruesos y se pueden tratar casi como un bife ancho de novillo.',
      'Para un evento, conviene cortarlo en tiras apenas sale del fuego y ofrecerlo como degustación, en lugar de servir un bife entero por persona: se aprovecha mejor y más invitados lo prueban.'
    ]},
    {id:'cuanto-comprar', title:'Cuánto wagyu comprar', paragraphs:[
      'Como estimación de la redacción, contá entre 120 y 200 gramos crudos por adulto si es la carne principal, y unos 60 a 80 gramos si es una degustación dentro de un asado con otros cortes. Una cruza con menos grasa se puede servir en porciones algo mayores.',
      'Para el resto de la carne de un asado, la guía de cuánta carne por persona tiene una calculadora que te ayuda a repartir entre cortes.'
    ]},
    {id:'precio', title:'Qué cambia el precio de la carne wagyu', paragraphs:[
      'El precio depende sobre todo de la genética y del marmoleado. Un animal puro cuesta más que una cruza, y dentro de cada grupo el valor sube con la cantidad y la finura de las vetas de grasa. La crianza también pesa: los animales que se terminan con alimentación especial durante más tiempo son más caros de producir.',
      'A eso se suma el corte, porque un bife del lomo vale más que uno de la pierna, la maduración, el envasado y si la carne es de producción local o importada. Por todas esas variables, dos carnes con la misma palabra en la etiqueta pueden tener precios muy distintos, y la forma honesta de compararlas es preguntando por la genética y mirando el marmoleado.'
    ]}
  ],
  recipes:['receta-ensalada-cesar','receta-papas-al-horno','receta-pan-al-ajo'],
  related:['guia-cuanta-carne-por-persona','corte-tomahawk','corte-ojo-de-bife','corte-bife-ancho','corte-picana','guia-cortes-de-carne-vacuna'],
  faq:[
    ['¿Qué es la carne de wagyu?','Es carne de ganado de razas de origen japonés, o de cruzas con ellas, que se caracteriza por tener mucha grasa infiltrada en el músculo, en vetas finas. Wagyu es la raza, no el corte.'],
    ['¿Qué quiere decir wagyu cruza o F1?','Que el animal es hijo de un wagyu y de otra raza. F1 suele indicar la primera cruza, con la mitad de genética wagyu. Tiene más marmoleado que un novillo común, pero menos que un wagyu puro.'],
    ['¿Por qué la carne wagyu es tan cara?','Porque cuesta más criar y terminar esos animales, y porque el precio sube con el grado de marmoleado. También influyen el corte, la maduración y si la carne es importada.'],
    ['¿Wagyu y kobe son lo mismo?','No. El kobe es un tipo de wagyu con un origen y reglas de producción propias de Japón. Todo kobe es wagyu, pero casi todo el wagyu que se vende no es kobe.'],
    ['¿Cómo se cocina un bife de wagyu?','Rápido y con mucho calor: plancha o sartén de hierro bien caliente, sin aceite, uno o dos minutos por lado si el bife es fino. Después se corta en tiras.'],
    ['¿Cuánto wagyu por persona?','Como estimación, entre 120 y 200 gramos crudos si es la carne principal, y menos si se sirve como degustación en un asado con otros cortes.']
  ],
  ctaTitle:'Asado para tu evento',
  ctaText:'¿Querés sumar una degustación de carne premium a un asado de cumpleaños o de empresa? Con la fecha, la zona y la cantidad de personas te ayudamos a pedir presupuesto a un servicio de asado de Gran Asunción.',
  waMessage:'Hola, quiero consultar por un asado con cortes premium para un evento.'
};
