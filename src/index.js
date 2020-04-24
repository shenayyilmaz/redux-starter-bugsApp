import store from "./store/configureStore";
import * as actions from "./store/bugs";

// import store3 from "./reducerFromScratch/customStore";

// store3.subscribe(() => {
//   console.log("store is changed");
// });

// store3.dispatch(addBug("bug 1111"));
// console.log("store", store3.getSate());

store.subscribe(() => {
  console.log("store is change", store.getState());
});

store.dispatch(actions.addBug("BUG 3"));
store.dispatch(actions.addBug("BUG 4"));

store.dispatch(actions.resolvedBug(2));
store.dispatch(actions.removeBug(1));
