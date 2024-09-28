import { Stack, Typography } from "@mui/material";
import EventFiButton from "../../../../components/EventFiButton/EventFiButton";
import GuestsData from "./GuestsData";
import EventFiModal from "../../../../components/EventFiModal/EventFiModal";
import { useState } from "react";
import GuestCreationForm from "./CreateGuest";


const Guests = () => {
    const [openGuestForm, setOpenGuestForm] = useState<boolean>(false);
    return (
        <>
            <Stack width={100} mb={1}>
                <EventFiButton label="Add Guest" onClick={() => setOpenGuestForm(true)} />
            </Stack>
            <GuestsData />
            <EventFiModal open={openGuestForm} onClose={() => setOpenGuestForm(false)}>
                <GuestCreationForm />
            </EventFiModal>
        </>
    );
}

export default Guests;