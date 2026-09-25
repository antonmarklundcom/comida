export default {
  id:'viandas-precios', slug:'precios', kind:'vianda', parent:'viandas',
  published:true, indexable:true, updatedAt:'2026-09-24', verifiedAt:'2026-09-24',
  source:'Redacción de comida.com.py; sin referencias de precios publicadas',
  label:'Precio de las viandas', eyebrow:'Viandas',
  seoTitle:'Cuánto cuestan las viandas: qué influye',
  meta:'Qué cambia el precio de una vianda semanal en Asunción: tipo de menú, porciones, frecuencia, envases y entrega. Cómo comparar planes antes de elegir.',
  h1:'Cuánto cuesta una vianda: lo que cambia el precio',
  cardText:'Qué mirar para comparar planes de viandas.',
  intro:[
    'El precio de una vianda depende de lo que trae y de cómo llega. Todavía no publicamos valores porque no tenemos referencias documentadas de las cocinas; cuando las tengamos, las vas a ver acá con su fuente y fecha.',
    'Mientras tanto, estas son las variables para comparar dos planes con el mismo criterio.'
  ],
  sections:[
    {id:'variables',title:'Qué cambia el precio',table:{caption:'Variables de una vianda semanal',head:['Variable','Por qué cambia el precio'],rows:[['Tipo de menú','Una proteína de mayor costo o platos con más elaboración suben el valor por comida.'],['Tamaño de la porción','Un almuerzo completo no cuesta lo mismo que una vianda liviana.'],['Frecuencia','Los planes de lunes a viernes suelen tener mejor valor por comida que los días sueltos.'],['Envases','Los descartables se cobran en cada entrega; los retornables pueden requerir un depósito.'],['Entrega','La distancia y el horario pueden sumar un costo de envío.']]}},
    {id:'comparar',title:'Cómo comparar dos planes',items:['Calculá el valor por comida, no por semana.','Confirmá si el envío está incluido.','Pedí el menú de dos semanas para ver variedad y porciones.','Preguntá cómo se pausa el plan y con cuánta anticipación.']},
    {id:'valor-por-comida',title:'Cómo sacar el valor por comida',paragraphs:['Dos planes con el mismo total semanal pueden ser muy distintos. Uno trae cinco almuerzos con envío incluido; otro trae cinco almuerzos más un costo de entrega por día y envases que se cobran aparte. Para compararlos de verdad, sumá todo lo que vas a pagar en el mes —comidas, envíos, envases y cualquier depósito— y dividilo por la cantidad de comidas que recibís.','Ese número por comida es el que conviene poner al lado de lo que hoy gastás en almorzar afuera o en pedir delivery suelto. Sumá también lo que no se ve: el tiempo de salir a comprar, cocinar y lavar, y la comida que se tira cuando se cocina de más.'],items:['Total del mes = comidas + envíos + envases + depósito (si hay).','Valor por comida = total del mes ÷ comidas recibidas.','Si el plan tiene días que no usás, contá solo las comidas que realmente comés.']},
    {id:'que-trae',title:'Qué mirar dentro de la bandeja',paragraphs:['El precio solo dice algo si sabés qué viene adentro. Preguntá cuántos gramos trae la porción principal, si la guarnición es aparte o comparte bandeja, y si el plan incluye bebida, postre o fruta. Una vianda que parece más barata puede traer una porción que no alcanza para una jornada de trabajo, y terminás comprando algo más a media tarde.','Mirá también la proteína de cada día. Un menú con pollo, carne vacuna, cerdo, pescado, huevo y legumbres repartidos en la semana tiene otro costo que uno basado casi siempre en la misma preparación. Ninguno es mejor por sí solo: depende de lo que buscás y de cuánto te importa la variedad.']},
    {id:'ahorrar',title:'Formas razonables de ajustar el gasto',items:['Elegí solo los días que realmente almorzás fuera de casa; no hace falta contratar la semana entera.','Si en tu oficina o edificio hay más personas interesadas, un pedido conjunto con una sola entrega puede bajar el costo de envío por persona.','Preguntá si hay envases retornables: evitan pagar descartables cada día.','Combiná viandas para los días más cargados con comida casera los días tranquilos. En nuestras recetas hay platos que se cocinan el domingo y rinden para dos o tres comidas.','Antes de un plan largo, probá una semana y fijate si las porciones y la puntualidad te sirven.']},
    {id:'consulta',title:'Pedí una propuesta para tu zona',paragraphs:['Si nos decís tu zona, cuántas comidas por semana y qué tipo de menú preferís, consultamos una propuesta concreta y te la enviamos por WhatsApp.']}
  ],
  form:'viandas', cta:false,
  faq:[
    ['¿Por qué no hay precios publicados?','Porque solo publicamos valores con una referencia documentada de la cocina y una fecha. Preferimos no mostrar números que no podamos respaldar.'],
    ['¿Conviene un plan semanal o pedir por día?','Si comés afuera casi todos los días, el plan semanal suele ordenar mejor el gasto. Para pocos días, pedir suelto da más flexibilidad.'],
    ['¿El envío se cobra aparte?','Depende de la cocina y de la distancia. Preguntá si el valor incluye la entrega antes de comparar.'],
    ['¿Hay descuentos para empresas?','Algunas cocinas ajustan el valor por cantidad. Indicá cuántas personas son al consultar.'],
    ['¿Los envases se cobran?','Pueden estar incluidos, cobrarse aparte o funcionar con devolución. Es un detalle que cambia el total del mes.'],
    ['¿Cómo pago?','Directamente a la cocina, con el medio que acepte, y ella emite la factura.']
  ],
  related:['viandas','viandas-saludables','viandas-para-oficina'],
  waMessage:'Hola, quiero saber cuánto cuesta un plan de viandas. Te cuento mi zona:'
};
