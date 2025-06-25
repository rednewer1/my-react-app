import React from 'react';
import './assets/css/style.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import HomePage from './pages/HomePage/HomePage';
import CardsPage from './pages/CardsPage/CardsPage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';


const App: React.FC = () => {
  return (
      <BrowserRouter>
        <Routes>
          <Route element={<Layout></Layout>}>
            <Route index element={<HomePage></HomePage>}></Route>
            <Route path='cards' element={<CardsPage></CardsPage>}></Route>
            <Route path='posts' element={<CardsPage></CardsPage>}></Route>
            <Route path='*' element={<NotFoundPage></NotFoundPage>}></Route>

          </Route>
        </Routes>
      </BrowserRouter>
  );
};

export default App;