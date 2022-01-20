import * as React from 'react';
import { Box, Typography, Link, IconButton } from '@mui/material';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ModeCommentOutlinedIcon from '@mui/icons-material/ModeCommentOutlined';

export default function PostThumbInGrid({ posts, result }) {
    if (result === 0) {
        return (<Box color='error' sx={{ my: 1, display: 'flex', justifyContent: 'center' }} >
            <Typography>No Post</Typography>
        </Box>);
    }

    return (<Box sx={{ width: '100%' }}>
        <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
            {posts.map(post => (
                <Link sx={{ cursor: 'pointer' }} key={post._id} href={`/post/${post._id}`}>
                    <div className="post_thumb_display_in_grid">
                        {post.images[0].url.match(/video/i)
                            ? <video controls src={post.images[0].url} alt={post.images[0].url} />
                            : <img src={post.images[0].url} alt={post.images[0].url} />}

                        <div className="post_thumb_menu">
                            <Box>
                                <Box sx={{ display: 'flex' }} >
                                    {post.likes.length}
                                    <IconButton color='inherit' >
                                        <FavoriteBorderOutlinedIcon />
                                    </IconButton>
                                </Box>
                                <Box sx={{ display: 'flex' }}>
                                    {post.comments.length}
                                    <IconButton color='inherit' >
                                        <ModeCommentOutlinedIcon />
                                    </IconButton>
                                </Box>
                            </Box>
                        </div>
                    </div>
                </Link>
            ))}
        </Box>
    </Box>);
}