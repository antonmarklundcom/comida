// Fresh-food orders (/mercado/): one place for every operational setting.
// Defaults chosen by the manager on 2026-09-24 because Anton had not answered yet; change freely.
// No prices are ever rendered (AGENTS.md rule 5): the total is confirmed on WhatsApp before delivery.
export default {
  open: true,                       // false = pages stay, the order form becomes a waiting list
  zones: ['Asunción', 'Fernando de la Mora', 'Luque', 'San Lorenzo', 'Lambaré'],
  cutoff: 'miércoles a las 18:00',  // orders close
  deliveryDays: ['Viernes', 'Sábado'],
  payment: ['Transferencia bancaria', 'Pago con QR'],
  // Products shown in the order form. `available: false` = "a consultar" (collected as interest, not promised).
  // group: heading in the order form. available: false = "a consultar" (collected as interest; no supplier confirmed yet).
  products: [
    {id: 'canasta-chica', label: 'Canasta de verduras y frutas, chica', note: 'Para 1 o 2 personas, una semana', group: 'verduras', available: true},
    {id: 'canasta-mediana', label: 'Canasta de verduras y frutas, mediana', note: 'Para 3 o 4 personas', group: 'verduras', available: true},
    {id: 'canasta-grande', label: 'Canasta de verduras y frutas, grande', note: 'Para familias o 5 personas o más', group: 'verduras', available: true},
    {id: 'queso-1', label: 'Queso Paraguay, 1 kilo', note: 'Fresco, de productor', group: 'queso', available: true},
    {id: 'queso-2', label: 'Queso Paraguay, 2 kilos', note: 'Ideal para chipa o sopa', group: 'queso', available: true},
    {id: 'huevos', label: 'Huevos, maple de 30', note: '', group: 'queso', available: true},
    {id: 'pack-asado', label: 'Pack de asado', note: 'Cortes y cantidad según tu grupo', group: 'carne', available: false},
    {id: 'pack-semana', label: 'Pack de carne para la semana', note: 'Milanesa, guiso y molida', group: 'carne', available: false},
    {id: 'carne-costilla', label: 'Costilla vacuna', note: 'Para parrilla, con hueso', group: 'carne', available: false},
    {id: 'carne-vacio', label: 'Vacío', note: 'Pieza entera o porcionada', group: 'carne', available: false},
    {id: 'carne-tapa-de-cuadril', label: 'Tapa de cuadril (picaña)', note: 'Con su capa de grasa', group: 'carne', available: false},
    {id: 'carne-entrana', label: 'Entraña', note: 'Cocción rápida a la parrilla', group: 'carne', available: false},
    {id: 'carne-milanesa', label: 'Carne para milanesa', note: 'Nalga o cuadrada, feteada', group: 'carne', available: false},
    {id: 'carne-molida', label: 'Carne molida', note: 'Especial o común', group: 'carne', available: false},
    {id: 'cerdo-bondiola', label: 'Bondiola de cerdo', note: 'Entera o en bifes', group: 'carne', available: false},
    {id: 'cerdo-costillar', label: 'Costillar de cerdo', note: 'Para horno o parrilla', group: 'carne', available: false},
    {id: 'pollo-entero', label: 'Pollo entero', note: 'También en presas', group: 'carne', available: false},
    {id: 'chorizo-parrillero', label: 'Chorizo parrillero', note: 'Por kilo o por unidad', group: 'carne', available: false},
    {id: 'pescado-surubi', label: 'Surubí en postas', note: 'Pre-pedido para Semana Santa', group: 'pescado', available: false},
    {id: 'pescado-pacu', label: 'Pacú entero o en costillas', note: 'Pre-pedido para Semana Santa', group: 'pescado', available: false},
    {id: 'pescado-dorado', label: 'Dorado entero o en postas', note: 'Pre-pedido para Semana Santa', group: 'pescado', available: false},
  ],
  groups: {verduras: 'Verduras y frutas', queso: 'Queso y huevos', carne: 'Carne, cerdo y pollo (a consultar)', pescado: 'Pescado de río para Semana Santa (pre-pedido)'},
};
