import React from 'react';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import ReactDOM from 'react-dom/client';
import MainPage from './main_page/main_page';
import Menu from './menu/menu';
import NoPage from './no_page/no_page';
import Shop from './shop/Shop';
import DroneDetails from "./drone_details/droneDetails";


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Menu />}>
          <Route index element={<Shop />} />
            <Route path="/drone/:droneName" element={<DroneDetails />} />
          {/* <Route path="contact" element={<Contact />} /> */}
          <Route path='/shop' element={<Shop/>} />
          <Route path="/*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);