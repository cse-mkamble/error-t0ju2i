import * as React from 'react';
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Box, Grid, Avatar, Button, Typography, Divider, Link } from '@mui/material';

import EditProfile from './EditProfile';
import FollowBtn from '../FollowBtn';
import Followers from './Followers';
import Following from './Following';
import { GLOBALTYPES } from '../../redux/actions/globalTypes';

export default function Info({ id, auth, profile, dispatch }) {
    const [userData, setUserData] = useState([]);
    const [onEdit, setOnEdit] = useState(false);

    const history = useHistory();

    const [showFollowers, setShowFollowers] = useState(false);
    const [showFollowing, setShowFollowing] = useState(false);

    useEffect(() => {
        if (id === auth.user._id) {
            setUserData([auth.user]);
        } else {
            const newData = profile.users.filter(user => user._id === id);
            setUserData(newData);
        }
    }, [id, auth, dispatch, profile.users]);

    useEffect(() => {
        if (showFollowers || showFollowing || onEdit) {
            dispatch({ type: GLOBALTYPES.MODAL, payload: true });
        } else {
            dispatch({ type: GLOBALTYPES.MODAL, payload: false });
        }
    }, [showFollowers, showFollowing, onEdit, dispatch]);

    return (<Box>
        {userData.map(user => (<Box key={user._id} >
            <Box sx={{ maxWidth: '500px', margin: 'auto' }}>
                <Box>
                    <Grid container sx={{ px: 1 }} >
                        <Grid item xs={12} xs={4} sx={{ display: 'flex', justifyContent: 'center' }} >
                            <Avatar
                                alt=""
                                src={user.avatar}
                                sx={{ height: 86, width: 86 }}
                            ></Avatar>
                        </Grid>
                        <Grid item xs={12} xs={8} >
                            <Typography fullWidth component='div' variant='h6'>{user.username}</Typography>
                            {user._id === auth.user._id
                                ? <Button
                                    fullWidth
                                    size='small'
                                    variant="outlined"
                                    color='inherit'
                                    onClick={() => history.push(`/editprofile/${auth.user._id}`)}
                                    sx={{ textTransform: 'none' }}
                                >Edit Profile</Button>
                                : <FollowBtn user={user} />}
                        </Grid>
                    </Grid>
                </Box>
                <Box sx={{ p: '10px 20px' }}>
                    <Typography component='div' sx={{ fontWeight: 'bold', fontSize: '16px' }} >{user.fullname}</Typography>
                    <Typography component='div' sx={{ color: 'gray', fontSize: '12px' }}>{user.mobile}</Typography>
                    <Typography component='div' sx={{ fontSize: '12px' }}>{user.address}</Typography>
                    <Typography component='div' sx={{ fontWeight: 'bold', fontSize: '14px' }}>{user.email}</Typography>
                    <Link href={user.website} target="_blank" rel="noreferrer" sx={{ overflowWrap: 'break-word', fontSize: '12px' }}>{user.website}</Link>
                    <Typography component='div' color='error' sx={{ fontSize: '12px' }}>{user.story}</Typography>
                </Box>
                <Divider />
                <Box sx={{ my: 1, display: 'flex', justifyContent: 'space-around', color: 'darkgray', textAlign: 'center' }}>
                    {/* <Box>
                    <Typography fullWidth sx={{ fontWeight: 'bold', color: 'black', fontSize: '14px' }} >{user.followers.length}</Typography>
                    <Typography fullWidth sx={{ fontSize: '14px' }}>Post</Typography>
                </Box> */}
                    <Box sx={{ cursor: 'default' }} onClick={() => setShowFollowers(true)}>
                        <Typography fullWidth sx={{ fontWeight: 'bold', color: 'black', fontSize: '14px' }} >{user.followers.length}</Typography>
                        <Typography fullWidth sx={{ fontSize: '14px' }}>Follower</Typography>
                    </Box>
                    <Box sx={{ cursor: 'default' }} onClick={() => setShowFollowing(true)}>
                        <Typography fullWidth sx={{ fontWeight: 'bold', color: 'black', fontSize: '14px' }} >{user.following.length}</Typography>
                        <Typography fullWidth sx={{ fontSize: '14px' }}>Following</Typography>
                    </Box>
                </Box>
            </Box>
            {onEdit && <EditProfile setOnEdit={setOnEdit} />}
            {showFollowers && <Followers
                users={user.followers}
                setShowFollowers={setShowFollowers}
            />}
            {showFollowing && <Following
                users={user.following}
                setShowFollowing={setShowFollowing}
            />}
        </Box>))}
    </Box>);
}