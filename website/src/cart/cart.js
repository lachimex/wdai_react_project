import "./cart.css"
import CartProduct from "./cartProduct"
import MyContext from '../rendering/Context';
import CWL from "./CartWithoutLogin";
import { useContext, useEffect, useState } from "react";
import { json } from "react-router-dom";

export default function Cart() {
  const { cartProducts, updateCartContent } = useContext(MyContext);
  const [wholePrice, setWholePrice] = useState(0);
  const storedUser = localStorage.getItem('user');
  let userProducts = localStorage.getItem(JSON.parse(storedUser).user);
  userProducts = "[" + userProducts + "]"
  userProducts = JSON.parse(userProducts);

  useEffect(() => {
    // Calculate the total price when cartProducts change
    const total = cartProducts.reduce((acc, product) => {
      return acc + product.numericPrice * product.quantity;
    }, 0);

    userProducts = localStorage.getItem(JSON.parse(storedUser).user);
    userProducts = "[" + userProducts + "]"
    userProducts = JSON.parse(userProducts);
    console.log(userProducts);
    setWholePrice(total);

  }, [cartProducts]); // Dependencies array closing bracket


  return (
    storedUser != null ? (
      <div className="cart_main">
        <div className="products_legend">
          <h3>Produkt</h3>
          <h3>Cena jednostkowa</h3>
          <h3>Ilość</h3>
          <h3>Razem</h3>
        </div>
        {
          userProducts ? (
            userProducts.map((product, index) => (
              <CartProduct index={index} product={product} />
            ))
          ) : (
            <div>No items in the cart</div>
          )
        }
        <p>Całkowita cena: <strong>{wholePrice}</strong> zł</p>
      </div>
    ) : (
      <div className="cart_main">
        <CWL />
      </div>
    ))
}