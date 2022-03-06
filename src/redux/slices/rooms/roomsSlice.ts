import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import {
  RoomsAPIResponse,
  RoomsAPIResponseWithHotelsId,
  RoomsState,
} from './rooms.types';

const initialState: RoomsState = {
  data: [],
  isLoading: false,
};

// Thunks
export const getRooms = createAsyncThunk(
  'rooms/getRooms',
  async (hotelId: string) => {
    try {
      const response = await fetch(
        `https://obmng.dbm.guestline.net/api/roomRates/OBMNG/${hotelId}`
      );
      const roomsData: RoomsAPIResponse = await response.json();
      return {
        hotelId,
        roomsData,
      };
    } catch (err) {
      console.error(err);
    }
  }
);

// Slice
const roomsSlice = createSlice({
  name: 'rooms',
  initialState,
  reducers: {
    filterByAdultsCount: (state, action: PayloadAction<number>) => {
      console.log('run filters with: ', action.payload);
      return state;
    },
    filterByChildrenCount: (state, action: PayloadAction<number>) => {
      console.log('run children filters with: ', action.payload);
      return state;
    },
  },
  extraReducers: {
    [getRooms.pending.toString()]: (state) => {
      state.isLoading = true;
    },
    [getRooms.fulfilled.toString()]: (
      state,
      action: PayloadAction<RoomsAPIResponseWithHotelsId>
    ) => {
      let exists = false;
      // Check if rooms already in state:
      state.data.forEach((roomData: RoomsAPIResponseWithHotelsId) => {
        if (roomData.hotelId === action.payload.hotelId) {
          exists = true;
        }
      });
      !exists && state.data.push(action.payload);
      state.isLoading = false;
    },
    [getRooms.rejected.toString()]: (state) => {
      state.isLoading = false;
    },
  },
});

// Actions
export const { filterByAdultsCount, filterByChildrenCount } =
  roomsSlice.actions;

export default roomsSlice.reducer;
