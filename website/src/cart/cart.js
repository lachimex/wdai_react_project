import "./cart.css"
import CartProduct from "./cartProduct"

export default function cart(){
    const productList = [{ id: 1, name: 'Product 1', price: 20 },
        { id: 1, name: 'Product 1', price: 20 }, { id: 1, name: 'Product 1', price: 20 }, { id: 1, name: 'Product 1', price: 20 }]
    return (
        <main>
            <div className="products_legend">
                <h3>Produkt</h3>
                <h3>Cena jednostkowa</h3>
                <h3>Ilość</h3>
                <h3>Razem</h3>
            </div>
            {productList.map(product => (
                <CartProduct />
            ))}
        </main>
    )
}