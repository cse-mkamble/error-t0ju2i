import * as React from 'react';
import { Box } from '@mui/material';

import MobileHome from '../mobile/Home';
import DesktopHome from '../desktop/Home';

export default function Home() {
    return (<Box>
        <Box sx={{ display: { xs: 'none', sm: 'block' } }} >
            <DesktopHome />
        </Box>
        <Box sx={{ display: { xs: 'flex', sm: 'none' } }} >
            <MobileHome />
        </Box>
    </Box>);
}