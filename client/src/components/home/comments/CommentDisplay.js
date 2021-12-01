import * as React from 'react';
import { useState, useEffect } from 'react';
import { Box } from '@mui/material';

import CommentCard from './CommentCard'

export default function CommentDisplay({ comment, post, replyCm }) {
    const [showRep, setShowRep] = useState([])
    const [next, setNext] = useState(1)

    useEffect(() => {
        setShowRep(replyCm.slice(replyCm.length - next))
    }, [replyCm, next])

    return (<Box sx={{ m: 2 }}>
        <CommentCard comment={comment} post={post} commentId={comment._id} >
            <Box sx={{ pl: 2 }}>
                {showRep.map((item, index) => (item.reply && <CommentCard
                    key={index}
                    comment={item}
                    post={post}
                    commentId={comment._id}
                />))}
                {replyCm.length - next > 0 ? <Box sx={{ mx: 1, cursor: 'pointer', color: 'crimson' }}
                    onClick={() => setNext(next + 10)}>
                    See more comments...
                </Box> : replyCm.length > 1 && <Box sx={{ mx: 1, cursor: 'pointer', color: 'crimson' }}
                    onClick={() => setNext(1)}>
                    Hide comments...
                </Box>}
            </Box>
        </CommentCard>
    </Box>);
}