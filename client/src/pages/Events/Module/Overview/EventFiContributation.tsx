
import { Box, Typography } from "@mui/material";
import EventFiDashboardCard from "../../../../components/EventFiCard/EventFiDashboardCard"
import EventFiTimeline from "../../../../components/EventFiTimeline/EventFiTimeline"


const EventFiContributation = () => {
    const items = [
        {
            title: 'Event Name',
            subcontent: 'Annual Gala',
            time: '10 mins ago',
        },
        {
            title: 'Event Date',
            subcontent: '2024-01-01',
            time: '1 hour ago',
        },
        {
            title: 'Address',
            subcontent: '123 Main St, USA',
            time: '2 hours ago',
        },
        {
            title: 'City',
            subcontent: 'New York',
            time: '3 hours ago',
            
        },
        {
            title: 'City',
            subcontent: 'New York',
            time: '3 hours ago',
            
        },
        {
            title: 'City',
            subcontent: 'New York',
            time: '3 hours ago',
            
        },
        {
            title: 'City',
            subcontent: 'New York',
            time: '3 hours ago',
            
        },
        {
            title: 'City',
            subcontent: 'New York',
            time: '3 hours ago',
            
        },
    ]
    return (
        <EventFiDashboardCard sx={{
            overflow:'scroll',
            height:'400px',
        }} minWidth="400px">
            <Typography variant="h5" >Contributions</Typography>
            <EventFiTimeline items={items} />
        </EventFiDashboardCard>
    );
}

export default EventFiContributation;