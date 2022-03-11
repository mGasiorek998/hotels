import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FiltersEnum, FiltersState } from './filters.types';

const initialState: FiltersState = {
  stars: 0,
  adults: 0,
  kids: 0,
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
  },
});

// Actions
export const { apply: applyFilter } = filtersSlice.actions;

export default filtersSlice.reducer;
