# 02 — SEO and sitemap

Locale es-PY, no hreflang. Trailing slashes, lowercase, no accents in slugs. Every page is static HTML with one H1, unique title/meta, breadcrumbs, JSON-LD, one primary CTA (form) and one secondary (WhatsApp).

## 1. Keyword clusters

KWP evidence (paste in `research/kwp-paste-raw.txt`, settings unconfirmed): catering 720, servicio de catering 480, catering para eventos 140, chef a domicilio 140, price queries 20–30, occasion terms about 10 each; the rest is delivery-navigational. Vocabulary notes from the critique: prefer bocaditos, presupuesto, casamiento/boda, fiesta de 15, almuerzo empresarial; "lunch" in Paraguay can mean a bocaditos service; "marmitas fit" is Portuguese-influenced and unproven. Query targets added: catering para 50 personas, catering para 100 personas, precio de catering por persona (all on `/precios/`), bocaditos por ciento, bocaditos salados y dulces, servicio de lunch para eventos (bocaditos and corporate pages).

The clusters below remain the long-tail map; they are not volume claims.

**Head terms (hub pages):** catering, catering asuncion, servicio de catering, catering para eventos, catering paraguay, empresas de catering, catering precios, cuanto cuesta un catering.

**Catering long tail by occasion (one page each):**
- bodas: catering para bodas, catering para casamiento, menu para boda precio por persona, catering boda 100 personas
- 15 años: catering para 15 años, catering quinceañera, menu para fiesta de 15, bocaditos para 15 años
- cumpleaños: catering para cumpleaños, bocaditos para cumpleaños, comida para cumpleaños de adultos, catering cumpleaños infantil
- baby shower: catering para baby shower, bocaditos para baby shower, mesa dulce baby shower (capture, link to babyshower.com.py)
- asado: catering de asado, asado para eventos, parrillero para eventos, asado a la estaca para fiestas (capture, link to asado.com.py)
- eventos empresariales: catering empresarial, catering para empresas, catering para eventos corporativos, catering para reuniones
- fin de año / navidad: catering fin de año empresa, cena de fin de año empresarial, catering navidad, cena navideña para empresas
- coffee break: coffee break para eventos, coffee break empresarial, catering para capacitaciones, catering para conferencias
- almuerzo empresarial: almuerzo empresarial, lunch para oficinas, vianda ejecutiva, almuerzo para reuniones
- desayunos: desayuno empresarial, desayuno para eventos, desayuno sorpresa (high-volume PY gift search; own line)
- brunch: brunch para eventos, brunch a domicilio
- despedida de soltera/o: catering despedida de soltera, comida para despedida de soltero
- graduaciones: catering para graduacion, comida para egresados, fiesta de egresados catering
- bautismo y comunión: catering para bautismo, catering primera comunion
- velorio: lunch para velorio, servicio de comida para velatorio (real demand; write with restraint, no upsell tone)
- inauguraciones y lanzamientos: catering para inauguracion, catering lanzamiento de producto
- fiestas infantiles: catering infantil, comida para fiesta infantil, pizza party, candy bar para cumpleaños
- mesa dulce / tortas: mesa de dulces para eventos, mesa dulce precio, tortas para eventos
- food truck: food truck para eventos, food truck para fiestas, food truck para casamiento
- bocaditos / finger food: bocaditos para eventos, salados y dulces por mayor, empanadas por mayor, chipa por mayor
- tercer tiempo: comida para tercer tiempo, asado para tercer tiempo
- eventos grandes: catering para 200 personas, catering para 500 personas, catering para eventos masivos
- temáticos: comida mexicana para eventos, sushi para eventos, pasta party, paella para eventos, comida arabe para eventos, catering vegano
- religiosos/comunitarios: catering para iglesia, comida para retiro espiritual (later; check volume)

