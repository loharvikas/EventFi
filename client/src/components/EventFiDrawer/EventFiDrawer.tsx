import { Drawer, DrawerProps } from '@mui/material';

const EventFiDrawer = ({ children }: DrawerProps) => {
    return <Drawer anchor="left">{children}</Drawer>;
};

export default EventFiDrawer;
