import store from "./store/configureStore";
import * as actions from "./actions/actioinsType";
import { addBug, removeBug } from "./actions/bugs";

store.subscribe(() => {
  console.log("store is change", store.getState());
});

store.dispatch(addBug());
store.dispatch(addBug());

store.dispatch(removeBug());