**City / zone terms:** catering asuncion, luque, san lorenzo, fernando de la mora, lambare, capiata, nemby, mariano roque alonso, villa elisa, ciudad del este, encarnacion; later coronel oviedo, pedro juan caballero, caacupe.

**Chef a domicilio:** chef a domicilio, chef privado, cocinero a domicilio, cena romantica a domicilio, chef para cumpleaños, chef para eventos pequeños, clases de cocina a domicilio, chef a domicilio precio.

**Viandas:** viandas a domicilio, viandas saludables, viandas semanales, marmitas fit, comida preparada a domicilio, viandas para oficina, viandas para embarazadas, dieta a domicilio, comida congelada a domicilio, viandas sin gluten.

**Delivery (content only):** delivery de comida asuncion, comida a domicilio 24 horas, mejores delivery asuncion, delivery de asado.

**Recipes / media (authority):** receta de chipa, sopa paraguaya receta, mbeju, vori vori, chipa guazu, pastel mandio, kiveve, receta asado paraguayo, comida tipica paraguaya, menu de navidad paraguay, comida de semana santa paraguay, cuanto de carne por persona asado, cuanta comida por persona en un evento, cuantos bocaditos por persona, cuanta bebida por persona.

## 2. URL tree

### Launch set (v2: 20 indexable routes + 404, the manifest in `08-V2-DECISIONS.md` is authoritative)
```
/                                   Home: brand + services, cómo funciona, top occasions, FAQ
/catering/                          Hub for generic intent (catering 720, servicio de catering 480): formats, occasions, form
/catering/eventos-empresariales/    build order follows Codex's ranking
/catering/fin-de-ano/
/catering/bodas/
/catering/15-anos/
/catering/coffee-break/
/catering/bocaditos/
/catering/cumpleanos/
/catering/asuncion/                 only city page at launch
/chef-a-domicilio/                  published only with a signed chef partner, else noindex + hidden from nav
/precios/                           "Cuánto cuesta un catering": 50 / 100 personas, por persona; no numbers until sourced
/presupuesto/                       short form
/como-funciona/
/proveedores/                       supplier application form (own CRM lead type)
/sobre/  /contacto/  /terminos/  /privacidad/
/gracias/                           noindex, not in sitemap
/404.html                           not in sitemap
```

### Backlog (P3+, only after the pilot; ranked order from the critique)
almuerzo-empresarial, asado (capture → asado.com.py once live), inauguraciones, graduaciones, baby-shower (capture → babyshower.com.py once live), bautismo-y-comunion, desayunos, eventos-grandes, fiestas-infantiles, mesa-dulce. Then cities, each only with a named available provider and real logistics. Then `/calculadora/` (quantity calculator), guides, viandas, delivery guide, recipes. Not planned: velorio, tercer-tiempo, despedida, food-truck, cuisine pages, navidad (merged into fin-de-ano).

### Original growth set kept for reference (superseded by the backlog above)
```
/catering/almuerzo-empresarial/     /catering/brunch/               /catering/despedida-de-soltera/
/catering/graduaciones/             /catering/bautismo-y-comunion/  /catering/velorio/
/catering/inauguraciones/           /catering/fiestas-infantiles/   /catering/mesa-dulce/
/catering/food-truck/               /catering/bocaditos/            /catering/tercer-tiempo/
/catering/eventos-grandes/          /catering/vegano-y-vegetariano/ /catering/comida-mexicana/
/catering/sushi/                    /catering/paella/               /catering/navidad/
/catering/luque/  /san-lorenzo/  /fernando-de-la-mora/  /lambare/  /capiata/  /nemby/
/catering/mariano-roque-alonso/  /villa-elisa/  /ciudad-del-este/  /encarnacion/
/chef-a-domicilio/                  hub + /cena-romantica/  /cumpleanos/  /clases-de-cocina/
/viandas/                           hub + /saludables/  /para-oficina/  /semanales/
/delivery/                          guide hub, no ordering
```

