import * as React from 'react';
import { useState, useEffect } from 'react';
import { Box } from '@mui/material';

import PostThumbInGrid from '../PostThumbInGrid';
import LoadingRole from '../LoadingRole';
import LoadMoreBtn from '../LoadMoreBtn';

import { getDataAPI } from '../../utils/fetchData'
import { PROFILE_TYPES } from '../../redux/actions/profileAction'

export default function PostsInGrid({ auth, id, dispatch, profile }) {
    const [posts, setPosts] = useState([]);
    const [result, setResult] = useState(9);
    const [page, setPage] = useState(0);
    const [load, setLoad] = useState(false);

    useEffect(() => {
        profile.posts.forEach(data => {
            if (data._id === id) {
                setPosts(data.posts);
                setResult(data.result);
                setPage(data.page);
            }
        })
    }, [profile.posts, id]);

    const handleLoadMore = async () => {
        setLoad(true);
        const res = await getDataAPI(`user_posts/${id}?limit=${page * 9}`, auth.token);
        const newData = { ...res.data, page: page + 1, _id: id };
        dispatch({ type: PROFILE_TYPES.UPDATE_POST, payload: newData });
        setLoad(false);
    }

    return (<Box sx={{ maxWidth: '800px', m: 'auto' }} >
        <PostThumbInGrid posts={posts} result={result} />
        {load && <LoadingRole />}
        <LoadMoreBtn result={result} page={page}
            load={load} handleLoadMore={handleLoadMore} />
    </Box>);
}