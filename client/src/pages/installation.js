import React from "react"
import Avatar from '../components/Avatar'
import { useSelector } from 'react-redux'

const Installation = () => {
    const { theme } = useSelector(state => state)

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

            <div style={{ display: 'flex', justifyContent: 'center', padding: '20px' }}>
                <div style={{ maxWidth: '700px' }}>
                    <div style={{ paddingTop: '10px' }}>
                        <div style={{ margin: '10px 0' }}><h3>Installation</h3></div>
                        <div>
                            <p>Please follow this steps.</p>
                            <ol>
                                <li>In the top right, click the Customize and control Google Chrome icon ( three dot ).</li>
                                <div style={{ width: 'calc(100% - 600px)', padding: '10px' }}><img style={{ width: '300px', filter: theme ? 'invert(1)' : 'invert(0)' }} src="https://res.cloudinary.com/mayurkamble/image/upload/v1625834596/how-to-home-button-google-chrome-1_m7rf4s.jpg" /></div>
                                <li>Then click Install App.</li>
                                <div style={{ width: 'calc(100% - 800px)', padding: '10px' }}><img style={{ width: '200px', filter: theme ? 'invert(1)' : 'invert(0)' }} src="https://res.cloudinary.com/mayurkamble/image/upload/v1625834614/WhatsApp_Image_2021-07-09_at_18.12.00_p2no3e.jpg" /></div>
                                <li>Finally, Click on Install.</li>
                                <div style={{ width: 'calc(100% - 800px)', padding: '10px' }}><img style={{ width: '200px', filter: theme ? 'invert(1)' : 'invert(0)' }} src="https://res.cloudinary.com/mayurkamble/image/upload/v1625834623/WhatsApp_Image_2021-07-09_at_18.12.00_1_lsbggu.jpg" /></div>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Installation