export interface HotelsState {
  list: Hotel[] | null;
  isLoading: boolean;
}

interface Position {
  latitude: string;
  longitude: string;
  timezone: string;
}

export interface Facility {
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
}
