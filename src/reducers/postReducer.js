const initialState = {
  isFetching: false,
  isError: false,
  data: {}
};

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_POST_REQUEST":
      return {
        isFetching: true,
        isError: false,
        data: {}
      };

    case "FETCH_POST_SUCCESS":
      return {
        isFetching: false,
        isError: false,
        data: action.value
      };

    case "FETCH_POST_ERROR":
      return {
        isFetching: false,
        isError: true,
        data: action.value
      };

    default:
      return state;
  }
};

export default postReducer;
