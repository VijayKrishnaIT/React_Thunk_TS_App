//{ type: "FETCH", value: records }
//{ type: "INSERT", value: result }
//{ type: "UPDATE", value: result }
//{ type: "DELETE", value: result }
const initialState = {
  data: [],
};
const reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case "FETCH":
      return {
        ...state,
        data: state.data.concat(action.value),
      };
      break;
    case "INSERT":
      return {
        ...state,
        status: action.value,
      };
      break;
    case "UPDATE":
      return {
        ...state,
        status: action.value,
      };
      break;
    case "DELETE":
      return {
        ...state,
        status: action.value,
      };
      break;
  }
  return state;
};
export default reducer;
