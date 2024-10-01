import { Box, Drawer, Stack, Typography } from '@mui/material';
import EventFiButton from '../../components/EventFiButton/EventFiButton';
import { useState } from 'react';
import EventData from './EventData';
import EventCreateUpdateForm from './EventForm';

const Events = () => {
    const [openEventForm, setOpenEventForm] = useState<boolean>(false);

    return (
        <Box>
            <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                borderBottom={1}
                borderColor="divider"
            >
                <Stack>
                    <Typography variant="h6">Events</Typography>
                </Stack>
                <Stack width={'150px'}>
                    <EventFiButton
                        label="Create event"
                        onClick={() => setOpenEventForm(true)}
                    />
                </Stack>
            </Stack>
            <Drawer
                open={openEventForm}
                onClose={() => setOpenEventForm(false)}
                anchor="right"
            >
                <EventCreateUpdateForm
                    onClose={() => setOpenEventForm(false)}
                    eventData={null}
                />
            </Drawer>
            <Stack>
                <EventData />
            </Stack>
        </Box>
    );
};

export default Events;
