import React, { useState } from 'react';
import {
  Box,
  FormControl,
  FormLabel,
  Typography,
  Grid,
  Grid2,
  Stack,
} from '@mui/material';
import { useParams } from 'react-router-dom';
import EventFiCard from '../../components/EventFiCard/EventFiCard';
import EventFiTextField from '../../components/EventFiTextField/EventFiTextField';
import EventFiButton from '../../components/EventFiButton/EventFiButton';
import { BrandIcon } from '../../assets/icons/BrandLogo';
import { Banknote, IndianRupee } from 'lucide-react';
import { useAppDispatch } from '../../utils/hooks';
import { addContribution } from '../../store/modules/guest/slice';
import EventFiThankyou from '../../components/EventFiThankyou/EventFiThankyou';
import { selectAddContribution } from '../../store/modules/guest/selector';
import { useSelector } from 'react-redux';
import { requestState } from '../../utils/enums';


const Payment = () => {
  const params = useParams();
  const dispatch = useAppDispatch();
  const addContributionState = useSelector(selectAddContribution);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    const event_id = params.id;
    const guest_id = params.guestId;
    if (!event_id || !guest_id) return;
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const payload = {
        amount: Number(data.get('number') as string),
    }

    await dispatch(addContribution({
      payload,
      event_id: event_id,
      guest_id: guest_id
    }));
  
 };
  return (
        addContributionState.status === requestState.success ?
        <EventFiThankyou 
            title='Payment Successful'
            message='Your payment was successful.' 
             
        />
        :
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                height: '100vh',
                width: '100vw',
                background: "linear-gradient(135deg,#000000 0%,#1a1a2e 50%,#3b185f 100%)",
            }}
            >
                <EventFiCard variant="outlined" width='450px' boxShadow='0 10px 20px rgba(0,0,0,0.2)' background='linear-gradient(to bottom, #00F260 0%, #0575E6 100%)' color='white'>
                    <BrandIcon />
                    <Typography variant="h3" mt={2}>EventFi Pay</Typography>
                    <Box
                        component="form"
                        onSubmit={handleSubmit}
                        noValidate
                        sx={{
                            width: '100%',
                        }}
                    >
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                        <FormControl fullWidth>
                            <Stack direction='row' alignItems='center' spacing={1}>
                                <IndianRupee />
                                <EventFiTextField
                                    id="number"
                                    name="number"
                                    type='number'
                                    placeholder="0"
                                    required
                                    fullWidth
                                />
                            </Stack>
                        </FormControl>
                        </Grid>
                    
                        <Grid item xs={12}>
                        <EventFiButton type="submit" fullWidth variant="contained" label='Pay' startIcon={<Banknote/>} />
                        </Grid>
                    </Grid>
                    </Box>
            </EventFiCard>
            </Box>
    
  );
};

export default Payment;