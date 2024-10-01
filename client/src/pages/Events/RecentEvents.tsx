import { Stack, Typography } from '@mui/material';
import EventFiCard from '../../components/EventFiCard/EventFiCard';
import { Event } from '../../types/event';

const RecentEvents = () => {
    const data: Event[] = [];
    return (
        <Stack>
            <Typography variant="subtitle1">Recent Events</Typography>
            <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                borderBottom={1}
                borderColor="divider"
                paddingTop={0.5}
                paddingBottom={0.5}
                paddingLeft={1}
                paddingRight={1}
            >
                {data.map((event, index) => (
                    <Stack
                        width={'100%'}
                        mr={1}
                        mt={1}
                        mb={1}
                        sx={{ backgroundColor: 'rgba(255, 138, 138, 0.7)' }}
                    >
                        <EventFiCard key={index} variant="outlined">
                            <Typography variant="h5">{event.name}</Typography>
                            <Typography variant="subtitle2">
                                {event.date}
                            </Typography>
                            <Typography variant="subtitle2">
                                {event.city}
                            </Typography>
                            <Typography variant="subtitle2">
                                {event.state}
                            </Typography>
                            <Typography variant="subtitle2">
                                {event.country}
                            </Typography>
                        </EventFiCard>
                    </Stack>
                ))}
            </Stack>
        </Stack>
    );
};

export default RecentEvents;
