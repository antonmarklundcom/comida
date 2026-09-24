import occasions from '../occasions.mjs';
import cities from '../cities.mjs';
import lines from '../lines.mjs';
import support from './support.mjs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import {loadCollection} from '../../../engine/collections.mjs';
import hubs from './hubs.mjs';
const siteDir=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
const collections=[];for(const name of ['recipes','guides','cuts','viandas','restaurants','ingredients','seasons','products'])collections.push(...await loadCollection(siteDir,name));
const existing = [
  {
    "id": "home"
  },
  {
    "id": "catering",
    "h1": "Catering para compartir tu próximo evento",
    "image": 1,
    "intro": [
      "Un almuerzo de trabajo, una fiesta familiar o una recepción necesitan servicios distintos. Elegí cómo querés recibir a tus invitados y contanos la fecha, la zona y cuántas personas esperás.",
      "Te ayudamos a ordenar la consulta para que el proveedor pueda definir menú, montaje y atención. Revisamos tu solicitud y confirmamos disponibilidad en nuestro horario de atención."
    ],
    "sections": [
      {
        "title": "Elegí el formato que acompaña tu encuentro",
        "cards": [
          [
            "Bocaditos y recepción",
            "Para encuentros de pie, combiná opciones saladas y dulces. Acordá la reposición y si necesitás bandejeo durante toda la reunión."
          ],
          [
            "Buffet para compartir",
            "Cada invitado elige su plato. Consultá cómo se organiza la fila, el mantenimiento de la temperatura y las alternativas del menú."
          ],
          [
            "Menú servido a la mesa",
            "Pensado para una comida con tiempos definidos. Coordiná la cantidad de mozos, el orden de salida y el espacio para trabajar."
          ]
        ]
      },
      {
        "title": "Qué conviene dejar escrito",
        "items": [
          "Menú y cantidad de porciones acordadas.",
          "Vajilla, mantelería y mobiliario incluidos o por separado.",
          "Personal para montaje, atención y retiro.",
          "Bebidas, hielo, traslado y horarios del servicio.",
          "Condiciones para reservar, modificar o cancelar."
        ]
      },
      {
        "title": "Ideas para empezar la conversación",
        "cards": [
          [
            "Reunión de trabajo",
            "Chipa, mini sándwiches, fruta y café. Indicá la duración de la pausa y si habrá otro servicio durante la jornada."
          ],
          [
            "Celebración en casa",
            "Asado con guarniciones, ensaladas y una opción sin carne. Contanos si hay parrilla, cocina o espacio cubierto."
          ],
          [
            "Recepción social",
            "Bocaditos fríos y calientes con un cierre dulce. Ajustá el menú según el horario y si reemplaza una comida."
          ]
        ]
      },
      {
        "title": "Un presupuesto con el mismo alcance",
        "paragraphs": [
          "Depende del menú, la cantidad de personas y el servicio. Para comparar propuestas, pedí que detallen también traslado, personal, impuestos y lo que queda a tu cargo."
        ]
      }
    ],
    "faq": [
      [
        "¿Puedo consultar sin tener el menú decidido?",
        "Sí. Contanos el tipo de encuentro y cómo te gustaría servir la comida. El proveedor puede proponerte alternativas según el espacio y la fecha."
      ],
      [
        "¿Hay un mínimo de invitados?",
        "Cada servicio define su mínimo. Indicá la cantidad estimada para consultar opciones adecuadas a tu reunión."
      ],
      [
        "¿Puedo pedir solo la comida?",
        "Podés consultar entrega de comida o un servicio con atención. Aclaralo al inicio para que el presupuesto refleje lo que necesitás."
      ],
      [
        "¿Las bebidas están incluidas?",
        "No lo des por hecho. Pedí que la propuesta detalle bebidas, hielo, vasos y quién se ocupa de servir."
      ],
      [
        "¿Cómo aviso que hay preferencias alimentarias?",
        "Mencioná que necesitás opciones de menú. Los detalles se conversan directamente con el proveedor elegido antes de contratar."
      ],
      [
        "¿Cómo reservo el servicio?",
        "Cuando elijas una propuesta, acordá la reserva y las condiciones directamente con el proveedor que la ofrece."
      ]
    ],
    "related": [
      "occ-eventos-empresariales",
      "occ-fin-de-ano",
      "occ-bodas",
      "occ-15-anos",
      "occ-coffee-break",
      "occ-bocaditos",
      "occ-cumpleanos",
      "city-asuncion"
    ],
    "waMessage": "Hola, ¿me ayudás a elegir un catering para mi evento?"
  },
  {
    "id": "404",
    "h1": "No encontramos esa página",
    "intro": [
      "Podés volver al inicio o explorar las opciones de catering para tu evento."
    ],
    "related": [
      "home",
      "catering"
    ]
  }
];
const recetarios=collections.filter(c=>c.kind==='collection'&&c.recetario).map(c=>({id:'recetario-'+c.slug,collectionId:c.id,_file:'recetario:'+c.slug,waMessage:c.waMessage}));
export default [...existing,...occasions,...cities,...lines,...support,...hubs,...collections,...recetarios];
