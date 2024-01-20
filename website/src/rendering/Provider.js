// MyProvider.js
import React, { useState } from 'react';
import Context from './Context';

const Provider = ({ children }) => {
  const [sharedValue, setSharedValue] = useState('Default Value');
  const [cartProducts, setCartProducts] = useState([]);

  const updateValue = (newValue) => {
    setSharedValue(newValue);
  };

  const updateCartContent = (newProduct) => {
    setCartProducts((prevProducts) => [...prevProducts, newProduct]);
  };

  return (
    <Context.Provider value={{ sharedValue, updateValue, cartProducts, updateCartContent }}>
      {children}
    </Context.Provider>
  );
};

export default Provider;
