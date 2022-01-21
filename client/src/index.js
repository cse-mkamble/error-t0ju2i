import { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Peer from 'peerjs';

import Alert from './components/Alert';

import PageRender from './HOC/PageRender';
import PrivateRouter from './HOC/PrivateRouter';

import Home from './pages/Home';
import Signin from './pages/Authentication/Signin';
import Signup from './pages/Authentication/Signup';

import { GLOBALTYPES } from './redux/actions/globalTypes';
import { refreshToken } from './redux/actions/authAction';
import { getPosts } from './redux/actions/postAction';
import { getSuggestions } from './redux/actions/suggestionsAction';
import { getNotifies } from './redux/actions/notifyAction';
import DataProvider from './redux/store';

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
  }, [dispatch]);

  useEffect(() => {
    if (auth.token) {
      dispatch(getPosts(auth.token));
      dispatch(getSuggestions(auth.token));
      dispatch(getNotifies(auth.token));
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

  return (<BrowserRouter>
    <Alert />
    <Switch>
      <Route exact path="/" component={auth.token ? Home : Signin} />
      <Route exact path="/signup" component={Signup} />
      <PrivateRouter exact path="/:page" component={PageRender} />
      <PrivateRouter exact path="/:page/:id" component={PageRender} />
    </Switch>
  </BrowserRouter>);
}

ReactDOM.render(
  <DataProvider>
    <MainRoute />
  </DataProvider>,
  document.getElementById('app-main')
);