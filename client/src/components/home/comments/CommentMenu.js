import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    IconButton,
    Menu,
    MenuItem,
    ListItemIcon,
    ListItemText
} from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';

import { deleteComment } from '../../../redux/actions/commentAction';

export default function CommentMenu({ post, comment, setOnEdit }) {
    const { auth, socket } = useSelector(state => state);
    const dispatch = useDispatch();

    const handleRemove = () => {
        if (post.user._id === auth.user._id || comment.user._id === auth.user._id) {
            dispatch(deleteComment({ post, auth, comment, socket }));
        }
    }

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const functionMenuItem = () => {
        return (<>
            <MenuItem onClick={() => setOnEdit(true)}>
                <ListItemIcon>
                    <CreateOutlinedIcon size="small" />
                </ListItemIcon>
                <ListItemText>Edit</ListItemText>
            </MenuItem>
            <MenuItem onClick={handleRemove}>
                <ListItemIcon>
                    <DeleteOutlineIcon size="small" />
                </ListItemIcon>
                <ListItemText>Remove</ListItemText>
            </MenuItem>
        </>);
    }

    return (<div className="menu">
        {(post.user._id === auth.user._id || comment.user._id === auth.user._id) &&
            <div>
                <IconButton
                    id="basic-button"
                    aria-controls="basic-menu"
                    size="small"
                    color="inherit"
                    aria-label="Notifications"
                    onClick={handleClick}
                >
                    <MoreVertIcon />
                </IconButton>
                <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                        'aria-labelledby': 'basic-button',
                    }}
                >
                    {post.user._id === auth.user._id
                        ? comment.user._id === auth.user._id
                            ? functionMenuItem()
                            : <MenuItem onClick={handleRemove}>
                                <ListItemIcon>
                                    <DeleteOutlineIcon size="small" />
                                </ListItemIcon>
                                <ListItemText>Remove</ListItemText>
                            </MenuItem>
                        : comment.user._id === auth.user._id && functionMenuItem()}
                </Menu>
            </div>}
    </div>);
}