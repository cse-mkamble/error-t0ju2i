import * as React from 'react';
import { useSelector } from 'react-redux';

import {
    AppBar,
    Box,
    Toolbar,
    Typography,
    Link
} from '@mui/material';

import MenuBar from './Menu';
// import SearchComponent from './Search';

export default function HeaderBar() {

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="fixed" color='inherit'>
                <Toolbar sx={{ justifyContent: 'space-between' }}>
                    <Typography
                        noWrap
                        sx={{ display: { xs: 'none', sm: 'block' } }}
                    >
                        <Link href="/" underline="none">
                            <div style={{ display: 'flex' }}>
                                <div style={{ display: 'flex', justifyContent: 'center' }}>
                                    <img style={{ width: '32px', height: '32px' }} src='https://res.cloudinary.com/mayurkamble/image/upload/v1636887085/icon/bptheulgfynt1npaui36.png' alt='' />
                                </div>
                                <div>
                                    <div style={{ margin: '5px', fontFamily: "'Chocolate', sans-serif", fontSize: '20px', fontWeight: 'bolder', letterSpacing: '4px' }}>FunBook</div>
                                </div>
                            </div>
                        </Link>
                    </Typography>
                    <MenuBar />
                </Toolbar>
            </AppBar>
            <Box sx={{ mt: 10 }}></Box>
        </Box>
    )
}