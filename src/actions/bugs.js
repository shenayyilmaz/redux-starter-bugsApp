import * as actions from "../actions/actioinsType";

export const addBug = (description) => ({
  type: actions.ADD_BUG,
  payload: {
    description,
  },
});

export const removeBug = (id) => ({
  type: actions.REMOVE_BUG,
  payload: {
    id,
  },
});

export const resolvedBug = (id) => ({
  type: actions.RESOLVED_BUG,
  payload: {
    id,
    resolved: true,
  },
});
