import MuiCard from '@mui/material/Card';
import { styled } from '@mui/material/styles';
import { CardProps } from '@mui/material/Card'; // Import CardProps if needed

interface DashboardCardProps extends CardProps {
    width?: string;
    children: React.ReactNode;
    boxShadow?: string;
    background?: string;
    color?: string;
    border?: string;
    borderColor?: string;
    minWidth?: string;
}

const EventFiDashboardCard = (props: DashboardCardProps) => {
    const StyledCard = styled(MuiCard)<CardProps>(({ theme }) => ({
        display: 'flex',
        flexDirection: 'column',
        padding: theme.spacing(3),
        gap: theme.spacing(2),
        boxShadow: props.boxShadow || 'none',
        minWidth: props.minWidth,
        width: props.width || '100%',
        background: props.background || theme.palette.grey[50],
        borderRadius: theme.spacing(2),
        color: props.color || 'inherit',
        border: props.border || '1px solid',
        borderColor: theme.palette.grey[200],
    }));
    return <StyledCard {...props}>{props.children}</StyledCard>;
};

export default EventFiDashboardCard;
