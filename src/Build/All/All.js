import React from 'react';
import s from './All.module.css';
import {
    MapContainer,
    TileLayer,
    Marker,
    Popup
} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const center = [52.4345, 30.9754]


const All = (props) => {
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
    <MapContainer
        center={center}
        zoom={11.4}
        style={{ width: '60%', height: '500px' }}>
        <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors' />
        {props.coordinates.map(el => (
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
    );
}

export default All;