import { RouterProvider, createBrowserRouter
} from 'react-router-dom';
import './App.scss';
import { HomeScr } from './screens/home-scr/home-scr';
import { createTheme, ThemeProvider } from '@mui/material';
import { ContactMe } from './screens/contact-me/contact-me';
import { WhatsNext } from './screens/whats-next/whats-next';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

const router = createBrowserRouter([
  {
    path: "/contact-me",
    element: (<ContactMe/>),
  },
  {
    path: "/whats-next",
    element: (<WhatsNext/>),
  },
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
