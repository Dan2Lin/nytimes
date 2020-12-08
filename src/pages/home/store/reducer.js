import * as constants from './constants';

const defaultState = {
    list: [],
    filterList: ['World', 'Science' , 'US', 'Arts']
}
const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case constants.SET_NEWS_LIST:
            return {
                ...state,
                list: action.list
            }
    
        default:
            return state;
    }
}

export default reducer;
