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
const userListReducer = (state = initState, action) => {
  switch (action.type) {
    case "User_List":
      return success(state, action);

    case "User_Failed":
      return failed(state, action);

    default:
      return state;
  }
};

export default userListReducer;
