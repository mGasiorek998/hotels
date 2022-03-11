import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FiltersEnum, FiltersState } from './filters.types';

const initialState: FiltersState = {
  stars: 0,
  adults: 0,
  kids: 0,
  filteredHotels: 0,
  filteredRooms: 0,
};

// Slice
export const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    apply: (
      state,
      action: PayloadAction<{ filter: FiltersEnum; value: number }>
    ) => ({ ...state, [action.payload.filter]: action.payload.value }),

    count: (
      state,
      action: PayloadAction<{ listType: string; count: number }>
    ) => {
      if (action.payload.listType === 'hotels') {
        state.filteredHotels = action.payload.count;
      } else {
        state.filteredRooms = action.payload.count;
      }
    },
  },
});

// Actions
export const { apply: applyFilter, count } = filtersSlice.actions;

export default filtersSlice.reducer;
