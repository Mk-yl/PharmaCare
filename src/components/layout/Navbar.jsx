import { Link, useLocation } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import LoginButton from '../auth/LoginButton';
import LogoutButton from '../auth/LogoutButton';
import { useCart } from '../../contexts/CartContext';
import './Navbar.css';

function Navbar() {
  const { isAuthenticated, user } = useAuth0();
  const { cartItems } = useCart();
  const location = useLocation();

  const cartItemCount = cartItems.reduce((total, item) => total + item.quantity, 0);
  
  return (
    <nav className="navbar">
      <div className="container navbar-container">
        <Link to="/" className="navbar-logo">
          <img 
            src="https://images.pexels.com/photos/5699516/pexels-photo-5699516.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
            alt="PharmaCare Logo" 
            className="logo-img" 
          />
          <span>PharmaCare</span>
        </Link>
        
        <div className="navbar-links">
          <Link 
            to="/medicines" 
            className={`nav-link ${location.pathname === '/medicines' ? 'active' : ''}`}
          >
            Médicaments
          </Link>
          
          {isAuthenticated && (
            <Link 
              to="/admin" 
              className={`nav-link ${location.pathname === '/admin' ? 'active' : ''}`}
            >
              Administration
            </Link>
          )}
          
          <Link 
            to="/cart" 
            className={`nav-link cart-link ${location.pathname === '/cart' ? 'active' : ''}`}
          >
            Panier
            {cartItemCount > 0 && (
              <span className="cart-badge">{cartItemCount}</span>
            )}
          </Link>
        </div>
        
        <div className="navbar-auth">
          {isAuthenticated ? (
            <div className="user-menu">
              <span className="user-name">
                {user?.name || 'Utilisateur'}
              </span>
              <LogoutButton />
            </div>
          ) : (
            <LoginButton />
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;