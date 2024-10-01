import React from 'react';
import {
    Box,
    List,
    ListItem,
    ListItemText,
    Stack,
    Typography,
} from '@mui/material';
import { NavLink } from 'react-router-dom';
import { BrandIcon } from '../../assets/icons/BrandLogo';

interface SidebarProps {
    items: { text: string; path: string; icon: React.ReactNode }[];
}

const Sidebar: React.FC<SidebarProps> = ({ items }) => {
    return (
        <Box
            sx={{
                width: 200,
                backgroundColor: 'background.paper',
                height: '100vh',
                display: 'flex',
                flexDirection: 'column',
                padding: '0.1rem 1rem',
            }}
        >
            <Stack
                sx={{
                    padding: '1rem 0.5rem',
                    borderBottom: '1px solid',
                    borderColor: 'divider',
                }}
                display={'flex'}
                justifyContent={'center'}
            >
                <BrandIcon />
            </Stack>
            <List>
                {items.map((item, index) => (
                    <NavLink
                        to={item.path}
                        key={index}
                        className={({ isActive, isPending }) =>
                            isPending
                                ? 'nav-link-pending'
                                : isActive
                                  ? 'nav-link-active'
                                  : 'nav-link'
                        }
                    >
                        {({ isActive }) => (
                            <ListItem
                                sx={{
                                    mb: 1.5,
                                    ...(isActive && {
                                        backgroundColor: 'action.hover',
                                    }),
                                }}
                            >
                                {item.icon}
                                <ListItemText
                                    primary={item.text}
                                    sx={{
                                        ml: 1.5,
                                    }}
                                />
                            </ListItem>
                        )}
                    </NavLink>
                ))}
            </List>
            <Box
                sx={{
                    mt: 'auto',
                    borderTop: '1px solid',
                    borderColor: 'divider',
                    padding: '1rem 0.5rem',
                }}
            >
                <BrandIcon />
            </Box>
        </Box>
    );
};

export default Sidebar;
