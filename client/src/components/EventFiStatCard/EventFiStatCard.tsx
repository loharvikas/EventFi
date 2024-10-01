import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { SparkLineChart } from '@mui/x-charts/SparkLineChart';
import { areaElementClasses } from '@mui/x-charts/LineChart';
import EventFiDashboardCard from '../EventFiCard/EventFiDashboardCard';

export type EventFiStatCardProps = {
    title: string;
    value: string | number;
    interval: string;
    trend: 'up' | 'down' | 'neutral';
    data: number[];
};

function getDaysInMonth(month: number, year: number) {
    const date = new Date(year, month, 0);
    const monthName = date.toLocaleDateString('en-US', {
        month: 'short',
    });
    const daysInMonth = date.getDate();
    const days = [];
    let i = 1;
    while (days.length < daysInMonth) {
        days.push(`${monthName} ${i}`);
        i += 1;
    }
    return days;
}

function AreaGradient({ color, id }: { color: string; id: string }) {
    return (
        <defs>
            <linearGradient id={id} x1="50%" y1="0%" x2="50%" y2="100%">
                <stop offset="0%" stopColor={color} stopOpacity={0.3} />
                <stop offset="100%" stopColor={color} stopOpacity={0} />
            </linearGradient>
        </defs>
    );
}

const EventFiStatCard = ({
    title,
    value,
    interval,
    trend,
    data,
}: EventFiStatCardProps) => {
    const theme = useTheme();
    const daysInWeek = getDaysInMonth(4, 2024);

    const trendColors = {
        up: theme.palette.success.main,
        down: theme.palette.error.main,
        neutral: theme.palette.grey[400],
    };

    const labelColors: { [key: string]: string } = {
        up: 'success' as const,
        down: 'error' as const,
        neutral: 'default' as const,
    };

    const color = labelColors[trend];
    const chartColor = trendColors[trend];
    const trendValues = { up: '+25%', down: '-25%', neutral: '+5%' };

    return (
        <EventFiDashboardCard
            variant="outlined"
            sx={{ height: '100%', flexGrow: 1, boxShadow: 'none' }}
        >
            <CardContent>
                <Typography component="h2" variant="subtitle2" gutterBottom>
                    {title}
                </Typography>
                <Stack
                    direction="column"
                    sx={{
                        justifyContent: 'space-between',
                        flexGrow: '1',
                        gap: 1,
                    }}
                >
                    <Stack sx={{ justifyContent: 'space-between' }}>
                        <Stack
                            direction="row"
                            sx={{
                                justifyContent: 'space-between',
                                alignItems: 'center',
                            }}
                        >
                            <Typography variant="h4" component="p">
                                {value}
                            </Typography>
                            <Chip
                                size="small"
                                color={color as any}
                                label={trendValues[trend]}
                                sx={{
                                    background: 'none',
                                    color: trendColors[trend],
                                    border: '1px solid',
                                    borderColor: trendColors[trend],
                                }}
                            />
                        </Stack>
                        <Typography
                            variant="caption"
                            sx={{ color: 'text.secondary' }}
                        >
                            {interval}
                        </Typography>
                    </Stack>
                    <Box sx={{ width: '100%', height: 50 }}>
                        <SparkLineChart
                            colors={[chartColor]}
                            data={data}
                            area
                            showHighlight
                            showTooltip
                            xAxis={{
                                scaleType: 'band',
                                data: daysInWeek, // Use the correct property 'data' for xAxis
                            }}
                            sx={{
                                [`& .${areaElementClasses.root}`]: {
                                    fill: `url(#area-gradient-${value})`,
                                },
                            }}
                        >
                            <AreaGradient
                                color={chartColor}
                                id={`area-gradient-${value}`}
                            />
                        </SparkLineChart>
                    </Box>
                </Stack>
            </CardContent>
        </EventFiDashboardCard>
    );
};

export default EventFiStatCard;
