import {
  createStore,
  applyMiddleware,
  combineReducers
} from 'redux';
import thunk from 'redux-thunk';
import DEFAULT from './state/state';

import activeStudio from './reducers/active_studio_reducer';
import studios from './reducers/studios_reducer';

const reducers = combineReducers({
  activeStudio,
  studios
});
const middleware = [thunk];

export default createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(...middleware)
);
