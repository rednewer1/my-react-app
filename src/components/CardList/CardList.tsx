// src/components/CardList/CardList.tsx
import { useEffect, useState } from 'react';
import Card from '../Card/Card';
import styles from './CardList.module.css';

type Post = {
  id: number;
  title: string;
  body: string;
};

export default function CardList() {
  const [cards, setCards] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts?_limit=6 ')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Ошибка при загрузке данных');
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
    return <div>Загрузка...</div>;
  }

  if (error) {
    return <div>Ошибка: {error}</div>;
  }

  return (
    <div className={styles.cardList}>
      {cards.map((card) => (
        <Card key={card.id} title={card.title} text={card.body} />
      ))}
    </div>
  );
}