import React from 'react';
import { useState } from 'react';
import Stack from '@mui/material/Stack';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function DesktopToast({ msg, handleShow, severityType }) {
    const [state, setState] = useState({
        open: true,
        vertical: 'top',
        horizontal: 'right',
    });

    const { vertical, horizontal, open } = state;

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setState({ ...state, open: false });
    };

    return (<Stack spacing={2} sx={{ width: '100%' }}>
        <Snackbar anchorOrigin={{ vertical, horizontal }} open={open} autoHideDuration={6000} onClose={handleClose}>
            <Alert
                onClose={handleShow}
                severity={severityType}
                variant="filled"
                sx={{ width: '100%' }}
            >
                <AlertTitle>{msg.title}</AlertTitle>
                {msg.body}
            </Alert>
        </Snackbar>
    </Stack>);
}