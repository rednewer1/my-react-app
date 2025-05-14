// src/components/Layout/Layout.tsx
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { Link } from 'react-router-dom';
import styles from './Layout.module.css';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className={styles.layout}>
      <header className={styles.header}>
        <h1><Link to="/">Мой сайт</Link></h1>
        <nav>
          <Link to="/cards">Карточки</Link>
        </nav>
      </header>

      <main className={styles.main}>
        {children}
      </main>

      <footer className={styles.footer}>
        <p>© 2025 Все права защищены</p>
      </footer>
    </div>
  );
}