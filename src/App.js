import './App.scss';
import { HomeScr } from './screens/home-scr/home-scr';
import { createTheme, ThemeProvider } from '@mui/material';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <HomeScr/>
    </ThemeProvider>
  );
}

export default App;
