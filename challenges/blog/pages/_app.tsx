import '../styles/default.css'
import '../styles/tippy.css'
import 'tippy.js/dist/tippy.css'; // optional
import 'tippy.js/animations/scale-subtle.css';

import { GlobalStyles } from '../styles/global'

import { ThemeProvider } from 'styled-components'
import { Color } from '../components/@blog-ui/colors';

import type { AppProps } from 'next/app'
import { useState } from 'react';

function MyApp({ Component, pageProps }:AppProps) {
  const [isDarkTheme, setIsDarkTheme] = useState(true)
  return (
    <ThemeProvider theme={isDarkTheme ? Color.dark : Color.ligth}>
      <GlobalStyles/>
      <Component {...pageProps} />
    </ThemeProvider>
    )
}

export default MyApp