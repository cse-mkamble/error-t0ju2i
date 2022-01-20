import * as React from 'react';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Box, CardActions, IconButton, Typography } from '@mui/material';
import ChatIcon from '@mui/icons-material/Chat';
import ShortcutIcon from '@mui/icons-material/Shortcut';

import LikeButton from '../../LikeButton';
import ShareModal from '../../ShareModal';
import { likePost, unLikePost } from '../../../redux/actions/postAction';
import { BASE_URL } from '../../../utils/config';

export default function PostCardFooter({ post }) {
    const [isLike, setIsLike] = useState(false);
    const [loadLike, setLoadLike] = useState(false);
    const [isShare, setIsShare] = useState(false);

    const { auth, socket } = useSelector(state => state);
    const dispatch = useDispatch();

    // Likes
    useEffect(() => {
        if (post.likes.find(like => like._id === auth.user._id)) {
            setIsLike(true);
        } else {
            setIsLike(false);
        }
    }, [post.likes, auth.user._id]);

    const handleLike = async () => {
        if (loadLike) return;
        setLoadLike(true);
        await dispatch(likePost({ post, auth, socket }));
        setLoadLike(false);
    }

    const handleUnLike = async () => {
        if (loadLike) return;
        setLoadLike(true);
        await dispatch(unLikePost({ post, auth, socket }));
        setLoadLike(false);
    }

    return (<Box>
        <Box sx={{ p: 1, width: '100%', display: 'flex', justifyContent: 'space-between' }}>
            <Typography >likes {post.likes.length}</Typography>
            <Typography >{post.comments.length} comments</Typography>
        </Box>
        <CardActions disableSpacing>
            <LikeButton
                isLike={isLike}
                handleLike={handleLike}
                handleUnLike={handleUnLike}
            />
            <Box sx={{ flexGrow: 1 }} />
            <IconButton
                size="small"
                aria-label="Send"
                color="default"
                onClick={() => setIsShare(!isShare)}
            >
                <ShortcutIcon /><Typography >Share</Typography>
            </IconButton>
        </CardActions>
        {isShare && <ShareModal url={`${BASE_URL}/post/${post._id}`} />}
    </Box >);
}