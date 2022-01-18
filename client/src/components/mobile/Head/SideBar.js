import * as React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Box, Drawer, Toolbar, IconButton, Avatar, Typography, Divider, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import FavoriteIcon from '@mui/icons-material/Favorite';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';

import { logout } from '../../../redux/actions/authAction';

const drawerWidth = '80%';

export default function SideBar(props) {
    const [mode, setMode] = useState(true);
    const dispatch = useDispatch();

    const handleModeToggle = () => {
        setMode(!mode);
    };

    return (<Drawer
        variant="temporary"
        open={props.drawerOpen}
        onClose={props.handleDrawerToggle}
        ModalProps={{
            keepMounted: true
        }}
        sx={{ '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth } }}
    >
        <Toolbar>
            <Box sx={{ flexGrow: 1 }} />
            <Box sx={{ direction: 'rtl' }} >
                {mode ? <IconButton color="default" aria-label="Light Mode"
                    onClick={handleModeToggle} >
                    <LightModeOutlinedIcon />
                </IconButton> : <IconButton color="default" aria-label="Dark Mode"
                    onClick={handleModeToggle} >
                    <DarkModeIcon />
                </IconButton>}
            </Box>
        </Toolbar>
        <Box sx={{ px: 2 }} >
            <Avatar src={props.auth.user.avatar} sx={{ width: 86, height: 86 }} />
            <Typography variant='h5' >{props.auth.user.fullname}</Typography>
            <Typography sx={{ fontSize: '14px' }} >{props.auth.user.username}</Typography>
        </Box>
        <Box sx={{ pt: 1 }} />
        <Divider />
        <List>
            <ListItem onClick={() => {
                window.location.href = `/messenger`;
            }}>
                <ListItemIcon>
                    <ChatBubbleIcon color="primary" />
                </ListItemIcon>
                <ListItemText primary="Messenger" sx={{ color: '#757575' }} />
            </ListItem>
            <ListItem onClick={() => {
                window.location.href = `/dating`;
            }}>
                <ListItemIcon>
                    <FavoriteIcon color="secondary" />
                </ListItemIcon>
                <ListItemText primary="Dating" sx={{ color: '#757575' }} />
            </ListItem>
            <ListItem onClick={() => {
                window.location.href = `/setting`;
            }}>
                <ListItemIcon>
                    <SettingsIcon />
                </ListItemIcon>
                <ListItemText primary="Setting" sx={{ color: '#757575' }} />
            </ListItem>
        </List>
        <Divider />
        <List>
            <ListItem onClick={() => {
                window.location.href = `/feedback`;
            }}>
                <ListItemText primary="Feedback" sx={{ color: '#757575' }} />
            </ListItem>
            <ListItem onClick={() => {
                window.location.href = `/invite`;
            }}>
                <ListItemText primary="Invite" sx={{ color: '#757575' }} />
            </ListItem>
            <ListItem onClick={() => {
                window.location.href = `/appfeatures`;
            }}>
                <ListItemText primary="App Features" sx={{ color: '#757575' }} />
            </ListItem>
        </List>
        <Divider />
        <List>
            <ListItem onClick={() => dispatch(logout())}>
                <ListItemIcon>
                    <LogoutIcon />
                </ListItemIcon>
                <ListItemText primary="Logout" sx={{ color: '#757575' }} />
            </ListItem>
        </List>
    </Drawer>);
}