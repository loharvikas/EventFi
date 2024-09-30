import { Grid, Stack, Typography } from "@mui/material"
import EventFiStatCard from "../../../../components/EventFiStatCard/EventFiStatCard";

const EventDashboardInfoCard = () => {
    const data = [
        {
          title: 'Users',
          value: '14k',
          interval: 'Last 30 days',
          trend: 'up',
          data: [
            200, 24, 220, 260, 240, 380, 100, 240, 280, 240, 300, 340, 320, 360, 340, 380,
            360, 400, 380, 420, 400, 640, 340, 460, 440, 480, 460, 600, 880, 920,
          ],
        },
        {
          title: 'Conversions',
          value: '325',
          interval: 'Last 30 days',
          trend: 'down',
          data: [
            1640, 1250, 970, 1130, 1050, 900, 720, 1080, 900, 450, 920, 820, 840, 600, 820,
            780, 800, 760, 380, 740, 660, 620, 840, 500, 520, 480, 400, 360, 300, 220,
          ],
        },
        {
          title: 'Event count',
          value: '200k',
          interval: 'Last 30 days',
          trend: 'neutral',
          data: [
            500, 400, 510, 530, 520, 600, 530, 520, 510, 730, 520, 510, 530, 620, 510, 530,
            520, 410, 530, 520, 610, 530, 520, 610, 530, 420, 510, 430, 520, 510,
          ],
        },
        {
            title: 'Event count',
            value: '100k',
            interval: 'Last 20 days',
            trend: 'up',
            data: [
              500, 400, 510, 530, 520, 600, 530, 520, 510, 730, 520, 510, 530, 620, 510, 530,
              520, 410, 530, 520, 610, 530, 520, 610, 530, 420, 510, 430, 520, 510,
            ],
          },
      ];
    return (
        <>
            {data.map((item, index) => (
                <Grid item xs={12} sm={6} md={3} key={index}>
                    <EventFiStatCard {...item} trend={item.trend as 'up' | 'down' | 'neutral'} />
                </Grid>
            ))}
        </>
     
    );
}


export default EventDashboardInfoCard;