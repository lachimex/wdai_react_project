// MyProvider.js
import React, { useState } from 'react';
import Context from './Context';

const Provider = ({ children }) => {
  const [sharedValue, setSharedValue] = useState('Default Value');
  const [sharedValue2, setSharedValue2] = useState('Default Value');

  const updateValue = (newValue) => {
    setSharedValue(newValue);
  };

  const updateValue2 = (newValue) => {
    setSharedValue2(newValue);
  };

  return (
    <Context.Provider value={{ sharedValue, updateValue, sharedValue2, setSharedValue2 }}>
      {children}
    </Context.Provider>
  );
};

export default Provider;
