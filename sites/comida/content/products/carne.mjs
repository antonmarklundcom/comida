export default {
  id:'producto-carne', slug:'carne', kind:'product', order:3,
  published:true, indexable:true, updatedAt:'2026-09-24', verifiedAt:'2026-09-24',
  source:'Redacción de comida.com.py; condiciones de entrega en sites/comida/mercado.mjs',
  label:'Packs de carne', eyebrow:'Mercado',
  seoTitle:'Pack de asado y carne a domicilio',
  meta:'Consultá por packs de asado y de carne para la semana con entrega en Asunción. Calculá cuánta carne necesitás y dejanos tu consulta por WhatsApp.',
  h1:'Packs de asado y de carne para la semana',
  cardText:'Asado para tu grupo o carne para la semana: a consultar.',
  intro:[
    'Estamos armando los packs de carne junto con una carnicería para asegurar la cadena de frío hasta tu casa. Mientras tanto, dejanos tu consulta: te escribimos con los cortes, la cantidad y la fecha en la que podemos entregar.',
    'Si es para un asado, usá primero nuestra calculadora de carne por persona: el resultado se carga solo en tu consulta.'
  ],
  sections:[
    {id:'packs',title:'Packs que estamos preparando',cards:[['Pack de asado','Costilla, vacío y chorizo en la proporción justa para tu grupo, calculada por persona.'],['Pack de la semana','Carne para milanesas, para guiso y molida, porcionada para cocinar de lunes a viernes.']]},
    {id:'frio',title:'Cadena de frío',paragraphs:['La carne viaja refrigerada y se entrega en el día. Al recibirla, guardala enseguida en la heladera o el freezer; si la vas a congelar, porcionala antes, así descongelás solo lo que usás.']},
    {id:'cortes',title:'Elegí tus cortes',paragraphs:['Si no sabés qué pedir, nuestras guías de cortes te explican para qué sirve cada uno: picaña, vacío, costillar de cerdo, peceto u osobuco.']}
  ],
  faq:[
    ['¿Ya puedo comprar carne?','Todavía no confirmamos entregas de carne. Dejá tu consulta y te avisamos apenas esté disponible en tu zona.'],
    ['¿Cuánta carne necesito para un asado?','Depende del grupo y los cortes. La calculadora de carne por persona te da una estimación que podés ajustar.'],
    ['¿Entregan congelado?','La idea es entregar refrigerado, listo para cocinar o congelar en casa.'],
    ['¿Puedo pedir cortes especiales?','Contanos qué necesitás en la consulta y lo vemos con la carnicería.']
  ],
  related:['mercado','guia-cuanta-carne-por-persona','corte-vacio','corte-picana'],
  waMessage:'Hola, quiero consultar por un pack de carne.'
};
