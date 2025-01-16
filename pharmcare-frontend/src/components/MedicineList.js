import React, { useEffect, useState } from 'react';
import { fetchMedicines } from '../services/mockApi';
import './MedicineList.css'; // Ajout du fichier CSS

const MedicineList = ({ addToCart }) => {
  const [medicines, setMedicines] = useState([]);

  useEffect(() => {
    fetchMedicines()
      .then((response) => setMedicines(response.data))
      .catch((error) => console.error('Error fetching medicines:', error));
  }, []);

  return (
    <div className="medicine-list">
      {medicines.map((medicine) => (
        <div key={medicine.id} className="medicine-card">
          <h2>{medicine.name}</h2>
          <p>{medicine.description}</p>
          <p className="price">Price: {medicine.price} €</p>
          <button onClick={() => addToCart(medicine.id, 1)} className="add-to-cart">
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default MedicineList;
