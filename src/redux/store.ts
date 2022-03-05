import { configureStore } from '@reduxjs/toolkit';
import { filtersSlice } from './slices/filtersSlice';

const reducer = {
  filters: filtersSlice.reducer,
};

export default configureStore({
  reducer,
});
