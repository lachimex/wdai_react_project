// MyProvider.js
import React, {useEffect, useState} from 'react';
import Context from './Context';

const Provider = ({ children }) => {
  const [sharedValue, setSharedValue] = useState(false);
  const [userCarts, setUserCarts] = useState({});

  const updateValue = (newValue) => {
    setSharedValue(newValue);
  };

  const updateCartContent = (user, newProducts) => {
    setUserCarts((prevCarts) => ({
      ...prevCarts,
      [user]: newProducts,
    }));
  };


  return (
      <Context.Provider value={{ sharedValue, updateValue, userCarts, updateCartContent }}>
        {children}
      </Context.Provider>
  );
};

export default Provider;
