import { Avatar, Divider, Stack, Typography } from "@mui/material";
import EventFiDashboardCard from "../../../../components/EventFiCard/EventFiDashboardCard";
import EventFiAvatar from "../../../../components/EventFiAvatar/EventFiAvatar";

interface EventContributorsProps {
    contributors: {
        email: string;
        name: string;
        contribution: number;
    }[]
}

const EventContributors = (props: EventContributorsProps) => {
    return (
        <EventFiDashboardCard sx={{
            overflow:'scroll',
            height:'400px',
        }} >
            <Stack>
                <Typography variant="h5">Top Contributors</Typography>
                <Stack direction="column" spacing={2} mt={2}>
                    {
                        props.contributors.map((contributor, index) => (
                            <Stack mt={1}>
                                <Stack mb={1} key={index} direction="row" alignItems="center" spacing={1} justifyContent={'space-between'} >
                                    <Stack direction={'row'} spacing={1}>
                                        <EventFiAvatar 
                                            initials={contributor.name.charAt(0)}
                                        />
                                        <Stack direction={'column'} >
                                            <Typography variant="body2">{contributor.name}</Typography>
                                            <Typography variant="subtitle2">{contributor.email}</Typography> 
                                        </Stack>
                                    </Stack>
                                    <Stack direction={'column'} spacing={1}>
                                        <Typography variant="subtitle2">Contributation</Typography>
                                        <Typography variant="body2" fontWeight={'bold'}>{contributor.contribution + ' INR'}</Typography>    
                                    </Stack>
                                </Stack>
                                <Divider/>
                            </Stack>

                        ))
                    }
                </Stack>
            </Stack>
        </EventFiDashboardCard>
    );
}

export default EventContributors;