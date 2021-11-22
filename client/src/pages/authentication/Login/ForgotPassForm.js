import React from 'react';
import { useState, useEffect } from 'react';
import { Box, TextField, Button, FormControlLabel, Checkbox, Grid, Link } from '@mui/material';

import { InputAdornment, IconButton } from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

import OtpInput from "../../../components/UI/OTPInput";

export default function ForgotPassForm(props) {

    const [sentMail, setSentMail] = useState(false);
    const [OTPInputShow, setOTPInputShow] = useState(false);

    return (
        <React.Fragment>
            <Box component="form" noValidate sx={{ mt: 1 }}>
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
                    color="primary"
                    sx={{ mt: 2, mb: 2 }}
                    startIcon={<SendIcon />}
                    disabled={props.userData.email ? false : true}
                    onClick={(e) => {
                        props.handleSentMail(e);
                        setSentMail(false);
                        setOTPInputShow(true);
                    }}
                >{sentMail ? 'Resend OTP' : 'Send OTP'}</Button>

                {OTPInputShow ?
                    <React.Fragment>
                        <Container sx={{ mt: 2 }}>
                            <Box component="form" noValidate onSubmit={props.handleVerifyOTP} sx={{ mt: 2 }}>
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
                                    <Grid item xs={12}>
                                        <Button
                                            type="submit"
                                            variant="contained"
                                            sx={{ mt: 2, mb: 2 }}
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

            </Box>
        </React.Fragment>
    );
}