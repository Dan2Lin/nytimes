import * as constants from './constants';

const defaultState = {
    title: "",
    content: "",
    author: "",
    date: ""
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
        default:
            return state;
    }
}

export default reducer;
