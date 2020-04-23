const createStore = () => {
  let state = 5;

  const getSate = () => {
    return state;
  };

  return {
    getSate,
  };
};

export default createStore();
