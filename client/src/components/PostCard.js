import * as React from 'react';
import { Card } from '@mui/material';

import CardHeader from './home/post_card/CardHeader';
import CardBody from './home/post_card/CardBody';
import CardFooter from './home/post_card/CardFooter';

import Comments from './home/Comments';
import InputComment from './home/InputComment';

export default function PostCard({ post, theme }) {

    return (<Card sx={{ my: 1 }}>
        <CardHeader post={post} />
        <CardBody post={post} theme={theme} />
        <CardFooter post={post} />

        <Comments post={post} />
        <InputComment post={post} />
    </Card>)
}