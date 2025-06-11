// src/pages/NotFoundPage/NotFoundPage.tsx
import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div style={{ textAlign: 'center' }}>
      <h1>404 — Страница не найдена</h1>
      <p>Извините, такой страницы не существует.</p>
      <Link to="/">← Вернуться на главную</Link>
    </div>
  );
};

export default NotFoundPage;