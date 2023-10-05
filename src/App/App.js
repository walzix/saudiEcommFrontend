import './App.css';
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../Pages/Home/Home";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/shop" element={<Home />} />
          <Route path="/about" element={<Home />} />
          <Route path="/blog" element={<Home />} />
          <Route path="/contact" element={<Home />} />
          <Route path="/product" element={<Home />} />
          <Route path="/cart" element={<Home />} />
          <Route path="/checkout" element={<Home />} />

          <Route path="/signup" element={<Home />} />
          <Route path="/login" element={<Home />} />

          <Route path="/admin" element={<Home />} />

          <Route exact path="/verify" element={<Home />} />

          <Route path="*" element={<Home />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
