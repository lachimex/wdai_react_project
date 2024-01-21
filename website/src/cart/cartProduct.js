import React, {useContext, useEffect, useState} from 'react';
import MyContext from "../rendering/Context";

const CartProduct = ({product}) => {
    const {cartProducts, updateCartContent} = useContext(MyContext);
    const [quantity, setQuantity] = useState(product.quantity);
    const [price] = useState(product.numericPrice);
    const [overallProductPrice, setOverallProductPrice] = useState(price * quantity);

    function increaseQuantity() {
        setQuantity(prevQuantity => prevQuantity + 1);

        const existingProductIndex = cartProducts.findIndex(product2 => product2.name === product.name);
        if (existingProductIndex !== -1) {
            const updatedCart = [...cartProducts];
            updatedCart[existingProductIndex].quantity += 1;
            updateCartContent(updatedCart);
        }
    }

    useEffect(() => {
        setOverallProductPrice(price * quantity);
    }, [quantity]);

    function decreaseQuantity() {
        if (quantity > 1) {
            setQuantity(prevQuantity => prevQuantity - 1);

            const existingProductIndex = cartProducts.findIndex(product2 => product2.name === product.name);
            if (existingProductIndex !== -1) {
                const updatedCart = [...cartProducts];
                updatedCart[existingProductIndex].quantity -= 1;
                updateCartContent(updatedCart);
            }
        }
    }

    return (
        <div className="cart_product_container">
            <div className="product_photo">
                <img src={`/media/${product.img_path}`}/>
            </div>
            <div className="single_price_container">
                <p>{price} zł</p>
            </div>
            <div className="quantity_container">
                <p>{quantity}</p>
                <div>
                    <button onClick={decreaseQuantity}>-</button>
                    <button onClick={increaseQuantity}>+</button>
                </div>
            </div>
            <div className="overall_container">
                <p>{overallProductPrice} zł</p>
            </div>
        </div>
    )
}

export default CartProduct;