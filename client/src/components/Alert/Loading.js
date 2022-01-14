import * as React from 'react';
import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';

import imgLoading from "../../images/loading.gif";

const LoadingBox = styled(Box)(({ }) => ({
    width: '100%',
    height: '100%',
    pointerEvents: 'none',
    background: '#ffffff',
    top: 0,
    left: 0,
    zIndex: 50,
    position: 'fixed',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

export default function Loading() {
    return (<LoadingBox>
        <img src={imgLoading} alt='Loding' />
    </LoadingBox>);
}