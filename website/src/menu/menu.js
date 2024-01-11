import { Outlet, Link } from "react-router-dom";
import "./menu.css"
export default function Menu() {
    return (
        <>
            <nav>
                <div id="name">
                    <img src="https://www.reshot.com/preview-assets/icons/QMKDX7THUZ/drone-QMKDX7THUZ.svg" alt="icon"></img>
                    <h1>Dronify</h1>
                </div>
                <div id="icons">
                    <Link to='/cart'><img src="https://www.svgrepo.com/show/533043/cart-shopping.svg" alt="cartIcon" /></Link>
                    <Link to='/account'><img src="https://www.svgrepo.com/show/456992/account.svg" alt="accountIcon" /></Link>
                </div>
            </nav>
            <div id="subnav">
                <Link to='/shop' className="link">
                    SKLEP
                </Link>
                <Link to='/courses' className="link">
                    KURSY
                </Link>
                <Link to='/contact' className="link">
                    KONTAKT
                </Link>
            </div>
            <Outlet/>
        </>
    )
}