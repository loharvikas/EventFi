import { Box, Grid, Stack, styled, Typography } from '@mui/material';
import EventFiCard from '../../components/EventFiCard/EventFiCard';
import EventFiButton from '../../components/EventFiButton/EventFiButton';
import { CreditCardIcon, StarIcon } from 'lucide-react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { BrandIcon } from '../../assets/icons/BrandLogo';
import { format } from 'date-fns';
import { selectEventDetail } from '../../store/modules/event/selector';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getEventDetail } from '../../store/modules/event/slice';
import { useAppDispatch } from '../../utils/hooks';

const SubtitleTypography = styled(Typography)(({ theme }) => ({
    color: 'primary.dark',
    fontWeight: 'bold',
    marginBottom: theme.spacing(0.5),
}));

const Contribute = () => {
    const data = useSelector(selectEventDetail).data;
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const params = useParams();
    

    useEffect(() => {
        const event_id = params.id;
        if (event_id) {
            dispatch(getEventDetail(event_id));
        }
    }, []);

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                height: '100vh',
                width: '100vw',
                background:
                    'linear-gradient(135deg,#000000 0%,#1a1a2e 50%,#3b185f 100%)',
            }}
        >
            {
                data && (

                <EventFiCard
                    width="450px"
                    boxShadow="0 10px 20px rgba(0,0,0,0.2)"
                    background="linear-gradient(to bottom, #00F260 0%, #0575E6 100%)"
                    color="white"
                >
                    <Stack mb={1}>
                        <BrandIcon />
                    </Stack>
                    <Stack>
                        <Typography variant="h4" gutterBottom fontWeight="bold">
                            Event Info
                        </Typography>
                    </Stack>
                    <Grid container spacing={2}>
                        <Grid item xs={6}>
                            <SubtitleTypography variant="subtitle1">
                                Name
                            </SubtitleTypography>
                            <Typography variant="body1">
                                {data.name}
                            </Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <SubtitleTypography variant="subtitle1">
                                Date
                            </SubtitleTypography>
                            <Typography variant="body1">
                                {format(new Date(data.date), 'dd EEEE yyyy')}
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <SubtitleTypography variant="subtitle1">
                                Address
                            </SubtitleTypography>
                            <Typography variant="body1">
                                {data.address}, {data.address_line2}
                            </Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <SubtitleTypography variant="subtitle1">
                                City
                            </SubtitleTypography>
                            <Typography variant="body1">{data.city}</Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <SubtitleTypography variant="subtitle1">
                                State
                            </SubtitleTypography>
                            <Typography variant="body1">{data.state}</Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <SubtitleTypography variant="subtitle1">
                                Zip Code
                            </SubtitleTypography>
                            <Typography variant="body1">{data.zip_code}</Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <SubtitleTypography variant="subtitle1">
                                Country
                            </SubtitleTypography>
                            <Typography variant="body1">{data.country}</Typography>
                        </Grid>
                    </Grid>
                    <Box display="flex" justifyContent="center" mt={4}>
                        <EventFiButton
                            variant="contained"
                            startIcon={<CreditCardIcon />}
                            label="Contribute now"
                            onClick={() =>
                                navigate(
                                    `/events/${params.id}/${params.guestId}/contribute/pay`
                                )
                            }
                            fullWidth
                        />
                    </Box>
                    <Box display="flex" alignItems="center" justifyContent="center">
                        <Typography variant="body2" sx={{ mr: 1 }}>
                            Powered by
                        </Typography>
                        <StarIcon size={20} />
                        <Typography
                            variant="body2"
                            sx={{ ml: 1, fontWeight: 'bold' }}
                        >
                            <Link to={'/'}>EventFi</Link>
                        </Typography>
                    </Box>
                </EventFiCard>
                )

            }
        </Box>
    );
};

export default Contribute;
