import React, { useState, useEffect } from 'react';
import Card from './Card';

const CardList = () => {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts?_limit=3')
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
  }, []);

  if (loading) {
    return <div>Загрузка данных...</div>;
  }

  if (error) {
    return <div style={{ color: 'red' }}>Ошибка загрузки данных: {error}</div>;
  }

  return (
    <div className="card-list">
      {cards.map((card) => (
        <Card
          key={card.id}
          title={card.title}
          text={card.body}
        />
      ))}
    </div>
  );
};

export default CardList;