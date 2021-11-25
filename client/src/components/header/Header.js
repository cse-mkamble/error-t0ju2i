import * as React from 'react';
import { useSelector } from 'react-redux';

import {
    AppBar,
    Box,
    Toolbar,
    Typography,
    Link,
    IconButton,
    Badge
} from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import TelegramIcon from '@mui/icons-material/Telegram';
import ExploreIcon from '@mui/icons-material/Explore';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircle from '@mui/icons-material/AccountCircle';

import MenuBar from './Menu';
import Search from './Search'



export default function HeaderBar() {

    const { theme } = useSelector(state => state)

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar sx={{ background: '#f8f9fa', justifyContent: 'space-between' }}>

                    <Typography
                        noWrap
                        sx={{ display: { xs: 'none', sm: 'block' } }}
                    >
                        <Link href="/" underline="none">
                            <div style={{ display: 'flex' }}>
                                <div style={{ display: 'flex', justifyContent: 'center' }}>
                                    <img style={{ width: '32px', height: '32px' }} src='https://res.cloudinary.com/mayurkamble/image/upload/v1636887085/icon/bptheulgfynt1npaui36.png' />
                                </div>
                                <div>
                                    <div style={{ margin: '6px 0 0 6px', fontFamily: "'Chocolate', sans-serif", fontSize: '20px', fontWeight: 'bolder', letterSpacing: '2px' }}>FunBook</div>
                                </div>
                            </div>
                        </Link>
                    </Typography>

                    <MenuBar />

                </Toolbar>
            </AppBar>
        </Box>
    )
}