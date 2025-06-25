// src/components/Layout/Layout.tsx
import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import Header from '../Header/Header';
import { Footer } from '../Footer/Footer';

export const Layout: React.FC = () => {
  return (
    <>
      <Header></Header>
      <main>
        <Outlet></Outlet>
      </main>
      <Footer></Footer>
    </>
  );
};

export default Layout;