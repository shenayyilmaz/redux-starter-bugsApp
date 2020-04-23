import store from "./store/configureStore";
import * as actions from "./actions/actioinsType";
import { addBug, removeBug } from "./actions/bugs";

store.subscribe(() => {
  console.log("store is change", store.getState());
});

store.dispatch(addBug("BUG 3"));
store.dispatch(addBug("BUG 4"));

store.dispatch(removeBug(1));
