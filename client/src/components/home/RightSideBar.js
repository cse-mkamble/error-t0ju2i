import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Box, Typography, IconButton, CircularProgress } from '@mui/material';
import ReplayIcon from '@mui/icons-material/Replay';

import UserCard from '../UserCard';
import FollowBtn from '../FollowBtn';
import { getSuggestions } from '../../redux/actions/suggestionsAction';

export default function RightSideBar() {
    const { auth, suggestions } = useSelector(state => state);
    const dispatch = useDispatch();

    return (
        <Box sx={{ mt: 1 }}>
            <UserCard user={auth.user} />
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', m: 1 }}>
                <Typography component='h5' color='error' sx={{ margin: '10px 0' }}>Suggestions for you</Typography>
                {
                    !suggestions.loading && <IconButton
                        aria-label="Reload"
                        color="error"
                        onClick={() => dispatch(getSuggestions(auth.token))}
                    >
                        <ReplayIcon />
                    </IconButton>
                }
            </Box>
            {
                suggestions.loading ? <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                    <CircularProgress />
                </Box> : <Box className="suggestions">
                    {
                        suggestions.users.map(user => (
                            <UserCard key={user._id} user={user} >
                                <FollowBtn user={user} />
                            </UserCard>
                        ))
                    }
                </Box>
            }
        </Box>
    );
}