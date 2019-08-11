export default (state = {}, action) => {
  switch (action.type) {
    case "UPDATE_DATA":
      return { data: action.data };
    default:
      return state;
  }
};
