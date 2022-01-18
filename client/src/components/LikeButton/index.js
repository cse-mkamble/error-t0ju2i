import * as React from 'react';
import { Box, IconButton, Typography } from '@mui/material';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';

export default function LikeButton({ isLike, handleLike, handleUnLike }) {
    return (<Box>
        {isLike ? <IconButton
            size="small"
            aria- label="FavoriteIcon"
            color="primary"
            onClick={handleUnLike}
        >
            <ThumbUpAltIcon />
            <Typography>Like</Typography>
        </IconButton > : <IconButton
            size="small"
            aria-label="FavoriteIcon"
            color="default"
            onClick={handleLike}
        >
            <ThumbUpOffAltIcon />
            <Typography>Like</Typography>
        </IconButton>}
    </Box>);
}