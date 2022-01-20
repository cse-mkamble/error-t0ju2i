import * as React from 'react';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Box } from '@mui/material';

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
        <Box sx={{ display: { xs: 'none', md: 'block' } }} >
            <DesktopPost />
        </Box>
        <Box sx={{ display: { xs: 'block', md: 'none' } }} >
            Mobile Posts
            {/* <MobilePost id={id} post={post} /> */}
        </Box>
    </Box>);
}