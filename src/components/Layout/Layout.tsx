// src/components/Layout/Layout.tsx
import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import styles from './Layout.module.css'; // ✅ Подключаем CSS-модуль

const Layout = () => {
  return (
    <div className={styles.layout}>
      {/* Шапка */}
      <header>
        <h1>
          <Link to="/">React Карточки</Link>
        </h1>
        <nav>
          <ul>
            <li><Link to="/">Главная</Link></li>
            <li><Link to="/cards">Карточки</Link></li>
          </ul>
        </nav>
      </header>

      {/* Основное содержимое */}
      <main className={styles.main}>
        <Outlet />
      </main>

      {/* Подвал */}
      <footer>
        <p>&copy; 2025 React App</p>
      </footer>
    </div>
  );
};

export default Layout;