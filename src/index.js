import store from "./store/configureStore";
import { addBug, removeBug, resolvedBug } from "./actions/bugs";

store.subscribe(() => {
  console.log("store is change", store.getState());
});

store.dispatch(addBug("BUG 3"));
store.dispatch(addBug("BUG 4"));

store.dispatch(resolvedBug(2));
store.dispatch(removeBug(1));
