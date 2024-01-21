import "./cart.css"
import CartProduct from "./cartProduct"
import MyContext from '../rendering/Context';
import CWL from "./CartWithoutLogin";
import {useContext, useEffect, useState} from "react";

export default function Cart(){
    const {cartProducts, updateCartContent} = useContext(MyContext);
    const [wholePrice, setWholePrice] = useState(0);
    const storedUser = localStorage.getItem('user');

    useEffect(() => {
        // Calculate the total price when cartProducts change
        const total = cartProducts.reduce((acc, product) => {
            return acc + product.numericPrice * product.quantity;
        }, 0);

        setWholePrice(total);
    }, [cartProducts]);

    return (
        storedUser != null ? (
          <div className="cart_main">
            <div className="products_legend">
              <h3>Produkt</h3>
              <h3>Cena jednostkowa</h3>
              <h3>Ilość</h3>
              <h3>Razem</h3>
            </div>
            {cartProducts && cartProducts.length > 0 ? (
              cartProducts.map((product, index) => (
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