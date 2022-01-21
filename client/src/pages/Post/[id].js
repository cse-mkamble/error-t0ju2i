import * as React from 'react';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Box, AppBar, Toolbar, IconButton, Typography } from '@mui/material';
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';

import { getPost } from '../../redux/actions/postAction';

const Post = () => {
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
        Post By Id
    </Box>);
}

export default Post;