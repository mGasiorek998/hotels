import { configureStore } from '@reduxjs/toolkit';
import filtersReducer from './slices/filters/filtersSlice';
import menuReducer from './slices/menu/menuSlice';
import hotelsReducer from './slices/hotels/hotelsSlice';
import roomsReducer from './slices/rooms/roomsSlice';

const reducer = {
  filters: filtersReducer,
  menu: menuReducer,
  hotels: hotelsReducer,
  rooms: roomsReducer,
};

export default configureStore({
  reducer,
});
