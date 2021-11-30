import * as React from 'react';
import { IconButton, Typography } from '@mui/material';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';

export default function LikeButton({ isLike, valueLike, handleLike, handleUnLike }) {

    return (<>
        {isLike ? <IconButton
            size="small"
            aria-label="FavoriteIcon"
            color="error"
            onClick={handleUnLike}
        >
            <Typography >{valueLike}</Typography>
            <FavoriteOutlinedIcon />
        </IconButton> : <IconButton
            size="small"
            aria-label="FavoriteIcon"
            color="default"
            onClick={handleLike}
        >
            <Typography >{valueLike}</Typography>
            <FavoriteBorderOutlinedIcon />
        </IconButton>}
    </>);
}