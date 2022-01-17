import * as React from "react";
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Box } from '@mui/material';

import PostCard from "./PostCard";

// import LoadMoreBtn from '../LoadMoreBtn';
import LoadingData from "../LoadingData";

import { POST_TYPES } from '../../redux/actions/postAction';
import { getDataAPI } from '../../utils/fetchData';

export default function Posts() {
    const { auth, homePosts } = useSelector(state => state);
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

    return (<Box>
        {homePosts.posts.map(post => (
            <PostCard key={post._id} post={post} />
        ))}
        {load && <LoadingData />}

    </Box>);
}