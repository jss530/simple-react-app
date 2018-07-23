import { combineReducers } from 'redux';
import StudiosReducer from './studios_reducer';
import ActiveStudioReducer from './active_studio_reducer';

const rootReducer = combineReducers({
  studios: StudiosReducer,
  activeStudio: ActiveStudioReducer
})

export default rootReducer;
