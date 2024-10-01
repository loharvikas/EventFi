import { useEffect } from "react";
import EventFiTable from "../../components/EventFiTable/EventFiTable";
import { getMyContributions } from "../../store/modules/user/slice";
import { useAppDispatch } from "../../utils/hooks";
import { useSelector } from "react-redux";
import { selectUserContributions } from "../../store/modules/user/selector";
import { Stack, Typography } from "@mui/material";
import ContributionData from "./ContributionData";


const MyContribution = () => {

    return (
        <Stack direction={'column'} spacing={2}>
            <Typography variant="h6">My Contributions</Typography>
            <ContributionData />
        </Stack>
    ) 

}

export default MyContribution;