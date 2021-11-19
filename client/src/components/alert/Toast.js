import React from 'react';

import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Stack from '@mui/material/Stack';

const Toast = ({ msg, handleShow, severityType }) => {
    return (
        <Stack sx={{ width: '100%' }} spacing={2}>
            <div
                style={{ top: '5px', right: '5px', minWidth: '300px', position: 'fixed', zIndex: 50 }}
            >
                <Alert
                    variant="filled"
                    severity={severityType}
                    onClose={handleShow}
                >
                    <AlertTitle>{msg.title}</AlertTitle>
                    {msg.body}
                </Alert>
            </div>
        </Stack>
    );
}

export default Toast;