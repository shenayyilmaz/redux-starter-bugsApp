import * as actions from "../actions/actioinsType";

export const addBug = () => ({
  type: actions.ADD_BUG,
  payload: {
    description: "bug1",
  },
});

export const removeBug = () => ({
  type: actions.REMOVE_BUG,
  payload: {
    id: 1,
  },
});
