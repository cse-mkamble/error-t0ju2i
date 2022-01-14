import * as React from 'react';
import { Box } from '@mui/material';

import DesktopToast from "../desktop/Toast.js";
import MobileToast from "../mobile/Toast.js";

export default function Toast({ msg, handleShow, severityType }) {
    return (<Box>
        <Box sx={{ display: { xs: 'none', sm: 'block' } }} >
            <DesktopToast
                msg={msg}
                handleShow={handleShow}
                severityType={severityType}
            />
        </Box>
        <Box sx={{ display: { xs: 'flex', sm: 'none' } }} >
            <MobileToast
                msg={msg}
                handleShow={handleShow}
                severityType={severityType}
            />
        </Box>
    </Box>);
}