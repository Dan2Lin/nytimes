import axios from 'axios';
import * as constants from './constants';

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

export const signUp = (mail, pass) => {
    return (dispatch) => {
        axios.post('/auth/register', {
            email: mail,
            password: pass 
        }).then((res) => {
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
            })
        }
}



