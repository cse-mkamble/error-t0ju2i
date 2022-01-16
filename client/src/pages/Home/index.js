import * as React from 'react';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Box } from '@mui/material';

import DesktopHead from '../../components/desktop/Head';
import MobileHead from '../../components/mobile/Head';

import MobileHome from '../mobile/Home';
import DesktopHome from '../desktop/Home';

import { GLOBALTYPES } from '../../redux/actions/globalTypes';

export default function Home() {
    const dispatch = useDispatch();
    const { auth } = useSelector(state => state);

    useEffect(() => {
        dispatch({
            type: GLOBALTYPES.CURRENTTAB,
            payload: {
                Tab: 'Home'
            }
        });
    }, []);

    return (<Box sx={{ width: '100%' }}>
        <Box sx={{ display: { xs: 'none', sm: 'block' } }} >
            {auth.token && <DesktopHead />}
            <DesktopHome />
        </Box>
        <Box sx={{ display: { xs: 'block', sm: 'none' } }} >
            {auth.token && <MobileHead />}
            <MobileHome />
        </Box>
    </Box>);
}