import React, { useState } from 'react';
import { Grid, Stack, Typography } from "@mui/material";
import { Pen } from "lucide-react";
import EventFiDashboardCard from "../../../../components/EventFiCard/EventFiDashboardCard";
import EventFiContributation from "./EventFiContributation";
import EventFiModal from "../../../../components/EventFiModal/EventFiModal";
import CreateEvent from "../../CreateEvent";
import EventContributors from "./EventContributors";

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
    const contributors = [
        { name: 'John Doe', email: 'johndoe@gmail.com', contribution: 1000 },
        { name: 'Jane Doe', email: 'janedoe@gmail.com', contribution: 2000 },
        { name: 'Bob Smith', email: 'bobsmith@gmail.com', contribution: 3000 },
        { name: 'Bob Smith', email: 'bobsmith@gmail.com', contribution: 3000 },
        { name: 'Bob Smith', email: 'bobsmith@gmail.com', contribution: 3000 },
        { name: 'Bob Smith', email: 'bobsmith@gmail.com', contribution: 3000 },

        { name: 'Bob Smith', email: 'bobsmith@gmail.com', contribution: 3000 },
        { name: 'Bob Smith', email: 'bobsmith@gmail.com', contribution: 3000 },

        { name: 'Bob Smith', email: 'bobsmith@gmail.com', contribution: 3000 },
        { name: 'Bob Smith', email: 'bobsmith@gmail.com', contribution: 3000 },
        { name: 'Bob Smith', email: 'bobsmith@gmail.com', contribution: 3000 },
        // ... (other contributors)
    ];

    return (
        <Grid container spacing={2}>
            {/* Top Cards */}
            <Grid item xs={12}>
                <Grid container spacing={2}>
                    {['Top Guests', 'Total Revenue', 'Average Donation', 'Donation Goal'].map((title, index) => (
                        <Grid item xs={12} sm={6} md={3} key={index}>
                            <EventFiDashboardCard>
                                <Stack direction="column" alignItems="center" spacing={1} height="100px">
                                    <Typography variant="h6">{title}</Typography>
                                    <Typography variant="h4" color="green">450k</Typography>
                                </Stack>
                            </EventFiDashboardCard>
                        </Grid>
                    ))}
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
                <EventFiContributation />
            </Grid>

            {/* Contributors */}
            <Grid item xs={12} lg={4}>
                <EventContributors contributors={contributors} />
            </Grid>

            {/* Modal */}
            <EventFiModal
                open={openEventForm}
                onClose={() => setOpenEventForm(false)}
            >
                <CreateEvent />
            </EventFiModal>
        </Grid>
    );
};

export default EventOverview;