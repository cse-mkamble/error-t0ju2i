import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Box, AppBar, Toolbar, IconButton, Typography, Badge } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';

const styles = {
  root: {
    flexGrow: 1,
  },
  show: {
    transform: 'translate(0, 0)',
    transition: 'transform .5s',
  },
  hide: {
    transform: 'translate(0, -70px)',
    transition: 'transform .5s',
  },
};

class TopBar extends React.PureComponent {
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

    return (
      <AppBar
        position="fixed"
        className={`${classes.root} ${this.getScrollClassName()}`}
      >
        <Toolbar variant="dense">
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={this.props.handleDrawerToggle}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="inherit" component="div">
            FunBook
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
          <Box component="div">
            <IconButton color="inherit" aria-label="search">
              <SearchIcon />
            </IconButton>
            <IconButton
              aria-label="show notifications"
              color="inherit"
            >
              <Badge badgeContent={17} color="error">
                <NotificationsIcon />
              </Badge>
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    );
  }
}

TopBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TopBar);