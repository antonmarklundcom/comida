// Meat cut module: entraña. Shape: see plan/prompts/CONTENT-WRITER.md, Guide and cut fields.
export default {
  id:'corte-entrana', slug:'entrana', kind:'cut', order:6, animal:'Vacuno',
  published:true, indexable:true, updatedAt:'2026-09-24', verifiedAt:'2026-09-24',
  source:'Guía de la redacción de comida.com.py, basada en la práctica de carnicería y parrilla del Río de la Plata',
  label:'Entraña',
  seoTitle:'Entraña: qué es y cómo hacerla a la parrilla',
  meta:'Entraña: qué músculo es, cómo elegirla, si se saca o no la membrana, tiempos a fuego fuerte en parrilla y plancha, cuánto comprar y qué cambia su precio.',
  h1:'Entraña: el corte fino y sabroso que se hace en minutos',
  cardText:'La tira fina del diafragma que se hace rápido y a fuego fuerte.',
  category:['carne','fiesta','rapida'],
  keywords:['entraña','entraña a la parrilla','entraña con o sin membrana','skirt steak','entraña precio'],
  intro:[
    'La entraña es el diafragma del vacuno: una tira larga y plana, de fibras gruesas y mucho sabor, cubierta por una membrana fina. Es de los cortes más buscados de la parrilla porque se hace en pocos minutos y tiene un gusto intenso, casi de achura, aunque es músculo.',
    'Tiene sus mañas: la membrana, el fuego y la forma de cortarla deciden si queda tierna o chiclosa. En esta página vas a ver de dónde sale, cómo elegirla, cómo cocinarla en la parrilla y la plancha, cuánto comprar y qué errores conviene evitar.'
  ],
  facts:[
    ['Animal','Vacuno'],
    ['Zona del animal','Diafragma, el músculo que separa el pecho del abdomen, en la cara interna de las costillas'],
    ['Otros nombres','Skirt steak (inglés), diafragma'],
    ['Mejor cocción','Parrilla o plancha, fuego fuerte y poco tiempo'],
    ['Por persona','200 a 250 g crudos si es el corte principal (estimación)']
  ],
  estimate:'Los gramos por persona son una estimación de la redacción; en una parrillada con varios cortes, la entraña suele servirse como entrada y alcanza con menos.',
  sections:[
    {id:'que-es', title:'Qué es la entraña y de dónde sale', paragraphs:[
      'La entraña está del lado de adentro de la caja torácica, pegada a las costillas: es parte del diafragma, el músculo que el animal usa para respirar. Por eso trabaja sin descanso y tiene fibras largas y marcadas, bien visibles a lo largo de la tira. A pesar de eso, bien cocinada y bien cortada resulta tierna.',
      'Cada animal da pocas piezas, y cada una suele pesar entre medio kilo y un kilo. Es fina, de uno a dos centímetros de espesor, con grasa infiltrada entre las fibras y una membrana blanca que la envuelve de un lado. En inglés se la llama skirt steak, un nombre que vas a ver en recetas de otros países.'
    ]},
    {id:'como-elegir', title:'Cómo elegir la entraña', paragraphs:[
      'Buscá una tira de espesor parejo, con fibras rojas bien marcadas y vetas de grasa entre ellas. Es normal que tenga un color un poco más oscuro que un bife. La membrana, si la trae, debe ser blanca y brillante, y la carne no debe tener olor fuerte.'
    ], items:[
      'Preguntá si viene con membrana o pelada; las dos opciones se cocinan distinto.',
      'Si la pieza tiene un extremo muy fino, cortalo aparte y cocinalo menos tiempo.',
      'Para muchas personas, pedí varias tiras de tamaño parecido en lugar de una muy larga y despareja.',
      'Revisá que no tenga zonas secas o amarronadas en los bordes, señal de que estuvo mucho tiempo expuesta.'
    ]},
    {id:'membrana', title:'¿Con membrana o sin membrana?', paragraphs:[
      'Es la gran discusión de la entraña. Con la membrana puesta, la carne queda protegida del fuego fuerte y conserva el jugo; al final la membrana se pone crocante y hay quien la disfruta, aunque para otros resulta dura. Sin membrana, la carne toma contacto directo con el calor, se dora mejor y se come más fácil, pero se pasa más rápido.',
      'Una solución intermedia es cocinarla con la membrana hacia el fuego al principio y retirarla después, en la tabla, tirando con los dedos. Si la pelás en crudo, hacelo despacio con un cuchillo fino para no romper la carne.'
    ]},
    {id:'coccion', title:'Cómo cocinar la entraña: tiempos y punto', paragraphs:[
      'La entraña pide brasa fuerte y atención. Como es fina, la diferencia entre jugosa y seca se mide en un par de minutos. Se disfruta más a punto o jugosa: bien cocida pierde terneza y el sabor se apaga.'
    ], table:{caption:'Tiempos orientativos para una entraña de 1,5 a 2 cm de espesor', head:['Método','Cómo','Tiempo','Señal de que está'], rows:[
      ['Parrilla con membrana','Fuego fuerte, membrana hacia abajo primero','5 a 6 min y 3 a 4 min del otro lado','Membrana crocante, carne rosada'],
      ['Parrilla sin membrana','Fuego fuerte','3 a 4 min por lado','Costra dorada, centro rosado; unos 57 a 60 °C'],
      ['Plancha o sartén','Muy caliente, con apenas aceite','2 a 3 min por lado','Bien dorada afuera'],
      ['Horno','No recomendable: se seca antes de dorarse','—','—']
    ], note:'Los tiempos dependen del grosor real y de la brasa. Si la tira es despareja, poné la parte gruesa en el centro del fuego y la fina en el borde.'}},
    {id:'cortar', title:'Cómo cortar la entraña para que quede tierna', steps:[
      'Dejala reposar dos o tres minutos después de sacarla del fuego.',
      'Mirá la dirección de las fibras: corren a lo ancho de la tira, no a lo largo.',
      'Cortá la tira en tramos de unos diez centímetros.',
      'Girá cada tramo y cortalo en tiras finas, en contra de la fibra.',
      'Serví enseguida, con sal gruesa y, si querés, chimichurri o salsa criolla.'
    ]},
    {id:'cuanto-comprar', title:'Cuánta entraña comprar por persona', paragraphs:[
      'Si la entraña es el plato principal, la estimación de la redacción es de 200 a 250 gramos crudos por adulto. Cuando se sirve como entrada en una parrillada, cortada en tiras sobre una tabla, alcanza con 80 a 100 gramos por persona.',
      'Como es un corte chico y buscado, a veces no hay la cantidad que necesitás: encargala con tiempo si es para una reunión grande. Para el cálculo completo del asado, mirá la guía de cuánta carne por persona.'
    ]},
    {id:'errores', title:'Errores comunes con la entraña', items:[
      'Cocinarla a fuego suave: se hierve en su jugo, no se dora y queda gomosa.',
      'Cortarla en tiras finas a lo ancho de la pieza entera, en el mismo sentido que la fibra: es la forma más segura de que resulte chiclosa.',
      'Dejarla de más en la parrilla mientras se termina el resto del asado: pasa de punto en muy poco tiempo.',
      'Pelarla con apuro y arrancar carne junto con la membrana.',
      'Salarla con mucha anticipación: es fina y la sal la seca en la superficie.'
    ]},
    {id:'precio', title:'Qué cambia el precio de la entraña', paragraphs:[
      'La entraña se volvió un corte caro por una razón simple: hay muy poca en cada animal y la piden muchos. Su precio varía según venga pelada o con membrana, si es entraña fina o una pieza más gruesa, y según la disponibilidad de la semana, que puede ser escasa.',
      'La demanda de exportación también influye en lo que queda para el mostrador local. Si ves entraña a un precio muy por debajo del habitual, revisá bien la pieza: puede estar recortada o con mucho desperdicio.'
    ]},
    {id:'recetas', title:'Cómo aprovecharla en otras recetas', paragraphs:[
      'La entraña se luce en la parrilla y no hay todavía en el sitio una receta que la tenga como ingrediente principal. Si sobra, cortala en tiras bien finas y usala en un wrap con verduras frescas, como si fuera un salteado, o picala para un relleno de empanadas. En la mesa de asado va perfecta con mandioca y sopa paraguaya.'
    ]}
  ],
  recipes:['receta-sopa-paraguaya','receta-empanadas-de-carne','receta-wrap-de-pollo'],
  related:['guia-cuanta-carne-por-persona','corte-vacio','corte-matambre','corte-picana'],
  faq:[
    ['¿Qué parte de la vaca es la entraña?','Es el diafragma, el músculo que separa el pecho del abdomen. Está del lado interno de las costillas.'],
    ['¿La entraña se cocina con o sin membrana?','Las dos formas son válidas. Con membrana queda más jugosa y protegida del fuego; sin membrana se dora mejor y es más fácil de comer. Podés cocinarla con membrana y retirarla al final.'],
    ['¿Cuánto tiempo se hace la entraña a la parrilla?','Con fuego fuerte, unos tres a cuatro minutos por lado si está pelada, y un poco más del lado de la membrana si la tiene.'],
    ['¿Por qué la entraña quedó dura?','Por cortarla siguiendo la fibra, por cocinarla de más o por fuego demasiado suave. Cortala en tiras finas contra la fibra y retirala a punto.'],
    ['¿Es lo mismo entraña que vacío?','No. La entraña es el diafragma, del lado interno de las costillas. El vacío es la pared del abdomen, entre las costillas y la pierna, más grande y con más grasa.'],
    ['¿Cuánta entraña para 8 personas?','Como estimación, unos 1,6 a 2 kilos si es la carne principal, o alrededor de 700 gramos si la servís como entrada en una parrillada.']
  ],
  ctaTitle:'Asado para tu evento',
  ctaText:'Con muchos invitados, la entraña se pasa mientras atendés otra cosa. Un servicio de asado se encarga del fuego y los tiempos. Contanos fecha, zona y cantidad de personas, y te ayudamos a consultar en Gran Asunción.',
  waMessage:'Hola, quiero consultar por un servicio de asado para mi evento.'
};
