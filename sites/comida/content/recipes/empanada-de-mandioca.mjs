export default {
  id:'receta-empanada-de-mandioca', slug:'empanada-de-mandioca', kind:'recipe',
  published:true, indexable:true, updatedAt:'2026-09-24', verifiedAt:'2026-09-24',
  source:'Receta de la redacción de comida.com.py, basada en la preparación casera paraguaya',
  label:'Empanada de mandioca',
  seoTitle:'Empanada de mandioca: masa y relleno',
  meta:'Empanada de mandioca paraguaya: masa de mandioca hervida con almidón, relleno de carne o de queso Paraguay y fritura dorada. Paso a paso y trucos.',
  h1:'Empanada de mandioca, con carne o con queso',
  cardText:'Masa de mandioca y almidón, rellena de carne o queso y frita hasta dorar.',
  course:'Entrada', cuisine:'Paraguaya', category:['paraguaya','carne','fiesta'],
  keywords:['empanada de mandioca','empanadas de mandioca','masa de mandioca para empanadas','empanada de mandioca con queso','empanada de mandioca con carne'],
  intro:[
    'La empanada de mandioca no lleva harina de trigo: la masa se hace con mandioca hervida y pisada, un poco de almidón para darle cuerpo, huevo y grasa. Frita, queda con una corteza fina y crocante y un interior suave, apenas elástico, que recuerda al mbeju y a la chipa. En Paraguay se rellena sobre todo con carne picada o con queso Paraguay.',
    'La receta rinde unas 18 empanadas medianas, tres por persona para una comida liviana. Trae dos rellenos, carne y queso, para que armés mitad y mitad o elijás uno solo duplicando la cantidad.'
  ],
  times:{prep:50, cook:45, rest:30}, difficulty:'Media',
  yield:{mode:'porciones', base:6, options:[2,4,6,12], yieldText:'18 empanadas (6 porciones)', note:'Estimación de la redacción: tres empanadas por persona como comida y una o dos si acompañan otros bocaditos.'},
  ingredients:[
    {group:'Para la masa de mandioca', items:[
      {q:1.2, u:'kg', item:'mandioca fresca', note:'pesada con cáscara; rinde cerca de 1 kg pelada'},
      {q:150, u:'g', item:'almidón de mandioca', note:'más un poco para la mesada'},
      {q:1, u:'u', item:'huevo'},
      {q:40, u:'g', item:'grasa de cerdo o manteca', note:'blanda'},
      {q:1, u:'cdita', item:'sal fina'}
    ]},
    {group:'Relleno de carne', items:[
      {q:400, u:'g', item:'carne vacuna molida'},
      {q:2, u:'cda', item:'aceite'},
      {q:1, u:'u', item:'cebolla grande', note:'picada fina'},
      {q:0.5, u:'u', item:'locote rojo', note:'picado fino'},
      {q:0.5, u:'atado', item:'cebollita de hoja', note:'picada'},
      {q:1, u:'cdita', item:'comino molido'},
      {q:1, u:'cdita', item:'sal fina'},
      {q:2, u:'u', item:'huevos duros', one:'huevo duro', note:'picados'}
    ]},
    {group:'Relleno de queso', items:[
      {q:250, u:'g', item:'queso Paraguay', note:'en bastones o desmenuzado grueso'},
      {q:null, item:'orégano seco', note:'al gusto'}
    ]},
    {group:'Para freír', items:[
      {q:1, u:'l', item:'aceite para freír'}
    ]}
  ],
  steps:[
    {title:'Herví la mandioca', text:'Pelá la mandioca, sacale la fibra dura del centro y cortala en trozos. Ponela en una olla con agua fría y sal, llevá a hervor y cociná hasta que un cuchillo entre sin resistencia y algunos trozos empiecen a abrirse.', min:30},
    {title:'Pisala en caliente', text:'Escurrí muy bien y pisá la mandioca todavía caliente con un pisapapas o un tenedor, hasta que no queden grumos ni hebras. En caliente se pisa fácil; fría se vuelve gomosa y cuesta dejarla lisa.'},
    {title:'Prepará el relleno de carne', text:'Mientras la mandioca se entibia, rehogá la cebolla y el locote en el aceite. Sumá la carne, desgranala y cociná hasta que se seque el jugo. Condimentá con comino y sal, apagá, agregá la cebollita y el huevo duro, y dejá enfriar por completo.', min:15},
    {title:'Formá la masa', text:'Con el puré tibio, agregá la grasa, la sal y el huevo, y después el almidón de a poco, amasando con la mano. Buscá una masa suave que se despegue de los dedos. Si sigue pegajosa, sumá una cucharada más de almidón; si se agrieta, un chorrito de agua.'},
    {title:'Dejá reposar tapada', text:'Cubrí la masa con film para que no forme costra y dejala descansar. El almidón termina de hidratarse y la masa se vuelve más fácil de estirar sin romperse.', min:30},
    {title:'Armá las empanadas', text:'Tomá porciones del tamaño de un huevo y aplastalas entre dos láminas de plástico hasta dejar discos de unos 5 mm y 12 cm de diámetro. Poné una cucharada de relleno de carne, o un bastón de queso con una pizca de orégano, doblá con ayuda del plástico y apretá el borde con los dedos.'},
    {title:'Freí hasta dorar', text:'Calentá el aceite a unos 175 °C y freí de a tres o cuatro, dándolas vuelta una vez, hasta que estén doradas y firmes. Sacalas con espumadera y dejalas sobre papel absorbente.', min:5},
    {title:'Serví enseguida', text:'Comelas recién hechas o tibias: el relleno de queso tiene que estar derretido y la corteza todavía crocante. Con el paso de las horas la masa se ablanda, aunque sigue rica.'}
  ],
  tips:[
    'Elegí mandioca fresca y blanca por dentro, sin vetas oscuras. Si al hervirla queda dura en algunos trozos, descartá esos pedazos: no se pisan bien y dejan grumos en la masa.',
    'La cantidad de almidón depende de lo húmeda que salió la mandioca. Agregalo de a poco y pará cuando la masa ya no se pegue; con exceso queda seca y se quiebra al doblar.',
    'Estirar entre dos plásticos, como una bolsa abierta, evita que la masa se pegue y permite doblar la empanada sin que se rompa.',
    'Si el queso Paraguay es muy salado, no agregues sal a la masa de las empanadas de queso: el contraste con la mandioca apenas salada queda mejor.',
    'Freí una empanada de prueba. Si se abre, la masa está muy blanda o el borde no quedó bien sellado.'
  ],
  variations:[
    ['Al horno','Pincelalas con huevo batido y horneá a 200 °C sobre asadera aceitada unos 25 minutos, dando vuelta a mitad de cocción. La corteza queda menos burbujeada pero se evita la fritura.'],
    ['Con pollo','Usá pollo hervido y desmenuzado, salteado con cebolla, locote y un poco de caldo para que quede jugoso.'],
    ['Con mandioca sobrante','Si te sobró mandioca hervida del asado, pisala recalentada con un chorrito del agua de cocción antes de sumar el resto de los ingredientes.']
  ],
  storage:'Crudas y armadas se pueden congelar sobre una bandeja con papel manteca y después pasar a una bolsa; se fríen sin descongelar, a fuego un poco más bajo. Fritas, se guardan en la heladera hasta dos días y se recalientan en horno caliente, no en microondas, que las deja gomosas.',
  sections:[
    {title:'Una empanada hecha con lo que da la chacra', paragraphs:[
      'La mandioca está en casi todas las mesas paraguayas: hervida junto al asado, en el puchero, en el mbeju y, a través del almidón, en la chipa. Usarla como masa de empanada es una forma casera de aprovecharla, sin harina de trigo, y el resultado tiene una textura propia que no se parece a la de la empanada de harina.',
      'Como la masa no tiene gluten de trigo, es más frágil que una masa común y no permite un repulgue fino. Por eso el borde se aprieta con los dedos y las empanadas salen algo más gruesas. Quien no consuma gluten debe revisar igualmente que el almidón y los demás ingredientes no tengan contaminación cruzada.'
    ]}
  ],
  faq:[
    ['¿Cómo se hace la masa de mandioca para empanadas?','Con mandioca hervida y pisada en caliente, grasa, sal, un huevo y almidón agregado de a poco hasta que la masa deje de pegarse. Un reposo de media hora la vuelve más fácil de manejar.'],
    ['¿Lleva almidón la empanada de mandioca?','En esta receta sí: unos 150 g por kilo de mandioca pelada. El almidón le da elasticidad y evita que la masa se abra en el aceite. La cantidad exacta depende de la humedad de la mandioca.'],
    ['¿Por qué se rompe la masa de mandioca al doblarla?','Porque tiene demasiado almidón o se enfrió y se secó. Tapala siempre con film y, si se agrieta, amasala con unas gotas de agua antes de seguir.'],
    ['¿Qué relleno lleva la empanada de mandioca?','Los más comunes son carne picada con cebolla, locote y huevo, o queso Paraguay solo. También se hacen de pollo o mitad carne y mitad queso.'],
    ['¿Se puede hacer empanada de mandioca al horno?','Sí, pincelada con huevo y a 200 °C. Queda más seca que la frita, así que conviene servirla recién salida del horno.'],
    ['¿La empanada de mandioca es apta para celíacos?','La receta no usa harina de trigo, pero no podemos asegurar que cada ingrediente esté libre de trazas de gluten. Si cocinás para una persona celíaca, elegí productos rotulados sin TACC.']
  ],
  related:['receta-empanadas-de-carne','receta-mbeju','receta-chipa-almidon','receta-empanadas-de-choclo','receta-croquetas-de-carne'],
  guides:['guia-queso-paraguay','guia-cuantos-bocaditos-por-persona'],
  cateringOccasion:'bocaditos'
};
