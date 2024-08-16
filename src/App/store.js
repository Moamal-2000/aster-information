import { configureStore } from "@reduxjs/toolkit";
import globalReducer from "../Features/globalReducer";

export const store = configureStore({
  reducer: {
    global: globalReducer,
  },
});
