import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isMobileNavActive: false,
  isHeaderActive: false,
};

export const globalSlice = createSlice({
  name: "globalSlice",
  initialState,
  reducers: {
    updateGlobalState: (state, { payload }) => {
      state[payload.key] = payload.value;
    },
  },
});

export const { updateGlobalState } = globalSlice.actions;
export default globalSlice.reducer;
