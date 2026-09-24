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
