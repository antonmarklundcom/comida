// Recipe module: lechón al horno, sized by kilos of lechón. Companion of corte-lechon. Shape: sites/comida/content/recipes/sopa-paraguaya.mjs
export default {
  id:'receta-lechon-al-horno', slug:'lechon-al-horno', kind:'recipe',
  published:true, indexable:true, updatedAt:'2026-09-24', verifiedAt:'2026-09-24',
  source:'Receta de la redacción de comida.com.py, basada en la preparación tradicional paraguaya para fiestas',
  label:'Lechón al horno',
  seoTitle:'Lechón al horno con cuero crocante',
  meta:'Lechón al horno con el cuero crocante: adobo de naranja y ajo, cantidades por kilo de lechón, tiempos largos por etapa y temperatura segura para el cerdo.',
  h1:'Lechón al horno, jugoso y con el cuero crocante',
  cardText:'El lechón adobado de un día para otro y horneado en etapas hasta que el cuero cruje.',
  course:'Plato principal', cuisine:'Paraguaya', category:['carne','horno','fiesta','paraguaya'],
  keywords:['lechón al horno','lechon al horno','lechón asado','asado lechon','lechón para fin de año','lechón a la parrilla'],

  image:74,
  intro:[
    'El lechón al horno es la estrella de muchas mesas de fin de año y de los cumpleaños grandes en Paraguay. Un cerdito joven, abierto y adobado de un día para otro, se hornea en etapas largas: primero despacio y húmedo para que la carne se ablande, después con el cuero hacia arriba y horno fuerte para que quede dorado y crocante.',
    'Las cantidades se calculan por kilo de lechón ya faenado y limpio. Elegí 4, 8 o 12 kilos y el adobo se recalcula. Los tiempos de cada etapa son para piezas de alrededor de 2 kilos, que es lo que entra en una asadera de horno familiar; cada paso tiene su temporizador.'
  ],
  times:{prep:60, cook:210, rest:20}, difficulty:'Exigente',
  yield:{mode:'kilos', base:8, options:[4,8,12], yieldText:'16 a 20 porciones con 8 kilos', note:'Medido en kilos de lechón entero faenado. Estimación de la redacción: cada kilo con hueso rinde unas 2 porciones. Un lechón de 8 kilos no entra entero en un horno familiar: pedilo abierto y cortado en cuatro.'},
  ingredients:[
    {group:'Para el lechón y el adobo', items:[
      {q:8, u:'kg', item:'lechón', note:'faenado, abierto al medio y cortado en piezas'},
      {q:16, u:'diente', item:'ajo', note:'machacados'},
      {q:6, u:'u', item:'naranjas', one:'naranja', note:'agrias si conseguís; si no, comunes'},
      {q:4, u:'u', item:'limones', one:'limón'},
      {q:500, u:'ml', item:'vino blanco seco'},
      {q:120, u:'g', item:'sal gruesa'},
      {q:2, u:'cda', item:'orégano seco'},
      {q:1, u:'cda', item:'pimienta negra molida'},
      {q:1, u:'cda', item:'pimentón dulce'}
    ]},
    {group:'Para el horno', items:[
      {q:1, u:'l', item:'agua caliente', note:'repartida entre las asaderas'},
      {q:4, u:'cda', item:'aceite', note:'para pincelar el cuero'},
      {q:4, u:'u', item:'cebollas', one:'cebolla', note:'en rodajas gruesas, como base'}
    ]}
  ],
  steps:[
    {title:'Revisá y cortá el lechón', text:'Lavá el lechón con agua fría, secalo y revisá el cuero: si quedan pelos, quemalos con una llama o raspalos con un cuchillo. Si no viene cortado, separalo en paletas y perniles con el costillar a lo largo, de modo que cada pieza entre en una asadera.'},
    {title:'Prepará el adobo', text:'Exprimí las naranjas y los limones y mezclá el jugo con el ajo, el vino, la mitad de la sal, el orégano, la pimienta y el pimentón. Probá: tiene que estar ácido y bien salado, porque una parte queda en la fuente.'},
    {title:'Adobalo de un día para otro', text:'Pinchá la carne del lado de adentro con un cuchillo fino y frotala con el adobo, sin mojar el cuero. Acomodá las piezas con el cuero hacia arriba en fuentes o bolsas grandes y guardalas en la heladera toda la noche. Frotá el cuero solo con el resto de la sal y dejalo destapado para que se seque.'},
    {title:'Templá y encendé el horno', text:'Sacá las piezas de la heladera una hora antes. Encendé el horno a 160 °C, poné las cebollas en el fondo de cada asadera y apoyá encima el lechón con el cuero hacia abajo. Volcá el adobo y el agua caliente alrededor.', min:60},
    {title:'Primera etapa: lenta y húmeda', text:'Cubrí cada asadera con papel aluminio y horneá. En esta etapa el cuero se hidrata y la carne se cocina despacio en el vapor del adobo. Si tenés una sola asadera por vez en el horno, calculá este tiempo para cada tanda.', min:120},
    {title:'Segunda etapa: cuero hacia arriba', text:'Destapá, da vuelta las piezas con cuidado para dejar el cuero arriba y secalo con papel. Pincelalo con aceite y hacé unos cortes finos en el cuero con la punta del cuchillo. Seguí destapado, rociando solo la carne de los costados con el jugo, nunca el cuero.', min:60},
    {title:'Tercera etapa: cuero crocante', text:'Subí el horno a 220 °C y dejá que el cuero se infle y se dore. Vigilalo desde la puerta: en pocos minutos pasa de dorado a quemado, sobre todo en las orejas y los bordes finos.', min:25},
    {title:'Controlá la temperatura interna', text:'Pinchá el termómetro en la parte más gruesa del pernil, sin tocar el hueso. Tiene que marcar al menos 63 °C para ser seguro, y para que la carne se desprenda fácil conviene llegar a 75 a 80 °C. Si no llegó, bajá a 180 °C y seguí de a 15 minutos.'},
    {title:'Reposo sin tapar', text:'Pasá las piezas a una tabla o fuente grande y dejalas reposar destapadas: si las cubrís, el vapor ablanda el cuero crocante. Cortá con cuchilla o tijera de cocina y serví con el jugo desgrasado aparte.', min:20}
  ],
  kiloTable:{title:'Adobo para lechón de 4, 8 y 12 kilos', caption:'Cantidades según los kilos de lechón faenado', sizes:[4,8,12], items:['lechón','ajo','naranjas','limones','vino blanco seco','sal gruesa'], note:'Los tiempos no cambian con la cantidad si las piezas son de unos 2 kilos: lo que cambia es cuántas asaderas necesitás.'},
  tips:[
    'El cuero crocante depende de que esté seco. Por eso se sala aparte y se deja la noche destapado en la heladera, y por eso nunca se rocía con jugo en las últimas etapas.',
    'Con varias asaderas y un solo horno, alterná de lugar las bandejas cada media hora: la de arriba siempre dora más.',
    'Protegé las orejas, la cola y las patitas con un poco de papel aluminio en la última etapa; son finas y se queman primero.',
    'Si el horno familiar no alcanza, algunas panaderías con horno grande aceptan hornear lechones por encargo. Consultá con tiempo y llevalo ya adobado en tus asaderas.',
    'Un termómetro de pinchar es la única forma confiable de saber si una pieza grande de cerdo está cocida en el centro.'
  ],
  sections:[
    {title:'Cuánto lechón comprar', paragraphs:[
      'Como referencia de la redacción, contá un kilo de lechón entero faenado cada dos personas cuando es el plato principal con acompañamientos. Un lechón de 8 kilos alcanza para 16 a 20 personas, y para una fiesta de 40 conviene pensar en dos lechones medianos antes que en uno enorme, porque se cocinan más parejos y entran mejor en el horno.',
      'El peso que se pide en la carnicería es el del animal ya faenado, con cabeza y patas. Confirmalo al hacer el pedido, junto con el día de retiro, y para diciembre encargalo con bastante anticipación.'
    ]},
    {title:'La mesa del lechón', paragraphs:[
      'En la tradición paraguaya, el lechón comparte la mesa con sopa paraguaya, chipa guazú, ensalada rusa, mandioca y pan casero. Para Año Nuevo muchas familias lo sirven tibio a la medianoche y siguen con las sobras al día siguiente, en sándwiches.',
      'Si el horno es tatakua, el método es el mismo, pero el control del calor se hace con la cantidad de brasas y el tiempo depende mucho del horno. Conviene tener alguien que lo conozca y usar termómetro para confirmar que el centro llegó a temperatura.'
    ]}
  ],
  variations:[
    ['Lechón a la parrilla','Con el lechón abierto entero, cuero hacia arriba y fuego bajo y constante debajo del costillar, de tres a cuatro horas. Se da vuelta al final para dorar el cuero sobre brasas más fuertes, con la misma temperatura interna como control.'],
    ['Adobo con cerveza','Reemplazá el vino por cerveza rubia y sumá dos cucharadas de miel al adobo. La carne toma un color más oscuro y un sabor apenas dulce.'],
    ['Medio lechón','Para un grupo chico, pedí medio lechón de 4 kilos cortado en dos piezas. Entra en una sola asadera grande y los tiempos son los mismos.']
  ],
  storage:'La carne sobrante se guarda en la heladera hasta tres días, separada del cuero. El cuero se recupera unos minutos en horno bien caliente. La carne desmenuzada se congela hasta dos meses.',
  faq:[
    ['¿Cuánto tiempo se cocina un lechón al horno?','En piezas de unos 2 kilos, unas dos horas tapado a 160 °C, una hora destapado y unos 25 minutos a 220 °C para el cuero. En total, alrededor de tres horas y media, más el reposo.'],
    ['¿A qué temperatura tiene que estar el lechón por dentro?','Al menos 63 °C en la parte más gruesa del pernil, seguido de un reposo. Para que la carne se desprenda del hueso con facilidad, lo ideal es llegar a 75 a 80 °C.'],
    ['¿Cómo hacer que el cuero del lechón quede crocante?','Secalo bien, salalo aparte y dejalo destapado en la heladera la noche anterior. En el horno, no lo mojes con jugo y terminá con una etapa corta a 220 °C.'],
    ['¿Cuántos kilos de lechón para 20 personas?','Como estimación de la redacción, un lechón de unos 10 kilos faenado alcanza para 20 personas con acompañamientos. Si hay otras carnes, 8 kilos pueden ser suficientes.'],
    ['¿Con qué se adoba el lechón?','Un adobo típico lleva jugo de naranja agria o de limón, mucho ajo, vino blanco, sal, orégano y pimienta. Se aplica del lado de la carne y se deja de un día para otro.'],
    ['¿Se puede hacer un lechón entero en un horno de casa?','Solo si es muy chico. Lo habitual es pedirlo abierto y cortado en cuatro piezas, que entran en asaderas familiares y se cocinan más parejas.']
  ],
  related:['corte-lechon','catering-lechon-para-eventos','receta-pernil-de-cerdo-al-horno','receta-costillar-de-cerdo-al-horno','receta-sopa-paraguaya','receta-chipa-guazu','receta-ensalada-rusa'],
  guides:['guia-cortes-de-cerdo','guia-cuanta-carne-por-persona'],
  cateringOccasion:'fin-de-ano'
};
