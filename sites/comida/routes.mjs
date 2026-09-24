// Single route manifest: chef and gracias remain noindex; 404 is excluded from sitemap.
// Recipes, guides, cuts and viandas come from their content modules (engine/collections.mjs).
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import {loadCollection,routeFor} from '../../engine/collections.mjs';
import gates from './gates.mjs';
import abasto from './abasto-precios.mjs';
const siteDir=path.dirname(fileURLToPath(import.meta.url));
const base=[
    {
      "id": "home",
      "kind": "home",
      "path": "/",
      "label": "Inicio",
      "title": "Recetas paraguayas y catering en Asunción | comida.com.py",
      "meta": "Recetas paraguayas con cantidades por kilo, guías de carne y del Mercado de Abasto, y catering para tu evento en Gran Asunción, gratis y sin compromiso.",
      "indexable": true,
      "published": true,
      "parent": null,
      "updatedAt": "2026-09-19"
    },
    {
      "id": "catering",
      "kind": "hub",
      "path": "/catering/",
      "label": "Catering",
      "title": "Servicio de catering para eventos | comida.com.py",
      "meta": "Servicio de catering para eventos en Asunción y Gran Asunción: bocaditos, buffet, asado o menú servido. Pedí tu presupuesto gratis y sin compromiso.",
      "indexable": true,
      "published": true,
      "parent": "home",
      "updatedAt": "2026-09-24"
    },
    {
      "id": "occ-eventos-empresariales",
      "kind": "occasion",
      "path": "/catering/eventos-empresariales/",
      "label": "Eventos empresariales",
      "title": "Catering empresarial en Asunción | comida.com.py",
      "meta": "Catering empresarial para reuniones, capacitaciones y lanzamientos en Gran Asunción: almuerzos, coffee break y cócteles. Pedí tu presupuesto gratis.",
      "indexable": true,
      "published": true,
      "parent": "catering",
      "updatedAt": "2026-09-24"
    },
    {
      "id": "occ-fin-de-ano",
      "kind": "occasion",
      "path": "/catering/fin-de-ano/",
      "label": "Fin de año",
      "title": "Catering de fin de año para empresas | comida.com.py",
      "meta": "Catering para la cena o el brindis de fin de año de tu empresa o tu familia en Gran Asunción. Reservá con tiempo: contanos la fecha y los invitados.",
      "indexable": true,
      "published": true,
      "parent": "catering",
      "updatedAt": "2026-09-24"
    },
    {
      "id": "occ-bodas",
      "kind": "occasion",
      "path": "/catering/bodas/",
      "label": "Bodas",
      "title": "Catering para bodas en Asunción | comida.com.py",
      "meta": "Planeá el catering de tu boda: recepción, cena y servicio. Contanos tu fecha, lugar e invitados para consultar un presupuesto.",
      "indexable": true,
      "published": true,
      "parent": "catering",
      "updatedAt": "2026-09-24"
    },
    {
      "id": "occ-15-anos",
      "kind": "occasion",
      "path": "/catering/15-anos/",
      "label": "15 años",
      "title": "Catering para fiestas de 15 años | comida.com.py",
      "meta": "Catering para 15 años en Gran Asunción: recepción, cena, mesa dulce y bocaditos al ritmo de la fiesta. Contanos la fecha y consultá disponibilidad.",
      "indexable": true,
      "published": true,
      "parent": "catering",
      "updatedAt": "2026-09-24"
    },
    {
      "id": "occ-coffee-break",
      "kind": "occasion",
      "path": "/catering/coffee-break/",
      "label": "Coffee break",
      "title": "Coffee break para eventos | comida.com.py",
      "meta": "Coffee break para capacitaciones, congresos y reuniones en Asunción: chipa, medialunas, café y jugos. Pedí un presupuesto para tu pausa.",
      "indexable": true,
      "published": true,
      "parent": "catering",
      "updatedAt": "2026-09-24"
    },
    {
      "id": "occ-bocaditos",
      "kind": "occasion",
      "path": "/catering/bocaditos/",
      "label": "Bocaditos",
      "title": "Bocaditos salados y dulces para eventos | comida.com.py",
      "meta": "Bocaditos salados y dulces para cumpleaños, recepciones y reuniones en Gran Asunción. Calculá cuántos por persona y pedí tu presupuesto.",
      "indexable": true,
      "published": true,
      "parent": "catering",
      "updatedAt": "2026-09-24"
    },
    {
      "id": "occ-cumpleanos",
      "kind": "occasion",
      "path": "/catering/cumpleanos/",
      "label": "Cumpleaños",
      "title": "Catering para cumpleaños en Asunción | comida.com.py",
      "meta": "Catering para cumpleaños de adultos e infantiles en Gran Asunción: asado, picada, bocaditos y torta. Contanos cuántos son y dónde festejan.",
      "indexable": true,
      "published": true,
      "parent": "catering",
      "updatedAt": "2026-09-24"
    },
    {
      "id": "city-asuncion",
      "kind": "city",
      "path": "/catering/asuncion/",
      "label": "Asunción",
      "title": "Catering en Asunción | comida.com.py",
      "meta": "Organizá tu catering en Asunción: acceso al salón, horarios, montaje y traslado. Contanos tu zona y consultá disponibilidad.",
      "indexable": true,
      "published": true,
      "parent": "catering",
      "updatedAt": "2026-09-19"
    },
    {
      "id": "chef",
      "kind": "line",
      "path": "/chef-a-domicilio/",
      "label": "Chef a domicilio",
      "title": "Chef a domicilio: guía de consulta | comida.com.py",
      "meta": "Una comida preparada en tu casa empieza por conocer la cocina disponible y el tipo de encuentro que querés organizar.",
      "indexable": false,
      "published": true,
      "parent": "home",
      "updatedAt": "2026-09-19"
    },
    {
      "id": "precios",
      "kind": "precios",
      "path": "/precios/",
      "label": "Precios",
      "title": "Cuánto cuesta un catering por persona | comida.com.py",
      "meta": "Qué incluye el precio de un catering para 50 o 100 personas en Asunción: menú, personal, vajilla, traslado e impuestos. Pedí una cotización a medida.",
      "indexable": true,
      "published": true,
      "parent": "home",
      "updatedAt": "2026-09-24"
    },
    {
      "id": "presupuesto",
      "kind": "form",
      "path": "/presupuesto/",
      "label": "Presupuesto",
      "title": "Pedí un presupuesto de catering | comida.com.py",
      "meta": "Pedí un presupuesto de catering en dos pasos: ocasión, fecha, zona y cantidad de personas. Te respondemos por WhatsApp, gratis y sin compromiso.",
      "indexable": true,
      "published": true,
      "parent": "home",
      "updatedAt": "2026-09-24"
    },
    {
      "id": "como-funciona",
      "kind": "como-funciona",
      "path": "/como-funciona/",
      "label": "Cómo funciona",
      "title": "Cómo funciona la consulta de catering | comida.com.py",
      "meta": "Cómo funciona comida.com.py: nos contás tu evento, consultamos disponibilidad con proveedores de catering y contratás directo con quien elijas.",
      "indexable": true,
      "published": true,
      "parent": "home",
      "updatedAt": "2026-09-24"
    },
    {
      "id": "proveedores",
      "kind": "proveedores",
      "path": "/proveedores/",
      "label": "Proveedores",
      "title": "Presentá tu catering como proveedor | comida.com.py",
      "meta": "Si preparás catering y querés recibir consultas acordes a tu servicio, contanos tus formatos, zonas y capacidad de atención.",
      "indexable": true,
      "published": true,
      "parent": "home",
      "updatedAt": "2026-09-19"
    },
    {
      "id": "sobre",
      "kind": "sobre",
      "path": "/sobre/",
      "label": "Sobre nosotros",
      "title": "Sobre comida.com.py | comida.com.py",
      "meta": "comida.com.py reúne recetas paraguayas, cortes de carne y guías prácticas, y ofrece un servicio de referencia de catering en Gran Asunción.",
      "indexable": true,
      "published": true,
      "parent": "home",
      "updatedAt": "2026-09-24"
    },
    {
      "id": "contacto",
      "kind": "contacto",
      "path": "/contacto/",
      "label": "Contacto",
      "title": "Contacto para tu consulta de catering | comida.com.py",
      "meta": "Podés comunicarte por WhatsApp para consultar catering, ampliar un pedido o presentar tu servicio como proveedor.",
      "indexable": true,
      "published": true,
      "parent": "home",
      "updatedAt": "2026-09-19"
    },
    {
      "id": "terminos",
      "kind": "terminos",
      "path": "/terminos/",
      "label": "Términos",
      "title": "Condiciones del servicio de referencia | comida.com.py",
      "meta": "Estas condiciones explican el alcance de la orientación y coordinación ofrecidas por comida.com.py.",
      "indexable": true,
      "published": true,
      "parent": "home",
      "updatedAt": "2026-09-19"
    },
    {
      "id": "privacidad",
      "kind": "privacidad",
      "path": "/privacidad/",
      "label": "Privacidad",
      "title": "Privacidad de tus consultas | comida.com.py",
      "meta": "Para orientar un pedido necesitamos información de contacto y algunos datos del evento.",
      "indexable": true,
      "published": true,
      "parent": "home",
      "updatedAt": "2026-09-19"
    },
    {
      "id": "gracias",
      "kind": "gracias",
      "path": "/gracias/",
      "label": "Gracias",
      "title": "Estado de tu consulta | comida.com.py",
      "meta": "Llegar a esta página no confirma que una solicitud haya sido enviada o recibida.",
      "indexable": false,
      "published": true,
      "parent": "home",
      "updatedAt": "2026-09-19"
    },
    {
      "id": "404",
      "kind": "404",
      "path": "/404.html",
      "label": "Página no encontrada",
      "title": "Página no encontrada | comida.com.py",
      "meta": "Información de página no encontrada en comida.com.py.",
      "indexable": false,
      "published": true,
      "parent": "home",
      "updatedAt": "2026-09-19"
    }
];
const hubs=[
  {id:'recetas',kind:'recipes-hub',path:'/recetas/',label:'Recetas',title:'Recetas paraguayas y caseras | comida.com.py',meta:'Recetas paraguayas y caseras con cantidades que se ajustan: sopa paraguaya, chipa, mbeju, vori vori y los platos de todos los días.',indexable:true,published:true,parent:'home',updatedAt:'2026-09-24'},
  {id:'guias',kind:'guides-hub',path:'/guias/',label:'Guías',title:'Guías de comida en Paraguay | comida.com.py',meta:'Guías prácticas para comprar, calcular y organizar comida en Paraguay: cantidades por persona, queso Paraguay, Mercado de Abasto y más.',indexable:true,published:true,parent:'home',updatedAt:'2026-09-24'},
  {id:'carne',kind:'cuts-hub',path:'/carne/',label:'Carne',title:'Cortes de carne en Paraguay: guía y recetas | comida.com.py',meta:'Conocé los cortes de carne vacuna y de cerdo que se usan en Paraguay: para qué sirve cada uno, cómo cocinarlo y cuánto calcular por persona.',indexable:true,published:true,parent:'home',updatedAt:'2026-09-24'},
  {id:'planificador',kind:'planner',path:'/planificador/',label:'Planificador de menú',title:'Menú semanal y lista de compras | comida.com.py',meta:'Armá el menú casero de la semana con recetas paraguayas y caseras y obtené una sola lista de compras, lista para pedir, copiar o imprimir.',indexable:true,published:true,parent:'recetas',updatedAt:'2026-09-24'},
  // Weekly Abasto prices (idea 11): only published when the data module is published with a source and date.
  {id:'abasto-precios',kind:'price-table',path:'/mercado-de-abasto/precios/',label:'Precios del Mercado de Abasto',title:'Precios del Mercado de Abasto esta semana | comida.com.py',meta:'Lista semanal de precios de referencia de frutas y verduras del Mercado de Abasto de Asunción, con fuente oficial y fecha de la lista.',indexable:Boolean(abasto.published&&abasto.source&&abasto.verifiedAt),published:Boolean(abasto.published&&abasto.source&&abasto.verifiedAt),parent:'guia-mercado-de-abasto',updatedAt:abasto.verifiedAt||'2026-09-24'},
  // Reserved kinds (plan/10 §11): never emitted, linked or listed until published.
  {id:'asado',kind:'reserved',path:'/asado/',label:'Asado',title:'Asado | comida.com.py',meta:'Reservado para la sección de asado.',indexable:false,published:false,parent:'home',updatedAt:'2026-09-24'},
  {id:'restaurantes',kind:'reserved',path:'/restaurantes/',label:'Restaurantes',title:'Restaurantes | comida.com.py',meta:'Reservado para la guía de restaurantes.',indexable:false,published:false,parent:'home',updatedAt:'2026-09-24'},
];
const collected=[];
for(const name of ['recipes','guides','cuts','viandas','restaurants','ingredients','seasons','products']){
  for(const item of await loadCollection(siteDir,name)){
    const r=routeFor(item,name);
    if(name==='viandas')r.indexable=r.published&&gates.viandasPartnerSigned&&item.indexable!==false;
    collected.push(r);
  }
}
// Printable recetario per seasonal collection, unlocked by the recetario form (noindex, out of the sitemap).
for(const item of await loadCollection(siteDir,'seasons'))if(item.published&&item.recetario)collected.push({id:'recetario-'+item.slug,kind:'recetario',path:'/recetario/'+item.slug+'/',label:item.recetario.title,title:(item.recetario.title+' | comida.com.py').slice(0,60),meta:('Versión para imprimir: '+item.recetario.title+'. Ingredientes y pasos de las recetas de la colección.').slice(0,155),indexable:false,published:true,parent:'recetas',updatedAt:item.updatedAt,collection:'recetario'});
export default [...base,...hubs,...collected];
