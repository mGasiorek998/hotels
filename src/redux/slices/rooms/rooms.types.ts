import { Image, Facility } from '../hotels/hotels.types';

export interface RoomsState {
  data: RoomsAPIResponseWithHotelsId[];
  isLoading: boolean;
}

export interface Room {
  id: string;
  hotelId: string;
  name: string;
  shortDescription: string;
  longDescription: string;
  images: Image[];
  occupancy: string;
  bedConfiguration: string;
  disabledAccess: string;
  facilities: Facility[];
}

export interface RatePlan {
  id: string;
  shortDescription: string;
  longDescription: string;
  prePayment: string;
  cancellationPolicy: CancellationPolicy;
}

export interface RoomsAPIResponse {
  roomsData: {
    ratePlans: RatePlan[];
    rooms: Room[];
  };
}

export interface RoomsAPIResponseWithHotelsId extends RoomsAPIResponse {
  hotelId: string;
}

interface CancellationPolicy {
  amount: number;
  applicable: string;
  hour: string;
  name: string;
  penalty: string;
  text: string;
}
