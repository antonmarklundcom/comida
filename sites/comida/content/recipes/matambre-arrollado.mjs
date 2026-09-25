// Recipe module: matambre arrollado relleno, hervido y dorado al horno. Companion of corte-matambre. Shape: sites/comida/content/recipes/sopa-paraguaya.mjs
export default {
  id:'receta-matambre-arrollado', slug:'matambre-arrollado', kind:'recipe',
  published:true, indexable:true, updatedAt:'2026-09-24', verifiedAt:'2026-09-24',
  source:'Receta de la redacción de comida.com.py, basada en la preparación casera tradicional del Río de la Plata y de Paraguay',
  label:'Matambre arrollado',
  seoTitle:'Matambre relleno arrollado: hervido y horno',
  meta:'Matambre arrollado relleno con huevo, zanahoria y locote: cómo armarlo, atarlo, hervirlo hasta que esté tierno y dorarlo al horno o servirlo frío.',
  h1:'Matambre arrollado relleno, hervido y dorado al horno',
  cardText:'El matambre relleno de huevo, zanahoria y locote, tierno, en rodajas frías o calientes.',
  course:'Plato principal', cuisine:'Casera', category:['carne','fiesta','horno'],
  keywords:['matambre relleno','arrollado de matambre','matambre arrollado','matambre arrollado hervido','matambre al horno relleno','matambre relleno al horno'],

  image:78,
  intro:[
    'El matambre arrollado es un matambre vacuno abierto, cubierto con un relleno de colores, enrollado, atado y cocido lentamente en un caldo hasta que la carne se vuelve tierna. Al cortarlo aparece el espiral de carne con huevo duro, zanahoria y locote. Frío es un clásico de las mesas de Navidad y Año Nuevo; caliente y dorado al horno es un plato de domingo.',
    'Esta receta hace las dos cosas: primero se hierve, que es lo que lo ablanda, y después se dora en el horno. Si lo querés como fiambre, te explicamos cómo prensarlo para que las rodajas salgan firmes. Las cantidades son para 6 personas con un matambre entero.'
  ],
  times:{prep:40, cook:150, rest:15}, difficulty:'Media',
  yield:{mode:'porciones', base:6, options:[2,4,6,12], yieldText:'6 porciones', note:'Un matambre vacuno de 1,6 a 1,8 kg rinde 6 porciones como plato principal o más de 10 como fiambre en una mesa con otros platos. Para 12, armá dos arrollados.'},
  ingredients:[
    {group:'Para el matambre', items:[
      {q:1.7, u:'kg', item:'matambre vacuno', note:'entero, lo más parejo posible'},
      {q:3, u:'diente', item:'ajo', note:'picados'},
      {q:1, u:'atado', item:'perejil', note:'picado'},
      {q:2, u:'cda', item:'vinagre'},
      {q:1, u:'cdita', item:'sal fina'},
      {q:null, item:'pimienta y ají molido', note:'al gusto'}
    ]},
    {group:'Para el relleno', items:[
      {q:4, u:'u', item:'huevos duros', one:'huevo duro', note:'en cuartos a lo largo'},
      {q:2, u:'u', item:'zanahorias', one:'zanahoria', note:'ralladas gruesas o en bastones'},
      {q:1, u:'u', item:'locotes rojos', one:'locote rojo', note:'en tiras'},
      {q:12, u:'u', item:'aceitunas verdes', one:'aceituna verde', note:'descarozadas, opcional'},
      {q:1, u:'sobre', item:'gelatina sin sabor', note:'opcional, para el fiambre'}
    ]},
    {group:'Para el caldo', items:[
      {q:1, u:'u', item:'cebollas', one:'cebolla', note:'en cuartos'},
      {q:1, u:'rama', item:'apio', note:'opcional'},
      {q:2, u:'hoja', item:'laurel'},
      {q:1, u:'cda', item:'sal gruesa'},
      {q:3, u:'l', item:'agua', note:'aproximadamente, hasta cubrir'}
    ]},
    {group:'Para dorar al horno', items:[
      {q:1, u:'cda', item:'mostaza'},
      {q:2, u:'cda', item:'aceite'}
    ]}
  ],
  steps:[
    {title:'Limpiá y emparejá el matambre', text:'Extendelo sobre la mesada con la grasa hacia abajo. Quitá los pedazos de grasa gruesa que sobresalen y, donde la carne sea más gruesa, hacé un corte en bisel y abrila como un libro para que todo quede de un espesor parecido.'},
    {title:'Condimentá la carne', text:'Mezclá el ajo, el perejil, el vinagre, la sal, la pimienta y el ají, y untá toda la cara de carne. Si tenés tiempo, dejalo así tapado en la heladera una hora para que tome sabor.', min:60},
    {title:'Distribuí el relleno', text:'Repartí la zanahoria como una alfombra, dejando libres dos dedos en los bordes. Acomodá los huevos en hileras, las tiras de locote y las aceitunas en líneas paralelas al lado largo de la carne. Si lo vas a servir frío, espolvoreá la gelatina sin sabor por encima.'},
    {title:'Enrollalo en el sentido correcto', text:'Enrollá bien apretado de modo que las fibras de la carne queden a lo largo del arrollado: así, cuando cortes rodajas, vas a cortar contra la fibra. Dejá la parte con grasa hacia afuera.'},
    {title:'Atalo firme', text:'Atá con hilo de cocina cada tres dedos y pasá un hilo a lo largo para cerrar las puntas. Tiene que quedar como un cilindro compacto que no se abra en el agua. Si ves huecos, envolvelo antes en un lienzo limpio y atalo por encima.'},
    {title:'Hervilo despacio', text:'Poné el arrollado en una olla grande con la cebolla, el apio, el laurel y la sal, y cubrilo con agua. Cuando rompa el hervor, bajá al mínimo, tapá y cociná a fuego suave, dándolo vuelta una vez a mitad de camino.', min:120},
    {title:'Probá si está tierno', text:'Pinchalo con un tenedor largo en la parte más gruesa: tiene que entrar sin esfuerzo. Si todavía se resiste, dale 20 a 30 minutos más. Un matambre grande puede necesitar casi dos horas y media.'},
    {title:'Dorá en el horno', text:'Encendé el horno a 200 °C. Escurrí el arrollado, secalo, untalo con la mostaza mezclada con el aceite y ponelo en una asadera. Horneá dándolo vuelta una vez, hasta que tenga color por todos lados.', min:25},
    {title:'Reposá, sacá el hilo y cortá', text:'Dejalo descansar un cuarto de hora para que se asiente el relleno. Cortá el hilo con tijera y feteá rodajas de un dedo con cuchillo bien afilado, sin serrucho.', min:15}
  ],
  tips:[
    'El matambre achica bastante al cocinarse. Por eso el atado tiene que ser firme desde el principio; un hilo flojo deja que el relleno se salga.',
    'Si el matambre es muy grande para tu olla, cortalo a lo ancho antes de rellenar y armá dos arrollados más cortos.',
    'Guardá el caldo colado: sirve como base de una sopa de verduras o un vori vori al día siguiente.',
    'La gelatina sin sabor no se nota en el gusto, pero ayuda a que el relleno quede pegado a la carne cuando se corta en frío.',
    'Dejá la zanahoria algo gruesa: rallada muy fina se deshace durante el hervor y el espiral pierde color.'
  ],
  sections:[
    {title:'Como fiambre para las fiestas', paragraphs:[
      'Para servirlo frío, salteá el horno. Cuando el arrollado esté tierno, dejalo entibiar dentro del caldo, sacalo, envolvelo en papel film y ponelo en una fuente con otra fuente encima y algo pesado arriba, como un par de latas o una botella de agua. Guardalo así en la heladera de un día para otro.',
      'El prensado le da a la carne una forma compacta y hace que las rodajas salgan finas y enteras. En la mesa de fin de año se sirve con ensalada rusa, vitel toné, huevos rellenos y pan casero, junto a otras carnes frías.'
    ]},
    {title:'Rellenos que cambian de casa en casa', paragraphs:[
      'El relleno de huevo, zanahoria y locote es el más repetido, pero en muchas familias se suman fetas de jamón cocido, queso en bastones, espinaca blanqueada o arvejas. La regla es la misma para todos: ingredientes que aguanten dos horas de hervor sin deshacerse y que den color al corte.',
      'Evitá rellenos con mucho líquido o muy grasos, como salchichas crudas, porque ablandan el arrollado por dentro y hacen que se desarme al cortar.'
    ]}
  ],
  variations:[
    ['Matambre arrollado en olla a presión','Con el arrollado bien atado y cubierto de agua, cociná unos 45 a 50 minutos desde que toma presión y dejá que baje sola. Después seguí igual con el horno o con el prensado.'],
    ['Matambre de cerdo arrollado','El matambre de cerdo es más fino y tierno. Rellenalo igual, pero hornealo directamente a 180 °C, tapado con aluminio, unos 60 a 70 minutos, y después destapado hasta dorar. Cocinalo hasta que el centro llegue al menos a 63 °C y dejalo reposar antes de cortar.'],
    ['Con espinaca y queso','Cubrí la carne con hojas de espinaca blanqueadas y bastones de queso Paraguay en lugar del locote. En caliente, el queso se derrite en el centro del espiral.']
  ],
  storage:'Entero y bien envuelto, se conserva en la heladera hasta cuatro días. Cortalo en rodajas recién al servir. También se puede congelar entero hasta dos meses; descongelalo en la heladera, nunca a temperatura ambiente.',
  faq:[
    ['¿Cuánto tiempo se hierve el matambre arrollado?','Entre dos horas y dos horas y media a fuego suave, según el tamaño y lo tierno que sea el matambre. La prueba es el tenedor: tiene que entrar sin esfuerzo en la parte más gruesa.'],
    ['¿Qué lleva el matambre relleno?','La versión clásica lleva huevo duro, zanahoria, locote y ajo con perejil. Muchas familias suman aceitunas, jamón, queso o espinaca.'],
    ['¿Cómo se enrolla el matambre para que no quede duro?','Enrollalo de modo que las fibras queden a lo largo del arrollado. Así, al cortar rodajas, cortás contra la fibra y la carne se siente tierna.'],
    ['¿El matambre arrollado se hace hervido o al horno?','Primero hervido, que es lo que lo ablanda. El horno se usa al final para dorarlo si lo vas a servir caliente. Para fiambre, alcanza con hervirlo y prensarlo.'],
    ['¿Cómo hacer para que el matambre relleno no se desarme?','Atalo firme cada tres dedos, dejá bordes libres al rellenar y, si lo servís frío, prensalo en la heladera de un día para otro antes de cortarlo.'],
    ['¿Se puede preparar el matambre arrollado con anticipación?','Sí, es ideal para las fiestas porque se hace uno o dos días antes y se corta en frío. Guardalo entero y bien envuelto en la heladera.']
  ],
  related:['corte-matambre','receta-matambre-a-la-pizza','receta-vitel-tone','receta-ensalada-rusa','receta-pan-casero','receta-pernil-de-cerdo-al-horno'],
  guides:['guia-cortes-de-carne-vacuna','guia-cuanta-carne-por-persona'],
  cateringOccasion:'fin-de-ano'
};
