import React, { createContext, useContext, useState } from "react";

const States = createContext();

export default function Context({ children }) {
  // global states
  const [category, setCategory] = useState("all");
  const [selectedItem, setSelectedItem] = useState({
    show: false,
    item: {},
  });
  const [cart, setCart] = useState([]);
  const [page, setPage] = useState(0);

  // add item to cart
  const addToCart = (item, quantity = 1) => {
    const isExist = cart.find((v) => v.item.id === item.id);
    if (!isExist) {
      setCart([
        ...cart,
        {
          item,
          quantity,
        },
      ]);
    } else {
      alert("this item is already added to your cart");
    }
  };

  // delete item from cart
  const deleteFromCart = (e) => {
    const newCart = cart.filter((v) => v.item.id !== e.item.id);
    setCart(newCart);
  };

  return (
    <States.Provider
      value={{
        category,
        setCategory,
        selectedItem,
        setSelectedItem,
        cart,
        setCart,
        addToCart,
        deleteFromCart,
        setPage,
        page,
      }}
    >
      {children}
    </States.Provider>
  );
}

// export context
export const State = () => {
  return useContext(States);
};
