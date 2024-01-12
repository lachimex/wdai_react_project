import React, { useState } from 'react';

const CartProduct = () => {
    const [quantity, setQuantity] = useState(1);
    const [price, setPrice] = useState(299)

    function increaseQuantity() {
        setQuantity(prevQuantity => prevQuantity + 1);
    }

    function decreaseQuantity() {
        if (quantity > 1) {
            setQuantity(prevQuantity => prevQuantity - 1);
        }
    }

    return (
        <div className="cart_product_container">
            <div className="product_photo">
                <img src='/media/cetusFPV.jpg'/>
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
                <p>{price * quantity} zł</p>
            </div>
        </div>
    )
}

export default CartProduct;