import axios from 'axios';
import { apiUrls } from '../../../store/apiUrls';
import { actionCreators as newsListActionCreators } from '../../NewsList/store';

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

export const getListByCategory = (cname) => {
    return (dispatch) => {
        axios.get(getApiName(cname))
            .then((res) => {
                dispatch(newsListActionCreators.setNewsList(res.data.results));
            }).catch((err) => {
                console.log('error');
            })
    }
}

