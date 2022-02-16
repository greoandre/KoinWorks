import {
  SUCCESS_FETCH_PRODUCT,
  SET_LOADING_PRODUCT,
  SET_ERROR_PRODUCT,
} from "../actionTypes";

const initalState = {
  product: [],
  loading: true,
  error: null,
};

function productReducers(state = initalState, action) {
  switch (action.type) {
    case SUCCESS_FETCH_PRODUCT:
      return {
        ...state,
        product: action.payload,
      };

    case SET_LOADING_PRODUCT:
      return {
        ...state,
        loading: action.payload,
      };

    case SET_ERROR_PRODUCT:
      return {
        ...state,
        error: action.payload,
      };

    default:
      return state;
  }
}

export default productReducers;
