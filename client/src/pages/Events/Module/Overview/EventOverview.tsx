import React, { useState } from 'react';
import { Grid, Stack, Typography } from "@mui/material";
import { Pen } from "lucide-react";
import EventFiDashboardCard from "../../../../components/EventFiCard/EventFiDashboardCard";
import EventContributation from "./EventContributation";
import EventFiModal from "../../../../components/EventFiModal/EventFiModal";
import CreateEvent from "../../CreateEvent";
import EventContributors from "./EventContributors";
import EventDashboardInfoCard from './EventDashboardCards';

const EventOverview: React.FC = () => {
    const [openEventForm, setOpenEventForm] = useState<boolean>(false);
    const data = {
        eventName: 'Annual Gala',
        eventDate: '2024-01-01',
        addressLine1: '123 Main St',
        addressLine2: 'Suite 1',
        city: 'New York',
        state: 'NY',
        zipCode: 10001,
        country: 'USA',
    };

    return (
        <Grid container spacing={2}>
            {/* Top Cards */}
            <Grid item xs={12}>
                <Grid container spacing={2}>
                    <EventDashboardInfoCard />
                </Grid>
            </Grid>

            {/* Event Info */}
            <Grid item xs={12} md={6} lg={4}>
                <EventFiDashboardCard
                    variant="outlined"
                    boxShadow="none"
                    border="1px solid"
                    borderColor="divider"
                    sx={{ height: '100%', minHeight: '400px' }}
                >
                    <Stack direction="row" alignItems="center" mb={2}>
                        <Typography variant="h5" mr={1}>Event Info</Typography>
                        <Pen size={14} onClick={() => setOpenEventForm(true)} style={{cursor:'pointer'}} />
                    </Stack>
                    <Grid container spacing={2}>
                        {Object.entries(data).map(([key, value]) => (
                            <Grid item xs={6} key={key}>
                                <Typography variant="subtitle2">{key.replace(/([A-Z])/g, ' $1').trim()}</Typography>
                                <Typography variant="body1">{value}</Typography>
                            </Grid>
                        ))}
                    </Grid>
                </EventFiDashboardCard>
            </Grid>

            {/* Contribution */}
            <Grid item xs={12} md={6} lg={4}>
                <EventContributation />
            </Grid>

            {/* Contributors */}
            <Grid item xs={12} lg={4}>
                <EventContributors  />
            </Grid>

            {/* Modal */}
            <EventFiModal
                open={openEventForm}
                onClose={() => setOpenEventForm(false)}
            >
                <CreateEvent 
                    onClose={() => setOpenEventForm(false)}
                />
            </EventFiModal>
        </Grid>
    );
};

export default EventOverview;