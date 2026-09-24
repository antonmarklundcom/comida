// Meat cut module: peceto. Shape: see plan/prompts/CONTENT-WRITER.md, Guide and cut fields.
export default {
  id:'corte-peceto', slug:'peceto', kind:'cut', order:3, animal:'Vacuno',
  published:true, indexable:true, updatedAt:'2026-09-24', verifiedAt:'2026-09-24',
  source:'Guía de la redacción de comida.com.py, basada en la práctica de carnicería y la cocina casera del Río de la Plata',
  label:'Peceto',
  seoTitle:'Peceto: qué es, cómo elegirlo y cocinarlo',
  meta:'Peceto: de dónde sale, cómo elegir una pieza pareja, tiempos para vitel toné, horno y olla, cuánto comprar por persona y qué define el precio del kilo.',
  h1:'Peceto: el corte magro del vitel toné y la carne al horno',
  cardText:'El cilindro magro y parejo que se corta en fetas finas para vitel toné.',
  category:['carne','fiesta','horno'],
  keywords:['peceto','peceto precio','peceto el kilo','peceto al horno','peceto para vitel toné','peceto a la olla'],
  intro:[
    'El peceto es una pieza alargada, casi cilíndrica, de carne muy magra y fibra fina. Sale de la pierna trasera del vacuno y es la carne clásica del vitel toné de Navidad, pero también del peceto al horno, del asado a la olla y de la carne mechada.',
    'Como tiene tan poca grasa, se cocina rápido y se seca con facilidad: el secreto está en el método y en el tiempo. Acá te explicamos cómo elegirlo, cuánto cocinarlo según el plato, cuánto comprar y qué hace que el kilo cueste más o menos.'
  ],
  facts:[
    ['Animal','Vacuno'],
    ['Zona del animal','Pierna trasera, entre la nalga y la cuadrada'],
    ['Otros nombres','Lagarto (Brasil), redondo o eye of round'],
    ['Mejor cocción','Hervido suave, horno o braseado en olla'],
    ['Por persona','200 a 250 g crudos (estimación)']
  ],
  estimate:'Las cantidades por persona son estimaciones de la redacción; si el peceto va en un buffet con otros platos fríos, podés bajarlas.',
  sections:[
    {id:'que-es', title:'Qué es el peceto y dónde está en el animal', paragraphs:[
      'En la pierna trasera hay varios músculos grandes: nalga, cuadrada, bola de lomo. El peceto es uno más chico que corre a lo largo de ese conjunto y que el carnicero separa entero. Tiene forma de tubo, un extremo un poco más grueso que el otro y una fibra que corre a lo largo, lo que permite cortarlo en fetas redondas y parejas.',
      'En Brasil se lo conoce como lagarto y en inglés como eye of round. Es uno de los cortes más magros de la res, sin marmoleado visible, cubierto por una membrana plateada que conviene retirar antes de cocinar. Una pieza entera suele pesar entre 1 y 2 kilos.'
    ]},
    {id:'como-elegir', title:'Cómo elegir un buen peceto', paragraphs:[
      'Pedilo entero, nunca cortado en bifes: su gracia es la forma. Buscá una pieza de grosor parejo de punta a punta, así se cocina al mismo tiempo y las fetas del vitel toné salen iguales. La carne debe ser rojo intenso, húmeda pero sin líquido en la bandeja.'
    ], items:[
      'Pedí que te saquen la membrana plateada, o hacelo vos con un cuchillo fino deslizándolo por debajo.',
      'Si la punta es muy delgada, se va a pasar antes que el centro: podés doblarla y atarla con hilo de cocina.',
      'Un peceto de 1,2 a 1,5 kilos es cómodo para una fuente de vitel toné familiar.',
      'Para mechar, elegí uno grueso: es más fácil abrir el túnel para el relleno.'
    ]},
    {id:'coccion', title:'Cómo cocinar el peceto: métodos y tiempos', paragraphs:[
      'El peceto se lleva bien con dos caminos opuestos. Uno es la cocción justa, en agua suave o en horno, retirándolo apenas rosado o recién cocido para cortarlo frío. El otro es la cocción larga en olla con salsa, donde la fibra se afloja. Lo que no funciona es el término medio: mucho tiempo en seco.'
    ], table:{caption:'Tiempos orientativos para un peceto de 1,2 a 1,5 kilos', head:['Método','Cómo','Tiempo','Señal de que está'], rows:[
      ['Hervido para vitel toné','Agua con verduras, apenas burbujeando','1 hora a 1 hora y cuarto','Al pinchar, el jugo sale claro; unos 65 °C en el centro'],
      ['Horno','Sellado en sartén y luego a 180 °C','40 a 50 min','Rosado en el centro, unos 58 a 60 °C'],
      ['A la olla','Dorado y braseado tapado con salsa','1 ½ a 2 horas','Se corta con tenedor'],
      ['Plancha','Medallones de 2 cm, fuego fuerte','2 a 3 min por lado','Dorado afuera, rosado adentro']
    ], note:'En la parrilla el peceto tiende a secarse; si lo hacés, envolvelo en panceta o cocinalo a fuego indirecto y sacalo rosado.'}},
    {id:'vitel-tone', title:'El peceto para vitel toné, paso a paso', steps:[
      'Limpiá la membrana plateada y, si hace falta, atá el peceto para que quede de grosor parejo.',
      'Poné en una olla agua suficiente para cubrirlo con cebolla, zanahoria, apio, una hoja de laurel y sal. Llevá a hervor.',
      'Sumá la carne, bajá el fuego para que el agua apenas tiemble y cociná alrededor de una hora.',
      'Apagá y dejá enfriar la carne dentro de su caldo: así no se seca y absorbe sabor.',
      'Llevala a la heladera bien fría, idealmente de un día para otro, antes de cortarla.',
      'Cortá fetas bien finas contra la fibra. Guardá el caldo colado para aligerar la salsa del vitel toné.'
    ]},
    {id:'cuanto-comprar', title:'Cuánto peceto comprar por persona', paragraphs:[
      'La estimación de la redacción es de 200 a 250 gramos crudos por adulto cuando el peceto es el plato principal, al horno o a la olla. Pierde alrededor de un cuarto de su peso al cocinarse. Para vitel toné servido como entrada o en una mesa de fin de año con otros platos, alcanza con unos 120 a 150 gramos crudos por persona.',
      'Si la mesa de fiesta tiene también asado, la guía de cuánta carne por persona te ayuda a repartir entre los distintos cortes sin que falte ni sobre demasiado.'
    ]},
    {id:'errores', title:'Errores comunes con el peceto', items:[
      'Hervirlo a fuego fuerte: las fibras se contraen y la carne queda seca y gris aunque esté sumergida.',
      'Cortarlo caliente para el vitel toné: se desarma y las fetas salen gruesas. Frío se corta casi transparente.',
      'Dejar la membrana plateada: se encoge con el calor, curva la pieza y queda correosa al masticar.',
      'Cocinarlo al horno sin sellar y sin controlar: al no tener grasa, pasa de rosado a seco en pocos minutos.',
      'Cortarlo a favor de la fibra: en un corte magro como este, la diferencia en la boca es enorme.'
    ]},
    {id:'precio', title:'Qué define el precio del kilo de peceto', paragraphs:[
      'El peceto se paga como un corte de primera aunque venga de la pierna, porque rinde casi sin desperdicio: no tiene hueso y la grasa es mínima. El kilo cambia según venga limpio o con la membrana, si es entero o en porciones, y según la categoría del animal.',
      'En diciembre la demanda sube mucho por el vitel toné de las fiestas, y eso se nota en el mostrador. Si lo vas a necesitar para fin de año, encargarlo con anticipación ayuda a conseguir piezas del tamaño que querés.'
    ]},
    {id:'recetas', title:'Recetas del sitio con peceto', paragraphs:[
      'La receta de vitel toné del sitio parte de un peceto hervido y frío, cortado en fetas finas y cubierto con la salsa de atún. El asado a la olla es la otra gran opción: el peceto dorado y cocido despacio con cebolla, locote y vino, que después se sirve en rodajas con puré o arroz. Lo que sobre sirve para sándwiches o para una ensalada rusa con carne.'
    ]}
  ],
  recipes:['receta-vitel-tone','receta-asado-a-la-olla','receta-ensalada-rusa'],
  related:['guia-cuanta-carne-por-persona','corte-osobuco','corte-matambre','corte-bife-de-chorizo'],
  faq:[
    ['¿Qué es el peceto en Paraguay?','Es un corte vacuno de la pierna trasera, alargado y muy magro, que se usa entero para vitel toné, peceto al horno y asado a la olla.'],
    ['¿Cuánto tiempo se hierve el peceto para vitel toné?','Alrededor de una hora a una hora y cuarto para una pieza de 1,2 a 1,5 kilos, con el agua apenas burbujeando. Después dejalo enfriar en su caldo.'],
    ['¿Cuántos kilos de peceto para 10 personas?','Como estimación, unos 2 a 2,5 kilos crudos si es el plato principal. Si es vitel toné en una mesa de fiesta con otros platos, alcanza con 1,2 a 1,5 kilos.'],
    ['¿El peceto es lo mismo que el lagarto?','Sí. Lagarto es el nombre brasileño de la misma pieza de la pierna trasera.'],
    ['¿Por qué el peceto al horno quedó seco?','Porque es muy magro y se pasó de cocción. Sellalo primero, horneá a 180 °C y sacalo cuando el centro todavía esté rosado; dejalo reposar tapado antes de cortar.'],
    ['¿El precio del peceto por kilo es igual todo el año?','No suele serlo. Sube la demanda antes de las fiestas de fin de año y cambia según venga limpio o con membrana y según la categoría del animal.']
  ],
  ctaTitle:'Asado para tu evento',
  ctaText:'Para la cena de fin de año o una fiesta en casa, podés sumar un servicio de asado que cocine en el lugar mientras vos atendés a los invitados. Contanos la fecha y la cantidad de personas y te ayudamos a consultar.',
  waMessage:'Hola, quiero consultar por asado y catering para una cena de fin de año.'
};
