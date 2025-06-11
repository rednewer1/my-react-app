import React from 'react';
import styles from './Card.module.css';

type CardProps = {
  title: string;
  text: string;
};

const Card: React.FC<CardProps> = ({ title, text }) => {
  return (
    <div className={styles.card}>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.text}>{text}</p>
    </div>
  );
};

export default React.memo(Card);