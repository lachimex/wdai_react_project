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
        else{
            setIsLoggedIn(false);
        }
    
  }, [sharedValue]);

    return (
        <>
            <nav>
                <div id="name">
                    <img src="https://www.reshot.com/preview-assets/icons/QMKDX7THUZ/drone-QMKDX7THUZ.svg" alt="icon"></img>
                    <h1>Dronify</h1>
                </div>
                <div id="icons">
                    <Link to='/cart'><img src="https://www.svgrepo.com/show/533043/cart-shopping.svg" alt="cartIcon" /></Link>
                    {isLoggedIn ? (
                        <button onClick={() => {
                            localStorage.removeItem("user")
                            setIsLoggedIn(false);
                            updateValue("update from menu logging out")}
                            }>wyloguj sie</button>
                    ) : null}
                    <Link to='/account'><img src="https://www.svgrepo.com/show/456992/account.svg" alt="accountIcon" /></Link>
                </div>
            </nav>
            <div id="subnav">
                <Link to='/shop' className="link" id="link">
                    SKLEP
                </Link>
                <Link to='/courses' className="link" id="link">
                    KURSY
                </Link>
                <Link to='/contact' className="link" id="link">
                    KONTAKT
                </Link>
            </div>
            <Outlet />
        </>
    )
}