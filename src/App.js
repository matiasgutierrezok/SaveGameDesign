import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.scss';
import { HomeScr } from './screens/home-scr/home-scr';
import { createTheme, ThemeProvider } from '@mui/material';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <HomeScr/>
    ),
  }
]);

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
