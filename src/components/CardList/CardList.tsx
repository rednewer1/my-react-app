// src/components/CardList/CardList.tsx
import { useEffect, useState } from 'react';
import Card from '../Card/Card';
import styles from './CardList.module.css';

type Post = {
  id: number;
  title: string;
  body: string;
};

type CardListProps = {
  limit?: number;
};

export default function CardList({ limit = 10 }: CardListProps) {
  const [cards, setCards] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts?_limit= ${limit}`)
      .then((res) => res.json())
      .then((data) => {
        setCards(data);
        setLoading(false);
      });
  }, [limit]);

  if (loading) return <div>Загрузка...</div>;

  return (
    <div className={styles.cardList}>
      {cards.map((card) => (
        <Card key={card.id} title={card.title} text={card.body} />
      ))}
    </div>
  );
}