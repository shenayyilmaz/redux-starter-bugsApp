import reducer from "../reducers/bugs";

const createStore = (reducer) => {
  let state;
  let listeners = [];

  const dispatch = (action) => {
    state = reducer(state, action);

    for (let i = 0; i < listeners.length; i++) {
      console.log(listeners[i]);
      listeners[i]();
    }
  };

  const getSate = () => {
    return state;
  };

  const subscribe = (listener) => {
    listeners.push(listener);
  };

  return {
    dispatch,
    getSate,
    subscribe,
  };
};

export default createStore(reducer);
