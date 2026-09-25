// Meat cut module: costilla de vaca / asado de tira. Shape: see plan/prompts/CONTENT-WRITER.md, Guide and cut fields.
export default {
  id:'corte-costilla-de-vaca', slug:'costilla-de-vaca', kind:'cut', order:12, animal:'Vacuno',
  published:true, indexable:true, updatedAt:'2026-09-24', verifiedAt:'2026-09-24',
  source:'Guía de la redacción de comida.com.py, basada en la práctica de carnicería y parrilla del Río de la Plata',
  label:'Costilla de vaca',
  seoTitle:'Costilla de vaca y asado de tira',
  meta:'Costilla de vaca para asado: tira, costillar entero y banderita, cómo pedirla al carnicero, tiempos a la parrilla, cuánto comprar y qué cambia el precio.',
  h1:'Costilla de vaca: asado de tira, costillar entero y cómo hacerlos a la parrilla',
  cardText:'La costilla vacuna, en tira o entera: el corte que no falta en el asado.',
  category:['carne','fiesta'],
  keywords:['costilla de vaca','costilla vacuna','asado de tira','carne para asado','costillar de novillo','costilla a la parrilla'],
  image:86,
  intro:[
    'La costilla de vaca es la base de casi cualquier asado paraguayo. Se vende de varias maneras: el costillar entero, en tiras cortadas a lo ancho de los huesos, que es el asado de tira, o en bloques más chicos. Tiene hueso, grasa entre las fibras y bastante colágeno, así que gana sabor con fuego suave y paciencia.',
    'Acá vas a ver cómo se llaman las distintas presentaciones, qué pedirle al carnicero según tu parrilla, cuánto tarda cada una, cuánta costilla calcular por persona y qué hace que dos costillas del mismo mostrador tengan precios distintos.'
  ],
  facts:[
    ['Animal','Vacuno'],
    ['Zona del animal','Caja torácica, desde la zona del lomo alto hasta el pecho'],
    ['Otros nombres','Costilla vacuna, costillar, asado de tira, tira de asado, banderita; costela en Brasil'],
    ['Mejor cocción','Parrilla a fuego suave; también horno lento y olla'],
    ['Por persona','400 a 500 g crudos con hueso si es la carne principal (estimación)']
  ],
  estimate:'Los gramos por persona son estimaciones de la redacción que cuentan el peso del hueso: ajustalos según el apetito y los otros cortes del asado.',
  sections:[
    {id:'que-es', title:'Qué es la costilla de vaca y cómo se vende', paragraphs:[
      'Las costillas vacunas forman la caja torácica del animal. Entre hueso y hueso hay carne intercostal, y por encima una capa de músculo y grasa que, bien cocida, se vuelve jugosa y con mucho sabor. De esa misma zona sale el matambre, la lámina que el carnicero separa antes de trozar el costillar.',
      'La forma en que se corta cambia el nombre y el tiempo de cocción. Conviene conocer las tres presentaciones más comunes antes de ir a la carnicería, porque el mismo pedido de costilla puede terminar en piezas muy diferentes.'
    ], cards:[
      ['Asado de tira','Tiras de 3 a 5 cm de ancho cortadas con sierra, de modo que cada tira lleva varios trocitos de hueso. Es la forma más rápida de hacer costilla en la parrilla.'],
      ['Costillar entero','La plancha completa de costillas, a veces partida al medio. Se cocina lento, con el hueso hacia el fuego, y se corta entre hueso y hueso al servir.'],
      ['Banderita','Costillas cortadas en bloques, con los huesos a lo largo. Tiene más carne por hueso que la tira y pide un poco más de tiempo.']
    ]},
    {id:'carne-para-asado', title:'Carne para asado: dónde entra la costilla', paragraphs:[
      'Cuando alguien busca carne para asado, casi siempre arma la compra alrededor de la costilla, porque rinde, aguanta bien la brasa y le gusta a casi todos. Alrededor se suman un corte sin hueso y más tierno, como vacío, picaña o entraña, y los embutidos para la previa.',
      'Una combinación práctica para una parrilla de casa es mitad costilla y mitad cortes sin hueso. La costilla entra primero porque tarda más; los cortes rápidos se ponen cuando la costilla ya va por la mitad. Así todo llega a la mesa en un par de tandas, sin que nada espere enfriándose.'
    ]},
    {id:'como-pedirla', title:'Cómo pedirla al carnicero', paragraphs:[
      'La costilla cambia mucho de una zona a otra del costillar. La parte cercana al lomo tiene más carne y menos grasa; la del pecho es más grasosa y con huesos más planos. Si tenés preferencia, decila: el carnicero puede elegir la zona antes de pasar la sierra.'
    ], items:[
      'Para asado de tira, pedí tiras de unos cuatro dedos de ancho: más finas se secan rápido y más anchas tardan mucho.',
      'Si querés costillar entero, preguntá si viene con o sin matambre; sin él, la carne queda más expuesta y conviene cuidarla del fuego.',
      'Mirá que la grasa sea blanca o apenas cremosa y que la carne tenga color rojo parejo, sin bordes secos.',
      'Pedí que te saquen las astillas de hueso que deja la sierra: se limpian con un paño o bajo la canilla antes de salar.',
      'Si comprás costilla de novillo, suele ser más tierna que la de vaca adulta, que tiene más sabor pero pide más tiempo.'
    ]},
    {id:'parrilla', title:'Costilla a la parrilla, paso a paso', paragraphs:[
      'La regla de la costilla es simple: primero el hueso, después la carne. El hueso funciona como escudo y deja que el calor entre de a poco. Dar vuelta la pieza una sola vez es suficiente si el fuego está bien regulado.'
    ], steps:[
      'Sacá la costilla de la heladera un rato antes y salala con sal gruesa del lado del hueso y de la carne.',
      'Armá brasas para fuego suave a medio y ubicá la parrilla alta. Tenés que poder aguantar la mano encima unos ocho o diez segundos.',
      'Poné la costilla con el hueso hacia abajo. Asado de tira: unos 25 a 35 minutos. Costillar entero: una hora a hora y media, agregando brasas por los costados.',
      'Cuando el hueso se vea dorado y la carne de arriba empiece a transpirar jugo, dala vuelta.',
      'Terminá del lado de la carne: 10 a 15 minutos para la tira y 30 a 45 minutos para el costillar entero, hasta que la grasa quede dorada.',
      'Dejá reposar unos minutos y cortá entre hueso y hueso, o en porciones de dos o tres huesos si es tira.'
    ]},
    {id:'tiempos', title:'Tiempos por presentación', table:{caption:'Tiempos orientativos a fuego suave o medio', head:['Presentación','Lado del hueso','Lado de la carne','Señal de que está'], rows:[
      ['Asado de tira (4 dedos)','25 a 35 min','10 a 15 min','La carne se separa del hueso al apretar'],
      ['Banderita','40 a 50 min','15 a 20 min','Grasa dorada y jugo claro'],
      ['Costillar entero','1 a 1 ½ h','30 a 45 min','Los huesos se mueven un poco al tomarlos'],
      ['Costilla al horno','160 °C tapada 2 h','Destapada 30 min más','Carne tierna que se despega del hueso']
    ], note:'Los tiempos dependen del grosor, de la grasa y de cómo se mantiene la brasa. Tomalos como punto de partida y confiá en las señales.'}},
    {id:'cuanto-comprar', title:'Cuánta costilla comprar por persona', paragraphs:[
      'Como estimación de la redacción, si la costilla es la carne principal contá entre 400 y 500 gramos crudos con hueso por adulto. El hueso y la grasa que se derrite hacen que el peso servido sea bastante menor. Si hay otros dos o tres cortes, alcanzan unos 250 gramos de costilla por persona.',
      'Para una reunión de diez adultos con costilla, vacío y chorizo, unos 2,5 kilos de asado de tira suelen alcanzar. La guía de cuánta carne por persona tiene una calculadora para armar la compra completa con carbón incluido.'
    ]},
    {id:'errores', title:'Errores que dejan dura la costilla', items:[
      'Empezar con fuego fuerte: la superficie se quema y el centro queda correoso.',
      'Darla vuelta muchas veces: pierde jugo y el hueso nunca termina de calentar la carne.',
      'Poner la tira del lado de la carne primero: se reseca antes de que el hueso haga su trabajo.',
      'Sacarla apenas dorada: la costilla necesita tiempo para que el colágeno se ablande, aunque por fuera ya se vea lista.',
      'No limpiar el polvillo de hueso de la sierra: queda arenoso al morder.'
    ]},
    {id:'precio', title:'Qué cambia el precio de la costilla vacuna', paragraphs:[
      'El precio depende de la zona del costillar, porque la parte de más carne vale más que la del pecho, y de la proporción de hueso y grasa que trae cada pieza. La categoría del animal también cuenta: la costilla de novillo suele cotizarse distinto que la de vaca, y una costilla madurada o envasada al vacío tiene otro valor que la cortada en el mostrador.',
      'Para comparar bien, mirá cuánto hueso y grasa trae cada kilo, no solo el número del cartel. Antes de las fiestas y de los fines de semana largos la demanda de costilla sube mucho, así que encargarla con unos días de anticipación ayuda a conseguir el corte que querés.'
    ]},
    {id:'recetas', title:'Recetas y acompañamientos', paragraphs:[
      'La receta de asado de tira a la parrilla del sitio desarrolla el método con cantidades y tiempos. En la mesa, la costilla va bien con sopa paraguaya, chipa guazú, mandioca hervida y una ensalada de papa. Si te sobra, desmenuzada sirve para rellenar empanadas o para un guiso al día siguiente.'
    ]}
  ],
  recipes:['receta-asado-de-tira-a-la-parrilla','receta-sopa-paraguaya','receta-chipa-guazu','receta-ensalada-de-papa','receta-asado-a-la-olla'],
  related:['guia-cuanta-carne-por-persona','guia-asado-a-la-parrilla','guia-cortes-de-carne-vacuna','corte-matambre','corte-vacio','corte-tapa-de-asado'],
  faq:[
    ['¿La costilla de vaca y el asado de tira son lo mismo?','El asado de tira es costilla de vaca cortada a lo ancho, en tiras con varios trocitos de hueso. La costilla también se vende entera, como costillar, o en bloques llamados banderita.'],
    ['¿Cuánto tarda el asado de tira en la parrilla?','Con tiras de unos cuatro dedos y fuego suave, entre 35 y 50 minutos en total: la mayor parte del tiempo con el hueso hacia abajo y el final del lado de la carne.'],
    ['¿Qué carne comprar para un asado de 10 personas?','Como estimación, unos 2,5 kilos de asado de tira, 1,5 kilos de un corte sin hueso como vacío y un chorizo por persona. Ajustalo si son de buen comer o si hay muchos chicos.'],
    ['¿La costilla vacuna se pone con el hueso para abajo?','Sí. El hueso va primero hacia las brasas porque protege la carne y reparte el calor. Se da vuelta una vez, cuando el hueso está dorado.'],
    ['¿Cómo se hace costilla vacuna al horno?','En asadera tapada con papel de aluminio, a unos 160 °C durante un par de horas, y después destapada media hora para dorar. Así queda tierna y se separa del hueso.'],
    ['¿Por qué la costilla de novillo sale distinta que la de vaca?','El novillo es un animal más joven, con carne más tierna y grasa más clara. La vaca adulta tiene más sabor, pero su costilla necesita más tiempo de cocción.']
  ],
  ctaTitle:'Asado para tu evento',
  ctaText:'¿Querés costilla, vacío y chorizo a la parrilla para un cumpleaños o un evento de la empresa? Pasanos la fecha, el barrio y la cantidad de invitados, y te ayudamos a consultar un servicio de asado en Gran Asunción.',
  waMessage:'Hola, quiero consultar por un asado con costilla para un evento.'
};
