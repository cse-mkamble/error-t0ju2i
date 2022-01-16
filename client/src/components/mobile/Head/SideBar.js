import * as React from 'react';
import { Box, Drawer } from '@mui/material';

const drawerWidth = '80%';

export default function SideBar(props) {
    return (<Drawer
        variant="temporary"
        open={props.drawerOpen}
        onClose={props.handleDrawerToggle}
        ModalProps={{
            keepMounted: true
        }}
        sx={{ '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth } }}
    >
        <Box>
            Hello
        </Box>
    </Drawer>);
}