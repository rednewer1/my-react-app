// src/hooks/useFetchCards.ts
import { useState, useEffect } from 'react';
import type { Card } from '../types';

export const useFetchCards = (limit: number) => {
  const [cards, setCards] = useState<Card[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}`)
      .then(res => res.json())
      .then(data => {
        setCards(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, [limit]);

  return { cards, loading, error };
};