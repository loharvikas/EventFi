import { LoadingButton, LoadingButtonProps } from '@mui/lab';
import { alpha, CircularProgress, styled, Typography } from '@mui/material';


interface EventFiCardProps extends LoadingButtonProps {
    label: string;

}


const  EventFiButton = (props: EventFiCardProps) => {
      const StyledButton = styled(LoadingButton)<LoadingButtonProps>(({ theme, ...props }) => {
        
        const variantStyles: Record<string, any> = {
            contained: {
              color: 'white',
              backgroundColor: theme.palette.grey[900],
              backgroundImage: `linear-gradient(to bottom, ${theme.palette.grey[700]}, ${theme.palette.grey[800]})`,
              boxShadow: `inset 0 1px 0 ${theme.palette.grey[600]}, inset 0 -1px 0 1px hsl(220, 0%, 0%)`,
              border: `1px solid ${theme.palette.grey[700]}`,
              '&:hover': {
                backgroundImage: 'none',
                backgroundColor: theme.palette.grey[700],
                boxShadow: 'none',
              },
              '&:active': {
                backgroundColor: theme.palette.grey[800],
              },
              },
            outlined:  {
              color: theme.palette.text.primary,
              border: '1px solid',
              borderColor: theme.palette.grey[200],
              backgroundColor: alpha(theme.palette.grey[50], 0.3),
              '&:hover': {
                backgroundColor: theme.palette.grey[100],
                borderColor: theme.palette.grey[300],
              },
              '&:active': {
                backgroundColor: theme.palette.grey[200],
              }
            },
            text: {
              color: theme.palette.grey[900],
              hoverBackgroundColor: theme.palette.grey[50],
              activeBackgroundColor: theme.palette.primary.dark,
            }
        }
        const styles = variantStyles[props.variant || 'contained'];

        return {
          display: 'flex',
          borderRadius: '6px',
          justifyContent: 'center',
          alignItems: 'center',
          height: '40px',
          boxShadow: 'none',
          fontSize: '0.8rem',
          fontWeight: 520,
          color: styles.color,
          border: styles.border,
          margin:'0.5rem 0',
          '&. MuiLoadingButton-loading':{
            color:'pink'
          },
          
          ...styles

        };
      });


    return (
        <StyledButton 
            {...props}
            disableRipple
            loadingPosition='start'
            variant={props.variant === 'contained' ? props.loading ? 'outlined' : 'contained' : 'contained'}
        >
            <Typography variant="body2" fontWeight={'600'}>
            {props.label}</Typography>
        </StyledButton>
    )
}

export default EventFiButton;