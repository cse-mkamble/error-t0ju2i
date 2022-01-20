import * as React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Box } from '@mui/material';

import DesktopHead from '../../components/desktop/Head';
import MobileHead from '../../components/mobile/Head';

import { getProfileUsers } from '../../redux/actions/profileAction';

export default function Profile() {
    const { profile, auth } = useSelector(state => state);
    const dispatch = useDispatch();
    const { id } = useParams();
    const [activeTab, setActiveTab] = useState('GridViewPost');

    useEffect(() => {
        if (profile.ids.every(item => item !== id)) {
            dispatch(getProfileUsers({ id, auth }));
        }
    }, [id, auth, dispatch, profile.ids]);
    return (<Box sx={{ width: '100%' }}>
        <Box sx={{ display: { xs: 'none', sm: 'block' } }} >
            {auth.token && <DesktopHead />}
        </Box>
        <Box sx={{ display: { xs: 'block', sm: 'none' } }} >
            {auth.token && <MobileHead />}
        </Box>

    </Box>);
}