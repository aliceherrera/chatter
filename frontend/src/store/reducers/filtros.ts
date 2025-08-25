import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import * as enums from "../../utils/enums/Category";

type filterState = {
  term?: string;
  critery: "favorite" | "follow" | "todos";
  value?: enums.Favorite | enums.Follow;
};

const initialState: filterState = {
  term: "",
  critery: "todos",
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    changeTerm(state, action: PayloadAction<string>) {
      state.term = action.payload;
    },
    changeFilter(
      state,
      action: PayloadAction<{
        critery: filterState["critery"];
        value?: filterState["value"];
      }>
    ) {
      state.critery = action.payload.critery;
      state.value = action.payload.value;
    },
  },
});

export const { changeTerm, changeFilter } = filterSlice.actions;

export default filterSlice.reducer;
