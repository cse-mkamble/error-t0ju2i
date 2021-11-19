import * as React from 'react';
import { useState, useEffect } from 'react';
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

    const [show_password, setShowPassword] = useState('password');

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        // eslint-disable-next-line no-console
        console.log({
            email: data.get('email'),
            password: data.get('password'),
        });
    };

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
                            <img style={{ width: '58px', height: '58px' }} src='https://res.cloudinary.com/mayurkamble/image/upload/v1636887085/icon/bptheulgfynt1npaui36.png' />
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
                                    autoComplete="given-name"
                                    name="firstName"
                                    required
                                    fullWidth
                                    id="firstName"
                                    label="Full Name"
                                    autoFocus
                                />
                            </Grid>

                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    id="lastName"
                                    label="username"
                                    name="lastName"
                                    autoComplete="family-name"
                                />
                            </Grid>

                            <Grid item xs={12}>
                                <div style={{ padding: '10px', border: '1px solid #c4c4c4', borderRadius: '5px' }}>
                                    <FormLabel component="legend">Gender</FormLabel>
                                    <RadioGroup required style={{ justifyContent: 'space-between' }}
                                        fullWidth row aria-label="gender" name="row-radio-buttons-group">
                                        <FormControlLabel value="female" control={<Radio />} label="Female" />
                                        <FormControlLabel value="male" control={<Radio />} label="Male" />
                                        <FormControlLabel value="other" control={<Radio />} label="Other" />
                                    </RadioGroup>
                                </div>
                            </Grid>

                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email Address"
                                    name="email"
                                    autoComplete="email"
                                />
                            </Grid>

                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    name="password"
                                    label="Password"
                                    type={show_password}
                                    id="password"
                                    autoComplete="new-password"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    name="confirm_password"
                                    label="Confirm Password"
                                    type={show_password}
                                    id="confirm_password"
                                    autoComplete="new-confirm_password"
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



// import React, { useState, useEffect } from 'react'
// import { useSelector, useDispatch } from 'react-redux'
// import { useHistory, Link } from 'react-router-dom'
// import { register } from '../redux/actions/authAction'

// const Register = () => {
//     const { auth, alert } = useSelector(state => state)
//     const dispatch = useDispatch()
//     const history = useHistory()

//     const initialState = {
//         fullname: '', username: '', email: '', password: '', cf_password: '', gender: 'male'
//     }
//     const [userData, setUserData] = useState(initialState)
//     const { fullname, username, email, password, cf_password } = userData

//     const [typePass, setTypePass] = useState(false)
//     const [typeCfPass, setTypeCfPass] = useState(false)

//     useEffect(() => {
//         if (auth.token) history.push("/")
//     }, [auth.token, history])


//     const handleChangeInput = e => {
//         const { name, value } = e.target
//         setUserData({ ...userData, [name]: value })
//     }

//     const handleSubmit = e => {
//         e.preventDefault()
//         dispatch(register(userData))
//     }

//     return (
//         <div className="auth_page">
//             <form onSubmit={handleSubmit}>

//                 <div style={{ textAlign: "center", margin: '20px' }} >
//                     <div style={{ display: "flex", color: '#636060' }} className="navbar-brand p-0 m-0">
//                         <div style={{
//                             textAlign: "center",
//                             display: 'flex',
//                             justifyContent: 'center',
//                             alignItems: 'center'
//                         }} >
//                             <img style={{ width: '64px', height: '64px' }} src="https://res.cloudinary.com/mayurkamble/image/upload/v1625477279/icon/ReachMe2_pnioxk.png" />
//                         </div>
//                         <div>
//                             <h1 style={{ margin: '0' }}>ReachMe</h1>
//                             <h6 style={{ margin: '0' }}>Social Networking Platforms</h6>
//                         </div>
//                     </div>
//                 </div>

//                 <div className="form-group">
//                     <label htmlFor="fullname">Full Name</label>
//                     <input type="text" className="form-control" id="fullname" name="fullname"
//                         onChange={handleChangeInput} value={fullname}
//                         style={{ background: `${alert.fullname ? '#fd2d6a14' : ''}` }} />

//                     <small className="form-text text-danger">
//                         {alert.fullname ? alert.fullname : ''}
//                     </small>
//                 </div>

//                 <div className="form-group">
//                     <label htmlFor="username">User Name</label>
//                     <input type="text" className="form-control" id="username" name="username"
//                         onChange={handleChangeInput} value={username.toLowerCase().replace(/ /g, '')}
//                         style={{ background: `${alert.username ? '#fd2d6a14' : ''}` }} />

//                     <small className="form-text text-danger">
//                         {alert.username ? alert.username : ''}
//                     </small>
//                 </div>

//                 <div className="form-group">
//                     <label htmlFor="exampleInputEmail1">Email address</label>
//                     <input type="email" className="form-control" id="exampleInputEmail1" name="email"
//                         onChange={handleChangeInput} value={email}
//                         style={{ background: `${alert.email ? '#fd2d6a14' : ''}` }} />

//                     <small className="form-text text-danger">
//                         {alert.email ? alert.email : ''}
//                     </small>
//                 </div>

//                 <div className="form-group">
//                     <label htmlFor="exampleInputPassword1">Password</label>

//                     <div className="pass">

//                         <input type={typePass ? "text" : "password"}
//                             className="form-control" id="exampleInputPassword1"
//                             onChange={handleChangeInput} value={password} name="password"
//                             style={{ background: `${alert.password ? '#fd2d6a14' : ''}` }} />

//                         <small onClick={() => setTypePass(!typePass)}>
//                             {typePass ? 'Hide' : 'Show'}
//                         </small>
//                     </div>

//                     <small className="form-text text-danger">
//                         {alert.password ? alert.password : ''}
//                     </small>
//                 </div>

//                 <div className="form-group">
//                     <label htmlFor="cf_password">Confirm Password</label>

//                     <div className="pass">

//                         <input type={typeCfPass ? "text" : "password"}
//                             className="form-control" id="cf_password"
//                             onChange={handleChangeInput} value={cf_password} name="cf_password"
//                             style={{ background: `${alert.cf_password ? '#fd2d6a14' : ''}` }} />

//                         <small onClick={() => setTypeCfPass(!typeCfPass)}>
//                             {typeCfPass ? 'Hide' : 'Show'}
//                         </small>
//                     </div>

//                     <small className="form-text text-danger">
//                         {alert.cf_password ? alert.cf_password : ''}
//                     </small>
//                 </div>

//                 <div className="row justify-content-between mx-0 mb-1">
//                     <label htmlFor="male">
//                         Male: <input type="radio" id="male" name="gender"
//                             value="male" defaultChecked onChange={handleChangeInput} />
//                     </label>

//                     <label htmlFor="female">
//                         Female: <input type="radio" id="female" name="gender"
//                             value="female" onChange={handleChangeInput} />
//                     </label>

//                     <label htmlFor="other">
//                         Other: <input type="radio" id="other" name="gender"
//                             value="other" onChange={handleChangeInput} />
//                     </label>
//                 </div>

//                 <button type="submit" className="btn btn-primary w-100">
//                     Register
//                 </button>

//                 <p className="my-2">
//                     Already have an account? <Link to="/" style={{ color: "crimson" }}>Login Now</Link>
//                 </p>
//             </form>
//         </div>
//     )
// }

// export default Register
