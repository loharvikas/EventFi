import { Alert, Snackbar } from '@mui/material';
import { useSelector } from 'react-redux';
import { selectAlert } from '../../store/modules/common/selector';
import { useAppDispatch } from '../../utils/hooks';
import { closeAlert } from '../../store/modules/common/slice';

const EventFiAlert = () => {
    const alertState = useSelector(selectAlert);
    const dispatch = useAppDispatch();

    return (
        <Snackbar
            sx={{
                zIndex: 1000,
            }}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={alertState.open}
            autoHideDuration={2000}
            onClose={() => dispatch(closeAlert())}
        >
            <Alert
                sx={{
                    border: '1px solid',
                    borderColor: 'divider',
                }}
                severity={
                    alertState.type == 'success'
                        ? 'success'
                        : alertState.type == 'info'
                          ? 'info'
                          : 'error'
                }
            >
                {alertState.message}
            </Alert>
        </Snackbar>
    );
};

export default EventFiAlert;
