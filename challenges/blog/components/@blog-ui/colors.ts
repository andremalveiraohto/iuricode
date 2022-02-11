
const colorsFix = {
  purple: '#574AE8',
  blueLight: '#3EA1DB',
  blueDark: '#1A202C',
  gray: '#717171',
  fontThird: '#F9F9F9',
  red: '#ee4b4b',
}
export const Color = {
  ...colorsFix,
  ligth: {
    bgPrimary: '#F9F9F9',
    bgSecond: '#FFFFFF',
    fontPrimary: '#0E091B',
    fontSecond: '#1A202C',
    header:'#574AE8',
    ...colorsFix
  },
  dark: {
    bgPrimary: '#0E091B',
    bgSecond: '#1A202C',
    fontPrimary: '#FFFFFF',
    fontSecond: '#BDBDBD',
    header:'#090818',
    ...colorsFix
  }
}