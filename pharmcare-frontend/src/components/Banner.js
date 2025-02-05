import React from 'react';

const Banner = () => {
  return (
      <div style={styles.banner}>
        <img
            src="/paracetamol.png" // Assurez-vous que l'image est dans le dossier "public"
            alt="Paracétamol"
            style={styles.image}
        />
        <h1 style={styles.title}>Produit vedette : Paracétamol</h1>
        <p style={styles.description}>
          Découvrez les bienfaits du paracétamol. Soulage efficacement la douleur et la fièvre.
        </p>
        <button style={styles.button}>En savoir plus</button>
      </div>
  );
};

const styles = {
  banner: {
    backgroundColor: 'rgb(190 190 190)',
    color: '#000000',
    textAlign: 'center',
    padding: '30px 20px',
    borderRadius: '10px',
    margin: '30px auto', // Pour centrer horizontalement
    width: '80%', // Largeur de la bannière (ajustable)
    maxWidth: '600px', // Largeur maximale
    boxShadow: 'rgb(83 70 34 / 10%) -1px 1px 0px 6px', // Ajout d'une ombre
  },
  image: {


    width: '150px',
    height: '98px',
    objectFit: 'cover',
    borderRadius: '4%',
    marginBottom: '6px',
  },
  title: {
    fontSize: '24px',
    marginBottom: '10px',
  },
  description: {
    fontSize: '16px',
    marginBottom: '20px',
  },
  button: {
    backgroundColor: 'rgb(255 156 10)',
    color: '#000000',
    border: 'none',
    padding: '10px 20px',
    fontSize: '16px',
    cursor: 'pointer',
    borderRadius: '5px',
  },
};

export default Banner;
