import React from 'react';
import { Box } from '@mui/material';
import Sidebar from './Sidebar';
import { Outlet } from 'react-router-dom';
import EventFiAlert from '../EventFIAlert/EventFiAlert';
import { useSelector } from 'react-redux';
import { selectAlert } from '../../store/modules/common/selector';

interface LayoutProps {
  sidebarItems: { text: string; path: string, icon:React.ReactNode }[];
}

const Layout: React.FC<LayoutProps> = ({ sidebarItems }) => {
  return (
    <>
      <Box sx={{ display: 'flex', backgroundColor: 'background.paper' }}>
        <Sidebar items={sidebarItems} />
        <Box sx={{ flexGrow: 1, margin:1, borderRadius:0.5, border: '1px solid', borderColor: 'divider', backgroundColor: 'background.paper', pl:3, pr:3, pt:2, pb:1, width:'80vh', overflow:'scroll' }}>
          <Outlet />
        </Box>
      </Box>
    </>
  );
};

export default Layout;
