import React, { useEffect, useState } from 'react';
import { fetchCart } from '../services/mockApi';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    fetchCart()
      .then((response) => setCartItems(response.data))
      .catch((error) => console.error('Error fetching cart:', error));
  }, []);

  return (
    <div>
      <h1>Cart</h1>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
            <h2>{item.medicine.name}</h2>
            <p>Price: {item.price} €</p>
            <p>Quantity: {item.quantity}</p>
          </li>
        ))}
      </ul>
      <p>
        Total: {cartItems.reduce((total, item) => total + item.quantity * item.price, 0)} €
      </p>
    </div>
  );
};

export default Cart;
