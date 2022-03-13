/*
  Add theme interface for styled componets 
*/
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

    spacing: {
      xl: string;
      l: string;
      m: string;
      s: string;
    };

    devices: {
      tablet: string;
      desktop: string;
    };
  }
}
