import { SET_PIZZAS, SET_LOADED } from "../types";
import axios from "axios";

export const setLoaded = (payload) => ({
  type: SET_LOADED,
  payload,
});

export const fetchPizzas = (sortBy, category, sortByOrder) => (dispatch) => {
  dispatch(setLoaded(false));
  axios
    .get(
      `/pizzas?${
        category !== null ? `category=${category}` : ""
      }&_sort=${sortBy}&_order=${sortByOrder}`
    )
    .then(({ data }) => {
      dispatch(setPizzas(data));
    });
};

export const setPizzas = (items) => ({
  type: SET_PIZZAS,
  payload: items,
});
