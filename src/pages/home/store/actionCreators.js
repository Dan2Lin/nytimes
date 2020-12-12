import axios from 'axios';
import * as constants from './constants';
import { apiUrls } from '../../../store/apiUrls';
import {actionCreators as commonActionCreators } from '../../../common/store';

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

const formatListData = (list) => {
    let newData = {};
    let newMeta = {};
    let newDocs = [];
    list.map(item => {
        let newItem = {};
        newItem.section = item.section;
        newItem.title = item.title;
        newItem.abstract = item.abstract;
        newItem.author = item.author || item.byline;
        newItem.published_date = new Date(item.published_date).toDateString();
        newItem.img = commonActionCreators.getMediaImage(item.multimedia);
        newDocs.push(newItem);
        return null;
    });

    newMeta.page = 1;
    newMeta.totalPage = 1;

    newData.list = newDocs;
    newData.meta = newMeta;

    return newData;
};

export const setNewsList = (data) => ({
    type: constants.SET_NEWS_LIST,
    list: data.list,
    meta: data.meta
})

export const getList = () => {
    return (dispatch) => {
        axios.get(apiUrls.topStoryList)
            .then((res) => {
                dispatch(setNewsList(formatListData(res.data.results)));
            }).catch((err) => {
                console.log('getList error');
            })
        }
}

export const getListByCategory = (cname) => {
    return (dispatch) => {
        axios.get(getApiName(cname))
            .then((res) => {
                dispatch(setNewsList(formatListData(res.data.results)));
            }).catch((err) => {
                console.log('getListByCategory error');
            })
    }
}

