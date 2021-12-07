import * as React from 'react';
import { Grid } from '@mui/material';

import LeftSide from '../../components/message/LeftSide';
import RightSide from '../../components/message/RightSide';

export default function Conversation() {
    return (<Grid container spacing={0} sx={{
        display: 'flex',
        width: '100%',
        height: 'calc(100vh - 100px)',
        border: '1px solid #ddd',
        borderRadius: '3px',
        background: 'white',
        ml: 0
    }} >
        <Grid item xs={12} md={4} sx={{ display: { xs: 'none', md: 'block' }, width: '100%', height: '100%', overflow: 'hidden' }}>
            <LeftSide />
        </Grid>
        <Grid item xs={12} md={8} sx={{ width: '100%', height: '100%', overflow: 'hidden' }}>
            <RightSide />
        </Grid>
    </Grid >);
}