import React, { useState } from 'react';
import { Box, FormControl, FormLabel, Typography, Grid } from '@mui/material';
import EventFiCard from '../../../../components/EventFiCard/EventFiCard';
import EventFiTextField from '../../../../components/EventFiTextField/EventFiTextField';
import EventFiButton from '../../../../components/EventFiButton/EventFiButton';
import { useAppDispatch } from '../../../../utils/hooks';
import { create } from 'domain';
import { createGuest } from '../../../../store/modules/guest/slice';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectCreateGuest } from '../../../../store/modules/guest/selector';
import { requestState } from '../../../../utils/enums';
import { showAlert } from '../../../../store/modules/common/slice';

interface GuestCreationFormProps {
    onClose: () => void;
}

const GuestCreationForm = (props: GuestCreationFormProps) => {
    const createGuestState = useSelector(selectCreateGuest);

    const dispatch = useAppDispatch();
    const params = useParams();

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        const event_id = params.id;
        if (!event_id) {
            return;
        }
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const payload = {
            name: data.get('name') as string,
            email: data.get('email') as string,
            phone_number: data.get('number') as string,
        };
        await dispatch(
            createGuest({
                payload,
                event_id: event_id,
            })
        );
        dispatch(
            showAlert({
                message: 'Invited guest successfully',
                type: 'success',
            })
        );
        props.onClose();
    };

    return (
        <EventFiCard variant="outlined">
            <Typography variant="h5">Invite guest</Typography>
            <Box
                component="form"
                onSubmit={handleSubmit}
                noValidate
                sx={{
                    width: '100%',
                    mt: 2,
                }}
            >
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                        <FormControl fullWidth>
                            <FormLabel htmlFor="name">Name *</FormLabel>
                            <EventFiTextField
                                id="name"
                                name="name"
                                placeholder="Guest Name"
                                required
                                fullWidth
                            />
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <FormControl fullWidth>
                            <FormLabel htmlFor="email">Email *</FormLabel>
                            <EventFiTextField
                                id="email"
                                type="email"
                                name="email"
                                placeholder="Email"
                                required
                                fullWidth
                            />
                        </FormControl>
                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <FormControl fullWidth>
                            <FormLabel htmlFor="number">
                                Phone number *
                            </FormLabel>
                            <EventFiTextField
                                type="number"
                                id="number"
                                name="number"
                                placeholder="Phone number"
                                required
                                fullWidth
                            />
                        </FormControl>
                    </Grid>

                    <Grid item xs={12}>
                        <EventFiButton
                            type="submit"
                            fullWidth
                            variant="contained"
                            label="Invite"
                            loading={
                                createGuestState.status === requestState.loading
                            }
                        />
                    </Grid>
                </Grid>
            </Box>
        </EventFiCard>
    );
};

export default GuestCreationForm;
