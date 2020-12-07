import * as constants from './constants';

const defaultState = {
    list: []
}
const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case constants.SET_NEWS_LIST:
            return {
                list: action.list
            }
    
        default:
            break;
    }
    return state;
}

export default reducer;
