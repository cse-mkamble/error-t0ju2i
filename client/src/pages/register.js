import * as React from 'react';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormLabel from '@mui/material/FormLabel';

import { registerSendMail } from '../../../redux/actions/authAction';

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

    const { auth, alert } = useSelector(state => state)
    const dispatch = useDispatch()
    const history = useHistory()

    const initialState = {
        fullname: '', username: '', email: '', password: '', cf_password: '', gender: ''
    }
    const [userData, setUserData] = useState(initialState)
    const { fullname, username, email, password, cf_password } = userData

    const [typePass, setTypePass] = useState(false)
    const [typeCfPass, setTypeCfPass] = useState(false)

    useEffect(() => {
        if (auth.token) history.push("/")
    }, [auth.token, history])


    const handleChangeInput = e => {
        const { name, value } = e.target
        setUserData({ ...userData, [name]: value })
    }

    const handleSubmit = e => {
        e.preventDefault();
        // console.log(userData)
        dispatch(registerSendMail(userData));
    }


    const [show_password, setShowPassword] = useState('password');

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

                    <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
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
                                    autoComplete="user-name"
                                    onChange={handleChangeInput}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <div style={{ padding: '10px', border: '1px solid #c4c4c4', borderRadius: '5px' }}>
                                    <FormLabel component="legend">Gender</FormLabel>
                                    <RadioGroup required style={{ justifyContent: 'space-between' }}
                                        fullWidth row aria-label="gender" defaultValue="female" name="gender" onChange={handleChangeInput} >
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
                            Register Now
                        </Button>
                        <Grid container justifyContent="center">
                            <Grid item>
                                <Link href="/" variant="body2">
                                    Already have an account? Login Now
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
                <Copyright sx={{ mt: 8, mb: 2 }} />
            </Container>
        </ThemeProvider>
    );
}
