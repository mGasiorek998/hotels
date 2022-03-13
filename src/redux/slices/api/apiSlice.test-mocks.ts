/* 
  All mocks used ONLY for testing api reducers 
*/
import { Hotel, RatePlan, Room } from './api.types';

export const mockInitialState = {
  hotelsList: [],
  hotelsLoading: false,
  roomsLoading: false,
};

export const mockFufilledRoomsApiCall = {
  hotelsLoading: false,
  roomsLoading: false,
};

export const mockRoomsList: Room[] = [
  {
    id: 'r1',
    hotelId: 'id1',
    name: 'room 1',
    shortDescription: '',
    longDescription: '',
    images: [],
    occupancy: {
      maxAdults: 2,
      maxChildren: 0,
    },
    bedConfiguration: '',
    disabledAccess: false,
    facilities: [],
  },
  {
    id: 'r2',
    hotelId: 'id1',
    name: 'room 2',
    shortDescription: '',
    longDescription: '',
    images: [],
    occupancy: {
      maxAdults: 5,
      maxChildren: 3,
    },
    bedConfiguration: '',
    disabledAccess: false,
    facilities: [],
  },
  {
    id: 'r3',
    hotelId: 'id1',
    name: 'room 3',
    shortDescription: '',
    longDescription: '',
    images: [],
    occupancy: {
      maxAdults: 2,
      maxChildren: 0,
    },
    bedConfiguration: '',
    disabledAccess: false,
    facilities: [],
  },
];

export const mockRatePlans: RatePlan[] = [
  {
    id: 'rp1',
    shortDescription: '',
    longDescription: '',
    prePayment: '',
    cancellationPolicy: {
      amount: 0,
      applicable: '',
      hour: '',
      name: '',
      penalty: '',
      text: '',
    },
  },
  {
    id: 'rp2',
    shortDescription: '',
    longDescription: '',
    prePayment: '',
    cancellationPolicy: {
      amount: 0,
      applicable: '',
      hour: '',
      name: '',
      penalty: '',
      text: '',
    },
  },
  {
    id: 'rp3',
    shortDescription: '',
    longDescription: '',
    prePayment: '',
    cancellationPolicy: {
      amount: 0,
      applicable: '',
      hour: '',
      name: '',
      penalty: '',
      text: '',
    },
  },
];

export const mockHotelsList: Hotel[] = [
  {
    id: 'id1',
    name: 'hotel 1',
    description: '',
    address1: '',
    address2: '',
    postcode: '',
    town: '',
    country: '',
    countryCode: '',
    starRating: '',
    facilities: [],
    telephone: '',
    email: '',
    images: [],
    checkInHours: '',
    checkInMinutes: '',
    checkOutHours: '',
    checkOutMinutes: '',
    position: {
      latitude: '',
      longitude: '',
      timezone: '',
    },
    roomsDetails: {
      rooms: [],
      ratePlans: [],
    },
  },
  {
    id: 'id2',
    name: 'hotel 2',
    description: '',
    address1: '',
    address2: '',
    postcode: '',
    town: '',
    country: '',
    countryCode: '',
    starRating: '',
    facilities: [],
    telephone: '',
    email: '',
    images: [],
    checkInHours: '',
    checkInMinutes: '',
    checkOutHours: '',
    checkOutMinutes: '',
    position: {
      latitude: '',
      longitude: '',
      timezone: '',
    },
    roomsDetails: {
      rooms: [],
      ratePlans: [],
    },
  },
];

export const mockHotelsListWithRooms = [
  {
    id: 'id1',
    name: 'hotel 1',
    description: '',
    address1: '',
    address2: '',
    postcode: '',
    town: '',
    country: '',
    countryCode: '',
    starRating: '',
    facilities: [],
    telephone: '',
    email: '',
    images: [],
    checkInHours: '',
    checkInMinutes: '',
    checkOutHours: '',
    checkOutMinutes: '',
    position: {
      latitude: '',
      longitude: '',
      timezone: '',
    },
    roomsDetails: {
      rooms: mockRoomsList,
      ratePlans: mockRatePlans,
    },
  },
  {
    id: 'id2',
    name: 'hotel 2',
    description: '',
    address1: '',
    address2: '',
    postcode: '',
    town: '',
    country: '',
    countryCode: '',
    starRating: '',
    facilities: [],
    telephone: '',
    email: '',
    images: [],
    checkInHours: '',
    checkInMinutes: '',
    checkOutHours: '',
    checkOutMinutes: '',
    position: {
      latitude: '',
      longitude: '',
      timezone: '',
    },
    roomsDetails: {
      rooms: [],
      ratePlans: [],
    },
  },
];

export const mockInitialStateForRooms = {
  hotelsList: mockHotelsList,
  hotelsLoading: false,
  roomsLoading: false,
};
