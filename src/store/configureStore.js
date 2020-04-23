import { createStore } from "redux";
import bugReducer from "../reducers/bugs";

const store = createStore(bugReducer);

export default store;
