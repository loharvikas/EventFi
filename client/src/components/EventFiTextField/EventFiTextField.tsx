import MuiTextField from "@mui/material/TextField";
import { styled } from '@mui/material/styles';
import { TextFieldProps } from '@mui/material/TextField'; 

const EventFiTextField = styled(MuiTextField)<TextFieldProps>(({ theme }) => ({
    display: 'flex',

    '& .MuiInputBase-input': {
        fontSize: '0.900rem',  // Or adjust as desired
        fontWeight: 500, // Or adjust as desired,
        height: theme.spacing(0.5)
      },
    '& .MuiOutlinedInput-root': {
        borderRadius: 8,
    },
    ...theme.applyStyles('dark', {
        borderRadius: 8,
    }),
}));

export default EventFiTextField;