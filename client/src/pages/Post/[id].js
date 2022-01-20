import * as React from 'react';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Box, AppBar, Toolbar, IconButton, Typography } from '@mui/material';
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';

import MobilePost from '../mobile/Post';
import DesktopPost from '../desktop/Post';

import { getPost } from '../../redux/actions/postAction';

export default function Post() {
    const { id } = useParams();
    const [post, setPost] = useState([]);

    const { auth, detailPost } = useSelector(state => state);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPost({ detailPost, id, auth }));

        if (detailPost.length > 0) {
            const newArr = detailPost.filter(post => post._id === id);
            setPost(newArr);
        }
    }, [detailPost, dispatch, id, auth]);

    return (<Box sx={{ width: '100%' }}>
        <AppBar color="inherit">
            <Toolbar>
                <IconButton color="default" aria-label="Home"
                    onClick={() => {
                        window.location.href = `/`;
                    }}>
                    <ArrowBackOutlinedIcon />
                </IconButton>
                <Typography sx={{ color: '#757575' }} >Back</Typography>
            </Toolbar>
        </AppBar>
        <Box sx={{ display: { xs: 'none', md: 'block' } }} >
            <DesktopPost />
        </Box>
        <Box sx={{ display: { xs: 'block', md: 'none' } }} >
            <MobilePost id={id} post={post} />
        </Box>
    </Box>);
}