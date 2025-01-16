import React from 'react';

const Banner = () => {
  return (
    <div style={styles.banner}>
      <h1>Featured Product</h1>
      <p>Discover the benefits of Paracetamol. Relieves pain and fever effectively.</p>
      <button style={styles.button}>Learn More</button>
    </div>
  );
};

const styles = {
  banner: {
    backgroundColor: '#0078D4',
    color: '#fff',
    textAlign: 'center',
    padding: '50px 20px',
    borderRadius: '10px',
    marginBottom: '20px',
  },
  button: {
    backgroundColor: '#fff',
    color: '#0078D4',
    border: 'none',
    padding: '10px 20px',
    fontSize: '16px',
    cursor: 'pointer',
    borderRadius: '5px',
  },
};

export default Banner;
