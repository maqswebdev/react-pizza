import {
  ADD_PIZZA_TO_CART,
  CLEAR_CART,
  REMOVE_CART_ITEM,
  INCREMENT_ITEM,
  DECREMENT_ITEM,
} from "../types";

const initialState = {
  items: {},
  totalPrice: 0,
  totalCount: 0,
};

const getTotalPrice = (arr) => arr.reduce((sum, obj) => obj.price + sum, 0);

const _get = (obj, path) => {
  const [firstKey, ...keys] = path.split(".");
  return keys.reduce((val, key) => {
    return val[key];
  }, obj[firstKey]);
};

const getTotalSum = (obj, path) => {
  return Object.values(obj).reduce((sum, obj) => {
    const value = _get(obj, path);
    return sum + value;
  }, 0);
};

const cart = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PIZZA_TO_CART: {
      const currentPizzaItems = !state.items[action.payload.id]
        ? [action.payload]
        : [...state.items[action.payload.id].items, action.payload];
      const newItems = {
        ...state.items,
        [action.payload.id]: {
          items: currentPizzaItems,
          totalPrice: getTotalPrice(currentPizzaItems),
        },
      };
      const totalCount = getTotalSum(newItems, "items.length");
      const totalPrice = getTotalSum(newItems, "totalPrice");
      return {
        ...state,
        items: newItems,
        totalCount,
        totalPrice,
      };
    }
    case CLEAR_CART:
      return { ...state, items: {}, totalPrice: 0, totalCount: 0 };
    case REMOVE_CART_ITEM: {
      const newItems = {
        ...state.items,
      };
      const priceDeletedItem = newItems[action.payload].totalPrice;
      const countDeletedItem = newItems[action.payload].items.length;
      delete newItems[action.payload];
      return {
        ...state,
        items: newItems,
        totalPrice: state.totalPrice - priceDeletedItem,
        totalCount: state.totalCount - countDeletedItem,
      };
    }
    case INCREMENT_ITEM: {
      const newObjItems = [
        ...state.items[action.payload].items,
        state.items[action.payload].items[0],
      ];
      const newItems = {
        ...state.items,
        [action.payload]: {
          items: newObjItems,
          totalPrice: getTotalPrice(newObjItems),
        },
      };
      const totalCount = getTotalSum(newItems, "items.length");
      const totalPrice = getTotalSum(newItems, "totalPrice");
      return {
        ...state,
        items: newItems,
        totalCount,
        totalPrice,
      };
    }
    case DECREMENT_ITEM: {
      const newObjItems = [...state.items[action.payload].items].slice(1);
      const newItems = {
        ...state.items,
        [action.payload]: {
          items: newObjItems,
          totalPrice: getTotalPrice(newObjItems),
        },
      };
      const totalCount = getTotalSum(newItems, "items.length");
      const totalPrice = getTotalSum(newItems, "totalPrice");
      return {
        ...state,
        items: newItems,
        totalCount,
        totalPrice,
      };
    }
    default:
      return state;
  }
};

export default cart;
