import React, { useState, useEffect, useContext } from 'react';
import { Outlet, Link } from "react-router-dom";
import "./menu.css"
import MyContext from '../rendering/Context';
export default function Menu() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const { sharedValue, updateValue } = useContext(MyContext);

    useEffect(() => {
        const storedUser = localStorage.getItem('user');

        if (storedUser) {
            setIsLoggedIn(true);
        }
        else {
            setIsLoggedIn(false);
        }

    }, [sharedValue]);

    return (
        <>
            <nav>
                <div id="name">
                    <Link to='/shop' id='name'>
                        <img src="https://www.reshot.com/preview-assets/icons/QMKDX7THUZ/drone-QMKDX7THUZ.svg" alt="icon" />
                        <h1>Dronify</h1>
                    </Link>
                </div>
                <div id="icons">
                    <Link to='/cart'><img src="https://www.svgrepo.com/show/533043/cart-shopping.svg" alt="cartIcon" /></Link>
                    <Link to='/account'><img src="https://www.svgrepo.com/show/456992/account.svg" alt="accountIcon" /></Link>
                    {isLoggedIn ? (
                        <img src="https://www.svgrepo.com/show/529057/logout-2.svg" onClick={() => {
                            localStorage.removeItem("user")
                            setIsLoggedIn(false);
                            updateValue(false)
                            window.location.reload()
                        }} />
                    ) : null}
                </div>
            </nav>
            <Outlet />
        </>
    )
}