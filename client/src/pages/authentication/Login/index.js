import * as React from "react";
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { Box, Link, Container, Typography } from "@mui/material";

import { login, forgotPassOTPSendMail, forgotPassOTPVerify, resetPassword } from '../../../redux/actions/authAction';

import logoName from "../../../images/name.png";
import backTheme from "../../../images/backTheme4.png";
import illu from "../../../images/images.gif";

import LoginForm from './LoginForm';
import ForgotPassForm from './ForgotPassForm';
import ResetPassForm from './ResetPassForm';

function Copyright() {
    return (
        <Typography variant="body2" color="text.secondary" sx={{ textAlign: 'center' }} >
            {'Copyright © '}
            <Link color="inherit" href="">
                FunBook
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

export default function Login() {
    const initialState = { email: '', password: '', otp: '', newPassword: '', new_cf_password: '' };
    const [userData, setUserData] = useState(initialState);
    const { email, password } = userData;

    const [activeFormShow, setActiveFormShow] = useState('LoginForm');

    const [ForgotPassFormShow, setForgotPassFormShow] = useState(false);
    const [NewPassFormShow, setNewPassFormShow] = useState(false);

    const { auth } = useSelector(state => state);
    const dispatch = useDispatch();
    const history = useHistory();

    useEffect(() => {
        if (auth.token) history.push("/");
    }, [auth.token, history]);

    const handleChangeInput = e => {
        const { name, value } = e.target;
        setUserData({ ...userData, [name]: value });
    }

    const handleChangeSelectInput = (name, value) => {
        setUserData({ ...userData, [name]: value });
    };

    const handleSubmitLogin = e => {
        e.preventDefault();
        dispatch(login(userData));
    }

    const handleSubmitSentMail = e => {
        e.preventDefault();
        dispatch(forgotPassOTPSendMail(userData));
    }

    const handleSubmitVerifyOTP = e => {
        e.preventDefault();
        dispatch(forgotPassOTPVerify(userData));
    }

    const handleSubmitResetPass = (e) => {
        e.preventDefault();
        dispatch(resetPassword(userData));
    }

    return (<Box sx={{
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        minHeight: '100vh',
        backgroundImage: `url(${backTheme})`,
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
        backgroundSize: '100%'
    }} >
        <Container maxWidth="xs">
            <Box sx={{ my: 4, p: 2, boxShadow: 3, borderRadius: 2, background: '#ffffff' }}>
                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                    <img style={{ width: '40%' }} src={logoName} alt='logo' />
                </Box>
                <Box sx={{ my: 2, display: 'flex', justifyContent: 'center' }}>
                    <img style={{ width: '40%' }} src={illu} alt='illumination' />
                </Box>
                {activeFormShow === 'LoginForm' ? <LoginForm
                    handleSubmitLogin={handleSubmitLogin}
                    userData={userData}
                    handleChangeInput={handleChangeInput}
                    setActiveFormShow={setActiveFormShow}
                    initialState={initialState}
                    setUserData={setUserData}
                /> : ''}
                {activeFormShow === 'ForgotPassForm' ? <ForgotPassForm
                    handleSentMail={handleSubmitSentMail}
                    userData={userData}
                    handleSubmitVerifyOTP={handleSubmitVerifyOTP}
                    handleChangeInput={handleChangeInput}
                    handleChangeSelectInput={handleChangeSelectInput}
                    setActiveFormShow={setActiveFormShow}
                /> : ''}
                {activeFormShow === 'ResetPassForm' ? <ResetPassForm
                    handleSubmitResetPass={handleSubmitResetPass}
                    userData={userData}
                    handleChangeInput={handleChangeInput}
                    handleChangeSelectInput={handleChangeSelectInput}
                    setActiveFormShow={setActiveFormShow}
                /> : ''}
            </Box>
        </Container>
        <Box
            component="footer"
            sx={{
                py: 3,
                px: 2,
                mt: 'auto',
                backgroundColor: (theme) =>
                    theme.palette.mode === 'light'
                        ? theme.palette.grey[200]
                        : theme.palette.grey[800],
            }}
        >
            <Container maxWidth="xs">
                <Copyright />
            </Container>
        </Box>
    </Box>);
}