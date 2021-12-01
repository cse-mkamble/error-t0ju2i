import * as React from 'react';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import moment from 'moment';
import { Box, Avatar, Typography, TextField, Link } from '@mui/material';

import LikeButton from '../../LikeButton';
import CommentMenu from './CommentMenu';
import { updateComment, likeComment, unLikeComment } from '../../../redux/actions/commentAction';
import InputComment from '../InputComment';

export default function CommentCard({ children, comment, post, commentId }) {
    const { auth, theme } = useSelector(state => state)
    const dispatch = useDispatch()

    const [content, setContent] = useState('')
    const [readMore, setReadMore] = useState(false)

    const [onEdit, setOnEdit] = useState(false)
    const [isLike, setIsLike] = useState(false)
    const [loadLike, setLoadLike] = useState(false)

    const [onReply, setOnReply] = useState(false)

    useEffect(() => {
        setContent(comment.content)
        setIsLike(false)
        setOnReply(false)
        if (comment.likes.find(like => like._id === auth.user._id)) {
            setIsLike(true)
        }
    }, [comment, auth.user._id])

    const handleUpdate = () => {
        if (comment.content !== content) {
            dispatch(updateComment({ comment, post, content, auth }))
            setOnEdit(false)
        } else {
            setOnEdit(false)
        }
    }

    const handleLike = async () => {
        if (loadLike) return;
        setIsLike(true)

        setLoadLike(true)
        await dispatch(likeComment({ comment, post, auth }))
        setLoadLike(false)
    }

    const handleUnLike = async () => {
        if (loadLike) return;
        setIsLike(false)

        setLoadLike(true)
        await dispatch(unLikeComment({ comment, post, auth }))
        setLoadLike(false)
    }

    const handleReply = () => {
        if (onReply) return setOnReply(false)
        setOnReply({ ...comment, commentId })
    }

    const styleCard = {
        mt: 1,
        opacity: comment._id ? 1 : 0.5,
        pointerEvents: comment._id ? 'inherit' : 'none'
    }

    const styleCommentContent = {
        mt: '4px',
        p: 1,
        boxShadow: 3,
        borderRadius: '20px',
        borderTopLeftRadius: 0
    }

    return (<Box sx={styleCard}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Avatar src={comment.user.avatar} sx={{ width: 24, height: 24 }} />
            <Typography sx={{ mx: 1 }}>{comment.user.username}</Typography>
        </Box>
        <Box sx={styleCommentContent}>
            <Box>
                <Box sx={{ flex: 'auto' }}>
                    {onEdit ? <TextField
                        fullWidth
                        label=''
                        multiline
                        rows={4}
                        value={content}
                        onChange={e => setContent(e.target.value)}
                    /> : <Box>
                        {comment.tag && comment.tag._id !== comment.user._id && <Link to={`/profile/${comment.tag._id}`} >
                            @{comment.tag.username}
                        </Link>}
                        <Box>
                            {content.length < 100 ? content :
                                readMore ? content + ' ' : content.slice(0, 100) + '....'}
                            {content.length > 100 && <span style={{ cursor: 'pointer', color: 'red' }} onClick={() => setReadMore(!readMore)}>
                                {readMore ? ' hide' : ' more'}
                            </span>}
                        </Box>
                    </Box>}
                </Box>
            </Box>
            <Box>
                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <Typography variant='body2' sx={{ color: 'text.secondary' }}>{moment(comment.createdAt).fromNow()}</Typography>
                        <Box sx={{ mx: 2, display: 'flex' }}>
                            {onEdit ? <>
                                <Typography
                                    variant="body2"
                                    gutterBottom
                                    color='primary'
                                    onClick={handleUpdate}
                                    sx={{ mr: 1, cursor: 'pointer' }}
                                >Update</Typography>
                                <Typography
                                    variant="body2"
                                    gutterBottom
                                    color='error'
                                    onClick={() => setOnEdit(false)}
                                    sx={{ cursor: 'pointer' }}
                                >Cancel</Typography>
                            </> : <Typography variant='body2' sx={{ cursor: 'pointer' }} onClick={handleReply} >{onReply ? 'Cancel' : 'Replay'}</Typography>}
                        </Box>
                    </Box>
                    <Box sx={{ display: 'flex' }}>
                        <LikeButton
                            isLike={isLike}
                            valueLike={comment.likes.length}
                            handleLike={handleLike}
                            handleUnLike={handleUnLike}
                        />
                        <CommentMenu post={post} comment={comment} setOnEdit={setOnEdit} />
                    </Box>
                </Box>
            </Box>
        </Box>

        {onReply && <InputComment post={post} onReply={onReply} setOnReply={setOnReply} >
            <Link to={`/profile/${onReply.user._id}`} sx={{ mr: 1 }}>
                @{onReply.user.username}:
            </Link>
        </InputComment>}

        {children}
    </Box>);
}