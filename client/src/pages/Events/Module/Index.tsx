import { Box, Stack, Typography } from '@mui/material';
import { Link, useParams } from 'react-router-dom';
import EventFiTab from '../../../components/EventFiTab/EventFiTab';
import { useEffect, useState } from 'react';
import EventOverview from './Overview/EventOverview';
import Guests from './Guests/Guests';
import { CircleDotDashed } from 'lucide-react';
import { useSelector } from 'react-redux';
import { selectEventDetail } from '../../../store/modules/event/selector';
import { useAppDispatch } from '../../../utils/hooks';
import { getEventDetail } from '../../../store/modules/event/slice';

const EventModule = () => {
    const [selectedTab, setSelectedTab] = useState<number>(0);
    const eventDetailState = useSelector(selectEventDetail);
    const dispatch = useAppDispatch();
    const params = useParams();

    const tabs = ['Overview', 'Guest list', 'Settings', 'Dashboard'];

    useEffect(() => {
        const event_id = params.id;
        if (!event_id) return;
        dispatch(getEventDetail(event_id));
    }, []);

    return (
        <>
            <Stack>
                <Link to="/events">Events</Link>
            </Stack>
            <Stack mt={2} direction={'row'} alignItems={'center'}>
                <Typography variant="h5" mr={1}>
                    {eventDetailState.data?.name}
                </Typography>
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
    );
};

export default EventModule;
