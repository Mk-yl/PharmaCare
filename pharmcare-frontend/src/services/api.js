import { medicines, cartItems, labs } from '../mockData';

// Simule l'appel API pour récupérer les médicaments
export const fetchMedicines = () => {
    return new Promise((resolve) => {
        setTimeout(() => resolve({ data: medicines }), 500);
    });
};

// Simule l'appel API pour récupérer les laboratoires
export const fetchLabs = () => {
    return new Promise((resolve) => {
        setTimeout(() => resolve({ data: labs }), 500);
    });
};

// Simule l'appel API pour récupérer les articles du panier
export const fetchCart = () => {
    return new Promise((resolve) => {
        setTimeout(() => resolve({ data: cartItems }), 500);
    });
};

// Simule l'ajout au panier
export const addToCart = (cartItem) => {
    console.log('Simulated add to cart:', cartItem);
    return Promise.resolve();
};
