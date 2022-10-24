import { configureStore } from "@reduxjs/toolkit";
import itemsReducer from "./items/items";
import filtersReducer from "./filters/filters";

const store = configureStore({
  reducer: {
    brands: filtersReducer,
    items: itemsReducer,
  }
});

export default store;