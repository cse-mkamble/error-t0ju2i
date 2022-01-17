import * as React from "react";
import { Box } from '@mui/material';

import PostCardHeader from "./Header";
import PostCardBody from "./Body";

export default function PostCard({ post }) {
    return (<Box sx={{ mb: 2, border: '1px solid #d7d7d7', background: '#ffffff' }}>
        <PostCardHeader post={post} />
        <PostCardBody post={post} />
    </Box>);
}