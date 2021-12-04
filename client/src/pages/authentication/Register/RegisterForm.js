import React from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';

import { Box, Button, Grid, TextField, Checkbox, Radio, RadioGroup, FormLabel, FormControlLabel, Link } from '@mui/material';

export default function RegisterForm(props) {

    const { auth, alert } = useSelector(state => state);

    const [show_password, setShowPassword] = useState('password');

    return (
        <React.Fragment>
            <Box component="form" noValidate onSubmit={props.handleRegisterFormSubmit} sx={{ mt: 3 }}>
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
                            value={props.userData.fullname}
                            autoFocus
                            onChange={props.handleChangeInput}
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
                            value={props.userData.username}
                            autoComplete="user-name"
                            onChange={props.handleChangeInput}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <div style={{ padding: '10px', border: '1px solid #c4c4c4', borderRadius: '5px' }}>
                            <FormLabel component="legend">Gender</FormLabel>
                            <RadioGroup required style={{ justifyContent: 'space-between' }}
                                fullWidth row aria-label="gender" defaultValue={props.userData.gender} name="gender" onChange={props.handleChangeInput} >
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
                            value={props.userData.email}
                            autoComplete="email"
                            onChange={props.handleChangeInput}
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
                            value={props.userData.password}
                            autoComplete="new-password"
                            onChange={props.handleChangeInput}
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
                            value={props.userData.cf_password}
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
                <Grid container justifyContent="center">
                    <Grid item>
                        <Link href="/" variant="body2">
                            Already have an account? Login Now
                        </Link>
                    </Grid>
                </Grid>
            </Box>
            {alert.success ? props.handleNext() : ''}
        </React.Fragment>
    )
}
