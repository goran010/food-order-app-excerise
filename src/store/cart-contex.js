import React from "react";

const CartContex = React.createContext({
  items: [],
  amount: 0,
  addItem: (item) => {},
  removeItem: (item) => {},
});

export default CartContex;
