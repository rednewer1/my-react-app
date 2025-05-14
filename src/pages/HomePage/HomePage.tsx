// src/pages/HomePage/HomePage.tsx
import CardList from '../../components/CardList/CardList';

export default function HomePage() {
  return (
    <div>
      <h2>Главная страница</h2>
      <CardList limit={3} />
    </div>
  );
}