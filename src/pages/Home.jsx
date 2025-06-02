import { useAuth0 } from '@auth0/auth0-react';
import { Link } from 'react-router-dom';
import LoginButton from '../components/auth/LoginButton';
import './Home.css';

function Home() {
  const { isAuthenticated } = useAuth0();
  
  return (
    <div className="home-page">
      <section className="hero">
        <div className="hero-content">
          <h1>Bienvenue chez PharmaCare</h1>
          <p className="hero-subtitle">
            Votre partenaire de confiance pour tous vos besoins en médicaments
          </p>
          
          {isAuthenticated ? (
            <Link to="/medicines" className="btn btn-primary hero-btn">
              Accéder à la vitrine
            </Link>
          ) : (
            <LoginButton />
          )}
        </div>
        <div className="hero-image">
          <img 
            src="https://images.pexels.com/photos/3683056/pexels-photo-3683056.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
            alt="Pharmacie" 
          />
        </div>
      </section>

      <section className="features">
        <h2>Nos services</h2>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">💊</div>
            <h3>Large gamme de médicaments</h3>
            <p>Accédez à notre catalogue complet de produits pharmaceutiques de qualité.</p>
          </div>
          
          <div className="feature-card">
            <div className="feature-icon">🏥</div>
            <h3>Laboratoires partenaires</h3>
            <p>Collaboration avec les meilleurs laboratoires pharmaceutiques.</p>
          </div>
          
          <div className="feature-card">
            <div className="feature-icon">🚚</div>
            <h3>Livraison rapide</h3>
            <p>Recevez vos médicaments rapidement et en toute sécurité.</p>
          </div>
          
          <div className="feature-card">
            <div className="feature-icon">👨‍⚕️</div>
            <h3>Conseils professionnels</h3>
            <p>Bénéficiez de l'expertise de nos pharmaciens qualifiés.</p>
          </div>
        </div>
      </section>
      
      <section className="call-to-action">
        <h2>Découvrez notre catalogue de médicaments</h2>
        <p>Parcourez notre large sélection de produits pharmaceutiques de qualité</p>
        <Link to="/medicines" className="btn btn-primary">Voir les médicaments</Link>
      </section>
    </div>
  );
}

export default Home;