// Guide + calculator: food per person by event format. All quantities are editorial estimates.
export default {
  id:'guia-cuanta-comida-por-persona', slug:'cuanta-comida-por-persona', kind:'guide', order:5,
  published:true, indexable:true, updatedAt:'2026-09-24', verifiedAt:'2026-09-24',
  source:'Estimaciones editoriales de la redacción de comida.com.py para comidas y eventos en Paraguay. No reemplazan la propuesta de un catering',
  label:'Cuánta comida por persona',
  eyebrow:'Calculadora',
  seoTitle:'Cuánta comida por persona: calculadora',
  meta:'Cuánta comida calcular por persona para asado, buffet, menú servido o bocaditos. Calculadora con gramos por invitado y tablas para 10, 50 y 100 personas.',
  h1:'Cuánta comida calcular por persona en un evento',
  cardText:'Gramos de carne, guarniciones, ensaladas y postre por invitado, según el formato.',
  category:['fiesta','carne'],
  keywords:['cuanta comida por persona','cuanta comida para 50 personas','comida para 100 personas','cuantos gramos de comida por persona','calcular comida para evento'],
  image:17,
  intro:[
    'Calcular la comida de un evento es un equilibrio: si falta, el anfitrión pasa un mal momento; si sobra mucho, se tira plata y comida. La cantidad por persona cambia según el formato, porque no se come lo mismo en un asado largo con guarniciones que en un menú servido en tres pasos.',
    'Elegí el formato en la calculadora e indicá cuántas personas vienen: vas a ver los kilos de cada componente. Más abajo están las tablas para 10, 50 y 100 personas y los ajustes que conviene hacer según el horario, el clima y el tipo de invitados.'
  ],
  estimate:'Los gramos por persona de esta página son estimaciones editoriales para adultos: ajustalos según tu grupo, el horario y cuánto se come en tu familia o tu empresa.',
  tool:{type:'comida', title:'Calculadora de comida por persona',
    hint:'Elegí el formato del evento e indicá cuántas personas adultas esperás.',
    data:{
      formats:{
        asado:{label:'Asado con guarniciones', items:[
          {label:'carne para asado, cruda', g:400},
          {label:'mandioca', g:150},
          {label:'sopa paraguaya o chipa guazú', g:120},
          {label:'ensaladas', g:150},
          {label:'pan o chipa', g:50},
          {label:'postre', g:100},
          {label:'bebida sin alcohol', g:1, unit:'u', unitLabel:'litros'}
        ]},
        buffet:{label:'Buffet caliente', items:[
          {label:'carne o pollo, peso cocido', g:180},
          {label:'guarnición caliente (arroz, papas o pasta)', g:150},
          {label:'ensaladas', g:150},
          {label:'sopa paraguaya o chipa guazú', g:80},
          {label:'pan o chipa', g:40},
          {label:'postre', g:100},
          {label:'bebida sin alcohol', g:0.75, unit:'u', unitLabel:'litros'}
        ]},
        servido:{label:'Menú servido en mesa', items:[
          {label:'entrada', g:100},
          {label:'plato principal de carne o pollo, peso cocido', g:200},
          {label:'guarnición', g:150},
          {label:'ensalada o verduras', g:80},
          {label:'pan', g:40},
          {label:'postre', g:100},
          {label:'bebida sin alcohol', g:0.75, unit:'u', unitLabel:'litros'}
        ]},
        bocaditos:{label:'Bocaditos y finger food', items:[
          {label:'bocaditos salados', g:12, unit:'u', unitLabel:'unidades'},
          {label:'bocaditos dulces', g:5, unit:'u', unitLabel:'unidades'},
          {label:'picada de fiambres y quesos', g:60},
          {label:'bebida sin alcohol', g:0.75, unit:'u', unitLabel:'litros'}
        ]}
      },
      note:'Estimación editorial para adultos. Para chicos calculá alrededor de la mitad, y sumá un margen si el evento se extiende.'
    }
  },
  facts:[
    ['Asado','Unos 400 g de carne cruda por adulto, más guarniciones'],
    ['Buffet','Unos 180 g de proteína cocida por persona'],
    ['Menú servido','Entrada, principal de unos 200 g cocidos y postre'],
    ['Bebida','Entre 0,75 y 1 litro por persona sin contar alcohol'],
    ['Chicos','Alrededor de la mitad de un adulto']
  ],
  sections:[
    {id:'formatos', title:'Los cuatro formatos y cómo cambia la cantidad',
      cards:[
        ['Asado con guarniciones','La carne es la protagonista y se come en varias vueltas. Mandioca, sopa paraguaya y ensaladas completan el plato y bajan un poco la cantidad de carne necesaria.'],
        ['Buffet caliente','Cada invitado se sirve, así que conviene calcular un poco más de guarnición y ensalada. Dos opciones de proteína reparten mejor el consumo que una sola.'],
        ['Menú servido en mesa','Es el formato más predecible: cada plato llega porcionado. Casi no hay sobras si la lista de invitados está confirmada.'],
        ['Bocaditos y finger food','Sirve para eventos de pie, cócteles y cumpleaños. Si reemplaza a la cena, tiene que haber variedad y bocaditos contundentes.']
      ]
    },
    {id:'asado-tabla', title:'Asado con guarniciones: cantidades para 10, 50 y 100 personas',
      table:{caption:'Asado con guarniciones (estimación editorial)', head:['Componente','Por persona','10 personas','50 personas','100 personas'],
        rows:[
          ['Carne para asado, cruda','400 g','4 kg','20 kg','40 kg'],
          ['Mandioca','150 g','1,5 kg','7,5 kg','15 kg'],
          ['Sopa paraguaya o chipa guazú','120 g','1,2 kg','6 kg','12 kg'],
          ['Ensaladas','150 g','1,5 kg','7,5 kg','15 kg'],
          ['Pan o chipa','50 g','500 g','2,5 kg','5 kg'],
          ['Postre','100 g','1 kg','5 kg','10 kg'],
          ['Bebida sin alcohol','1 litro','10 litros','50 litros','100 litros']
        ],
        note:'La carne se calcula cruda, con una mezcla de cortes con y sin hueso. Para ajustar por apetito y por tipo de corte usá la guía de cuánta carne por persona.'
      }
    },
    {id:'buffet-tabla', title:'Buffet caliente: cantidades para 10, 50 y 100 personas',
      table:{caption:'Buffet caliente (estimación editorial)', head:['Componente','Por persona','10 personas','50 personas','100 personas'],
        rows:[
          ['Carne o pollo, peso cocido','180 g','1,8 kg','9 kg','18 kg'],
          ['Guarnición caliente','150 g','1,5 kg','7,5 kg','15 kg'],
          ['Ensaladas','150 g','1,5 kg','7,5 kg','15 kg'],
          ['Sopa paraguaya o chipa guazú','80 g','800 g','4 kg','8 kg'],
          ['Pan o chipa','40 g','400 g','2 kg','4 kg'],
          ['Postre','100 g','1 kg','5 kg','10 kg'],
          ['Bebida sin alcohol','750 ml','7,5 litros','37,5 litros','75 litros']
        ],
        note:'El peso de la proteína es cocido. Si comprás la carne o el pollo crudos, calculá entre un tercio y la mitad más, según el corte y la cocción.'
      }
    },
    {id:'servido-tabla', title:'Menú servido en mesa: cantidades para 10, 50 y 100 personas',
      table:{caption:'Menú servido (estimación editorial)', head:['Componente','Por persona','10 personas','50 personas','100 personas'],
        rows:[
          ['Entrada','100 g','1 kg','5 kg','10 kg'],
          ['Principal de carne o pollo, peso cocido','200 g','2 kg','10 kg','20 kg'],
          ['Guarnición','150 g','1,5 kg','7,5 kg','15 kg'],
          ['Ensalada o verduras','80 g','800 g','4 kg','8 kg'],
          ['Pan','40 g','400 g','2 kg','4 kg'],
          ['Postre','100 g','1 kg','5 kg','10 kg'],
          ['Bebida sin alcohol','750 ml','7,5 litros','37,5 litros','75 litros']
        ]
      }
    },
    {id:'bocaditos-tabla', title:'Bocaditos y finger food: cantidades para 10, 50 y 100 personas',
      table:{caption:'Bocaditos y finger food como comida principal (estimación editorial)', head:['Componente','Por persona','10 personas','50 personas','100 personas'],
        rows:[
          ['Bocaditos salados','12 unidades','120','600','1.200'],
          ['Bocaditos dulces','5 unidades','50','250','500'],
          ['Picada de fiambres y quesos','60 g','600 g','3 kg','6 kg'],
          ['Bebida sin alcohol','750 ml','7,5 litros','37,5 litros','75 litros']
        ],
        note:'Para calcular por duración y según si los bocaditos son previa o comida, usá la calculadora de bocaditos por persona.'
      }
    },
    {id:'ajustes', title:'Cuándo subir o bajar las cantidades',
      paragraphs:[
        'Las tablas parten de un evento de adultos de duración media, al mediodía o a la noche. Hay situaciones en que conviene moverse hacia arriba o hacia abajo, y es mejor decidirlo antes de comprar o de confirmar al catering.'
      ],
      items:[
        'Subí si el evento dura más de cinco horas, si hay muchos jóvenes o si la comida es la única del día para los invitados.',
        'Subí la bebida en verano y si el evento es al aire libre: con calor se toma mucho más.',
        'Bajá si hay una previa abundante de bocaditos antes del plato principal.',
        'Bajá en almuerzos de trabajo cortos, donde la gente come y vuelve a sus tareas.',
        'Para chicos, calculá alrededor de la mitad de un adulto, y todavía menos si son muy pequeños.',
        'Sumá opciones sin carne si sabés que hay invitados vegetarianos, en lugar de agrandar todo el menú.'
      ]
    },
    {id:'sobras', title:'Cómo evitar que sobre demasiado',
      paragraphs:[
        'Confirmá la lista de invitados unos días antes y calculá sobre quienes confirmaron, no sobre toda la lista de invitados, más un margen chico. Servir en tandas, en lugar de poner todo a la vez, también ayuda: lo que no salió de la cocina se puede guardar en frío y aprovechar después.',
        'Si igual sobra, tené recipientes con tapa a mano y enfriá rápido lo que quede. La comida cocida que estuvo varias horas a temperatura ambiente en un día caluroso no conviene guardarla.'
      ]
    }
  ],
  faq:[
    ['¿Cuánta comida se calcula por persona en un evento?','Depende del formato. Como estimación, en un asado unos 400 g de carne cruda por adulto más guarniciones; en un buffet, unos 180 g de proteína cocida, 150 g de guarnición y 150 g de ensaladas.'],
    ['¿Cuánta comida necesito para 50 personas?','Para un asado con guarniciones, unos 20 kg de carne cruda, 7,5 kg de mandioca, 6 kg de sopa o chipa guazú y 7,5 kg de ensaladas, además de pan, postre y unos 50 litros de bebida.'],
    ['¿Cuánta comida hace falta para 100 personas en un buffet?','Como referencia, unos 18 kg de carne o pollo ya cocidos, 15 kg de guarnición caliente, 15 kg de ensaladas y 10 kg de postre, más pan y bebida.'],
    ['¿Cuántos litros de bebida por persona hay que calcular?','Entre 750 ml y un litro de bebida sin alcohol por adulto, y más en verano o en eventos al aire libre. Las bebidas alcohólicas se calculan aparte.'],
    ['¿Cuánto come un chico en comparación con un adulto?','Como estimación, alrededor de la mitad. Si la mayoría de los invitados son chicos, conviene un menú más simple y porciones chicas.'],
    ['¿Cuántos gramos de ensalada por persona?','Unos 150 g por persona cuando hay dos o tres ensaladas en un asado o buffet, y alrededor de 80 g cuando la ensalada acompaña un plato servido.']
  ],
  recipes:['receta-sopa-paraguaya','receta-chipa-guazu','receta-ensalada-rusa','receta-pollo-al-horno','receta-vitel-tone','receta-flan-casero'],
  related:['guia-cuanta-carne-por-persona','guia-cuantos-bocaditos-por-persona','guia-que-preguntar-a-un-catering','guia-mercado-de-abasto'],
  ctaTitle:'¿Preferís que la comida la resuelva un catering?',
  ctaText:'Contanos el formato, la fecha, la zona y cuántas personas esperás. Te ayudamos a consultar catering en Gran Asunción con cantidades claras en la propuesta.',
  waMessage:'Hola, estoy calculando la comida para un evento y quiero consultar catering. ¿Me ayudás?'
};
