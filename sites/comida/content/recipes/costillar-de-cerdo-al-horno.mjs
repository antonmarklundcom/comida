// Recipe module: costillar de cerdo al horno. Companion of corte-costillar-de-cerdo. Shape: sites/comida/content/recipes/sopa-paraguaya.mjs
export default {
  id:'receta-costillar-de-cerdo-al-horno', slug:'costillar-de-cerdo-al-horno', kind:'recipe',
  published:true, indexable:true, updatedAt:'2026-09-24', verifiedAt:'2026-09-24',
  source:'Receta de la redacción de comida.com.py, basada en la cocina casera de Paraguay y el Río de la Plata',
  label:'Costillar de cerdo al horno',
  seoTitle:'Costillar de cerdo al horno: receta tierna',
  meta:'Costillar de cerdo al horno que se despega del hueso: aliño seco, horno tapado a 160 °C, glaseado casero al final y señales para saber que está listo.',
  h1:'Costillar de cerdo al horno, tierno y glaseado',
  cardText:'Planchas de costilla horneadas despacio y pintadas con un glaseado casero.',
  course:'Plato principal', cuisine:'Casera', category:['carne','horno','fiesta'],
  keywords:['costillar de cerdo al horno','costillas de cerdo al horno','costillar al horno','costillitas de cerdo al horno','costillar de cerdo'],
  intro:[
    'El costillar de cerdo al horno sale tierno con una receta de dos tiempos: primero, dos horas envuelto y a temperatura moderada, para que el colágeno se funda; después, destapado y pintado con un glaseado de tomate, miel y mostaza hasta que se pegue brillante sobre la carne.',
    'Con 2,5 kilos de planchas de costilla comen 6 personas. Cómo distinguir el pechito de la costilla de lomo y cómo elegir buenas planchas está en la guía del costillar de cerdo; acá está el paso a paso para el horno.'
  ],
  times:{prep:25, cook:150, rest:10}, difficulty:'Fácil',
  yield:{mode:'porciones', base:6, options:[2,4,6,12], yieldText:'6 porciones', note:'Unos 400 g de costillar con hueso por persona. Para 12 porciones vas a necesitar dos asaderas o hornear en tandas.'},
  ingredients:[
    {group:'Para el aliño seco', items:[
      {q:2.5, u:'kg', item:'costillar de cerdo', note:'en planchas de 8 a 12 costillas'},
      {q:1, u:'cda', item:'sal fina'},
      {q:1, u:'cda', item:'pimentón dulce'},
      {q:1, u:'cda', item:'azúcar'},
      {q:1, u:'cdita', item:'ajo en polvo'},
      {q:1, u:'cdita', item:'comino molido'},
      {q:null, item:'pimienta negra molida', note:'al gusto'}
    ]},
    {group:'Para el horno', items:[
      {q:150, u:'ml', item:'agua o caldo'},
      {q:2, u:'cda', item:'vinagre de manzana'}
    ]},
    {group:'Para el glaseado', items:[
      {q:150, u:'ml', item:'salsa de tomate', note:'o puré de tomate bien reducido'},
      {q:3, u:'cda', item:'miel'},
      {q:1, u:'cda', item:'mostaza'},
      {q:1, u:'cda', item:'vinagre de manzana'},
      {q:1, u:'cdita', item:'pimentón'}
    ]}
  ],
  steps:[
    {title:'Retirá la membrana', text:'Poné las planchas con el hueso hacia arriba. Con la punta de un cuchillo levantá la telita blanca en una esquina, agarrala con un papel de cocina y tirá de ella en una sola tira. Si se corta, repetí desde otro borde.'},
    {title:'Condimentá con el aliño seco', text:'Mezclá la sal, el pimentón, el azúcar, el ajo en polvo, el comino y la pimienta. Frotá la mezcla por los dos lados de cada plancha. Si tenés tiempo, dejalas así tapadas en la heladera entre una hora y toda la noche.'},
    {title:'Precalentá y armá el paquete', text:'Encendé el horno a 160 °C. Apoyá las planchas en una asadera con la carne hacia arriba, echá el agua con el vinagre en el fondo y cubrí todo con papel aluminio, bien sellado por los bordes para que no escape el vapor.'},
    {title:'Horneá tapado despacio', text:'Llevá la asadera al horno y dejala sin abrir. En este tramo largo la grasa se derrite y la carne se ablanda en el vapor del fondo.', min:120},
    {title:'Prepará el glaseado', text:'Mientras tanto, calentá en una ollita la salsa de tomate, la miel, la mostaza, el vinagre y el pimentón. Dejala hervir suave unos minutos, revolviendo, hasta que espese y cubra el dorso de una cuchara.', min:5},
    {title:'Comprobá que esté tierno', text:'Destapá con cuidado. El costillar está listo para el glaseado cuando la carne se retrajo y asoma la punta de los huesos, y al levantar una plancha por el centro con una pinza se dobla y se agrieta arriba. Si todavía está rígido, tapá y seguí 20 minutos más.'},
    {title:'Glaseá y dorá', text:'Subí el horno a 200 °C. Descartá casi todo el líquido de la asadera, pintá la carne con la mitad del glaseado y horneá destapado. Pintá con el resto a mitad de tiempo y vigilá los bordes: el azúcar pasa de brillante a quemado rápido.', min:25},
    {title:'Reposá, cortá y serví', text:'Dejá descansar el costillar unos minutos para que el glaseado se asiente. Cortalo entre hueso y hueso con un cuchillo grande y servilo caliente, con servilletas a mano.', min:10}
  ],
  tips:[
    'La carne de cerdo tiene que llegar al menos a 63 °C, pero para que se desprenda del hueso hace falta mucho más; con este método termina cerca de 85 a 90 °C y sigue húmeda gracias al vapor.',
    'Si las planchas son muy largas, cortalas por la mitad para que entren sin superponerse: amontonadas se cocinan al vapor y no se doran.',
    'El pechito, con más grasa, soporta mejor el horno largo. La costilla de lomo es más magra: revisala 20 minutos antes.',
    'Podés hacer el tramo tapado el día anterior, enfriar, guardar en la heladera y glasear al día siguiente justo antes de comer.',
    'Guardá el jugo que queda en la asadera, desgrasado: es un buen caldo para un arroz o un guiso.'
  ],
  sections:[
    {title:'Por qué dos temperaturas', paragraphs:[
      'El costillar tiene mucho tejido que une la carne al hueso. A 160 °C y en un ambiente húmedo ese tejido se va transformando sin que la superficie se reseque. Si se hornea destapado y fuerte desde el principio, se dora por fuera y queda firme junto al hueso.',
      'El golpe final a 200 °C es para el color y para que el glaseado se pegue. Es un tramo corto a propósito: el trabajo pesado ya lo hizo el vapor.'
    ]}
  ],
  variations:[
    ['Sin glaseado, con limón y ajo','Después del tramo tapado, rociá las planchas con jugo de limón, ajo picado y perejil, y dorá 20 minutos a 200 °C sin salsa.'],
    ['Con naranja agria','Reemplazá la mitad de la miel del glaseado por jugo de naranja agria y sumá la ralladura. Queda más ácido y menos pegajoso.'],
    ['Terminado en la parrilla','Hacé el tramo tapado en el horno y terminá las planchas pintadas sobre brasa suave, unos diez minutos por lado.']
  ],
  storage:'Guardalo en la heladera, tapado, hasta tres días. Para calentarlo, envolvelo en aluminio con una cucharada de agua y dejalo 15 minutos a 180 °C; destapalo al final si querés recuperar el brillo del glaseado.',
  faq:[
    ['¿Cuánto tarda el costillar de cerdo al horno?','Unas dos horas tapado a 160 °C y otros 20 a 25 minutos destapado a 200 °C para glasear. Planchas muy carnosas pueden necesitar media hora más en el primer tramo.'],
    ['¿Cómo sé si el costillar al horno está listo?','Cuando la carne se retrae y deja ver la punta del hueso, y al levantar la plancha por el medio se dobla y se abre en la superficie.'],
    ['¿Hay que hervir las costillas antes de hornearlas?','No hace falta. El horno tapado cumple la misma función y el sabor queda en la carne, no en el agua de la olla.'],
    ['¿Se puede hacer el costillar al horno sin papel aluminio?','Sí, con una asadera con tapa o una fuente cubierta con otra asadera dada vuelta. Lo importante es que el vapor no se escape.'],
    ['¿Qué salsa lleva el costillar de cerdo al horno?','En esta receta, un glaseado casero de salsa de tomate, miel, mostaza y vinagre. También queda muy bien solo con ajo, limón y perejil.'],
    ['¿Cuánto costillar compro para 6 personas?','Como estimación de la redacción, unos 2,5 kilos con hueso si es la carne principal, y bastante menos si hay otros platos fuertes.']
  ],
  related:['corte-costillar-de-cerdo','receta-bondiola-al-horno','receta-chuletas-de-cerdo','receta-papas-al-horno','receta-ensalada-de-papa','receta-chipa-guazu'],
  guides:['guia-cuanta-carne-por-persona'],
  cateringOccasion:'cumpleanos'
};
