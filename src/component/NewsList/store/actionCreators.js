import axios from 'axios';
import * as constants from './constants';
import { apiUrls } from '../../../store/apiUrls';

export const setNewsList = (list) => ({
    type: constants.SET_NEWS_LIST,
    list
})

export const getList = () => {
    return (dispatch) => {
        axios.get(apiUrls.topStoryList)
            .then((res) => {
                dispatch(setNewsList(res.data.results));
            }).catch((err) => {
                console.log('error');
            })
    }
}