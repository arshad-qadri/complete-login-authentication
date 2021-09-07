const initialState = {
  token: null,
  id: null,
  error: null,
};
const success = (state, action) => {
  return {
    token: action.token,
    id: action.id,
    login: true,
  };
};
const failed = (state, action) => {
  return {
    error: action.error,
  };
};
const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case "Login":
      return success(state, action);
    case "Login_Failed":
      return failed(state, action);
    case "Logout":
      return { token: null };

    default:
      return state;
  }
};

export default loginReducer;
