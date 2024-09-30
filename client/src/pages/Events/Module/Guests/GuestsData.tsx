import { useSelector } from "react-redux";
import EventFiTable from "../../../../components/EventFiTable/EventFiTable"
import { selectGuests } from "../../../../store/modules/guest/selector";
import { useAppDispatch } from "../../../../utils/hooks";
import { useEffect } from "react";
import { requestState } from "../../../../utils/enums";
import { getGuests } from "../../../../store/modules/guest/slice";
import { useParams } from "react-router-dom";


const GuestsData = () => {
    const guests = useSelector(selectGuests);
    const dispatch = useAppDispatch();
    const params = useParams();

    useEffect(() => {
        const eventId = params.id;
        console.log('--PARAMS---', params, eventId);
        if (guests.status === requestState.idle && eventId) {
            dispatch(getGuests(eventId));
        }
    }, []);

    const columns = [
        { field: 'name', headerName: 'Name', flex:1 },
        { field: 'email', headerName: 'Email', flex:1 },
        { field: 'phone_number', headerName: 'Phone', flex:1 },
    ]
    const guestList = [
        { id: 1, name: 'Anna', email: 'anna@gmail.com', phone: '1234567890', contribution: 100 },
        { id: 2, name: 'John', email: 'john@gmail.com', phone: '1234567890', contribution: 200 },
        { id: 3, name: 'Peter', email: 'peter@gmail.com', phone: '1234567890', contribution: 300 },
        { id: 4, name: 'Sarah', email: 'sarah@gmail.com', phone: '1234567890', contribution: 400 },
        { id: 5, name: 'Tom', email: 'tom@gmail.com', phone: '1234567890', contribution: 500 },
    ]
    return (
        <EventFiTable 
            tableHeight="70vh"
            columns={columns}
            rows={guests.data}
        />
    )
    
}

export default GuestsData;