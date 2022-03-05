import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      black: string;
      white: string;
      lightGrey: string;
      orange: string;
    };

    devices: {
      tablet: string;
      desktop: string;
      bigDesktop: string;
    };
  }
}
