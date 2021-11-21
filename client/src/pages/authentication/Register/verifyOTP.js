import React from 'react';
import { useState } from "react";

import { Button, Grid, Box, Container, FormLabel, Typography, Alert, TextField } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';

import OtpInput from "../../../components/UI/OTPInput";

export default function VerifyOTP(props) {

    const [otp, setOTP] = useState('');

    return (
        <Container sx={{ mt: 2 }}>
            <Alert severity="success">A OTP ( One Time Password ) has been sent to your mail.</Alert>
            <Box component="form" noValidate onSubmit={props.handleSubmit} sx={{ mt: 3 }}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <FormLabel component="legend" align="center">Please Enter the OTP to verify your account.</FormLabel>
                    </Grid>
                    <Grid item xs={12}>
                        <div style={{ display: 'flex', justifyContent: 'center', fontSize: '26px' }}>
                            <OtpInput
                                value={otp}
                                onChange={(otp) => setOTP(otp)}
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
            <Grid container spacing={2}>
                <Grid item xs={6}>
                    <Button
                        color="primary"
                        onClick={() => props.handleBack()}
                    >Back</Button>
                </Grid>
                <Grid item xs={6}>
                    <Button
                        color="primary"
                        endIcon={<SendIcon />}
                        onClick={() => props.handleResendSentMail()}
                    >Resend OTP</Button>
                </Grid>
            </Grid>
        </Container>
    );
}