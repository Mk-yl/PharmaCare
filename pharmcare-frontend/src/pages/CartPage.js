import React, { useState } from 'react';
import Cart from '../components/Cart';
import {cartItems} from "../mockData";



const CartPage = () => {
    const [cartItems, setCartItems] = useState([
        {
            id: 1,
            medicine: { name: 'Paracétamol' },
            price: 2.5,
            quantity: 3,
        },
        {
            id: 2,
            medicine: { name: 'Ibuprofène' },
            price: 3.0,
            quantity: 2,
        },
    ]);

    return (
        <div>
            <h1>Votre Panier</h1>
            <Cart cartItems={cartItems} /> {/* Utilisez le composant Cart */}
        </div>
    );
};

export default CartPage;
