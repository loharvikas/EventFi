import { Box, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import EventFiTab from "../../../components/EventFiTab/EventFiTab";
import { useState } from "react";
import EventOverview from "./Overview/EventOverview";
import Guests from "./Guests/Guests";
import { CircleDotDashed } from "lucide-react";


const EventModule = () => {
    const [selectedTab, setSelectedTab] = useState<number>(0);
    const tabs = ['Overview', 'Guest list', 'Settings', 'Dashboard'];
    return (
        <>
            <Stack>
                <Link to="/events">Events</Link>
            </Stack>
            <Stack mt={2} direction={'row'} alignItems={'center'} >
                <Typography variant="h5" mr={1}>Event Module</Typography>
                <CircleDotDashed color="red" size={20} />
            </Stack>
            <Stack>
                <EventFiTab 
                    tabs={tabs}
                    selectedTab={selectedTab}
                    onClick={(_, index) => {
                        setSelectedTab(index);
                    }}
                />
            </Stack>
            <Box pt={2} pb={2}>
                {selectedTab === 0 && <EventOverview />}
                {selectedTab === 1 && <Guests />}
            </Box>
        </>
    )
}

export default EventModule;