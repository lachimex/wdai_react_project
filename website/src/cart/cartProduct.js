

export default function cartProduct(){
    return (
        <div className="cart_product_container">
            <div className="product_photo">
                <img src='/media/cetusFPV.jpg'/>
            </div>
            <div className="single_price_container">
                <p>299 zł</p>
            </div>
            <div className="quantity_container">
                <p>1</p>
                <div>
                    <button>-</button>
                    <button>+</button>
                </div>
            </div>
            <div className="overall_container">
                <p>399 zł</p>
            </div>
        </div>
    )
}