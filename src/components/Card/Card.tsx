// src/components/Card/Card.tsx
import styles from './Card.module.css';

type CardProps = {
  title: string;
  text: string;
};

export default function Card({ title, text }: CardProps) {
  return (
    <div className={styles.card}>
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  );
}