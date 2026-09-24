// Recipe module: lomo de cerdo al horno. Shape: sites/comida/content/recipes/sopa-paraguaya.mjs
export default {
  id:'receta-lomo-de-cerdo-al-horno', slug:'lomo-de-cerdo-al-horno', kind:'recipe',
  published:true, indexable:true, updatedAt:'2026-09-24', verifiedAt:'2026-09-24',
  source:'Receta de la redacción de comida.com.py, basada en la cocina casera de Paraguay y el Río de la Plata',
  label:'Lomo de cerdo al horno',
  seoTitle:'Lomo de cerdo al horno: receta jugosa',
  meta:'Lomo de cerdo al horno jugoso: salmuera rápida, sellado, horno a 180 °C hasta 63 °C en el centro y una salsa de mostaza y miel con el fondo de la asadera.',
  h1:'Lomo de cerdo al horno, jugoso y con salsa de mostaza',
  cardText:'Una pieza magra de cerdo que sale rosada pálida y húmeda, con salsa del fondo.',
  course:'Plato principal', cuisine:'Casera', category:['carne','horno','fiesta'],
  keywords:['lomo de cerdo al horno','lomo de cerdo','carré de cerdo al horno','cómo hacer lomo de cerdo al horno','lomo de cerdo jugoso'],
  intro:[
    'El lomo de cerdo es la tira larga y magra que corre a lo largo del espinazo, la misma que con hueso se vende como carré o se corta en chuletas. Tiene poquísima grasa por dentro, así que al horno la diferencia entre jugoso y seco se juega en unos pocos grados. Esta receta usa una salmuera corta, un sellado en sartén y un horno moderado con control de temperatura.',
    'Con una pieza de 1,5 kilos comen 6 personas. El final es una salsa rápida de mostaza y miel armada con el jugo que queda en la asadera, que le da al lomo la humedad que no trae de fábrica.'
  ],
  times:{prep:20, cook:60, rest:10}, difficulty:'Media',
  yield:{mode:'porciones', base:6, options:[2,4,6,12], yieldText:'6 porciones', note:'Unos 250 g crudos por persona, sin hueso. Para 12 porciones usá dos piezas en la misma asadera, sin que se toquen.'},
  ingredients:[
    {group:'Para la salmuera', items:[
      {q:1.5, u:'l', item:'agua fría'},
      {q:3, u:'cda', item:'sal fina'},
      {q:1, u:'cda', item:'azúcar'}
    ]},
    {group:'Para la carne', items:[
      {q:1.5, u:'kg', item:'lomo de cerdo', note:'en una pieza, sin hueso'},
      {q:4, u:'diente', item:'ajo', note:'picados'},
      {q:1, u:'rama', item:'romero fresco', note:'o 1 cdita de romero seco'},
      {q:2, u:'cda', item:'aceite'},
      {q:null, item:'pimienta negra molida', note:'al gusto'}
    ]},
    {group:'Para la salsa', items:[
      {q:150, u:'ml', item:'vino blanco seco o caldo'},
      {q:2, u:'cda', item:'mostaza'},
      {q:1, u:'cda', item:'miel'},
      {q:100, u:'ml', item:'crema de leche', note:'opcional'}
    ]}
  ],
  steps:[
    {title:'Poné el lomo en salmuera', text:'Disolvé la sal y el azúcar en el agua fría. Sumergí el lomo, tapá y llevalo a la heladera entre una y dos horas, no más: la sal entra en la carne magra y la ayuda a retener humedad en el horno.', min:90},
    {title:'Secá y condimentá', text:'Sacá el lomo de la salmuera, enjuagalo apenas y secalo muy bien con papel. Frotalo con el ajo, las hojas de romero picadas, la pimienta y una cucharada de aceite. No hace falta más sal: ya la tiene adentro.'},
    {title:'Encendé el horno', text:'Precalentá el horno a 180 °C. Si la pieza tiene una punta muy fina, doblala hacia abajo y atala con hilo para que todo el lomo tenga un grosor parecido.'},
    {title:'Sellá en sartén', text:'Calentá el resto del aceite en una sartén grande a fuego fuerte y dorá el lomo por todos los lados, girándolo con una pinza, hasta que tenga una costra marrón. Pasalo a una asadera pequeña.', min:8},
    {title:'Horneá con termómetro', text:'Echá el vino en la sartén caliente, raspá el fondo con una cuchara de madera y volcalo en la asadera, alrededor del lomo. Horneá hasta que el centro de la pieza llegue a 63 °C: suele tardar entre 35 y 50 minutos según el grosor.', min:40},
    {title:'Dejalo reposar tapado', text:'Sacá el lomo a una tabla y cubrilo con aluminio. En el reposo la temperatura interna sube dos o tres grados más, por encima del mínimo seguro para el cerdo, y el jugo se redistribuye. Por dentro se verá blanco con un leve tono rosado pálido, y el jugo saldrá claro.', min:10},
    {title:'Terminá la salsa', text:'Pasá el líquido de la asadera a una ollita, sumá la mostaza y la miel y hacé hervir dos o tres minutos. Si usás crema de leche, agregala al final y calentá sin que hierva fuerte. Probá y ajustá con pimienta.', min:4},
    {title:'Cortá y serví', text:'Cortá el lomo en medallones de un centímetro, sumá a la salsa el jugo que haya soltado en la tabla y servila por encima o aparte.'}
  ],
  tips:[
    'Si no tenés termómetro, pinchá el centro con un cuchillo fino y apoyá la hoja en tu muñeca: tibio tirando a caliente y jugo claro indican que está. Pero con un corte tan magro, el termómetro vale la pena.',
    'El lomo con hueso, o carré, se hace igual pero tarda un poco más. Pedí que te separen el espinazo para poder cortar entre costilla y costilla.',
    'Si tenés tiempo, hacé siempre la salmuera: es la diferencia más grande entre un lomo seco y uno jugoso.',
    'Si la salsa queda muy ácida, sumá otra cucharadita de miel; si queda espesa, aligerala con un poco de caldo.',
    'Frío, en fetas finas, el lomo de cerdo es excelente para sándwiches con pan casero y mayonesa.'
  ],
  sections:[
    {title:'Lomo, solomillo y carré: no son lo mismo', paragraphs:[
      'En la carnicería conviene pedir con precisión. El lomo de cerdo es la pieza larga del lomo, sin hueso, de unos 6 a 8 centímetros de diámetro. El solomillo es mucho más chico y fino, está por debajo y se cocina en la mitad del tiempo. El carré es el lomo con las costillas pegadas, y cortado en rodajas da las chuletas.',
      'Esta receta está pensada para la pieza sin hueso. Si en tu carnicería le dicen lomo al solomillo, mirá la receta de solomillo de cerdo, que tiene otros tiempos.'
    ]}
  ],
  variations:[
    ['Con naranja y cebolla','Reemplazá el vino por jugo de naranja y horneá el lomo sobre una cama de cebolla en rodajas. La cebolla se vuelve la base de la salsa.'],
    ['Relleno','Abrí el lomo en forma de libro, rellenalo con espinaca salteada y queso, enrollalo y atalo. Sumá unos diez minutos de horno.'],
    ['Con costra de hierbas','Después de sellar, pintalo con mostaza y cubrilo con pan rallado mezclado con perejil y ajo antes de hornear.']
  ],
  storage:'Guardalo entero o en fetas, bien tapado, en la heladera hasta tres días, y la salsa aparte. Para calentarlo sin secarlo, poné las fetas en la salsa caliente fuera del fuego unos minutos.',
  faq:[
    ['¿Cuánto tiempo va el lomo de cerdo al horno?','Una pieza de 1,5 kilos, ya sellada, tarda entre 35 y 50 minutos a 180 °C. Más que el reloj, fijate que el centro llegue a 63 °C antes de sacarlo.'],
    ['¿A qué temperatura se cocina el lomo de cerdo para que sea seguro?','El centro tiene que llegar al menos a 63 °C y después reposar unos minutos tapado. En ese reposo sube un poco más y el jugo se asienta.'],
    ['¿El lomo de cerdo puede quedar rosado?','Un tono rosado muy pálido es normal cuando llegó a 63 °C y reposó. Lo que no tiene que quedar es rojo ni con jugo turbio.'],
    ['¿Por qué el lomo de cerdo queda seco?','Porque tiene muy poca grasa y se pasa enseguida. La salmuera y retirarlo a tiempo, con termómetro, son las dos claves.'],
    ['¿Qué diferencia hay entre lomo y carré de cerdo?','Es el mismo músculo. El carré conserva las costillas y el lomo viene limpio, sin hueso.'],
    ['¿Con qué acompaño el lomo de cerdo al horno?','Con papas al horno, puré, arroz primavera o una ensalada de papa si lo servís frío.']
  ],
  related:['receta-solomillo-de-cerdo','receta-chuletas-de-cerdo','receta-bondiola-al-horno','corte-bondiola-de-cerdo','receta-papas-al-horno','receta-arroz-primavera'],
  guides:['guia-cuanta-carne-por-persona'],
  cateringOccasion:'fin-de-ano'
};
