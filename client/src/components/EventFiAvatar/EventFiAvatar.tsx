import React, { useMemo } from 'react';
import { Avatar, AvatarProps } from '@mui/material';

interface EventFiAvatarProps extends AvatarProps {
    initials?: string;
}

const EventFiAvatar: React.FC<EventFiAvatarProps> = ({ initials, ...props }) => {
    const { backgroundColor, textColor } = useMemo(() => {
        if (!initials) {
            return { backgroundColor: '#95A4FC', textColor: '#333333' };
        }

        const hash = initials.split('').reduce((acc, char) => {
            return char.charCodeAt(0) + ((acc << 5) - acc);
        }, 0);

        // Color schemes inspired by 95A4FC
        const colorSchemes = [
            { hue: 230, saturation: 92, lightness: 79 }, // 95A4FC (base color)
            { hue: 210, saturation: 85, lightness: 80 }, // Softer blue
            { hue: 250, saturation: 88, lightness: 82 }, // Softer purple
            { hue: 200, saturation: 80, lightness: 78 }, // Sky blue
            { hue: 270, saturation: 83, lightness: 81 }, // Lavender
        ];

        const selectedScheme = colorSchemes[hash % colorSchemes.length];
        const hue = (selectedScheme.hue + (hash % 20) - 10) % 360; // Slight hue variation
        const saturation = Math.max(75, Math.min(95, selectedScheme.saturation + (hash % 10) - 5));
        const lightness = Math.max(75, Math.min(85, selectedScheme.lightness + (hash % 10) - 5));

        const backgroundColor = `hsl(${hue}, ${saturation}%, ${lightness}%)`;
        
        // Use dark text for all backgrounds as they're light
        const textColor = '#fff';

        return { backgroundColor, textColor };
    }, [initials]);

    const gradientStyle: React.CSSProperties = {
        background: `linear-gradient(135deg, ${backgroundColor}, hsl(${(parseInt(backgroundColor.slice(4, -1).split(',')[0]) + 15) % 360}, ${parseInt(backgroundColor.slice(4, -1).split(',')[1]) - 5}%, ${parseInt(backgroundColor.slice(4, -1).split(',')[2])}%))`,
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