import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchPizzas = createAsyncThunk(
  "pizza/fetchPizzasStatus",
  async (params) => {
    const { categoryId, sortId, searchValue, currentPage } = params;
    const { data } = await axios.get(
      `https://6643c2bb6c6a656587083ff3.mockapi.io/Items?${
        categoryId > 0 ? `category=${categoryId}` : ""
      }&sortBy=${sortId.sortProperty}&order=desc&${
        searchValue ? `search=${searchValue}` : ""
      }&limit=4&page=${currentPage}`
    );
    return data;
  }
);

const initialState = {
  items: [],
  status: "loading",
};

const pizzasSlice = createSlice({
  name: "pizza",

  initialState,
  reducers: {
    setItem(state, action) {
      state.items = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchPizzas.pending, (state) => {
        state.status = "loading";
        state.items = [];
      })
      .addCase(fetchPizzas.fulfilled, (state, action) => {
        state.items = action.payload;
        state.status = "sucsess";
      })
      .addCase(fetchPizzas.rejected, (state, action) => {
        state.status = "error";
        state.items = [];
      });
  },
});

export const { setItem } = pizzasSlice.actions;

export default pizzasSlice.reducer;
