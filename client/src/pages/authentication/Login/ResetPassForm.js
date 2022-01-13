import * as React from "react";
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Box, TextField, Button, FormControlLabel, Checkbox, Grid, Typography } from '@mui/material';

export default function ResetPassForm(props) {

    const { alert } = useSelector(state => state);
    const [show_password, setShowPassword] = useState('password');

    return (<Box>
        <Typography variant="div" component="h3" sx={{ textAlign: 'center' }}>Reset Password</Typography>
        <Box component="form" noValidate onSubmit={props.handleSubmitResetPass} sx={{ mt: 3 }}>
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
    </Box>);
}