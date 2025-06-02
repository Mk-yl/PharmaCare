import { useState } from 'react';
import LabsManager from '../components/admin/LabsManager';
import MedsManager from '../components/admin/MedsManager';
import './Admin.css';

function Admin() {
  const [activeTab, setActiveTab] = useState('labs');
  
  return (
    <div className="admin-page">
      <h1 className="page-title">Interface d'Administration</h1>
      
      <div className="admin-tabs">
        <button 
          className={`tab-btn ${activeTab === 'labs' ? 'active' : ''}`}
          onClick={() => setActiveTab('labs')}
        >
          🔬 Laboratoires
        </button>
        <button 
          className={`tab-btn ${activeTab === 'meds' ? 'active' : ''}`}
          onClick={() => setActiveTab('meds')}
        >
          💊 Médicaments
        </button>
      </div>
      
      <div className="admin-content">
        {activeTab === 'labs' ? (
          <LabsManager />
        ) : (
          <MedsManager />
        )}
      </div>
    </div>
  );
}

export default Admin;