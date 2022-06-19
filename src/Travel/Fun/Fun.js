import React from 'react';
import s from './Fun.module.css';
import 'leaflet/dist/leaflet.css';
import { NavLink} from 'react-router-dom';
import All from '../../All/All';
import gomel from '../../img/gomel.jpg';
import brest from '../../img/brest.jpg';
import grodno from '../../img/grodno.jpg';

const coordinates = [
   
    { id: 5, x: 52.465, y: 30.994, img: gomel, text: 'khgshfdgsd' },
    { id: 6, x: 52.489, y: 30.981, img: gomel, text: 'khgshfdgsd' },
    { id: 7, x: 52.445, y: 31.014, img: gomel, text: 'khgshfdgsd' },
    { id: 8, x: 52.465, y: 31.014, img: gomel, text: 'khgshfdgsd' },
    { id: 9, x: 52.465, y: 31.034, img: gomel, text: 'khgshfdgsd' },
    { id: 10, x: 52.481, y: 31.014, img: gomel, text: 'khgshfdgsd' },
    { id: 11, x: 52.459, y: 30.954, img: brest, text: 'yoyoyo' },
    { id: 12, x: 52.465, y: 30.969, img: grodno, text: 'hahaha' }
   
]
let pagesContent = [
    { id: 1, link: '/Travel', name: 'ВСЕ' },
    { id: 2, link: '/Travel/Nature', name: 'ПРИРОДА' },
    { id: 3, link: '/Travel/Food', name: 'ЕДА' },
    { id: 4, link: '/Travel/Fun', name: 'РАЗВЛЕЧЕНИЯ' }
  
  ]
//   let subPagesContent = [
//     { id: 2, link: '/Build/Mol/f', name: 'КАПИТАЛЬНЫЕ' },
//     { id: 3, link: '/Build/Mon/sffg', name: 'ПРОРАБ' },
//     { id: 4, link: '/Build/Soc/eg', name: 'БЕЗ ОСОБЫХ НАВЫКОВ' }
  
//   ]

  let mainPages = pagesContent.map(pagesContent => <NavLink to={pagesContent.link}
    className={navData => navData.isActive ? s.active : s.title}>
    {pagesContent.name}</NavLink>)
        // let subPages = subPagesContent.map(pagesContent => <NavLink to={pagesContent.link}
        //     className={navData => navData.isActive ? s.active : s.title}>
        //     {pagesContent.name}</NavLink>)

const Fun = () => {
    return (
        <div className={s.demo}>
                <div className={s.main}>
                    {mainPages}
                </div>
                {/* <div className={s.main}>
                    {subPages}
                </div> */}
                <All coordinates={coordinates}/>
        </div>
    );
}

export default Fun;