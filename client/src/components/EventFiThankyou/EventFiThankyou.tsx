import React, { useState, useEffect } from 'react';
import Confetti from 'react-confetti';
import { CheckCircle, PartyPopper } from 'lucide-react'; // Icons from lucide-react
import { Container, Box, Typography } from '@mui/material';

interface EventFiThankyouProps {
    title?: string;
    message?: string;
    icon?: React.ReactNode;
}

const EventFiThankyou = (props: EventFiThankyouProps) => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [windowHeight, setWindowHeight] = useState(window.innerHeight);

    // Handle window resizing to adjust confetti size
    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
            setWindowHeight(window.innerHeight);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <Container
            maxWidth="sm"
            sx={{
                height: '100vh',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center',
                position: 'relative',
                overflow: 'hidden',
            }}
        >
            {/* Confetti Effect */}
            <Confetti width={windowWidth} height={windowHeight} />

            <Box sx={{ zIndex: 10, mb: 4 }}>
                {props.icon || <CheckCircle size={80} color="green" />}
            </Box>

            <Typography variant="h3" sx={{ zIndex: 10, mb: 2, color: '#333' }}>
                {props.title || 'Thank You!'}
            </Typography>

            <Typography variant="h6" sx={{ zIndex: 10, color: '#555', mb: 4 }}>
                {props.message || 'Your submission was successful.'}
            </Typography>

            <Box sx={{ zIndex: 10 }}>
                <PartyPopper size={60} color="#ff6347" />
            </Box>
        </Container>
    );
};

export default EventFiThankyou;
