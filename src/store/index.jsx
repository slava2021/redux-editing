import { combineReducers, legacy_createStore, compose } from "redux";
import serviceListReducer from "./serviceList";
import serviceAddReducer from "./serviceAdd";

const reducer = combineReducers({
  serviceList: serviceListReducer,
  serviceAdd: serviceAddReducer,
});

const ReactReduxDevTools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

// function configureStore() {
//   return legacy_createStore(reducer, undefined, compose(ReactReduxDevTools));
// }

const store = legacy_createStore(
  reducer,
  undefined,
  compose(ReactReduxDevTools)
);

// console.log("getState: ", store.getState);

export default store;
