import * as React from 'react';

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

export default function CarouselComponent({ images, id }) {
    const isActive = index => {
        if (index === 0) return "active";
    }

    return (<Carousel showArrows={true} showThumbs={false} infiniteLoop={true}>
        {images.map((img, index) => <div key={index} className={`carousel-item ${isActive(index)}`}>
            {img.url.match(/video/i) ? <video controls src={img.url} style={{ width: '100%', display: 'block' }} alt={img.url} />
                : <img src={img.url} style={{ width: '100%', display: 'block' }} alt={img.url} />}
        </div>)}
    </Carousel>);
}