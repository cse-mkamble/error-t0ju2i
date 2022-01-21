import { Box } from '@mui/material';
import DesktopToast from "../Desktop/Toast";
import MobileToast from "../Mobile/Toast";
export default function Toast({ msg, handleShow, severityType }) {
    return (<Box>
        <Box sx={{ display: { xs: 'none', sm: 'block' } }} >
            <DesktopToast
                msg={msg}
                handleShow={handleShow}
                severityType={severityType}
            />
        </Box>
        <Box sx={{ display: { xs: 'block', sm: 'none' } }} >
            <MobileToast
                msg={msg}
                handleShow={handleShow}
                severityType={severityType}
            />
        </Box>
    </Box>);
}