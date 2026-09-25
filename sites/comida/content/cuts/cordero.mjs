// Meat cut module: cordero. Shape: see plan/prompts/CONTENT-WRITER.md, Guide and cut fields.
export default {
  id:'corte-cordero', slug:'cordero', kind:'cut', order:21, animal:'Cordero',
  published:true, indexable:true, updatedAt:'2026-09-24', verifiedAt:'2026-09-24',
  source:'Guía de la redacción de comida.com.py, basada en la práctica de carnicería y la cocina de campo del Río de la Plata',
  label:'Cordero',
  seoTitle:'Carne de cordero: cortes y cómo asarla',
  meta:'Carne de cordero: diferencia con oveja y capón, cortes (pierna, paleta, costillar), cordero asado a la cruz, al horno o a la parrilla y cuánto comprar.',
  h1:'Cordero: cortes, diferencias con la oveja y cómo asarlo',
  cardText:'Pierna, paleta y costillar de cordero: cómo elegirlos y cómo asarlos.',
  category:['carne','fiesta','horno'],
  keywords:['cordero','carne de cordero','cordero asado','cordero oveja','cordero horno','cordero a la parrilla'],
  intro:[
    'El cordero es la cría joven de la oveja, y su carne es más tierna y de sabor más suave que la de un animal adulto. Se vende entero, en medias reses o en cortes como la pierna, la paleta y el costillar. En la mesa paraguaya no es tan cotidiano como la vaca o el cerdo, pero aparece en fiestas, en asados especiales y en las mesas de fin de año.',
    'Acá vas a ver en qué se diferencian cordero, borrego, capón y oveja, qué corte conviene para cada método, cómo hacer un cordero asado a la parrilla, a la cruz o al horno, cuánto comprar por persona y qué cambia el precio.'
  ],
  facts:[
    ['Animal','Cordero'],
    ['Zona del animal','Animal entero o por cortes: pierna, paleta, costillar, carré y cuello'],
    ['Otros nombres','Borrego (algo mayor), capón (macho castrado adulto); carne ovina en general'],
    ['Mejor cocción','Parrilla o cruz a fuego suave, horno lento; carré en la plancha'],
    ['Por persona','400 a 500 g crudos con hueso si es la carne principal (estimación)']
  ],
  estimate:'Los gramos por persona son estimaciones de la redacción que cuentan el hueso, que en el cordero es proporcionalmente mucho: ajustalos según el apetito.',
  sections:[
    {id:'que-es', title:'Cordero, borrego, capón y oveja', paragraphs:[
      'Todos son el mismo animal en distintas etapas. El cordero es joven, y su carne es rosada, tierna y con grasa blanca y suave. A medida que el animal crece, la carne se oscurece, se vuelve más firme y toma un sabor más marcado, el que algunas personas describen como fuerte o a lana. Por eso, cuando alguien busca cordero u oveja, conviene aclarar la edad antes de comprar.'
    ], table:{caption:'Nombres habituales de la carne ovina, de más joven a más adulto', head:['Nombre','Cómo es la carne','Uso típico'], rows:[
      ['Cordero','Rosada, tierna, sabor suave','Asado entero, pierna, carré'],
      ['Borrego','Algo más firme y sabrosa','Parrilla, horno'],
      ['Capón','Macho castrado adulto: carne roja, grasa abundante','Asado largo, guisos'],
      ['Oveja','Adulta: carne oscura, sabor intenso','Guisos, cocciones largas']
    ], note:'Los límites de edad entre una categoría y otra cambian según la región y el vendedor. Preguntá siempre de qué edad es el animal.'}},
    {id:'cortes', title:'Cortes del cordero y para qué sirve cada uno', cards:[
      ['Pierna','La pieza más carnosa. Ideal al horno entera, con hueso, o deshuesada y rellena.'],
      ['Paleta','El brazo delantero, con más grasa y colágeno. Queda muy bien en cocción lenta, al horno o a la parrilla.'],
      ['Costillar','Las costillas con su carne. A la parrilla, como el costillar de cerdo pero más chico y rápido.'],
      ['Carré','Las costillas del lomo, tiernas. Se sellan en plancha o parrilla y se sirven apenas rosadas, con reposo.'],
      ['Cuello y garrón','Cortes con mucho tejido conectivo, para guisos y estofados.']
    ]},
    {id:'parrilla', title:'Cordero a la parrilla', paragraphs:[
      'Un cordero chico se puede hacer entero a la parrilla, abierto como un lechón, o en cuartos: dos delanteros y dos traseros. La regla es la misma que con otras carnes con hueso: fuego suave y paciencia, primero del lado de los huesos y al final del lado de la grasa.'
    ], steps:[
      'Salá la carne con sal gruesa unos minutos antes. Si querés, pintala con una mezcla de ajo, romero, orégano, limón y aceite.',
      'Armá una cama de brasas para fuego suave, pareja en toda la superficie.',
      'Poné el cordero con los huesos hacia abajo. Para cuartos de un cordero chico, calculá de 1 ½ a 2 horas de este lado.',
      'Dalo vuelta cuando los huesos estén dorados y la carne de arriba se vea blanca en los bordes. Seguí 45 a 60 minutos del lado de la grasa.',
      'Comprobá en la parte más gruesa de la pierna: tiene que llegar al menos a 63 °C, y para que la carne se separe del hueso conviene bastante más.',
      'Dejalo reposar unos minutos y trozalo con cuchillo o tijera de cocina.'
    ]},
    {id:'a-la-cruz', title:'Cordero asado a la cruz', paragraphs:[
      'El cordero a la cruz, o al asador, es el método de campo: el animal entero, abierto, se sujeta a una cruz de hierro clavada en el suelo e inclinada hacia un fuego de leña. El calor llega de costado, la grasa cae al suelo y la carne se hace lenta, entre tres y cinco horas según el tamaño, el viento y la leña. Primero se expone el lado de la carne y después, un tiempo más corto, el lado del cuero o la grasa.',
      'Es un método vistoso para una fiesta al aire libre, pero exige espacio, leña abundante y alguien atento al fuego durante horas. Si no tenés experiencia, empezar con cuartos a la parrilla es más seguro.'
    ]},
    {id:'horno', title:'Pierna y paleta de cordero al horno', paragraphs:[
      'Al horno, la pierna y la paleta quedan tiernas con temperatura moderada, algo de líquido en la asadera y el tiempo suficiente. Una pierna de 2 kilos con hueso lleva unas dos horas a 170 °C, tapada con papel de aluminio la primera hora y destapada el resto para dorar. Si la querés apenas rosada, retirala cuando el centro marque unos 60 °C y dejala reposar tapada: con el reposo sube hasta los 63 °C.',
      'Van muy bien el ajo, el romero, el tomillo, la mostaza, el vino blanco y el limón. Papas, cebollas y zapallo en la misma asadera se cocinan con el jugo de la carne. La receta de cordero al horno del sitio tiene el paso a paso con cantidades.'
    ]},
    {id:'tiempos', title:'Tiempos orientativos', table:{caption:'Referencia para un cordero joven de tamaño chico a mediano', head:['Pieza y método','Tiempo','Señal de que está'], rows:[
      ['Cuartos a la parrilla','2 ¼ a 3 h','Carne que se separa del hueso, grasa dorada'],
      ['Entero a la cruz','3 a 5 h','Pierna tierna al pinchar, jugos claros'],
      ['Pierna al horno (2 kg)','2 h a 170 °C','Retirar a 60 °C: llega a 63 °C con el reposo'],
      ['Paleta al horno','2 a 2 ½ h a 160 °C','Tierna al pinchar con un tenedor'],
      ['Carré en plancha','3 a 4 min por lado','Dorado por fuera, 63 °C en el centro tras el reposo']
    ], note:'Los tiempos cambian con el tamaño del animal y la fuerza del fuego. El mínimo seguro para piezas enteras es 63 °C en el centro con reposo; las cocciones largas quedan más tiernas cuanto más superan ese punto.'}},
    {id:'cuanto-comprar', title:'Cuánto cordero comprar', paragraphs:[
      'Como estimación de la redacción, contá entre 400 y 500 gramos crudos con hueso por adulto si el cordero es la carne principal. El cordero tiene mucho hueso en proporción a la carne, sobre todo en el costillar y el cuello. Una pierna de 2 kilos alcanza para cuatro o cinco adultos; un cordero entero chico, para unas 12 a 15 personas.',
      'Si lo servís junto con otras carnes, bajá la cantidad a la mitad. La guía de cuánta carne por persona te ayuda a combinar cortes.'
    ]},
    {id:'precio', title:'Qué cambia el precio del cordero', paragraphs:[
      'El precio del cordero depende de la edad del animal, porque el cordero joven cuesta más que la carne de oveja adulta, y de cómo se compra: entero sale por kilo más conveniente que por cortes, pero pagás también cabeza, cuello y huesos que rinden menos. La pierna y el carré son los cortes más caros; la paleta y el costillar suelen ser más accesibles.',
      'La disponibilidad también influye. Como no se consume tanto como la vaca o el cerdo, no todas las carnicerías lo tienen siempre, y para las fiestas conviene encargarlo con anticipación. Si viene congelado, preguntá el peso sin hielo.'
    ]}
  ],
  recipes:['receta-cordero-al-horno','receta-papas-al-horno','receta-sopa-paraguaya','receta-ensalada-rusa'],
  related:['guia-cuanta-carne-por-persona','corte-cabrito','corte-lechon','coleccion-fin-de-ano','guia-asado-a-la-parrilla'],
  faq:[
    ['¿Qué diferencia hay entre cordero y oveja?','Es el mismo animal a distinta edad. El cordero es joven, con carne rosada y tierna; la oveja es adulta, con carne más oscura, firme y de sabor más intenso.'],
    ['¿Cuánto tarda un cordero a la parrilla?','Un cordero chico en cuartos tarda entre dos horas y cuarto y tres horas a fuego suave, la mayor parte con los huesos hacia las brasas.'],
    ['¿Cómo se hace el cordero asado a la cruz?','Se abre el animal entero, se sujeta a una cruz de hierro clavada en el suelo e inclinada frente a un fuego de leña, y se asa con calor de costado durante tres a cinco horas.'],
    ['¿Cuánto tarda una pierna de cordero al horno?','Una pierna de 2 kilos con hueso lleva unas dos horas a 170 °C. Para que quede apenas rosada, retirala con unos 60 °C en el centro y dejala reposar hasta que llegue a 63 °C.'],
    ['¿Para cuántas personas alcanza un cordero entero?','Como estimación, un cordero entero chico alcanza para unas 12 a 15 personas si es la carne principal.'],
    ['¿Cómo saco el gusto fuerte de la carne de cordero?','Elegí un animal joven, retirá el exceso de grasa, que es donde más se concentra ese sabor, y usá hierbas, ajo y limón. La carne de animales adultos siempre tendrá un sabor más marcado.']
  ],
  ctaTitle:'Asado para tu evento',
  ctaText:'¿Querés cordero a la parrilla o a la cruz para una fiesta, una cena de fin de año o un evento de campo? Contanos la fecha, el lugar y cuántos van a ser, y buscamos con vos un servicio de asado en Gran Asunción.',
  waMessage:'Hola, quiero consultar por un asado de cordero para un evento.'
};
