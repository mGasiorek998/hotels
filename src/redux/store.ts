import { configureStore } from '@reduxjs/toolkit';
import filtersReducer from './slices/filters/filtersSlice';
import menuReducer from './slices/menu/menuSlice';
import apiReducer from './slices/hotels/apiSlice';

const reducer = {
  filters: filtersReducer,
  menu: menuReducer,
  hotels: apiReducer,
};

export default configureStore({
  reducer,
});
