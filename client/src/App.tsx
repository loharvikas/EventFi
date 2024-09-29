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
import Dashboard from './pages/Dashboard/Dashboard';
import Settings from './pages/Settings/Settings';
import Events from './pages/Events/Index';
import EventModule from './pages/Events/Module/Index';
import Contribute from './pages/Contribute/Contribute';
import { CalendarDays } from 'lucide-react';


function App() {
  const sidebarItems = [
    { text: 'Dashboard', path: '/dashboard', icon:<CalendarDays />},
    { text: 'Events', path: '/events', icon:<CalendarDays /> },
    { text: 'Overview', path: '/settings',icon:<CalendarDays /> },
    { text: 'Reports', path: '/settings', icon:<CalendarDays /> },
    { text: 'Profile', path: '/settings', icon:<CalendarDays /> },
    { text: 'Settings', path: '/contribute', icon:<CalendarDays /> },
  ]; 
  return (
      <Routes>
        <Route path="/">
          <Route element={<PrivateRoute />}>
          <Route element={<Layout sidebarItems={sidebarItems}/>}>
            <Route index element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/events" element={<Events />} />
            <Route path="/events/:id" element={<EventModule />} />
            <Route path="/settings" element={<Settings />} />
          </Route>
          <Route path="/contribute" element={<Contribute />} />
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
