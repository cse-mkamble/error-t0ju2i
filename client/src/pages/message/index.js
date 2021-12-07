import * as React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import LeftSide from '../../components/message/LeftSide';

export default function Message() {
    return (<Grid container spacing={0} sx={{
        display: 'flex',
        width: '100%',
        height: 'calc(100vh - 100px)',
        border: '1px solid #ddd',
        borderRadius: '3px',
        background: 'white',
        ml: 0
    }} >
        <Grid item xs={12} md={4} sx={{ width: '100%', height: '100%', overflow: 'hidden' }} >
            <LeftSide />
        </Grid>
        <Grid item xs={12} md={8} sx={{ display: { xs: 'none', md: 'block' } }} >
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flex: 'column', height: '100%' }}>
                <i className="fab fa-facebook-messenger"
                    style={{ fontSize: '5rem', color: 'dodgerblue' }} />
                <Typography variant='h4' sx={{ mx: 1 }}>Messenger</Typography>
            </Box>
        </Grid>
    </Grid >);
}