import { createStore, applyMiddleware, combineReducers, compose } from "redux";

import authReducer from "./reducers/authReducer";
import charterReducer from "./reducers/charterReducer";
import thunk from "redux-thunk";

import { setCurrentUser } from "../store/actions/authActions";
// import jwt from "jwt-decode";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
  auth: authReducer,
  charter:charterReducer
});

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

// setAuthToken(store);

// if (localStorage.token) {
//   store.dispatch(setCurrentUser(jwt(localStorage.token)));
// }

export default store;
