import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import Home from './pages/Home';
import MedicineList from './pages/Medicines';
import CartPage from './pages/CartPage';

const App = () => {
    const { isLoading } = useAuth0();

    if (isLoading) {
        return <div>Loading...</div>;
    }

    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/medicines" element={<MedicineList />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/admin" element={<AdminDashboard />} />

        </Routes>
    );
};

export default App;
