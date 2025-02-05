import React, { useState, useEffect } from 'react';
import { fetchMedicines, fetchLabs, addToCart } from '../services/api'; // Importer les fonctions simulées
import './MedicineList.css';
import SearchBar from './SearchBar';

const ITEMS_PER_PAGE = 6;

const MedicineList = () => {
    const [medicines, setMedicines] = useState([]);
    const [labs, setLabs] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedLab, setSelectedLab] = useState(null);
    const [searchQuery, setSearchQuery] = useState('');

    // Appeler l'API simulée pour récupérer les médicaments
    useEffect(() => {
        const fetchData = async () => {
            const medicinesResponse = await fetchMedicines();
            const labsResponse = await fetchLabs();
            setMedicines(medicinesResponse.data);
            setLabs(labsResponse.data);
        };

        fetchData();
    }, []);

    const filteredMedicines = medicines.filter((medicine) => {
        const matchesLab = selectedLab ? medicine.lab_id === selectedLab : true;
        const matchesSearch = medicine.name.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesLab && matchesSearch;
    });

    const indexOfLastItem = currentPage * ITEMS_PER_PAGE;
    const indexOfFirstItem = indexOfLastItem - ITEMS_PER_PAGE;
    const currentMedicines = filteredMedicines.slice(indexOfFirstItem, indexOfLastItem);
    const totalPages = Math.ceil(filteredMedicines.length / ITEMS_PER_PAGE);

    useEffect(() => {
        setCurrentPage(1);
    }, [selectedLab, searchQuery]);

    const handleLabClick = (labId) => {
        setSelectedLab(prevLab => (prevLab === labId ? null : labId));
    };

    const handleAddToCart = (medicine) => {
        addToCart({ medicine, quantity: 1 }).then(() => {
            console.log('Ajouté au panier:', medicine.name);
        });
    };

    return (
        <div>
            <div className="labpag">
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

                <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

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

            <div className="grid">
                {filteredMedicines.length > 0 ? (
                    currentMedicines.map((medicine) => (
                        <div key={medicine.id} className="card">
                            <h3 className="cardTitle">{medicine.name}</h3>
                            <p className="cardDescription">{medicine.description}</p>
                            <p className="cardPrice">Prix : {medicine.price} €</p>
                            <button className="button" onClick={() => handleAddToCart(medicine)}>
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
