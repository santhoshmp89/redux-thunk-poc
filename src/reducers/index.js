import { combineReducers } from "redux";
import counter from "./counterReducer";
import userInfo from "./userInfoReducer";
import postReducer from "./postReducer";

const rootReducers = combineReducers({
  counter,
  userInfo,
  postReducer
});

export default rootReducers;
