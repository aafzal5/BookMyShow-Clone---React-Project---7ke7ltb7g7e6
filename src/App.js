import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import WishList from "./components/WishList";
import Checkout from "./components/Checkout";
import "./App.css";

const App = () => {
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