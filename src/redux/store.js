import { configureStore } from "@reduxjs/toolkit";
import filter from "./slises/FilterSlise";

export const store = configureStore({
  reducer: {
    filter,
  },
});
