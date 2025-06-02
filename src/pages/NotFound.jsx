import { Link } from 'react-router-dom';
import './NotFound.css';

function NotFound() {
  return (
    <div className="not-found-page">
      <div className="not-found-content">
        <h1>404</h1>
        <h2>Page Non Trouvée</h2>
        <p>La page que vous recherchez n'existe pas ou a été déplacée.</p>
        <Link to="/" className="btn btn-primary">
          Retourner à l'accueil
        </Link>
      </div>
    </div>
  );
}

export default NotFound;