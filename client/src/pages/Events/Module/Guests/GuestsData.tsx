import { useSelector } from 'react-redux';
import EventFiTable from '../../../../components/EventFiTable/EventFiTable';
import { selectGuests } from '../../../../store/modules/guest/selector';
import { useAppDispatch } from '../../../../utils/hooks';
import { useEffect } from 'react';
import { requestState } from '../../../../utils/enums';
import { getGuests } from '../../../../store/modules/guest/slice';
import { useParams } from 'react-router-dom';

const GuestsData = () => {
    const guests = useSelector(selectGuests);
    const dispatch = useAppDispatch();
    const params = useParams();

    useEffect(() => {
        const eventId = params.id;
        if (!eventId) return;
        dispatch(getGuests(eventId));
    }, []);

    const columns = [
        { field: 'name', headerName: 'Name', flex: 1 },
        { field: 'email', headerName: 'Email', flex: 1 },
        { field: 'phone_number', headerName: 'Phone', flex: 1 },
    ];
    return (
        <EventFiTable tableHeight="70vh" columns={columns} rows={guests.data} />
    );
};

export default GuestsData;
