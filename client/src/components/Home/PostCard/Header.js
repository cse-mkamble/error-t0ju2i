import * as React from "react";
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import moment from 'moment';
import { Box, CardHeader, Avatar, Link, IconButton, Menu, MenuItem, ListItemIcon, ListItemText } from '@mui/material';

import MoreVertIcon from '@mui/icons-material/MoreVert';
import ContentCopy from '@mui/icons-material/ContentCopy';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import BookmarksOutlinedIcon from '@mui/icons-material/BookmarksOutlined';
import BookmarksIcon from '@mui/icons-material/Bookmarks';

import { savePost, unSavePost } from '../../../redux/actions/postAction';
import { GLOBALTYPES } from '../../../redux/actions/globalTypes';
import { deletePost } from '../../../redux/actions/postAction';
import { BASE_URL } from '../../../utils/config';

export default function PostCardHeader({ post }) {
    const { auth, socket } = useSelector(state => state);
    const dispatch = useDispatch();
    const history = useHistory();

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleEditPost = () => {
        dispatch({ type: GLOBALTYPES.STATUS, payload: { ...post, onEdit: true } });
    }

    const handleDeletePost = () => {
        if (window.confirm("Are you sure want to delete this post?")) {
            dispatch(deletePost({ post, auth, socket }));
            return history.push("/");
        }
    }

    const handleCopyLink = () => {
        navigator.clipboard.writeText(`${BASE_URL}/post/${post._id}`);
    }

    const [saved, setSaved] = useState(false);
    const [saveLoad, setSaveLoad] = useState(false);

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

    return (<CardHeader
        avatar={<Avatar src={post.user.avatar} />}
        action={<Box>
            <IconButton
                aria-label="settings"
                id="basic-button"
                aria-controls="basic-menu"
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
            ><MoreVertIcon />
            </IconButton>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            > {auth.user._id === post.user._id && <>
                <MenuItem onClick={() => {
                    handleEditPost();
                    handleClose();
                }}>
                    <ListItemIcon>
                        <EditOutlinedIcon fontSize="small" />
                    </ListItemIcon>
                    <ListItemText>Edit Post</ListItemText>
                </MenuItem>
                <MenuItem onClick={() => {
                    handleDeletePost();
                    handleClose();
                }}>
                    <ListItemIcon>
                        <DeleteOutlineIcon fontSize="small" />
                    </ListItemIcon>
                    <ListItemText>Remove Post</ListItemText>
                </MenuItem>
            </>}
                <MenuItem onClick={() => {
                    handleCopyLink();
                    handleClose();
                }}>
                    <ListItemIcon>
                        <ContentCopy fontSize="small" />
                    </ListItemIcon>
                    <ListItemText>Copy Link</ListItemText>
                </MenuItem>
                {saved ? <MenuItem onClick={handleUnSavePost}>
                    <ListItemIcon>
                        <BookmarksIcon color="primary" fontSize="small" />
                    </ListItemIcon>
                    <ListItemText>Bookmark</ListItemText>
                </MenuItem> : <MenuItem onClick={handleSavePost}>
                    <ListItemIcon>
                        <BookmarksOutlinedIcon fontSize="small" />
                    </ListItemIcon>
                    <ListItemText>Bookmark</ListItemText>
                </MenuItem>}
            </Menu>
        </Box>}
        title={<Link href={`/profile/${post.user._id}`} color="inherit" underline="none">
            {post.user.username}
        </Link>}
        subheader={moment(post.createdAt).fromNow()}
    />);
}