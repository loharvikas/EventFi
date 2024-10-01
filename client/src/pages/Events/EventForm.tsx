import React from 'react';
import { Box, FormControl, FormLabel, Typography, Grid } from '@mui/material';
import EventFiCard from '../../components/EventFiCard/EventFiCard';
import EventFiTextField from '../../components/EventFiTextField/EventFiTextField';
import EventFiButton from '../../components/EventFiButton/EventFiButton';
import { useAppDispatch } from '../../utils/hooks';
import { createEvent, updateEvent } from '../../store/modules/event/slice';

import { Event } from '../../types/event';


interface EventCreateUpdateFormProps {
    onClose: () => void;
    mode?: 'create' | 'edit';
    eventData: Event | null; // Optional event data for edit mode
}

const EventCreateUpdateForm: React.FC<EventCreateUpdateFormProps> = ({
    onClose,
    mode = 'create',
    eventData,
}) => {
    const dispatch = useAppDispatch();
    const isEditMode = mode === 'edit';

    const getEventDataFromForm = (data: FormData)=> ({
        name: data.get('eventName') as string,
        date: data.get('eventDate') as string,
        address: data.get('addressLine1') as string,
        address_line2: data.get('addressLine2') as string,
        city: data.get('city') as string,
        state: data.get('state') as string,
        zip_code: data.get('zipCode') as string,
        country: data.get('country') as string,
    });

    // Function to get only updated fields for event editing
    const getUpdatedFields = (data: FormData): Partial<Event> => {
        const updatedFields: Partial<Event> = {};
        if (data.get('eventName'))
            updatedFields.name = data.get('eventName') as string;
        if (data.get('eventDate'))
            updatedFields.date = data.get('eventDate') as string;
        if (data.get('addressLine1'))
            updatedFields.address = data.get('addressLine1') as string;
        if (data.get('addressLine2'))
            updatedFields.address_line2 = data.get('addressLine2') as string;
        if (data.get('city')) updatedFields.city = data.get('city') as string;
        if (data.get('state'))
            updatedFields.state = data.get('state') as string;
        if (data.get('zipCode'))
            updatedFields.zip_code = data.get('zipCode') as string;
        if (data.get('country'))
            updatedFields.country = data.get('country') as string;
        return updatedFields;
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);

        if (isEditMode && eventData?.id) {
            const updatedFields = getUpdatedFields(data);
            await dispatch(updateEvent({ id: eventData.id, ...updatedFields }));
        } else {
            const eventData = getEventDataFromForm(data);
            await dispatch(createEvent(eventData));
        }

        onClose();
    };

    return (
        <EventFiCard variant="outlined" boxShadow="none">
            <Typography variant="h5">
                {isEditMode ? 'Edit event' : 'Create event'}
            </Typography>
            <Box
                component="form"
                onSubmit={handleSubmit}
                noValidate
                sx={{ width: '100%', mt: 2 }}
            >
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                        <FormControl fullWidth>
                            <FormLabel htmlFor="eventName">
                                Event Name *
                            </FormLabel>
                            <EventFiTextField
                                id="eventName"
                                name="eventName"
                                placeholder="Event Name"
                                required
                                fullWidth
                                defaultValue={eventData?.name || ''}
                            />
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <FormControl fullWidth>
                            <FormLabel htmlFor="eventDate">
                                Event Date *
                            </FormLabel>
                            <EventFiTextField
                                id="eventDate"
                                type="date"
                                name="eventDate"
                                required
                                fullWidth
                                defaultValue={eventData?.date || ''}
                            />
                        </FormControl>
                    </Grid>
                    <Grid item xs={12}>
                        <FormControl fullWidth>
                            <FormLabel htmlFor="addressLine1">
                                Address Line 1 *
                            </FormLabel>
                            <EventFiTextField
                                id="addressLine1"
                                name="addressLine1"
                                placeholder="Address Line 1"
                                required
                                fullWidth
                                defaultValue={eventData?.address || ''}
                            />
                        </FormControl>
                    </Grid>
                    <Grid item xs={12}>
                        <FormControl fullWidth>
                            <FormLabel htmlFor="addressLine2">
                                Address Line 2
                            </FormLabel>
                            <EventFiTextField
                                id="addressLine2"
                                name="addressLine2"
                                placeholder="Address Line 2"
                                fullWidth
                                defaultValue={eventData?.address_line2 || ''}
                            />
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <FormControl fullWidth>
                            <FormLabel htmlFor="city">City *</FormLabel>
                            <EventFiTextField
                                id="city"
                                name="city"
                                placeholder="City"
                                required
                                fullWidth
                                defaultValue={eventData?.city || ''}
                            />
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <FormControl fullWidth>
                            <FormLabel htmlFor="state">State *</FormLabel>
                            <EventFiTextField
                                id="state"
                                name="state"
                                placeholder="State"
                                required
                                fullWidth
                                defaultValue={eventData?.state || ''}
                            />
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <FormControl fullWidth>
                            <FormLabel htmlFor="zipCode">Zip Code *</FormLabel>
                            <EventFiTextField
                                id="zipCode"
                                name="zipCode"
                                placeholder="Zip Code"
                                required
                                fullWidth
                                defaultValue={eventData?.zip_code || ''}
                            />
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <FormControl fullWidth>
                            <FormLabel htmlFor="country">Country *</FormLabel>
                            <EventFiTextField
                                id="country"
                                name="country"
                                placeholder="Country"
                                required
                                fullWidth
                                defaultValue={eventData?.country || ''}
                            />
                        </FormControl>
                    </Grid>
                    <Grid item xs={12}>
                        <Box
                            sx={{
                                display: 'flex',
                                justifyContent: 'flex-end',
                                mt: 2,
                            }}
                        >
                            <EventFiButton
                                type="submit"
                                variant="contained"
                                label={
                                    isEditMode ? 'Save changes' : 'Create event'
                                }
                                loading={false}
                                loadingPosition="start"
                            />
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </EventFiCard>
    );
};

export default EventCreateUpdateForm;
