import Drone1 from "../drony_react_component/drone1"
import jsonData from '../drony/droneData.json';
export default function shop(){
    const djiDrones = jsonData.filter(drone => drone.drone_type === 'DJI');
    const djiDronesList = djiDrones.map((drone, index) => (
        <Drone1 key={index} name={drone.name} srcPath={drone.img_path} />
    ));

    const fpvDrones = jsonData.filter(drone => drone.drone_type === 'FPV');
    const fpvDronesList = fpvDrones.map((drone, index) => (
        <Drone1 key={index} name={drone.name} srcPath={drone.img_path} />
    ));

    const yuunecDrones = jsonData.filter(drone => drone.drone_type === 'Yuneec');
    const yuunecDronesList = yuunecDrones.map((drone, index) => (
        <Drone1 key={index} name={drone.name} srcPath={drone.img_path} />
    ));

    return(
        <main>
            <h1>DJI</h1>
            <div className="drone_section">
                {djiDronesList}
            </div>
            <h1>FPV</h1>
            <div className="drone_section">
                {fpvDronesList}
            </div>
            <h1>YUUNEC</h1>
            <div className="drone_section">
                {yuunecDronesList}
            </div>
        </main>
    )
}