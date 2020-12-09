import * as constants from './constants';

const defaultState = {
    list: [],
    meta: {
        page: 1,
        totalPage: 1
    },
    filterList: ['World', 'Science' , 'US', 'Arts']
}
const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case constants.SET_NEWS_LIST:
            return {
                ...state,
                list: action.list,
                meta: action.meta
            }
    
        default:
            return state;
    }
}

export default reducer;
