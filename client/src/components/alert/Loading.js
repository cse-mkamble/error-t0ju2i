import * as React from 'react';
import imgLoading from "./480.gif";

export default function Loading() {
    return (
        <div className='loading'
            style={{ width: '100%', height: '100%', background: "white", top: 0, left: 0, zIndex: 50, position: 'fixed' }}
        >
            <div style={{ display: 'grid' }}>
                <img src={imgLoading} alt='' />
            </div>
        </div>
    );
}