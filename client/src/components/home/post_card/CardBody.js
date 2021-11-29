import * as React from 'react';
import { styled } from '@mui/material/styles';
import { Box, CardContent, CardMedia, Typography, IconButton } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import Carousel from '../../Carousel';

const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));

export default function CardBody({ post, theme }) {
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };
    return (<Box>
        <CardContent>
            <Typography>
                {post.content.length < 60 ? post.content
                    : expanded ? post.content + ' ' : post.content.slice(0, 60) + '.....'}
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                {post.content.length > 60 && <ExpandMore
                    expand={expanded}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                ><ExpandMoreIcon />
                </ExpandMore>}
            </Box>
        </CardContent>
        <CardMedia>
            {post.images.length > 0 && <Carousel images={post.images} id={post._id} />}
        </CardMedia>
    </Box>);
}