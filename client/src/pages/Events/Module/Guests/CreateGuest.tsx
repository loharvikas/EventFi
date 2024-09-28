import React, { useState } from 'react';
import {
  Box,
  FormControl,
  FormLabel,
  Typography,
  Grid,
} from '@mui/material';
import EventFiCard from '../../../../components/EventFiCard/EventFiCard';
import EventFiTextField from '../../../../components/EventFiTextField/EventFiTextField';
import EventFiButton from '../../../../components/EventFiButton/EventFiButton';


const GuestCreationForm = () => {

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
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
              placeholder='Email'
              required
              fullWidth
            />
          </FormControl>
        </Grid>
       
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth>
            <FormLabel htmlFor="number">Phone number *</FormLabel>
            <EventFiTextField
                type='number'
              id="number"
              name="number"
              placeholder="Phone number"
              required
              fullWidth
            />
          </FormControl>
        </Grid>
      
        <Grid item xs={12}>
          <EventFiButton type="submit" fullWidth variant="contained" label='Invite' />
        </Grid>
      </Grid>
    </Box>
  </EventFiCard>
  );
};

export default GuestCreationForm;