import { applyMiddleware, compose, combineReducers, createStore } from "redux";
import { thunk } from "redux-thunk";
import accountReducer from "./features/accounts/accountSlice";
import customerReducer from "./features/customers/customerSlice";
import { logger } from "redux-logger/src";

const rootReducer = combineReducers({
  account: accountReducer,
  customer: customerReducer,
});

// logger - listens to every action and logs into console (middleware)
// thunk - handle async action (API calls, side effects, etc.)
const middlewares = [thunk, logger];
const composedEnhancers = compose(applyMiddleware(...middlewares));

const store = createStore(rootReducer, undefined, composedEnhancers);

export default store;
