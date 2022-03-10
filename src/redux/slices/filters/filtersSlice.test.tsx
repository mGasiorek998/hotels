import { AnyAction } from '@reduxjs/toolkit';
import { FiltersEnum } from './filters.types';
import reducer, { applyFilter } from './filtersSlice';
describe('Filters Slice', () => {
  it('has default state of 0s', () => {
    expect(reducer(undefined, {} as AnyAction)).toEqual({
      stars: 0,
      adults: 0,
      kids: 0,
    });
  });

  it('adds value to correct state', () => {
    expect(
      reducer(
        undefined,
        applyFilter({
          filter: FiltersEnum.Stars,
          value: 3,
        })
      )
    ).toEqual({
      stars: 3,
      adults: 0,
      kids: 0,
    });
    expect(
      reducer(
        undefined,
        applyFilter({
          filter: FiltersEnum.Adults,
          value: 3,
        })
      )
    ).toEqual({
      stars: 0,
      adults: 3,
      kids: 0,
    });
    expect(
      reducer(
        undefined,
        applyFilter({
          filter: FiltersEnum.Kids,
          value: 3,
        })
      )
    ).toEqual({
      stars: 0,
      adults: 0,
      kids: 3,
    });
  });
});
