import { configureStore } from '@reduxjs/toolkit';
import { inputFileReducer } from './inputFileReducer';
import { searchQueryReducer } from './searchQueryReducer';
import { modalReducer } from './modalReducer';

export const store = configureStore({
  reducer: {
    highlights: inputFileReducer,
    searchQuery: searchQueryReducer,
    modal: modalReducer,
  },
});
