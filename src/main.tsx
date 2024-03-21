import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { chakraCustomTheme, chakraCustomTheme as theme } from './styles/Theme';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ChakraProvider theme={chakraCustomTheme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <App />
    </ChakraProvider>
  </React.StrictMode>,
)
