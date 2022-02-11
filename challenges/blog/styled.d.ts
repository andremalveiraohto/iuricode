

import 'styled-components';
interface IPalette {
  main: string
  contrastText: string
}
declare module 'styled-components' {
  export interface DefaultTheme {
    bgPrimary?: string; 
    bgSecond?: string; 
    fontPrimary?: string; 
    fontSecond?: string; 
    fontThird?: string; 
    purple?: string; 
    blueLight?: string; 
    blueDark?: string; 
    gray?: string; 
    red?: string;
    header?: string;
  }
}