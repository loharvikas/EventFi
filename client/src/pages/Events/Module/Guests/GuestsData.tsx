import EventFiTable from "../../../../components/EventFiTable/EventFiTable"


const GuestsData = () => {
    const columns = [
        { field: 'name', headerName: 'Name', flex:1 },
        { field: 'email', headerName: 'Email', flex:1 },
        { field: 'phone', headerName: 'Phone', flex:1 },
        { field: 'contribution', headerName: 'Contribution', flex:1 },
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
            columns={columns}
            rows={guestList}
        />
    )
    
}

export default GuestsData;