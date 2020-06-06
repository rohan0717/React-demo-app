const initialState = {
  page: "Tiles",
};

const reducer = (state = initialState, action) => {
  return {
    ...state,
    page: action.value,
  };
};

export default reducer;
