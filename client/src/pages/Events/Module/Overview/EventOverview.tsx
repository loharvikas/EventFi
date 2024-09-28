import { Box, Grid, Typography } from "@mui/material"
import EventFiCard from "../../../../components/EventFiCard/EventFiCard"


const EventOverview = () => {
    const data = {
        eventName: 'Annual Gala',
        eventDate: '2024-01-01',
        addressLine1: '123 Main St',
        addressLine2: 'Suite 1',
        city: 'New York',
        state: 'NY',
        zipCode: 10001,
        country: 'USA',
    }
    return (
        <>
        
            <EventFiCard variant="outlined">
                <Typography variant="h5" gutterBottom>Event Info</Typography>
                <Grid container spacing={1}>
                    <Grid item xs={2}>
                        <Typography variant="subtitle2">Event Name</Typography>
                        <Typography variant="body1">{data.eventName}</Typography>
                    </Grid>
                    <Grid item xs={2}>
                        <Typography variant="subtitle2">Event Date</Typography>
                        <Typography variant="body1">{data.eventDate}</Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <Typography variant="subtitle2">Address</Typography>
                        <Typography variant="body1">
                            {data.addressLine1}, {data.addressLine2}
                        </Typography>
                    </Grid>
                    <Grid item xs={2}>
                        <Typography variant="subtitle2">City</Typography>
                        <Typography variant="body1">{data.city}</Typography>
                    </Grid>
                    <Grid item xs={2}>
                        <Typography variant="subtitle2">State</Typography>
                        <Typography variant="body1">{data.state}</Typography>
                    </Grid>
                    <Grid item xs={2}>
                        <Typography variant="subtitle2">Zip Code</Typography>
                        <Typography variant="body1">{data.zipCode}</Typography>
                    </Grid>
                    <Grid item xs={2}>
                        <Typography variant="subtitle2">Country</Typography>
                        <Typography variant="body1">{data.country}</Typography>
                    </Grid>
                </Grid>
            </EventFiCard>
             <EventFiCard variant="outlined">
             <Typography variant="h5" gutterBottom>Event Info</Typography>
             <Grid container spacing={2}>
                 <Grid item xs={6}>
                     <Typography variant="subtitle2">Event Name</Typography>
                     <Typography variant="body1">{data.eventName}</Typography>
                 </Grid>
                 <Grid item xs={6}>
                     <Typography variant="subtitle2">Event Date</Typography>
                     <Typography variant="body1">{data.eventDate}</Typography>
                 </Grid>
                 <Grid item xs={12}>
                     <Typography variant="subtitle2">Address</Typography>
                     <Typography variant="body1">
                         {data.addressLine1}, {data.addressLine2}
                     </Typography>
                 </Grid>
                 <Grid item xs={6}>
                     <Typography variant="subtitle2">City</Typography>
                     <Typography variant="body1">{data.city}</Typography>
                 </Grid>
                 <Grid item xs={6}>
                     <Typography variant="subtitle2">State</Typography>
                     <Typography variant="body1">{data.state}</Typography>
                 </Grid>
                 <Grid item xs={6}>
                     <Typography variant="subtitle2">Zip Code</Typography>
                     <Typography variant="body1">{data.zipCode}</Typography>
                 </Grid>
                 <Grid item xs={6}>
                     <Typography variant="subtitle2">Country</Typography>
                     <Typography variant="body1">{data.country}</Typography>
                 </Grid>
             </Grid>
         </EventFiCard>
          <EventFiCard variant="outlined">
          <Typography variant="h5" gutterBottom>Event Info</Typography>
          <Grid container spacing={2}>
              <Grid item xs={6}>
                  <Typography variant="subtitle2">Event Name</Typography>
                  <Typography variant="body1">{data.eventName}</Typography>
              </Grid>
              <Grid item xs={6}>
                  <Typography variant="subtitle2">Event Date</Typography>
                  <Typography variant="body1">{data.eventDate}</Typography>
              </Grid>
              <Grid item xs={12}>
                  <Typography variant="subtitle2">Address</Typography>
                  <Typography variant="body1">
                      {data.addressLine1}, {data.addressLine2}
                  </Typography>
              </Grid>
              <Grid item xs={6}>
                  <Typography variant="subtitle2">City</Typography>
                  <Typography variant="body1">{data.city}</Typography>
              </Grid>
              <Grid item xs={6}>
                  <Typography variant="subtitle2">State</Typography>
                  <Typography variant="body1">{data.state}</Typography>
              </Grid>
              <Grid item xs={6}>
                  <Typography variant="subtitle2">Zip Code</Typography>
                  <Typography variant="body1">{data.zipCode}</Typography>
              </Grid>
              <Grid item xs={6}>
                  <Typography variant="subtitle2">Country</Typography>
                  <Typography variant="body1">{data.country}</Typography>
              </Grid>
          </Grid>
      </EventFiCard>
        </>
    )
}


export default EventOverview;