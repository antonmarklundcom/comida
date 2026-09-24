export default {
  id:'receta-jopara', slug:'jopara', kind:'recipe',
  published:true, indexable:true, updatedAt:'2026-09-24', verifiedAt:'2026-09-24',
  source:'Receta de la redacción de comida.com.py, basada en la preparación tradicional paraguaya',
  label:'Jopara',
  seoTitle:'Jopara: receta paraguaya de locro y poroto',
  meta:'Receta de jopara con locro, poroto, carne y zapallo, el guiso espeso del 1 de agosto. Remojo, tiempos de olla, punto del caldo y cómo recalentarlo.',
  h1:'Jopara: el guiso de locro y poroto, paso a paso',
  cardText:'Locro, poroto y carne en un guiso espeso que se come cada 1 de agosto.',
  course:'Plato principal', cuisine:'Paraguaya', category:['paraguaya','carne'],
  keywords:['jopara receta','jopara','receta de jopara','jopara paraguayo','jopara 1 de agosto','ingredientes del jopara'],
  intro:[
    'El jopara es un guiso espeso de maíz blanco pisado, el locro, con poroto, carne de res, zapallo y verduras. La palabra viene del guaraní y se traduce como mezcla o mezclado, y eso es exactamente lo que llega al plato: granos, legumbre, carne y verdura cocidos juntos durante horas hasta formar un caldo cremoso, casi un puré con trozos.',
    'Es la comida del 1 de agosto, pero rinde para cualquier día frío. Pide planificación, porque el locro y el poroto se remojan de un día para otro, aunque el trabajo activo es poco. Esta receta es para 6 porciones y se puede duplicar en una olla grande.'
  ],
  times:{prep:30, cook:150, rest:10}, difficulty:'Media',
  yield:{mode:'porciones', base:6, options:[4,6,12], yieldText:'6 porciones', note:'Cantidades para una olla de unos 6 litros. Para 12 porciones hace falta una olla de 10 litros o dos ollas.'},
  ingredients:[
    {group:'Granos (remojados desde la noche anterior)', items:[
      {q:300, u:'g', item:'locro blanco', note:'maíz blanco pisado'},
      {q:250, u:'g', item:'poroto', note:'rojo o manteca'}
    ]},
    {group:'Carne y sofrito', items:[
      {q:700, u:'g', item:'carne de res con algo de hueso', note:'falda, costilla o puchero, en trozos'},
      {q:3, u:'cda', item:'aceite o grasa'},
      {q:2, u:'u', item:'cebollas', one:'cebolla', note:'picadas'},
      {q:1, u:'u', item:'locote rojo', note:'en cubos'},
      {q:2, u:'diente', item:'ajo', note:'picado'},
      {q:2, u:'u', item:'tomates maduros', one:'tomate maduro', note:'picados, sin piel'},
      {q:400, u:'g', item:'zapallo', note:'pelado, en cubos'}
    ]},
    {group:'Para cocinar y terminar', items:[
      {q:3, u:'l', item:'agua', note:'aproximadamente, caliente'},
      {q:2, u:'cdita', item:'sal gruesa', note:'se ajusta al final'},
      {q:1, u:'cdita', item:'orégano seco'},
      {q:1, u:'atado', item:'cebollita de hoja', note:'picada'},
      {q:null, item:'perejil picado', note:'al gusto'}
    ]}
  ],
  steps:[
    {title:'Remojá los granos de un día para otro', text:'La noche anterior, lavá el locro y el poroto por separado y cubrilos con abundante agua fría en dos recipientes. Al día siguiente tirá el agua del remojo y enjuagalos: así se cocinan más parejo y el poroto resulta más fácil de digerir.'},
    {title:'Arrancá el locro', text:'Poné el locro en la olla grande con 2 litros de agua sin sal y llevalo a hervor. Bajá el fuego y dejalo cocinar tapado, espumando de vez en cuando. El locro tarda más que el poroto, por eso empieza solo.', min:45},
    {title:'Herví el poroto aparte', text:'En otra olla, cubrí el poroto con agua fría y cociná a fuego suave hasta que esté tierno pero entero. Cocinarlo aparte evita que su color oscurezca todo el guiso; tirá esa agua cuando termine.', min:45},
    {title:'Sellá la carne y hacé el sofrito', text:'Mientras tanto, dorá la carne en una sartén con la grasa, por tandas, hasta que tome color. Retirala y, en la misma grasa, rehogá cebolla, locote y ajo hasta que estén tiernos. Sumá el tomate y cociná hasta que se deshaga en salsa.', min:15},
    {title:'Uní todo en la olla', text:'Pasá la carne, el sofrito y el zapallo a la olla del locro. Agregá agua caliente hasta cubrir con dos dedos de margen, el orégano y la mitad de la sal. Cociná tapado a fuego bajo, revolviendo con cuchara de madera desde el fondo.', min:45},
    {title:'Sumá el poroto', text:'Incorporá el poroto escurrido y seguí cocinando destapado. El zapallo se desarma y espesa el caldo; si se pone demasiado espeso, agregá agua caliente de a poco. El jopara está listo cuando el locro se aplasta con facilidad entre los dedos.', min:20},
    {title:'Ajustá la sal y la textura', text:'Probá el caldo y corregí la sal. Si querés un guiso más cremoso, aplastá unos cucharones de locro y zapallo contra la pared de la olla y volvé a mezclar. Apagá y dejalo reposar tapado unos minutos.', min:10},
    {title:'Serví con verde fresco', text:'Serví en platos hondos, bien caliente, con cebollita de hoja y perejil picados por encima. Queso Paraguay en cubitos o un chorrito de aceite de oliva también le quedan bien a la hora de comer.'}
  ],
  tips:[
    'Revolvé siempre desde el fondo: el locro suelta almidón y se pega con facilidad cuando el caldo se espesa, sobre todo en la última hora.',
    'Usá un corte con hueso y algo de grasa. La costilla o la falda le dan cuerpo al caldo; con carne magra el jopara queda más pobre.',
    'Salá recién a mitad de cocción. Con sal desde el principio, el locro y el poroto tardan más en ablandarse.',
    'La olla a presión acorta mucho los tiempos: unos 30 minutos para el locro con la carne, y luego se termina destapada con el poroto ya cocido.',
    'El jopara mejora de un día para otro. Si lo hacés para una reunión, cocinalo la víspera y recalentalo despacio.'
  ],
  sections:[
    {title:'El jopara y el 1 de agosto', paragraphs:['En Paraguay es costumbre comer jopara el primer día de agosto. La creencia popular dice que un plato abundante y mezclado ese día aleja el hambre, la mala suerte y los males del mes, que en el calendario del campo se asociaba al frío y a la escasez. Es una tradición oral, sin un origen documentado, pero se mantiene viva en casas, escuelas y oficinas.','Ese mismo día muchas familias toman también un trago de caña con ruda por la mañana, otra costumbre de agosto que se transmite de generación en generación. El jopara se cocina en ollas grandes para compartir y suele alcanzar para los vecinos que pasan a saludar.']},
    {title:'Locro, poroto y mezcla', paragraphs:['El locro es maíz blanco al que se le quitó la cáscara y se partió en trozos grandes; es el mismo que se usa en el locro paraguayo y en el kaguyjy. El poroto puede ser rojo, manteca o una mezcla: cada variedad cambia el color del caldo y su espesor, pero todas funcionan.','Algunas recetas familiares suman chorizo, panceta o incluso pollo, y otras lo preparan solo con verduras. La idea de fondo es siempre la misma: juntar granos, legumbre y lo que haya en la cocina, y dejar que la olla haga el resto.']}
  ],
  variations:[
    ['Jopara con chorizo','Dorá 2 chorizos parrilleros en rodajas junto con la carne. Le dan un sabor ahumado y más graso, muy de fiesta.'],
    ['Jopara sin carne','Reemplazá la carne por más zapallo y una mandioca en trozos, y sumá una cucharadita de pimentón al sofrito para compensar el sabor. Rinde igual y queda más liviano.'],
    ['Con leche al final','Hay quien agrega un vaso de leche en los últimos minutos para un caldo más blanco y suave. Revolvé bien para que no se corte.']
  ],
  storage:'Enfriá el jopara destapado y guardalo en la heladera hasta tres días. Espesa mucho en frío: al recalentar sumá agua caliente y revolvé a fuego bajo. Se congela bien en porciones hasta dos meses.',
  faq:[
    ['¿Qué significa jopara?','En guaraní significa mezcla o mezclado. El nombre describe el plato: un guiso donde se cocinan juntos el locro, el poroto, la carne y las verduras.'],
    ['¿Por qué se come jopara el 1 de agosto?','Según la creencia popular, comer un plato abundante ese día protege del hambre y de la mala suerte durante agosto. Es una costumbre de tradición oral que sigue muy extendida.'],
    ['¿Cuánto tiempo hay que remojar el locro y el poroto?','Lo ideal es de un día para otro, al menos 8 horas, en agua fría y en recipientes separados. Sin remojo la cocción se alarga mucho y los granos quedan desparejos.'],
    ['¿Se puede hacer jopara en olla a presión?','Sí. Cociná el locro con la carne y el sofrito unos 30 minutos desde que suena la válvula, y después terminá destapado con el poroto ya cocido y el zapallo hasta que espese.'],
    ['¿Qué diferencia hay entre jopara y locro?','El locro paraguayo se centra en el maíz blanco con carne. El jopara suma poroto a ese mismo maíz y suele quedar más espeso y más oscuro.'],
    ['¿Qué carne va en el jopara?','Cortes con hueso y algo de grasa, como costilla, falda o carne de puchero. También se puede sumar chorizo o panceta para más sabor.']
  ],
  related:['receta-locro-paraguayo','receta-kaguyjy','receta-puchero-paraguayo','receta-vori-vori','receta-soo-josopy'],
  guides:['guia-comida-tipica-paraguaya','guia-mercado-de-abasto']
};
