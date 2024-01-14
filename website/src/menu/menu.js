import React, { useState, useEffect } from 'react';
import { Outlet, Link } from "react-router-dom";
import "./menu.css"
export default function Menu() {
      const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Function to handle storage change
    const handleStorageChange = () => {
      const userLoggedIn = localStorage.getItem('user') !== null;
      setIsLoggedIn(userLoggedIn);
    };

    // Add event listener for storage change
    window.addEventListener('storage', handleStorageChange);

    // Initial check for user login status
    const userLoggedIn = localStorage.getItem('user') !== null;
    setIsLoggedIn(userLoggedIn);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

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
                            setIsLoggedIn(false);}
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