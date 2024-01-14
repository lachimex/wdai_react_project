import React, { useState, useEffect, useContext } from 'react';
import MyContext from '../rendering/Context';
export default function Cart() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const { sharedValue, updateValue } = useContext(MyContext);
    useEffect(() => {
        if (!sharedValue){
            setIsLoggedIn(true);
        }
        else{
            setIsLoggedIn(false);
        }
    }, [sharedValue]);
    return (
        <>
        {
            isLoggedIn ? (<p>nie zalogowano</p>) : (<p>zalogowano</p>)

        }
        </>
    )
}