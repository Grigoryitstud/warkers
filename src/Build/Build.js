import React from 'react';
import s from './Build.module.css';
import {
    MapContainer,
    TileLayer,
    Marker,
    Popup
} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import gomel from '../img/gomel.jpg';
import brest from '../img/brest.jpg';
import grodno from '../img/grodno.jpg';
import minsk from '../img/minsk.jpg';

const center = [52.4345, 30.9754]
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

const Build = () => {
    React.useEffect(() => {
        const L = require("leaflet");

        delete L.Icon.Default.prototype._getIconUrl;

        L.Icon.Default.mergeOptions({
            iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
            iconUrl: require("leaflet/dist/images/marker-icon.png"),
            shadowUrl: require("leaflet/dist/images/marker-shadow.png")
        });
    }, []);
    return (
        <div className={s.demo}>
            <div className={s.titles}>
                <div className={s.main}>
                    <h2>ОТДЕЛОЧНЫЕ</h2>
                    <h2>СПЕЦИАЛЬНЫЕ</h2>
                    <h2>ОБЩЕСТРОИТЕЛЬНЫЕ</h2>
                </div>
                <div className={s.secondary}>
                    <div className={s.subtitles}>
                        <h2>МОЛЯРНЫЕ</h2>
                        <h2>МОНТАЖНЫЕ</h2>
                        <h2>ОБЛИЦОВОЧНЫЕ</h2>
                    </div>
                    <div className={s.subtitles}>
                        <h3>САНТЕХНИКА ЭЛЕКТРИКА</h3>
                        <h3>ОКНА ДВЕРИ</h3>
                        <h3>АВТОМАТИКА</h3>
                    </div>
                    <div className={s.subtitles}>
                        <h3>КАПИТАЛЬНЫЕ</h3>
                        <h3>ПРОРАБ</h3>
                        <h3>БЕЗ ОСОБЫХ НАВЫКОВ</h3>
                    </div>
                </div>

            </div>
            <MapContainer
                center={center}
                zoom={11.4}
                style={{ width: '60%', height: '500px' }}>
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors' />
                {coordinates.map(el => (
                    <Marker key={el.id} position={[el.x, el.y]}>
                        <Popup key={el.id}>
                            <div className={s.pop}>
                                <img src={el.img} />
                                <h1>{el.id}</h1>
                            </div>
                        </Popup>
                    </Marker>
                ))}

            </MapContainer>
        </div>
    );
}

export default Build;