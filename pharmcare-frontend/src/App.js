import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import MedicineList from './components/MedicineList';
import Cart from './components/Cart';

const App = () => {
  const addToCart = (medicineId, quantity) => {
    console.log(`Adding medicine ${medicineId} with quantity ${quantity}`);
    // Logic to add to cart will go here
  };

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<h1>Welcome to PharmaCare</h1>} />
        <Route path="/medicines" element={<MedicineList addToCart={addToCart} />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Router>
  );
};

export default App;
