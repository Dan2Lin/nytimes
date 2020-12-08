import axios from 'axios';
import * as constants from './constants';
import { apiUrls } from '../../../store/apiUrls';

const getApiName = (cname) => {
    switch (cname.toLowerCase()) {
        case 'world':
            return apiUrls.worldStoryList;
        case 'science':
            return apiUrls.scienceStoryList;
        case 'us':
            return apiUrls.usStoryList;
        case 'arts':
            return apiUrls.artsStoryList;
        default:
            break;
    }

    return apiUrls.topStoryList;
}

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

export const getListByCategory = (cname) => {
    return (dispatch) => {
        axios.get(getApiName(cname))
            .then((res) => {
                dispatch(setNewsList(res.data.results));
            }).catch((err) => {
                console.log('error');
            })
    }
}

