import { styled, Typography } from '@mui/material';
import Button, { ButtonProps } from '@mui/material/Button';


interface EventFiCardProps extends ButtonProps {
    label: string;

}


const  EventFiButton = (props: EventFiCardProps) => {
      const StyledButton = styled(Button)<ButtonProps>(({ theme, ...props }) => {
        
        const variantStyles: Record<string, any> = {
            contained: {
                color: theme.palette.grey[50],
                border: `1px solid ${theme.palette.grey[900]}`,
                backgroundColor: theme.palette.grey[900],
                hoverBackgroundColor: theme.palette.grey[700],
                activeBackgroundColor: theme.palette.grey[800],
              },
            outlined: {
              color: theme.palette.grey[900],
              border: `1px solid ${theme.palette.grey[300]}`,
              backgroundColor: theme.palette.grey[100],
              hoverBackgroundColor: theme.palette.grey[200],
              activeBackgroundColor: theme.palette.primary.dark,
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
          backgroundColor: styles.backgroundColor,
          '&:hover': {
            backgroundImage: 'none',
            backgroundColor: styles.hoverBackgroundColor,
            boxShadow: 'none',
          },
          '&:active, &:focus': {
            backgroundColor: styles.hoverBackgroundColor,
            boxShadow: 'none',
          }
        };
      });


    return (
        <StyledButton 
            {...props}
            disableRipple
        >
            <Typography variant="body2" >
            {props.label}</Typography>
        </StyledButton>
    )
}

export default EventFiButton;