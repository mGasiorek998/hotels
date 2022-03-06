import { configureStore } from '@reduxjs/toolkit';
import { filtersSlice } from './slices/filters/filtersSlice';
import { menuSlice } from './slices/menu/menuSlice';

const reducer = {
  filters: filtersSlice.reducer,
  menu: menuSlice.reducer,
};

export default configureStore({
  reducer,
});
