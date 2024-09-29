import MuiCard from "@mui/material/Card";
import { styled } from '@mui/material/styles';
import { CardProps } from '@mui/material/Card'; // Import CardProps if needed

interface EventFiCardProps extends CardProps {
  width?:string;
  children: React.ReactNode;
  boxShadow?: string;
  background?:string;
  color?:string;
  border?:string;
  borderColor?:string;
}

const EventFiCard = (props:EventFiCardProps)  => {
  const StyledCard = styled(MuiCard)<CardProps>(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    alignSelf: 'center',
    padding: theme.spacing(4),
    gap: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      maxWidth: '450px',
    },
    boxShadow:
      props.boxShadow || 'hsla(220, 30%, 5%, 0.05) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.05) 0px 15px 35px -5px',
    width: props.width || '100%',
    background: props.background || 'background.paper',
    borderRadius: theme.spacing(2),
    color: props.color || 'inherit',
    border: props.border || 'none',
    borderColor: theme.palette.grey[300],
  }));
  return <StyledCard>
    {props.children}
  </StyledCard>
};


export default EventFiCard;