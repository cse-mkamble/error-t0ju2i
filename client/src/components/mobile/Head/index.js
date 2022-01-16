import * as React from 'react';
import { useState } from 'react';
import { Box } from '@mui/material';

import TopBar from "./TopBar";
import BottomBar from "./BottomBar";
import SideBar from "./SideBar";

export default function Head() {
    const [drawerOpen, setDrawerOpen] = useState(false);

    const handleDrawerToggle = () => {
        setDrawerOpen(!drawerOpen);
    };

    return (<Box sx={{ pt: 6 }} >
        <TopBar handleDrawerToggle={handleDrawerToggle} />
        <BottomBar />
        <SideBar
            drawerOpen={drawerOpen}
            handleDrawerToggle={handleDrawerToggle}
        />
    </Box>);
}