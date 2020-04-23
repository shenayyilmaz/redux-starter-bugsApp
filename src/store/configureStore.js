import { createStore } from "redux";
import bugReducer from "../reducers/bugs";

const store = createStore(
  bugReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
