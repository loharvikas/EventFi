import { GridColDef, GridRenderCellParams } from "@mui/x-data-grid";
import { Event } from '../../types/event';
import EventFiTable from "../../components/EventFiTable/EventFiTable";
import { Avatar, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";


const EventData = () => {
    const columns: GridColDef[] = [
        { field: 'eventName', headerName: 'Event Name', width: 200, renderCell: (params:GridRenderCellParams) => {
            return (<Link to={`/events/${params.id}`}>{params.value}</Link>)
        } },
        { field: 'eventDate', headerName: 'Event Date', width: 130 },
        { field: 'addressLine1', headerName: 'Address Line 1', flex:2, },
        { field: 'addressLine2', headerName: 'Address Line 2', width: 200 },
        { field: 'city', headerName: 'City', width: 130 },
        { field: 'state', headerName: 'State', width: 130 },
        { field: 'zipCode', headerName: 'Zip Code', width: 100 },
        { field: 'country', headerName: 'Country', width: 130 },
        { field: 'guestCount', headerName: 'Guest Count', type: 'number', width: 110 },
    ];
    const generateRandomDate = (start: Date, end: Date): string => {
        return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime())).toISOString().split('T')[0];
      };
      
      const generateSampleData = (count: number): Event[] => {
        const events: string[] = [
          "Annual Gala", "Tech Conference", "Music Festival", "Art Exhibition",
          "Food Fair", "Charity Run", "Book Launch", "Film Premiere",
          "Fashion Show", "Science Symposium"
        ];
        const cities: string[] = ["New York", "Los Angeles", "Chicago", "Houston", "Phoenix", "Philadelphia", "San Antonio", "San Diego", "Dallas", "San Jose"];
        const states: string[] = ["NY", "CA", "IL", "TX", "AZ", "PA", "TX", "CA", "TX", "CA"];
        const countries: string[] = ["USA", "Canada", "UK", "Australia", "Germany", "France", "Japan", "Brazil", "India", "Spain"];
      
        return Array.from({ length: count }, (_, index): Event => ({
          id: index + 1,
          eventName: `${events[Math.floor(Math.random() * events.length)]} ${index + 1}`,
          eventDate: generateRandomDate(new Date(2024, 0, 1), new Date(2024, 11, 31)),
          addressLine1: `${Math.floor(Math.random() * 1000) + 1} Main St`,
          addressLine2: Math.random() > 0.5 ? `Suite ${Math.floor(Math.random() * 100) + 1}` : '',
          city: cities[Math.floor(Math.random() * cities.length)],
          state: states[Math.floor(Math.random() * states.length)],
          zipCode: Math.floor(Math.random() * 90000) + 10000,
          country: countries[Math.floor(Math.random() * countries.length)],
          guestCount: Math.floor(Math.random() * 500) + 50,
        }));
      };
      
      const rows: Event[] = generateSampleData(30);
    return (
        <EventFiTable 
            columns={columns}
            rows={rows}
        />
    )
}

export default EventData;

