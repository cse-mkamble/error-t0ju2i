import * as React from 'react';
import { useSelector } from 'react-redux';
import { Box, AppBar, Toolbar, IconButton, Fab, Avatar, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import VideoLibraryOutlinedIcon from '@mui/icons-material/VideoLibraryOutlined';
import ExploreOutlinedIcon from '@mui/icons-material/ExploreOutlined';

import HomeIcon from '@mui/icons-material/Home';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import ExploreIcon from '@mui/icons-material/Explore';

export default function BottomBar() {
    const { auth, currentTab } = useSelector(state => state);

    return (<Box sx={{ flexGrow: 1 }}>
        <AppBar position="fixed" color="primary" sx={{ top: 'auto', bottom: 0, background: '#fff' }}>
            <Toolbar>
                <Box sx={{ display: 'grid' }}>
                    <IconButton color="default" aria-label="Home"
                        onClick={() => {
                            window.location.href = `/`;
                        }}>
                        {currentTab.Tab === 'Home' ? <HomeIcon /> : <HomeOutlinedIcon />}
                    </IconButton>
                    <Typography sx={{ color: '#757575', fontSize: '14px' }} >Home</Typography>
                </Box>
                <Box sx={{ flexGrow: 1 }} />
                <Box sx={{ display: 'grid' }}>
                    <IconButton color="default" aria-label="Watch"
                        onClick={() => {
                            window.location.href = `/watch`;
                        }}>
                        {currentTab.Tab === 'Watch' ? <VideoLibraryIcon /> : <VideoLibraryOutlinedIcon />}
                    </IconButton>
                    <Typography sx={{ color: '#757575', fontSize: '14px' }} >Watch</Typography>
                </Box>
                <Box sx={{ flexGrow: 1 }} />
                <Fab color="primary" aria-label="add">
                    <AddIcon />
                </Fab>
                <Box sx={{ flexGrow: 1 }} />
                <Box sx={{ display: 'grid' }}>
                    <IconButton color="default" aria-label="Explore"
                        onClick={() => {
                            window.location.href = `/explore`;
                        }}>
                        {currentTab.Tab === 'Explore' ? <ExploreIcon /> : <ExploreOutlinedIcon />}
                    </IconButton>
                    <Typography sx={{ color: '#757575', fontSize: '14px' }} >Explore</Typography>
                </Box>
                <Box sx={{ flexGrow: 1 }} />
                <Box sx={{ display: 'grid' }}>
                    <IconButton color="default" aria-label="Account Of Current User"
                        onClick={() => window.location.href = `/profile/${auth.user._id}`}>
                        <Avatar src={auth.user.avatar} sx={{ width: 24, height: 24 }} />
                    </IconButton>
                    <Typography sx={{ color: '#757575', fontSize: '14px' }} >Profile</Typography>
                </Box>
            </Toolbar>
        </AppBar>
    </Box>);
}