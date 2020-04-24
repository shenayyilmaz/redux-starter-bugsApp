/// action types
const ADD_BUG = "ADD_BUG";
const REMOVE_BUG = "REMOVE_BUG";
const RESOLVED_BUG = "RESOLVED_BUG";

/// action generators
export const addBug = (description) => ({
  type: ADD_BUG,
  payload: {
    description,
  },
});

export const removeBug = (id) => ({
  type: REMOVE_BUG,
  payload: {
    id,
  },
});

export const resolvedBug = (id) => ({
  type: RESOLVED_BUG,
  payload: {
    id,
    resolved: true,
  },
});

/// reducer
let id = 0;
const reducer = (state = [], action) => {
  switch (action.type) {
    case ADD_BUG:
      return [
        ...state,
        {
          id: ++id,
          description: action.payload.description,
          resolved: false,
        },
      ];

    case REMOVE_BUG:
      return state.filter((bug) => bug.id !== action.payload.id);

    case RESOLVED_BUG:
      console.log("resolved", action.payload.id);
      return state.map((bug) =>
        bug.id === action.payload.id ? { ...bug, resolved: true } : bug
      );

    default:
      return state;
  }
};

export default reducer;
