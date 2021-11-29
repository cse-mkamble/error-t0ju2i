import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Box, Button, Avatar } from '@mui/material';

import { GLOBALTYPES } from '../../redux/actions/globalTypes';

export default function Status() {
    const { auth } = useSelector(state => state);
    const dispatch = useDispatch();

    return (
        <Box sx={{ padding: '10px', display: 'flex' }}>
            <Box sx={{ mr: 1 }}><Avatar src={auth.user.avatar} /></Box>
            <Button
                fullWidth
                size='small'
                color='info'
                variant="outlined"
                sx={{ display: 'flex', justifyContent: 'flex-start', textTransform: 'none' }}
                onClick={() => dispatch({ type: GLOBALTYPES.STATUS, payload: true })}
            >{auth.user.username}, what are you thinking?</Button>
        </Box>
    );
}
