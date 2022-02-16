import {
  SUCCESS_FETCH_CART,
  SUCCESS_ADD_CART,
  SUCCESS_DECREASE_CART,
  SUCCESS_REMOVE_CART,
  SET_LOADING_CART,
  SET_ERROR_CART,
} from "../actionTypes";
import Axios from "axios";

const baseUrl = "http://localhost:3001";

export const setCart = (payload) => {
  return {
    type: SUCCESS_FETCH_CART,
    payload,
  };
};

export const addCart = (payload) => {
  return {
    type: SUCCESS_ADD_CART,
    payload,
  };
};

export const decreaseCart = (payload) => {
  return {
    type: SUCCESS_DECREASE_CART,
    payload,
  };
};

export const removeCart = (payload) => {
  return {
    type: SUCCESS_REMOVE_CART,
    payload,
  };
};

export const setLoading = (payload) => {
  return {
    type: SET_LOADING_CART,
    payload,
  };
};

export const setError = (payload) => {
  return {
    type: SET_ERROR_CART,
    payload,
  };
};

export const cartFetch = () => {
  return async (dispatch, getState) => {
    try {
      dispatch(setError(null));
      dispatch(setLoading(true));
      const res = await Axios.get(`${baseUrl}/cart`);
      dispatch(setCart(res.data));
    } catch (err) {
      dispatch(setError(err));
    } finally {
      dispatch(setLoading(false));
    }
  };
};

export const addProductCart = (id) => {
  return async (dispatch, getState) => {
    try {
      dispatch(setError(null));
      dispatch(setLoading(true));
      const res = await Axios.post(`${baseUrl}/cart/${id}`);
      dispatch(addCart(res.data));
    } catch (err) {
      dispatch(setError(err));
    } finally {
      dispatch(setLoading(false));
    }
  };
};

export const decreaseProductCart = (id) => {
  return async (dispatch, getState) => {
    try {
      dispatch(setError(null));
      dispatch(setLoading(true));
      const res = await Axios.delete(`${baseUrl}/cart/${id}`);
      dispatch(decreaseCart(res.data));
    } catch (err) {
      dispatch(setError(err));
    } finally {
      dispatch(setLoading(false));
    }
  };
};

export const removeProductCart = (id) => {
  return async (dispatch, getState) => {
    try {
      dispatch(setError(null));
      dispatch(setLoading(true));
      const res = await Axios.delete(`${baseUrl}/remove-cart/${id}`);
      dispatch(removeCart(res.data));
    } catch (err) {
      dispatch(setError(err));
    } finally {
      dispatch(setLoading(false));
    }
  };
};
