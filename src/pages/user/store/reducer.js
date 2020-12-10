import * as constants from './constants';

const defaultState = {
    accessToken: localStorage.getItem('accessToken') || '',
}

const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case constants.SAVE_TOKEN:
            localStorage.setItem('accessToken', action.token);
            return {
                ...state,
                accessToken: action.token
            }
    
        default:
            return state;
    }
}

export default reducer;
