# Keyword Planner: dataset y brechas del portafolio

## Alcance y parseo

Fuente única: `plan/research/kwp-paste-raw.txt`. Análisis local del paste, sin búsquedas externas ni validación de entidades. Las clases son hipótesis de intención basadas en el texto, no identificaciones verificadas de negocios.

Filas parseadas: **500**. Fallos de parseo: **0**. Líneas no vacías consumidas: **4013**, incluidas **13** etiquetas de sección. Cada bloque contiene ocho líneas de datos. No se descartó ningún keyword. Duplicados exactos: 0.

CSV: keyword, volume, change_3m, change_yoy, competition, bid_low, bid_high, section, class. Volumen convertido a entero; cambios conservados como porcentajes de texto o +∞, con signo menos ASCII y sin espacios. No se convierte +∞ a un crecimiento finito. Låg, Medel y Hög se conservan: baja, media y alta competencia publicitaria. Guiones de competencia y pujas pasan a campos vacíos, no a cero. Las pujas usan punto decimal y siguen expresadas en SEK; no se convierten a guaraníes.

La sexta línea de cada bloque es un campo adicional sin encabezado, siempre —. Se valida pero no se exporta; no se presupone su significado. Las dos líneas siguientes se interpretan como bid_low y bid_high según el orden indicado en el encargo. section conserva la última etiqueta hasta que aparece otra: Sökord som du har angett = semillas ingresadas; Sökordsförslag = sugerencias. Se mantienen variantes y acentos originales de los keywords.

## Totales por clase

| Clase | Filas | Suma de volumen mensual |
| --- | ---: | ---: |
| catering | 106 | 2830 |
| chef | 24 | 2320 |
| delivery-navigational | 42 | 530 |
| delivery-generic | 262 | 4910 |
| brand-restaurant | 3 | 1420 |
| celebrity-chef | 17 | 1550 |
| recipe | 0 | 0 |
| product-guide | 8 | 80 |
| supermarket | 0 | 0 |
| meat | 0 | 0 |
| honey | 0 | 0 |
| other | 38 | 730 |
| **Total** | **500** | **14370** |

Estas sumas describen las filas del paste. No representan búsquedas únicas, tráfico capturable ni tamaño de mercado: las variantes pueden compartir estimaciones de KWP. La suma tampoco demuestra demanda ubicada en Paraguay.

## Criterios y ambigüedades

- Una sola clase por fila. catering incluye consultas de eventos, banquetes, menús de boda y nombres acompañados por catering. Los nombres no implican una relación comercial con el sitio.
- delivery-navigational agrupa consultas que nombran una plataforma o un restaurante junto con pedidos o entrega. Incluye navegación de ayuda, comercio e inscripción: su volumen no equivale exclusivamente a pedidos de consumidores.
- delivery-generic incluye entrega y retiro de comida sin marca reconocible. Las consultas de asado, pollo o restaurantes con delivery se clasifican por la intención de entrega; no como recetas o carne cruda.
- brand-restaurant: como en casa es una asignación provisional por su posible uso como nombre de restaurante; el paste no permite separarlo del sentido cotidiano. Si se reclasifica como other, se trasladan 1300 unidades de volumen y una fila. rapipollo y restaurante popeyes se tratan como búsquedas de marca, sin atribuirles ubicación.
- chef incluye ocupaciones, variantes ortográficas y contratación explícita. celebrity-chef incluye nombres personales y consultas sobre chefs famosos. Programas de televisión y entidades ambiguas pasan a other, incluidos chef vip, masterchef y las variantes de telemundo. ecole ducasse se trata como educación, no como búsqueda directa de una persona.
- product-guide es una categoría amplia de productos, equipos o libros: tupperware, robots, infinity chefs, royalcatering y escoffier le guide culinaire. La asignación de infinity chefs y royalcatering es provisional. Ninguna fila demuestra por sí sola intención de comparar o leer una guía de compra. No se cuenta una búsqueda de libro como receta específica.
- Nombres ambiguos como el chef, mini chef, table chef, petit chef, lechef, chef and dish y chef in dish quedan en other; no se fuerza una identidad comercial. Las consultas de organización o vestimenta de bodas tampoco se cuentan como catering.
- pedidos market se incluye provisionalmente en delivery-navigational por su formulación de marca. Es una señal posible de compras de supermercado por plataforma, no evidencia de búsquedas genéricas de supermercados; requiere validación antes de decidir ese vertical.

