import { Stack, Typography } from '@mui/material';
import EventFiCard from '../../../../components/EventFiCard/EventFiCard';
import EventFiButton from '../../../../components/EventFiButton/EventFiButton';
import EventFiModal from '../../../../components/EventFiModal/EventFiModal';
import { useAppDispatch } from '../../../../utils/hooks';
import { deleteEvent } from '../../../../store/modules/event/slice';
import { useNavigate, useParams } from 'react-router-dom';

interface EventDeleteModalProps {
    open: boolean;
    onClose: () => void;
    event_id: string;
}

const EventDeleteModal = ({
    open,
    onClose,
    event_id,
}: EventDeleteModalProps) => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const handleEventDelete = async () => {
        await dispatch(deleteEvent(event_id));
        navigate('/events');
    };

    return (
        <EventFiModal open={open} onClose={onClose}>
            <EventFiCard>
                <Typography variant="h5">
                    Are you sure you want to delete this event?
                </Typography>
                <Stack direction="row-reverse" mt={2} spacing={1}>
                    <EventFiButton
                        variant="contained"
                        color="error"
                        label="Delete"
                        onClick={() => handleEventDelete()}
                    />
                    <EventFiButton
                        variant="outlined"
                        color="error"
                        label="Cancel"
                        onClick={() => onClose()}
                    />
                </Stack>
            </EventFiCard>
        </EventFiModal>
    );
};

export default EventDeleteModal;
