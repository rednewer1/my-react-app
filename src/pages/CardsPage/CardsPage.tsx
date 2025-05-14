// src/pages/CardsPage/CardsPage.tsx
import { useSearchParams } from 'react-router-dom';
import CardList from '../../components/CardList/CardList';

export default function CardsPage() {
  const [searchParams] = useSearchParams();
  const limit = parseInt(searchParams.get('limit') || '10', 10);

  return (
    <div>
      <h2>Все карточки</h2>
      <CardList limit={limit} />
    </div>
  );
}