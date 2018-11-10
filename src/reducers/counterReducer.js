const counter = (state = 1, action) => {
  switch (action.type) {
    case "ADD_COUNTER":
      return action.value;

    case "MINUS_COUNTER":
      return action.value;

    default:
      return state;
  }
};

export default counter;
