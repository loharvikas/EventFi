import { Divider, Stack, Typography } from '@mui/material';
import EventFiDashboardCard from '../../../../components/EventFiCard/EventFiDashboardCard';
import EventFiAvatar from '../../../../components/EventFiAvatar/EventFiAvatar';
import { useParams } from 'react-router-dom';
import { useAppDispatch } from '../../../../utils/hooks';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { selectTopEventContributors } from '../../../../store/modules/event/selector';
import { getTopContributors } from '../../../../store/modules/event/slice';

const EventContributors = () => {
    const params = useParams();
    const dispatch = useAppDispatch();
    const contributors = useSelector(selectTopEventContributors);

    useEffect(() => {
        const event_id = params.id;
        if (!event_id) return;
        dispatch(getTopContributors(event_id));
    }, []);

    return (
        <EventFiDashboardCard
            sx={{
                overflow: 'scroll',
                height: '400px',
            }}
        >
            <Stack>
                <Typography variant="h5">Top Contributors</Typography>
                <Stack direction="column" spacing={2} mt={2}>
                    {contributors.data.map((contributor, index) => (
                        <Stack mt={1} key={index}>
                            <Stack
                                mb={1}
                                key={index}
                                direction="row"
                                alignItems="center"
                                spacing={1}
                                justifyContent={'space-between'}
                            >
                                <Stack direction={'row'} spacing={1}>
                                    <EventFiAvatar
                                        initials={contributor.guest.name.charAt(
                                            0
                                        )}
                                    />
                                    <Stack direction={'column'}>
                                        <Typography variant="body2">
                                            {contributor.guest.name}
                                        </Typography>
                                        <Typography variant="subtitle2">
                                            {contributor.guest.email}
                                        </Typography>
                                    </Stack>
                                </Stack>
                                <Stack direction={'column'} spacing={1}>
                                    <Typography variant="subtitle2">
                                        Contributation
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        fontWeight={'bold'}
                                    >
                                        {contributor.amount + ' INR'}
                                    </Typography>
                                </Stack>
                            </Stack>
                            <Divider />
                        </Stack>
                    ))}
                </Stack>
            </Stack>
        </EventFiDashboardCard>
    );
};

export default EventContributors;
