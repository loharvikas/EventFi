import React, { useState } from 'react';
import {
  Box,
  FormControl,
  FormLabel,
  Typography,
  Modal,
  Stack,
} from '@mui/material';
import { Link } from 'react-router-dom';
import EventFiCard from '../../components/EventFiCard/EventFiCard';
import EventFiTextField from '../../components/EventFiTextField/EventFiTextField';
import EventFiButton from '../../components/EventFiButton/EventFiButton';


const EventCreationForm = () => {
  const [guestList, setGuestList] = useState<string[]>([]);
  const [openGuestModal, setOpenGuestModal] = useState(false);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Event creation logic goes here
  };

  const handleGuestSave = (newGuestList: string[]) => {
    setGuestList(newGuestList);
    setOpenGuestModal(false);
  };

  const handleGuestModalOpen = () => {
    setOpenGuestModal(true);
  };

  const handleGuestModalClose = () => {
    setOpenGuestModal(false);
  };

  return (
    <Stack>
      <EventFiCard variant="outlined">
        <Typography variant="h3">Create Event</Typography>
        <Box
          component="form"
          onSubmit={handleSubmit}
          noValidate
          sx={{
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
            gap: 2,
          }}
        >
          <FormControl>
            <FormLabel htmlFor="eventName">Event Name</FormLabel>
            <EventFiTextField
              id="eventName"
              type="text"
              name="eventName"
              placeholder="Event Name"
              required
              fullWidth
              variant="outlined"
            />
          </FormControl>

          <FormControl>
            <FormLabel htmlFor="eventDate">Event Date</FormLabel>
            <EventFiTextField
              id="eventDate"
              type="date"
              name="eventDate"
              required
              fullWidth
              variant="outlined"
            />
          </FormControl>

          <FormControl>
            <FormLabel htmlFor="venue">Venue</FormLabel>
            <EventFiTextField
              id="venue"
              type="text"
              name="venue"
              placeholder="Event Venue"
              required
              fullWidth
              variant="outlined"
            />
          </FormControl>

          <FormControl>
            <FormLabel htmlFor="guestList">Guest List</FormLabel>
            <EventFiButton
              type="button"
              fullWidth
              variant="outlined"
              onClick={handleGuestModalOpen}
              label="Add Guest List"
            />
            {guestList.length > 0 && (
              <Typography>{guestList.length} Guests Added</Typography>
            )}
          </FormControl>

          <EventFiButton type="submit" fullWidth variant="contained" label="Create event" />
        </Box>
      </EventFiCard>

      {/* Guest List Modal */}
      {/* <Modal open={openGuestModal} onClose={handleGuestModalClose}>
        <GuestListForm onSave={handleGuestSave} onClose={handleGuestModalClose} />
      </Modal> */}
    </Stack>
  );
};

export default EventCreationForm;
