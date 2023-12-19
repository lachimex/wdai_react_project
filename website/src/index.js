import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactDOM from 'react-dom/client';
import Menu from "./menu/menu";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Menu />}>
          {/* <Route path="zad1" element={<Hello />} />
          <Route path="zad2" element={<List2 />} />
          <Route path="zad4" element={<List4 />} />
          <Route path="zad5" element={<Exercise5 />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);