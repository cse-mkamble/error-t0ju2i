import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Box, Typography, IconButton } from '@mui/material';
import ReplayIcon from '@mui/icons-material/Replay';

import { Swiper, SwiperSlide } from "swiper/react";

// import Swiper core and required modules
import SwiperCore, {
    Pagination, Navigation
} from 'swiper';

import FollowBtn from '../FollowBtn';
import LoadingData from '../LoadingData';
import { getSuggestions } from '../../redux/actions/suggestionsAction';

import SuggestionsCard from './Card';

// Import Swiper styles
import "swiper/swiper-bundle.css";

// install Swiper modules
SwiperCore.use([Pagination, Navigation]);

export default function Suggestions() {
    const { auth, suggestions } = useSelector(state => state);
    const dispatch = useDispatch();

    return (<Box sx={{ mb: 10, py: 2 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', m: 1 }}>
            <Typography component='h5' color='default' sx={{ margin: '10px 0' }}>Suggestions for you</Typography>
            {!suggestions.loading && <IconButton
                aria-label="Reload"
                color="default"
                onClick={() => dispatch(getSuggestions(auth.token))}
            >
                <ReplayIcon />
            </IconButton>}
        </Box>
        <Box>
            <Swiper
                slidesPerView={2} centeredSlides={false} spaceBetween={2} grabCursor={true}
                navigation={true} className="mySwiper" style={{ padding: '0 50px' }} >
                {suggestions.loading ? <LoadingData /> : suggestions.users.map(user => (<SwiperSlide key={user._id}>
                    <SuggestionsCard user={user}>
                        <FollowBtn user={user} />
                    </SuggestionsCard>
                </SwiperSlide>))}
            </Swiper>
        </Box>
    </Box>
    );
}