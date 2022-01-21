import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Link, Container, Typography } from "@mui/material";
import { styled } from '@mui/material/styles';

import SigninForm from './SigninForm';
import ForgotPassForm from './ForgotPassForm';
import ResetPassForm from './ResetPassForm';

import logoName from "../../../images/name.png";
import backTheme from "../../../images/backTheme4.png";
import illu from "../../../images/images.gif";

import { login, forgotPassOTPSendMail, forgotPassOTPVerify, resetPassword } from '../../../redux/actions/authAction';

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

export default function Signin() {
    const initialState = { email: '', password: '', otp: '', newPassword: '', new_cf_password: '' };
    const [userData, setUserData] = useState(initialState);
    const { email, password } = userData;

    const [activeFormShow, setActiveFormShow] = useState('SigninForm');

    const { auth } = useSelector(state => state);
    const dispatch = useDispatch();

    useEffect(() => {
        if (auth.token) window.location.href = `/`;
    }, [auth.token]);

    const handleChangeInput = e => {
        const { name, value } = e.target;
        setUserData({ ...userData, [name]: value });
    }

    const handleChangeSelectInput = (name, value) => {
        setUserData({ ...userData, [name]: value });
    };

    const handleSubmitLogin = e => {
        e.preventDefault();
        dispatch(login(userData));
    }

    const handleSubmitSentMail = e => {
        e.preventDefault();
        dispatch(forgotPassOTPSendMail(userData));
    }

    const handleSubmitVerifyOTP = e => {
        e.preventDefault();
        dispatch(forgotPassOTPVerify(userData));
    }

    const handleSubmitResetPass = (e) => {
        e.preventDefault();
        dispatch(resetPassword(userData));
    }

    return (<IndexBox>
        <Container maxWidth="xs">
            <Box sx={{ my: 4, p: 2, boxShadow: 3, borderRadius: 2, background: '#ffffff' }}>
                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                    <img style={{ width: '40%' }} src={logoName} alt='logo' />
                </Box>
                <Box sx={{ my: 2, display: 'flex', justifyContent: 'center' }}>
                    <img style={{ width: '40%' }} src={illu} alt='illumination' />
                </Box>
                {activeFormShow === 'SigninForm' ? <SigninForm
                    handleSubmitLogin={handleSubmitLogin}
                    userData={userData}
                    handleChangeInput={handleChangeInput}
                    setActiveFormShow={setActiveFormShow}
                    initialState={initialState}
                    setUserData={setUserData}
                /> : ''}
                {activeFormShow === 'ForgotPassForm' ? <ForgotPassForm
                    handleSentMail={handleSubmitSentMail}
                    userData={userData}
                    handleSubmitVerifyOTP={handleSubmitVerifyOTP}
                    handleChangeInput={handleChangeInput}
                    handleChangeSelectInput={handleChangeSelectInput}
                    setActiveFormShow={setActiveFormShow}
                /> : ''}
                {activeFormShow === 'ResetPassForm' ? <ResetPassForm
                    handleSubmitResetPass={handleSubmitResetPass}
                    userData={userData}
                    handleChangeInput={handleChangeInput}
                    handleChangeSelectInput={handleChangeSelectInput}
                    setActiveFormShow={setActiveFormShow}
                /> : ''}
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