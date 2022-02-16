import { createStore, applyMiddleware } from "redux";
import logger from "./middlewares/logger";
import thunk from "redux-thunk";
import rootReducer from "./reducers/rootReducers";

let store = createStore(rootReducer, applyMiddleware(logger, thunk));

export default store;
