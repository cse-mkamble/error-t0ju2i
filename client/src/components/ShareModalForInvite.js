import React from 'react'
import {
    EmailShareButton, EmailIcon,
    FacebookShareButton, FacebookIcon,
    TelegramShareButton, TelegramIcon,
    TwitterShareButton, TwitterIcon,
    WhatsappShareButton, WhatsappIcon,
    RedditShareButton, RedditIcon
} from 'react-share'

const ShareModal = ({url, theme}) => {

    let _title = "Hi, ReachMe is a Social Netwoking Platforms, please join this awesome website "
    const fullTitle = [url, _title].filter(v => !!v).join(": ")

    return (
        <div className="d-flex justify-content-between px-4 py-2"
        style={{filter: theme ? 'invert(1)' : 'invert(0)' }}>
            <FacebookShareButton url={url} quote={_title} >
                <FacebookIcon round={true} size={32} />
            </FacebookShareButton>

            <TwitterShareButton url={url} title={_title} >
                <TwitterIcon round={true} size={32} />
            </TwitterShareButton>

            <EmailShareButton url={url} >
                <EmailIcon round={true} size={32} />
            </EmailShareButton>

            <RedditShareButton url={url} title={fullTitle} >
                <RedditIcon round={true} size={32} />
            </RedditShareButton>

            <TelegramShareButton url={url} title={_title} >
                <TelegramIcon round={true} size={32} />
            </TelegramShareButton>

            <WhatsappShareButton url={url} title={_title} >
                <WhatsappIcon round={true} size={32} />
            </WhatsappShareButton>
        </div>
    )
}

export default ShareModal
