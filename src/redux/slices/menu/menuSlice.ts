import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { MenuState } from './menu.types';

const initialState: MenuState = {
  isOpen: false,
};

// Slice
export const menuSlice = createSlice({
  name: 'menu',
  initialState,
  reducers: {
    toggle: (state, payload?: PayloadAction) => ({
      isOpen: !state.isOpen,
    }),
  },
});

// Actions
export const { toggle: toggleMenu } = menuSlice.actions;
