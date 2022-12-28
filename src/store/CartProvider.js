import { useReducer } from "react";
import CartContex from "./cart-contex";
const defaultCartState = {
  items: [],
  totalAmount: 0,
};
const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    const updatedItems = state.items.concat(item);
    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;
    return { items: updatedItems, totalAmount: updatedTotalAmount };
  }
  return defaultCartState;
};
const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );
  const addItemToCartHandler = (item) => {
    dispatchCartAction({ type: "ADD", item: item });
  };
  const removeItemFromCartHandler = (id) => {
    dispatchCartAction({ type: "REMOVE", id: id });
  };
  const cartContex = {
    items: cartState.items,
    totalAmount: cartState.amount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };
  return (
    <CartContex.Provider value={cartContex}>
      {props.children}
    </CartContex.Provider>
  );
};
export default CartProvider;
