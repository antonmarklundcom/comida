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
  products: [
    {id: 'canasta-chica', label: 'Canasta de verduras y frutas, chica', note: 'Para 1 o 2 personas, una semana', available: true},
    {id: 'canasta-mediana', label: 'Canasta de verduras y frutas, mediana', note: 'Para 3 o 4 personas', available: true},
    {id: 'canasta-grande', label: 'Canasta de verduras y frutas, grande', note: 'Para familias o 5 personas o más', available: true},
    {id: 'queso-1', label: 'Queso Paraguay, 1 kilo', note: 'Fresco, de productor', available: true},
    {id: 'queso-2', label: 'Queso Paraguay, 2 kilos', note: 'Ideal para chipa o sopa', available: true},
    {id: 'huevos', label: 'Huevos, maple de 30', note: '', available: true},
    {id: 'pack-asado', label: 'Pack de asado', note: 'A consultar: cortes y cantidad según tu grupo', available: false},
    {id: 'pack-semana', label: 'Pack de carne para la semana', note: 'A consultar: milanesa, guiso y molida', available: false},
  ],
};
