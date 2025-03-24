import { configureStore } from '@reduxjs/toolkit';
import { productReducer } from './slice';

export const Store = configureStore({
  reducer: {
    product: productReducer,
  },
});
