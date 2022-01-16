import * as React from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Box } from '@mui/material';

import TopBar from "./TopBar";
import BottomBar from "./BottomBar";
import SideBar from "./SideBar";

export default function Head() {
    const { auth, currentTab } = useSelector(state => state);
    const [drawerOpen, setDrawerOpen] = useState(false);

    const handleDrawerToggle = () => {
        setDrawerOpen(!drawerOpen);
    };

    return (<Box sx={{ pt: 6 }} >
        <TopBar handleDrawerToggle={handleDrawerToggle} />
        <BottomBar auth={auth} currentTab={currentTab} />
        <SideBar
            auth={auth}
            drawerOpen={drawerOpen}
            handleDrawerToggle={handleDrawerToggle}
        />
    </Box>);
}