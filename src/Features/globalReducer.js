import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

export const globalReducer = createSlice({
  name: "globalReducer",
  initialState,
  reducers: {},
});

export const {} = globalReducer.actions;
export default globalReducer.reducer;
