import { Grid } from '@mui/material';
import EventContributation from './EventContributation';
import EventContributors from './EventContributors';
import EventDashboardInfoCard from './EventDashboardCards';

import { Event } from '../../../../types/event';
import EventInfo from './EventInfo';

const EventOverview = () => {
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
                <EventInfo />
            </Grid>

            {/* Contribution */}
            <Grid item xs={12} md={6} lg={4}>
                <EventContributation />
            </Grid>

            {/* Contributors */}
            <Grid item xs={12} lg={4}>
                <EventContributors />
            </Grid>
        </Grid>
    );
};

export default EventOverview;
