// Copy this file to <slug>.mjs for each restaurant you (or a paid collaborator) actually visited.
// Files starting with "_" are ignored by the build. Nothing here may be invented: every fact comes from the
// visit or from the restaurant's own published information, and verifiedAt is the visit date.
// To open the section: set the /restaurantes/ route in sites/comida/routes.mjs to kind 'restaurants-hub',
// published: true, indexable: true, and add its copy to sites/comida/content/hubs.mjs (id 'restaurantes').
export default {
  id:'restaurante-<slug>', slug:'<slug>', kind:'restaurant', order:1,
  published:false, indexable:true, updatedAt:'2026-01-01', verifiedAt:'2026-01-01',
  source:'Visita de comida.com.py el 2026-01-01; horarios según el restaurante',
  label:'<Nombre>', eyebrow:'Restaurantes en Asunción',
  seoTitle:'<Nombre>: qué pedir y cómo es',   // max 44 characters
  meta:'<90-155 characters: zone, cuisine, what stands out, who it suits>',
  h1:'<Nombre>, en <barrio>',
  cardText:'<one line>',
  category:['<cocina>','<barrio>'],
  intro:['<what it is and who it suits, from the visit>','<what to order>'],
  facts:[['Zona','<barrio, ciudad>'],['Cocina','<tipo>'],['Ideal para','<almuerzo, cena, familia, grupo>'],['Reservas','<sí / no / por WhatsApp>'],['Horario','<según el restaurante, fecha>']],
  sections:[
    {id:'que-pedir',title:'Qué pedir',paragraphs:['<dishes you tried>']},
    {id:'ambiente',title:'Ambiente y servicio',paragraphs:['<observations from the visit>']},
    {id:'como-llegar',title:'Cómo llegar',paragraphs:['<address and parking, as published by the restaurant>']},
  ],
  faq:[['<question>','<answer>'],['<question>','<answer>'],['<question>','<answer>'],['<question>','<answer>']],
  related:[],
  waMessage:'Hola, quiero consultar catering para un evento.',
};
