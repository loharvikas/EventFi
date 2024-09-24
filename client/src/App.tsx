import './App.css';
import theme from './designSystem';
import { CssBaseline, ThemeProvider } from '@mui/material';
import Signin from './pages/Signin/Signin';
import Singup from './pages/Signup/Signup';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Signin />,
  },
  {
    path: "/signup",
    element: <Singup />,
    
  },
]);

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline enableColorScheme/>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
