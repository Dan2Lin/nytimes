import axios from 'axios';
import * as constants from './constants';
import { apiUrls } from '../../../store/apiUrls';

const saveAccessToken = (token) => ({
    type: constants.SAVE_TOKEN,
    token
})

export const signUp = (mail, pass) => {
    return (dispatch) => {
        axios.post('/auth/register', {
            email: mail,
            password: pass 
        }).then((res) => {
                dispatch(saveAccessToken(res.data.access_token));
                
                //dispatch(setNewsList(formatListData(res.data.results)));
            }).catch((err) => {
                console.log('error');
            })
        }
}

export const signIn = (name, pass) => {
    return (dispatch) => {
        axios.post(apiUrls.login)
            .then((res) => {
                console.log(res);
                //dispatch(setNewsList(formatListData(res.data.results)));
            }).catch((err) => {
                console.log('error');
            })
        }
}



