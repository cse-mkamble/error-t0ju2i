import * as React from 'react';
import { useSelector } from 'react-redux';
import { Box } from '@mui/material';

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

export default function CarouselComponent({ images, id }) {
    const isActive = index => {
        if (index === 0) return "active";
    }
    const { theme } = useSelector(state => state);

    return (<Carousel showArrows={true} showThumbs={false} infiniteLoop={true}>
        {images.map((img, index) => <Box key={index} className={`carousel-item ${isActive(index)}`}>
            {img.url.match(/video/i) ? <video controls src={img.url} className="d-block w-100" alt={img.url} />
                : <img src={img.url} className="d-block w-100" alt={img.url} />}
        </Box>)}
    </Carousel>);
}