## Top 10 por clase

Orden: volumen descendente; empates conservan el orden del paste. Cuando hay menos de diez filas se muestran todas.

### catering

| Keyword | Volumen mensual |
| --- | ---: |
| catering | 720 |
| servicio de catering | 480 |
| la toscana catering | 210 |
| catering para eventos | 140 |
| cuatro fuegos catering | 70 |
| marta elena catering | 70 |
| servicio de catering para eventos | 40 |
| servicio catering | 30 |
| servicio de catering para 100 personas precios | 30 |
| talleyrand catering | 30 |

### chef

| Keyword | Volumen mensual |
| --- | ---: |
| chefs | 1000 |
| chef s | 480 |
| cheffs | 210 |
| chef a domicilio | 140 |
| chef domicilio | 140 |
| souschef | 70 |
| chef de cocina | 50 |
| chef profesional | 30 |
| chef mujer | 20 |
| chefs mujeres | 20 |

### delivery-navigational

| Keyword | Volumen mensual |
| --- | ---: |
| pedidos ya delivery | 50 |
| delivery de mcdonald's | 30 |
| pizza hut pedidos | 30 |
| delivery de mcdonalds | 30 |
| pedidos market | 20 |
| pedir mcdonald's a domicilio | 10 |
| pizza hut a domicilio | 10 |
| pedir kfc a domicilio | 10 |
| siete sopas delivery | 10 |
| domino's pizza a domicilio | 10 |

### delivery-generic

| Keyword | Volumen mensual |
| --- | ---: |
| delivery cerca de mi | 720 |
| comida a domicilio | 170 |
| comida para llevar | 170 |
| comida a domicilio cerca de mi | 140 |
| comida delivery | 90 |
| delivery de comida cerca de mi | 70 |
| delivery comida cerca de mi | 70 |
| hamburguesas delivery | 70 |
| comida con delivery cerca de mi | 70 |
| pizza delivery cerca de mi | 70 |

### brand-restaurant

| Keyword | Volumen mensual |
| --- | ---: |
| como en casa | 1300 |
| rapipollo | 110 |
| restaurante popeyes | 10 |

### celebrity-chef

| Keyword | Volumen mensual |
| --- | ---: |
| chef ramsay gordon | 880 |
| jordi cruz | 210 |
| chef francis mallmann | 70 |
| chef david muñoz | 50 |
| chef petersen | 50 |
| david muñoz | 50 |
| escoffiers | 40 |
| chef ducasse | 30 |
| érick jacquin | 30 |
| acurio | 20 |

### recipe

Sin keywords en el paste.

### product-guide

| Keyword | Volumen mensual |
| --- | ---: |
| robot cook | 10 |
| quick chef tupperware | 10 |
| chef robot | 10 |
| infinity chefs | 10 |
| royalcatering | 10 |
| escoffier le guide culinaire | 10 |
| tupperware chef | 10 |
| chef bot | 10 |

### supermarket

Sin keywords en el paste.

### meat

Sin keywords en el paste.

### honey

Sin keywords en el paste.

### other

| Keyword | Volumen mensual |
| --- | ---: |
| chef vip | 170 |
| el chef | 90 |
| masterchef españa | 40 |
| como vestirme para una boda civil | 30 |
| como vestirme para una boda de dia | 30 |
| mini chef | 20 |
| table chef | 20 |
| master chef colombia | 20 |
| como vestirse en una boda de dia | 20 |
| comida en casa | 10 |

## Brechas y semillas para el segundo export

Configurá ubicación exclusivamente Paraguay e idioma español para todas las familias. Conservá esos ajustes, el período y la red elegida junto al export. Las semillas siguientes son propuestas para medir; no son evidencia de volumen. Usá cada término separado por punto y coma como una semilla independiente.

