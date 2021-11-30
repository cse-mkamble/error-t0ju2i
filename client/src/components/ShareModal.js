import * as React from 'react';
import {
    EmailShareButton, EmailIcon,
    FacebookShareButton, FacebookIcon,
    TelegramShareButton, TelegramIcon,
    TwitterShareButton, TwitterIcon,
    WhatsappShareButton, WhatsappIcon,
    RedditShareButton, RedditIcon
} from 'react-share';
import { Box } from '@mui/material';

export default function ShareModal({ url, theme }) {
    return (<Box sx={{ px: '30px', display: 'flex', justifyContent: 'space-between', filter: theme ? 'invert(1)' : 'invert(0)' }}>
        <FacebookShareButton url={url} >
            <FacebookIcon round={true} size={24} />
        </FacebookShareButton>

        <TwitterShareButton url={url} >
            <TwitterIcon round={true} size={24} />
        </TwitterShareButton>

        <EmailShareButton url={url} >
            <EmailIcon round={true} size={24} />
        </EmailShareButton>

        <RedditShareButton url={url} >
            <RedditIcon round={true} size={24} />
        </RedditShareButton>

        <TelegramShareButton url={url} >
            <TelegramIcon round={true} size={24} />
        </TelegramShareButton>

        <WhatsappShareButton url={url} >
            <WhatsappIcon round={true} size={24} />
        </WhatsappShareButton>
    </Box>);
}