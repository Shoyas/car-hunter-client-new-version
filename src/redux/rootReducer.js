import { combineReducers } from "@reduxjs/toolkit";
import carReducer from "./features/carSlice";

const rootReducer = combineReducers({
  car: carReducer,
});

export default rootReducer;
