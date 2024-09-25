import './App.css';
import Signin from './pages/Signin/Signin';
import Singup from './pages/Signup/Signup';

import {
  Route,
  Routes,
} from "react-router-dom";
import "./index.css";
import PrivateRoute from './router/PrivateRoute';
import Home from './pages/Home/Home';
import PublicRoute from './router/PublicRoute';
import Layout from './components/Layout/Layout';
import Events from './pages/Events/Events';
import Dashboard from './pages/Dashboard/Dashboard';
import Settings from './pages/Settings/Settings';


function App() {
  const sidebarItems = [
    { text: 'Dashboard', path: '/dashboard' },
    { text: 'Events', path: '/events' },
    { text: 'Settings', path: '/settings' },
  ]; 
  return (
      <Routes>
        <Route path="/">
          <Route element={<PrivateRoute />}>
          <Route element={<Layout sidebarItems={sidebarItems}/>}>
            <Route index element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/events" element={<Events />} />
            <Route path="/settings" element={<Settings />} />
          </Route>
          </Route>
          <Route element={<PublicRoute />}>
            <Route path="signin" element={<Signin />} />
            <Route path="signup" element={<Singup />} />
          </Route>
        </Route>
      </Routes>
  );
}

export default App;
