import * as React from 'react';
import { useSelector } from 'react-redux';
import { Avatar as AvatarMUIComponent } from '@mui/material';

export default function Avatar({ src, size }) {
    const { theme } = useSelector(state => state);
    return (
        <AvatarMUIComponent src={src} alt="avatar" sx={{ filter: `${theme ? 'invert(1)' : 'invert(0)'}` }} />
    );
}