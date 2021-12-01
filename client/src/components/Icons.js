import * as React from 'react';

import { Box, IconButton, Menu, MenuItem } from '@mui/material';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';

export default function Icons({ setContent, content, theme }) {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const reactions = [
        '😇', '😆', '😯', '😢', '😡', '👍', '👎', '😄',
        '😂', '😍', '😘', '😗', '😚', '😳', '😭', '😓',
        '😤', '🤤', '👻', '💀', '🤐', '😴', '😷', '😵'
    ]

    return (
        <Box sx={{ opacity: 1, filter: theme ? 'invert(1)' : 'invert(0)' }}>

            <IconButton
                id="basic-button"
                aria-controls="basic-menu"
                size="small"
                color="default"
                aria-label="Notifications"
                onClick={handleClick}
            >
                <EmojiEmotionsIcon />
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
                <Box className="reactions">
                    {
                        reactions.map(icon => (
                            <span key={icon} onClick={() => setContent(content + icon)}>
                                {icon}
                            </span>
                        ))
                    }
                </Box>
            </Menu>

        </Box>
    )
}
