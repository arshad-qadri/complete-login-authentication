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

const Redituser = (state = initialstate, action) => {
  switch (action.type) {
    case "User_Edit":
      return success(state, action);
    case "Edit_Failed":
      return faill(state, action);
    default:
      return state;
  }
};
