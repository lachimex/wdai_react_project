import React from 'react';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import ReactDOM from 'react-dom/client';
import MainPage from './main_page/main_page';
import Menu from './menu/menu';
import NoPage from './no_page/no_page';
import Shop from './shop/shop';


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Menu />}>
          <Route index element={<MainPage />} />
          <Route path="/shop" element={<Shop />} />
          {/* <Route path="contact" element={<Contact />} /> */}
          <Route path="/*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);