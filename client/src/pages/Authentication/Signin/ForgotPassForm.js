import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Box, TextField, Button, Container, FormLabel, Grid, Typography } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

import OtpInput from "../../../components/UI/OTPInput";

export default function ForgotPassForm(props) {

    const { fpass } = useSelector(state => state);
    const [sentMail, setSentMail] = useState(false);

    return (<Box>
        <Typography variant="div" component="h3" sx={{ textAlign: 'center' }}>Forgot Password</Typography>
        <Box component="form" noValidate sx={{ mt: 2 }}>
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

            {fpass.success ? <Box>
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
            </Box> : ''}
            {fpass.otpVeriySuccess ? props.setActiveFormShow('ResetPassForm') : ''}
        </Box>
    </Box>);
}