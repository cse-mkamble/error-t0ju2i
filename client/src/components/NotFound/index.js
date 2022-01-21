import { Box, Typography } from '@mui/material';
export default function NotFound() {
    return (<Box component="div" sx={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Typography component="h6" variant="h4" >Page Not Found!</Typography>
    </Box>);
}