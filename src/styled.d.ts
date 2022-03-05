import 'styled-components';

declare module 'styled-components' {
  export interface Theme {
    colors: {
      black: string;
      white: string;
      lightGrey: string;
      orange: string;
    };

    devices: {
      phone: string;
      tablet: string;
      desktop: string;
    };
  }
}
