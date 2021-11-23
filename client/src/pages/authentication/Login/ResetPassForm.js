import React from 'react';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Box, TextField, Button, Container, FormLabel, Checkbox, Grid, Link, Typography } from '@mui/material';

import SendIcon from '@mui/icons-material/Send';

import { InputAdornment, IconButton } from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

import OtpInput from "../../../components/UI/OTPInput";

export default function ResetPassForm(props) {

    const [show_password, setShowPassword] = useState('password');

    return (
        <React.Fragment>
            <Typography component="h1" variant="h5" sx={{ mt: 3 }}>
                <div style={{ width: '100%' }} >Reset Password</div>
            </Typography>
            <Box component="form" noValidate onSubmit={props.handleSubmitLogin} sx={{ mt: 3 }}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <TextField
                            error={alert.newPassword ? true : false}
                            helperText={alert.newPassword ? alert.newPassword : ''}
                            required
                            fullWidth
                            name="newPassword"
                            label="New Password"
                            type={show_password}
                            id="newPassword"
                            value={props.userData.newPassword}
                            autoComplete="new-password"
                            onChange={props.handleChangeInput}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            error={alert.new_cf_password ? true : false}
                            helperText={alert.new_cf_password ? alert.new_cf_password : ''}
                            required
                            fullWidth
                            name="new_cf_password"
                            label="Confirm Password"
                            type={show_password}
                            id="new_cf_password"
                            value={props.userData.new_cf_password}
                            autoComplete="new-confirm_password"
                            onChange={props.handleChangeInput}
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

            </Box>
        </React.Fragment >
    );
}