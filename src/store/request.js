import axios from 'axios';
import store from './index';
import { actionCreators as commonActionCreators } from '../common/store';

const state = store.getState()

axios.interceptors.request.use(function (config) {
    // ny times api add authorization error, so hide it
    // config.headers.Authorization = "Bear " + state.user.accessToken;
    if(config.url !== '/auth/login' && config.url !== '/auth/register') {
      store.dispatch(commonActionCreators.setLoading());
    }
    
    return config;
  }, function (error) {
    return Promise.reject(error);
  });

axios.interceptors.response.use(function (response) {
    store.dispatch(commonActionCreators.removeLoading());
    return response;
  }, function (error) {
     
      if(error.response.config.url !== '/auth/login' && error.response.config.url !== '/auth/register') {
        store.dispatch(commonActionCreators.removeLoading());
        store.dispatch(commonActionCreators.setError(error));
      }
      
      return Promise.reject(error);
  });