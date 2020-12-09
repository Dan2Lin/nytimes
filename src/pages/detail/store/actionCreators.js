import axios from 'axios';
import * as constants from './constants';

const setArticleContent = (data) => ({
    type: constants.SET_ARTICLE,
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


