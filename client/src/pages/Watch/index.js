import * as React from 'react';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Box } from '@mui/material';

import DesktopHead from '../../components/desktop/Head';
import MobileHead from '../../components/mobile/Head';

import MobileWatch from '../mobile/Watch';
import DesktopWatch from '../desktop/Watch';

import { GLOBALTYPES } from '../../redux/actions/globalTypes';

export default function Watch() {
    const dispatch = useDispatch();
    const { auth } = useSelector(state => state);

    useEffect(() => {
        dispatch({
            type: GLOBALTYPES.CURRENTTAB,
            payload: {
                Tab: 'Watch'
            }
        });
    }, []);

    return (<Box sx={{ width: '100%' }}>
        <Box sx={{ display: { xs: 'none', sm: 'block' } }} >
            {auth.token && <DesktopHead />}
            <DesktopWatch />
        </Box>
        <Box sx={{ display: { xs: 'block', sm: 'none' } }} >
            {auth.token && <MobileHead />}
            <MobileWatch />
        </Box>
    </Box>);
}