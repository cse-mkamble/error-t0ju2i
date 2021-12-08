import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
    Avatar,
    IconButton,
    Badge,
    Menu,
    MenuItem,
    Divider,
    FormLabel
} from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import TelegramIcon from '@mui/icons-material/Telegram';
import ExploreIcon from '@mui/icons-material/Explore';
import NotificationsIcon from '@mui/icons-material/Notifications';
import PersonIcon from '@mui/icons-material/Person';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import LogoutIcon from '@mui/icons-material/Logout';
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';

import NotifyModal from '../NotifyModal';
import { GLOBALTYPES } from '../../redux/actions/globalTypes';
import { logout } from '../../redux/actions/authAction';

export default function MenuBar(props) {

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const [accAnchorEl, setAccAnchorEl] = React.useState(null);
    const openAcc = Boolean(accAnchorEl);

    const handleAccClick = (event) => {
        setAccAnchorEl(event.currentTarget);
    };
    const handleAccClose = () => {
        setAccAnchorEl(null);
    };

    const { auth, theme, notify } = useSelector(state => state)
    const dispatch = useDispatch()

    return (
        <div className='headerMenu'>
            <IconButton
                size="small"
                aria-label="Home"
                color="inherit"
                href='/'
            >
                <HomeIcon />
            </IconButton>

            <IconButton
                size="small"
                aria-label="Message"
                color="inherit"
                href='/message'
            >
                <TelegramIcon />
            </IconButton>

            <IconButton
                size="small"
                aria-label="Create Post"
                color="inherit"
                onClick={() => dispatch({ type: GLOBALTYPES.STATUS, payload: true })}
            >
                <AddBoxOutlinedIcon />
            </IconButton>

            <IconButton
                size="small"
                aria-label="Discover"
                color="inherit"
                href='/discover'
            >
                <ExploreIcon />
            </IconButton>

            <IconButton
                id="basic-button"
                aria-controls="basic-menu"
                size="small"
                color="inherit"
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
                size="small"
                aria-label="Account Of Current User"
                id="primary-search-account-button"
                aria-controls="primary-search-account-menu"
                aria-haspopup="true"
                color="primary"
                onClick={handleAccClick}
            >
                <Avatar src={auth.user.avatar} sx={{ width: 24, height: 24 }} />
            </IconButton>
            <Menu
                id="primary-search-account-menu"
                anchorEl={accAnchorEl}
                open={openAcc}
                onClose={handleAccClose}
                MenuListProps={{
                    'aria-labelledby': 'primary-search-account-button',
                }}
            >
                <MenuItem onClick={() => window.location.href = `/profile/${auth.user._id}`} >
                    <PersonIcon aria-label="Profile" color="primary" />
                    <FormLabel sx={{ mx: 1 }}>Profile</FormLabel>
                </MenuItem>
                {/* {theme ? <MenuItem onClick={() => dispatch({
                    type: GLOBALTYPES.THEME, payload: !theme
                })} >
                    <LightModeIcon aria-label="Light Mode"
                        color="primary" />
                    <FormLabel sx={{ mx: 1 }}>Light Mode</FormLabel>
                </MenuItem > : <MenuItem onClick={() => dispatch({
                    type: GLOBALTYPES.THEME, payload: !theme
                })} >
                    <DarkModeIcon aria-label="Light Mode"
                        color="primary" />
                    <FormLabel sx={{ mx: 1 }}>Dark Mode</FormLabel>
                </MenuItem >} */}
                <Divider />
                <MenuItem onClick={() => dispatch(logout())} >
                    <LogoutIcon aria-label="Logout"
                        color="primary" />
                    <FormLabel sx={{ mx: 1 }}>Logout</FormLabel>
                </MenuItem>
            </Menu>

        </div >
    )
}