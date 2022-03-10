import { AnyAction } from '@reduxjs/toolkit';
import reducer, { toggleMenu } from './menuSlice';

describe('Menu Slice', () => {
  it('should have default value of false', () => {
    expect(reducer(undefined, {} as AnyAction)).toEqual({
      isOpen: false,
    });
  });

  it('changes the state, when "toggleMenu" is called', () => {
    const initialState = {
      isOpen: false,
    };

    // toggle on (from false to true)
    expect(reducer(initialState, toggleMenu())).toEqual({
      isOpen: !initialState.isOpen,
    });

    initialState.isOpen = true;

    // toggle off (from true to false)
    expect(reducer(initialState, toggleMenu())).toEqual({
      isOpen: !initialState.isOpen,
    });
  });
});
