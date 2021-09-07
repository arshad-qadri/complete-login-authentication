const initialState = {
  data: null,
  error: null,
  id: null,
};

const successful = (state, action) => {
  return {
    ...state,
    data: action.data,
    id: action.id,
  };
};
const fail = (state, action) => {
  return {
    error: action.error,
  };
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "Register":
      return successful(state, action);
    case "Failed":
      return fail(state, action);
    default:
      return state;
  }
};

export default userReducer;
