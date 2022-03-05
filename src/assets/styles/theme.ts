import { DefaultTheme } from 'styled-components';

export const theme: DefaultTheme = {
  colors: {
    black: '#000',
    white: '#FFF',
    lightGrey: '#C7C7C7',
    orange: '#FDCC0D',
  },
  devices: {
    tablet: '@media (min-width: 768px)',
    desktop: '@media (min-width: 1024px)',
    bigDesktop: '@media (min-width: 1280px)',
  },
};
