import { useState } from 'react';
import { useCart } from '../../contexts/CartContext';
import './MedicineCard.css';

function MedicineCard({ medicine, laboratory }) {
  const { addToCart } = useCart();
  const [isAdding, setIsAdding] = useState(false);
  
  const handleAddToCart = () => {
    setIsAdding(true);
    addToCart(medicine);
    
    // Reset animation after a short delay
    setTimeout(() => {
      setIsAdding(false);
    }, 500);
  };
  
  return (
    <div className="medicine-card">
      <div className="medicine-image">
        <img 
          src={medicine.imageUrl || 'https://images.pexels.com/photos/139398/himalayas-mountains-nepal-himalaya-139398.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'} 
          alt={medicine.nom}
        />
        {laboratory && (
          <div className="medicine-laboratory">{laboratory.nom}</div>
        )}
      </div>
      
      <div className="medicine-details">
        <h3 className="medicine-name">{medicine.nom}</h3>
        <p className="medicine-type">{medicine.type}</p>
        <div className="medicine-price">
          {(medicine.prix ?? 0).toFixed(2)} €
        </div>
        <button 
          className={`add-to-cart-btn ${isAdding ? 'adding' : ''}`}
          onClick={handleAddToCart}
          disabled={isAdding}
        >
          {isAdding ? 'Ajouté ✓' : 'Ajouter au panier'}
        </button>
      </div>
    </div>
  );
}

export default MedicineCard;