import * as React from 'react';
import { Box, CircularProgress } from '@mui/material';

export default function LoadingRole() {
    return (<Box sx={{ mt: 2, display: 'flex', justifyContent: 'center' }}>
        <CircularProgress />
    </Box>);
}