import * as React from 'react';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { Box, Button } from '@mui/material';

import { follow, unfollow } from '../redux/actions/profileAction';
import { MESS_TYPES } from '../redux/actions/messageAction';

export default function FollowBtn({ user }) {
    const [followed, setFollowed] = useState(false);

    const { auth, profile, socket } = useSelector(state => state);
    const dispatch = useDispatch();
    const _dispatch = useDispatch();
    const history = useHistory();

    const [load, setLoad] = useState(false);

    useEffect(() => {
        if (auth.user.following.find(item => item._id === user._id)) {
            setFollowed(true);
        }
        return () => setFollowed(false);
    }, [auth.user.following, user._id]);

    const handleFollow = async () => {
        if (load) return;

        setFollowed(true);
        setLoad(true);
        await dispatch(follow({ users: profile.users, user, auth, socket }));
        setLoad(false);
    }

    const handleUnFollow = async () => {
        if (load) return;
        setFollowed(false);
        setLoad(true);
        await dispatch(unfollow({ users: profile.users, user, auth, socket }));
        setLoad(false);
    }

    const handleAddUser = (user) => {
        _dispatch({ type: MESS_TYPES.ADD_USER, payload: { ...user, text: '', media: [] } })
        // dispatch({ type: MESS_TYPES.CHECK_ONLINE_OFFLINE, payload: online })
        return history.push(`/message/${user._id}`)
    }

    return (<Box>
        {followed ? <Box sx={{ display: 'flex' }}>
            <Box key={user._id} sx={{ width: '50%', pr: 1 }}>
                <Button size='small' fullWidth variant="contained" color="info" onClick={() => handleAddUser(user)}>Message</Button>
            </Box>
            <Box sx={{ width: '50%' }}>
                <Button size='small' fullWidth variant="outlined" color="error" onClick={handleUnFollow}>UnFollow</Button>
            </Box>
        </Box> : <Button size='small' fullWidth variant="contained" color="info" onClick={handleFollow}>Follow</Button>}
    </Box>);
}