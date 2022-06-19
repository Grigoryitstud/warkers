import React from 'react';
import s from './Technique.module.css';
import 'leaflet/dist/leaflet.css';
import { NavLink } from 'react-router-dom';
import All from '../../All/All';
import gomel from '../../img/gomel.jpg';
import brest from '../../img/brest.jpg';
import grodno from '../../img/grodno.jpg';
import minsk from '../../img/minsk.jpg';

const coordinates = [
    { id: 9, x: 52.465, y: 31.034, img: gomel, text: 'khgshfdgsd' },
    { id: 10, x: 52.481, y: 31.014, img: gomel, text: 'khgshfdgsd' },
    { id: 11, x: 52.459, y: 30.954, img: brest, text: 'yoyoyo' },
    { id: 12, x: 52.465, y: 30.969, img: grodno, text: 'hahaha' },
    { id: 13, x: 52.385, y: 30.884, img: minsk, text: 'yyyyyaaaahhhhhooooo' },
    { id: 14, x: 52.475, y: 30.924, img: minsk, text: 'yyyyyaaaahhhhhooooo' },
    { id: 15, x: 52.405, y: 30.924, img: minsk, text: 'yyyyyaaaahhhhhooooo' },
    { id: 16, x: 52.415, y: 30.947, img: minsk, text: 'yyyyyaaaahhhhhooooo' },
    { id: 17, x: 52.395, y: 30.960, img: minsk, text: 'yyyyyaaaahhhhhooooo' },
    { id: 18, x: 52.445, y: 30.944, img: minsk, text: 'yyyyyaaaahhhhhooooo' },
    { id: 19, x: 52.435, y: 30.964, img: minsk, text: 'yyyyyaaaahhhhhooooo' },
    { id: 20, x: 52.415, y: 30.984, img: minsk, text: 'yyyyyaaaahhhhhooooo' }
]
let pagesContent = [
    { id: 1, link: '/Other', name: 'ВСЕ' },
    { id: 2, link: '/Other/Art', name: 'ИСКУССТВО' },
    { id: 3, link: '/Other/Technique', name: 'ТЕХНИКА' },
    { id: 4, link: '/Other/Finance', name: 'ФИНАНСЫ' }
  
  ]
// let subPagesContent = [
//     { id: 2, link: '/Build/Mol/fd', name: 'САНТЕХНИКА ЭЛЕКТРИКА' },
//     { id: 3, link: '/Build/Mon/sffg', name: 'ОКНА ДВЕРИ' },
//     { id: 4, link: '/Build/Soc/eg', name: 'АВТОМАТИКА' }

// ]
let mainPages = pagesContent.map(pagesContent => <NavLink to={pagesContent.link}
    className={navData => navData.isActive ? s.active : s.title}>
    {pagesContent.name}</NavLink>)
// let subPages = subPagesContent.map(pagesContent => <NavLink to={pagesContent.link}
//     className={navData => navData.isActive ? s.active : s.title}>
//     {pagesContent.name}</NavLink>)

const Technique = () => {
    return (
        <div className={s.demo}>
            <div className={s.main}>
                {mainPages}
            </div>
            {/* <div className={s.main}>
                {subPages}
            </div> */}
            <All coordinates={coordinates} />
        </div>
    );
}

export default Technique;