import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./Navbar";
import { Home } from "./Home";
import { WishList } from "./WishList";
import { Checkout } from "./Checkout";
import "../styles/App.css";

const App = ()=> {
  return (
    <div id="main">
    <BrowserRouter >
      <Routes>
        <Route path="/" element={<Home />}  />
        <Route path="/wishlist" element={<><Navbar/><WishList/></>} />
        <Route path="/checkout" element={<Checkout/>} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;