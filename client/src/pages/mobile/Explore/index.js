import * as React from "react";
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Box } from '@mui/material';

import LoadingData from "../../../components/LoadingData";
import PostThumb from '../../../components/PostThumb';
import LoadMorePosts from '../../../components/LoadMorePosts';
import { getDiscoverPosts, DISCOVER_TYPES } from '../../../redux/actions/discoverAction';
import { getDataAPI } from '../../../utils/fetchData';

export default function Explore() {
    const { auth, discover } = useSelector(state => state);
    const dispatch = useDispatch();
    const [load, setLoad] = useState(false);

    useEffect(() => {
        if (!discover.firstLoad) {
            dispatch(getDiscoverPosts(auth.token));
        }
    }, [dispatch, auth.token, discover.firstLoad])

    const handleLoadMore = async () => {
        setLoad(true);
        const res = await getDataAPI(`post_discover?num=${discover.page * 9}`, auth.token);
        dispatch({ type: DISCOVER_TYPES.UPDATE_POST, payload: res.data });
        setLoad(false);
    }

    return (<Box component="div">
        {discover.loading ? <LoadingData />
            : <PostThumb posts={discover.posts} result={discover.result} />}

        {load && <LoadingData />}

        {!discover.loading && <LoadMorePosts
            result={discover.result}
            page={discover.page}
            load={load}
            handleLoadMore={handleLoadMore} />}
    </Box>);
}