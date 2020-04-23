import * as actions from "../actions/actioinsType";

let id = 0;
const bugReducer = (state = [], action) => {
  switch (action.type) {
    case actions.ADD_BUG:
      return [
        ...state,
        {
          id: ++id,
          description: action.payload.description,
          resolved: false,
        },
      ];

    case actions.REMOVE_BUG:
      console.log(action.payload.id);
      return state.filter((bug) => bug.id !== action.payload.id);
    default:
      return state;
  }
};

export default bugReducer;
