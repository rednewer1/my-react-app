// src/pages/CardsPage/CardsPage.tsx
import React from 'react';
import { useSearchParams } from 'react-router-dom';
import CardList from '../../components/CardList/CardList';

const CardsPage = () => {
  const [searchParams] = useSearchParams();
  const limit = parseInt(searchParams.get('limit') || '10', 10);

  return (
    <div>
      <h2>Все карточки</h2>
      <p>Показано карточек: {limit}</p>
      <CardList limit={limit} />
    </div>
  );
};

export default CardsPage;