// src/components/Layout/Layout.tsx
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import styles from './Layout.module.css';
import CardList from '../CardList/CardList';

export default function Layout() {
  return (
    <div className={styles.layout}>
      <Header />
      <main className={styles.main}>
        <h2>Список карточек</h2>
        <CardList />
      </main>
      <Footer />
    </div>
  );
}