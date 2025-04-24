import { combineReducers } from "@reduxjs/toolkit";
import pageReducer from "./page";
import postCategoryReducer from "./postCategory";

const rootReducer = combineReducers({
  page: pageReducer,
  postCategory: postCategoryReducer,
});

export default rootReducer;
