import {
  SUCCESS_FETCH_PRODUCT,
  SET_LOADING_PRODUCT,
  SET_ERROR_PRODUCT,
} from "../actionTypes";
import Axios from "axios";

const baseUrl = "http://localhost:3001";

export const setProduct = (payload) => {
  return {
    type: SUCCESS_FETCH_PRODUCT,
    payload,
  };
};

export const setLoading = (payload) => {
  return {
    type: SET_LOADING_PRODUCT,
    payload,
  };
};

export const setError = (payload) => {
  return {
    type: SET_ERROR_PRODUCT,
    payload,
  };
};

export const productFetch = () => {
  return async (dispatch, getState) => {
    try {
      dispatch(setError(null));
      dispatch(setLoading(true));
      const res = await Axios.get(`${baseUrl}/products`);
      dispatch(setProduct(res.data));
    } catch (err) {
      dispatch(setError(err));
    } finally {
      dispatch(setLoading(false));
    }
  };
};
