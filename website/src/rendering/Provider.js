// MyProvider.js
import React, { useState } from 'react';
import Context from './Context';

const Provider = ({ children }) => {
  const [sharedValue, setSharedValue] = useState('Default Value');

  const updateValue = (newValue) => {
    setSharedValue(newValue);
  };

  return (
    <Context.Provider value={{ sharedValue, updateValue }}>
      {children}
    </Context.Provider>
  );
};

export default Provider;
