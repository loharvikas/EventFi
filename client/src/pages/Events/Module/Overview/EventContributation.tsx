import { Typography } from '@mui/material';
import EventFiDashboardCard from '../../../../components/EventFiCard/EventFiDashboardCard';
import EventFiTimeline, {
    TimelineItemData,
} from '../../../../components/EventFiTimeline/EventFiTimeline';
import { useSelector } from 'react-redux';
import { selectEventContributions } from '../../../../store/modules/event/selector';
import { useAppDispatch } from '../../../../utils/hooks';
import { useEffect, useState } from 'react';
import { getContributions } from '../../../../store/modules/event/slice';
import { useParams } from 'react-router-dom';
import { requestState } from '../../../../utils/enums';
import { formatDistance } from 'date-fns';

const EventContributation = () => {
    const [data, setData] = useState<TimelineItemData[]>([]);
    const dispatch = useAppDispatch();
    const params = useParams();
    const contibutions = useSelector(selectEventContributions);

    useEffect(() => {
        if (contibutions.status === requestState.success) {
            const items: TimelineItemData[] = [];
            contibutions.data.forEach((item) => {
                items.push({
                    title: item.guest.name,
                    subcontent: `contrbuted ${item.amount}`,
                    time: formatDistance(item.created_on, new Date(), {
                        addSuffix: true,
                    }),
                });
            });
            setData(items);
        }
    }, [contibutions.status]);

    useEffect(() => {
        const event_id = params.id;
        if (event_id) {
            dispatch(getContributions(event_id));
        }
    }, []);


    return (
        <EventFiDashboardCard
            sx={{
                overflow: 'scroll',
                height: '400px',
            }}
            minWidth="390px"
        >
            <Typography variant="h5">Contributions</Typography>
            <EventFiTimeline items={data} />
        </EventFiDashboardCard>
    );
};

export default EventContributation;
