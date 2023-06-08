import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ToutesCatégories from "./Pages/ToutesCatégories.jsx";
import Nouveautés from "./Pages/Nouveautés.jsx";
import Promotion from "./Pages/Promotion.jsx";
import NousContacter from "./Pages/NousContacter.jsx";
import Cart from "./Pages/Cart.jsx";
import Login from "./Pages/Login.jsx";
import Navbar from "./components/navbar/Navbar.jsx";
import Header from "./components/header/Header.jsx";
import Footer from "./components/footer/Footer.jsx";
import ForgotPasswordP from "./Pages/ForgotPasswordP.jsx";
import CreateAccountP from "./Pages/CreateAccountP.jsx";
import ProductCardDetails from "./components/CategoriesPage/categoriesRight/productCardDetails/ProductCardDetails.jsx";
import Search from "./Pages/Search.jsx";
import React, { useState } from "react";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Header />
        <Routes>
          <Route path="/" element={<ToutesCatégories />}></Route>
          <Route path="/Nouveautés" element={<Nouveautés />}></Route>
          <Route path="/Promotion" element={<Promotion />}></Route>
          <Route path="/NousContacter" element={<NousContacter />}></Route>
          <Route path="/Cart" element={<Cart />}></Route>
          <Route path="/Login" element={<Login />}></Route>
          <Route path="/ForgotPasswordP" element={<ForgotPasswordP />}></Route>
          <Route path="/CreateAccountP" element={<CreateAccountP />}></Route>
          <Route
            path="/productcardDetails/:id"
            element={<ProductCardDetails />}
          ></Route>
          <Route path="/Search" element={<Search />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
