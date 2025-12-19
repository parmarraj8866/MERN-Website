import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Bootstrap Links :
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

// Css Files :
import "./Css/style.css";
import "./Css/Home.css";
import "./Css/shopbycategory.css";
import "./Css/productContainer.css";

// Layouts
import Navbar from "./Layout/Navbar";
import Home from "./Pages/Home";
import ShopBycategory from "./Pages/ShopCategory";
import WardrobeEssentials from "./Layout/WardrobeEssentials";
// import AddClothesForm from "./Layout/AddClothesForm";
import Login from "./Layout/Login";
import Signup from "./Layout/Signup";
import OrderList from "./Layout/OrderList";
import ProductContainer from "./Pages/ProductContainer";
import SideLayout from "./Layout/SideLayout";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route
            path="/shirts"
            element={
              <>
                <ProductContainer name="Shirt" />
              </>
            }
          />
          <Route
            path="/pants"
            element={
              <>
                <ProductContainer name="Pant" />
              </>
            }
          />
          <Route
            path="/jackets"
            element={
              <>
                <ProductContainer name="Jacket" />
              </>
            }
          />

          <Route
            path="/home"
            element={
              <>
                <Home />
                <ShopBycategory />
                <WardrobeEssentials />
              </>
            }
          />
          {/* <Route path="/create-product" element={<AddClothesForm/>}/> */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/orderlist" element={<OrderList />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
