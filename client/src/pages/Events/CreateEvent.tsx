import React, { useState } from 'react';
import {
  Box,
  FormControl,
  FormLabel,
  Typography,
  Modal,
  Stack,
  Grid,
  Grid2
} from '@mui/material';
import { Link } from 'react-router-dom';
import EventFiCard from '../../components/EventFiCard/EventFiCard';
import EventFiTextField from '../../components/EventFiTextField/EventFiTextField';
import EventFiButton from '../../components/EventFiButton/EventFiButton';


const EventCreationForm = () => {

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Event creation logic goes here
  };

  return (
    <EventFiCard variant='outlined'>
    <Typography variant="h5">Create event</Typography>
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
            <FormLabel htmlFor="eventName">Event Name *</FormLabel>
            <EventFiTextField
              id="eventName"
              name="eventName"
              placeholder="Event Name"
              required
              fullWidth
            />
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth>
            <FormLabel htmlFor="eventDate">Event Date *</FormLabel>
            <EventFiTextField
              id="eventDate"
              type="date"
              name="eventDate"
              required
              fullWidth
            />
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <FormControl fullWidth>
            <FormLabel htmlFor="addressLine1">Address Line 1 *</FormLabel>
            <EventFiTextField
              id="addressLine1"
              name="addressLine1"
              placeholder="Address Line 1"
              required
              fullWidth
            />
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <FormControl fullWidth>
            <FormLabel htmlFor="addressLine2">Address Line 2</FormLabel>
            <EventFiTextField
              id="addressLine2"
              name="addressLine2"
              placeholder="Address Line 2"
              fullWidth
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
            />
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <EventFiButton type="submit" fullWidth variant="contained" label='Create event' loading={true} loadingPosition='start'/>
        </Grid>
      </Grid>
    </Box>
  </EventFiCard>
  );
};

export default EventCreationForm;
