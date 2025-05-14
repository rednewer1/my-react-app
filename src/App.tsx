// src/App.tsx
import React from 'react';
import Message from './components/Message';

function App() {
  const messageText = "Привет, это мой первый React + TypeScript компонент!";

  return (
    <div>
      <h1>Моё React приложение</h1>
      <Message text={messageText} />
    </div>
  );
}

export default App;