import React from 'react';
import { Box, List, ListItem, ListItemText, Stack, Typography, } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { BrandIcon } from '../../assets/icons/BrandLogo';

interface SidebarProps {
  items: { text: string; path: string }[];
}

const Sidebar: React.FC<SidebarProps> = ({ items }) => {
  return (
    <Box
      sx={{
        width: 250,
        backgroundColor: 'background.paper',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        padding:'0.1rem 1rem',
      }}
    >
      <Stack sx={{ padding:'1rem 0.5rem', borderBottom: '1px solid', borderColor: 'divider' }} display={'flex'} justifyContent={'center'} >
        <BrandIcon />
      </Stack>
      <List>
        {items.map((item, index) => (
          <NavLink
            to={item.path}
            key={index}
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
            }
          >
            <ListItem >
              <ListItemText primary={item.text} />
            </ListItem>
          </NavLink>
        ))}
      </List>
      <Box sx={{ mt: 'auto', p: 2, borderTop: '1px solid', borderColor: 'divider' }}>
        <BrandIcon />
      </Box>
    </Box>
  );
};

export default Sidebar;
