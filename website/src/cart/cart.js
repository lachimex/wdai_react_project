import "./cart.css"
import CartProduct from "./cartProduct"
import MyContext from '../rendering/Context';
import {useContext} from "react";

export default function Cart(){
    const {cartProducts, updateCartContent} = useContext(MyContext);
    return (
        <main>
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
        </main>
    )
}