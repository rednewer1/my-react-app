// src/components/CardList/CardList.tsx
import React from 'react';
import { useFetchCards } from '../../hooks/useFetchCards';
import styles from './CardList.module.css'; 

type Props = {
  limit?: number;
};

const CardList = ({ limit = 10 }: Props) => {
  const { cards, loading, error } = useFetchCards(limit);

  if (loading) return <div>Загрузка данных...</div>;
  if (error) return <div className={styles.error}>Ошибка загрузки: {error}</div>;

  return (
    <div className={styles.cardList}>
      {cards.map((card) => (
        <div key={card.id} className={styles.cardItem}>
          <h3>{card.title}</h3>
          <p>{card.body}</p>
        </div>
      ))}
    </div>
  );
};

export default CardList;