import * as React from 'react';
import { Box, CircularProgress } from '@mui/material';

export default function LoadingData() {
    return (<Box sx={{ py: 2, display: 'flex', justifyContent: 'center' }}>
        <CircularProgress />
    </Box>);
}