import './Footer.css';

function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-logo">
          <span>PharmaCare</span>
          <p className="footer-tagline">Votre santé, notre priorité</p>
        </div>
        
        <div className="footer-links">
          <div className="footer-section">
            <h4>Navigation</h4>
            <ul>
              <li><a href="/">Accueil</a></li>
              <li><a href="/medicines">Médicaments</a></li>
              <li><a href="/cart">Panier</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>À propos</h4>
            <ul>
              <li><a href="#">Qui sommes-nous</a></li>
              <li><a href="#">Nos services</a></li>
              <li><a href="#">Nous contacter</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Légal</h4>
            <ul>
              <li><a href="#">Conditions d'utilisation</a></li>
              <li><a href="#">Politique de confidentialité</a></li>
              <li><a href="#">Mentions légales</a></li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <div className="container">
          <p>&copy; {currentYear} PharmaCare. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;