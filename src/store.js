import { applyMiddleware, compose, combineReducers, createStore } from "redux";
import accountReducer from "./features/accounts/accountSlice";
import customerReducer from "./features/customers/customerSlice";
import { logger } from "redux-logger/src";

const rootReducer = combineReducers({
  account: accountReducer,
  customer: customerReducer,
});

// listens to every action and logs into console (middleware)
const middlewares = [logger];
const composedEnhancers = compose(applyMiddleware(...middlewares));

const store = createStore(rootReducer, undefined, composedEnhancers);

export default store;
