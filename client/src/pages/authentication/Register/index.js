import * as React from 'react';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { Button, Grid, Box, Container, FormLabel, Typography, Alert, TextField } from "@mui/material";

import Avatar from '@mui/material/Avatar';
import CssBaseline from '@mui/material/CssBaseline';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';

import SendIcon from '@mui/icons-material/Send';

import { registerSendMail } from '../../../redux/actions/authAction';

import OtpInput from '../../../components/UI/OTPInput';

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

    const [show_password, setShowPassword] = useState('password');

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
        // dispatch(registerSendMail(userData));
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
                            <React.Fragment>
                                <Box component="form" noValidate onSubmit={handleRegisterFormSubmit} sx={{ mt: 3 }}>
                                    <Grid container spacing={2}>
                                        <Grid item xs={12}>
                                            <TextField
                                                error={alert.fullname ? true : false}
                                                helperText={alert.fullname ? alert.fullname : ''}
                                                autoComplete="given-full-name"
                                                name="fullname"
                                                required
                                                fullWidth
                                                id="fullname"
                                                label="Full Name"
                                                value={userData.fullname}
                                                autoFocus
                                                onChange={handleChangeInput}
                                            />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <TextField
                                                error={alert.username ? true : false}
                                                helperText={alert.username ? alert.username : ''}
                                                required
                                                fullWidth
                                                id="username"
                                                label="username"
                                                name="username"
                                                value={userData.username}
                                                autoComplete="user-name"
                                                onChange={handleChangeInput}
                                            />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <div style={{ padding: '10px', border: '1px solid #c4c4c4', borderRadius: '5px' }}>
                                                <FormLabel component="legend">Gender</FormLabel>
                                                <RadioGroup required style={{ justifyContent: 'space-between' }}
                                                    fullWidth row aria-label="gender" defaultValue={userData.gender} name="gender" onChange={handleChangeInput} >
                                                    <FormControlLabel value="female" control={<Radio />} label="Female" />
                                                    <FormControlLabel value="male" control={<Radio />} label="Male" />
                                                    <FormControlLabel value="other" control={<Radio />} label="Other" />
                                                </RadioGroup>
                                            </div>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <TextField
                                                error={alert.email ? true : false}
                                                helperText={alert.email ? alert.email : ''}
                                                required
                                                fullWidth
                                                id="email"
                                                label="Email Address"
                                                name="email"
                                                value={userData.email}
                                                autoComplete="email"
                                                onChange={handleChangeInput}
                                            />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <TextField
                                                error={alert.password ? true : false}
                                                helperText={alert.password ? alert.password : ''}
                                                required
                                                fullWidth
                                                name="password"
                                                label="Password"
                                                type={show_password}
                                                id="password"
                                                value={userData.password}
                                                autoComplete="new-password"
                                                onChange={handleChangeInput}
                                            />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <TextField
                                                error={alert.cf_password ? true : false}
                                                helperText={alert.cf_password ? alert.cf_password : ''}
                                                required
                                                fullWidth
                                                name="cf_password"
                                                label="Confirm Password"
                                                type={show_password}
                                                id="cf_password"
                                                value={userData.cf_password}
                                                autoComplete="new-confirm_password"
                                                onChange={handleChangeInput}
                                            />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <FormControlLabel
                                                control={<Checkbox value={show_password} color="primary" onClick={(event => { if (show_password === 'password') { setShowPassword('text') } else { setShowPassword('password') } })} />}
                                                label="Show Password"
                                            />
                                        </Grid>
                                    </Grid>
                                    <Button
                                        type="submit"
                                        fullWidth
                                        variant="contained"
                                        sx={{ mt: 3, mb: 2 }}
                                    >
                                        Sumbit
                                    </Button>
                                    <Grid container justifyContent="center">
                                        <Grid item>
                                            <Link href="/" variant="body2">
                                                Already have an account? Login Now
                                            </Link>
                                        </Grid>
                                    </Grid>
                                </Box>
                                {alert.success ? handleNext() : ''}
                            </React.Fragment>
                        ) : (
                            <React.Fragment>
                                <Container sx={{ mt: 2 }}>
                                    <Alert severity="success">A OTP ( One Time Password ) has been sent to your mail.</Alert>
                                    <Box component="form" noValidate onSubmit={handleOTPFormSubmit} sx={{ mt: 3 }}>
                                        <Grid container spacing={2}>
                                            <Grid item xs={12}>
                                                <FormLabel component="legend" align="center">Please Enter the OTP to verify your account.</FormLabel>
                                            </Grid>
                                            <Grid item xs={12}>
                                                <div style={{ display: 'flex', justifyContent: 'center', fontSize: '32px' }}>
                                                    <OtpInput
                                                        value={userData.otp}
                                                        name='otp'
                                                        onChange={(otp) => handleChangeSelectInput('otp', otp)}
                                                        numInputs={6}
                                                        separator={<div style={{ margin: '0 5px' }}></div>}
                                                    />
                                                </div>
                                            </Grid>
                                            <Grid item xs={12}>
                                                <Button
                                                    type="submit"
                                                    fullWidth
                                                    variant="contained"
                                                    sx={{ mt: 3, mb: 2 }}
                                                >
                                                    Register Now
                                                </Button>
                                            </Grid>
                                        </Grid>
                                    </Box>
                                    <Grid item xs={12} sx={{ mt: 4 }}>
                                        <Button
                                            color="primary"
                                            endIcon={<SendIcon />}
                                            onClick={(e) => handleRegisterFormSubmit(e)}
                                        >Resend OTP</Button>
                                    </Grid>
                                </Container>
                            </React.Fragment>
                        )}
                    </React.Fragment>

                </Box>
                <Copyright sx={{ mt: 8, mb: 2 }} />
            </Container>
        </ThemeProvider>
    );
}
