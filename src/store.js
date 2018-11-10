import { createStore, applyMiddleware } from "redux";
import rootReducers from "./reducers/";
import thunk from "redux-thunk";
import logger from "redux-logger";

const store = createStore(rootReducers, applyMiddleware(logger, thunk));

export default store;
