import { Box, Modal, ModalProps } from '@mui/material';

interface EventFiModalProps extends ModalProps {
    open: boolean;
    onClose: () => void;
}

export default function EventFiModal(props:EventFiModalProps) {
    return (<Modal {...props} 
        open={props.open} 
        onClose={props.onClose} 
        slotProps={{ backdrop: { sx: { backgroundColor: 'rgba(0, 0, 0, 0.09)' } } }}
        sx={{
            boxShadow: 'lch(0 0 0 / 0.125) 0px 4px 30px, lch(0 0 0 / 0.04) 0px 3px 17px, lch(0 0 0 / 0.04) 0px 2px 8px, lch(0 0 0 / 0.04) 0px 1px 1px',
            transition: 'all 300ms cubic-bezier(0.43, 0.07, 0.59, 0.94)'
        }}
    >
        <Box sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            display: 'block',
            transform: 'translate(-50%, -50%)',
        }}>
            {props.children}
        </Box>
    </Modal>)
}