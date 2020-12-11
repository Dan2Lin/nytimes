import axios from 'axios';
import * as constants from './constants';
import History from '../../../store/history';

const saveAccessToken = (token) => ({
    type: constants.SAVE_TOKEN,
    token
})

const getToken = () => {
    let token = localStorage.getItem('accessToken');
    if(!token) {
        token = this.refreshToken();
    }
    return token;
}

const refreshToken = () => {
    // refresh token 
}

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
                History.push('/login');
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
        }, {
            "headers": {
                authorization: "Bearer " + getToken() 
            }
        }).then((res) => {
                console.log('loginSuccess');
                console.log(res);
                //dispatch(setNewsList(formatListData(res.data.results)));
            }).catch((err) => {
                console.log('error');
                console.log(err);
            })
        }
}



