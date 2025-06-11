// src/components/Layout/Layout.tsx
import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import './Layout.css';

const Layout = () => {
  return (
    <div className="layout">
      {/* Header */}
      <header className="header">
        <h1>
          <Link to="/" className="logo">React Карточки</Link>
        </h1>
        <nav>
          <ul>
            <li><Link to="/">Главная</Link></li>
            <li><Link to="/cards">Карточки</Link></li>
          </ul>
        </nav>
      </header>

      {/* Main Content */}
      <main className="main-content">
        <Outlet /> {/* Здесь будут отображаться дочерние маршруты */}
      </main>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2025 React App</p>
      </footer>
    </div>
  );
};

export default Layout;