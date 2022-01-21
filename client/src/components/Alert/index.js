import { useSelector, useDispatch } from 'react-redux';
import { Box } from '@mui/material';

import Loading from './Loading';
import Toast from './Toast';

import { GLOBALTYPES } from '../../redux/actions/globalTypes';

export default function Alert() {
    const { alert } = useSelector(state => state);
    const dispatch = useDispatch();
    return (<Box>
        {alert.loading && <Loading />}
        {alert.error && <Toast msg={{ title: 'Error', body: alert.error }}
            handleShow={() => dispatch({ type: GLOBALTYPES.ALERT, payload: {} })}
            severityType="error" />}
        {alert.success && <Toast msg={{ title: 'Success', body: alert.success }}
            handleShow={() => dispatch({ type: GLOBALTYPES.ALERT, payload: {} })}
            severityType="success" />}
    </Box>);
}