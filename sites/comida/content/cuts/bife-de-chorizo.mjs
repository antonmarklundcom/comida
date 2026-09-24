// Meat cut module: bife de chorizo. Shape: see plan/prompts/CONTENT-WRITER.md, Guide and cut fields.
export default {
  id:'corte-bife-de-chorizo', slug:'bife-de-chorizo', kind:'cut', order:5, animal:'Vacuno',
  published:true, indexable:true, updatedAt:'2026-09-24', verifiedAt:'2026-09-24',
  source:'Guía de la redacción de comida.com.py, basada en la práctica de carnicería y parrilla del Río de la Plata',
  label:'Bife de chorizo',
  seoTitle:'Bife de chorizo: qué es y cómo hacerlo',
  meta:'Bife de chorizo: de qué parte sale, qué grosor pedir, tiempos a la parrilla y la plancha para cada punto, cuánto comprar por persona y errores comunes.',
  h1:'Bife de chorizo: el bife grueso con su borde de grasa',
  cardText:'El bife alto con borde de grasa que se pide jugoso en la parrilla.',
  category:['carne','fiesta'],
  keywords:['bife de chorizo','bife de chorizo a la parrilla','contrafilé','bife angosto','bife de chorizo mariposa'],
  intro:[
    'El bife de chorizo es un bife grueso, sin hueso, sacado del bife angosto: la parte de atrás del lomo del vacuno, pegada a la columna. Tiene carne firme pero tierna, un sabor marcado y una franja de grasa en uno de sus lados que se dora en la brasa.',
    'Es el corte que muchos piden en la parrilla cuando quieren un bife solo en el plato. Acá te contamos qué es exactamente, cómo elegirlo, qué grosor conviene, cuánto tiempo darle en la parrilla o en la plancha para cada punto, cuánto comprar y cuáles son los errores típicos.'
  ],
  facts:[
    ['Animal','Vacuno'],
    ['Zona del animal','Bife angosto: zona lumbar, detrás de las costillas y sobre el lomo'],
    ['Otros nombres','Contrafilé (Brasil), bife angosto, striploin o New York (inglés)'],
    ['Mejor cocción','Parrilla o plancha a fuego fuerte'],
    ['Por persona','300 a 350 g, un bife grueso (estimación)']
  ],
  estimate:'El peso por persona es una estimación de la redacción pensada para un bife como plato principal; con más cortes en la mesa, alcanza con menos.',
  sections:[
    {id:'que-es', title:'Qué es el bife de chorizo', paragraphs:[
      'En la media res, el lomo exterior se divide en dos zonas: el bife ancho, sobre las costillas delanteras, y el bife angosto, más atrás, en la región lumbar. El bife de chorizo sale de ese bife angosto, deshuesado y cortado en rodajas gruesas. Debajo está el lomo, el músculo más tierno del animal; si el bife se corta con hueso y con un poco de lomo, se acerca al T-bone.',
      'Sobre el origen del nombre hay varias versiones populares y ninguna comprobada: una habla de la forma alargada de la pieza entera, otra de la costumbre de asarlo junto a los chorizos. Lo seguro es que en el Río de la Plata es sinónimo de bife de parrilla, y en Brasil la misma pieza se vende como contrafilé.'
    ]},
    {id:'como-elegir', title:'Cómo elegir el bife de chorizo', paragraphs:[
      'Lo más importante es el grosor. Un bife de chorizo de verdad se corta alto, de tres a cuatro centímetros, para que se dore por fuera y quede jugoso adentro. Los bifes de un centímetro se pasan antes de tomar color. Pedile al carnicero que te lo corte en el momento a esa medida.'
    ], items:[
      'Buscá carne roja brillante con algunas vetas finas de grasa: el marmoleado suma jugosidad.',
      'La franja de grasa del borde tiene que ser blanca o cremosa y de un dedo como máximo.',
      'Evitá los bifes con un nervio grueso atravesado en el centro, que corresponden al extremo de la pieza.',
      'Si vas a comprar para varios, pedí los bifes de la parte central de la pieza, que son más parejos.'
    ]},
    {id:'coccion', title:'Cómo hacer el bife de chorizo: tiempos por punto', paragraphs:[
      'Es un corte para calor fuerte y cocción corta. Una buena señal de temperatura en la parrilla es poder mantener la mano sobre la rejilla solo tres o cuatro segundos. Se sala justo antes de ponerlo o apenas se da vuelta, y se gira una sola vez.'
    ], table:{caption:'Tiempos orientativos para un bife de 3 a 4 cm', head:['Punto','Temperatura en el centro','Parrilla (por lado)','Cómo se ve al cortar'], rows:[
      ['Jugoso','54 a 57 °C','4 a 5 min','Centro rojo brillante, bordes rosados'],
      ['A punto','60 a 63 °C','6 a 7 min','Rosado parejo, jugo abundante'],
      ['Cocido','70 °C o más','9 a 10 min, con fuego más suave','Sin rosado, jugo claro'],
      ['En plancha, jugoso','54 a 57 °C','3 a 4 min por lado en bifes de 2,5 cm','Costra oscura y centro rojo']
    ], note:'Si querés un bife bien cocido sin que se seque, cortalo en mariposa: se abre al medio a lo largo y se cocina más rápido y parejo.'}},
    {id:'paso-a-paso', title:'Bife de chorizo a la parrilla, paso a paso', steps:[
      'Sacá los bifes de la heladera 20 a 30 minutos antes y secalos con papel.',
      'Hacé dos o tres cortes en la grasa del borde para que el bife no se curve al calentarse.',
      'Con la parrilla bien caliente, poné los bifes y no los muevas hasta que se despeguen solos.',
      'Cuando aparezcan gotitas de jugo en la cara de arriba, dalos vuelta y salá del lado cocido.',
      'Al final, apoyalos de canto sobre la franja de grasa un minuto para dorarla.',
      'Dejalos reposar tres o cuatro minutos antes de servir.'
    ]},
    {id:'cuanto-comprar', title:'Cuánto bife de chorizo comprar por persona', paragraphs:[
      'Como estimación de la redacción, si cada uno come su bife, contá entre 300 y 350 gramos por adulto, que es más o menos un bife de tres centímetros. En un asado con varios cortes, un bife grueso cortado en tiras alcanza para dos personas.',
      'Si el grupo es grande, comprar la pieza entera de bife angosto y cortarla en casa puede ser más cómodo. Para el cálculo general de un asado, consultá la guía de cuánta carne por persona.'
    ]},
    {id:'errores', title:'Errores comunes con el bife de chorizo', items:[
      'Comprarlo fino: pierde toda la gracia y termina gris de punta a punta.',
      'Darlo vuelta muchas veces: no llega a formar costra y se cocina desparejo.',
      'Salarlo mucho tiempo antes sin dejarlo secar: la sal saca humedad a la superficie y el bife se hierve en lugar de dorarse.',
      'Aplastarlo con la pinza o el tenedor para que se haga rápido: sale el jugo y se seca.',
      'Retirarle la grasa del borde antes de cocinarlo: protege la carne y le da sabor; se puede dejar en el plato.'
    ]},
    {id:'precio', title:'Qué hace variar el precio del bife de chorizo', paragraphs:[
      'Es un corte de primera, y su precio depende mucho de la calidad del animal: raza, edad y alimentación cambian el marmoleado y la terneza. Un bife de novillo joven con buen veteado cuesta más que uno de vaca con carne más firme.',
      'También influye la forma de compra: la pieza entera de bife angosto suele salir más barata por kilo que los bifes ya cortados y porcionados, y la carne madurada al vacío durante varios días se paga aparte.'
    ]},
    {id:'recetas', title:'Con qué servirlo', paragraphs:[
      'El bife de chorizo no necesita receta: sal gruesa, brasa y reposo. En el sitio no hay una receta que lo use como ingrediente, pero combina muy bien con una ensalada fresca, papas o mandioca hervida y sopa paraguaya. Las sobras, cortadas en tiras finas, rinden en una ensalada con hojas verdes o en un sándwich con pan casero.'
    ]}
  ],
  recipes:['receta-sopa-paraguaya','receta-ensalada-cesar','receta-pan-casero'],
  related:['guia-cuanta-carne-por-persona','corte-ojo-de-bife','corte-picana','corte-entrana'],
  faq:[
    ['¿Qué corte es el bife de chorizo?','Es un bife sin hueso cortado del bife angosto, la parte trasera del lomo exterior del vacuno, detrás de las costillas.'],
    ['¿Qué diferencia hay entre bife de chorizo y ojo de bife?','El bife de chorizo sale del bife angosto, más atrás, y tiene la grasa en un borde. El ojo de bife sale del bife ancho, sobre las costillas, y tiene más grasa infiltrada en el centro.'],
    ['¿Cuánto tiempo se cocina un bife de chorizo a la parrilla?','Para un bife de tres a cuatro centímetros, unos cuatro a cinco minutos por lado para jugoso y seis a siete para a punto, con la parrilla bien caliente.'],
    ['¿Qué grosor tiene que tener el bife de chorizo?','Lo ideal es de tres a cuatro centímetros. Más fino se pasa antes de dorarse.'],
    ['¿Qué es el bife de chorizo mariposa?','Es un bife grueso abierto al medio a lo largo, como un libro. Queda más fino, se cocina más rápido y es práctico para quienes lo prefieren cocido.'],
    ['¿Cómo se llama el bife de chorizo en Brasil?','Contrafilé. En inglés se lo conoce como striploin o New York.']
  ],
  ctaTitle:'Asado para tu evento',
  ctaText:'Servir bifes al punto que pide cada invitado es difícil cuando la mesa es larga. Contanos cuántas personas esperás y en qué zona, y te ayudamos a consultar un parrillero o un servicio de asado para tu evento.',
  waMessage:'Hola, quiero consultar por un parrillero para un evento.'
};
