import { data } from 'jquery';
import * as constants from './constants';

const defaultState = {
    title: "",
    content: "",
    author: "",
    date: "",
    comments: []
}
const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case constants.SET_ARTICLE: 
            return {
                ...state,
                title: action.data.title,
                content: action.data.content,
                author: action.data.author,
                date: new Date(action.data.publishDate).toDateString()
            }
        case constants.SET_COMMENTS:
            return {
                ...state,
                comments: action.data
            }
        default:
            return state;
    }
}

export default reducer;
