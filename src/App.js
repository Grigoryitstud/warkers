import React from 'react';
import s from './App.module.css';
import Header from './Header/Header';
import MainPage from './MainPage/MainPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Build from './Build/Build';
import Car from './Car/Car'
import Other from './Other/Other';
import Travel from './Travel/Travel';
import Beauty from './Beauty/Beauty';
import Mol from './Build/Mol/Mol';
import Mon from './Build/Mon/Mon';
import Soc from './Build/Soc/Soc';
import Repair from './Car/Repair/Repair';
import Service from './Car/Service/Service';
import Parts from './Car/Parts/Parts';
import Medicine from './Beauty/Medicine/Medicine';
import Cosmetic from './Beauty/Cosmetic/Cosmetic';
import Sport from './Beauty/Sport/Sport';
import Nature from './Travel/Nature/Nature';
import Food from './Travel/Food/Food';
import Fun from './Travel/Fun/Fun';
import Art from './Other/Art/Art';
import Technique from './Other/Technique/Technique';
import Finance from './Other/Finance/Finance';

const App = (props) => {
  return (
    <BrowserRouter>
      <div className={s.body}>
      <div className={s.container}>
        <Header />
        <div className={s.mainStyles}>
          <Routes>
            <Route path='/warkers' element={<MainPage />} />
            <Route exact path='/Build' element={<Build />} />
            <Route path='/Build/Mol' element={<Mol />} />
            <Route path='/Build/Mon' element={<Mon />} />            
            <Route path='/Build/Soc' element={<Soc />} />
            <Route exact path='/Car' element={<Car />} />
            <Route path='/Car/Repair' element={<Repair/>} />
            <Route path='/Car/Service' element={<Service />} />
            <Route path='/Car/Parts' element={<Parts />} />            
            <Route exact path='/Beauty' element={<Beauty />} />
            <Route path='/Beauty/Medicine' element={<Medicine />} />
            <Route path='/Beauty/Cosmetic' element={<Cosmetic />} />
            <Route path='/Beauty/Sport' element={<Sport />} />
            <Route exact path='/Travel' element={<Travel />} />
            <Route path='/Travel/Nature' element={<Nature />} />
            <Route path='/Travel/Food' element={<Food />} />
            <Route path='/Travel/Fun' element={<Fun />} />
            <Route exact path='/Other' element={<Other />} />
            <Route path='/Other/Art' element={<Art />} />
            <Route path='/Other/Technique' element={<Technique />} />
            <Route path='/Other/Finance' element={<Finance />} />
          </Routes>
        </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;


