import * as React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Avatar, Typography, Box } from '@mui/material';

export default function UserCard({ children, user, border, handleClose, setShowFollowers, setShowFollowing, msg }) {
    const { theme } = useSelector(state => state);
    const handleCloseAll = () => {
        if (handleClose) handleClose();
        if (setShowFollowers) setShowFollowers(false);
        if (setShowFollowing) setShowFollowing(false);
    }
    const showMsg = (user) => {
        return (
            <Box>
                <Typography sx={{ filter: theme ? 'invert(1)' : 'invert(0)' }} >
                    {user.text}
                </Typography>
                {
                    user.media.length > 0 &&
                    <div>
                        {user.media.length} <i className="fas fa-image" />
                    </div>
                }
                {
                    user.call &&
                    <span className="material-icons">
                        {
                            user.call.times === 0
                                ? user.call.video ? 'videocam_off' : 'phone_disabled'
                                : user.call.video ? 'video_camera_front' : 'call'
                        }
                    </span>
                }
            </Box>
        )
    }

    return (<Box sx={{ width: '100%', padding: '10px', display: 'flex', justifyContent: 'space-between', alignItem: 'center' }}>
        <Box>
            <Link
                style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', color: 'black' }}
                to={`/profile/${user._id}`}
                onClick={handleCloseAll}
            >
                <Avatar alt="" src={user.avatar} />
                <Box sx={{ marginLeft: '5px', transform: 'translateY(-2px)' }}>
                    <span style={{ display: 'block' }}>{user.username}</span>
                    <small style={{ opacity: 0.7 }}>
                        {msg ? showMsg(user)
                            : user.fullname
                        }
                    </small>
                </Box>
            </Link>
        </Box>
        {children}
    </Box>);
}
