import React from 'react'
import { Link } from 'react-router-dom'
import Menu from './Menu'
import Search from './Search'
import { useSelector } from 'react-redux'

const Header = () => {

    const { theme } = useSelector(state => state)

    return (
        <div className="header bg-light">
            <nav className="navbar navbar-expand-lg navbar-light 
            bg-light justify-content-between align-middle">

                <Link to="/" className="logo">
                    <h1 style={{ display: "flex", color: '#636060' }} className="navbar-brand p-0 m-0"
                        onClick={() => window.scrollTo({ top: 0 })}>
                        <div style={{
                            filter: theme ? 'invert(1)' : 'invert(0)',
                            color: theme ? 'white' : '#111',
                            textAlign: "center",
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }} >
                            <img style={{ width: '28px', height: '28px' }} src="https://res.cloudinary.com/mayurkamble/image/upload/v1625477279/icon/ReachMe2_pnioxk.png" />
                        </div>
                        ReachMe
                    </h1>
                </Link>

                <Search />

                <Menu />
            </nav>
        </div>
    )
}

export default Header
