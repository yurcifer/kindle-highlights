import { configureStore } from '@reduxjs/toolkit';
import { inputFileReducer } from "./inputFileReducer";

export const store = configureStore({
  reducer: {
    highlights: inputFileReducer,
  }
})