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

const addUesrReducer = (state = initState, action) => {
  switch (action.type) {
    case "Add_User":
      return success(state, action);
    case "Failed_User":
      return failed(state, action);
    default:
      return state;
  }
};

export default addUesrReducer;
