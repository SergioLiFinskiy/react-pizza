import { configureStore } from "@reduxjs/toolkit";
import filter from "./slises/FilterSlise";
import cart from "./slises/cartSlice";
import pizza from "./slises/pizzasSlice";

export const store = configureStore({
  reducer: {
    filter,
    cart,
    pizza,
  },
});

export type RoootState = ReturnType<typeof store.getState>;
