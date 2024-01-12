import React from 'react'
import jsonData from '../drony/droneData.json';
import '../drony/product.css'
import { useParams } from 'react-router-dom';

export default function DroneDetails() {
    const { droneName } = useParams();
    const formatName = drone_name => drone_name.replace(/\s+/g, '-').toLowerCase();
    const selectedDrone = jsonData.find(drone => formatName(drone.name) === droneName);

    if (!selectedDrone) {
        return <div>Drone not found</div>;
    }

    const { name, img_path, description, price } = selectedDrone;

    return (
        <main>
            <h1>{name}</h1>
            <div className="drone_section">
                <div className="drone_container">
                    <div className="description_container">
                        <img src={`/media/${img_path}`} alt={name} />
                    </div>
                </div>
                <div className="drone_details">
                    <p>{description[0]}</p>
                    <ul>
                        <li>{description[1]}</li>
                        <li>{description[2]}</li>
                        <li>{description[3]}</li>
                    </ul>
                    <div className="button-container">
                        <p><strong>{price} PLN</strong></p>
                        <button className="buy-now-button">Kup teraz</button>
                    </div>
                </div>
            </div>
        </main>
    );
}