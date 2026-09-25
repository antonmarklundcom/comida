// Meat cut module: tapa de asado. Shape: see plan/prompts/CONTENT-WRITER.md, Guide and cut fields.
export default {
  id:'corte-tapa-de-asado', slug:'tapa-de-asado', kind:'cut', animal:'Vacuno',
  published:true, indexable:true, updatedAt:'2026-09-24', verifiedAt:'2026-09-24',
  source:'Guía de la redacción de comida.com.py, basada en la práctica de carnicería y parrilla del Río de la Plata y de Paraguay',
  label:'Tapa de asado',
  seoTitle:'Tapa de asado: qué es y cómo cocinarla',
  meta:'Tapa de asado: qué parte de la vaca es, por qué no se hace como un bife, cómo cocinarla a la parrilla, al horno o en la olla, y cuánto rinde.',
  h1:'Tapa de asado: qué es y cómo cocinarla para que quede tierna',
  cardText:'La capa de carne que cubre las costillas: sabrosa y de cocción lenta.',
  category:['carne','horno','fiesta'],
  keywords:['tapa de asado'],

  image:86,
  intro:[
    'La tapa de asado es la capa de carne que cubre por fuera las costillas delanteras del vacuno. Es un corte plano, con fibras largas, vetas de grasa y una membrana de un lado. Tiene muchísimo sabor, pero no es tierna de entrada: si la tratás como un bife, queda dura.',
    'Bien llevada, en cambio, es de las carnes más ricas y rendidoras de la carnicería. Acá te contamos de dónde sale, cómo limpiarla, tres formas de cocinarla con tiempos y señales, cuánto comprar y qué tener en cuenta con el precio.'
  ],
  facts:[
    ['Animal','Vacuno'],
    ['Zona del animal','Capa externa sobre las costillas delanteras, por encima del asado de tira'],
    ['Otros nombres','No tiene otro nombre muy difundido; el recorte varía según la carnicería'],
    ['Mejor cocción','Horno tapado, olla o parrilla lenta'],
    ['Por persona','250 a 300 g crudos si es la única carne (estimación)']
  ],
  estimate:'Las cantidades por persona de esta página son estimaciones de la redacción; ajustalas según cuánta gente come y qué más se sirve.',
  sections:[
    {id:'que-es', title:'Qué es la tapa de asado', paragraphs:[
      'Si imaginás el costillar del vacuno, el asado de tira son los huesos cortados con la carne que tienen entre ellos. Por encima de esas costillas, en la parte delantera, hay una capa de músculo que las cubre como una tapa: por eso el nombre. Cuando el carnicero la separa del hueso, queda una pieza plana y rectangular, de dos a cuatro centímetros de espesor.',
      'Ese músculo trabaja, así que tiene fibra larga y tejido conectivo. A la vez, está rodeado de grasa, lo que lo hace jugoso y sabroso cuando se le da el tiempo necesario. Es un corte que agradece la paciencia más que el fuego fuerte.'
    ]},
    {id:'como-elegir', title:'Cómo elegirla y limpiarla', items:[
      'Buscá una pieza de espesor parejo, con vetas de grasa en la carne y una capa de grasa exterior no muy gruesa.',
      'De un lado suele tener una membrana brillante. Para horno y olla podés dejarla; para parrilla conviene hacerle cortes o retirarla, porque se encoge y arquea la pieza.',
      'Si viene con restos de hueso o cartílago en un borde, sacalos antes de cocinar.',
      'Para la parrilla, elegí una pieza entera; para la olla, podés pedirla ya cortada en trozos grandes.'
    ]},
    {id:'al-horno', title:'Tapa de asado al horno', paragraphs:[
      'Al horno es donde mejor se luce en casa. La clave es cocinarla tapada, con algo de líquido, para que el vapor ablande las fibras, y recién al final destaparla para dorarla.'
    ], steps:[
      'Salpimentá la tapa y frotala con ajo, pimentón y un poco de aceite. Si podés, dejala así en la heladera desde la noche anterior.',
      'Cubrí el fondo de una asadera con cebolla y locote en tiras. Poné la carne encima, con la grasa hacia arriba, y agregá un vaso de caldo o de agua con un chorrito de vino.',
      'Tapá bien con papel aluminio y horneá a 160 °C entre 2 y 2 horas y media para una pieza de 1,5 kilos.',
      'Destapá, subí el horno a 200 °C y seguí unos 20 a 25 minutos, hasta que la grasa esté dorada.',
      'Probá con un tenedor: tiene que entrar sin esfuerzo. Si todavía ofrece resistencia, tapá otra vez y seguí 20 minutos más.',
      'Dejala reposar 10 minutos y cortala en fetas contra la fibra, bañadas con el jugo de la asadera.'
    ]},
    {id:'parrilla', title:'Tapa de asado a la parrilla', paragraphs:[
      'En la parrilla va a fuego bajo y por bastante tiempo, parecido a un asado de tira grueso. Poné la pieza entera, con la grasa hacia abajo primero, lejos de las brasas, y cociná unos 45 minutos de ese lado. Después dala vuelta y seguí otros 40 a 50 minutos, reponiendo brasas para mantener un calor parejo.',
      'Hay quienes la envuelven en papel aluminio la primera hora, con algo de cebolla y sal, y la terminan directo sobre la parrilla para dorar. Es una buena forma de asegurarse de que quede tierna. Al servir, cortala siempre fina y contra la fibra: con este corte, la dirección del cuchillo hace una gran diferencia.'
    ]},
    {id:'olla', title:'En la olla', paragraphs:[
      'Cortada en trozos grandes, dorada y cocida con verduras, tomate y caldo a fuego suave durante dos horas a dos horas y media, la tapa de asado da una carne a la olla muy sabrosa. La grasa que suelta se integra a la salsa, así que conviene desgrasar un poco la superficie antes de servir. También sirve para desmechar y usar en empanadas o sándwiches.'
    ], table:{caption:'Tiempos orientativos para una tapa de asado de 1,5 kilos', head:['Método','Temperatura o fuego','Tiempo','Cómo saber que está'], rows:[
      ['Horno tapado','160 °C, luego 200 °C destapada','2 h 20 a 2 h 55','El tenedor entra sin esfuerzo'],
      ['Parrilla','Fuego bajo, pieza entera','1 h 25 a 1 h 35','Tierna al pinchar, dorada'],
      ['Olla','Fuego suave, con líquido','2 h a 2 h 30','Se deshace al apretar'],
      ['Olla a presión','Desde que toma presión','45 a 55 min','Se desmecha fácil']
    ], note:'Son referencias de la redacción; el grosor de la pieza y el calor real de tu fuego u horno las cambian.'}},
    {id:'cuanto-comprar', title:'Cuánto comprar por persona', paragraphs:[
      'Como estimación, entre 250 y 300 gramos crudos por adulto si la tapa de asado es la única carne, porque pierde grasa y agua en la cocción larga. En un asado con varios cortes, con 120 a 150 gramos por persona alcanza. Para sumar todo el asado, usá la guía de cuánta carne por persona.'
    ]},
    {id:'precio', title:'Qué cambia el precio de la tapa de asado', paragraphs:[
      'La tapa de asado suele estar entre los cortes de precio medio, más barata que los bifes y los cortes traseros de parrilla. El precio por kilo cambia según cuánta grasa exterior y membrana traiga, si está limpia de hueso y cartílago, si viene al vacío y según la categoría del animal. En temporada de asados, como todos los cortes de parrilla, se busca más.'
    ]}
  ],
  recipes:['receta-asado-de-tira-a-la-parrilla','receta-asado-a-la-olla','receta-estofado-de-carne','receta-empanadas-de-carne','receta-sopa-paraguaya'],
  related:['corte-marucha','corte-aguja','corte-costilla-de-vaca','corte-matambre','guia-cuanta-carne-por-persona','guia-cortes-de-carne-vacuna'],
  faq:[
    ['¿Qué parte de la vaca es la tapa de asado?','Es la capa de carne que cubre por fuera las costillas delanteras, por encima del asado de tira. Se separa del hueso y queda como una pieza plana.'],
    ['¿Cómo se cocina la tapa de asado para que quede tierna?','Con cocción lenta: al horno tapado a 160 °C unas dos horas y media, en la olla a fuego suave o a la parrilla a fuego bajo durante más de una hora.'],
    ['¿Cuánto tarda la tapa de asado al horno?','Una pieza de 1,5 kilos lleva entre 2 y 2 horas y media tapada a 160 °C, y después unos 20 minutos destapada a 200 °C para dorar.'],
    ['¿La tapa de asado se puede hacer a la parrilla?','Sí, a fuego bajo y con paciencia: unos 45 minutos de cada lado. Algunos la envuelven en papel aluminio la primera hora para que quede más tierna.'],
    ['¿La tapa de asado es lo mismo que el asado de tira?','No. El asado de tira son las costillas cortadas con su carne; la tapa de asado es la capa de músculo que las cubre por fuera, sin hueso.'],
    ['¿Por qué la tapa de asado queda dura?','Porque se cocinó rápido o a fuego fuerte. Tiene fibra larga y tejido que solo se ablandan con cocción lenta. También hay que cortarla contra la fibra.']
  ],
  ctaTitle:'Asado completo para tu evento',
  ctaText:'¿Querés un asado con varios cortes, sopa y mandioca para un cumpleaños o la fiesta de fin de año? Contanos la fecha, el lugar y cuántos invitados tenés, y te ayudamos a consultar un servicio de asado.',
  waMessage:'Hola, quiero consultar por un asado completo para un evento.'
};
