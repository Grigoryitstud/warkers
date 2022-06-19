import React from 'react';
import s from './Beauty.module.css';
import 'leaflet/dist/leaflet.css';
import { NavLink} from 'react-router-dom';
import All from '../All/All';
import gomel from '../img/gomel.jpg';

const coordinates = [
    { id: 1, x: 52.425, y: 30.964, img: gomel, text: 'khgshfdgsd' },
    { id: 31, x: 52.428, y: 31.077, img: gomel, text: 'khgshfdgsd' },
    { id: 32, x: 52.396, y: 31.074, img: gomel, text: 'khgshfdgsd' },
    { id: 33, x: 52.432, y: 31.134, img: gomel, text: 'khgshfdgsd' },
    { id: 41, x: 52.405, y: 31.039, img: gomel, text: 'khgshfdgsd' },
    { id: 42, x: 52.385, y: 31.031, img: gomel, text: 'khgshfdgsd' },
    { id: 43, x: 52.375, y: 31.009, img: gomel, text: 'khgshfdgsd' },
    { id: 44, x: 52.359, y: 31.019, img: gomel, text: 'khgshfdgsd' },
    { id: 45, x: 52.351, y: 31.057, img: gomel, text: 'khgshfdgsd' },
    { id: 46, x: 52.348, y: 30.989, img: gomel, text: 'khgshfdgsd' },
    { id: 2, x: 52.425, y: 30.999, img: gomel, text: 'khgshfdgsd' },
    { id: 3, x: 52.445, y: 30.974, img: gomel, text: 'khgshfdgsd' },
    { id: 4, x: 52.445, y: 30.994, img: gomel, text: 'khgshfdgsd' },
    { id: 5, x: 52.465, y: 30.994, img: gomel, text: 'khgshfdgsd' },
    { id: 6, x: 52.489, y: 30.981, img: gomel, text: 'khgshfdgsd' },
    { id: 7, x: 52.445, y: 31.014, img: gomel, text: 'khgshfdgsd' },
    { id: 8, x: 52.465, y: 31.014, img: gomel, text: 'khgshfdgsd' },
    { id: 9, x: 52.465, y: 31.034, img: gomel, text: 'khgshfdgsd' },
    { id: 10, x: 52.481, y: 31.014, img: gomel, text: 'khgshfdgsd' },
    { id: 11, x: 52.459, y: 30.954, img: gomel, text: 'yoyoyo' },
    { id: 12, x: 52.465, y: 30.969, img: gomel, text: 'hahaha' },
    { id: 13, x: 52.385, y: 30.884, img: gomel, text: 'yyyyyaaaahhhhhooooo' },
    { id: 14, x: 52.475, y: 30.924, img: gomel, text: 'yyyyyaaaahhhhhooooo' },
    { id: 15, x: 52.405, y: 30.924, img: gomel, text: 'yyyyyaaaahhhhhooooo' },
    { id: 16, x: 52.415, y: 30.947, img: gomel, text: 'yyyyyaaaahhhhhooooo' },
    { id: 17, x: 52.395, y: 30.960, img: gomel, text: 'yyyyyaaaahhhhhooooo' },
    { id: 18, x: 52.445, y: 30.944, img: gomel, text: 'yyyyyaaaahhhhhooooo' },
    { id: 19, x: 52.435, y: 30.964, img: gomel, text: 'yyyyyaaaahhhhhooooo' },
    { id: 20, x: 52.415, y: 30.984, img: gomel, text: 'yyyyyaaaahhhhhooooo' }
]
let pagesContent = [
    { id: 1, link: '/Beauty', name: 'ВСЕ' },
    { id: 2, link: '/Beauty/Medicine', name: 'МЕДИЦИНА' },
    { id: 3, link: '/Beauty/Cosmetic', name: 'КОСМЕТИЧЕСКИЕ УСЛУГИ' },
    { id: 4, link: '/Beauty/Sport', name: 'СПОРТ' }
  
  ]
  let mainPages = pagesContent.map(pagesContent => <NavLink to={pagesContent.link}
    className={navData => navData.isActive ? s.active : s.title}>
    {pagesContent.name}</NavLink>)

const Beauty = () => {
    return (
        <div className={s.demo}>
                <div className={s.main}>
                    {mainPages}
                </div>
                <All coordinates={coordinates}/>
        </div>
    );
}

export default Beauty;