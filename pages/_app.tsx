import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { CssBaseline, ThemeProvider } from '@mui/material'

import { lightTheme } from '../themes';
import { DniProvider } from '../context';

export default function App({ Component, pageProps }: AppProps) {
  
  return (
    <DniProvider>
      <ThemeProvider theme={lightTheme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </DniProvider>
  )
}
