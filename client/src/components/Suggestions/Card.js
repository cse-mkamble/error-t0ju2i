import * as React from 'react';
import { Box, Avatar, Typography, Link } from '@mui/material';

export default function SuggestionsCard({ children, user }) {
    return (<Box>
        <Box sx={{ px: 1, py: 2, width: '120px', border: '1px solid #d7d7d7', background: '#ffffff', borderRadius: 1 }}>
            <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center' }} >
                <Avatar sx={{ width: 48, height: 48 }} alt="User Avatar" src={user.avatar} />
            </Box>
            <Box sx={{ height: '14vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Link sx={{ textDecoration: 'none', color: 'black' }} href={`/profile/${user._id}`}>
                    <Typography fontSize='12px' fontWeight='bold' sx={{ textAlign: 'center' }} >{user.fullname}</Typography>
                    <Typography fontSize='12px' sx={{ textAlign: 'center' }} >{user.username.length < 8 ? user.username : user.username.slice(0, 8) + '...'}</Typography>
                </Link>
            </Box>
            {children}
        </Box>
    </Box>);
}