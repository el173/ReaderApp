import {combineReducers} from 'redux';

import mainViewReducer from './MainView';
import detailsViewReducer from './DetailView';

export default combineReducers({mainViewReducer, detailsViewReducer});
