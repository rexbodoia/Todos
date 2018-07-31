import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import rootReducer from '../reducers/root_reducer.js';
import thunkYou from '../middleware/thunk';

const configStore = createStore(
  rootReducer,
  applyMiddleware(thunkYou, logger)
);

export default configStore;
