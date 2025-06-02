import { createContext, useState, useContext, useEffect } from 'react';

const CartContext = createContext();

export function useCart() {
  return useContext(CartContext);
}

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  // Charger le panier depuis le localStorage
  useEffect(() => {
    const savedCart = localStorage.getItem('pharmacare_cart');
    if (savedCart) {
      try {
        setCartItems(JSON.parse(savedCart));
      } catch (error) {
        console.error('Erreur lors du chargement du panier depuis le localStorage :', error);
        setCartItems([]);
      }
    }
  }, []);

  // Sauvegarder le panier dans le localStorage
  useEffect(() => {
    localStorage.setItem('pharmacare_cart', JSON.stringify(cartItems));
  }, [cartItems]);

  // Ajouter un médicament au panier
  const addToCart = (medicine) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === medicine.id);

      if (existingItem) {
        return prevItems.map(item =>
            item.id === medicine.id
                ? { ...item, quantity: item.quantity + 1 }
                : item
        );
      } else {
        return [...prevItems, { ...medicine, quantity: 1 }];
      }
    });
  };

  // Supprimer un médicament du panier
  const removeFromCart = (medicineId) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== medicineId));
  };

  // Mettre à jour la quantité d’un médicament
  const updateQuantity = (medicineId, newQuantity) => {
    if (newQuantity < 1) return;

    setCartItems(prevItems =>
        prevItems.map(item =>
            item.id === medicineId ? { ...item, quantity: newQuantity } : item
        )
    );
  };

  // Vider le panier
  const clearCart = () => {
    setCartItems([]);
  };

  // Calculer le total
  const totalPrice = cartItems.reduce((total, item) => {
    return total + (item.prix * item.quantity); // Utilise `prix` ici
  }, 0);

  const value = {
    cartItems,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    totalPrice
  };

  return (
      <CartContext.Provider value={value}>
        {children}
      </CartContext.Provider>
  );
}
