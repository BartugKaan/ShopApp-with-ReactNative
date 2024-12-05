import React, { createContext, useState, useContext } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.product_code === product.product_code);
      if (existingItem) {
        return prevItems.map(item =>
          item.product_code === product.product_code
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevItems, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (productCode) => {
    setCartItems(prevItems => prevItems.filter(item => item.product_code !== productCode));
  };

  const updateQuantity = (productCode, newQuantity) => {
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.product_code === productCode ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, updateQuantity }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext); 