### Authority set (P3, 10 posts, then ongoing)
```
/guias/cuanta-comida-por-persona-en-un-evento/
/guias/cuanto-de-carne-por-persona-para-asado/
/guias/cuantos-bocaditos-por-persona/
/guias/cuanta-bebida-por-persona/
/guias/como-elegir-un-catering-para-boda/
/guias/menu-para-15-anos-ideas-y-precios/
/guias/catering-vs-cocinar-vos-mismo/
/guias/checklist-comida-para-evento-empresarial/
/guias/que-preguntar-a-un-catering-antes-de-contratar/
/recetas/chipa/  /recetas/sopa-paraguaya/   seed the recipe section with Recipe schema
```

Occasion×city combos (`/catering/bodas/asuncion/`) are NOT built at launch. Add only when both parent pages show impressions in Search Console, and only for the top 3 occasions × top 3 cities.

## 3. Money-page template (occasion page)

1. H1 "Catering para bodas: menús, formatos y presupuesto"
2. 2–3 sentence intro naming the real decision (pax, formato, presupuesto por persona)
3. Formats for that occasion; price numbers only from entries with `published: true`, otherwise "depende del menú, la cantidad de personas y el servicio"
4. "Pedir presupuesto" CTA prefilled with the occasion (estimator lives on /precios/ only)
5. "Qué incluye" checklist (vajilla, mozos, montaje, bebidas, tiempos)
6. 3 sample menus, unique per occasion
7. Cómo funciona, 3 steps
8. FAQ 6–8 questions unique to the occasion (visible HTML, no FAQPage schema)
9. Related: 2–3 published occasions + Asunción (guides and more cities once they exist)
10. Sticky mobile CTA bar: Presupuesto + WhatsApp

City page differs: intro names zonas, salones típicos and logistics; a "cobertura" list; same calculator; FAQ on radius, horarios, costo de traslado.

## 4. Internal linking

- Home → all hubs; hub → all subcategories; each subcategory → hub, 3 siblings, 3 cities, 1 guide.
- Every guide → 2 money pages with descriptive anchors ("catering para bodas", never "acá").
- `/calculadora/` and `/precios/` are the link magnets; they link to every occasion.
- Footer: hubs only.
- Sister domains: one contextual outbound link per capture page, normal `rel`.

## 5. Technical SEO

- Static HTML under 100 KB per page, WebP images with width/height, lazy below fold, LCP hero preloaded, no third-party fonts blocking render.
- `sitemap.xml` and `robots.txt` generated by the build, canonical on every page, `lastmod` from the content file.
- JSON-LD: `Organization` (site), `Service` on occasion/city/chef pages, `BreadcrumbList` everywhere. No `Offer` or `priceRange` (priceRange belongs to LocalBusiness; no offers from editorial estimates). FAQ stays visible HTML without `FAQPage` expectations (Google dropped FAQ rich results; HowTo was deprecated). No `LocalBusiness` until a real office exists.
- Titles ≤ 60 chars, metas ≤ 155, unique, as editorial limits. Pattern: "Catering para {ocasión} | comida.com.py" (the v1 pattern exceeded 60).
- Search Console verified day 1, sitemap submitted, impressions tracked per folder.

## 6. Content calendar after launch

- Weeks 1–4: launch + growth sets.
- Weeks 5–12: 2 guides/week aimed at "cuánto / cómo / qué" questions ending in a catering CTA, plus 1 recipe/week.
- Month 4+: seasonal hubs prepared 6 weeks ahead. Semana Santa (chipa, comida de vigilia), San Juan (comidas típicas), Día de la Madre/Padre (chef a domicilio), Oct–Nov (fin de año empresa), Dec (Navidad, cena de fin de año).

## 7. Measurement

GA4 or Plausible with events `form_start`, `form_submit` (the lead), `wa_click` (not a lead), `calc_use`. Search Console folder report monthly. Lead source = page path, stored in the CRM deal.
