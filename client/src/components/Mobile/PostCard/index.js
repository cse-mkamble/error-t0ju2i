import { Box } from '@mui/material';

import CardHeader from '../../Home/PostCard/Header';
import CardBody from '../../Home/PostCard/Body';
import CardFooter from '../../Home/PostCard/Footer[id]';
import Comments from '../../Home/Comments';
import InputComment from '../../Home/InputComment';

export default function Post({ post }) {
    return (<Box sx={{ border: '1px solid #d7d7d7', background: '#ffffff' }}>
        <CardHeader post={post} />
        <CardBody post={post} />
        <CardFooter post={post} />

        <Comments post={post} />
        <InputComment post={post} />
    </Box>);
}