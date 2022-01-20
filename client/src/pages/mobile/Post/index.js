import * as React from 'react';
import { Box } from '@mui/material';

import LoadingData from '../../../components/LoadingData';

export default function Post({ id, post }) {
    return (<Box>
        {post.length === 0 && <LoadingData />}
    </Box>);
}