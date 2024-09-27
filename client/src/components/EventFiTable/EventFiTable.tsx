import { DataGrid, DataGridProps, gridClasses } from '@mui/x-data-grid';
import { alpha, styled } from '@mui/material';

interface EventFiTableProps extends DataGridProps {
}

const EventFiTable = (props:EventFiTableProps) => {

    const StripedDataGrid = styled(DataGrid)(({ theme }) => ({
        [`& .${gridClasses.root}`]: {
            width: '100%',
            maxHeight:'100vh',
            overflow: 'auto',
            border:'none',
        },
        border:'none'
        }));
    return (
        <StripedDataGrid
            autoHeight
            rows={props.rows}
            columns={props.columns}
            getRowClassName={(params) =>
                params.indexRelativeToCurrentPage % 2 === 0 ? 'even' : 'odd'
            }
            disableColumnResize
            density="compact"
            slotProps={{
                filterPanel: {
                filterFormProps: {
                    logicOperatorInputProps: {
                    variant: 'outlined',
                    size: 'small',
                    },
                    columnInputProps: {
                    variant: 'outlined',
                    size: 'small',
                    sx: { mt: 'auto' },
                    },
                    operatorInputProps: {
                    variant: 'outlined',
                    size: 'small',
                    sx: { mt: 'auto' },
                    },
                    valueInputProps: {
                    InputComponentProps: {
                        variant: 'outlined',
                        size: 'small',
                    },
                    },
                },
                },
        }}
        />
    );
}

export default EventFiTable;