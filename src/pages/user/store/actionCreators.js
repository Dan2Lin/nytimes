import axios from 'axios';
import * as constants from './constants';
import history from '../../../store/history';
import { actionCreators as commonActionCreators } from '../../../common/store';


const saveAccessToken = (token) => ({
    type: constants.SAVE_TOKEN,
    token
})

export const clearAccessToken = () => ({
    type: constants.CLEAR_TOKEN
})

export const setErrorMsg = (errorMsg) => ({
    type: constants.SET_ERROR_MSG,
    errorMsg
})

export const clearErrorMsg = () => ({
    type: constants.CLEAR_ERROR_MSG
})

export const signUp = (mail, pass) => {
    return (dispatch) => {
        axios.post('/auth/register', {
            email: mail,
            password: pass 
        }).then((res) => {
                history.push('/login');
                dispatch(saveAccessToken(res.data.access_token));
            }).catch((err) => {
                console.log('error');
            })
        }
}

export const signIn = (mail, pass) => {
    return (dispatch) => {
        axios.post('/auth/login', {
            email: mail,
            password: pass  
        }).then((res) => {
                dispatch(saveAccessToken(res.data.access_token));
                dispatch(commonActionCreators.changeLogin('logout'));
                history.push('/');
            }).catch((err) => {
                console.log('error');
                const error  =  err.response && err.response.data && err.response.data.message || 'Error: some thing went wrong.';
                dispatch(setErrorMsg(error));
            })
        }
}



