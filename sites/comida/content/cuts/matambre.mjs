// Meat cut module: matambre. Shape: see plan/prompts/CONTENT-WRITER.md, Guide and cut fields.
export default {
  id:'corte-matambre', slug:'matambre', kind:'cut', order:9, animal:'Vacuno',
  published:true, indexable:true, updatedAt:'2026-09-24', verifiedAt:'2026-09-24',
  source:'Guía de la redacción de comida.com.py, basada en la práctica de carnicería y la cocina casera del Río de la Plata',
  label:'Matambre',
  seoTitle:'Matambre: qué es, cómo elegirlo y cocinarlo',
  meta:'Matambre: de qué parte de la vaca sale, cómo elegirlo y limpiarlo, tiempos a la pizza, a la parrilla y arrollado, cuánto comprar y qué cambia su precio.',
  h1:'Matambre: el corte fino para hacer a la pizza o arrollado',
  cardText:'La lámina fina de carne que se hace a la pizza, a la parrilla o arrollada.',
  category:['carne','fiesta','horno'],
  keywords:['matambre','matambre precio','matambre a la pizza','matambre arrollado','matambre a la parrilla'],
  intro:[
    'El matambre es una lámina de carne fina y ancha que se separa entre el cuero y las costillas del vacuno. Tiene fibras largas, algo de grasa y bastante tejido conectivo, así que pide cocción lenta o un tiernizado previo. Bien tratado, queda tierno y se corta como una pizza.',
    'Es un corte muy versátil: a la parrilla, a la pizza con salsa y queso, o arrollado con relleno y servido frío en fiestas. Acá vas a encontrar de dónde sale, cómo elegirlo y limpiarlo, tiempos y señales para cada método, cuánto comprar y los errores que lo dejan duro.'
  ],
  facts:[
    ['Animal','Vacuno'],
    ['Zona del animal','Capa de músculo entre el cuero y las costillas, sobre el costillar y el vacío'],
    ['Otros nombres','Matambre vacuno; también existe matambre de cerdo, más chico y tierno'],
    ['Mejor cocción','Parrilla lenta, a la pizza o arrollado y hervido'],
    ['Por persona','250 a 300 g crudos (estimación)']
  ],
  estimate:'Los gramos por persona son estimaciones de la redacción: el matambre achica mucho al cocinarse, así que conviene no quedarse corto.',
  sections:[
    {id:'que-es', title:'Qué es el matambre y de dónde sale', paragraphs:[
      'Es una capa muscular delgada que recubre el costillar y el vacío, justo debajo del cuero. El carnicero la separa entera, como una manta de carne, y queda una pieza plana de forma más o menos rectangular. Un matambre vacuno entero suele pesar entre 1,5 y 2,5 kilos y tener uno o dos centímetros de espesor.',
      'Sobre el nombre circula un relato popular: vendría de mata hambre, porque era una carne que se asaba rápido para calmar el apetito mientras se hacía el resto. No hay un documento que lo confirme, pero la explicación quedó. Además del vacuno, hay matambre de cerdo, más chico, más tierno y de cocción más corta.'
    ]},
    {id:'como-elegir', title:'Cómo elegir y limpiar el matambre', paragraphs:[
      'Buscá un matambre de espesor parejo, con carne roja y una capa de grasa fina de un lado. Uno muy grueso en el centro y finito en los bordes se cocina desparejo. Evitá las piezas con agujeros o cortes grandes, sobre todo si lo vas a arrollar: el relleno se escapa.'
    ], items:[
      'Retirá el exceso de grasa con un cuchillo, pero dejá una capa fina que lo proteja en la cocción.',
      'Si tiene zonas muy gruesas, podés abrirlas un poco con el cuchillo para emparejar.',
      'Para matambre a la pizza, un matambre de novillo joven es más tierno y se ablanda antes.',
      'Si vas a hacerlo arrollado, pedilo entero y sin cortes en el medio.'
    ]},
    {id:'coccion', title:'Cómo cocinar el matambre: tiempos por método', paragraphs:[
      'El matambre crudo es duro; lo que lo vuelve tierno es el tiempo. Por eso hay dos caminos: cocinarlo largo a fuego suave en la parrilla, o darle una cocción previa en líquido, en leche o en caldo, y después terminarlo al calor seco. La señal de que está listo es que se puede pinchar con un tenedor sin que resista.'
    ], table:{caption:'Tiempos orientativos para un matambre vacuno de 1,5 a 2 kilos', head:['Método','Cómo','Tiempo','Señal de que está'], rows:[
      ['Parrilla','Brasa suave, primero del lado de la carne','1 a 1 ½ horas','Tierno al pinchar, grasa dorada'],
      ['A la pizza','Tiernizado en leche y terminado en horno o parrilla','45 a 60 min en leche y 15 a 20 min para gratinar','Queso derretido, carne tierna'],
      ['Arrollado hervido','Atado y cocido en agua con verduras','2 a 2 ½ horas','Se pincha con facilidad; se enfría prensado'],
      ['Arrollado al horno','Atado, en asadera con caldo, a 180 °C','1 ½ a 2 horas','Dorado y tierno al pinchar']
    ], note:'Un matambre de cerdo necesita bastante menos tiempo; revisalo desde la mitad de los tiempos indicados.'}},
    {id:'a-la-pizza', title:'Matambre a la pizza: la idea en pocos pasos', steps:[
      'Limpiá el exceso de grasa y cortá el matambre para que entre en tu asadera.',
      'Cocinalo cubierto de leche, a fuego suave, hasta que esté tierno. La leche ayuda a ablandarlo y lo mantiene húmedo.',
      'Escurrilo, secalo y pasalo a una asadera o a la parrilla con el lado de la grasa hacia abajo.',
      'Cubrí con salsa de tomate, mozzarella en fetas, orégano y, si querés, tomate en rodajas y aceitunas.',
      'Llevalo a horno fuerte o a la parrilla tapada hasta que el queso se derrita y empiece a dorar.',
      'Cortalo en porciones como una pizza y serví caliente.'
    ], after:[
      'Las cantidades exactas y cada paso con su tiempo están en la receta de matambre a la pizza del sitio.'
    ]},
    {id:'cuanto-comprar', title:'Cuánto matambre comprar por persona', paragraphs:[
      'La estimación de la redacción es de 250 a 300 gramos crudos por adulto si el matambre es el plato principal, porque se reduce bastante al cocinarse. Un matambre de 2 kilos alcanza para seis o siete adultos a la pizza. Arrollado y servido frío en rodajas, como parte de una mesa de fiesta, rinde para más: unos 100 a 150 gramos por persona.',
      'Para repartir el matambre con otras carnes en un asado, consultá la guía de cuánta carne por persona.'
    ]},
    {id:'errores', title:'Errores comunes con el matambre', items:[
      'Tirarlo directo a fuego fuerte: se encoge, se enrosca y queda como una suela.',
      'No sacarle el exceso de grasa: al arrollarlo, queda una capa blanca sin cocinar en el centro.',
      'Poner el queso desde el principio en el matambre a la pizza: se quema antes de que la carne esté tierna.',
      'Cortar el arrollado caliente: se desarma. Frío y prensado, las rodajas salen firmes y parejas.',
      'Enrollarlo con la fibra en el sentido equivocado: conviene arrollarlo de modo que al cortar las rodajas la fibra quede cruzada.'
    ]},
    {id:'precio', title:'Qué cambia el precio del matambre', paragraphs:[
      'El matambre no es de los cortes más caros, pero su precio real depende de cuánta grasa hay que sacarle: un matambre muy graso deja menos carne útil. Influyen también la categoría del animal, porque el de novillo es más tierno que el de vaca, y el tamaño y la prolijidad de la pieza.',
      'Hay diferencias entre el matambre vacuno y el de cerdo, que suele tener otro precio. Antes de las fiestas de fin de año sube la demanda por el matambre arrollado, así que si lo necesitás para esas fechas, encargalo antes.'
    ]},
    {id:'recetas', title:'Recetas del sitio con matambre', paragraphs:[
      'La receta de matambre a la pizza del sitio explica el método completo, con el tiernizado en leche y el gratinado final. Para la mesa, van bien la ensalada rusa y la sopa paraguaya. Las sobras frías, en fetas finas, son un buen relleno de sándwich en pan casero.'
    ]}
  ],
  recipes:['receta-matambre-a-la-pizza','receta-ensalada-rusa','receta-sopa-paraguaya','receta-pan-casero'],
  related:['guia-cuanta-carne-por-persona','corte-vacio','corte-peceto','corte-costillar-de-cerdo'],
  faq:[
    ['¿De qué parte de la vaca es el matambre?','Es la capa de carne que está entre el cuero y las costillas, sobre el costillar y el vacío.'],
    ['¿Cómo se ablanda el matambre?','Con tiempo. Se puede cocinar lento a la parrilla o darle una cocción previa en leche o en caldo antes de terminarlo al horno o a la brasa.'],
    ['¿Cuánto tiempo se hierve el matambre en leche para hacerlo a la pizza?','Entre 45 minutos y una hora a fuego suave, hasta que se pinche con facilidad. Después se gratina con la salsa y el queso.'],
    ['¿Cuánto tarda un matambre arrollado?','Hervido, unas dos horas a dos horas y media; al horno, una hora y media a dos horas. Después conviene enfriarlo prensado antes de cortarlo.'],
    ['¿Qué diferencia hay entre matambre de vaca y de cerdo?','El de cerdo es más chico, más tierno y se cocina más rápido. El vacuno es más grande, más firme y necesita más tiempo o un tiernizado.'],
    ['¿Cuánto matambre para 6 personas?','Como estimación, entre 1,5 y 1,8 kilos crudos si es el plato principal.']
  ],
  ctaTitle:'Asado para tu evento',
  ctaText:'Matambre a la pizza, vacío y chorizo para un cumpleaños o un evento de trabajo: contanos cuántas personas y en qué zona, y te ayudamos a consultar un servicio de asado en Gran Asunción.',
  waMessage:'Hola, quiero consultar por un asado con matambre para un evento.'
};
