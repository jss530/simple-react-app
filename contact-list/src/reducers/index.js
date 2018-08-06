import { combineReducers } from 'redux';
import studiosReducer from './studios_reducer';
import activeStudioReducer from './active_studio_reducer';

const rootReducer = combineReducers({
  studios: studiosReducer,
  activeStudio: activeStudioReducer
})

export default rootReducer;
