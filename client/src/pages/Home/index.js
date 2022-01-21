import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Box } from '@mui/material';

import DesktopHead from '../../components/Desktop/Head';
import MobileHead from '../../components/Mobile/Head';

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
        <Box sx={{ display: { xs: 'none', md: 'block' } }} >
            {auth.token && <DesktopHead />}
            Desktop Home
        </Box>
        <Box sx={{ display: { xs: 'block', md: 'none' } }} >
            {auth.token && <MobileHead />}
            Mobile Home
        </Box>
    </Box>);
}