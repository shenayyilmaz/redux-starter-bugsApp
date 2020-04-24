import { createStore } from "redux";
import { devToolsEnhancer } from "redux-devtools-extension";

import bugReducer from "../reducers/bugs";

const store = createStore(bugReducer, devToolsEnhancer({ trace: true }));

export default store;
