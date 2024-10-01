import { Grid, Stack, Typography } from "@mui/material";
import EventDashboardInfoCard from "../Events/Module/Overview/EventDashboardCards";
import EventInfo from "../Events/Module/Overview/EventInfo";
import EventContributation from "../Events/Module/Overview/EventContributation";
import EventContributors from "../Events/Module/Overview/EventContributors";
import SessionsChart from "./Session";

const Dashboard = () => {
    return <Stack>
        <Typography variant="h6">Dashboard</Typography>
        <Grid container spacing={2} mt={1}>
        {/* Top Cards */}
        <Grid item xs={12} >
            <Grid container spacing={2}>
                <EventDashboardInfoCard />
            </Grid>
            <Grid container spacing={2} mt={0.5}>
                <EventDashboardInfoCard />
            </Grid>
            <Grid container spacing={2} mt={2}>
             <SessionsChart />
            </Grid>
        </Grid>
    </Grid>
    </Stack> 
};

export default Dashboard;
