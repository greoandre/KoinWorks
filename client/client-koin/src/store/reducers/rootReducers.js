import { combineReducers } from "redux";
import productReducers from "./productReducers";
import cartReducers from "./cartReducers";

const rootReducer = combineReducers({
  productReducers,
  cartReducers,
});

export default rootReducer;
