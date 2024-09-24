import MuiTextField from "@mui/material/TextField";
import { styled } from '@mui/material/styles';
import { TextFieldProps } from '@mui/material/TextField'; 

const EventFiTextField = styled(MuiTextField)<TextFieldProps>(({ theme }) => ({
    display: 'flex',
    borderRadius: 8,

    '& .MuiInputBase-input': {
        fontSize: '14px', // Or adjust as desired
        fontWeight: 500, // Or adjust as desired,
        height:'8px'
      },
    '& .MuiOutlinedInput-root': {
        borderRadius: 8,
    },
    ...theme.applyStyles('dark', {
        borderRadius: 8,
    }),
}));

export default EventFiTextField;