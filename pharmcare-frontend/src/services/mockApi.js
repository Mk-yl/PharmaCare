import { medicines, cartItems } from '../mockData';

// Simule les appels API
export const fetchMedicines = () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve({ data: medicines }), 500);
  });
};

export const fetchCart = () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve({ data: cartItems }), 500);
  });
};

export const addToCart = (cartItem) => {
  console.log('Simulated add to cart:', cartItem);
  return Promise.resolve();
};
