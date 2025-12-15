import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom"

// Bootstrap Links :
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

// Css Files :
import "./Css/style.css";
import "./Css/Home.css";
import "./Css/shopbycategory.css"

// Layouts
import Navbar from "./Layout/Navbar";
import Home from "./Layout/Home";
import ShopBycategory from "./Layout/ShopCategory";
import WardrobeEssentials from "./Layout/WardrobeEssentials";
import AddClothesForm from "./Layout/AddClothesForm";

export default function App() {
  return (
    <>
      

      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<>
      <Home />
      <ShopBycategory />
      <WardrobeEssentials />
      </>}/>
        <Route path="create-product" element={<AddClothesForm/>}/>
      </Routes>
      </BrowserRouter>
    </>
  );
}
