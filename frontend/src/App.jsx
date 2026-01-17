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
import "./Css/Footer.css";

// Layouts
import Navbar from "./Layout/Navbar";
import Home from "./Pages/Home";
import ShopBycategory from "./Pages/ShopCategory";
import WardrobeEssentials from "./Pages/WardrobeEssentials";
import Login from "./Layout/Login";
import Signup from "./Layout/Signup";
import OrderList from "./Pages/OrderList";
import ProductContainer from "./Pages/ProductContainer";
import SideLayout from "./Layout/SideLayout";
import AddClothesForm from "./Layout/AddClothesForm";
import ContactFormUI from "./Pages/Contact";
import SingleProductView from "./Layout/SingleProductView";
import PrivateRoute from "./PrivateRoute/Privateroute";
import AboutProduct from "./Layout/AboutProduct";
import Footer from "./Pages/Footer";
import BestSeller from "./Pages/BestSeller";
import AddToCart from "./Layout/AddToCart";

// Context
import CartProvider from "./Context/CartContext";

export default function App() {
  return (
    <>
      <CartProvider>
        <BrowserRouter>
        <Routes>
          <Route
            element={
              <>
                <Navbar />
                <PrivateRoute />
              </>
            }
          >
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
                  <ProductContainer name="pant" />
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
              path="/denim"
              element={
                <>
                  <ProductContainer name="denim" />
                </>
              }
            />

            <Route
              path="/"
              element={
                <>
                  <Home />
                  <ShopBycategory />
                  <WardrobeEssentials />
                  <Footer />
                  <BestSeller />
                </>
              }
            />
            <Route
              path="/create-product"
              element={
                <>
                  <AddClothesForm />{" "}
                </>
              }
            />
            <Route
              path="/orderlist"
              element={
                <>
                  <OrderList /> <Footer />
                </>
              }
            />
            <Route
              path="/contact"
              element={
                <>
                  <ContactFormUI />
                  <Footer />
                </>
              }
            />
            <Route
              path="/singleProductview/:id"
              element={
                <>
                  <AboutProduct />
                  <Footer />
                </>
              }
            />
            <Route
              path="/addtocart/:id"
              element={
                <>
                  <AddToCart />
                  <Footer />
                </>
              }
            />
          </Route>

          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
        </BrowserRouter>
      </CartProvider>
    </>
  );
}
    
