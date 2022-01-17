import * as React from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Box, Typography } from '@mui/material';

import LoadingData from "../../../components/LoadingData";
import Posts from "../../../components/Home/Posts";

let scroll = 0;

export default function Home() {

    const { homePosts } = useSelector(state => state);

    window.addEventListener('scroll', () => {
        if (window.location.pathname === '/') {
            scroll = window.pageYOffset
            return scroll;
        }
    });

    useEffect(() => {
        setTimeout(() => {
            window.scrollTo({ top: scroll, behavior: 'smooth' })
        }, 100)
    }, []);

    return (<Box>
        {homePosts.loading ? <LoadingData /> : (
            homePosts.result === 0 && homePosts.posts.length === 0
        ) ? <Typography component='div' variant='h3' sx={{ textAlign: 'center' }}>No Post</Typography>
            : <Posts />}
    </Box>);
}