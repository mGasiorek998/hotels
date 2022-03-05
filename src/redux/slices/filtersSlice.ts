import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FiltersState } from './filters.d';

const initialState: FiltersState = {
  stars: -1,
  adults: -1,
  kids: -1,
};

// Slice
export const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    apply: (
      state,
      action: PayloadAction<{ filter: string; value: number }>
    ) => ({ ...state, [action.payload.filter]: action.payload.value }),
  },
});

// Actions
export const { apply: applyFilter } = filtersSlice.actions;
