import axios from "axios";

const fetch_user = () => {
  return {
    type: "FETCH_USER"
  };
};

const get_user = val => {
  return {
    type: "GET_USER",
    value: val
  };
};

const recieved_error = () => {
  return {
    type: "RECIEVED_ERROR"
  };
};

const get_user_info = () => {
  return function(dispatch) {
    dispatch(fetch_user());
    axios
      .get("https://reqres.in/api/users/2")
      .then(data => {
        if (data.status === 200) {
          dispatch(get_user(data.data));
        } else {
          dispatch(recieved_error());
        }
      })
      .catch(error => {
        console.log(error);
        dispatch(recieved_error());
      });
  };
};

export { get_user_info, fetch_user, get_user, recieved_error };
