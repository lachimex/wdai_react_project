import React, { useEffect, useState, lazy, Suspense } from 'react';
import jsonData from '../drony/droneData.json';
import './shop.css'

// Use React.lazy to lazily load the Drone1 component
const Drone1 = lazy(() => import('../drony_react_component/drone1'));

export default function Shop() {

    const djiDrones = jsonData.filter(drone => drone.drone_type === 'DJI');
    const fpvDrones = jsonData.filter(drone => drone.drone_type === 'FPV');
    const yuneecDrones = jsonData.filter(drone => drone.drone_type === 'Yuneec');

    return (
        <div className="shop_main">
            <Suspense fallback={<p>Loading...</p>}>
                <>
                    <h1>DJI</h1>
                    <div className="drone_section">
                        {djiDrones.map((drone, index) => (
                            <Drone1 key={index} name={drone.name} srcPath={drone.img_path} />
                        ))}
                    </div>
                    <h1>FPV</h1>
                    <div className="drone_section">
                        {fpvDrones.map((drone, index) => (
                            <Drone1 key={index} name={drone.name} srcPath={drone.img_path} />
                        ))}
                    </div>
                    <h1>Yuneec</h1>
                    <div className="drone_section">
                        {yuneecDrones.map((drone, index) => (
                            <Drone1 key={index} name={drone.name} srcPath={drone.img_path} />
                        ))}
                    </div>
                </>
            </Suspense>
        </div>
    );
}
