import * as React from 'react';
import { Box, Typography, Link, IconButton } from '@mui/material';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ModeCommentOutlinedIcon from '@mui/icons-material/ModeCommentOutlined';

export default function PostThumb({ posts, result }) {
    if (result === 0) {
        return (<Box color='error' sx={{ my: 1, display: 'flex', justifyContent: 'center' }} >
            <Typography>No Post</Typography>
        </Box>);
    }

    return (<Box>
        {posts.map(post => (
            <Link sx={{ cursor: 'pointer' }} key={post._id} href={`/post/${post._id}`}>
                <div className="post_thumb_display">
                    {post.images[0].url.match(/video/i)
                        ? <video controls src={post.images[0].url} alt={post.images[0].url} />
                        : <img src={post.images[0].url} alt={post.images[0].url} />}

                    <div className="post_thumb_menu">
                        <Box sx={{ display: 'flex' }} >
                            {post.likes.length}
                            <IconButton size='large' color='inherit' >
                                <FavoriteBorderOutlinedIcon fontSize="inherit" />
                            </IconButton>
                        </Box>
                        <Box sx={{ display: 'flex' }}>
                            {post.comments.length}
                            <IconButton size='large' color='inherit' >
                                <ModeCommentOutlinedIcon fontSize="inherit" />
                            </IconButton>
                        </Box>
                    </div>
                </div>
            </Link>
        ))}
    </Box>);
}