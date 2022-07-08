import { StatusBar } from 'expo-status-bar';

import { ThemeProvider } from 'styled-components';

import theme from './src/global/styles/theme';
import { Home } from './src/pages/Home';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <StatusBar backgroundColor="transparent" translucent />
      <Home />
    </ThemeProvider>
  );
}
