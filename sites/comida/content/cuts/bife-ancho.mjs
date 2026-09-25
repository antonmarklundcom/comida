// Meat cut module: bife ancho. Shape: see plan/prompts/CONTENT-WRITER.md, Guide and cut fields.
export default {
  id:'corte-bife-ancho', slug:'bife-ancho', kind:'cut', animal:'Vacuno',
  published:true, indexable:true, updatedAt:'2026-09-24', verifiedAt:'2026-09-24',
  source:'Guía de la redacción de comida.com.py, basada en la práctica de carnicería y parrilla del Río de la Plata y de Paraguay',
  label:'Bife ancho',
  seoTitle:'Bife ancho: qué es y cómo prepararlo',
  meta:'Bife ancho: qué parte es, en qué se diferencia del bife angosto, el bife de chorizo y el ojo de bife, cómo prepararlo a la parrilla y qué cambia su precio.',
  h1:'Bife ancho: qué es, cómo se diferencia de los otros bifes y cómo hacerlo',
  cardText:'El bife de las costillas delanteras: con grasa, jugoso y de mucho sabor.',
  category:['carne','fiesta'],
  keywords:['bife ancho','bife ancho que es','bife ancho que parte es','bife ancho y bife angosto','bife ancho como preparar','bife ancho recetas','bife ancho precio','bife angosto'],
  intro:[
    'El bife ancho es el bife de la parte delantera del lomo exterior, sobre las costillas. Tiene más grasa entremezclada que otros bifes, un ojo de carne grande y, a veces, una tapa de grasa y carne que lo rodea. Es jugoso y muy sabroso, y por eso es uno de los preferidos de quienes buscan sabor antes que la carne más magra.',
    'Su nombre se entiende mejor al lado de sus parientes: el bife angosto, el bife de chorizo y el ojo de bife. En esta página te explicamos en qué se diferencian, con una tabla para comparar, cómo prepararlo a la parrilla o en la plancha, cuánto comprar y qué mueve su precio.'
  ],
  facts:[
    ['Animal','Vacuno'],
    ['Zona del animal','Lomo exterior sobre las costillas delanteras, entre la aguja y el bife angosto'],
    ['Otros nombres','Sin hueso y sin tapa es el ojo de bife; ribeye en inglés; con hueso, costilla de bife'],
    ['Mejor cocción','Parrilla o plancha, en bifes de 3 a 4 cm'],
    ['Por persona','300 a 350 g, un bife grueso (estimación)']
  ],
  estimate:'Los gramos por persona de esta página son estimaciones de la redacción: dependen del grosor del bife, del hueso y de lo que acompañe.',
  sections:[
    {id:'que-es', title:'Qué es el bife ancho y qué parte de la vaca es', paragraphs:[
      'A lo largo del lomo del vacuno, por fuera de las costillas, corre un músculo grande que da los bifes. En la parte delantera, sobre las costillas que siguen a la aguja, ese músculo es más ancho y viene acompañado de otros más chicos y de grasa: de ahí sale el bife ancho. Más atrás, en la zona lumbar, el mismo músculo se vuelve más angosto y compacto, y da el bife angosto.',
      'El bife ancho se puede vender con hueso, como un bife de costilla, o sin hueso. Cuando se le quita el hueso y también la tapa que lo rodea, queda solo el centro redondo y marmoleado: ese es el ojo de bife. Así que el ojo de bife es, en realidad, el corazón del bife ancho.'
    ]},
    {id:'comparacion', title:'Bife ancho, bife angosto, bife de chorizo y ojo de bife', paragraphs:[
      'Estos cuatro nombres se mezclan todo el tiempo en las carnicerías y en las cartas de las parrillas. La regla fácil es esta: ancho y angosto hablan de la zona del animal; bife de chorizo y ojo de bife hablan de cómo se recorta cada uno.'
    ], table:{caption:'Comparación de los principales bifes del lomo exterior', head:['Bife','De qué zona sale','Cómo se presenta','Grasa y textura','Mejor para'], rows:[
      ['Bife ancho','Costillas delanteras, después de la aguja','Con o sin hueso, con tapa','Más marmoleado, grasa entre los músculos','Parrilla, quien busca sabor y jugo'],
      ['Ojo de bife','Centro del bife ancho','Sin hueso y sin tapa','Marmoleado, muy tierno','Parrilla o plancha, porciones prolijas'],
      ['Bife angosto','Zona lumbar, detrás de las costillas','Con o sin hueso','Más compacto, borde de grasa a un lado','Parrilla o plancha, fuego fuerte'],
      ['Bife de chorizo','Bife angosto','Sin hueso, en bife alto','Firme y jugoso, grasa en el borde','El clásico de parrilla de restaurante']
    ], note:'La división exacta entre bife ancho y aguja, y la manera de recortar cada bife, cambian según la carnicería.'}, after:['Si querés profundizar en uno de ellos, el sitio tiene páginas propias para el bife de chorizo y para el ojo de bife, con tiempos por punto.']},
    {id:'como-elegir', title:'Cómo elegir un buen bife ancho', items:[
      'Pedilo alto, de 3 a 4 centímetros. Un bife fino se pasa antes de dorarse.',
      'Buscá vetas de grasa finas y repartidas en el ojo de carne: son las que lo hacen jugoso.',
      'La grasa exterior tiene que ser blanca o apenas cremosa, sin partes amarillentas secas.',
      'Si lo querés con hueso, fijate que el hueso esté limpio y el corte sea parejo en todo el bife.'
    ]},
    {id:'como-preparar', title:'Cómo preparar el bife ancho a la parrilla', steps:[
      'Sacá los bifes de la heladera unos 30 minutos antes y secalos con papel.',
      'Prepará brasas para fuego fuerte en un sector y medio en otro. Salá con sal gruesa justo antes de ponerlos.',
      'Marcá los bifes sobre el fuego fuerte unos 4 a 5 minutos, sin moverlos, hasta que se forme costra.',
      'Dalos vuelta una sola vez y seguí otros 4 a 5 minutos. Si tienen hueso o son muy altos, pasalos al sector de fuego medio para terminar.',
      'Para jugoso, buscá unos 55 °C en el centro; a punto, alrededor de 60 °C. Como es un corte con grasa, el punto jugoso o a punto le queda mejor que bien cocido.',
      'Dejalos reposar 3 a 5 minutos y serví entero o cortado en tiras, contra la fibra.'
    ], after:['En la plancha o en sartén de hierro, bien caliente y con apenas aceite, el tiempo es parecido. Aprovechá la grasa que suelta para dorar el borde, apoyando el bife de canto un minuto.']},
    {id:'tiempos', title:'Tiempos por punto', table:{caption:'Bife ancho de 3,5 cm sin hueso, fuego fuerte', head:['Punto','Temperatura en el centro','Tiempo total aproximado'], rows:[
      ['Jugoso','52 a 55 °C','8 a 10 min'],
      ['A punto','58 a 62 °C','10 a 13 min'],
      ['Cocido','68 °C o más','14 a 18 min, terminado a fuego medio']
    ], note:'Con hueso, sumá unos minutos. Estas cifras son una guía de la redacción; el termómetro es la forma más segura de acertar.'}},
    {id:'cuanto-comprar', title:'Cuánto comprar por persona', paragraphs:[
      'Como estimación de la redacción, un bife ancho sin hueso de 3,5 centímetros pesa entre 350 y 450 gramos y alcanza para un adulto con hambre, o para dos si hay otros cortes y guarniciones. Con hueso, calculá unos 450 a 500 gramos por persona. En un asado con varios cortes, 150 gramos de bife ancho por persona suelen bastar. La guía de cuánta carne por persona te ayuda con el total.'
    ]},
    {id:'precio', title:'Qué cambia el precio del bife ancho', paragraphs:[
      'El bife ancho suele estar en la franja alta de precios por ser un corte de parrilla de primera, aunque en general por debajo del ojo de bife, que es su versión más recortada. El precio por kilo depende de si viene con hueso o sin hueso, con tapa o limpio, del marmoleado y la categoría del animal, y de si está madurado o envasado al vacío. Pedir el bife alto y cortado al momento puede cambiar un poco el valor, pero mejora mucho el resultado.'
    ]}
  ],
  recipes:['receta-papas-al-horno','receta-ensalada-rusa','receta-pan-al-ajo','receta-sopa-paraguaya'],
  related:['corte-ojo-de-bife','corte-bife-de-chorizo','corte-aguja','guia-cuanta-carne-por-persona','guia-cortes-de-carne-vacuna','guia-asado-a-la-parrilla'],
  faq:[
    ['¿Qué es el bife ancho?','Es el bife de la parte delantera del lomo exterior, sobre las costillas. Tiene más grasa entremezclada que el bife angosto y mucho sabor.'],
    ['¿Qué diferencia hay entre bife ancho y bife angosto?','El ancho sale de las costillas delanteras y es más marmoleado; el angosto sale de la zona lumbar, más atrás, y es más compacto, con la grasa en el borde.'],
    ['¿El ojo de bife es lo mismo que el bife ancho?','El ojo de bife es el centro del bife ancho, sin hueso y sin la tapa que lo rodea. Es la misma zona, pero más recortada.'],
    ['¿El bife de chorizo es bife ancho?','No. El bife de chorizo sale del bife angosto, de la zona lumbar. Es un bife alto y sin hueso con un borde de grasa.'],
    ['¿Cómo preparar el bife ancho para que quede jugoso?','Cortado alto, de 3 a 4 centímetros, a fuego fuerte, dado vuelta una sola vez y retirado cuando el centro llegue a unos 55 °C. Dejalo reposar unos minutos antes de cortar.'],
    ['¿El bife ancho es caro?','Suele estar entre los cortes de parrilla de precio alto. Cambia según venga con hueso o sin hueso, con tapa o limpio, y según la categoría del animal.']
  ],
  ctaTitle:'Bifes a la parrilla para tu evento',
  ctaText:'¿Querés bife ancho, bife de chorizo u ojo de bife a la parrilla para una cena o un evento de la empresa? Contanos la fecha, la zona y cuántas personas son, y te ayudamos a consultar un servicio de asado.',
  waMessage:'Hola, quiero consultar por un asado con bifes para un evento.'
};
