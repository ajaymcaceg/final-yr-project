import { combineReducers } from "@reduxjs/toolkit";
import apiReducer from "./apiReducer/apiReducer";
import formReducer from "./formReducer/formReducer";

const reducers = combineReducers({
  form: formReducer,
});

export default reducers;
