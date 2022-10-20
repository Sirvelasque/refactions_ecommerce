import { configureStore } from "@reduxjs/toolkit";
import itemsReducer from "./items/items";
import brandsReducer from "./filters/filters";

const store = configureStore({
  reducer: {
    brands: brandsReducer,
    items: itemsReducer,
  }
});

export default store;