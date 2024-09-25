import { Box, Modal, Stack, Typography } from "@mui/material";
import EventFiButton from "../../components/EventFiButton/EventFiButton";
import EventCreationForm from "./CreateEvent";
import { useState } from "react";


const Events = () => {
    const [openEventForm, setOpenEventForm] = useState<boolean>(false);

    return (
        <Box >
            <Stack direction="row" justifyContent="space-between" alignItems="center" borderBottom={1} borderColor="divider" padding={1}>
                <Stack>
                    <Typography variant="subtitle1">Events</Typography>
                </Stack>
                <Stack>
                    <EventFiButton label="Create Event" variant="text"  onClick={() => setOpenEventForm(true)} />
                </Stack>
            </Stack>
            <Modal open={openEventForm} onClose={() => setOpenEventForm(false)}>
                <EventCreationForm />
            </Modal>
        </Box>
    )
}

export default Events;