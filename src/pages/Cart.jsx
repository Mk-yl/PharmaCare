import { useState } from 'react';
import { useCart } from '../contexts/CartContext';
import PayPalButton from '../components/auth/PayPalButton';
import './Cart.css';

function Cart() {
  const { cartItems, removeFromCart, updateQuantity, clearCart, totalPrice } = useCart();
  const [orderPlaced, setOrderPlaced] = useState(false);


  const handleQuantityChange = (id, newQuantity) => {
    const quantity = Math.max(1, Number(newQuantity));
    updateQuantity(id, quantity);
  };

  const handleRemoveItem = (id) => {
    removeFromCart(id);
  };

  if (orderPlaced) {
    return (
        <div className="cart-page">
          <div className="order-success">
            <div className="success-icon">✓</div>
            <h2>Commande validée !</h2>
            <p>Votre commande a été enregistrée avec succès.</p>
            <p className="order-note">
              Note:...
            </p>
            <button className="btn btn-primary" onClick={() => setOrderPlaced(false)}>
              Retour à la boutique
            </button>
          </div>
        </div>
    );
  }

  if (cartItems.length === 0) {
    return (
        <div className="cart-page">
          <h1 className="page-title">Votre Panier</h1>
          <div className="empty-cart">
            <p>Votre panier est vide</p>
            <a href="/medicines" className="btn btn-primary">
              Parcourir les médicaments
            </a>
          </div>
        </div>
    );
  }

  return (
      <div className="cart-page">
        <h1 className="page-title">Votre Panier</h1>

        <div className="cart-container">
          <div className="cart-items">
            <div className="cart-header">
              <span className="header-product">Produit</span>
              <span className="header-price">Prix unitaire</span>
              <span className="header-quantity">Quantité</span>
              <span className="header-total">Total</span>
              <span className="header-actions"></span>
            </div>

            {cartItems.map(item => (
                <div key={item.id} className="cart-item">
                  <div className="item-product">
                    <div className="item-image">
                      <img
                          src={item.imageUrl || 'https://via.placeholder.com/100'}
                          alt={item.nom}
                      />
                    </div>
                    <div className="item-details">
                      <h3>{item.nom}</h3>
                      <p>{item.type}</p>
                    </div>
                  </div>

                  <div className="item-price">{item.prix.toFixed(2)} €</div>

                  <div className="item-quantity">
                    <button
                        className="quantity-btn decrease"
                        onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                        disabled={item.quantity <= 1}
                    >
                      -
                    </button>
                    <input
                        type="number"
                        min="1"
                        value={item.quantity}
                        onChange={(e) => handleQuantityChange(item.id, e.target.value)}
                        className="quantity-input"
                    />
                    <button
                        className="quantity-btn increase"
                        onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                    >
                      +
                    </button>
                  </div>

                  <div className="item-total">
                    {(item.prix * item.quantity).toFixed(2)} €
                  </div>

                  <div className="item-actions">
                    <button className="remove-item-btn" onClick={() => handleRemoveItem(item.id)}>
                      ×
                    </button>
                  </div>
                </div>
            ))}
          </div>

          <div className="cart-summary">
            <h2>Récapitulatif</h2>

            <div className="summary-row">
              <span>Sous-total:</span>
              <span>{totalPrice.toFixed(2)} €</span>
            </div>

            <div className="summary-row">
              <span>TVA (20%):</span>
              <span>{(totalPrice * 0.2).toFixed(2)} €</span>
            </div>

            <div className="summary-total">
              <span>Total:</span>
              <span>{(totalPrice * 1.2).toFixed(2)} €</span>
            </div>



                <PayPalButton
                    amount={(totalPrice * 1.2).toFixed(2)}
                    onSuccess={() => {
                      setOrderPlaced(true);
                      clearCart();
                    }}
                />


            <button className="clear-cart-btn" onClick={clearCart}>
              Vider le panier
            </button>
          </div>
        </div>
      </div>
  );
}

export default Cart;
