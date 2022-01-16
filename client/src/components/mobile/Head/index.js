import * as React from 'react';
import { Box } from '@mui/material';

import TopBar from "./TopBar.js";
import BottomBar from "./BottomBar.js";

export default function Head() {
    return (<Box sx={{ pt: 6 }} >
        <TopBar />
        <BottomBar />
    </Box>);
}