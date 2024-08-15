import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchValue: "",
  currentPage: 0,
  categoryId: 0,
  sort: {
    name: "Популярности",
    sortProperty: "rating",
  },
};

const filterSlise = createSlice({
  //Просто название
  name: "filters",
  //Начальное значение
  initialState,
  reducers: {
    setCategoryId(state, action) {
      state.category = action.payload;
    },
    setCurrentPage(state, action) {
      state.currentPage = action.payload;
    },
    setFilters(state, action) {
      state.currentPage = Number(action.payload.currentPage);
      state.sort = action.payload.sort;
      state.categoryId = Number(action.payload.categoryId);
    },
  },
});

// Action creators are generated for each case reducer function
export const { setCategoryId, setCurrentPage, setFilters } =
  filterSlise.actions;
// export const selectSort = (state) => state.filters.sort;

export default filterSlise.reducer;
