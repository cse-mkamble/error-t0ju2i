import React from 'react';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Box, TextField, Button, Container, FormLabel, Checkbox, Grid, Link, Typography } from '@mui/material';

import SendIcon from '@mui/icons-material/Send';

import { InputAdornment, IconButton } from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

import OtpInput from "../../../components/UI/OTPInput";

export default function ForgotPassForm(props) {

    const { auth, alert, fpass } = useSelector(state => state);

    const [sentMail, setSentMail] = useState(false);
    const [OTPInputShow, setOTPInputShow] = useState(false);

    return (
        <React.Fragment>
            <Typography component="h1" variant="h5" sx={{ mt: 3 }}>
                <div style={{ width: '100%' }} >Forgot Password</div>
            </Typography>
            <Box component="form" noValidate sx={{ mt: 3 }}>
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    autoFocus
                    onChange={props.handleChangeInput}
                    value={props.userData.email}
                />

                <Button
                    fullWidth
                    color="primary"
                    sx={{ mt: 1, mb: 2 }}
                    startIcon={<SendIcon />}
                    disabled={props.userData.email ? false : true}
                    onClick={(e) => {
                        props.handleSentMail(e);
                    }}
                >{sentMail ? 'Resend OTP' : 'Send OTP'}</Button>

                {fpass.success ?
                    <React.Fragment>
                        <Container sx={{ mt: 2 }}>
                            <Box component="form" sx={{ mt: 2 }}>
                                <Grid container spacing={2}>
                                    <Grid item xs={12}>
                                        <FormLabel component="legend" align="center">Please Enter the OTP to verify your account.</FormLabel>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <div style={{ display: 'flex', justifyContent: 'center', fontSize: '32px' }}>
                                            <OtpInput
                                                value={props.userData.otp}
                                                name='otp'
                                                onChange={(otp) => props.handleChangeSelectInput('otp', otp)}
                                                numInputs={6}
                                                separator={<div style={{ margin: '0 5px' }}></div>}
                                            />
                                        </div>
                                    </Grid>
                                    <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center' }} >
                                        <Button
                                            variant="contained"
                                            sx={{ mt: 2, mb: 2 }}
                                            onClick={(e) => {
                                                props.handleSubmitVerifyOTP(e);
                                            }}
                                        >
                                            Verify OTP
                                        </Button>
                                    </Grid>
                                </Grid>
                            </Box>
                        </Container>
                    </React.Fragment>
                    : ''
                }

                {fpass.otpVeriySuccess ? props.setActiveFormShow('ResetPassForm') : ''}

            </Box>
        </React.Fragment>
    );
}