import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/countAndGridSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
