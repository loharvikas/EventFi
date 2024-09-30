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
import { Blend, Bolt, BookOpen,  CircleDashed, LayoutDashboard, Settings as SettingsIcon } from 'lucide-react';
import Payment from './pages/Contribute/Payment';
import EventFiAlert from './components/EventFIAlert/EventFiAlert';


function App() {
  const sidebarItems = [
    { text: 'Dashboard', path: '/dashboard', icon:<LayoutDashboard height={20} width={20} /> },
    { text: 'Events', path: '/events', icon:<CircleDashed height={20} width={20} /> },
    { text: 'Overview', path: '/overview',icon:<Blend height={20} width={20} /> },
    { text: 'Contribution', path: '/contribute', icon:<Bolt height={20} width={20} /> },
    { text: 'Reports', path: '/reports', icon:<BookOpen height={20} width={20} />},
    { text: 'Settings', path: '/settings', icon:<SettingsIcon height={20} width={20} /> },
  ]; 
  return (
    <>
      <EventFiAlert />
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
          </Route>
          <Route path="events/:id/:guestId/contribute" element={<Contribute />} />
          <Route path="events/:id/:guestId/contribute/pay" element={<Payment />} />
          <Route element={<PublicRoute />}>
            <Route path="signin" element={<Signin />} />
            <Route path="signup" element={<Singup />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
