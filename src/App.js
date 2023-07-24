import { RouterProvider, createBrowserRouter, useRouteError } from 'react-router-dom';
import './App.scss';
import { HomeScr } from './screens/home-scr/home-scr';
import { createTheme, ThemeProvider } from '@mui/material';
import { Error404 } from './screens/error-404/error-404';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

const ErrorBoundary = () => {
  let error = useRouteError();
  console.error(error);
  return <Error404/>;
}

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <HomeScr/>
    ),
    errorElement: <ErrorBoundary/>,
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
