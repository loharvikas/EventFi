import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../../utils/hooks";
import { getMyContributions } from "../../store/modules/user/slice";
import { selectUserContributions } from "../../store/modules/user/selector";
import EventFiTable from "../../components/EventFiTable/EventFiTable";
import { GridColDef } from "@mui/x-data-grid";
import { format } from "date-fns";


const ContributionData = () => {
    const contributions = useSelector(selectUserContributions);
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(getMyContributions());
    }, []);

    console.log('---CCC--,', contributions)
    const columns: GridColDef[] = [
        {
            field: 'event',
            headerName: 'Event',
            flex:1,
        },
        {
            field: 'amount',
            headerName: 'Amount',
            flex:1,
        },
        {
            field: 'date',
            headerName: 'Event Date',
            flex:1,
            renderCell: (params) => {
                const formattedDate = format(
                    new Date(params.value),
                    'dd EEEE yyyy'
                );
                return <span>{formattedDate}</span>;
            },
        },
    ]
        
       
    return <EventFiTable columns={columns} rows={contributions.data} />
}

export default ContributionData;