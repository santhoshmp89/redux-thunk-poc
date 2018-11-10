const addCounter = a => {
  return {
    type: "ADD_COUNTER",
    value: ++a
  };
};

const minusReducer = a => {
  return {
    type: "MINUS_COUNTER",
    value: --a
  };
};

export { addCounter, minusReducer };
