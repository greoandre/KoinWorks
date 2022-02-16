import {
  SUCCESS_FETCH_CART,
  SUCCESS_ADD_CART,
  SUCCESS_DECREASE_CART,
  SUCCESS_REMOVE_CART,
  SET_LOADING_CART,
  SET_ERROR_CART,
} from "../actionTypes";

const initalState = {
  product: [],
  loading: true,
  error: null,
};

function productReducers(state = initalState, action) {
  switch (action.type) {
    case SUCCESS_FETCH_CART:
      return {
        ...state,
        product: action.payload,
      };

    case SUCCESS_ADD_CART:
      return {
        ...state,
        product: action.payload,
      };

    case SUCCESS_DECREASE_CART:
      return {
        ...state,
        product: action.payload,
      };

    case SUCCESS_REMOVE_CART:
      return {
        ...state,
        product: action.payload,
      };

    case SET_LOADING_CART:
      return {
        ...state,
        loading: action.payload,
      };

    case SET_ERROR_CART:
      return {
        ...state,
        error: action.payload,
      };

    default:
      return state;
  }
}

export default productReducers;
