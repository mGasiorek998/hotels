import { AnyAction } from '@reduxjs/toolkit';
import reducer, { getHotels, getRoomsByHotelId } from './apiSlice';
import {
  mockInitialState,
  mockHotelsList,
  mockInitialStateForRooms,
  mockRatePlans,
  mockRoomsList,
  mockHotelsListWithRooms,
} from './apiSlice.test-mocks';

describe('API Slice: getHotels Action', () => {
  it('has default value of empyt hotel list and not loading', () => {
    expect(reducer(undefined, {} as AnyAction)).toEqual(mockInitialState);
  });

  it('changes loading state when api call is pending', () => {
    const action = { type: getHotels.pending.type };
    expect(reducer(mockInitialState, action as AnyAction)).toEqual({
      ...mockInitialState,
      hotelsLoading: true,
    });
  });

  it('updates hotels list when api call is fulfilled', () => {
    const action = { type: getHotels.fulfilled.type, payload: mockHotelsList };
    expect(reducer(mockInitialState, action as AnyAction)).toEqual({
      ...mockInitialState,
      hotelsList: mockHotelsList,
      hotelsLoading: false,
    });
  });

  it('clears state when api call is rejected', () => {
    const action = { type: getHotels.rejected.type };
    expect(reducer(mockInitialState, action as AnyAction)).toEqual({
      ...mockInitialState,
      hotelsList: [],
      hotelsLoading: false,
    });
  });
});

describe('API Slice: getRoomsByHotelId Action', () => {
  it('changes loading state when api call is pending', () => {
    const action = { type: getRoomsByHotelId.pending.type };
    expect(reducer(mockInitialStateForRooms, action as AnyAction)).toEqual({
      ...mockInitialStateForRooms,
      roomsLoading: true,
    });
  });

  it('updates rooms for hotel when api call is fulfilled', () => {
    const action = {
      type: getRoomsByHotelId.fulfilled.type,
      payload: {
        hotelId: 'id1',
        ratePlans: mockRatePlans,
        rooms: mockRoomsList,
      },
    };
    expect(reducer(mockInitialStateForRooms, action as AnyAction)).toEqual({
      ...mockInitialStateForRooms,
      hotelsList: mockHotelsListWithRooms,
      roomsLoading: false,
    });
  });

  it('clears state when api call is rejected', () => {
    const action = { type: getRoomsByHotelId.rejected.type };
    expect(reducer(mockInitialStateForRooms, action as AnyAction)).toEqual({
      ...mockInitialStateForRooms,
      roomsLoading: false,
    });
  });
});
