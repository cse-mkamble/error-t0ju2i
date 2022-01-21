import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Box, AppBar, Toolbar, IconButton, Fab, Avatar, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import VideoLibraryOutlinedIcon from '@mui/icons-material/VideoLibraryOutlined';
import ExploreOutlinedIcon from '@mui/icons-material/ExploreOutlined';

import HomeIcon from '@mui/icons-material/Home';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import ExploreIcon from '@mui/icons-material/Explore';

const styles = {
    root: {
        flexGrow: 1,
    },
    show: {
        transform: 'translate(0, 0)',
        transition: 'transform .5s',
    },
    hide: {
        transform: 'translate(0, 70px)',
        transition: 'transform .5s',
    },
};

class BottomBar extends React.PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            shouldShow: null,
        };

        this.lastScroll = null;

        this.handleScroll = this.handleScroll.bind(this);
        // Alternatively, you can throttle scroll events to avoid
        // updating the state too often. Here using lodash.
        // this.handleScroll = _.throttle(this.handleScroll.bind(this), 100);
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll, { passive: true });
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll() {
        const lastScroll = window.scrollY;

        if (lastScroll === this.state.lastScroll) {
            return;
        }

        const shouldShow =
            this.lastScroll !== null ? lastScroll < this.lastScroll : null;

        if (shouldShow !== this.state.shouldShow) {
            this.setState(prevState => ({
                ...prevState,
                shouldShow,
            }));
        }

        this.lastScroll = lastScroll;
    }

    getScrollClassName() {
        if (this.state.shouldShow === null) {
            return '';
        }

        return this.state.shouldShow
            ? this.props.classes.show
            : this.props.classes.hide;
    }

    render() {
        const { classes } = this.props;

        return (<Box sx={{ flexGrow: 1 }}>
            <AppBar
                position="fixed"
                color="inherit"
                className={`${classes.root} ${this.getScrollClassName()}`}
                sx={{ top: 'auto', bottom: 0 }}
            >
                <Toolbar>
                    <Box sx={{ display: 'grid' }}>
                        <IconButton color="default" aria-label="Home"
                            onClick={() => {
                                window.location.href = `/`;
                            }}>
                            {this.props.currentTab.Tab === 'Home' ? <HomeIcon /> : <HomeOutlinedIcon />}
                        </IconButton>
                        <Typography sx={{ color: '#757575', fontSize: '14px' }} >Home</Typography>
                    </Box>
                    <Box sx={{ flexGrow: 1 }} />
                    <Box sx={{ display: 'grid' }}>
                        <IconButton color="default" aria-label="Watch"
                            onClick={() => {
                                window.location.href = `/watch`;
                            }}>
                            {this.props.currentTab.Tab === 'Watch' ? <VideoLibraryIcon /> : <VideoLibraryOutlinedIcon />}
                        </IconButton>
                        <Typography sx={{ color: '#757575', fontSize: '14px' }} >Watch</Typography>
                    </Box>
                    <Box sx={{ flexGrow: 1 }} />
                    <Fab color="primary" aria-label="add">
                        <AddIcon />
                    </Fab>
                    <Box sx={{ flexGrow: 1 }} />
                    <Box sx={{ display: 'grid' }}>
                        <IconButton color="default" aria-label="Explore"
                            onClick={() => {
                                window.location.href = `/explore`;
                            }}>
                            {this.props.currentTab.Tab === 'Explore' ? <ExploreIcon /> : <ExploreOutlinedIcon />}
                        </IconButton>
                        <Typography sx={{ color: '#757575', fontSize: '14px' }} >Explore</Typography>
                    </Box>
                    <Box sx={{ flexGrow: 1 }} />
                    <Box sx={{ display: 'grid' }}>
                        <IconButton color="default" aria-label="Account Of Current User"
                            onClick={() => window.location.href = `/profile/${this.props.auth.user._id}`}>
                            <Avatar src={this.props.auth.user.avatar} sx={{ width: 24, height: 24 }} />
                        </IconButton>
                        <Typography sx={{ color: '#757575', fontSize: '14px' }} >Profile</Typography>
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>);
    }
}

BottomBar.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(BottomBar);