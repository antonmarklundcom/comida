// Recipe module: solomillo de cerdo. Shape: sites/comida/content/recipes/sopa-paraguaya.mjs
export default {
  id:'receta-solomillo-de-cerdo', slug:'solomillo-de-cerdo', kind:'recipe',
  published:true, indexable:true, updatedAt:'2026-09-24', verifiedAt:'2026-09-24',
  source:'Receta de la redacción de comida.com.py, basada en la cocina casera de Paraguay y el Río de la Plata',
  label:'Solomillo de cerdo',
  seoTitle:'Solomillo de cerdo con salsa de mostaza',
  meta:'Solomillo de cerdo sellado en sartén y terminado al horno, jugoso y seguro a 63 °C, con una salsa de mostaza y crema lista en el mismo tiempo.',
  h1:'Solomillo de cerdo con salsa de mostaza y crema',
  cardText:'El corte más tierno del cerdo, listo en media hora con una salsa cremosa.',
  course:'Plato principal', cuisine:'Casera', category:['carne','rapida','fiesta'],
  keywords:['solomillo','solomillo de cerdo','solomillo de cerdo al horno','solomillo de cerdo a la mostaza','cómo hacer solomillo de cerdo'],
  intro:[
    'El solomillo de cerdo es un músculo fino y alargado, de unos 400 a 500 gramos, que va por dentro del lomo, pegado a la columna. Casi no trabaja, así que es la parte más tierna del animal y se cocina en muy poco tiempo. Por la misma razón no tolera el descuido: con unos minutos de más pasa de jugoso a fibroso.',
    'Esta receta lo sella en sartén, lo termina en horno caliente y aprovecha el fondo para una salsa de mostaza y crema de leche. Con tres solomillos comen 6 personas, y todo está listo en poco más de media hora.'
  ],
  times:{prep:10, cook:25, rest:6}, difficulty:'Fácil',
  yield:{mode:'porciones', base:6, options:[2,4,6,12], yieldText:'6 porciones', note:'Medio solomillo por persona, unos 220 g crudos. Para 2 personas alcanza con un solomillo.'},
  ingredients:[
    {group:'Para el solomillo', items:[
      {q:3, u:'u', item:'solomillos de cerdo', one:'solomillo de cerdo', note:'de 400 a 500 g cada uno'},
      {q:2, u:'cdita', item:'sal fina'},
      {q:null, item:'pimienta negra molida', note:'al gusto'},
      {q:1, u:'cdita', item:'pimentón dulce'},
      {q:2, u:'cda', item:'aceite'}
    ]},
    {group:'Para la salsa', items:[
      {q:1, u:'u', item:'cebolla mediana', note:'picada fina'},
      {q:20, u:'g', item:'manteca'},
      {q:100, u:'ml', item:'vino blanco seco o caldo'},
      {q:2, u:'cda', item:'mostaza', note:'mejor si es de grano entero'},
      {q:200, u:'ml', item:'crema de leche'},
      {q:1, u:'cda', item:'cebollita de hoja picada'}
    ]}
  ],
  steps:[
    {title:'Limpiá los solomillos', text:'Buscá la telita plateada que suele cubrir un costado y retirala deslizando la punta de un cuchillo por debajo, con la hoja inclinada hacia la tela y no hacia la carne. Si la dejás, el solomillo se arquea en la sartén.'},
    {title:'Condimentá y encendé el horno', text:'Precalentá el horno a 200 °C. Secá los solomillos, salalos y condimentalos con pimienta y pimentón. Doblá la punta fina sobre sí misma y sujetala con un palillo o hilo para que el grosor sea parejo.'},
    {title:'Sellá a fuego fuerte', text:'Calentá el aceite en una sartén que pueda ir al horno, o en una común si después vas a pasarlos a una asadera. Dorá los solomillos por todos los lados, girándolos cada minuto, hasta que tengan una costra uniforme.', min:5},
    {title:'Terminá en el horno', text:'Llevalos al horno hasta que el centro de la parte más gruesa marque 63 °C. Según el grosor, tarda entre 10 y 15 minutos. Si no tenés termómetro, apretalos con la pinza: firmes con un poco de elasticidad, nunca duros.', min:12},
    {title:'Reposá sobre una tabla', text:'Sacalos del horno, pasalos a una tabla y cubrilos con aluminio sin apretar. En el reposo la temperatura sube un poco más y la carne se vuelve a relajar.', min:6},
    {title:'Hacé la salsa en la sartén', text:'Con cuidado, porque el mango quema si estuvo en el horno, poné la sartén a fuego medio con la manteca y la cebolla. Cociná hasta que esté transparente, raspando el fondo dorado que dejó la carne.', min:5},
    {title:'Terminá con vino, mostaza y crema', text:'Agregá el vino y dejalo reducir a la mitad. Incorporá la mostaza y la crema de leche, revolvé y dejá que tome cuerpo a fuego bajo, sin hervor fuerte, dos o tres minutos. Sumá la cebollita de hoja y ajustá la sal.', min:4},
    {title:'Cortá en medallones', text:'Cortá los solomillos en medallones de dos dedos, en diagonal. Adentro tienen que verse blancos con un leve tono rosado claro y húmedos. Serví con la salsa caliente y el jugo que quedó en la tabla.'}
  ],
  tips:[
    'Mirá el solomillo que vas a comprar: si no tiene una forma parecida a un cono largo y parejo, puede ser un recorte de lomo con otro tiempo de cocción.',
    'Si lo cocinás a la parrilla, hacelo entero sobre brasa medio fuerte, girando cada tres o cuatro minutos, entre 15 y 20 minutos en total.',
    'Para una salsa más liviana, reemplazá la crema por caldo y espesala con una cucharadita de almidón de maíz disuelta en agua fría.',
    'Los medallones crudos, de dos dedos y aplastados apenas con la mano, se hacen en sartén en tres o cuatro minutos por lado.',
    'Un poco de miel en la salsa, una cucharadita, equilibra la acidez de la mostaza si a los chicos no les gusta fuerte.'
  ],
  sections:[
    {title:'Con qué servir el solomillo', paragraphs:[
      'La salsa cremosa pide algo que la absorba: puré de papas, arroz primavera o papas al horno. Para una mesa de fiesta, los medallones sobre una fuente con la salsa aparte quedan prolijos y se sirven fácil.',
      'Si lo querés más paraguayo, probalo con mandioca hervida y apenas dorada en manteca, y una ensalada de tomate y cebolla para cortar la crema.'
    ]}
  ],
  variations:[
    ['Solomillo con naranja','Reemplazá la crema por el jugo de dos naranjas y una cucharada de miel. Reducí hasta que la salsa quede brillante.'],
    ['Envuelto en panceta','Enrollalo con fetas de panceta antes de sellar. La panceta lo protege y le suma sabor ahumado; sumá unos minutos al horno.'],
    ['Con champiñones','Sumá 200 gramos de champiñones en láminas a la cebolla y dejalos dorar antes de agregar el vino.']
  ],
  storage:'Guardá los solomillos enteros y la salsa por separado, en la heladera, hasta dos días. Cortá frío y calentá los medallones en la salsa caliente, fuera del fuego, para que no se sequen.',
  faq:[
    ['¿Cuánto tiempo se hace el solomillo de cerdo al horno?','Ya sellado en sartén, entre 10 y 15 minutos a 200 °C, según el grosor. Está listo cuando el centro llega a 63 °C.'],
    ['¿El solomillo de cerdo puede quedar rosado por dentro?','Un tono rosado claro es normal cuando el centro llegó a 63 °C y reposó unos minutos. No tiene que verse rojo ni largar jugo turbio.'],
    ['¿Qué diferencia hay entre solomillo y lomo de cerdo?','El solomillo es un músculo chico y fino que va por dentro, junto a la columna. El lomo es más grande y ancho, y con hueso da las chuletas.'],
    ['¿Cuántos solomillos de cerdo para 6 personas?','Como estimación de la redacción, tres solomillos de 400 a 500 gramos. Si hay otros platos fuertes en la mesa, con dos puede alcanzar.'],
    ['¿Se puede hacer solomillo de cerdo sin horno?','Sí. Sellalo y seguí en la misma sartén tapada, a fuego medio bajo, girándolo cada tanto hasta llegar a 63 °C. Tarda un poco más que en el horno.'],
    ['¿Qué salsa va bien con solomillo de cerdo?','La de mostaza y crema de esta receta, una de naranja y miel, o una de champiñones. Todas se hacen en la misma sartén.']
  ],
  related:['receta-lomo-de-cerdo-al-horno','receta-chuletas-de-cerdo','receta-bondiola-al-horno','corte-bondiola-de-cerdo','receta-arroz-primavera','receta-papas-al-horno'],
  guides:['guia-cuanta-carne-por-persona','guia-que-cocinar-hoy'],
  cateringOccasion:'fin-de-ano'
};
