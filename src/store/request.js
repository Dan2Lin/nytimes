import axios from 'axios';
import store from './index';
import {actionCreators as commonActionCreators } from '../common/store';

const state = store.getState()

// Add a request interceptor
axios.interceptors.request.use(function (config) {
    config.headers.Authorization = "Bear " + state.user.accessToken;
    store.dispatch(commonActionCreators.setLoading());
    return config;
  }, function (error) {
    return Promise.reject(error);
  });

axios.interceptors.response.use(function (response) {
    store.dispatch(commonActionCreators.removeLoading());
    return response;
  }, function (error) {
      store.dispatch(commonActionCreators.removeLoading());
      store.dispatch(commonActionCreators.setError(error));
    return Promise.reject(error);
  });