export default {
  id:'receta-kiveve', slug:'kiveve', kind:'recipe',
  published:true, indexable:true, updatedAt:'2026-09-24', verifiedAt:'2026-09-24',
  source:'Receta de la redacción de comida.com.py, basada en la preparación tradicional paraguaya',
  label:'Kiveve',
  seoTitle:'Kiveve: receta paraguaya de andai',
  meta:'Receta de kiveve paraguayo: puré cremoso de zapallo andai con queso Paraguay, leche y harina de maíz. Ingredientes, paso a paso, punto justo y variantes.',
  h1:'Kiveve: la receta del puré de andai con queso Paraguay',
  cardText:'Crema espesa de zapallo, queso Paraguay y harina de maíz, dulce y salada a la vez.',
  course:'Acompañamiento', cuisine:'Paraguaya', category:['paraguaya','saludable'],
  keywords:['kiveve','kiveve receta','receta de kiveve','kiveve paraguayo','kivevé'],
  intro:[
    'El kiveve es una crema espesa de andai, el zapallo anaranjado de la chacra, cocido y pisado con cebolla, leche, queso Paraguay y un poco de harina de maíz que le da cuerpo. El resultado es suave, de color naranja intenso, con un equilibrio entre lo dulce del zapallo y lo salado del queso. Se sirve caliente, como acompañamiento o como plato liviano.',
    'La receta rinde seis porciones de acompañamiento. Es rápida, se hace en una sola olla y admite ajustes: más queso para una versión más salada, un toque de azúcar si el andai salió poco dulce.'
  ],
  times:{prep:20, cook:40, rest:5}, difficulty:'Fácil',
  yield:{mode:'porciones', base:6, options:[2,4,6,12], yieldText:'6 porciones', note:'Porciones de acompañamiento, estimación de la redacción. Como plato principal liviano rinde unas cuatro.'},
  ingredients:[
    {group:'Para el zapallo', items:[
      {q:1.5, u:'kg', item:'andai o zapallo anaranjado', note:'pesado con cáscara; queda cerca de 1,1 kg limpio'},
      {q:300, u:'ml', item:'agua'}
    ]},
    {group:'Para el kiveve', items:[
      {q:40, u:'g', item:'manteca o grasa de cerdo'},
      {q:1, u:'u', item:'cebolla mediana', note:'picada fina'},
      {q:250, u:'ml', item:'leche'},
      {q:80, u:'g', item:'harina de maíz', note:'fina'},
      {q:250, u:'g', item:'queso Paraguay', note:'desmenuzado'},
      {q:1, u:'cda', item:'azúcar', note:'opcional, según lo dulce del zapallo'},
      {q:null, item:'sal fina', note:'al gusto'}
    ]}
  ],
  steps:[
    {title:'Pelá y cortá el zapallo', text:'Partí el andai, sacale las semillas y las hebras, pelalo y cortalo en cubos de unos 3 cm. Los trozos parejos se cocinan al mismo tiempo y no quedan partes duras en el puré.'},
    {title:'Cociná el andai', text:'Poné los cubos en una olla con el agua, tapá y cociná a fuego medio hasta que se deshagan al pincharlos con un tenedor. Revisá de vez en cuando: si se seca, agregá un chorrito más de agua.', min:20},
    {title:'Pisá con su líquido', text:'Con el zapallo todavía en la olla, pisalo con un pisapapas hasta que quede un puré liso. No tires el poco líquido que haya quedado: es sabor y ayuda a hidratar la harina.'},
    {title:'Rehogá la cebolla', text:'En una sartén, derretí la manteca o la grasa y rehogá la cebolla a fuego suave hasta que esté transparente y blanda, sin dorar. Sumala al puré de andai.', min:8},
    {title:'Disolvé la harina en la leche', text:'Mezclá la harina de maíz con la leche fría en un bol, revolviendo hasta que no queden grumos. Echá esta mezcla en el puré, a fuego bajo, sin dejar de revolver con cuchara de madera.'},
    {title:'Cociná hasta espesar', text:'Seguí revolviendo a fuego bajo mientras la preparación burbujea y espesa. Está lista cuando la cuchara deja un surco que tarda en cerrarse y la harina ya no sabe a cruda.', min:10},
    {title:'Sumá el queso y ajustá', text:'Apagá el fuego y agregá el queso Paraguay desmenuzado, revolviendo para que se derrita a medias. Probá: si hace falta, agregá sal o la cucharada de azúcar. Dejá reposar unos minutos tapado y serví.', min:5}
  ],
  tips:[
    'El andai maduro, de cáscara dura y pulpa bien naranja, da el mejor kiveve. Si usás zapallo de otra variedad, más aguado, cocinalo destapado los últimos minutos para que pierda agua.',
    'Probá el queso antes de salar. Con un queso Paraguay salado, casi no hace falta sal.',
    'No dejes de revolver cuando agregás la harina: se pega rápido en el fondo de la olla y toma gusto a quemado.',
    'Si quedó demasiado espeso, aflojalo con leche caliente; si quedó líquido, cociná unos minutos más o sumá una cucharada de harina de maíz disuelta en leche.',
    'Dejá algunos trocitos de queso sin derretir del todo: al servir aparecen como vetas blancas y saladas en la crema naranja.'
  ],
  sections:[
    {title:'Qué es el kiveve y cuándo se come', paragraphs:['El kiveve forma parte de la cocina campesina paraguaya, la que aprovecha lo que da la chacra: zapallo, maíz, leche y queso. La palabra viene del guaraní; se suele traducir de forma aproximada como algo blando o suave, en referencia a su textura, aunque las explicaciones sobre el origen del nombre varían.','Se come como acompañamiento de carnes, de un asado a la olla o de un pollo al horno, y también solo, con un trozo de chipa o de sopa paraguaya al lado. Es un plato habitual en los meses fríos, cuando el andai está en su mejor momento.']},
    {title:'Andai, zapallo y calabaza', paragraphs:['En Paraguay se llama andai al zapallo grande de cáscara verde o grisácea y pulpa naranja, y es el más usado para el kiveve. Sirve cualquier zapallo de pulpa firme y dulce; el anco también funciona, aunque da un kiveve más claro. Lo que no conviene es el zapallito verde, que tiene demasiada agua y poco sabor.']}
  ],
  variations:[
    ['Kiveve más dulce','Sumá dos cucharadas de azúcar y reemplazá la mitad del queso por queso fresco. Algunas familias lo sirven así, casi como postre.'],
    ['Kiveve gratinado','Pasalo a una fuente, cubrilo con queso Paraguay rallado y llevalo a horno fuerte hasta que se dore arriba. Queda con una corteza que contrasta con la crema.'],
    ['Con choclo','Agregá los granos de dos choclos cocidos junto con el queso. Suma dulzura y algo para masticar.']
  ],
  storage:'Guardalo tapado en la heladera hasta tres días. Al enfriarse espesa bastante: calentalo en olla con un chorrito de leche, revolviendo, hasta que vuelva a quedar cremoso. No conviene congelarlo, porque la leche y el queso se separan al descongelar.',
  faq:[
    ['¿Qué es el kiveve?','Es un plato paraguayo hecho con zapallo andai cocido y pisado, espesado con harina de maíz y enriquecido con leche y queso Paraguay. Tiene textura de crema espesa y sabor entre dulce y salado.'],
    ['¿Qué zapallo se usa para el kiveve?','El andai, el zapallo grande de pulpa naranja y firme. También sirve el anco o cualquier zapallo dulce y poco aguado; el zapallito verde no funciona.'],
    ['¿El kiveve lleva azúcar?','Algunas recetas sí y otras no. Esta versión la deja como opcional: una cucharada alcanza para realzar un zapallo poco dulce sin volverlo un postre.'],
    ['¿Con qué se acompaña el kiveve?','Con carnes al horno o a la olla, pollo, milanesas o asado. También se come solo, con chipa o un trozo de sopa paraguaya.'],
    ['¿Se puede hacer kiveve sin harina de maíz?','Sí, pero queda más líquido, como un puré suelto. La harina de maíz es la que le da cuerpo y el sabor característico; si no tenés, espesá con un poco más de queso y cociná más tiempo.']
  ],
  related:['receta-sopa-paraguaya','receta-mbaipy','receta-mbeju','receta-locro-paraguayo','receta-asado-a-la-olla'],
  guides:['guia-queso-paraguay','guia-comida-tipica-paraguaya','guia-que-cocinar-hoy']
};
