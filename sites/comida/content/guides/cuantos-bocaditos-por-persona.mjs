// Guide + calculator: bocaditos per person. All quantities are editorial estimates.
export default {
  id:'guia-cuantos-bocaditos-por-persona', slug:'cuantos-bocaditos-por-persona', kind:'guide', order:4,
  published:true, indexable:true, updatedAt:'2026-09-24', verifiedAt:'2026-09-24',
  source:'Estimaciones editoriales de la redacción de comida.com.py para eventos en Paraguay. No reemplazan la propuesta de un catering',
  label:'Cuántos bocaditos por persona',
  eyebrow:'Calculadora',
  seoTitle:'Cuántos bocaditos por persona: calculadora',
  meta:'Cuántos bocaditos se calculan por persona según el tipo de evento y la duración. Calculadora, tabla por cientos, mezcla de salados y dulces y checklist.',
  h1:'Cuántos bocaditos se calculan por persona',
  cardText:'Calculá cuántos cientos de bocaditos salados y dulces pedir para tu evento.',
  category:['fiesta'],
  keywords:['cuantos bocaditos se calcula por persona','bocaditos salados para cumpleaños','bocaditos para cumpleaños infantil','bocaditos por ciento','cuantos bocaditos por persona'],
  image:27,
  intro:[
    'La pregunta se repite antes de cada cumpleaños, bautismo o reunión de oficina: cuántos bocaditos hay que pedir para que alcance sin que sobren bandejas enteras. La respuesta depende sobre todo de un punto: si los bocaditos acompañan una comida o si son la comida.',
    'Con la calculadora de abajo obtenés una cantidad total, la división entre salados y dulces y cuántos cientos pedir. Debajo encontrás la tabla por tipo de evento, cómo se venden los bocaditos por ciento y una lista para no olvidarte nada.'
  ],
  estimate:'Todas las cantidades de esta página son estimaciones editoriales: ajustalas según el apetito de tus invitados, el horario y lo que sirvas además de los bocaditos.',
  tool:{type:'bocaditos', title:'Calculadora de bocaditos por persona',
    hint:'Indicá cuántos invitados esperás, cuánto dura el evento y qué papel cumplen los bocaditos.',
    data:{
      perPerson:{
        previa:{corta:5, media:7, larga:9},
        principal:{corta:10, media:14, larga:18},
        merienda:{corta:6, media:8, larga:10}
      },
      kidsFactor:0.65,
      saltyShare:0.65,
      note:'Estimación editorial. Sumá un margen si hay muchos adolescentes o si el evento cae a la hora del almuerzo o la cena.'
    }
  },
  facts:[
    ['Bocaditos como comida','Entre 10 y 18 por persona'],
    ['Como previa de una comida','Entre 5 y 9 por persona'],
    ['Merienda o coffee break','Entre 6 y 10 por persona'],
    ['Mezcla habitual','Dos tercios salados, un tercio dulces'],
    ['Cumpleaños infantil','Alrededor de dos tercios de la cantidad de adultos']
  ],
  sections:[
    {id:'tabla', title:'Bocaditos por persona según el evento y la duración',
      paragraphs:[
        'La tabla muestra las cantidades que usa la calculadora. La duración importa porque en un evento largo la gente vuelve a picar; el papel de los bocaditos importa más todavía, porque si después viene un asado o una cena la previa tiene que ser liviana.'
      ],
      table:{caption:'Bocaditos por persona (estimación editorial)', head:['Tipo de evento','Hasta 2 horas','De 2 a 4 horas','Más de 4 horas'],
        rows:[
          ['Previa de un almuerzo o cena','5','7','9'],
          ['Bocaditos como comida principal','10','14','18'],
          ['Merienda o coffee break','6','8','10'],
          ['Cumpleaños infantil, bocaditos como comida','7','9','12']
        ],
        note:'Los valores de cumpleaños infantil aplican un factor de 0,65 sobre la cantidad de adultos. Si en la fiesta hay muchos padres que se quedan, calculalos aparte como adultos.'
      }
    },
    {id:'por-ciento', title:'Cómo se venden los bocaditos: por ciento',
      paragraphs:[
        'En Paraguay los bocaditos se piden y se venden por ciento: cien unidades de un mismo tipo o de un surtido. Por eso conviene redondear el total hacia arriba al ciento más cercano y repartirlo entre variedades. Si la calculadora te da 460 salados, pedí cinco cientos y elegí qué tipos van en cada uno.',
        'Preguntá siempre el tamaño de cada unidad. Un bocadito de copetín, de dos bocados, no llena lo mismo que una empanada de tamaño común o un sándwich de miga entero. Si el proveedor trabaja con piezas más grandes, podés bajar un poco la cantidad por persona; si son muy chicas, sumá.'
      ],
      table:{caption:'Ejemplo: cuántos cientos pedir para bocaditos como comida principal, de 2 a 4 horas', head:['Invitados adultos','Total','Salados','Dulces','Cientos a pedir'],
        rows:[
          ['20','280','190','90','3'],
          ['50','700','460','240','7'],
          ['80','1.120','730','390','12'],
          ['120','1.680','1.100','580','17']
        ],
        note:'Estimación editorial calculada con 14 bocaditos por persona y dos tercios salados, redondeando a la decena.'
      }
    },
    {id:'salados-dulces', title:'Mezcla de salados y dulces',
      paragraphs:[
        'Una proporción de dos tercios salados y un tercio dulces funciona para la mayoría de los eventos de adultos, sobre todo si hay torta aparte. En una merienda, un coffee break o un cumpleaños infantil, los dulces pueden subir hasta la mitad del total.',
        'Dentro de los salados, combiná bocaditos de horno y fritos, y alguno frío para que no todo dependa de servirse caliente. Los clásicos de las fiestas paraguayas, como la chipa, la sopa paraguaya en cuadraditos, las empanaditas y las croquetas, son de los que primero se terminan.'
      ],
      cards:[
        ['Salados de horno','Chipitas, sopa paraguaya en cuadrados, empanaditas de carne o pollo, pastelitos de hojaldre, mini tartas.'],
        ['Salados fritos','Croquetas, mandioca frita, empanaditas fritas, bolitas de queso. Pedilos para el comienzo, cuando están recién hechos.'],
        ['Salados fríos','Sándwiches de miga, mini pancitos rellenos, pinchos de queso y fiambre, bocaditos de ensalada rusa en tartaletas.'],
        ['Dulces','Alfajorcitos, mini tortas, masitas, bombones, cuadraditos de pasta frola, brochetas de fruta.']
      ]
    },
    {id:'cumple-infantil', title:'Bocaditos para cumpleaños infantil',
      paragraphs:[
        'Los chicos comen menos cantidad pero picotean durante toda la fiesta, y suelen preferir lo simple: chipitas, pancho mini, sándwiches de miga, empanaditas sin picante. Evitá los bocaditos con aceitunas enteras, huesitos o salsas muy condimentadas, y reservá los dulces para después del cumpleaños feliz si no querés que la torta quede entera.',
        'No te olvides de los adultos que acompañan: en muchos cumpleaños infantiles de Paraguay los padres se quedan, y ellos sí esperan bocaditos salados de adulto. Calculalos por separado con la opción de adultos de la calculadora y sumá los dos resultados.'
      ]
    },
    {id:'salados-cumple', title:'Bocaditos salados para cumpleaños de adultos',
      paragraphs:[
        'En un cumpleaños de adultos que se hace de noche y sin cena servida, los bocaditos pasan a ser la comida principal. Ahí conviene sumar variedades más contundentes, como mini hamburguesas, brochetas de carne o pollo, empanadas de tamaño común o una mesa de picada, para que nadie se vaya con hambre.',
        'Si el festejo empieza temprano y después hay asado, pensá los bocaditos como previa y quedate en la franja baja de la tabla: el objetivo es abrir el apetito, no reemplazar la carne.'
      ]
    },
    {id:'checklist', title:'Checklist antes de pedir los bocaditos',
      items:[
        'Cantidad de invitados confirmada, separando adultos y chicos.',
        'Horario y duración del evento, y si hay otra comida además de los bocaditos.',
        'Tamaño de cada unidad y cuántos entran en cada ciento.',
        'Variedades de salados y dulces, con opciones sin carne si hace falta.',
        'Quién calienta y sirve los bocaditos calientes, y con qué equipo.',
        'Bandejas, servilletas, platitos y palillos: si vienen incluidos o hay que conseguirlos.',
        'Horario de entrega, lugar y quién recibe el pedido.',
        'Forma de conservación hasta el momento de servir, sobre todo si hace calor.'
      ]
    }
  ],
  faq:[
    ['¿Cuántos bocaditos se calcula por persona?','Como estimación, entre 10 y 18 por persona cuando los bocaditos son la comida, y entre 5 y 9 cuando son la previa de un almuerzo o una cena. La duración del evento define dónde te ubicás dentro del rango.'],
    ['¿Cuántos cientos de bocaditos necesito para 50 personas?','Si los bocaditos son la comida principal en un evento de 2 a 4 horas, unos 700, es decir 7 cientos. Como previa de un asado, alcanza con unos 350 o 4 cientos.'],
    ['¿Cuántos bocaditos por niño en un cumpleaños infantil?','Alrededor de dos tercios de lo que come un adulto: entre 7 y 12 por chico si los bocaditos son la comida. Sumá aparte a los adultos que se quedan.'],
    ['¿Qué proporción de bocaditos salados y dulces pedir?','Para adultos, unos dos tercios salados y un tercio dulces. En meriendas y cumpleaños infantiles podés llegar a mitad y mitad.'],
    ['¿Cuántos bocaditos salados para un cumpleaños de 30 personas?','Si son la comida principal de una fiesta de 2 a 4 horas, unos 420 en total, de los que cerca de 280 son salados: pedí 3 cientos de salados y 2 de dulces.'],
    ['¿Cuánto tiempo antes conviene encargar los bocaditos?','Lo antes posible en fechas de mucha demanda, como diciembre o fines de semana largos. Confirmá la cantidad final unos días antes del evento.']
  ],
  recipes:['receta-chipa','receta-empanadas-de-carne','receta-croquetas-de-carne','receta-sopa-paraguaya','receta-chipa-soo','receta-pasta-frola'],
  related:['guia-cuanta-comida-por-persona','guia-que-preguntar-a-un-catering','guia-queso-paraguay','occ-bocaditos','occ-cumpleanos'],
  formOccasion:'bocaditos',
  ctaTitle:'¿Querés pedir bocaditos para tu evento?',
  ctaText:'Contanos la fecha, la zona, cuántos invitados esperás y si los bocaditos son la comida principal. Te ayudamos a consultar catering de bocaditos en Gran Asunción.',
  ctaLabel:'Consultá por bocaditos',
  waMessage:'Hola, quiero consultar bocaditos para un evento. ¿Me ayudás?'
};
