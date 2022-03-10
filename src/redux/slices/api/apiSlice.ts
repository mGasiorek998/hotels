import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { ApiState, Hotel, RoomsApiResponse, RoomsPayload } from './api.types';

const initialState: ApiState = {
  hotelsList: [],
  hotelsLoading: false,
  roomsLoading: false,
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

export const getRoomsByHotelId = createAsyncThunk(
  'hotels/getRoomsByHotelId',
  async (hotelId: string) => {
    try {
      const response = await fetch(
        `https://obmng.dbm.guestline.net/api/roomRates/OBMNG/${hotelId}`
      );

      const data: RoomsApiResponse = await response.json();

      return {
        hotelId,
        ...data,
      };
    } catch (error) {
      console.error(error);
    }
  }
);

// Slice
const apiSlice = createSlice({
  name: 'hotels',
  initialState,
  reducers: {},
  extraReducers: {
    [getHotels.pending.toString()]: (state) => {
      state.hotelsLoading = true;
    },
    [getHotels.fulfilled.toString()]: (
      state,
      action: PayloadAction<Hotel[]>
    ) => {
      state.hotelsList = action.payload;
      state.hotelsLoading = false;
    },
    [getHotels.rejected.toString()]: (state) => {
      state.hotelsList = [];
      state.hotelsLoading = false;
    },
    [getRoomsByHotelId.pending.toString()]: (state) => {
      state.roomsLoading = true;
    },
    [getRoomsByHotelId.fulfilled.toString()]: (
      state,
      { payload: { rooms, ratePlans, hotelId } }: PayloadAction<RoomsPayload>
    ) => {
      state.hotelsList.forEach((hotel) => {
        if (hotel.id === hotelId) {
          hotel.roomsDetails = {
            rooms,
            ratePlans,
          };
        }
      });
      state.roomsLoading = false;
    },
    [getRoomsByHotelId.rejected.toString()]: (state) => {
      state.roomsLoading = false;
    },
  },
});

export default apiSlice.reducer;
