import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { ThemeProvider } from 'styled-components';
import { theme, lightTheme } from './styles/theme';
import { GlobalStyles } from './styles/GlobalStyles.tsx'

const prefersLight = typeof window !== 'undefined'
  && window.matchMedia?.('(prefers-color-scheme: light)').matches;
const initialTheme = prefersLight ? lightTheme : theme;


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={initialTheme}>
      <GlobalStyles />
      <App />
    </ThemeProvider>
  </StrictMode>,
)
