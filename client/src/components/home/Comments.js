import * as React from 'react';
import { useState, useEffect } from 'react';
import { Box } from '@mui/material';

import CommentDisplay from './comments/CommentDisplay';

export default function Comments({ post }) {
    const [comments, setComments] = useState([]);
    const [showComments, setShowComments] = useState([]);
    const [next, setNext] = useState(2);

    const [replyComments, setReplyComments] = useState([]);

    useEffect(() => {
        const newCm = post.comments.filter(cm => !cm.reply);
        setComments(newCm);
        setShowComments(newCm.slice(newCm.length - next));
    }, [post.comments, next]);

    useEffect(() => {
        const newRep = post.comments.filter(cm => cm.reply);
        setReplyComments(newRep);
    }, [post.comments]);

    return (
        <Box className="comments">
            {showComments.map((comment, index) => (
                <CommentDisplay key={index} comment={comment} post={post}
                    replyCm={replyComments.filter(item => item.reply === comment._id)} />
            ))}

            {
                comments.length - next > 0
                    ? <div className="p-2 border-top"
                        style={{ cursor: 'pointer', color: 'crimson' }}
                        onClick={() => setNext(next + 10)}>
                        See more comments...
                    </div>

                    : comments.length > 2 &&
                    <div className="p-2 border-top"
                        style={{ cursor: 'pointer', color: 'crimson' }}
                        onClick={() => setNext(2)}>
                        Hide comments...
                    </div>
            }
        </Box>
    );
}