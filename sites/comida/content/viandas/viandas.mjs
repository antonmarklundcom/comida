// Viandas line (plan/11 §1-2). Built but noindex until gates.viandasPartnerSigned is true.
export default {
  id:'viandas', slug:'viandas', kind:'vianda', path:'/viandas/', parent:'home',
  published:true, indexable:true, updatedAt:'2026-09-24', verifiedAt:'2026-09-24',
  source:'Redacción de comida.com.py; modelo de servicio descripto en plan/11',
  label:'Viandas', eyebrow:'Viandas semanales',
  seoTitle:'Viandas en Asunción: cómo funcionan',
  meta:'Viandas semanales en Asunción y Gran Asunción: cómo se arma un plan, qué incluye, cómo es la entrega y quién cocina. Consultá disponibilidad para tu zona.',
  h1:'Viandas semanales: comida lista para tu semana',
  cardText:'Planes de almuerzo o cena para la semana, entregados en tu casa u oficina.',
  intro:[
    'Una vianda es una comida ya preparada que llega lista para calentar y comer. En un plan semanal elegís cuántos días querés recibirla, si es almuerzo, cena o ambas, y el tipo de menú: casero, liviano o con más proteína.',
    'Estamos sumando cocinas de viandas en Gran Asunción. Dejanos tu zona y lo que buscás, y te escribimos cuando haya una opción disponible para vos.'
  ],
  facts:[['Zona','Asunción y Gran Asunción'],['Formato','Plan semanal o días sueltos'],['Entrega','Según la cocina, en horario acordado'],['Quién cocina','Una cocina asociada, que factura directamente']],
  sections:[
    {id:'como-funciona',title:'Cómo funciona un plan de viandas',steps:['Elegís el tipo de menú y cuántos días por semana querés recibir.','La cocina te comparte el menú de la semana y las opciones para cambiar un plato.','Recibís las viandas en el horario acordado, en tu casa o en la oficina.','Pagás y recibís la factura directamente de la cocina que prepara la comida.']},
    {id:'tipos',title:'Tipos de plan',cards:[['Casero','Guisos, pastas, carnes al horno y guarniciones como en casa, en porciones para un almuerzo completo.'],['Liviano','Verduras, legumbres y proteínas magras con cocciones simples. Pensado para comer rico sin terminar pesado.'],['Para la oficina','Entregas de lunes a viernes al mediodía para una o varias personas del mismo equipo.']]},
    {id:'entrega',title:'Entrega, pausas y cambios',paragraphs:['Cada cocina define sus días de entrega, el horario y hasta cuándo se puede pausar o cambiar un pedido. Antes de empezar, confirmá cómo avisar si un día no vas a estar y cómo se devuelven los envases si son retornables.','Pedí que te indiquen cómo conservar cada plato: la mayoría se guarda en la heladera y se calienta en microondas o sartén; algunas preparaciones admiten freezer.']},
    {id:'quien',title:'Quién cocina y quién factura',paragraphs:['comida.com.py te conecta con la cocina: la preparación, la entrega y la facturación corresponden a esa cocina. Nosotros te ayudamos a encontrar una opción que llegue a tu zona y a resolver dudas durante la coordinación.']}
  ],
  form:'viandas', cta:false,
  faq:[
    ['¿A qué zonas llegan las viandas?','Estamos organizando cocinas para Asunción y las ciudades de Gran Asunción. Indicá tu zona en el formulario y te avisamos si hay una opción que te llegue.'],
    ['¿Puedo pedir solo algunos días de la semana?','Depende de la cocina. Muchas trabajan con planes de lunes a viernes, pero algunas aceptan días sueltos. Contanos qué necesitás y lo consultamos.'],
    ['¿Las viandas se pueden congelar?','Algunas preparaciones sí y otras pierden textura. La cocina te indica qué platos admiten freezer y cuánto duran en la heladera.'],
    ['¿Puedo pedir un menú sin carne?','Contanos tu preferencia en el formulario. Las opciones dependen de cada cocina; no ofrecemos dietas médicas ni planes nutricionales.'],
    ['¿Cómo pago las viandas?','Pagás directamente a la cocina que las prepara, con el medio que ella acepte, y te factura por el servicio.'],
    ['¿Sirve para una empresa?','Sí. Si necesitás almuerzos para un equipo, indicá cuántas personas y los días. Para una reunión puntual también podés ver nuestras opciones de catering empresarial.']
  ],
  related:['catering','occ-eventos-empresariales'],
  waMessage:'Hola, quiero consultar por viandas semanales. Te cuento mi zona:'
};
