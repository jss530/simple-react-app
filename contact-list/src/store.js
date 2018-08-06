
import {
  createStore,
  applyMiddleware,
  combineReducers
} from 'redux';
import thunk from 'redux-thunk';

import studiosReducer from './studios_reducer';
import activeStudioReducer from './active_studio_reducer';

const reducers = combineReducers({
  studios: studiosReducer,
  activeStudio: activeStudioReducer
});

const middleware = [thunk];

export default createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(...middleware)
);
