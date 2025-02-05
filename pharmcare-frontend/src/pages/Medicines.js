import React, { useState } from 'react';
import Banner from '../components/Banner';
import MedicineList from '../components/MedicineList';
import Navbar from '../components/Navbar';




const Medicines = ({ addToCart }) => {




    return (
        <div style={styles.container}>
            <Navbar />
            <Banner />
            <MedicineList addToCart={addToCart} />
        </div>
    );
};

const styles = {
    container: {
        padding: '20px',
        textAlign: 'center',
    },
};

export default Medicines;
