import React, {useContext, useEffect, useState} from 'react';
import MyContext from "../rendering/Context";

const CartProduct = ({product}) => {
    const {userCarts, updateCartContent} = useContext(MyContext);
    const [quantity, setQuantity] = useState(product.quantity);
    const [price] = useState(product.numericPrice);
    const [overallProductPrice, setOverallProductPrice] = useState(price * quantity);
    const storedUser = JSON.parse(localStorage.getItem('user')).user;

    function increaseQuantity() {
        setQuantity((prevQuantity) => prevQuantity + 1);
        updateCart(product, quantity + 1);
    }

    useEffect(() => {
        setOverallProductPrice(price * quantity);
    }, [quantity]);

    function decreaseQuantity() {
        if (quantity > 1) {
            setQuantity((prevQuantity) => prevQuantity - 1);
            updateCart(product, quantity - 1);
        }
    }

    function removeProduct() {
        const updatedCart = userCarts[storedUser].filter(
            (product2) => product2.name !== product.name
        );
        updateCartContent(storedUser, updatedCart);
    }

    function updateCart(updatedProduct, updatedQuantity) {
        const user = storedUser;
        const existingProductIndex = userCarts[user].findIndex(
            (product2) => product2.name === updatedProduct.name
        );
        if (existingProductIndex !== -1) {
            const updatedCart = [...userCarts[user]];
            updatedCart[existingProductIndex].quantity = updatedQuantity;
            updateCartContent(user, updatedCart);
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

            <div className="remove_button_container">
                <img src="https://www.svgrepo.com/show/533007/trash.svg" onClick={removeProduct} alt="trash"/>
            </div>
        </div>
    )
}

export default CartProduct;