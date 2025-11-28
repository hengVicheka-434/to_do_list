import React from 'react';
import acheivifyLogo from '../assets/acheivify.jpg';

// Header Component
const Header = ({ setPage }) => (
    <header>
        {/* Logo click also navigates to home page */}
        <img src={acheivifyLogo} alt="Logo" className="logo-img" onClick={() => setPage('home')} style={{ cursor: 'pointer' }} />
        <p>
            <a 
                href="#" 
                className="logo-text" 
                onClick={(e) => { e.preventDefault(); setPage('home'); }}
            >
                ACHEIVIFY
            </a>
        </p>
    </header>
);

export default Header;