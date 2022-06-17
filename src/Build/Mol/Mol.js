import React from 'react';
import s from './Mol.module.css';
import 'leaflet/dist/leaflet.css';
import { NavLink } from 'react-router-dom';
import All from '../All/All';
import gomel from '../../img/gomel.jpg';
const coordinates = [
    { id: 1, x: 52.425, y: 30.964, img: gomel, text: 'khgshfdgsd' },
    { id: 31, x: 52.428, y: 31.077, img: gomel, text: 'khgshfdgsd' },
    { id: 32, x: 52.396, y: 31.074, img: gomel, text: 'khgshfdgsd' },
    { id: 33, x: 52.432, y: 31.134, img: gomel, text: 'khgshfdgsd' },
    { id: 41, x: 52.405, y: 31.039, img: gomel, text: 'khgshfdgsd' },
    { id: 42, x: 52.385, y: 31.031, img: gomel, text: 'khgshfdgsd' },
    { id: 43, x: 52.375, y: 31.009, img: gomel, text: 'khgshfdgsd' }
]
let pagesContent = [
    { id: 1, link: '/Build', name: 'ВСЕ' },
    { id: 2, link: '/Build/Mol', name: 'ОТДЕЛОЧНЫЕ' },
    { id: 3, link: '/Build/Mon', name: 'СПЕЦИАЛЬНЫЕ' },
    { id: 4, link: '/Build/Soc', name: 'ОБЩЕСТРОИТЕЛЬНЫЕ' }
  
  ]
  let subPagesContent = [
    { id: 2, link: '/Build/Mol/fd', name: 'МОЛЯРНЫЕ' },
    { id: 3, link: '/Build/Mon/sffg', name: 'МОНТАЖНЫЕ' },
    { id: 4, link: '/Build/Soc/eg', name: 'ОБЛИЦОВОЧНЫЕ' }
  
  ]
  let mainPages = pagesContent.map(pagesContent => <NavLink to={pagesContent.link}
    className={navData => navData.isActive ? s.active : s.title}>
    {pagesContent.name}</NavLink>)
    let subPages = subPagesContent.map(pagesContent => <NavLink to={pagesContent.link}
        className={navData => navData.isActive ? s.active : s.title}>
        {pagesContent.name}</NavLink>)

const Mol = () => {
    return (
        <div className={s.demo}>
                <div className={s.main}>
                    {mainPages}
                </div>
                <div className={s.main}>
                    {subPages}
                </div>
                <All coordinates={coordinates}/>
        </div>
    );
}

export default Mol;