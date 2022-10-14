import { configureStore } from "@reduxjs/toolkit";
import brandsReducer from "./filters/filters";

const store = configureStore({
  reducer: {
    brands: brandsReducer,
  }
});

export default store;