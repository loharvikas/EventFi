import * as React from 'react';
import { styled } from '@mui/material/styles';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { useEffect, useState } from 'react';

const StyledTabs = styled(Tabs)(({ theme }) => ({
  '& .MuiTabs-indicator': {
    backgroundColor: theme.palette.grey[900],
  },
}));

const StyledTab = styled((props: StyledTabProps) => <Tab disableRipple {...props} />)(({ theme }) => ({
  textTransform: 'none',
  minWidth: 0,
  marginRight: theme.spacing(3),
  paddingLeft: 0,
  paddingBottom: '4px',
  paddingRight: 0,
  color: 'rgba(28,28,28,0.6)',
  '&.Mui-selected': {
    fontWeight: '500',
    color:theme.palette.grey[900]
  },
  '& .MuiTabs-indicator': { backgroundColor: 'primary.dark', color:'primary.dark' },
  '& .MuiTab-textColorPrimary.Mui-selected': {
    color: 'primary.dark',
  },
}));

interface StyledTabProps {
  label: string;
}

interface Props {
  tabs: string[];
  onClick: (selectedTab: string, index: number) => void;
  selectedTab: number;
  size?: 'small' | 'medium' | 'large';
  tabCounts?: string[];
}

const EventFiTab = (props: Props) => {
  const [value, setValue] = useState<number>(props.selectedTab);

  useEffect(() => {
    setValue(props.selectedTab);
  }, [props.selectedTab]);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
    props.onClick(props.tabs[newValue], newValue);
  };

  return (
    <Box sx={{ width: 'fit-content' }}>
      <Box>
        <StyledTabs
          value={value}
          onChange={handleChange}
        >
          {props.tabs.map((tab: string, index: number) => (
            <StyledTab
              key={index}
              label={props.tabCounts ? `${tab} (${props.tabCounts[index]})` : tab}
              sx={{ fontSize: props.size === 'small' ? '12px' : '14px' }}
            />
          ))}
        </StyledTabs>
      </Box>
    </Box>
  );
};
export default EventFiTab;
