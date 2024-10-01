import { Drawer, DrawerProps } from '@mui/material';

const EventFiDrawer = ({ children }: DrawerProps) => {
    console.log('--CHILDREN--', children);
    return <Drawer anchor="left">{children}</Drawer>;
};

export default EventFiDrawer;
