// Meat cut module: aguja (corte vacuno). Shape: see plan/prompts/CONTENT-WRITER.md, Guide and cut fields.
export default {
  id:'corte-aguja', slug:'aguja', kind:'cut', animal:'Vacuno',
  published:true, indexable:true, updatedAt:'2026-09-24', verifiedAt:'2026-09-24',
  source:'Guía de la redacción de comida.com.py, basada en la práctica de carnicería y cocina del Río de la Plata y de Paraguay',
  label:'Aguja (carne)',
  seoTitle:'Carne aguja: qué corte es y cómo cocinarlo',
  meta:'Aguja, el corte de carne vacuna: de qué parte del animal sale, cómo cocinarla en la olla, al horno o a la parrilla, cuánto comprar y qué cambia su precio.',
  h1:'Aguja: el corte de carne vacuna, qué es y cómo cocinarlo',
  cardText:'Corte delantero con grasa y colágeno, ideal para olla, horno y asado lento.',
  category:['carne','paraguaya'],
  keywords:['aguja carne','carne aguja','aguja'],
  intro:[
    'Cuando hablamos de aguja en la carnicería no nos referimos a la de coser, sino a un corte vacuno de la parte delantera del animal, entre el cogote y las costillas del bife ancho. Es una carne con vetas de grasa, colágeno y mucho sabor, que se vende con hueso o sin hueso y sirve sobre todo para cocciones lentas.',
    'Es de esos cortes que en la olla se transforman: después de un par de horas quedan tiernos y dejan una salsa sabrosa. En esta página te contamos de dónde sale, cómo reconocerla, cómo cocinarla en la olla, al horno y a la parrilla, cuánto comprar y qué mueve su precio.'
  ],
  facts:[
    ['Animal','Vacuno'],
    ['Zona del animal','Cuarto delantero, parte superior entre el cogote y el bife ancho, sobre las primeras costillas'],
    ['Otros nombres','Carne aguja, aguja de vaca; con hueso a veces se vende como asado de aguja'],
    ['Mejor cocción','Olla, horno tapado o parrilla lenta'],
    ['Por persona','250 g sin hueso o 350 a 400 g con hueso (estimación)']
  ],
  estimate:'Los gramos por persona de esta página son estimaciones de la redacción; si la aguja viene con hueso, el peso real de carne cambia bastante, así que ajustalos.',
  sections:[
    {id:'que-es', title:'Qué es la aguja y de dónde sale', paragraphs:[
      'La aguja está en la parte alta del cuarto delantero del vacuno, justo detrás del cogote, sobre las primeras costillas y las vértebras del cuello y del lomo. Hacia atrás continúa en el bife ancho. Como es una zona que sostiene la cabeza y trabaja con cada movimiento, sus músculos tienen mucho tejido conectivo, pero también grasa entremezclada.',
      'Esa combinación es la que la hace tan buena en la olla: el colágeno se vuelve gelatina con la cocción larga y la grasa le da jugosidad. Rápido y a fuego fuerte, en cambio, queda dura. Por eso no se la suele ver como un corte de parrilla clásico, aunque bien hecha también puede ir a la brasa.'
    ]},
    {id:'como-se-vende', title:'Cómo se vende la aguja', paragraphs:[
      'En la carnicería la vas a encontrar de varias formas. Con hueso, en trozos o en tiras cortadas a lo largo de las costillas, a veces con el nombre de asado de aguja. Sin hueso, en una pieza grande que se puede cortar en cubos para guiso o dejar entera para el horno. Y también molida, porque su proporción de grasa da una carne picada sabrosa para hamburguesas.',
      'El límite entre la aguja y los cortes vecinos, como el bife ancho o el cogote, no es igual en todas las carnicerías. Si la buscás para la olla, pedí aguja sin hueso en cubos grandes; si la querés para asar, pedila con hueso en tiras gruesas y avisá que es para cocinar despacio.'
    ]},
    {id:'olla', title:'Aguja en la olla, paso a paso', paragraphs:[
      'La olla es donde la aguja rinde más. Esta es una base que podés adaptar a guiso, estofado o carne a la olla con papas.'
    ], steps:[
      'Cortá la aguja sin hueso en cubos de 4 a 5 centímetros y secalos con papel. Salpimentá.',
      'En una olla pesada con un poco de aceite, dorá la carne en tandas, sin amontonarla, hasta que tenga buen color.',
      'Retirá la carne y rehogá en la misma olla cebolla, locote y ajo picados hasta que estén tiernos.',
      'Sumá tomate picado o triturado, pimentón y orégano, y volvé la carne a la olla.',
      'Cubrí con caldo caliente, tapá y cociná a fuego suave entre 2 y 2 horas y media, con un burbujeo apenas visible.',
      'Cuando la carne se corte con la cuchara, agregá papa o mandioca en trozos y seguí unos 25 minutos más, hasta que estén tiernas.'
    ]},
    {id:'horno-parrilla', title:'Aguja al horno y a la parrilla', paragraphs:[
      'Al horno, la pieza sin hueso queda muy bien tapada, con verduras y un poco de caldo, a 160 °C entre dos horas y media y tres horas para un trozo de un kilo y medio. Los últimos 20 minutos se destapa para dorar. Se sirve en fetas con su jugo, o se desmecha para sándwiches.',
      'A la parrilla, la aguja con hueso en tiras gruesas se trata como un asado de tira de cocción lenta: fuego bajo, primero del lado del hueso durante unos 50 minutos y después del lado de la carne otros 30 a 40. Si la cocinás rápido, va a quedar dura; si le das tiempo, la grasa se derrite y la carne se afloja.'
    ], table:{caption:'Tiempos orientativos para la aguja', head:['Método','Cómo','Tiempo','Señal'], rows:[
      ['Olla','Cubos dorados, fuego suave con caldo','2 h a 2 h 30','Se corta con la cuchara'],
      ['Olla a presión','Cubos dorados, desde que toma presión','40 a 50 min','Se desmecha fácil'],
      ['Horno tapado','Pieza de 1,5 kg, 160 °C, con líquido','2 h 30 a 3 h, más 20 min destapada','El tenedor entra sin esfuerzo'],
      ['Parrilla con hueso','Tiras gruesas, fuego bajo','1 h 20 a 1 h 30','La carne se separa del hueso']
    ], note:'Referencias de la redacción; el grosor, el hueso y tu fuego las cambian. Para hamburguesas de aguja molida, cociná hasta 71 °C en el centro.'}},
    {id:'cuanto-comprar', title:'Cuánto comprar por persona', paragraphs:[
      'Como estimación, para un guiso o una carne a la olla con papa o mandioca, contá unos 250 gramos de aguja sin hueso por adulto. Con hueso, entre 350 y 400 gramos. En un asado con varios cortes, 150 gramos de aguja con hueso por persona suman sin exagerar. La guía de cuánta carne por persona te ayuda a cerrar la cuenta.'
    ]},
    {id:'errores', title:'Errores comunes con la aguja', items:[
      'Hacerla a la plancha o a fuego fuerte como si fuera un bife.',
      'Hervirla a borbotones: la carne se contrae y se endurece aunque esté en líquido.',
      'Sacarla de la olla antes de tiempo: si todavía ofrece resistencia al tenedor, le falta.',
      'No desgrasar la salsa: la grasa que suelta flota arriba y conviene retirar una parte antes de servir.'
    ]},
    {id:'precio', title:'Qué cambia el precio de la aguja', paragraphs:[
      'La aguja suele estar entre los cortes económicos a medios del vacuno, porque es del cuarto delantero y pide cocción larga. El precio por kilo cambia mucho según venga con hueso o sin hueso: deshuesada cuesta más por kilo, pero todo lo que pagás es carne. También influyen cuánta grasa exterior tenga, si está limpia de nervios gruesos y la categoría del animal.'
    ]}
  ],
  recipes:['receta-asado-a-la-olla','receta-estofado-de-carne','receta-guiso-paraguayo','receta-puchero-paraguayo','receta-hamburguesas-caseras'],
  related:['corte-bife-ancho','corte-marucha','corte-tapa-de-asado','corte-garron','guia-cuanta-carne-por-persona','guia-cortes-de-carne-vacuna'],
  faq:[
    ['¿Qué es la aguja en la carne?','Es un corte vacuno del cuarto delantero, entre el cogote y el bife ancho, sobre las primeras costillas. Tiene grasa y colágeno, y es ideal para cocciones lentas.'],
    ['¿Para qué sirve la carne aguja?','Para guisos, estofados, carne a la olla, horno tapado y carne desmechada. Con hueso, en tiras gruesas, también se hace a la parrilla a fuego bajo.'],
    ['¿Cuánto tarda la aguja en la olla?','Entre 2 y 2 horas y media a fuego suave, en cubos grandes y con caldo. En olla a presión, unos 40 a 50 minutos desde que toma presión.'],
    ['¿La aguja se puede hacer a la parrilla?','Sí, con hueso y a fuego bajo durante más de una hora. A fuego fuerte y rápido queda dura.'],
    ['¿La aguja sirve para carne molida?','Sí. Tiene una proporción de grasa que da hamburguesas jugosas. Cocinalas hasta que el centro llegue a 71 °C.'],
    ['¿La aguja es un corte barato?','Suele estar entre los económicos a medios. Cambia según venga con hueso o sin hueso y según lo limpia que esté.']
  ],
  ctaTitle:'Guiso o asado para muchos',
  ctaText:'¿Querés un guiso, carne al horno o un asado lento para una reunión de la empresa o una fiesta familiar? Contanos cuántos son, la fecha y la zona, y te ayudamos a consultar un catering o un servicio de asado.',
  waMessage:'Hola, quiero consultar por un guiso o carne al horno para un evento.'
};
