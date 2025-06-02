import { useState, useEffect } from 'react';
import { getMedicines, getLaboratories, createMedicine, updateMedicine, deleteMedicine } from '../../services/api';
import './AdminForms.css';

function MedsManager() {
  const [medicines, setMedicines] = useState([]);
  const [laboratories, setLaboratories] = useState([]);
  const [currentMed, setCurrentMed] = useState({
    nom: '',
    type: '',
    prix: 0,
    laboratoryId: '',
    imageUrl: ''
  });
  const [isEditing, setIsEditing] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      setLoading(true);
      const [medsData, labsData] = await Promise.all([
        getMedicines(),
        getLaboratories()
      ]);
      setMedicines(medsData);
      setLaboratories(labsData);
      setLoading(false);
    } catch (err) {
      console.error('Error fetching data:', err);
      setError('Une erreur est survenue lors du chargement des données.');
      setLoading(false);
    }
  };

  const resetForm = () => {
    setCurrentMed({
      nom: '',
      type: '',
      prix: 0,
      laboratoryId: '',
      imageUrl: ''
    });
    setIsEditing(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    const processedValue = name === 'prix' ? parseFloat(value) : value;
    setCurrentMed(prev => ({ ...prev, [name]: processedValue }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (isEditing) {
        await updateMedicine(currentMed.id, currentMed);
      } else {
        await createMedicine(currentMed);
      }

      fetchData();
      resetForm();
    } catch (err) {
      console.error('Error saving medicine:', err);
      setError('Une erreur est survenue lors de l\'enregistrement du médicament.');
    }
  };

  const handleEdit = (med) => {
    setCurrentMed(med);
    setIsEditing(true);
  };

  const handleDelete = async (id) => {
    if (window.confirm('Êtes-vous sûr de vouloir supprimer ce médicament ?')) {
      try {
        await deleteMedicine(id);
        fetchData();
      } catch (err) {
        console.error('Error deleting medicine:', err);
        setError('Une erreur est survenue lors de la suppression du médicament.');
      }
    }
  };

  const findLabName = (labId) => {
    const lab = laboratories.find(l => l.id === labId);
    return lab ? lab.nom || 'Inconnu' : 'Inconnu';
  };

  if (loading && medicines.length === 0) {
    return <div className="loading">Chargement des médicaments...</div>;
  }

  return (
      <div className="admin-manager">
        <div className="admin-form-container">
          <h2>{isEditing ? 'Modifier un médicament' : 'Ajouter un médicament'}</h2>

          {error && <div className="admin-error">{error}</div>}

          <form onSubmit={handleSubmit} className="admin-form">
            <div className="form-group">
              <label htmlFor="nom">Nom du médicament</label>
              <input
                  type="text"
                  id="nom"
                  name="nom"
                  value={currentMed.nom}
                  onChange={handleInputChange}
                  required
              />
            </div>

            <div className="form-group">
              <label htmlFor="type">Type</label>
              <input
                  type="text"
                  id="type"
                  name="type"
                  value={currentMed.type}
                  onChange={handleInputChange}
                  required
              />
            </div>

            <div className="form-group">
              <label htmlFor="prix">Prix (€)</label>
              <input
                  type="number"
                  id="prix"
                  name="prix"
                  step="0.01"
                  min="0"
                  value={currentMed.prix}
                  onChange={handleInputChange}
                  required
              />
            </div>

            <div className="form-group">
              <label htmlFor="laboratoryId">Laboratoire</label>
              <select
                  id="laboratoryId"
                  name="laboratoryId"
                  value={currentMed.laboratoryId}
                  onChange={handleInputChange}
                  required
              >
                <option value="">Sélectionner un laboratoire</option>
                {laboratories.map(lab => (
                    <option key={lab.id} value={lab.id}>
                      {lab.nom}
                    </option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="imageUrl">URL de l'image</label>
              <input
                  type="text"
                  id="imageUrl"
                  name="imageUrl"
                  value={currentMed.imageUrl || ''}
                  onChange={handleInputChange}
                  placeholder="https://exemple.com/image.jpg"
              />
            </div>

            <div className="form-actions">
              <button type="submit" className="btn btn-primary">
                {isEditing ? 'Mettre à jour' : 'Ajouter'}
              </button>

              {isEditing && (
                  <button
                      type="button"
                      className="btn btn-outline"
                      onClick={resetForm}
                  >
                    Annuler
                  </button>
              )}
            </div>
          </form>
        </div>

        <div className="admin-list-container">
          <h2>Liste des médicaments</h2>

          {medicines.length === 0 ? (
              <p className="no-items">Aucun médicament n'a été ajouté.</p>
          ) : (
              <div className="admin-list">
                {medicines.map(med => (
                    <div key={med.id} className="admin-list-item">
                      <div className="item-details">
                        <h3>{med.nom}</h3>
                        <p className="item-type">{med.type}</p>
                        <p className="item-price">{med.prix.toFixed(2)} €</p>
                        <p className="item-lab">
                          Laboratoire: {findLabName(med.laboratoryId)}
                        </p>
                        {med.imageUrl && (
                            <img
                                src={med.imageUrl}
                                alt={med.nom || 'Image médicament'}
                                style={{ maxWidth: '150px', marginTop: '10px' }}
                            />
                        )}
                      </div>
                      <div className="item-actions">
                        <button
                            className="btn btn-outline"
                            onClick={() => handleEdit(med)}
                        >
                          Modifier
                        </button>
                        <button
                            className="btn btn-danger"
                            onClick={() => handleDelete(med.id)}
                        >
                          Supprimer
                        </button>
                      </div>
                    </div>
                ))}
              </div>
          )}
        </div>
      </div>
  );
}

export default MedsManager;