| Familia | Evidencia en este paste | Semillas exactas del segundo export |
| --- | --- | --- |
| Recetas | **CERO evidencia de intención de receta.** No aparecen chipa, sopa paraguaya, mbeju, vori vori ni chipa guazu. asado aparece únicamente en asado delivery, delivery asado y pollo asado delivery: entrega, no preparación. | receta de chipa; sopa paraguaya; mbeju; vori vori; chipa guazu; asado; receta de sopa paraguaya; receta de mbeju; receta de vori vori; receta de chipa guazu; receta de asado; como hacer asado |
| Carne y carnicerías | **CERO evidencia de compra de carne cruda o carnicerías.** No aparecen carniceria, carne, cortes de carne ni precio de la carne. Platos preparados con delivery no prueban esa intención. | carniceria; carne; cortes de carne; precio de la carne; carniceria en asuncion; comprar carne; carne vacuna; carne para asado; cortes de carne para asado; precio de la carne en paraguay |
| Miel | **CERO evidencia.** No aparecen miel, miel de abeja ni miel pura. | miel; miel de abeja; miel pura; comprar miel; miel en paraguay; miel de abeja precio; como saber si la miel es pura |
| Supermercados | **CERO evidencia genérica directa** de supermercado, ofertas supermercado o precios supermercado. Hay una señal indirecta ambigua: pedidos market, volumen 20, clasificada como navegación de delivery. No corresponde afirmar ausencia absoluta de toda señal relacionada. | supermercado; ofertas supermercado; precios supermercado; supermercados en asuncion; supermercado online; supermercado a domicilio; ofertas de supermercados en paraguay |
| Restaurantes | **NO es cero.** Hay restaurantes delivery y múltiples variantes de restaurante con entrega, además de las búsquedas de marca. No aparecen exactamente restaurantes en asuncion, restaurante como término independiente ni donde comer. Falta evidencia de descubrimiento para comer en el local. | restaurantes en asuncion; restaurante; donde comer; donde comer en asuncion; restaurantes en paraguay; restaurantes cerca de mi; restaurantes de comida paraguaya |

La brecha es del muestreo: ausencia en el paste no significa ausencia de demanda. La taxonomía pedida no tiene una clase restaurant-generic, por lo que las señales de restaurantes se evalúan también transversalmente en delivery-generic y brand-restaurant. Una clase supermarket vacía tampoco elimina la señal indirecta de pedidos market.

## Lo que el paste no permite concluir

- No se ven los ajustes de ubicación ni idioma. El idioma sueco de las etiquetas y las consultas en español no acreditan una segmentación Paraguay/español. Las referencias geográficas o marcas tampoco la acreditan.
- Las pujas están en SEK, coronas suecas, según el contexto del encargo y el sufijo kr; el paste no muestra un encabezado con código ISO. No son precios de alimentos, presupuestos de catering ni ingresos esperables.
- competition mide competencia entre anunciantes, no dificultad orgánica o SEO. Låg no significa que sea fácil posicionar.
- Los volúmenes son estimaciones en buckets redondeados. No son conteos exactos; sumar variantes puede duplicar demanda estimada.
- No se ve el período de referencia, la red ni el método de selección completo. Los cambios trimestrales y anuales, incluidos +∞ y caídas porcentuales, no permiten reconstruir series mensuales ni asegurar tendencias sostenidas.
- No hay datos de conversiones, márgenes, disponibilidad de dominios ni resultados orgánicos. El paste no alcanza para priorizar inversiones entre todos los verticales del portafolio.

## Lectura para la decisión

El conjunto permite observar catering, contratación de chefs y entrega de comida, mezclados con navegación de marcas, entretenimiento y consultas ambiguas. Para decidir entre recetas, guías de compra, carne, miel, supermercados y restaurantes, completá el segundo export con los mismos ajustes. No descartes un vertical por su ausencia en este conjunto ni uses la suma de consultas de celebridades o marcas como mercado propio.

## Assumptions

- Las etiquetas de sección se heredan y las dos últimas columnas son las pujas baja y alta; no hay encabezados completos para verificarlas.
- La clasificación usa la intención textual predominante y conserva los casos provisionales indicados. Las cifras de las clases dependen de esas decisiones.

## Flagged

- Fallos de parseo: 0. El campo adicional sin encabezado está vacío en todas las filas.
- La ruta de Node indicada no está disponible; se utilizó PowerShell integrado.
- git status no está disponible: la carpeta no es un repositorio Git reconocido. Se compararon hashes de todos los archivos preexistentes fuera de los dos entregables para controlar el alcance.
- No se ejecutaron build ni verify del sitio: este encargo posterior exige análisis y solo dos archivos de investigación; el build podría modificar la salida estática. Se validaron el CSV, los totales, la cobertura y la codificación de los entregables.
