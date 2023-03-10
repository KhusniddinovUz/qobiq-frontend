import rootReducer from "./reducers";
import { createStore } from "redux";
import { applyMiddleware } from "redux";
import thunk from "redux-thunk";

const initialState = {};

const middlewares = [thunk];

const store = createStore(
  rootReducer,
  initialState,
  applyMiddleware(...middlewares)
);

export default store;
