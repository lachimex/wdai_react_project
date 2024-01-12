import "../drony/style.css"
import { Link } from 'react-router-dom';
export default function drone1({name, srcPath}){
    const imgPath = '/media/'+srcPath
    const formatName = name => name.replace(/\s+/g, '-').toLowerCase();

    return (
            <div className="drone_container">
                <div className="container">
                    <img src={imgPath} alt="drone1"/>
                    <Link to={`/drone/${formatName(name)}`}>
                        <button>{name}</button>
                    </Link>
                </div>
            </div>
        )
}