import React, { useState, useEffect } from 'react';
import { fetchCart } from '../services/api'; // Importer la fonction simulée pour le panier

const Cart = () => {
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        const fetchCartItems = async () => {
            const response = await fetchCart();
            setCartItems(response.data);
        };

        fetchCartItems();
    }, []);

    return (
        <div>
            <ul>
                {cartItems.map((item) => (
                    <li key={item.id}>
                        <h2>{item.medicine.name}</h2>
                        <p>Prix : {item.price} €</p>
                        <p>Quantité : {item.quantity}</p>
                    </li>
                ))}
            </ul>
            <p>
                Total :{' '}
                {cartItems.reduce(
                    (total, item) => total + item.quantity * item.price,
                    0
                )}{' '}
                €
            </p>
        </div>
    );
};

export default Cart;
