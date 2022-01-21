import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import Alert from './components/Alert';
import NotFound from './components/NotFound';

import Home from './pages/Home';
import Signin from './pages/Authentication/Signin';
import Signup from './pages/Authentication/Signup';

import DataProvider from './redux/store';

function MainRoute() {
  const { auth } = useSelector(state => state);
  const dispatch = useDispatch();

  return (<BrowserRouter>
    <Alert />
    <Routes>
      <Route path="/" element={auth.token ? <Home /> : <Signin />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  </BrowserRouter>);
}

ReactDOM.render(
  <DataProvider>
    <MainRoute />
  </DataProvider>,
  document.getElementById('app-main')
);