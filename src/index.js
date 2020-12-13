import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/js/bootstrap.bundle';
import { Provider } from 'react-redux';
import store from './store';
import './store/request';
import App from './App';
import Loading from './common/loading/Loading';
import RequestError from './common/error/RequestError';
import Header from './common/header/Header';
import './index.scss';

ReactDOM.render(
  <Provider store={store}>
      <Header></Header>
      <App />
      <Loading />
      <RequestError />
  </Provider>
  ,
  document.getElementById('root')
);
