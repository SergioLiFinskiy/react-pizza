import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../redux/slises/FinlerSlise";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

console.log(store);
