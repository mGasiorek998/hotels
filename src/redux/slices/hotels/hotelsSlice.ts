import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { HotelsState, Hotel } from './hotels.types';

const initialState: HotelsState = {
  list: [],
  isLoading: false,
};

// Thunks
export const getHotels = createAsyncThunk('hotels/getHotels', async () => {
  try {
    const response = await fetch(
      'https://obmng.dbm.guestline.net/api/hotels?collection-id=OBMNG'
    );
    const hotelsData: Hotel[] = await response.json();

    return hotelsData;
  } catch (err) {
    console.error(err);
  }
});

// Slice
const hotelsSlice = createSlice({
  name: 'hotels',
  initialState,
  reducers: {
    filterByStarsCount: (state, action: PayloadAction<number>) => {
      console.log('run stars filters with: ', action.payload);
      return state;
    },
  },
  extraReducers: {
    [getHotels.pending.toString()]: (state) => {
      state.isLoading = true;
    },
    [getHotels.fulfilled.toString()]: (
      state,
      action: PayloadAction<Hotel[]>
    ) => {
      state.list = action.payload;
      state.isLoading = false;
    },
    [getHotels.rejected.toString()]: (state) => {
      state.list = null;
      state.isLoading = false;
    },
  },
});

// Actions
export const { filterByStarsCount } = hotelsSlice.actions;

export default hotelsSlice.reducer;
