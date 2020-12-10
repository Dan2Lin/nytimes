import * as constants from './constants';

const defaultState = {
    accessToken: localStorage.getItem('accessToken') || '',
}

const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case constants.SAVE_TOKEN:
            return {
                ...state,
                accessToken: action.token
            }
    
        default:
            return state;
    }
}

export default reducer;
