import { useState, useEffect } from 'react';
import { getLaboratories, createLaboratory, updateLaboratory, deleteLaboratory } from '../../services/api';
import './AdminForms.css';

function LabsManager() {
  const [laboratories, setLaboratories] = useState([]);
  const [currentLab, setCurrentLab] = useState({ nom: '', adresse: '' });
  const [isEditing, setIsEditing] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchLabs();
  }, []);

  const fetchLabs = async () => {
    try {
      setLoading(true);
      const data = await getLaboratories();
      setLaboratories(data);
      setLoading(false);
    } catch (err) {
      console.error('Error fetching laboratories:', err);
      setError('Une erreur est survenue lors du chargement des laboratoires.');
      setLoading(false);
    }
  };

  const resetForm = () => {
    setCurrentLab({ nom: '', adresse: '' });
    setIsEditing(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCurrentLab(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (isEditing) {
        await updateLaboratory(currentLab.id, currentLab);
      } else {
        await createLaboratory(currentLab);
      }

      fetchLabs();
      resetForm();
    } catch (err) {
      console.error('Error saving laboratory:', err);
      setError('Une erreur est survenue lors de l\'enregistrement du laboratoire.');
    }
  };

  const handleEdit = (lab) => {
    setCurrentLab(lab);
    setIsEditing(true);
  };

  const handleDelete = async (id) => {
    if (window.confirm('Êtes-vous sûr de vouloir supprimer ce laboratoire ?')) {
      try {
        await deleteLaboratory(id);
        fetchLabs();
      } catch (err) {
        console.error('Error deleting laboratory:', err);
        setError('Une erreur est survenue lors de la suppression du laboratoire.');
      }
    }
  };

  if (loading && laboratories.length === 0) {
    return <div className="loading">Chargement des laboratoires...</div>;
  }

  return (
      <div className="admin-manager">
        <div className="admin-form-container">
          <h2>{isEditing ? 'Modifier un laboratoire' : 'Ajouter un laboratoire'}</h2>

          {error && <div className="admin-error">{error}</div>}

          <form onSubmit={handleSubmit} className="admin-form">
            <div className="form-group">
              <label htmlFor="nom">Nom du laboratoire</label>
              <input
                  type="text"
                  id="nom"
                  name="nom"
                  value={currentLab.nom}
                  onChange={handleInputChange}
                  required
              />
            </div>

            <div className="form-group">
              <label htmlFor="adresse">Adresse</label>
              <textarea
                  id="adresse"
                  name="adresse"
                  value={currentLab.adresse || ''}
                  onChange={handleInputChange}
                  rows="4"
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
          <h2>Liste des laboratoires</h2>

          {laboratories.length === 0 ? (
              <p className="no-items">Aucun laboratoire n'a été ajouté.</p>
          ) : (
              <div className="admin-list">
                {laboratories.map(lab => (
                    <div key={lab.id} className="admin-list-item">
                      <div className="item-details">
                        <h3>{lab.nom}</h3>
                        {lab.adresse && <p>{lab.adresse}</p>}
                        {lab.imageUrl && (
                            <img
                                src={lab.imageUrl}
                                alt={lab.nom || 'Image laboratoire'}
                                style={{ maxWidth: '200px', marginBottom: '10px' }}
                            />
                        )}
                        {lab.medicines && (
                            <p className="item-stats">
                              {lab.medicines.length} médicament(s)
                            </p>
                        )}
                      </div>
                      <div className="item-actions">
                        <button
                            className="btn btn-outline"
                            onClick={() => handleEdit(lab)}
                        >
                          Modifier
                        </button>
                        <button
                            className="btn btn-danger"
                            onClick={() => handleDelete(lab.id)}
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

export default LabsManager;
