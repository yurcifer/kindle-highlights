import { configureStore } from '@reduxjs/toolkit';
import { inputFileReducer } from "./inputFileReducer";
import { searchQueryReducer } from './searchQueryReducer';

export const store = configureStore({
  reducer: {
    highlights: inputFileReducer,
    searchQuery: searchQueryReducer
  },
  
})