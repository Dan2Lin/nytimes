import * as constants from './constants';

const defaultState = {
    inputValue: '',
    latestedSearch: '',
    searchHistory: JSON.parse(localStorage.getItem('searchHistory')) || [],
    focused: false,
    isLoading: false,
    loginOrLogout: localStorage.getItem('login_status') || 'login',
    errorMsg: {}
}

const setSearchHistory = (state, query) => {
    let searchArray = state.searchHistory;
    if(searchArray.findIndex(item => (query === item)) !== -1) {
        return searchArray;
    }

    if(searchArray.length < 5 && query) {
        searchArray.push(query);
    } else {
        searchArray.shift();
        searchArray.push(query);
    }
    
    localStorage.setItem('searchHistory', JSON.stringify(searchArray));
    return searchArray;
}

const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case constants.SET_SEARCH_HISTORY: 
            const newSearchHistory = setSearchHistory(state, action.query);
            return {
                ...state,
                searchHistory: newSearchHistory,
                latestedSearch: action.query,
                inputValue : ''
            }
        case constants.SET_FOCUS: 
            return {
                ...state,
                focused : action.isFocus
            }
        case constants.SET_INPUT_VALUE:
            return {
                ...state,
                inputValue : action.value
            }
        case constants.SET_LOADING:
            return {
                ...state,
                isLoading : true
            }
        case constants.REMOVE_LOADING:
            return {
                ...state,
                isLoading : false
            }
        case constants.SET_ERROR:
            return {
                ...state,
                errorMsg : action.data
            }
        case constants.REMOVE_ERROR:
            return {
                ...state,
                errorMsg : ''
            }
        case constants.CHNAGE_LOGIN:
            localStorage.setItem('login_status', action.data);
            return {
                ...state,
                loginOrLogout : action.data
            }   
        default:
            return state;
    }
}

export default reducer;
