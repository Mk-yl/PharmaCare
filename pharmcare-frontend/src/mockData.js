export const medicines = [
  {
    id: 1,
    name: 'Paracetamol',
    description: 'Used to relieve pain and reduce fever.',
    price: 2.50,
  },
  {
    id: 2,
    name: 'Amoxicillin',
    description: 'Antibiotic for bacterial infections.',
    price: 5.00,
  },
  {
    id: 3,
    name: 'Ibuprofen',
    description: 'Relieves pain and reduces inflammation.',
    price: 3.00,
  },
];

export const cartItems = [
  {
    id: 1,
    medicine: medicines[0],
    quantity: 2,
    price: medicines[0].price,
  },
  {
    id: 2,
    medicine: medicines[1],
    quantity: 1,
    price: medicines[1].price,
  },
];
