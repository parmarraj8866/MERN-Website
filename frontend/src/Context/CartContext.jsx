import React, { createContext, useState, useEffect } from "react";
import Api from "../Api/Api";

export const CartContext = createContext();

export default function CartProvider({ children }) {
  const [orderClothes, setOrderClothes] = useState([]);
  const [loading, setLoading] = useState(false);

  async function getOrderClothes() {
    try {
      setLoading(true);
      const res = await Api.get("/api/orderclothes");
      setOrderClothes(res.data.orderList || []);
    } catch (err) {
      console.error("Error fetching cart:", err);
      setOrderClothes([]);
    } finally {
      setLoading(false);
    }
  }

  // Fetch cart on mount
  useEffect(() => {
    getOrderClothes();
  }, []);

  const addToCart = async (product_id, qty) => {
    try {
      const res = await Api.post("/api/orderclothes", { product_id, qty });
      // Refetch cart after adding item
      await getOrderClothes();
      return res.data;
    } catch (err) {
      console.error("Error adding to cart:", err);
      throw err;
    }
  };

  const value = {
    orderClothes,
    loading,
    getOrderClothes,
    addToCart,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}
