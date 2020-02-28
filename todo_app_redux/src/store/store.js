import { createStore, combineReducers, applyMiddleware } from 'redux';
import todos from '../reducers/todos';
import logger from '../middleware/logger';

export default createStore(
  combineReducers({
    todos
  }),
  applyMiddleware(
    logger
  ),
);
