import * as React from 'react';
import { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Peer from 'peerjs';
import io from 'socket.io-client';

import DataProvider from './redux/store';
import './styles/global.css';

import Alert from './components/Alert';
import NotFound from './components/NotFound';

import PrivateRouter from './customRouter/PrivateRouter';

import Home from './pages/Home';
import Login from './pages/authentication/Login';
import Register from './pages/authentication/Register';

import Watch from './pages/Watch';
import Explore from './pages/Explore';
import Post from './pages/Post/[id]';

import { refreshToken } from './redux/actions/authAction';
import { getPosts } from './redux/actions/postAction';
import { getSuggestions } from './redux/actions/suggestionsAction';
import { GLOBALTYPES } from './redux/actions/globalTypes';
import { getNotifies } from './redux/actions/notifyAction';

import SocketClient from './SocketClient';

import './styles/global.css';

function MainRoute() {
  const { auth } = useSelector(state => state);
  const dispatch = useDispatch();

  useEffect(() => {
    // document.addEventListener('contextmenu', (e) => {
    //   e.preventDefault();
    // });
    dispatch(refreshToken());
    const socket = io();
    dispatch({ type: GLOBALTYPES.SOCKET, payload: socket });
    return () => socket.close();
  }, [dispatch])

  useEffect(() => {
    if (auth.token) {
      dispatch(getPosts(auth.token))
      dispatch(getSuggestions(auth.token))
      dispatch(getNotifies(auth.token))
    }
  }, [dispatch, auth.token]);

  useEffect(() => {
    if (!("Notification" in window)) {
      alert("This browser does not support desktop notification");
    }
    else if (Notification.permission === "granted") { }
    else if (Notification.permission !== "denied") {
      Notification.requestPermission().then(function (permission) {
        if (permission === "granted") { }
      });
    }
  }, []);

  useEffect(() => {
    const newPeer = new Peer(undefined, {
      path: '/', secure: true
    });
    dispatch({ type: GLOBALTYPES.PEER, payload: newPeer });
  }, [dispatch]);

  return (<Router>
    <Alert />
    {auth.token && <SocketClient />}
    <Switch>
      <Route exact path="/" component={auth.token ? Home : Login} />
      <Route exact path="/register" component={Register} />
      <PrivateRouter exact path="/watch" component={Watch} />
      <PrivateRouter exact path="/explore" component={Explore} />
      <PrivateRouter exact path="/post/:id" component={Post} />
      <Route exact path="*" component={NotFound} />
    </Switch>
  </Router>);
}

ReactDOM.render(
  <DataProvider>
    <MainRoute />
  </DataProvider>,
  document.getElementById('app-main')
);