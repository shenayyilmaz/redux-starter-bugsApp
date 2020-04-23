import reducer from "../reducers/bugs";

const createStore = (reducer) => {
  let state;

  const dispatch = (action) => {
    state = reducer(state, action);
  };

  const getSate = () => {
    return state;
  };

  return {
    dispatch,
    getSate,
  };
};

export default createStore(reducer);
