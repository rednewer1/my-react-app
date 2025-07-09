import React from 'react';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import HomePage from './pages/HomePage/HomePage';

import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import Site2otziv from './pages/site2otziv/site2otziv';
import Aboutussite from './pages/aboutussite/aboutussite';
import Gallery from './pages/gallery/gallery';


const App: React.FC = () => {
  return (
      <BrowserRouter>
        <Routes>
          <Route element={<Layout></Layout>}>
            <Route index element={<HomePage></HomePage>}></Route>
            <Route path='*' element={<NotFoundPage></NotFoundPage>}></Route>
            <Route path='aboutussite' element={<Aboutussite></Aboutussite>}></Route>
            <Route path='site2otziv' element={<Site2otziv></Site2otziv>}></Route>
            <Route path='Gallery' element={<Gallery></Gallery>}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
  );
};

export default App;