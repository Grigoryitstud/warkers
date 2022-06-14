import React from 'react';
import s from './App.module.css';
import Header from './Header/Header';
import MainPage from './MainPage/MainPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Build from './Build/Build';
import Car from './Car/Car'
import Other from './Other/Other';

const App = (props) => {
  return (
    <BrowserRouter>
      <div className={s.body}>
      <div className={s.container}>
        <Header />
        <div className={s.mainStyles}>
          <Routes>
            <Route path='' element={<MainPage />} />
            <Route path='/Build' element={<Build />} />
            <Route path='/Car' element={<Car />} />
            <Route path='/Other' element={<Other />} />
          </Routes>
        </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
