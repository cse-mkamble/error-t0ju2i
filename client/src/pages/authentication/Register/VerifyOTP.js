import React from 'react';

import { Button, Grid, Box, Container, FormLabel, Alert } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';

import OtpInput from "../../../components/UI/OTPInput";

export default function VerifyOTP(props) {

    return (
        <React.Fragment>
            <Container sx={{ mt: 2 }}>
                <Alert severity="success">A OTP ( One Time Password ) has been sent to your mail.</Alert>
                <Box component="form" noValidate onSubmit={props.handleOTPFormSubmit} sx={{ mt: 3 }}>
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
                        startIcon={<SendIcon />}
                        onClick={(e) => props.handleRegisterFormSubmit(e)}
                    >Resend OTP</Button>
                </Grid>
            </Container>
        </React.Fragment>
    );
}