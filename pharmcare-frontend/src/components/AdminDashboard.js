import React, { useState, useEffect } from 'react';
import { labs as mockLabs, medicines as mockMedicines } from '../mockData';
import './AdminDashboard.css';


const AdminDashboard = () => {
    const [labs, setLabs] = useState(mockLabs); // Initialiser avec les données simulées
    const [medicines, setMedicines] = useState(mockMedicines); // Initialiser avec les données simulées

    // États pour les formulaires
    const [newLab, setNewLab] = useState({ name: '', image: '' });
    const [newMedicine, setNewMedicine] = useState({ name: '', description: '', price: '', lab_id: '' });

    // Ajouter un laboratoire simulé
    const handleAddLab = (e) => {
        e.preventDefault();
        const newLabData = {
            id: labs.length + 1, // Ajout d'un nouvel ID
            ...newLab
        };
        setLabs([...labs, newLabData]);
        setNewLab({ name: '', image: '' }); // Réinitialiser le formulaire
    };

    // Ajouter un médicament simulé
    const handleAddMedicine = (e) => {
        e.preventDefault();
        const newMedicineData = {
            id: medicines.length + 1, // Ajout d'un nouvel ID
            ...newMedicine
        };
        setMedicines([...medicines, newMedicineData]);
        setNewMedicine({ name: '', description: '', price: '', lab_id: '' }); // Réinitialiser le formulaire
    };

    // Supprimer un laboratoire simulé
    const handleDeleteLab = (labId) => {
        setLabs(labs.filter((lab) => lab.id !== labId));
    };

    // Supprimer un médicament simulé
    const handleDeleteMedicine = (medicineId) => {
        setMedicines(medicines.filter((medicine) => medicine.id !== medicineId));
    };

    return (
        <div className="admin-dashboard">
            <h1>Gestion des Médicaments et Laboratoires</h1>

            {/* Formulaire d'ajout de laboratoire */}
            <div className="form-container">
                <h2>Ajouter un laboratoire</h2>
                <form onSubmit={handleAddLab}>
                    <input
                        type="text"
                        placeholder="Nom du laboratoire"
                        value={newLab.name}
                        onChange={(e) => setNewLab({ ...newLab, name: e.target.value })}
                        required
                    />
                    <input
                        type="text"
                        placeholder="URL de l'image du laboratoire"
                        value={newLab.image}
                        onChange={(e) => setNewLab({ ...newLab, image: e.target.value })}
                        required
                    />
                    <button type="submit">Ajouter le laboratoire</button>
                </form>
            </div>

            {/* Formulaire d'ajout de médicament */}
            <div className="form-container">
                <h2>Ajouter un médicament</h2>
                <form onSubmit={handleAddMedicine}>
                    <input
                        type="text"
                        placeholder="Nom du médicament"
                        value={newMedicine.name}
                        onChange={(e) => setNewMedicine({ ...newMedicine, name: e.target.value })}
                        required
                    />
                    <input
                        type="text"
                        placeholder="Description"
                        value={newMedicine.description}
                        onChange={(e) => setNewMedicine({ ...newMedicine, description: e.target.value })}
                        required
                    />
                    <input
                        type="number"
                        placeholder="Prix"
                        value={newMedicine.price}
                        onChange={(e) => setNewMedicine({ ...newMedicine, price: e.target.value })}
                        required
                    />
                    <select
                        value={newMedicine.lab_id}
                        onChange={(e) => setNewMedicine({ ...newMedicine, lab_id: e.target.value })}
                        required
                    >
                        <option value="">Sélectionner un laboratoire</option>
                        {labs.map((lab) => (
                            <option key={lab.id} value={lab.id}>
                                {lab.name}
                            </option>
                        ))}
                    </select>
                    <button type="submit">Ajouter le médicament</button>
                </form>
            </div>

            {/* Liste des laboratoires */}
            <div className="list-container">
                <h2>Laboratoires existants</h2>
                <ul>
                    {labs.map((lab) => (
                        <li key={lab.id}>
                            {lab.name} <button onClick={() => handleDeleteLab(lab.id)}>Supprimer</button>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Liste des médicaments */}
            <div className="list-container">
                <h2>Médicaments existants</h2>
                <ul>
                    {medicines.map((medicine) => (
                        <li key={medicine.id}>
                            {medicine.name} - {medicine.price} € <button onClick={() => handleDeleteMedicine(medicine.id)}>Supprimer</button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default AdminDashboard;
