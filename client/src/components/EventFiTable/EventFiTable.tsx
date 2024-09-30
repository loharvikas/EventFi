import { DataGrid, DataGridProps, gridClasses } from '@mui/x-data-grid';
import { alpha, Box, styled } from '@mui/material';

interface EventFiTableProps extends DataGridProps {
    tableHeight?:string;
}

const EventFiTable = (props:EventFiTableProps) => {

    const StripedDataGrid = styled(DataGrid)<DataGridProps>(({ theme }) => ({
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        background: 'white',
        overflow:'scroll',
        margin: '8px 0px',
        borderRadius: '8px',
        '& .MuiFormGroup-options': {
          alignItems: 'center',
          paddingBottom: theme.spacing(1),
          '& > div': {
            minWidth: 100,
            margin: theme.spacing(2),
            marginLeft: 0,
          },
        },
        '& .MuiDataGrid-columnHeader': {
            color:'black',
            backgroundColor: 'background.paper',

            '& .MuiDataGrid-columnHeaderTitle': {
                fontWeight: 'bold',
            }
          }
        }));
    return (
        <Box sx={{
            height: props.tableHeight || 'calc(100vh - 150px)',
            maxWidth:'90vw',
            overflow: '',
        }}>
            <StripedDataGrid
                rows={props.rows}
                columns={props.columns}
                columnHeaderHeight={40} 
                disableColumnResize

            />
        </Box>
    );
}

export default EventFiTable;