import React from 'react';
import Banner from '../components/Banner';
import MedicineList from '../components/MedicineList';

const Medicines = ({ addToCart }) => {
  return (
    <div>
      <Banner />
      <MedicineList addToCart={addToCart} />
    </div>
  );
};

export default Medicines;
