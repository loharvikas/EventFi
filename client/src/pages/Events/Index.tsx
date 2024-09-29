import { Box, Modal, Stack, Typography } from "@mui/material";
import EventFiButton from "../../components/EventFiButton/EventFiButton";
import EventCreationForm from "./CreateEvent";
import { useState } from "react";
import EventFiModal from "../../components/EventFiModal/EventFiModal";
import { GridColDef } from "@mui/x-data-grid";
import EventData from "./EventData";
import RecentEvents from "./RecentEvents";


const Events = () => {
    const [openEventForm, setOpenEventForm] = useState<boolean>(false);
    return (
        <Box >
            <Stack direction="row" justifyContent="space-between" alignItems="center" borderBottom={1} borderColor="divider" paddingTop={0.5} paddingBottom={0.5} >
                <Stack>
                    <Typography variant="h6" >Events</Typography>
                </Stack>
                <Stack width={'150px'}>
                    <EventFiButton label="Create Event"   onClick={() => setOpenEventForm(true)} />
                </Stack>
            </Stack>
            <EventFiModal open={openEventForm} onClose={() => setOpenEventForm(false)}>
                <EventCreationForm />
            </EventFiModal>
            <Stack>
                <EventData />
            </Stack>
        </Box>
    )
}

export default Events;