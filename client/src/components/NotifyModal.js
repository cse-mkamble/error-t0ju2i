import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
    Avatar,
    AppBar,
    Box,
    Button,
    Toolbar,
    Typography,
    Link,
    IconButton,
    Badge,
    Menu,
    MenuItem
} from '@mui/material';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import NotificationsOffIcon from '@mui/icons-material/NotificationsOff';
import CircleIcon from '@mui/icons-material/Circle';

import NoNotice from '../images/notice.png'
// import Avatar from './Avatar'
import moment from 'moment'
import { isReadNotify, NOTIFY_TYPES, deleteAllNotifies } from '../redux/actions/notifyAction'

export default function NotifyModal() {
    const { auth, notify } = useSelector(state => state)
    const dispatch = useDispatch()

    const handleIsRead = (msg) => {
        dispatch(isReadNotify({ msg, auth }))
    }

    const handleSound = () => {
        dispatch({ type: NOTIFY_TYPES.UPDATE_SOUND, payload: !notify.sound })
    }

    const handleDeleteAll = () => {
        const newArr = notify.data.filter(item => item.isRead === false)
        if (newArr.length === 0) return dispatch(deleteAllNotifies(auth.token))

        if (window.confirm(`You have ${newArr.length} unread notices. Are you sure you want to delete all?`)) {
            return dispatch(deleteAllNotifies(auth.token))
        }
    }

    return (
        <Box sx={{ minWidth: '300px', padding: '0 10px' }}>
            <div style={{ padding: '0 10px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Typography>Notification</Typography>
                {
                    notify.sound
                        ?
                        <IconButton
                            size="large"
                            edge="start"
                            color="error"
                            aria-label="Discover"
                            onClick={handleSound}
                        >
                            <NotificationsActiveIcon />
                        </IconButton>
                        : <IconButton
                            size="large"
                            edge="start"
                            color="error"
                            aria-label="Discover"
                            onClick={handleSound}
                        >
                            <NotificationsOffIcon />
                        </IconButton>
                }
            </div>
            <hr />
            {
                notify.data.length === 0 &&
                <img src={NoNotice} alt="NoNotice" style={{ width: '100%' }} />
            }
            <div style={{ maxHeight: 'calc(100vh - 200px)', overflow: 'auto' }}>
                {
                    notify.data.map((msg, index) => (
                        <div key={index} style={{ marginBottom: '10px', padding: '0 10px' }} >
                            <Link to={`${msg.url}`} underline="none" sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', color: 'black' }} >
                                <Avatar src={msg.user.avatar} />

                                <div style={{ margin: '10px', flex: 'fill' }}>
                                    <div>
                                        <strong style={{ marginRight: '5px' }}>{msg.user.username}</strong>
                                        <span>{msg.text}</span>
                                    </div>
                                    {msg.content && <small>{msg.content.slice(0, 20)}...</small>}
                                </div>
                                {
                                    msg.image &&
                                    <div style={{ width: '30px' }}>
                                        {
                                            msg.image.match(/video/i)
                                                ? <video src={msg.image} width="100%" />
                                                : <Avatar src={msg.image} sx={{ width: 24, height: 24 }} />
                                        }
                                    </div>
                                }

                            </Link>
                            <small style={{ padding: '0 10px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', color: 'gray' }}>
                                {moment(msg.createdAt).fromNow()}
                                {
                                    !msg.isRead && <CircleIcon sx={{ width: '10px' }} color='primary' />
                                }
                            </small>
                        </div>
                    ))
                }
            </div>

            <hr style={{ marginBottom: '10px' }} />
            <div style={{ direction: 'rtl' }} >
                <Button variant="text" onClick={handleDeleteAll} >Delete All</Button>
            </div>

        </Box>
    )
}