import React, { useMemo } from 'react';
import { Avatar, AvatarProps } from '@mui/material';

interface EventFiAvatarProps extends AvatarProps {
    initials?: string;
}

const EventFiAvatar: React.FC<EventFiAvatarProps> = ({ initials, ...props }) => {
    const { backgroundColor, textColor } = useMemo(() => {
        if (!initials) {
            return { backgroundColor: '#1a1a1a', textColor: '#ffffff' };
        }

        // Generate a darker color based on initials
        const hash = initials.split('').reduce((acc, char) => {
            return char.charCodeAt(0) + ((acc << 5) - acc);
        }, 0);

        // Choose between dark blue, purple, and black shades
        const colorSchemes = [
            { hueStart: 220, hueEnd: 240 }, // Dark blue
            { hueStart: 260, hueEnd: 280 }, // Purple
            { hueStart: 0, hueEnd: 360 }    // Black (full range, but with very low lightness)
        ];

        const selectedScheme = colorSchemes[hash % colorSchemes.length];
        const hue = selectedScheme.hueStart + (hash % (selectedScheme.hueEnd - selectedScheme.hueStart));
        const saturation = 30 + (hash % 30); // 30-60%
        const lightness = 15 + (hash % 20); // 15-35%

        const backgroundColor = `hsl(${hue}, ${saturation}%, ${lightness}%)`;
        
        // Always use white text for these darker backgrounds
        const textColor = '#ffffff';

        return { backgroundColor, textColor };
    }, [initials]);

    const gradientStyle: React.CSSProperties = {
        background: `linear-gradient(135deg, ${backgroundColor}, hsl(${parseInt(backgroundColor.slice(4, -1).split(',')[0]) + 10}, ${parseInt(backgroundColor.slice(4, -1).split(',')[1]) - 5}%, ${Math.max(5, parseInt(backgroundColor.slice(4, -1).split(',')[2]) - 10)}%))`,
        color: textColor,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontWeight: 'bold',
    };

    return (
        <Avatar {...props} style={{ ...props.style, ...gradientStyle }} sx={{
            height: 25,
            width: 25,
            padding: 0,
            margin: 0,
            fontSize: '0.7rem',
        }}>
           {initials}
        </Avatar>
    );
};

export default EventFiAvatar;