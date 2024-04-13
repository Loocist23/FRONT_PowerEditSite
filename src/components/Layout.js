// src/components/Layout.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Layout.css';

const Layout = ({ children }) => {
  return (
    <div>
      <header className="header">
        <nav className="navbar">
            <Link to="/">Accueil</Link>
            <Link to="/about">À propos</Link>
            <Link to="/user" user={"test"}>Utilisateur</Link>
        </nav>
      </header>

      <main>
        {children}
      </main>

      <footer>
        {/* Vous pouvez ajouter votre pied de page ici */}
      </footer>
    </div>
  );
};

export default Layout;