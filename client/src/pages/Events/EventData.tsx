import { GridColDef, GridRenderCellParams } from '@mui/x-data-grid';
import EventFiTable from '../../components/EventFiTable/EventFiTable';
import { Stack, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import EventFiAvatar from '../../components/EventFiAvatar/EventFiAvatar';
import { useSelector } from 'react-redux';
import { selectEvents } from '../../store/modules/event/selector';
import { useEffect } from 'react';
import { useAppDispatch } from '../../utils/hooks';
import { getEvents } from '../../store/modules/event/slice';
import { format } from 'date-fns';

const EventData = () => {
    const events = useSelector(selectEvents);
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(getEvents());
    }, []);

    const columns: GridColDef[] = [
        {
            field: 'name',
            headerName: 'Event Name',
            width: 200,
            renderCell: (params: GridRenderCellParams) => {
                return <Link to={`/events/${params.id}`}>{params.value}</Link>;
            },
        },
        {
            field: 'contributors',
            headerName: 'Contributors',
            width: 200,
            renderCell: (params: GridRenderCellParams) => {
                const contributors = [
                    'Alice',
                    'David',
                    'Emma',
                    'Bob',
                    'Catherine',
                    'David',
                    'Frank',
                    'Grace',
                    'Henry',
                    'Ivy',
                    'Jack',
                ];
                return (
                    <Stack direction="row" spacing={-1} mt={1.5}>
                        {contributors
                            .slice(0, 3)
                            .map((name: string, index: number) => (
                                <EventFiAvatar
                                    key={index}
                                    initials={name.charAt(0)}
                                    sx={{
                                        zIndex: contributors.length - index, // Ensure the topmost avatar is on top
                                        marginLeft: index > 0 ? -10 : 0, // Offset for overlapping effect
                                    }}
                                />
                            ))}
                    </Stack>
                );
            },
        },
        {
            field: 'date',
            headerName: 'Event Date',
            width: 130,
            renderCell: (params) => {
                const formattedDate = format(
                    new Date(params.value),
                    'dd EEEE yyyy'
                );
                return <span>{formattedDate}</span>;
            },
        },
        { field: 'address', headerName: 'Address Line 1', width: 250 },
        {
            field: 'address_line2',
            headerName: 'Address Line 2',
            width: 200,
            resizable: true,
        },
        {
            field: 'city',
            headerName: 'City',
            width: 130,
            renderCell: (params: GridRenderCellParams) => {
                return (
                    <Stack direction={'row'} mt={1.5}>
                        <Stack
                            direction={'row'}
                            alignItems={'center'}
                            spacing={'0.5rem'}
                        >
                            <EventFiAvatar initials={params.value.charAt(0)} />
                            <Typography variant="body2">
                                {params.value}
                            </Typography>
                        </Stack>
                    </Stack>
                );
            },
        },
        { field: 'state', headerName: 'State', width: 130 },
        { field: 'zip_code', headerName: 'Zip Code', width: 100 },
        { field: 'country', headerName: 'Country', width: 130 },
    ];

    return <EventFiTable columns={columns} rows={events.data} />;
};

export default EventData;
