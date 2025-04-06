
import React, { createContext, useState, useMemo , useEffect } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(()=>{
    const savedCart = sessionStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });
  useEffect(() => {
    sessionStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // Add Product to Cart
  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  // Remove Product from Cart
  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  // Update Quantity in Cart
  const updateQuantity = (id, quantity) => {
    if (quantity < 1) return;
    setCart((prevCart) =>
      prevCart.map((item) => (item.id === id ? { ...item, quantity } : item))
    );
  };
const clearCart = () => {
  setCart([]);
}
  // Memoized Cart Size
  const cartSize = useMemo(
    () => cart.reduce((total, item) => total + item.quantity, 0),
    [cart]
  );

  return (
    <CartContext.Provider
      value={{ cart, cartSize, addToCart, removeFromCart, updateQuantity , clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
