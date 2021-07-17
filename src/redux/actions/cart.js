import {
  ADD_PIZZA_TO_CART,
  CLEAR_CART,
  REMOVE_CART_ITEM,
  INCREMENT_ITEM,
  DECREMENT_ITEM,
} from "../types";

export const addPizzaToCart = (pizzaObj) => ({
  type: ADD_PIZZA_TO_CART,
  payload: pizzaObj,
});

export const clearCart = () => ({
  type: CLEAR_CART,
});

export const removeCartItem = (id) => ({
  type: REMOVE_CART_ITEM,
  payload: id,
});

export const incrItem = (id) => ({
  type: INCREMENT_ITEM,
  payload: id,
});

export const decrItem = (id) => ({
  type: DECREMENT_ITEM,
  payload: id,
});
