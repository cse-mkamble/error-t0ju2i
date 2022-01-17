import * as React from "react";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// import Swiper core and required modules
import SwiperCore, {
    Pagination
} from 'swiper';

import { styled } from '@mui/material/styles';
import { Box, CardContent, CardMedia, Typography, IconButton } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


// Import Swiper styles
import "swiper/swiper-bundle.css";

// install Swiper modules
SwiperCore.use([Pagination]);

const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));

export default function PostCardBody({ post }) {
    const [expanded, setExpanded] = useState(false);

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
            {post.images.length > 0 && <Swiper pagination={true} className="mySwiper">
                {post.images.map((img, index) => <SwiperSlide key={index} >
                    {img.url.match(/video/i) ? <video controls src={img.url} style={{ width: '100%', display: 'block' }} alt={img.url} />
                        : <img src={img.url} style={{ width: '100%', display: 'block' }} alt={img.url} />}
                </SwiperSlide>)}
            </Swiper>}
        </CardMedia>
    </Box>);
}