// src/pages/HomePage/HomePage.tsx
import React from 'react';
import CardList from '../../components/CardList/CardList';

const HomePage = () => {
  return (
    <div>
      <h2>Главная страница</h2>
      <CardList limit={3} />
    </div>
  );
};

export default HomePage;