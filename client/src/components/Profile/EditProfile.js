import * as React from 'react';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
    Box,
    Button,
    IconButton,
    Grid,
    TextField,
    FormLabel,
    RadioGroup,
    FormControlLabel,
    Radio,
    InputAdornment
} from '@mui/material';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';

import { checkImage } from '../../utils/imageUpload';
import { GLOBALTYPES } from '../../redux/actions/globalTypes';
import { updateProfileUser } from '../../redux/actions/profileAction';

export default function EditProfile({ setOnEdit }) {
    const initState = {
        fullname: '', mobile: '', address: '', website: '', story: '', gender: ''
    }
    const [userData, setUserData] = useState(initState);
    const { fullname, mobile, address, website, story, gender } = userData;

    const [avatar, setAvatar] = useState('');

    const { auth, theme } = useSelector(state => state);
    const dispatch = useDispatch();

    useEffect(() => {
        setUserData(auth.user);
    }, [auth.user]);

    const changeAvatar = (e) => {
        const file = e.target.files[0];

        const err = checkImage(file);
        if (err) return dispatch({
            type: GLOBALTYPES.ALERT, payload: { error: err }
        });
        setAvatar(file);
    }

    const handleInput = e => {
        const { name, value } = e.target;
        setUserData({ ...userData, [name]: value });
    }

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(updateProfileUser({ userData, avatar, auth }));
    }

    return (<Box sx={{
        mt: 8,
        top: 0,
        left: 0,
        width: '100%',
        background: '#fff'
    }} >
        <Box sx={{ display: { xs: 'block', sm: 'none' } }}>
            <Box sx={{ direction: 'rtl' }}>
                <IconButton
                    size='small'
                    color='error'
                    onClick={() => setOnEdit(false)}
                    sx={{ mt: 1 }}
                ><CloseOutlinedIcon /></IconButton>
            </Box>
            <Box component="form" noValidate onSubmit={handleSubmit}>
                <div className="info_avatar">
                    <img src={avatar ? URL.createObjectURL(avatar) : auth.user.avatar}
                        alt="avatar" style={{ filter: theme ? 'invert(1)' : 'invert(0)' }} />
                    <span>
                        <i className="fas fa-camera" />
                        <p>Change</p>
                        <input type="file" name="file" id="file_up"
                            accept="image/*" onChange={changeAvatar} />
                    </span>
                </div>
                <Box sx={{ mt: 4 }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField
                                required
                                fullWidth
                                label="Full Name"
                                id="fullname"
                                name="fullname"
                                value={fullname}
                                onChange={handleInput}
                                InputProps={{
                                    endAdornment: <InputAdornment position="end">{fullname.length}/25</InputAdornment>,
                                }}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                required
                                fullWidth
                                label="Mobile"
                                id="mobile"
                                name="mobile"
                                value={mobile}
                                onChange={handleInput}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                required
                                fullWidth
                                label="Address"
                                id="address"
                                name="address"
                                value={address}
                                onChange={handleInput}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                required
                                fullWidth
                                label="Website"
                                id="website"
                                name="website"
                                value={website}
                                onChange={handleInput}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                required
                                fullWidth
                                multiline
                                rows={4}
                                label="Story"
                                id="story"
                                name="story"
                                value={story}
                                onChange={handleInput}
                                InputProps={{
                                    endAdornment: <InputAdornment position="end">{story.length}/200</InputAdornment>,
                                }}
                            />
                        </Grid>

                        <Grid item xs={12}>
                            <div style={{ padding: '10px', border: '1px solid #c4c4c4', borderRadius: '5px' }}>
                                <FormLabel component="legend">Gender</FormLabel>
                                <RadioGroup required style={{ justifyContent: 'space-between' }}
                                    fullWidth row aria-label="gender" defaultValue="female" name="gender" >
                                    <FormControlLabel value="female" control={<Radio />} label="Female" />
                                    <FormControlLabel value="male" control={<Radio />} label="Male" />
                                    <FormControlLabel value="other" control={<Radio />} label="Other" />
                                </RadioGroup>
                            </div>
                        </Grid>
                    </Grid>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 2 }}
                    >Save</Button>
                </Box>
            </Box>
        </Box>
        <Box sx={{ display: { xs: 'none', sm: 'block' }, padding: '10px 200px' }}>
            <Box sx={{ direction: 'rtl' }}>
                <IconButton
                    size='small'
                    color='error'
                    onClick={() => setOnEdit(false)}
                    sx={{ mt: 1 }}
                ><CloseOutlinedIcon /></IconButton>
            </Box>
            <Box component="form" noValidate onSubmit={handleSubmit}>
                <div className="info_avatar">
                    <img src={avatar ? URL.createObjectURL(avatar) : auth.user.avatar}
                        alt="avatar" style={{ filter: theme ? 'invert(1)' : 'invert(0)' }} />
                    <span>
                        <i className="fas fa-camera" />
                        <p>Change</p>
                        <input type="file" name="file" id="file_up"
                            accept="image/*" onChange={changeAvatar} />
                    </span>
                </div>
                <Box sx={{ mt: 4 }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField
                                required
                                fullWidth
                                label="Full Name"
                                id="fullname"
                                name="fullname"
                                value={fullname}
                                onChange={handleInput}
                                InputProps={{
                                    endAdornment: <InputAdornment position="end">{fullname.length}/25</InputAdornment>,
                                }}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                required
                                fullWidth
                                label="Mobile"
                                id="mobile"
                                name="mobile"
                                value={mobile}
                                onChange={handleInput}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                required
                                fullWidth
                                label="Address"
                                id="address"
                                name="address"
                                value={address}
                                onChange={handleInput}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                required
                                fullWidth
                                label="Website"
                                id="website"
                                name="website"
                                value={website}
                                onChange={handleInput}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                required
                                fullWidth
                                multiline
                                rows={4}
                                label="Story"
                                id="story"
                                name="story"
                                value={story}
                                onChange={handleInput}
                                InputProps={{
                                    endAdornment: <InputAdornment position="end">{story.length}/200</InputAdornment>,
                                }}
                            />
                        </Grid>

                        <Grid item xs={12}>
                            <div style={{ padding: '10px', border: '1px solid #c4c4c4', borderRadius: '5px' }}>
                                <FormLabel component="legend">Gender</FormLabel>
                                <RadioGroup required style={{ justifyContent: 'space-between' }}
                                    fullWidth row aria-label="gender" defaultValue="female" name="gender" >
                                    <FormControlLabel value="female" control={<Radio />} label="Female" />
                                    <FormControlLabel value="male" control={<Radio />} label="Male" />
                                    <FormControlLabel value="other" control={<Radio />} label="Other" />
                                </RadioGroup>
                            </div>
                        </Grid>
                    </Grid>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 2 }}
                    >Save</Button>
                </Box>
            </Box>
        </Box>
    </Box>);
}