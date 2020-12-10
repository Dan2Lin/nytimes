import * as constants from './constants';

const defaultState = {
    errorMsg: '',
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
        case constants.SET_ERROR_MSG:
            return {
                ...state,
                errorMsg: action.errorMsg
            }
        case constants.CLEAR_ERROR_MSG:
            return {
                ...state,
                errorMsg: ''
            }
    
        default:
            return state;
    }
}

export default reducer;
