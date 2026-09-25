// Recipe module: cordero al horno (pierna, cocción lenta). Companion of corte-cordero. Shape: sites/comida/content/recipes/sopa-paraguaya.mjs
export default {
  id:'receta-cordero-al-horno', slug:'cordero-al-horno', kind:'recipe',
  published:true, indexable:true, updatedAt:'2026-09-24', verifiedAt:'2026-09-24',
  source:'Receta de la redacción de comida.com.py, basada en la cocina casera paraguaya y rioplatense',
  label:'Cordero al horno',
  seoTitle:'Cordero al horno: pierna tierna',
  meta:'Cordero al horno tierno: pierna marinada con ajo, romero y limón, cocción lenta tapada, dorado final con batatas y la versión rosada con temperaturas.',
  h1:'Cordero al horno: pierna lenta con batatas',
  cardText:'Pierna de cordero marinada, horneada despacio hasta que se separa del hueso.',
  course:'Plato principal', cuisine:'Casera', category:['carne','horno','fiesta'],
  keywords:['cordero','cordero al horno','cordero horno','carne de cordero','pierna de cordero al horno','cómo hacer cordero al horno'],

  image:65,
  intro:[
    'El cordero tiene un sabor más marcado que la carne vacuna y una grasa que perfuma todo lo que está cerca. En el horno de casa la pieza más agradecida es la pierna: tiene hueso, que da sabor, y suficiente carne para una mesa de 6. Esta receta la cocina despacio, tapada, hasta que la carne se separa del hueso con una cuchara, y la dora al final junto con batatas y cebollas.',
    'La noche anterior se deja marinando con ajo, romero, limón y vino blanco. Al día siguiente el horno hace casi todo el trabajo. Si preferís el cordero rosado, más parecido a un bife, en las variaciones está la versión corta con temperaturas.'
  ],
  times:{prep:30, cook:215, rest:15}, difficulty:'Media',
  yield:{mode:'porciones', base:6, options:[2,4,6,12], yieldText:'6 porciones', note:'Estimación de la redacción: una pierna de 2,2 a 2,5 kg con hueso alcanza para 6. Para 2 o 4 personas, usá una paleta o media pierna y restá una hora de horno; para 12, dos piernas en dos asaderas.'},
  ingredients:[
    {group:'Para la marinada', items:[
      {q:1, u:'u', item:'pierna de cordero', note:'de 2,2 a 2,5 kg, con hueso'},
      {q:6, u:'diente', item:'ajo', note:'4 en láminas y 2 machacados'},
      {q:3, u:'rama', item:'romero'},
      {q:1, u:'u', item:'limones', one:'limón', note:'jugo y ralladura'},
      {q:250, u:'ml', item:'vino blanco seco'},
      {q:3, u:'cda', item:'aceite'},
      {q:1, u:'cda', item:'sal gruesa'},
      {q:1, u:'cdita', item:'pimienta negra molida'},
      {q:1, u:'cdita', item:'comino molido', note:'opcional'}
    ]},
    {group:'Para la asadera', items:[
      {q:1, u:'kg', item:'batatas', note:'en trozos grandes con cáscara'},
      {q:3, u:'u', item:'cebollas', one:'cebolla', note:'en gajos'},
      {q:250, u:'ml', item:'caldo o agua caliente'},
      {q:null, item:'sal fina', note:'al gusto'}
    ]}
  ],
  steps:[
    {title:'Hacé cortes y mechá la pierna', text:'Con un cuchillo fino, hacé unos quince cortes de dos centímetros de profundidad por toda la pierna. Meté en cada uno una lámina de ajo y unas hojitas de romero. Así el sabor llega al centro y no queda solo en la superficie.'},
    {title:'Marinala de un día para otro', text:'Mezclá el ajo machacado, el jugo y la ralladura de limón, el vino, el aceite, la sal, la pimienta y el comino. Frotá la pierna con esa mezcla, ponela en una bolsa grande o una fuente tapada con todo el líquido y guardala en la heladera toda la noche, dándola vuelta una vez.'},
    {title:'Sacala de la heladera antes', text:'Retirá la pierna una hora antes de hornear para que pierda el frío. Encendé el horno a 160 °C y aceitá una asadera grande o una fuente honda donde entre la pieza con espacio a los costados.', min:60},
    {title:'Horno lento y tapado', text:'Poné la pierna en la asadera con la parte más carnosa hacia arriba. Volcá alrededor la marinada y el caldo, cubrí con papel aluminio doble y cerrá bien los bordes para que no escape el vapor.', min:150},
    {title:'Sumá las batatas y las cebollas', text:'Destapá con cuidado. Acomodá las batatas y las cebollas alrededor de la carne, salalas y bañalas con el jugo de la asadera. Si el líquido se secó, agregá un chorrito de agua caliente.'},
    {title:'Dorá destapado', text:'Subí el horno a 200 °C y seguí sin tapa, rociando la carne con el jugo cada 15 minutos, hasta que la superficie esté dorada y las batatas se pinchen fácil.', min:45},
    {title:'Comprobá que esté tierna', text:'Pinchá la parte más gruesa con un tenedor y giralo: la carne tiene que abrirse en hebras y empezar a despegarse del hueso. Si todavía está firme, volvé a taparla y dale 20 minutos más a 170 °C.'},
    {title:'Reposá y serví', text:'Pasá la pierna a una fuente, cubrila y dejala descansar. Mientras tanto desgrasá el jugo de la asadera con una cuchara y servilo aparte. Separá la carne en trozos grandes con dos tenedores o cortala junto al hueso.', min:15}
  ],
  tips:[
    'Si la pierna no entra en tu asadera, pedí al carnicero que corte el garrón o que la parta a la altura de la articulación. El garrón se cocina igual, al lado.',
    'El aluminio tiene que quedar bien sellado. Si se escapa el vapor en la etapa tapada, la carne se seca antes de ablandarse.',
    'Desgrasá el jugo antes de servirlo: la grasa de cordero se solidifica rápido en el plato y resulta pesada.',
    'El cordero tiene un sabor intenso que algunos no esperan. El ajo, el limón y el romero lo suavizan; no los reduzcas la primera vez.',
    'Las batatas van a mitad de camino y no al principio porque, con tres horas y media de horno, se deshacen.'
  ],
  sections:[
    {title:'Qué parte del cordero elegir', paragraphs:[
      'La pierna es la opción más pareja para el horno: mucha carne, un hueso central y poca grasa externa. La paleta tiene más tejido y más grasa entre los músculos, así que resulta más jugosa con la cocción lenta, pero rinde menos carne por kilo. El costillar de cordero es mejor para la parrilla o para un horno fuerte y corto.',
      'Cuando compres, preguntá si el cordero es joven: la carne de un animal más grande, que algunos venden como capón u oveja, tiene un sabor bastante más fuerte y necesita más tiempo para ablandarse.'
    ]},
    {title:'Con qué acompañar el cordero', paragraphs:[
      'Las batatas de la asadera ya son una guarnición completa, pero una ensalada fresca de tomate, cebolla y hojas verdes equilibra la grasa del cordero. La mandioca hervida y el pan casero para el jugo también son buena compañía.',
      'Para una fiesta, la pierna deshuesada y cortada en trozos se sirve fácil en buffet y se mantiene caliente en su jugo dentro de una fuente tapada.'
    ]}
  ],
  variations:[
    ['Cordero rosado al horno','Sin marinada líquida, solo con ajo, romero, sal y aceite. Horno a 200 °C durante 20 minutos y después a 170 °C hasta que el centro marque 57 a 60 °C, en total una hora y cuarto a una hora y media para una pierna de 2,2 kg. Reposá 15 minutos y cortá fino contra la fibra.'],
    ['Paleta de cordero con papas','Usá una paleta de 1,5 kg y reemplazá las batatas por papas. Lleva unas dos horas y media en total con el mismo método tapado y destapado.'],
    ['Con hierbas del patio','Reemplazá el romero por tomillo y orégano fresco, y sumá cebollita de hoja picada a la marinada.']
  ],
  storage:'La carne sobrante se guarda desmenuzada en su jugo, en la heladera, hasta tres días. Sirve para rellenar empanadas o para un guiso rápido. Congelada en su jugo dura hasta dos meses.',
  faq:[
    ['¿Cuánto tiempo se cocina el cordero al horno?','Una pierna de 2,2 a 2,5 kg necesita unas dos horas y media tapada a 160 °C y otros 45 minutos destapada a 200 °C para quedar tierna. La versión rosada lleva alrededor de una hora y media.'],
    ['¿Cómo sacar el olor fuerte al cordero?','El sabor del cordero es propio de la carne, pero una marinada con ajo, limón, vino y romero lo suaviza. También ayuda quitar la grasa externa más gruesa antes de cocinar.'],
    ['¿Qué parte del cordero es mejor para el horno?','La pierna, porque tiene mucha carne y poca grasa externa. La paleta queda más jugosa con cocción lenta pero rinde menos carne.'],
    ['¿Cuánto cordero por persona?','Como estimación de la redacción, entre 350 y 400 g de carne con hueso por persona si es el plato principal.'],
    ['¿A qué temperatura interna se saca el cordero?','Para rosado, entre 57 y 60 °C en el centro. Para una carne que se deshace, como en esta receta, la temperatura sube mucho más: guiate por la textura al pinchar.'],
    ['¿Se puede hacer cordero al horno sin vino?','Sí. Reemplazá el vino por caldo y sumá un poco más de limón para mantener la acidez de la marinada.']
  ],
  related:['corte-cordero','corte-cabrito','receta-lechon-al-horno','receta-pernil-de-cerdo-al-horno','receta-tapa-de-cuadril-al-horno','receta-pan-casero'],
  guides:['guia-cuanta-carne-por-persona'],
  cateringOccasion:'bodas'
};
