import React, { useContext, useState } from 'react'
import jsonData from '../drony/droneData.json';
import '../drony/product.css'
import { useParams } from 'react-router-dom';
import MyContext from '../rendering/Context';

export default function DroneDetails() {
    const { droneName } = useParams();
    const formatName = drone_name => drone_name.replace(/\s+/g, '-').toLowerCase();
    const selectedDrone = jsonData.find(drone => formatName(drone.name) === droneName);
    const { cartProducts, updateCartContent } = useContext(MyContext);
    const [message, setMessage] = useState("");
    const storedUser = localStorage.getItem('user');

    if (!selectedDrone) {
        return <div>Drone not found</div>;
    }

    const { name, img_path, description, price } = selectedDrone;

    const addToCart = () => {
        const loggedUser = JSON.parse(localStorage.getItem('user')).user;
        const existingProductIndex = cartProducts.findIndex(product => product.name === name);

        if (existingProductIndex !== -1) {
            const updatedCart = [...cartProducts];
            updatedCart[existingProductIndex].quantity += 1;
            updateCartContent(updatedCart);
            localStorage.setItem(loggedUser, JSON.stringify(updatedCart))
            console.log(localStorage.getItem(loggedUser))
        } else {
            const numericPrice = parseFloat(price.replace(/[^\d.]/g, ''));
            const newProduct = {
                name,
                img_path,
                description,
                numericPrice,
                quantity: 1,
            };

            updateCartContent([...cartProducts, newProduct]);
            if (localStorage.getItem(loggedUser) != null){
                localStorage.setItem(loggedUser, localStorage.getItem(loggedUser) + ", " + JSON.stringify(newProduct))
            } else{
                localStorage.setItem(loggedUser, JSON.stringify(newProduct))
            }
            console.log(localStorage.getItem(loggedUser))
        }


        setMessage("Product added to cart!");
        setTimeout(() => {
            setMessage("");
        }, 3000)
    };

    return (
        <div className="drone_details_main">
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
                        <p><strong>{price}</strong></p>
                        <div>
                            <button className="buy-now-button">Kup teraz</button>
                            <button className="buy-now-button" onClick={() => {
                                if (storedUser != null) {
                                    addToCart();
                                }
                                else {
                                    setMessage("Musisz być zalogowany przed dodaniem do koszyka.")
                                    setTimeout(() => {
                                        setMessage("");
                                    }, 3000)
                                }
                            }}>Dodaj do koszyka</button>
                        </div>
                    </div>
                </div>
            </div>
            {<p className="added_to_cart_message">{message}</p>}
        </div>
    );
}