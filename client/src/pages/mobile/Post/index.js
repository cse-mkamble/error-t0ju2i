import * as React from 'react';
import { Box } from '@mui/material';

import LoadingData from '../../../components/LoadingData';
import PostCard from '../../../components/mobile/PostCard';

export default function Post({ post }) {
    return (<Box sx={{ py: 6 }}>
        {post.length === 0 && <LoadingData />}
        {post.map(item => (<PostCard key={item._id} post={item} />))}
    </Box>);
}