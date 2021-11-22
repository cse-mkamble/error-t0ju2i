import React, { useState, useEffect } from 'react';

import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import CssBaseline from '@mui/material/CssBaseline';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import { login } from '../../../redux/actions/authAction';

import LoginForm from './LoginForm';
import ForgotPassForm from './ForgotPassForm';

function Copyright(props) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" href="#">
                FunBook
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const theme = createTheme();

export default function Login() {

    const initialState = { email: '', password: '', otp: '' };
    const [userData, setUserData] = useState(initialState);
    const { email, password } = userData;

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

        // dispatch(login(userData));
    }

    const handleVerifyOTP = e => {
        e.preventDefault();

        // dispatch(login(userData));
    }

    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >

                    <div style={{ display: 'flex' }}>
                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                            <img style={{ width: '54px', height: '54px' }} src='https://res.cloudinary.com/mayurkamble/image/upload/v1636887085/icon/bptheulgfynt1npaui36.png' />
                        </div>
                        <div>
                            <Typography component="h1" variant="h5">
                                <div style={{ margin: '10px', fontFamily: "'Chocolate', sans-serif", fontSize: '40px', fontWeight: 'bolder', letterSpacing: '4px' }}>FunBook</div>
                            </Typography>
                        </div>
                    </div>

                    {NewPassFormShow ? '' : (
                        <div>
                            {ForgotPassFormShow ?
                                <ForgotPassForm
                                    handleSentMail={handleSubmitSentMail}
                                    userData={userData}
                                    handleVerifyOTP={handleVerifyOTP}
                                    handleChangeSelectInput={handleChangeSelectInput}
                                />
                                :
                                <LoginForm
                                    handleSubmitLogin={handleSubmitLogin}
                                    userData={userData}
                                    handleChangeInput={handleChangeInput}
                                    setForgotPassFormShow={setForgotPassFormShow}
                                />
                            }
                        </div>
                    )
                    }

                </Box>
                <Copyright sx={{ mt: 10 }} />
            </Container>
        </ThemeProvider>
    );
}