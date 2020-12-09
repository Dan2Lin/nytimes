import * as constants from './constants';

const defaultState = {
    inputValue: '',
    latestedSearch: '',
    searchHistory: JSON.parse(localStorage.getItem('searchHistory')) || [],
    focused: false
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
        default:
            return state;
    }
}

export default reducer;
