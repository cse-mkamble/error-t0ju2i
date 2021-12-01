import * as React from 'react';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Box, Button, TextField } from '@mui/material';

import { createComment } from '../../redux/actions/commentAction';
import Icons from '../Icons';

export default function InputComment({ children, post, onReply, setOnReply }) {
    const [content, setContent] = useState('');
    const { auth, socket, theme } = useSelector(state => state);
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

    return (<Box component="form" onSubmit={handleSubmit} noValidate sx={{ my: 1, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        {children}
        <Icons setContent={setContent} content={content} theme={theme} />
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
        <Button
            type="submit"
            variant="text"
            disabled={content ? false : true}
        >Post</Button>
    </Box>);
}