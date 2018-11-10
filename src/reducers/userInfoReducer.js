const initialState = {
  data: {},
  isFetching: false,
  isError: false
};

const userInfo = (state = initialState, action) => {
  switch (action.type) {
    case "GET_USER":
      return { ...state, data: action.value, isFetching: false };

    case "FETCH_USER":
      return {
        ...state,
        isFetching: true
      };

    case "RECIEVED_ERROR":
      return {
        ...state,
        isFetching: false,
        isError: true
      };

    default:
      return state;
  }
};

export default userInfo;
