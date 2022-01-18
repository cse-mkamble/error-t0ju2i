import * as React from 'react';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Box, CardActions, IconButton, Typography } from '@mui/material';
import ModeCommentOutlinedIcon from '@mui/icons-material/ModeCommentOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import BookmarksOutlinedIcon from '@mui/icons-material/BookmarksOutlined';
import BookmarksIcon from '@mui/icons-material/Bookmarks';

import LikeButton from '../../LikeButton';
import { likePost, unLikePost, savePost, unSavePost } from '../../../redux/actions/postAction';
import ShareModal from '../../ShareModal';
import { BASE_URL } from '../../../utils/config';

export default function PostCardFooter({ post }) {
    const [isLike, setIsLike] = useState(false);
    const [loadLike, setLoadLike] = useState(false);
    const [isShare, setIsShare] = useState(false);

    const { auth, theme, socket } = useSelector(state => state);
    const dispatch = useDispatch();

    const [saved, setSaved] = useState(false);
    const [saveLoad, setSaveLoad] = useState(false);

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

    // Saved
    useEffect(() => {
        if (auth.user.saved.find(id => id === post._id)) {
            setSaved(true);
        } else {
            setSaved(false);
        }
    }, [auth.user.saved, post._id]);

    const handleSavePost = async () => {
        if (saveLoad) return;
        setSaveLoad(true);
        await dispatch(savePost({ post, auth }));
        setSaveLoad(false);
    }

    const handleUnSavePost = async () => {
        if (saveLoad) return;
        setSaveLoad(true);
        await dispatch(unSavePost({ post, auth }));
        setSaveLoad(false);
    }

    return (<Box>
        <CardActions disableSpacing sx={{ width: '100%', display: 'flex', justifyContent: 'space-between' }}>
            <Box>
                <LikeButton
                    isLike={isLike}
                    valueLike={post.likes.length}
                    handleLike={handleLike}
                    handleUnLike={handleUnLike}
                />
                <IconButton
                    size="small"
                    aria-label="Comment"
                    color="default"
                    href={`/post/${post._id}`}
                ><Typography >{post.comments.length}</Typography><ModeCommentOutlinedIcon />
                </IconButton>
                <IconButton
                    size="small"
                    aria-label="Send"
                    color="default"
                    onClick={() => setIsShare(!isShare)}
                >
                    <SendOutlinedIcon />
                </IconButton>
            </Box>

            {saved ? <IconButton
                size="small"
                aria-label="Home"
                color="info"
                onClick={handleUnSavePost}
            >
                <BookmarksIcon />
            </IconButton> : <IconButton
                size="small"
                aria-label="Home"
                color="default"
                onClick={handleSavePost}
            >
                <BookmarksOutlinedIcon />
            </IconButton>}
        </CardActions>
        {isShare && <ShareModal url={`${BASE_URL}/post/${post._id}`} theme={theme} />}
    </Box>);
}