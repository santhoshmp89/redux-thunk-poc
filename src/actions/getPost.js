import axios from "axios";

const fetchPostRequest = () => ({
  type: "FETCH_POST_REQUEST"
});

const fetchPostSuccess = val => ({
  type: "FETCH_POST_SUCCESS",
  value: val
});

const fetchPostError = error => ({
  type: "FETCH_POST_ERROR",
  value: error
});

const getPosts = id => {
  return function(dispatch) {
    dispatch(fetchPostRequest());
    return axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(data => {
        dispatch(fetchPostSuccess(data));
      })
      .catch(error => {
        dispatch(fetchPostError(error));
      });
  };
};

export { getPosts };
