import { configureStore } from "@reduxjs/toolkit";
import comicsReducer from "./features/slices/comicsSlice";

export const store = configureStore({
  reducer: {
    comics: comicsReducer,
  },
});
