// src/main.tsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import './assets/css/style.css' // 
// или
// import '../public/styles/style.css' // 

import App from './App'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)