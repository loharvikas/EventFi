import React from 'react';
import { Box } from '@mui/material';
import Sidebar from './Sidebar';
import { Outlet } from 'react-router-dom';

interface LayoutProps {
  sidebarItems: { text: string; path: string }[];
}

const Layout: React.FC<LayoutProps> = ({ sidebarItems }) => {
  return (
    <Box sx={{ display: 'flex', backgroundColor: 'background.paper' }}>
      <Sidebar items={sidebarItems} />
      <Box sx={{ flexGrow: 1, margin:1, borderRadius:0.5, border: '1px solid', borderColor: 'divider', backgroundColor: 'background.paper' }}>
        <Outlet />
      </Box>
    </Box>
  );
};

export default Layout;
