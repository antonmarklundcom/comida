import menus from './menus.mjs';
import faq from './faq.mjs';
const additions = [
 {slug:'eventos-empresariales',image:5,h1:'Catering empresarial para acompañar tu agenda',
 intro:['Una reunión con clientes y una jornada de capacitación tienen ritmos diferentes. Contanos el programa, la cantidad de asistentes y el tiempo disponible para comer sin interrumpir las actividades.','Definí quién aprueba la propuesta y qué necesita administración para contratar. Así podés consultar un servicio de lunch para eventos o una comida completa con el alcance documentado.'],
 formats:[['Lunch de trabajo','Bandejas para compartir durante una reunión breve, con alimentos fáciles de servir y retirar sin ocupar toda la mesa de trabajo.'],['Almuerzo corporativo','Un buffet permite organizar turnos por equipo; el menú servido requiere una pausa común y lugares asignados para todos los asistentes.'],['Recepción institucional','El bandejeo acompaña conversaciones de pie. Prevé un sector de apoyo alejado del escenario y recorridos despejados para el personal.']],
 includes:['Cronograma de entrega, pausa y retiro aprobado por la empresa.','Listado de platos y alternativas para asistentes con otras preferencias.','Personal, vajilla y mesas auxiliares detallados en la propuesta.','Café, agua y bebidas especificados según la duración de la jornada.','Datos de facturación y condiciones de pago del proveedor.'],
 related:['occ-coffee-break','occ-fin-de-ano','occ-bocaditos','city-asuncion'],waMessage:'Hola, ¿me ayudás a organizar el catering de un evento empresarial?'},
 {slug:'fin-de-ano',image:6,h1:'Catering de fin de año para reunir a tu equipo',
 intro:['La despedida del año combina comida, brindis y momentos de reconocimiento. Elegí si imaginás una cena formal o un encuentro distendido y contanos la fecha tentativa antes de definir el menú.','Para una celebración de empresa, revisá turnos de trabajo y horario de llegada. El catering debe contemplar a quienes se incorporan después y el momento en que comienza la fiesta.'],
 formats:[['Cena de cierre','Platos servidos con una pausa prevista para discursos y reconocimientos. Coordiná la salida del principal para que no coincida con el brindis.'],['Estaciones festivas','Islas de comida distribuidas por el salón para que los equipos circulen. Consultá cuántas pueden atenderse al mismo tiempo y cómo se reponen.'],['Encuentro en quincho','Parrilla y guarniciones para una despedida informal. Acordá sombra, ventilación y conservación de los alimentos si la celebración empieza de día.']],
 includes:['Recepción y comida central separadas en el cronograma.','Reposición durante los horarios acordados para cada turno.','Copas, hielo y atención del brindis según lo contratado.','Montaje compatible con escenario, música y entrega de reconocimientos.','Retiro del equipamiento y condiciones por extensión de horario.'],
 related:['occ-eventos-empresariales','occ-bocaditos','occ-cumpleanos','city-asuncion'],waMessage:'Hola, ¿me ayudás a consultar catering para nuestra celebración de fin de año?'},
 {slug:'15-anos',image:8,h1:'Catering para 15 años al ritmo de la fiesta',
 intro:['En una fiesta de quince, la recepción, la entrada y el baile marcan cuándo servir. Contanos cómo se distribuyen los invitados jóvenes y adultos para pensar opciones que acompañen cada momento.','Elegí con la cumpleañera los platos que le gustan y revisá el programa con el salón. La comida puede organizarse en mesas, estaciones o pasadas sin cortar las actividades principales.'],
 formats:[['Estaciones juveniles','Mini hamburguesas o pastas preparadas para servir por tandas. Definí dónde se forman las filas y quién acompaña la reposición.'],['Cena para las mesas','Un principal servido facilita que familiares y adultos coman sentados. Acordá con la coordinación de la fiesta cuándo retirar los platos.'],['Bandejeo entre momentos','Bocados pequeños para la bienvenida y una pasada posterior al baile. Separá ambos servicios en la propuesta para conocer su duración.']],
 includes:['Menú juvenil y alternativas para las mesas de adultos.','Horarios coordinados con entrada, fotos y baile.','Vajilla adecuada para cada estación y personal de atención.','Bebidas sin alcohol y reposición a consultar expresamente.','Servicio de torta y mesa dulce definido con quien los provea.'],
 related:['occ-cumpleanos','occ-bocaditos','occ-bodas','city-asuncion'],waMessage:'Hola, ¿me ayudás a preparar una consulta de catering para una fiesta de 15 años?'},
 {slug:'coffee-break',image:26,h1:'Coffee break para una pausa bien organizada',
 intro:['La pausa de una capacitación necesita ser fácil de encontrar y rápida de servir. Indicá cuántas personas salen al mismo tiempo, cuánto dura el intervalo y dónde se puede instalar la mesa.','Un servicio de mañana puede priorizar café y bocados salados; una pausa de tarde admite otras combinaciones. Contanos si habrá más de un intervalo para distribuir la reposición durante la jornada.'],
 formats:[['Mesa de autoservicio','Termos y bandejas en una estación accesible, con espacio para retirar una taza sin bloquear la salida del auditorio.'],['Pausa con atención','Personal para servir bebidas calientes y mantener el orden de la mesa cuando el intervalo reúne a todos los participantes.'],['Pausas sucesivas','Servicios separados a lo largo del encuentro, con retiro entre bloques. Acordá qué productos se renuevan en cada salida.']],
 includes:['Cantidad de pausas y horario de cada apertura de mesa.','Café, infusiones, agua y acompañamientos elegidos.','Tazas o vasos, cucharitas, servilletas y recipientes de descarte.','Acceso a electricidad y condiciones para equipos de bebidas.','Atención, reposición y limpieza del sector durante el intervalo.'],
 related:['occ-eventos-empresariales','occ-bocaditos','occ-fin-de-ano','city-asuncion'],waMessage:'Hola, ¿me ayudás a cotizar un coffee break para una capacitación?'},
 {slug:'bocaditos',image:27,h1:'Bocaditos salados y dulces para tu recepción',
 intro:['Los bocaditos pueden abrir una celebración o ser la comida principal de un encuentro. Contanos cuál será su función, el horario y la duración para consultar una combinación que tenga sentido para tus invitados.','Si buscás bocaditos por ciento, compará también tamaño, variedad y forma de entrega. Una bandeja para retirar y un servicio de lunch con mozos requieren una organización distinta.'],
 formats:[['Bandejas listas para presentar','Una opción para recibir y disponer la comida por tu cuenta. Preguntá qué preparaciones llegan listas y cuáles necesitan calentarse.'],['Pasadas con mozos','Bocaditos circulando entre los invitados, con una secuencia de fríos y calientes. Coordiná dónde se apoyan las bandejas entre recorridos.'],['Mesa salada y dulce','Variedades agrupadas para elegir de pie. Prevé utensilios por preparación y reposición diferenciada para el cierre dulce.']],
 includes:['Detalle de variedades y cantidad de unidades de cada una.','Tamaño de las piezas y presentación acordada.','Embalaje, bandejas retornables y pautas de conservación.','Calentado, bandejeo y personal cuando formen parte del pedido.','Entrega de dulces separada de las preparaciones calientes.'],
 related:['occ-coffee-break','occ-cumpleanos','occ-eventos-empresariales','city-asuncion'],waMessage:'Hola, ¿me ayudás a elegir bocaditos salados y dulces para una recepción?'},
 {slug:'cumpleanos',image:25,h1:'Catering de cumpleaños para disfrutar con tu gente',
 intro:['Un cumpleaños en casa necesita espacio para conversar, servir y compartir la torta. Decidí si querés una merienda, un almuerzo o una cena y contanos cuántos adultos y chicos van a participar.','Pensá qué tareas querés delegar: cocinar, llevar la comida o atender durante la fiesta. Con esa diferencia clara podés consultar un menú que se adapte al lugar y al estilo del festejo.'],
 formats:[['Almuerzo familiar','Fuentes al centro o buffet para compartir sentados. Revisá el espacio de las mesas y reservá un sector para quienes sirven.'],['Cumpleaños de pie','Picadas y bocados que acompañan la charla sin necesitar cubiertos. Definí si después habrá un plato caliente o solo torta.'],['Merienda de festejo','Opciones saladas y dulces alrededor del horario de la torta. Separá las bebidas calientes del lugar donde juegan los chicos.']],
 includes:['Platos elegidos para adultos y porciones infantiles si las pedís.','Horario de comida y momento de servir la torta.','Platos, cubiertos y elementos para recoger la mesa.','Atención de bebidas y conservación del postre a acordar.','Retiro de fuentes y orden del espacio utilizado por el equipo.'],
 related:['occ-15-anos','occ-bocaditos','occ-bodas','city-asuncion'],waMessage:'Hola, ¿me ayudás a consultar catering para festejar un cumpleaños?'}
].map(p=>({...p,id:'occ-'+p.slug,kind:'occasion',parent:'catering',published:true,indexable:true,updatedAt:'2026-09-19',menus:menus[p.slug],faq:faq[p.slug],sections:[{title:'Formatos para este encuentro',cards:p.formats},{title:'Qué incluye: dejalo detallado en la propuesta',items:p.includes},{title:'Tres menús de ejemplo para conversar',cards:menus[p.slug]}]}));

