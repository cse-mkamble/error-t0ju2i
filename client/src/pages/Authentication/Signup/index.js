import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Box, Link, Container, Typography } from "@mui/material";
import { styled } from '@mui/material/styles';

import RegisterForm from './RegisterForm';
import VerifyOTP from './VerifyOTP';

import logoName from "../../../images/name.png";
import backTheme from "../../../images/backTheme4.png";
import illu from "../../../images/images.jpeg";

import { registerSendMail, register } from '../../../redux/actions/authAction';

function Copyright() {
    return (
        <Typography variant="body2" color="text.secondary" sx={{ textAlign: 'center' }} >
            {'Copyright © '}
            <Link color="inherit" href="">
                FunBook
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const IndexBox = styled(Box)(({ }) => ({
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    minHeight: '100vh',
    backgroundImage: `url(${backTheme})`,
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed',
    backgroundSize: '100%'
}));

export default function Signup() {
    const initialState = {
        fullname: '', username: '', email: '', password: '', cf_password: '', gender: 'female', otp: ''
    };

    const [activeStep, setActiveStep] = useState(0);

    const { auth, alert } = useSelector(state => state);
    const dispatch = useDispatch();

    const [userData, setUserData] = useState(initialState);
    const { fullname, username, email, password, cf_password, gender, otp } = userData;

    useEffect(() => {
        if (auth.token) window.location.href = `/`;
    }, [auth.token])

    const handleChangeInput = e => {
        const { name, value } = e.target
        setUserData({ ...userData, [name]: value })
    }

    const handleChangeSelectInput = (name, value) => {
        setUserData({ ...userData, [name]: value });
    };

    const handleRegisterFormSubmit = e => {
        e.preventDefault();
        console.log(userData);
        dispatch(registerSendMail(userData));
    }

    const handleOTPFormSubmit = e => {
        e.preventDefault();
        console.log(userData);
        dispatch(register(userData));
    }

    const handleNext = () => {
        setActiveStep(activeStep + 1);
    };

    const handleBack = () => {
        setActiveStep(activeStep - 1);
    };

    return (<IndexBox>
        <Container component="main" maxWidth="xs">
            <Box sx={{ my: 4, p: 2, boxShadow: 3, borderRadius: 2, background: '#ffffff' }}>
                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                    <img style={{ width: '40%' }} src={logoName} alt='logo' />
                </Box>
                <Box sx={{ my: 2, display: 'flex', justifyContent: 'center' }}>
                    <img style={{ width: '40%' }} src={illu} alt='illumination' />
                </Box>
                <Box>
                    {activeStep === 0 ? (<RegisterForm
                        handleNext={handleNext}
                        handleChangeInput={handleChangeInput}
                        userData={userData}
                        handleRegisterFormSubmit={handleRegisterFormSubmit}
                    />) : (<VerifyOTP
                        handleOTPFormSubmit={handleOTPFormSubmit}
                        userData={userData}
                        handleChangeSelectInput={handleChangeSelectInput}
                        handleRegisterFormSubmit={handleRegisterFormSubmit}
                    />)}
                </Box>
            </Box>
        </Container>
        <Box
            component="footer"
            sx={{
                py: 3,
                px: 2,
                mt: 'auto',
                backgroundColor: (theme) =>
                    theme.palette.mode === 'light'
                        ? theme.palette.grey[200]
                        : theme.palette.grey[800],
            }}
        >
            <Container maxWidth="xs">
                <Copyright />
            </Container>
        </Box>
    </IndexBox>);
}
