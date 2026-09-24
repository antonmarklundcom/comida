// Recipe module: bondiola de cerdo al horno. Companion of corte-bondiola-de-cerdo. Shape: sites/comida/content/recipes/sopa-paraguaya.mjs
export default {
  id:'receta-bondiola-al-horno', slug:'bondiola-al-horno', kind:'recipe',
  published:true, indexable:true, updatedAt:'2026-09-24', verifiedAt:'2026-09-24',
  source:'Receta de la redacción de comida.com.py, basada en la cocina casera de Paraguay y el Río de la Plata',
  label:'Bondiola al horno',
  seoTitle:'Bondiola de cerdo al horno: receta jugosa',
  meta:'Bondiola de cerdo al horno con naranja, ajo y pimentón: marinada, tiempos tapada y destapada, temperatura segura y cómo cortarla para que quede jugosa.',
  h1:'Bondiola de cerdo al horno con naranja y ajo',
  cardText:'Bondiola entera marinada, tierna por dentro y dorada por fuera.',
  course:'Plato principal', cuisine:'Casera', category:['carne','horno','fiesta'],
  keywords:['bondiola de cerdo al horno','bondiola al horno','bondiola de cerdo','cómo hacer bondiola al horno','bondiola al horno con papas'],
  intro:[
    'La bondiola al horno es de esas preparaciones que trabajan solas: una marinada de naranja, ajo y pimentón la noche anterior, un largo rato tapada en el horno y un final destapado para que la superficie se caramelice. La grasa que la atraviesa hace el resto y la deja húmeda aunque la cocción sea larga.',
    'Con una pieza de 1,8 kilos comen 6 personas. Si querés conocer el corte a fondo, cómo elegirlo y cuánto comprar, está explicado en la guía de la bondiola de cerdo; esta página es la receta para el horno de tu casa.'
  ],
  times:{prep:20, cook:130, rest:15}, difficulty:'Fácil',
  yield:{mode:'porciones', base:6, options:[2,4,6,12], yieldText:'6 porciones', note:'Unos 300 g crudos por persona. Para 2 personas conviene usar bifes gruesos de bondiola y acortar el horno.'},
  ingredients:[
    {group:'Para la marinada', items:[
      {q:2, u:'u', item:'naranjas', one:'naranja', note:'jugo y ralladura de una'},
      {q:5, u:'diente', item:'ajo', note:'machacados'},
      {q:1, u:'cda', item:'pimentón dulce'},
      {q:1, u:'cdita', item:'orégano seco'},
      {q:1, u:'cda', item:'mostaza'},
      {q:2, u:'cda', item:'aceite'},
      {q:1, u:'cda', item:'sal fina'},
      {q:null, item:'pimienta negra molida', note:'al gusto'}
    ]},
    {group:'Para el horno', items:[
      {q:1.8, u:'kg', item:'bondiola de cerdo', note:'en una pieza, atada si es irregular'},
      {q:2, u:'u', item:'cebollas grandes', one:'cebolla grande', note:'en rodajas gruesas'},
      {q:200, u:'ml', item:'vino blanco seco o caldo'},
      {q:2, u:'hoja', item:'laurel'}
    ]}
  ],
  steps:[
    {title:'Prepará la marinada', text:'Exprimí las naranjas y rallá la cáscara de una, solo la parte naranja. Mezclalas en un bol con el ajo, el pimentón, el orégano, la mostaza, el aceite, la sal y la pimienta hasta tener una pasta líquida.'},
    {title:'Mariná la bondiola de un día para otro', text:'Pinchá la bondiola en varios lugares con un cuchillo fino y frotala con la marinada, metiendo un poco en los cortes. Guardala en una bolsa o fuente tapada en la heladera toda la noche, dándola vuelta una vez si podés.'},
    {title:'Sacala antes y encendé el horno', text:'Retirala de la heladera 40 minutos antes de hornear. Mientras tanto, encendé el horno a 170 °C y armá una cama de cebolla en rodajas con el laurel en el fondo de una asadera.', min:40},
    {title:'Horneá tapada', text:'Apoyá la bondiola sobre la cebolla, volcá el resto de la marinada y el vino alrededor, no por encima. Cubrí la asadera con papel aluminio bien cerrado y llevala al horno. Ese vapor es el que ablanda la carne sin secarla.', min:90},
    {title:'Destapá y dorá', text:'Retirá el aluminio con cuidado porque sale vapor. Rociá la carne con el jugo de la asadera, subí el horno a 200 °C y seguí hasta que la superficie esté bien dorada. Si el fondo se seca, agregá un chorrito de agua caliente.', min:35},
    {title:'Comprobá la cocción', text:'La bondiola está segura cuando el centro llega al menos a 63 °C. Para una textura tierna que se corta fácil, sacala entre 68 y 72 °C. Sin termómetro, pinchá la parte más gruesa: el jugo tiene que salir claro, sin rastro rosado.'},
    {title:'Reposá antes de cortar', text:'Pasala a una tabla y tapala con el mismo aluminio. En ese cuarto de hora la temperatura interna se empareja y la carne retiene su jugo.', min:15},
    {title:'Armá la salsa con el fondo', text:'Mientras reposa, pasá la cebolla y el jugo de la asadera a una sartén, retirá el laurel y hacé hervir unos minutos hasta que espese un poco. Cortá la bondiola en fetas de medio centímetro y servila con esa salsa por encima.'}
  ],
  tips:[
    'Si la pieza viene muy desprolija, atala con hilo de cocina cada tres dedos: se cocina pareja y las fetas salen redondas.',
    'Sin tiempo para marinar de un día para otro, dos horas en la heladera ya le dan sabor; lo que se pierde es algo de profundidad.',
    'Podés sumar papas en gajos a la asadera cuando la destapás. Con 35 minutos a 200 °C se doran en el mismo jugo.',
    'La naranja agria de los patios paraguayos funciona muy bien en lugar de la dulce; si la usás, reducí un poco el vino.',
    'Para sándwiches, dejala enfriar entera en la heladera: fría se corta en fetas finas sin desarmarse.'
  ],
  sections:[
    {title:'Con qué servir la bondiola al horno', paragraphs:[
      'En una mesa de domingo, la bondiola en fetas va bien con papas al horno o arroz primavera, que absorben la salsa de cebolla. Para un almuerzo más paraguayo, acompañala con mandioca hervida y sopa paraguaya.',
      'Cuando es para muchos, la bondiola al horno resuelve el plato principal sin parrilla: se puede hornear horas antes, cortar fría y calentar las fetas en la salsa justo antes de servir.'
    ]}
  ],
  variations:[
    ['Bondiola desmechada','Dejala tapada a 150 °C entre tres y cuatro horas con más líquido, hasta que se deshaga con un tenedor. Desmechala en su jugo y usala en pan.'],
    ['Con miel y mostaza','En el paso de dorado, pintala con dos cucharadas de miel mezcladas con una de mostaza. Vigilá que no se queme en los últimos minutos.'],
    ['Con cerveza','Reemplazá el vino por la misma cantidad de cerveza rubia y la naranja por limón. Queda más amarga y muy buena para sándwiches.']
  ],
  storage:'Guardala en fetas, con su salsa, en un recipiente tapado en la heladera hasta tres días. Calentala tapada en el horno o en sartén con un chorrito de agua. Congelada, en porciones con salsa, se mantiene bien hasta dos meses.',
  faq:[
    ['¿Cuánto tiempo va la bondiola al horno?','Para una pieza de alrededor de 1,8 kilos, una hora y media tapada a 170 °C y unos 35 minutos destapada a 200 °C. Una más grande necesita un poco más.'],
    ['¿A qué temperatura interna está lista la bondiola?','Está segura desde 63 °C en el centro con unos minutos de reposo. Entre 68 y 72 °C queda tierna, jugosa y fácil de cortar.'],
    ['¿La bondiola al horno se hace tapada o destapada?','Las dos cosas: tapada la mayor parte del tiempo para que se ablande en su vapor, y destapada al final para dorar la superficie.'],
    ['¿Hace falta marinar la bondiola?','No es obligatorio, pero mejora mucho el sabor. Lo ideal es de un día para otro; con un par de horas ya se nota la diferencia.'],
    ['¿Se puede hacer la bondiola al horno con papas?','Sí. Agregá las papas en gajos cuando destapás la asadera y subís el horno. Se doran con el jugo de la carne en el mismo tiempo.'],
    ['¿Por qué la bondiola al horno me quedó seca?','Suele pasar por hornearla destapada todo el tiempo o a temperatura muy alta. Tapala bien con aluminio durante la primera etapa y cuidá que haya líquido en la asadera.']
  ],
  related:['corte-bondiola-de-cerdo','receta-lomo-de-cerdo-al-horno','receta-costillar-de-cerdo-al-horno','receta-papas-al-horno','receta-arroz-primavera','receta-sopa-paraguaya'],
  guides:['guia-cuanta-carne-por-persona','guia-mercado-de-abasto'],
  cateringOccasion:'fin-de-ano'
};
