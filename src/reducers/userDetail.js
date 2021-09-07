const initState = {
  data: null,
  error: null,
};

const success = (state, action) => {
  return {
    data: action.data,
  };
};

const failed = (state, action) => {
  return {
    error: action.error,
  };
};

const userDetailReducer = (state = initState, action) => {
  switch (action.type) {
    case "User_Details":
      return success(state, action);

    case "user_Failed":
      return failed(state, action);

    default:
      return state;
  }
};

export default userDetailReducer;
