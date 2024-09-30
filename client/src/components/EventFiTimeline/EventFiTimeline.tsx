import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import { Stack, Typography } from '@mui/material';


export interface TimelineItemData {
    title: string;
    subcontent: string;
    time: string;
  }
  
  interface GlobalTimelineProps {
    items: TimelineItemData[];
  }
  

const EventFiTimeline = ({items}: GlobalTimelineProps) => {

  
  return (
    <Timeline sx={{
        [`& .MuiTimelineItem-root:before`]: {
          flex: 0,
          padding: 0,
          marginLeft:'-0.7rem',
        
        },
        margin:0,
      }}>
        {items.map((item, index) => (
          <TimelineItem key={index}>
            <TimelineSeparator>
              <TimelineDot sx={{ bgcolor: 'theme.palette.grey[500]', width: 8, height: 8 }} />
              {index !== items.length - 1 && <TimelineConnector sx={{
                bgcolor:'grey.200',
              }}/>}
            </TimelineSeparator>
            <TimelineContent mt={0.3}>
              <Stack direction="row" alignItems="center" spacing={1}>
                <Typography variant="body2" fontWeight={'bold'}>{item.title}</Typography>
                <Typography variant="subtitle2">{item.subcontent}</Typography>
                <Typography variant="subtitle2">{item.time}</Typography>
              </Stack>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
  );
}


export default EventFiTimeline;