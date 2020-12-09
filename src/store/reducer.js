import { combineReducers }  from 'redux';
import { reducer as HomeReducer } from '../pages/home/store';
import { reducer as DetailReducer } from '../pages/detail/store';
import { reducer as CommonReducer } from '../common/store';

const reducer = combineReducers({
    home: HomeReducer,
    detail: DetailReducer,
    common: CommonReducer
})

export default reducer;