import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  category: 0,
  sort: {
    name: "Популярности",
    sortProperty: "rating",
  },
};

export const filterSlise = createSlice({
  //Просто название
  name: "filters",
  //Начальное значение
  initialState,
  reducers: {
    setCategoryId(state, action) {
      state.category = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setCategoryId } = filterSlise.actions;

export default filterSlise.reducer;
