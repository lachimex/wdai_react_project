import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactDOM from 'react-dom/client';
import Menu from './menu/menu';
import NoPage from './no_page/no_page';
import Shop from './shop/shop' 
import DroneDetails from "./drone_details/droneDetails";
import Login from "./login/Login"
import Provider from './rendering/Provider';
import Footer from './footer/Footer';
import './index.css'
import Cart from './cart/cart';


export default function App() {
  return (
    <Provider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<><Menu /> <Footer/></>}>
            <Route index element={<Shop />} />
            <Route path="/drone/:droneName" element={<DroneDetails />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/shop' element={<Shop />} />
            <Route path='/account' element={<Login />} />
            <Route path="/*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);