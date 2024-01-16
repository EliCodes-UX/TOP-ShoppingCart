import { createContext, useState } from 'react';
import { PRODUCTS } from '../products';

export const ShopContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};
  for (let i = 1; i < PRODUCTS.length + 1; i++) {
    cart[i] = 0;
  }
  return cart;
};

export const ShopContextProvider = props => {
  const [cartItems, setCartItems] = useState(getDefaultCart());

  const addToCart = itemId => {
    setCartItems(prev => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };

  const removeToCart = itemId => {
    setCartItems(prev => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const contextValue = { cartItems, addToCart, removeToCart };
  console.log(cartItems);
  return (
    <div>
      <ShopContext.Provider value={contextValue}>
        {props.children}
      </ShopContext.Provider>
    </div>
  );
};

export default ShopContext;