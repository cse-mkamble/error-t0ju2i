import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
    AppBar,
    Box,
    Toolbar,
    Typography,
    Link,
    IconButton,
    Badge,
    Menu,
    MenuItem
} from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import TelegramIcon from '@mui/icons-material/Telegram';
import ExploreIcon from '@mui/icons-material/Explore';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircle from '@mui/icons-material/AccountCircle';

import NotifyModal from '../NotifyModal';

export default function MenuBar() {

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const { auth, theme, notify } = useSelector(state => state)
    const dispatch = useDispatch()

    return (
        <div className='headerMenu'>

            <IconButton
                size="large"
                color="primary"
                aria-label="Home"
                href='/'
            >
                <HomeIcon />
            </IconButton>

            <IconButton
                size="large"
                color="primary"
                aria-label="Message"
                href='/message'
            >
                <TelegramIcon />
            </IconButton>

            <IconButton
                size="large"
                color="primary"
                aria-label="Discover"
                href='/discover'
            >
                <ExploreIcon />
            </IconButton>

            <IconButton
                id="basic-button"
                aria-controls="basic-menu"
                size="large"
                color="primary"
                aria-label="Notifications"
                onClick={handleClick}
            >
                <Badge badgeContent={notify.data.length} color="error">
                    <NotificationsIcon />
                </Badge>
            </IconButton>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                <NotifyModal />
            </Menu>

            <IconButton
                size="large"
                aria-label="Account Of Current User"
                aria-controls="primary-search-account-menu"
                aria-haspopup="true"
                color="primary"
            >
                <AccountCircle />
            </IconButton>

        </div>
    )
}