import axios from 'axios';
import * as constants from './constants';
import { apiUrls } from '../../../store/apiUrls';

const setArticleContent = (data) => ({
    type: constants.SET_ARTICLE,
    data
})

const setComments = (data) => ({
    type: constants.SET_COMMENTS,
    data
})

export const getArticle = () => {
    return (dispatch) => {
        axios.get('/api/articleDetail.json')
            .then((res) => {
                dispatch(setArticleContent(res.data.data));
            }).catch((err) => {
                console.log('error');
            })
    }
}

export const getComments = (url) => {
    return (dispatch) => {
        axios.get('/api/comments.json') // this is a mock api as the nyapi error when proxy request
            .then((res) => {
                console.log('succ');
                console.log(res.data.results);
                dispatch(setComments(res.data.results.comments));
            }).catch((err) => {
                console.log('error');
            })
    }
}


