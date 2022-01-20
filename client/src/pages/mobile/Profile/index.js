import * as React from 'react';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Box, CircularProgress, IconButton, Divider } from '@mui/material';
import GridOnOutlinedIcon from '@mui/icons-material/GridOnOutlined';
import TableRowsOutlinedIcon from '@mui/icons-material/TableRowsOutlined';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';

import Info from '../../../components/Profile/Info';
import PostsInGrid from '../../../components/Profile/PostsInGrid';
import Posts from '../../../components/Profile/Posts';
import Saved from '../../../components/Profile/Saved';

import { getProfileUsers } from '../../../redux/actions/profileAction';

export default function Profile() {
    const { profile, auth } = useSelector(state => state);
    const dispatch = useDispatch();
    const { id } = useParams();
    const [activeTab, setActiveTab] = useState('GridViewPost');

    useEffect(() => {
        if (profile.ids.every(item => item !== id)) {
            dispatch(getProfileUsers({ id, auth }));
        }
    }, [id, auth, dispatch, profile.ids]);

    return (<Box>
        <Info auth={auth} profile={profile} dispatch={dispatch} id={id} />
        <Box>
            <Divider />
            <Box sx={{ maxWidth: '500px', m: 'auto', py: '10px' }}>
                {auth.user._id === id ? <Box sx={{ display: 'flex', justifyContent: 'space-around' }}>
                    <IconButton
                        color={activeTab === 'GridViewPost' ? 'primary' : 'default'}
                        onClick={() => setActiveTab('GridViewPost')} ><GridOnOutlinedIcon /></IconButton>
                    <IconButton
                        color={activeTab === 'RowViewPost' ? 'primary' : 'default'}
                        onClick={() => setActiveTab('RowViewPost')} ><TableRowsOutlinedIcon /></IconButton>
                    <IconButton
                        color={activeTab === 'ViewBookmark' ? 'primary' : 'default'}
                        onClick={() => setActiveTab('ViewBookmark')} ><BookmarkBorderOutlinedIcon /></IconButton>
                </Box> : <Box sx={{ display: 'flex', justifyContent: 'space-around' }}>
                    <IconButton
                        color={activeTab === 'GridViewPost' ? 'primary' : 'default'}
                        onClick={() => setActiveTab('GridViewPost')} ><GridOnOutlinedIcon /></IconButton>
                    <IconButton
                        color={activeTab === 'RowViewPost' ? 'primary' : 'default'}
                        onClick={() => setActiveTab('RowViewPost')} ><TableRowsOutlinedIcon /></IconButton>
                </Box>}
            </Box>
            <Divider />
            {profile.loading ? <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <CircularProgress />
            </Box> : <>
                {activeTab === 'GridViewPost' && <PostsInGrid auth={auth} profile={profile} dispatch={dispatch} id={id} />}
                {activeTab === 'RowViewPost' && <Posts auth={auth} profile={profile} dispatch={dispatch} id={id} />}
                {activeTab === 'ViewBookmark' && <Saved auth={auth} dispatch={dispatch} />}
            </>}
        </Box>
    </Box>);
}