import * as React from 'react';
import { Box, AppBar, Toolbar, IconButton, Typography, Badge } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';

export default function TopBar() {
    return (<Box sx={{ flexGrow: 1 }}>
        <AppBar position="fixed" sx={{ background: '#fff' }}>
            <Toolbar variant="dense">
                <IconButton edge="start" color="primary" aria-label="menu">
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" color="primary" component="div">
                    FunBook
                </Typography>
                <Box sx={{ flexGrow: 1 }} />
                <Box component="div">
                    <IconButton color="primary" aria-label="search">
                        <SearchIcon />
                    </IconButton>
                    <IconButton
                        aria-label="show notifications"
                        color="primary"
                    >
                        <Badge badgeContent={17} color="error">
                            <NotificationsIcon />
                        </Badge>
                    </IconButton>
                </Box>
            </Toolbar>
        </AppBar>
    </Box>);
}