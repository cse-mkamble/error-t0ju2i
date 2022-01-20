import * as React from 'react';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Box, TextField, AppBar, Toolbar, Fab } from '@mui/material';
import SendRoundedIcon from '@mui/icons-material/SendRounded';

import { createComment } from '../../redux/actions/commentAction';

export default function InputComment({ children, post, onReply, setOnReply }) {
    const [content, setContent] = useState('');
    const { auth, socket } = useSelector(state => state);
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!content.trim()) {
            if (setOnReply) return setOnReply(false);
            return;
        }
        setContent('');
        const newComment = {
            content,
            likes: [],
            user: auth.user,
            createdAt: new Date().toISOString(),
            reply: onReply && onReply.commentId,
            tag: onReply && onReply.user
        }
        dispatch(createComment({ post, newComment, auth, socket }));
        if (setOnReply) return setOnReply(false);
    }

    return (<AppBar
        position="fixed"
        color="inherit"
        sx={{ top: 'auto', bottom: 0 }}>
        <Toolbar>
            {children}
            <TextField
                fullWidth
                size='small'
                label=''
                placeholder="Add your comments..."
                multiline
                variant="outlined"
                value={content}
                onChange={e => setContent(e.target.value)}
            />
            <Box sx={{ flexGrow: 1 }} />
            <Fab
                size='small'
                color="primary"
                aria-label="Send Post"
                disabled={content ? false : true}
                sx={{ ml: 2 }}
                onClick={(e) => {
                    handleSubmit(e);
                }}
            >
                <SendRoundedIcon />
            </Fab>
        </Toolbar>
    </AppBar>);
}