import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      black: string;
      white: string;
      lightGrey: string;
      orange: string;
    };

    fontSizes: {
      xl: string;
      l: string;
      m: string;
      s: string;
    };

    devices: {
      tablet: string;
      desktop: string;
      bigDesktop: string;
    };
  }
}
