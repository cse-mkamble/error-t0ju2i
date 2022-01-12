import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { Box } from '@mui/material';

import DataProvider from './redux/store';

import MobileHome from './pages/mobile/Home';
import DesktopHome from './pages/desktop/Home';
import Login from './pages/authentication/Login';
import Register from './pages/authentication/Register';

function MainRoute() {
  const { auth } = useSelector(state => state);

  return (<Box>
    <Box sx={{ display: { xs: 'none', sm: 'block' } }} >
      <Router>
        <Switch>
          <Route exact path="/" component={auth.token ? DesktopHome : Login} />
          <Route exact path="/register" component={Register} />
        </Switch>
      </Router>
    </Box>
    <Box sx={{ display: { xs: 'flex', sm: 'none' } }} >
      <Router>
        <Switch>
          <Route exact path="/" component={auth.token ? MobileHome : Login} />
          <Route exact path="/register" component={Register} />
        </Switch>
      </Router>
    </Box>
  </Box>);
}

ReactDOM.render(
  <DataProvider>
    <MainRoute />
  </DataProvider>,
  document.getElementById('app-main')
);