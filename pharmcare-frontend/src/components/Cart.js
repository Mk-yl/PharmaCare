import React from 'react';

const Cart = ({ cartItems }) => {
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
