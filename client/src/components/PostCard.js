import * as React from 'react';
import { Box, Divider } from '@mui/material';

import CardHeader from './home/post_card/CardHeader';
import CardBody from './home/post_card/CardBody';
import CardFooter from './home/post_card/CardFooter';

import Comments from './home/Comments';
import InputComment from './home/InputComment';

export default function PostCard({ post, theme }) {

    return (<Box sx={{ mb: 4, border: '1px solid #bfbfbf' }}>
        <CardHeader post={post} />
        <CardBody post={post} theme={theme} />
        <CardFooter post={post} />

        <Comments post={post} />
        <Divider />
        <InputComment post={post} />
    </Box>);
}