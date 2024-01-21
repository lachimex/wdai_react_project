import "./cart.css"
import CartProduct from "./cartProduct"
import MyContext from '../rendering/Context';
import CWL from "./CartWithoutLogin";
import {useContext, useEffect, useState} from "react";

export default function Cart(){
    const {userCarts, updateCartContent} = useContext(MyContext);
    const [wholePrice, setWholePrice] = useState(0);
    const storedUser = JSON.parse(localStorage.getItem('user')).user;
    const { sharedValue, updateValue } = useContext(MyContext);
    const userCartProducts = userCarts[storedUser] || [];

    useEffect(() => {
        const storedCarts = localStorage.getItem('userCarts');
        const parsedCarts = JSON.parse(storedCarts);
        const userCartProducts = parsedCarts[storedUser] || [];
        console.log(userCartProducts)
        //if (userCartProducts) updateCartContent(storedUser, userCartProducts);
    }, []);

    useEffect(() => {
        const storedCarts = localStorage.getItem('userCarts');
        if (storedCarts && sharedValue) {
            updateCartContent(storedUser, userCartProducts);
        }
    }, [sharedValue]);


    useEffect(() => {
        if (JSON.stringify(userCarts) !== "{}"){
            console.log(JSON.stringify("etap 2: " + userCarts))
            localStorage.setItem('userCarts', JSON.stringify(userCarts));
            console.log("etap 3: " + userCarts[storedUser])
        }
    }, [userCarts]);

    useEffect(() => {
        const total = userCartProducts.reduce((acc, product) => {
            return acc + product.numericPrice * product.quantity;
        }, 0);

        setWholePrice(total);
    }, [userCartProducts]);

    return (
        storedUser != null ? (
          <div className="cart_main">
            <div className="products_legend">
              <h3>Produkt</h3>
              <h3>Cena jednostkowa</h3>
              <h3>Ilość</h3>
              <h3>Razem</h3>
            </div>
            {userCartProducts && userCartProducts.length > 0 ? (
                userCartProducts.map((product, index) => (
                <CartProduct key={index} product={product} />
              ))
            ) : (
              <div>No items in the cart</div>
            )}
            <p>Całkowita cena: <strong>{wholePrice}</strong> zł</p>
          </div>
        ) : (
            <div className="cart_main">
                <CWL />
            </div>
        ))
    }