import React, { useState } from 'react';

const LabFilter = ({ labs, onFilterChange }) => {
    const [activeLab, setActiveLab] = useState(null); // ID du laboratoire actif

    const handleLabClick = (labId) => {
        const newActiveLab = labId === activeLab ? null : labId; // Activer/désactiver le filtre
        setActiveLab(newActiveLab);
        onFilterChange(newActiveLab); // Passer l'ID au parent pour filtrer
    };

    return (
        <div style={styles.container}>
            {labs.map((lab) => (
                <div
                    key={lab.id}
                    onClick={() => handleLabClick(lab.id)}
                    style={{
                        ...styles.labCard,
                        ...(lab.id === activeLab ? styles.activeLab : {}),
                    }}
                >
                    <img src={lab.image} alt={lab.name} style={styles.labImage} />
                    <p style={styles.labName}>{lab.name}</p>
                </div>
            ))}
        </div>
    );
};

const styles = {
    container: {
        display: 'flex',
        justifyContent: 'center',
        gap: '20px',
        marginTop: '30px',
    },
    labCard: {
        textAlign: 'center',
        cursor: 'pointer',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        borderRadius: '50%',
        padding: '10px',
    },
    activeLab: {
        transform: 'scale(1.1)',
        boxShadow: '0 0 20px rgba(0, 255, 0, 0.7)', // Effet lumineux pour le labo actif
    },
    labImage: {
        width: '100px',
        height: '100px',
        borderRadius: '50%',
        objectFit: 'cover',
        transition: 'opacity 0.3s ease',
    },
    labName: {
        marginTop: '10px',
        fontSize: '14px',
        fontWeight: 'bold',
        color: '#fff',
    },
};

export default LabFilter;
