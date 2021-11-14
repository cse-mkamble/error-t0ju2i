import React, { useState, useEffect } from 'react'
import Avatar from '../components/Avatar'
import { useSelector } from 'react-redux'

import ShareModal from '../components/ShareModalForInvite'
import { BASE_URL } from '../utils/config'

const Installation = () => {
    const { theme } = useSelector(state => state)

    const [isShare, setIsShare] = useState(false)

    return (
        <div>
            <div style={{ display: 'flex', justifyContent: 'center' }} >
                <div>
                    <img style={{
                        filter: theme ? 'invert(1)' : 'invert(0)',
                        color: theme ? 'white' : '#111',
                        width: '64px', height: '64px', margin: '10px'
                    }} src="https://res.cloudinary.com/mayurkamble/image/upload/v1625477279/icon/ReachMe2_pnioxk.png" />
                </div>
                <div style={{ paddingTop: '15px' }}>
                    <h4 style={{ marginBottom: '.0rem' }}>ReachMe</h4>
                    <p style={{ marginTop: '0px' }}>Social Networking Platforms</p>
                </div>
            </div>
            <hr />

            <div>
                <div style={{ padding: '10px' }}>
                    <div style={{ color: '#323232' }}>
                        <div style={{
                            maxWidth: '600px',
                            margin: 'auto',
                            fontSize: '110%',
                            textAlign: 'center',
                            background: '#eaeaea87',
                            padding: '5px'
                        }}>
                            <div style={{ textAlign: 'center' }}>
                                <img style={{
                                    filter: theme ? 'invert(1)' : 'invert(0)',
                                    color: theme ? 'white' : '#111',
                                    width: '64px',
                                    height: '64px',
                                    margin: '10px 0 20px 0'
                                }} src="https://res.cloudinary.com/mayurkamble/image/upload/v1625477279/icon/ReachMe2_pnioxk.png" />
                            </div>
                            <div style={{
                                textAlign: 'center',
                                padding: '20px',
                                background: '#fff',
                                borderRadius: '10px'
                            }} >
                                <img style={{
                                    filter: theme ? 'invert(1)' : 'invert(0)',
                                    color: theme ? 'white' : '#111',
                                    width: '100px',
                                    height: '100px',
                                    margin: '10px',
                                    borderRadius: '20%',
                                    boxShadow: '4px 4px 2px #ccc'
                                }}
                                    src="https://res.cloudinary.com/mayurkamble/image/upload/v1628163486/xbxswevknkzlqzeg7vdj.jpg"
                                />
                                <h4 style={{ margin: '0' }}>No Active People</h4>
                                <p style={{ color: 'rgb(109 103 103)', margin: '5px' }} >You'll see when others are active here. You can also invite more friends to join ReachMe.</p>
                                <ShareModal url={`${BASE_URL}`} theme={theme} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Installation