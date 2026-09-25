// Recipe module: tomahawk a la parrilla (reverse sear as a variation). Companion of corte-tomahawk. Shape: sites/comida/content/recipes/sopa-paraguaya.mjs
export default {
  id:'receta-tomahawk-a-la-parrilla', slug:'tomahawk-a-la-parrilla', kind:'recipe',
  published:true, indexable:true, updatedAt:'2026-09-24', verifiedAt:'2026-09-24',
  source:'Receta de la redacción de comida.com.py, basada en la práctica de parrilla del Río de la Plata y de Paraguay',
  label:'Tomahawk a la parrilla',
  seoTitle:'Tomahawk a la parrilla: tiempo y punto',
  meta:'Tomahawk a la parrilla: fuego en dos zonas, cuánto tiempo por lado, temperatura para jugoso, cómo cortarlo del hueso y el método de sellado inverso.',
  h1:'Tomahawk a la parrilla, grueso y jugoso',
  cardText:'El bife ancho con el hueso largo, dorado afuera, rosado adentro y cortado en la mesa.',
  course:'Plato principal', cuisine:'Casera', category:['carne','fiesta'],
  keywords:['tomahawk','tomahawk carne','corte tomahawk','tomahawk a la parrilla','cómo hacer tomahawk','tomahawk sellado inverso'],
  intro:[
    'El tomahawk es un bife ancho cortado con el hueso de la costilla entero y limpio, largo como un mango. Es grueso, de cinco a seis centímetros, pesa más de un kilo y tiene la grasa entreverada del ojo de bife. Por su tamaño no se hace como un bife común: necesita dorarse fuerte y después terminar a fuego suave para que el centro llegue al punto sin que la costra se queme.',
    'Con dos piezas medianas comen 6 personas, cortadas en fetas y servidas en tabla. Abajo explicamos también el sellado inverso, el método que muchos parrilleros prefieren para cortes de este grosor.'
  ],
  times:{prep:15, cook:45, rest:10}, difficulty:'Exigente',
  yield:{mode:'porciones', base:6, options:[2,4,6,12], yieldText:'6 porciones', note:'Estimación de la redacción: un tomahawk de 1,2 a 1,4 kg rinde para 2 o 3 personas porque buena parte del peso es hueso. Para 2 personas alcanza con uno; para 4, dos piezas chicas.'},
  ingredients:[
    {group:'Para la carne', items:[
      {q:2, u:'u', item:'tomahawks', one:'tomahawk', note:'de 1,2 a 1,4 kg y 5 a 6 cm de grosor'},
      {q:2, u:'cda', item:'sal gruesa'},
      {q:1, u:'cdita', item:'pimienta negra', note:'recién molida'},
      {q:3, u:'kg', item:'carbón', note:'o leña dura; cantidad aproximada'}
    ]},
    {group:'Para la manteca de ajo y perejil', items:[
      {q:100, u:'g', item:'manteca', note:'blanda'},
      {q:2, u:'diente', item:'ajo', note:'rallados'},
      {q:2, u:'cda', item:'perejil picado'},
      {q:1, u:'pizca', item:'sal fina'}
    ]}
  ],
  steps:[
    {title:'Prepará la manteca saborizada', text:'Pisá la manteca con el ajo, el perejil y la sal hasta integrar. Armá un cilindro sobre papel film, cerralo como un caramelo y guardalo en la heladera hasta el momento de servir.'},
    {title:'Temperá los tomahawks', text:'Sacalos de la heladera una hora antes. En un corte de este grosor, entrar frío al fuego significa un anillo gris grueso alrededor de un centro crudo. Secalos bien con papel de cocina.', min:60},
    {title:'Armá fuego en dos zonas', text:'Juntá mucha brasa de un lado de la parrilla, bien encendida y cubierta de ceniza blanca, y dejá el otro lado casi sin carbón. Calentá la parrilla y limpiala con un trapo apenas aceitado.', min:35},
    {title:'Salá con generosidad', text:'Salá las dos caras y los bordes con sal gruesa y sumá la pimienta. Un corte tan grueso admite más sal que un bife fino. Si querés proteger el hueso para la presentación, envolvelo en papel aluminio.'},
    {title:'Sellá sobre la zona fuerte', text:'Apoyá los tomahawks sobre las brasas fuertes y dejalos quietos hasta tener una costra marrón oscura. Dalos vuelta y repetí del otro lado. Después paralos sobre el borde de grasa unos minutos para dorarla.', min:12},
    {title:'Terminá del lado sin brasa', text:'Pasalos a la zona suave. Si tenés tapa, cerrala; si no, cubrilos con una asadera dada vuelta. Giralos cada cinco minutos para que el calor entre parejo por las dos caras.', min:20},
    {title:'Medí la temperatura', text:'Pinchá el termómetro en el centro, sin tocar el hueso. Sacalos a 50 a 52 °C para jugoso o a 55 a 56 °C para a punto: con el reposo suben unos cuatro grados. Sin termómetro, en esta pieza el riesgo de errar es alto.'},
    {title:'Reposá con la manteca encima', text:'Pasalos a una tabla, poné encima una rodaja de la manteca de ajo y perejil y dejá que se derrita mientras la carne descansa, cubierta sin apretar con aluminio.', min:10},
    {title:'Cortá en la mesa', text:'Deslizá el cuchillo pegado al hueso para separar el ojo de bife entero. Cortá fetas de un dedo de grosor contra la fibra, acomodalas otra vez junto al hueso y bañalas con el jugo y la manteca que quedó en la tabla.'}
  ],
  tips:[
    'Pedí que el grosor sea parejo de punta a punta. Un tomahawk más fino en un extremo se pasa de ese lado antes de que el centro esté listo.',
    'La grasa del borde necesita calor directo para dorarse. Si la salteás, queda blanca y gomosa aunque la carne esté perfecta.',
    'Con dos piezas, poné la más gruesa del lado más caliente de la zona suave y usá el termómetro en cada una por separado.',
    'El hueso no se come, pero se chupa: dejalo un rato más sobre las brasas mientras cortás la carne.',
    'Un cuchillo largo y bien afilado hace la diferencia. Con uno sin filo vas a aplastar la carne y perder jugo en la tabla.'
  ],
  sections:[
    {title:'Qué es el tomahawk y cómo pedirlo', paragraphs:[
      'El tomahawk sale de la misma zona que el ojo de bife y el bife ancho, en el costillar alto de la vaca. La diferencia es de corte: el carnicero deja el hueso de costilla completo y lo limpia de carne, para que quede como un mango. El nombre viene del hacha de forma parecida y es de uso internacional; en algunas carnicerías lo describen como bife ancho con hueso largo.',
      'Como es un corte a pedido, conviene avisar con anticipación. Pedí piezas de un solo hueso, de cinco a seis centímetros de grosor y con buena grasa entreverada en el ojo, porque esa grasa es la que lo mantiene jugoso con una cocción larga.'
    ]},
    {title:'Cómo servirlo en una reunión', paragraphs:[
      'Más que un plato individual, el tomahawk funciona como centro de mesa: se muestra entero, se corta frente a los invitados y cada uno se sirve fetas de distintos puntos, más cocidas en los bordes y rosadas en el medio.',
      'Acompañalo con algo simple que no le robe protagonismo: papas al horno, una ensalada verde con tomate, pan casero para el jugo. Para un asado más grande, sumá chorizo y mandioca para empezar mientras el tomahawk termina.'
    ]}
  ],
  variations:[
    ['Sellado inverso','Invertí el orden: primero cociná los tomahawks del lado sin brasas, con tapa o asadera encima, girándolos cada diez minutos, hasta que el centro marque 45 °C. Recién ahí pasalos a brasas muy fuertes, uno o dos minutos por lado y un rato parados sobre la grasa, hasta 50 a 52 °C. El resultado es un rosado parejo de borde a borde y una costra fina. También se puede hacer la primera etapa en horno a 120 °C y sellar en la parrilla o en una plancha de hierro.'],
    ['Con costra de pimienta','Presioná pimienta negra partida gruesa sobre las dos caras antes de sellar. Queda una costra aromática que va muy bien con la manteca de ajo.'],
    ['Con leña de monte','Si usás leña dura en lugar de carbón, esperá a que se forme brasa y no cocines sobre la llama viva: el humo fuerte tapa el sabor de la carne.']
  ],
  storage:'Guardá lo que sobre separado del hueso, en un recipiente cerrado, hasta tres días en la heladera. Comelo frío en fetas finas o calentalo apenas en sartén muy caliente; si lo recalentás mucho se pasa de punto.',
  faq:[
    ['¿Cuánto tiempo se hace un tomahawk a la parrilla?','Un tomahawk de cinco a seis centímetros lleva en total entre 30 y 45 minutos: unos 12 de sellado y el resto a fuego suave. El tiempo real depende de la pieza y del fuego, por eso conviene usar termómetro.'],
    ['¿A qué temperatura se saca el tomahawk?','Para jugoso, a 50 a 52 °C en el centro; para a punto, a 55 a 56 °C. En el reposo sube unos cuatro grados.'],
    ['¿Qué es el corte tomahawk?','Es un bife ancho, de la zona del ojo de bife, cortado con el hueso de costilla entero y limpio. Es grueso y pesa en general más de un kilo.'],
    ['¿Qué es el sellado inverso en el tomahawk?','Es cocinar primero a fuego suave hasta que el centro esté cerca del punto y recién al final dorar sobre brasas fuertes. Da un color más parejo por dentro que el método tradicional.'],
    ['¿Para cuántas personas alcanza un tomahawk?','Como estimación de la redacción, un tomahawk de 1,2 a 1,4 kilos alcanza para 2 o 3 personas, porque una parte importante del peso es hueso.'],
    ['¿El tomahawk se puede hacer al horno?','Sí. Horneá a 120 °C hasta 45 °C en el centro y sellá después en una sartén o plancha de hierro muy caliente, un par de minutos por lado.']
  ],
  related:['corte-tomahawk','corte-ojo-de-bife','corte-bife-ancho','receta-picana-a-la-parrilla','receta-asado-de-tira-a-la-parrilla','receta-papas-al-horno'],
  guides:['guia-cuanta-carne-por-persona','guia-asado-a-la-parrilla'],
  cateringOccasion:'eventos-empresariales'
};
