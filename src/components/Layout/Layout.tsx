// src/components/Layout/Layout.tsx
import styles from './Layout.module.css';
import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <div className={styles.layout}>
      <Header />
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}