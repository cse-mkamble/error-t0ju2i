import React from 'react';
import imgLoading from "./364.gif";

const Loading = () => {
    return (
        <div className='loading'
            style={{ width: '100%', height: '100%', background: "#00000080", textAlign: 'center', color: "white", top: 0, left: 0, zIndex: 50, position: 'fixed' }}
        >

            <div style={{ display: 'grid' }}>
                <img src={imgLoading} alt='' />
                <text style={{ fontSize: '26px', marginTop: '20px', fontWeight: 'bold' }} fill="#fff" x="5" y="47">Loading ...</text>
            </div>

        </div>
    );
}

export default Loading;