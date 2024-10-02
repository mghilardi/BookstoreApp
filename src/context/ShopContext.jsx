import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";

const ShopContext = createContext(null);
export default ShopContext;

export const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    console.debug(`cartItems # ${JSON.stringify(cartItems, null, 2)}`);
  }, [cartItems]);

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item]?.quantity > 0) {
        totalAmount += cartItems[item]?.quantity * cartItems[item]?.price;
      }
    }
    return totalAmount;
  };

  const addToCart = (book) => {
    console.debug(`addToCart ${JSON.stringify(book)}`);

    const itemFound = cartItems.find((item) => item.id === book.id);
    console.debug(`itemFound ${JSON.stringify(itemFound)}`);
    if (itemFound === undefined) {
      const newItem = { ...book, quantity: 1 };
      setCartItems((prev) => {
        return [...prev, newItem];
      });
    } else {
      const updateItem = { ...book, quantity: itemFound.quantity + 1 };

      const newCartItems = cartItems.map((c, i) => {
        const foundIndex = cartItems.findIndex((item) => item.id == book.id);
        if (i === foundIndex) {
          console.debug(`foundIndex ${foundIndex} i ${i} ${JSON.stringify(c)}`);
          return updateItem;
        } else {
          return c;
        }
      });
      setCartItems(newCartItems);
    }
  };

  const removeFromCart = (book) => {
    console.debug(`removeFromCart ${JSON.stringify(book)}`);

    const itemFound = cartItems.find((item) => item?.id === book.id);
    console.debug(`itemFound ${JSON.stringify(itemFound)}`);
    if (itemFound?.quantity <= 1) {
      setCartItems((prev) => {
        return [...prev.filter((item) => item.id !== book.id)];
      });
    } else {
      const updateItem = { ...book, quantity: itemFound.quantity - 1 };

      const newCartItems = cartItems.map((c, i) => {
        const foundIndex = cartItems.findIndex((item) => item.id == book.id);
        if (i === foundIndex) {
          console.debug(`foundIndex ${foundIndex} i ${i} ${JSON.stringify(c)}`);
          return updateItem;
        } else {
          return c;
        }
      });
      setCartItems(newCartItems);
    }
  };

  const updateCartItemCount = (newQuantity, bookId) => {
    if (newQuantity < 1) {
      setCartItems((prev) => {
        return [...prev.filter((item) => item.id !== bookId)];
      });
    } else {
      const newCartItems = cartItems.map((c, i) => {
        const foundIndex = cartItems.findIndex((item) => item.id == bookId);
        if (i === foundIndex) {
          console.debug(`foundIndex ${foundIndex} i ${i} ${JSON.stringify(c)}`);
          const itemFound = cartItems.find((item) => item.id === bookId);

          if (newQuantity < 1) {
            console.debug(`newQuantity ${newQuantity} smaller then 1`);
            return {};
          } else {
            const updateItem = { ...itemFound, quantity: newQuantity };
            return updateItem;
          }
        } else {
          return c;
        }
      });
      setCartItems(newCartItems);
    }
  };

  const resetCartItems = () => {
    setCartItems([]);
  };

  const contextValue = {
    cartItems,
    addToCart,
    updateCartItemCount,
    removeFromCart,
    getTotalCartAmount,
    resetCartItems,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

ShopContextProvider.propTypes = {
  children: PropTypes.any,
};
