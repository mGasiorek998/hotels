export interface ApiState {
  hotelsList: Hotel[];
  hotelsLoading: boolean;
  roomsLoading: boolean;
}

interface Position {
  latitude: string;
  longitude: string;
  timezone: string;
}

interface Facility {
  code: string;
  name?: string;
}

export interface Image {
  url: string;
  alt?: string;
}

export interface Hotel {
  id: string;
  name: string;
  description: string;
  address1: string;
  address2: string;
  postcode: string;
  town: string;
  country: string;
  countryCode: string;
  starRating: string;
  facilities: Facility[];
  telephone: string;
  email: string;
  images: Image[];
  checkInHours: string;
  checkInMinutes: string;
  checkOutHours: string;
  checkOutMinutes: string;
  position: Position;
  roomsDetails: {
    rooms: Room[];
    ratePlans: RatePlan[];
  };
}

export interface Room {
  id: string;
  hotelId: string;
  name: string;
  shortDescription: string;
  longDescription: string;
  images: Image[];
  occupancy: Occupancy;
  bedConfiguration: string;
  disabledAccess: boolean;
  facilities: Facility[];
}

interface Occupancy {
  maxAdults: number;
  maxChildren: number;
}

export interface RatePlan {
  id: string;
  shortDescription: string;
  longDescription: string;
  prePayment: string;
  cancellationPolicy: CancellationPolicy;
}

export interface RoomsApiResponse {
  ratePlans: RatePlan[];
  rooms: Room[];
}

export interface RoomsPayload extends RoomsApiResponse {
  hotelId: string;
  ratePlans: RatePlan[];
  rooms: Room[];
}

interface CancellationPolicy {
  amount: number;
  applicable: string;
  hour: string;
  name: string;
  penalty: string;
  text: string;
}
