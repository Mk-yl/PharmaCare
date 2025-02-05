import React, { useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const { isAuthenticated, loginWithRedirect } = useAuth0();
  const navigate = useNavigate();

  // Redirige automatiquement vers /medicines si connecté
  useEffect(() => {
    if (isAuthenticated) {
      navigate('/medicines');
    }
  }, [isAuthenticated, navigate]);

  return (
      <div style={styles.container}>
        <img
            src="/pharma.png"
            alt="PharmaCare Logo"
            style={styles.logo}
        />
        <h1 style={styles.title}>PharmaCare</h1>
        {!isAuthenticated ? (
            <button style={styles.button} onClick={() => loginWithRedirect()}>
              Se connecter
            </button>
        ) : (
            <button style={styles.button} onClick={() => navigate('/medicines')}>
              Aller à la vitrine
            </button>
        )}
      </div>
  );
};


const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: 'rgb(128,230,101)',
    //  je veux un background background: radial-gradient(circle, rgba(209,241,191,0.9976365546218487) 9%, rgba(236,236,236,1) 71%, rgba(236,236,236,1) 71%);
    background: 'radial-gradient(circle, rgba(128,230,101,1) 4%, rgba(0,195,88,1) 76%)',
    fontFamily: 'Arial, sans-serif',
  },
  logo: {
    width: '270px',
    marginBottom: '-53px',
  },
  title: {
    fontSize: '6rem',
    color: '#000000',
    marginBottom: '55px',
  },
  button: {
    padding: '10px 20px',
    fontSize: '1rem',
    color: '#FFFFFF',
    backgroundColor: '#D40000',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.2)',
    transition: 'transform 0.3s',
  },
  buttonHover: {
    transform: 'scale(1.05)',
  },
  body: {
    margin: '0',
    padding: '0',
  },



};

export default Home;
