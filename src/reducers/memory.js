const initState = {
  data: [],
};
const memoryReducer = (state = initState, action) => {
  const { id, title, img, desc } = action;
  switch (action.type) {
    case "ADD_MEM":
      return {
        ...state,

        data: [...state.data, { id, title, img, desc }],
      };

    default:
      return state;
  }
};

export default memoryReducer;
