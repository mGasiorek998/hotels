export interface FiltersState {
  stars: number;
  adults: number;
  kids: number;
  filteredHotels: number;
  filteredRooms: number;
}

export enum FiltersEnum {
  Stars = 'stars',
  Adults = 'adults',
  Kids = 'kids',
}
