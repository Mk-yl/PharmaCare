import React, { useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Navbar.css';
import { faUser, faSearch, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import Cart from "./Cart";

import {Link} from "react-router-dom";

const Navbar = () => {
    const { isAuthenticated, logout } = useAuth0();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className="navbar">
            {/* Logo à gauche */}
            <div className="app-logo">
                <img src="/pharma.png" alt="PharmaCare Logo" className="monlogo" />

                <div className="logo">
                    <h1 className="company-name">PharmaCare</h1>
                    <span className="subtitle">CORPORATION</span>
                </div>
            </div>

            {/* Icônes */}
            <div className="icons">
                <FontAwesomeIcon icon={faSearch} className="icon" title="Search" />
                <Link to="/cart" style={{ textDecoration: 'none' }}>
                    <FontAwesomeIcon icon={faShoppingCart} className="icon" title="Cart" />
                </Link>
                {/* Lien vers la page Admin */}
                <Link to="/admin" style={{ textDecoration: 'none' }}>
                    <FontAwesomeIcon icon={faCogs} className="icon" title="Admin" />
                </Link>

                <div className="profile-container">
                    <FontAwesomeIcon
                        icon={faUser}
                        className="icon"
                        title="Account"
                        onClick={toggleMenu}
                    />
                    {isMenuOpen && (
                        <div className="menu">
                            <h2 className="menu-logo">PharmaCare CORPORATION</h2>
                            <ul className="menu-list">
                                <li className="menu-item">Vos Commandes</li>
                                <li className="menu-item">Profile</li>
                                <li className="menu-item">Contact</li>
                            </ul>
                            <button
                                className="logout-button"
                                onClick={() => logout({ returnTo: window.location.origin })}
                            >
                                Se déconnecter
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>

    );
};



export default Navbar;
