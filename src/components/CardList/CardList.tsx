// src/components/CardList/CardList.tsx
import React, { useState, useEffect } from 'react';
import './CardList.css';

type Card = {
  id: number;
  title: string;
  body: string;
};

type Props = {
  limit?: number;
};

const CardList = ({ limit = 10 }: Props) => {
  const [cards, setCards] = useState<Card[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setCards(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [limit]);

  if (loading) return <div>Загрузка данных...</div>;
  if (error) return <div className="error-message">Ошибка загрузки: {error}</div>;

  return (
    <div className="card-list">
      {cards.map((card) => (
        <div key={card.id} className="card">
          <h3>{card.title}</h3>
          <p>{card.body}</p>
        </div>
      ))}
    </div>
  );
};

export default CardList;