import * as React from 'react';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { Box, Container, Typography } from "@mui/material";

import CssBaseline from '@mui/material/CssBaseline';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import { registerSendMail, register } from '../../../redux/actions/authAction';

import RegisterForm from './RegisterForm';
import VerifyOTP from './VerifyOTP';

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

export default function Register() {

    const initialState = {
        fullname: '', username: '', email: '', password: '', cf_password: '', gender: 'female', otp: ''
    };

    const [activeStep, setActiveStep] = useState(0);

    const { auth, alert } = useSelector(state => state);
    const dispatch = useDispatch();
    const history = useHistory();

    const [userData, setUserData] = useState(initialState);
    const { fullname, username, email, password, cf_password, gender, otp } = userData;

    useEffect(() => {
        if (auth.token) history.push("/")
    }, [auth.token, history])

    const handleChangeInput = e => {
        const { name, value } = e.target
        setUserData({ ...userData, [name]: value })
    }

    const handleChangeSelectInput = (name, value) => {
        setUserData({ ...userData, [name]: value });
    };

    const handleRegisterFormSubmit = e => {
        e.preventDefault();
        console.log(userData);
        dispatch(registerSendMail(userData));
    }

    const handleOTPFormSubmit = e => {
        e.preventDefault();
        console.log(userData);
        dispatch(register(userData));
    }

    const handleNext = () => {
        setActiveStep(activeStep + 1);
    };

    const handleBack = () => {
        setActiveStep(activeStep - 1);
    };

    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 4,
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

                    <React.Fragment>
                        {activeStep === 0 ? (
                            <RegisterForm
                                handleNext={handleNext}
                                handleChangeInput={handleChangeInput}
                                userData={userData}
                                handleRegisterFormSubmit={handleRegisterFormSubmit}
                            />
                        ) : (
                            <VerifyOTP
                                handleOTPFormSubmit={handleOTPFormSubmit}
                                userData={userData}
                                handleChangeSelectInput={handleChangeSelectInput}
                                handleRegisterFormSubmit={handleRegisterFormSubmit}
                            />
                        )}
                    </React.Fragment>
                </Box>
                <Copyright sx={{ mt: 8, mb: 2 }} />
            </Container>
        </ThemeProvider>
    );
}
