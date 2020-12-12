import axios from 'axios';
import  { apiUrls } from '../../store/apiUrls';
import * as constants from './constants';
import {actionCreators as homeActionCreators } from '../../pages/home/store';

const setSearchHistory = (query) => ({
    type: constants.SET_SEARCH_HISTORY,
    query
});

const formatListData = (list) => {
    let newData = {};
    let newMeta = {};
    let newDocs = [];
    list.docs.map(item => {
        let newItem = {};
        newItem.section = item.section_name;
        newItem.title = item.headline.print_headline || item.headline.main;
        newItem.abstract = item.abstract;
        newItem.author = item.byline.original || '';
        newItem.published_date = new Date(item.pub_date).toDateString();
        newItem.img = getMediaImage(item.multimedia);
        newDocs.push(newItem);
        return null;
    });

    newMeta.page = (list.meta.offset / 10) + 1 || 1;
    newMeta.totalPage = Math.ceil(list.meta.hits / 10 ) > 10 ? 10 : Math.ceil(list.meta.hits / 10 );

    newData.list = newDocs;
    newData.meta = newMeta;

    return newData;
};

const searchArticle = (query, page = 0) => {
    // Pagination component page number start with 1 but api start with 0
    if(page > 0) {
        page-=1
    }
    return (dispatch) => {
        axios.get(apiUrls.searchArticles + "&q=" + query + "&page=" + page)
            .then((res) => {
                dispatch(homeActionCreators.setNewsList(formatListData(res.data.response)));
            }).catch((err) => {
                console.log('error');
            })
    }
};

export const changeLogin = (data) => ({
    type: constants.CHNAGE_LOGIN,
    data
})

export const setLoading = () => ({
    type: constants.SET_LOADING
})

export const removeLoading = () => ({
    type: constants.REMOVE_LOADING
})

export const setError = (data) => ({
    type: constants.SET_ERROR,
    data
})

export const removeError = () => ({
    type: constants.REMOVE_ERROR
})

export const getMediaImage = (mediaArr = [] , format = ['mediumThreeByTwo210', 'wide', 'mediumSquare149']) => {
    return mediaArr.length && mediaArr.find(item => {
        if(item.url.indexOf('http') < 0) {
            item.url = constants.STATIC_RESOURCE_URL + item.url;
        }
        return item.subtype === format[0] || item.subtype === format[1] ||  item.subtype === format[2] || item.format === format[0];
    })
}

export const setFocus = (isFocus) => ({
    type: constants.SET_FOCUS,
    isFocus
})

export const setInputValue = (value) => ({
    type: constants.SET_INPUT_VALUE,
    value
})

export const searchArticleAction = (query, page) => {
    return (dispatch) => {
        dispatch(setSearchHistory(query));
        dispatch(searchArticle(query, page));
    }
}


