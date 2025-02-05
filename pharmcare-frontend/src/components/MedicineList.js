import React, { useState, useEffect } from 'react';
import { medicines } from '../mockData.js';
import { labs } from '../mockData.js';
import './MedicineList.css';
import SearchBar from "./SearchBar";

const ITEMS_PER_PAGE = 6;

const MedicineList = ({ addToCart }) => {
    const [currentPage, setCurrentPage] = useState(1); // État pour la pagination
    const [selectedLab, setSelectedLab] = useState(null); // État pour le filtre
    const [searchQuery, setSearchQuery] = useState(''); // État pour la recherche

    // Fonction pour filtrer les médicaments par laboratoire et recherche
    const filteredMedicines = medicines.filter((medicine) => {
        const matchesLab = selectedLab ? medicine.lab_id === selectedLab : true;
        const matchesSearch = medicine.name.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesLab && matchesSearch;
    });

    // Pagination
    const indexOfLastItem = currentPage * ITEMS_PER_PAGE;
    const indexOfFirstItem = indexOfLastItem - ITEMS_PER_PAGE;
    const currentMedicines = filteredMedicines.slice(indexOfFirstItem, indexOfLastItem);

    const totalPages = Math.ceil(filteredMedicines.length / ITEMS_PER_PAGE);

    // Remettre à la première page lors du filtrage
    useEffect(() => {
        setCurrentPage(1);
    }, [selectedLab, searchQuery]);

    // Gérer la sélection des laboratoires
    const handleLabClick = (labId) => {
        setSelectedLab((prevLab) => (prevLab === labId ? null : labId)); // Désactive le filtre si on clique à nouveau
    };

    return (
        <div>
            <div className="labpag">
                {/* Affichage des laboratoires */}
                <div className="labImages">
                    {labs.map((lab) => (
                        <div
                            key={lab.id}
                            onClick={() => handleLabClick(lab.id)}
                            className={`labCard ${selectedLab === lab.id ? 'activeLab' : ''}`}
                        >
                            <p>{lab.name}</p>
                            <img src={lab.image} alt={lab.name} className="labImage" />
                        </div>
                    ))}
                </div>

                {/* Barre de recherche */}
                <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

                {/* Pagination */}
                <div className="pagination">
                    {Array.from({ length: totalPages }, (_, index) => (
                        <button
                            key={index}
                            className="pageButton"
                            onClick={() => setCurrentPage(index + 1)}
                        >
                            {index + 1}
                        </button>
                    ))}
                </div>
            </div>

            {/* Liste des médicaments */}
            <div className="grid">
                {filteredMedicines.length > 0 ? (
                    currentMedicines.map((medicine) => (
                        <div key={medicine.id} className="card">
                            <div className="imageContainer">
                                <img src="/paracetamol.png" alt={medicine.name} className="cardImage" />
                            </div>
                            <h3 className="cardTitle">{medicine.name}</h3>
                            <p className="cardDescription">{medicine.description}</p>
                            <p className="cardPrice">Prix : {medicine.price} €</p>
                            <button className="button" onClick={() => addToCart(medicine.id, 1)}>
                                Ajouter au panier
                            </button>
                        </div>
                    ))
                ) : (
                    <p>Aucun médicament trouvé.</p>
                )}
            </div>
        </div>
    );
};

export default MedicineList;
