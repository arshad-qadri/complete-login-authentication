const initialstate = {
  data: null,
  error: null,
};

const success = (state, action) => {
  return {
    data: action.data,
  };
};
const faill = (state, action) => {
  return {
    error: action.error,
  };
};

const deleteReducer = (state = initialstate, action) => {
  switch (action.type) {
    case "Delete_Success":
      return success(state, action);
    case "Delete_Failed":
      return faill(state, action);
    default:
      return state;
  }
};

export default deleteReducer;
