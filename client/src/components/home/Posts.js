import * as React from 'react';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Box, CircularProgress } from '@mui/material';

import PostCard from '../PostCard';
import LoadMoreBtn from '../LoadMoreBtn';
import { getDataAPI } from '../../utils/fetchData';
import { POST_TYPES } from '../../redux/actions/postAction';

export default function Posts() {
    const { homePosts, auth, theme } = useSelector(state => state);
    const dispatch = useDispatch();
    const [load, setLoad] = useState(false);

    const handleLoadMore = async () => {
        setLoad(true);
        const res = await getDataAPI(`posts?limit=${homePosts.page * 9}`, auth.token);
        dispatch({
            type: POST_TYPES.GET_POSTS,
            payload: { ...res.data, page: homePosts.page + 1 }
        });
        setLoad(false);
    }

    return (
        <Box>
            {homePosts.posts.map(post => (
                <PostCard key={post._id} post={post} theme={theme} />
            ))}
            {load && <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <CircularProgress />
            </Box>}
            <LoadMoreBtn result={homePosts.result} page={homePosts.page}
                load={load} handleLoadMore={handleLoadMore} />
        </Box>
    );
}
