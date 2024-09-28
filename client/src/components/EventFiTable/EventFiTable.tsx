import { DataGrid, DataGridProps, gridClasses } from '@mui/x-data-grid';
import { alpha, styled } from '@mui/material';

interface EventFiTableProps extends DataGridProps {
}

const EventFiTable = (props:EventFiTableProps) => {

    const StripedDataGrid = styled(DataGrid)(({ theme }) => ({
        [`& .${gridClasses.root}`]: {
            width: '100%',
        },
        height:'100vh',
        maxHeight:'100vh',
        border:'none',
        overflow: 'scroll',
        '& .MuiDataGrid-columnHeaderTitle': {
            fontSize: '0.8rem',
            fontWeight: 600,
            color: theme.palette.grey[700],
        },
        }));
    return (
        <StripedDataGrid
            rows={props.rows}
            columns={props.columns}
            columnHeaderHeight={36} 
            disableColumnResize
            hideFooterPagination
            hideFooter
        />
    );
}

export default EventFiTable;