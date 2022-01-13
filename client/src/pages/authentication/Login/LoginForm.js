import * as React from "react";
import { useState, useEffect } from 'react';

import { Box, TextField, Button, FormControlLabel, Checkbox, Grid, Link, Typography } from '@mui/material';
import { InputAdornment, IconButton } from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';


export default function LoginForm(props) {

    useEffect(() => {
        props.setUserData(props.initialState);
    }, []);

    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => setShowPassword(!showPassword);
    const handleMouseDownPassword = () => setShowPassword(!showPassword);

    const [rememberMe, setRememberMe] = useState(false);

    return (<Box>
        <Typography variant="div" component="h3" sx={{ textAlign: 'center' }}>Login to Continue</Typography>
        <Box component="form" onSubmit={props.handleSubmitLogin} noValidate sx={{ mt: 1 }}>
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

            <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type={showPassword ? "text" : "password"}
                id="password"
                autoComplete="current-password"
                onChange={props.handleChangeInput}
                value={props.userData.password}
                InputProps={{ // <-- This is where the toggle button is added.
                    endAdornment: (
                        <InputAdornment position="end">
                            <IconButton
                                aria-label="toggle password visibility"
                                onClick={handleClickShowPassword}
                                onMouseDown={handleMouseDownPassword}
                            >
                                {showPassword ? <Visibility /> : <VisibilityOff />}
                            </IconButton>
                        </InputAdornment>
                    )
                }}
            />

            <Grid container justifyContent="flex-end">
                <Grid item>
                    <Button
                        color="primary"
                        sx={{ mb: 1 }}
                        onClick={() => props.setActiveFormShow('ForgotPassForm')}
                    >
                        Forgot password
                    </Button>
                </Grid>
            </Grid>

            <FormControlLabel
                control={<Checkbox
                    value={rememberMe}
                    color="primary"
                    onClick={((event) => {
                        if (rememberMe) {
                            setRememberMe(false)
                        } else {
                            setRememberMe(true)
                        }
                    })}
                />}
                label="Remember Me"
            />

            <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                disabled={props.userData.email && props.userData.password ? false : true}
            >
                Login Now
            </Button>
            <Grid container justifyContent="center" >
                <Grid item sx={{ mt: 3 }}>
                    <Link href="/register" variant="body2">
                        {"Don't have an account? Register Now"}
                    </Link>
                </Grid>
            </Grid>
        </Box>
    </Box>);
}