const boda = {
  "id": "occ-bodas",
  "h1": "Catering para bodas: menús, formatos y presupuesto",
  "image": 7,
  "intro": [
    "La comida de tu casamiento tiene que acompañar la recepción, la cena y la fiesta. Antes de elegir platos, definí cuántos invitados esperás y qué momentos querés cubrir.",
    "Contanos dónde celebrás, la fecha y el estilo de servicio que imaginás. Consultamos disponibilidad para que puedas conversar una propuesta con alcance claro."
  ],
  "sections": [
    {
      "title": "Cómo servir el menú de tu boda",
      "cards": [
        [
          "Recepción con bocaditos",
          "Una bienvenida de pie permite recibir a los invitados mientras llegan. Coordiná el tiempo de bandejeo antes de pasar a la cena."
        ],
        [
          "Buffet de casamiento",
          "Ofrece variedad y un ritmo flexible. Revisá con el salón dónde ubicar las estaciones y cómo circularán los invitados."
        ],
        [
          "Cena servida",
          "Organizá entrada, principal y postre con tiempos acordados. El equipo de salón necesita conocer el programa de la celebración."
        ]
      ]
    },
    {
      "title": "Qué incluye la propuesta de casamiento",
      "items": [
        "Recepción y cena detalladas por separado.",
        "Vajilla, copas, cubiertos y mantelería.",
        "Mozos, coordinación de salón y montaje.",
        "Bebidas, barra o descorche, si corresponde.",
        "Horario de retiro y tratamiento de sobrantes."
      ]
    },
    {
      "title": "Tres menús para imaginar tu celebración",
      "cards": [
        [
          "Clásico de salón",
          "Recepción con chipa y bocaditos, carne con vegetales al horno y postre de frutas. Consultá una alternativa sin carne para el principal."
        ],
        [
          "Cóctel y estaciones",
          "Bocaditos de mandioca, mini sándwiches y una estación caliente, con dulces individuales al cierre. Pensado para una fiesta con movimiento."
        ],
        [
          "Casamiento en quincho",
          "Asado, sopa paraguaya, ensaladas de estación y un postre fresco. Confirmá parrilla, ventilación y un plan de lluvia con el lugar."
        ]
      ]
    },
    {
      "title": "Qué cambia el costo de la boda",
      "paragraphs": [
        "La duración de la fiesta, la cantidad de invitados y los momentos de comida cambian el alcance del catering. Pedí que la cotización aclare prueba de menú, extras, traslado y condiciones de reserva."
      ]
    }
  ],
  "faq": [
    [
      "¿Cuándo conviene consultar el catering de la boda?",
      "Consultá cuando tengas una fecha tentativa y un lugar en vista. En fechas muy solicitadas conviene revisar disponibilidad antes de cerrar otros servicios."
    ],
    [
      "¿Se puede hacer una degustación?",
      "Preguntale al proveedor si ofrece prueba de menú, cómo se organiza y qué condiciones tiene. No todos los servicios la incluyen."
    ],
    [
      "¿Qué pasa si cambia la cantidad de invitados?",
      "Acordá por escrito hasta cuándo podés ajustar la cantidad y cómo se calcula el cambio en la propuesta."
    ],
    [
      "¿El catering coordina con el salón?",
      "Consultá quién coordina el ingreso, la cocina y el montaje. Compartí las reglas del salón antes de confirmar la reserva."
    ],
    [
      "¿Podemos sumar una comida durante la fiesta?",
      "Sí, podés pedir una propuesta para ese momento. Definí horario, porciones y personal necesario para que figure en el alcance."
    ],
    [
      "¿Quién responde por el servicio contratado?",
      "Contratás directamente con el proveedor de la boda. Revisá su identidad, las condiciones de seña y el procedimiento ante cambios o inconvenientes."
    ]
  ],
  "related": [
    "catering",
    "occ-15-anos",
    "occ-fin-de-ano",
    "occ-cumpleanos",
    "city-asuncion"
  ],
  "waMessage": "Hola, estamos organizando nuestra boda. ¿Nos ayudás a consultar el catering?",
  "kind": "occasion",
  "slug": "bodas",
  "parent": "catering",
  "published": true,
  "indexable": true,
  "updatedAt": "2026-09-19",
  "formats": [
    [
      "Recepción con bocaditos",
      "Una bienvenida de pie permite recibir a los invitados mientras llegan. Coordiná el tiempo de bandejeo antes de pasar a la cena."
    ],
    [
      "Buffet de casamiento",
      "Ofrece variedad y un ritmo flexible. Revisá con el salón dónde ubicar las estaciones y cómo circularán los invitados."
    ],
    [
      "Cena servida",
      "Organizá entrada, principal y postre con tiempos acordados. El equipo de salón necesita conocer el programa de la celebración."
    ]
  ],
  "includes": [
    "Recepción y cena detalladas por separado.",
    "Vajilla, copas, cubiertos y mantelería.",
    "Mozos, coordinación de salón y montaje.",
    "Bebidas, barra o descorche, si corresponde.",
    "Horario de retiro y tratamiento de sobrantes."
  ],
  "menus": [
    [
      "Clásico de salón",
      "Recepción con chipa y bocaditos, carne con vegetales al horno y postre de frutas. Consultá una alternativa sin carne para el principal."
    ],
    [
      "Cóctel y estaciones",
      "Bocaditos de mandioca, mini sándwiches y una estación caliente, con dulces individuales al cierre. Pensado para una fiesta con movimiento."
    ],
    [
      "Casamiento en quincho",
      "Asado, sopa paraguaya, ensaladas de estación y un postre fresco. Confirmá parrilla, ventilación y un plan de lluvia con el lugar."
    ]
  ]
};
export default [boda,...additions];
