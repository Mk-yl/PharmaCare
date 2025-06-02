import { useState, useEffect } from 'react';
import { getLaboratories, getMedicines } from '../services/api';
import { useCart } from '../contexts/CartContext';
import MedicineCard from '../components/medicines/MedicineCard';
import './Medicines.css';

function Medicines() {
  const [laboratories, setLaboratories] = useState([]);
  const [medicines, setMedicines] = useState([]);
  const [filteredMedicines, setFilteredMedicines] = useState([]);
  const [selectedLab, setSelectedLab] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { addToCart } = useCart();
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        
        // Fetch labs first to get both labs and their medicines
        const labsData = await getLaboratories();
        setLaboratories(labsData);
        
        // Also fetch flat medicines list for easier filtering and display
        const medsData = await getMedicines();
        setMedicines(medsData);
        setFilteredMedicines(medsData);
        
        setLoading(false);
      } catch (err) {
        console.error('Error fetching data:', err);
        setError('Une erreur est survenue lors du chargement des données. Veuillez réessayer plus tard.');
        setLoading(false);
      }
    };
    
    fetchData();
  }, []);
  
  // Filter medicines when lab selection changes
  useEffect(() => {
    if (selectedLab === '') {
      setFilteredMedicines(medicines);
    } else {
      const filtered = medicines.filter(medicine => 
        medicine.laboratoryId === selectedLab
      );
      setFilteredMedicines(filtered);
    }
  }, [selectedLab, medicines]);
  
  const handleLabChange = (e) => {
    setSelectedLab(e.target.value);
  };
  
  const handleAddToCart = (medicine) => {
    addToCart(medicine);
  };
  
  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
        <p>Chargement des médicaments...</p>
      </div>
    );
  }
  
  if (error) {
    return <div className="error-message">{error}</div>;
  }
  
  return (
    <div className="medicines-page">
      <h1 className="page-title">Catalogue des Médicaments</h1>
      
      <div className="filter-container">
        <label htmlFor="lab-filter" className="filter-label">Filtrer par laboratoire:</label>
        <select 
          id="lab-filter" 
          className="lab-filter" 
          value={selectedLab}
          onChange={handleLabChange}
        >
          <option value="">Tous les laboratoires</option>
          {laboratories.map(lab => (
            <option key={lab.id} value={lab.id}>
              {lab.nom}
            </option>
          ))}
        </select>
      </div>
      
      {filteredMedicines.length === 0 ? (
        <div className="no-results">
          <p>Aucun médicament trouvé pour ce laboratoire.</p>
        </div>
      ) : (
        <div className="medicines-grid">
          {filteredMedicines.map(medicine => (
            <MedicineCard 
              key={medicine.id}
              medicine={medicine}
              onAddToCart={() => handleAddToCart(medicine)}
              laboratory={laboratories.find(lab => lab.id === medicine.laboratoryId)}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Medicines;