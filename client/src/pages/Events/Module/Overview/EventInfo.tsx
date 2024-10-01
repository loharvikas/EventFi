import { Drawer, Grid, Stack, Typography } from '@mui/material';
import EventFiDashboardCard from '../../../../components/EventFiCard/EventFiDashboardCard';
import { Pen, Trash } from 'lucide-react';
import { format } from 'date-fns';
import { useSelector } from 'react-redux';
import { selectEventDetail } from '../../../../store/modules/event/selector';
import { useState } from 'react';
import EventCreateUpdateForm from '../../EventForm';
import EventDeleteModal from './EventDeleteModal';

const EventInfo = () => {
    const [openEventForm, setOpenEventForm] = useState<boolean>(false);
    const [openDeleteModal, setOpenDeleteModal] = useState<boolean>(false);
    const data = useSelector(selectEventDetail).data;

    return (
        <>
            <EventFiDashboardCard
                variant="outlined"
                boxShadow="none"
                border="1px solid"
                borderColor="divider"
                sx={{ height: '100%', minHeight: '400px' }}
            >
                <Stack
                    direction="row"
                    alignItems="center"
                    mb={2}
                    justifyContent={'space-between'}
                >
                    <Stack direction={'row'} alignItems={'center'}>
                        <Typography variant="h5" mr={1}>
                            Event Info
                        </Typography>
                        <Pen
                            size={14}
                            onClick={() => setOpenEventForm(true)}
                            style={{ cursor: 'pointer' }}
                        />
                    </Stack>
                    <Stack>
                        <Trash
                            size={14}
                            onClick={() => setOpenDeleteModal(true)}
                            color="red"
                            style={{
                                cursor: 'pointer',
                            }}
                        />
                    </Stack>
                </Stack>
                {data && (
                    <>
                        <Grid container spacing={2}>
                            <Grid item xs={6}>
                                <Typography variant="subtitle2">
                                    Name
                                </Typography>
                                <Typography variant="body1">
                                    {data.name}
                                </Typography>
                            </Grid>
                            <Grid item xs={6}>
                                <Typography variant="subtitle2">
                                    Date
                                </Typography>
                                <Typography variant="body1">
                                    {format(
                                        new Date(data.date),
                                        'dd EEEE yyyy'
                                    )}
                                </Typography>
                            </Grid>
                            <Grid item xs={6}>
                                <Typography variant="subtitle2">
                                    Address
                                </Typography>
                                <Typography variant="body1">
                                    {data.address}
                                </Typography>
                            </Grid>
                            {data.address_line2 && (
                                <Grid item xs={6}>
                                    <Typography variant="subtitle2">
                                        Address Line 2
                                    </Typography>
                                    <Typography variant="body1">
                                        {data.address_line2}
                                    </Typography>
                                </Grid>
                            )}
                            <Grid item xs={6}>
                                <Typography variant="subtitle2">
                                    City
                                </Typography>
                                <Typography variant="body1">
                                    {data.city}
                                </Typography>
                            </Grid>
                            <Grid item xs={6}>
                                <Typography variant="subtitle2">
                                    State
                                </Typography>
                                <Typography variant="body1">
                                    {data.state}
                                </Typography>
                            </Grid>
                            <Grid item xs={6}>
                                <Typography variant="subtitle2">
                                    Zip Code
                                </Typography>
                                <Typography variant="body1">
                                    {data.zip_code}
                                </Typography>
                            </Grid>
                            <Grid item xs={6}>
                                <Typography variant="subtitle2">
                                    Country
                                </Typography>
                                <Typography variant="body1">
                                    {data.country}
                                </Typography>
                            </Grid>
                        </Grid>
                        <Drawer
                            open={openEventForm}
                            onClose={() => setOpenEventForm(false)}
                            anchor="right"
                        >
                            <EventCreateUpdateForm
                                onClose={() => setOpenEventForm(false)}
                                mode="edit"
                                eventData={data}
                            />
                        </Drawer>
                        <EventDeleteModal
                            open={openDeleteModal}
                            onClose={() => setOpenDeleteModal(false)}
                            event_id={data?.id}
                        />
                    </>
                )}
            </EventFiDashboardCard>
            {/* Modal */}
        </>
    );
};

export default EventInfo;
