import { combineReducers }  from 'redux';
import { reducer as newsListReducer } from '../component/NewsList/store';
import { reducer as categoryListReducer } from '../component/CategoryFilter/store';

const reducer = combineReducers({
    newsList: newsListReducer,
    categoryList: categoryListReducer
})

export default reducer;